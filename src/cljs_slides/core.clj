(ns cljs-slides.core
  (:require [clojure.walk :refer [postwalk]]))

;; UI Helper
(defn opacity-fn [params]
  (if (map? params)
    (let [from-pause (get params :from 0)
          to-pause (get params :to 10000)]
      {:class `(if (or (< ~'pause ~from-pause)
                       (> ~'pause ~to-pause))
                 "visible"
                 "hidden")
       :style {:transition "opacity .3s ease-in-out"
               :opacity `(if (or (< ~'pause ~from-pause)
                                 (> ~'pause ~to-pause))
                           0
                           1)}})
    params))

;; UI Elements
(defn center [params classname & objs]
  [:div {:style {:flex-grow 1
                 :display "flex"
                 :flex-direction "column"
                 :justify-content "center"
                 :align-items "center"}}
   objs])
(defn question-block [title params & objs]
  [:div (opacity-fn params)
   [:div {:style {:background-color  "#fcbe13"
                  :padding "10px"
                  :font-size "24px"
                  :color "white"}}
    title]
   [:div {:style {:flex-grow 1
                  :display "flex"
                  :flex-direction "column"
                  :padding "20px"
                  :box-shadow "0 4px 2px -3px"
                  :background-color "#fcd123"}}
    (vec objs)]])
(defn block [title params & objs]
  [:div (opacity-fn params)
   [:div {:style {:background-color  "#039088"
                  :padding "10px"
                  :font-size "24px"
                  :color "white"}}
    title]
   [:div {:style {:flex-grow 1
                  :display "flex"
                  :flex-direction "column"
                  :color "white"
                  :padding "20px"
                  :box-shadow "0 4px 2px -3px"
                  :background-color "#02a89e"}}
    (vec objs)]])
(defn rows [params classname & objs]
  [:div (merge-with merge
                    {:style {:flex-grow 1
                             :display "flex"
                             :flex-direction "column"
                             :justify-content "space-around"
                             :align-items "stretch"}}
                    (opacity-fn params))
     (mapv
       (fn [x] [:div {:style {:display "flex"
                              :flex-direction "column"
                              :flex-grow 1
                              :margin "20px 0px"}}
                x])
       objs)])
(defn cols [params classname & objs]
  [:div (merge-with merge
                    {:style {:flex-grow 1
                             :display "flex"
                             :justify-content "space-around"
                             :align-items "stretch"}}
                    (opacity-fn params))
   (mapv
     (fn [x] [:div {:style {:display "flex"
                            :flex-direction "column"
                            :flex-grow 1
                            :margin "0px 20px"}}
              x])
     objs)])
(defn link [params url]
  [:a (merge-with merge
                  {:href url}
                  (opacity-fn params))
   url])
(defn img [[width height] params url]
  [:img (merge-with merge
                    (opacity-fn params)
                    {:src url}
                    (cond-> {}
                      width (assoc :width width)
                      height (assoc :height height)))])
(defn format-component [component-type params & component-children]
  (vec (concat [component-type (opacity-fn params)]
               component-children)))

;; Helpers
(defn count-pauses [node]
  (->> node
       (map #(cond
               (vector? %) (count-pauses %)
               (list? %) (count-pauses %)
               (= % '<->) 1
               :else 0))
       (reduce + 0)))
(defn list-specified-breakpoints [node]
  (let [res (and (symbol? node)
                 (or (re-matches #"<(\d+)-(\d+)>" (str node))
                     (re-matches #"<-(\d+)>" (str node))
                     (re-matches #"<(\d+)->" (str node))))]
    (cond
      (vector? node) (->> node
                          (keep list-specified-breakpoints)
                          (mapcat identity)
                          (vec))
      (and (symbol? node) res) (mapv read-string (rest res))
      :else nil)))
(defn component? [x]
  (and (vector? x)
       (< 0 (count x))
       (keyword? (first x))))

;; Slides modifiers
(defn assign-value-pause
  ([node]
   (last (assign-value-pause 1 node)))
  ([pause node]
   (cond
     (vector? node) (reduce (fn [[old-pause buf] element]
                              (let [[new-pause new-element] (assign-value-pause old-pause element)]
                                [new-pause (vec (concat buf [new-element]))]))
                            [pause []]
                            node)
     (= '<-> node) [(inc pause) (symbol (str "<" pause "->"))]
     :else [pause node])))
(defn assign-visibility
  ([node]
   (last (assign-visibility 0 node)))
  ([pause node]
   (let [pause? (and (symbol? node) (re-matches #"<(\d*)->" (str node)))
         pause-from (when pause? (read-string (second pause?)))
         visibility-map {:from pause}]
     (cond
       pause? [pause-from nil]
       (component? node) (let [component-type (first node)
                               component-children (rest node)]
                           (reduce (fn [[old-pause buf] element]
                                     (let [[new-pause new-element] (assign-visibility old-pause element)]
                                       [new-pause (vec (concat buf [new-element]))]))
                                   [pause [component-type visibility-map]]
                                   component-children))
       (vector? node) (reduce (fn [[old-pause buf] element]
                                (let [[new-pause new-element] (assign-visibility old-pause element)]
                                  [new-pause (vec (concat buf [new-element]))]))
                              [pause []]
                              node)
       :else [pause node]))))

;; Main Macro
(defmacro defslide
  [slide-name slide-raw]
  (let [nb-pause (count-pauses slide-raw)
        specified-breakpoints (list-specified-breakpoints slide-raw)
        breakpoints (->> (into (range (inc nb-pause)) specified-breakpoints)
                         (into #{})
                         (into [])
                         (sort)
                         (vec))
        slide-fn (symbol (str slide-name "-fn"))
        slide (->> slide-raw
                   (assign-value-pause)
                   (assign-visibility)
                   (postwalk #(if (component? %) (filterv some? %) %))
                   (postwalk #(let [rows? (and (component? %) (re-matches #"rows(\..*)?" (name (first %))))
                                    cols? (and (component? %) (re-matches #"cols(\..*)?" (name (first %))))
                                    img? (and (component? %) (re-matches #"img(?:<(\d*)x(\d*)>)?(\..*)?" (name (first %))))
                                    block? (and (component? %) (re-matches #"block<(.*)>(\..*)?" (name (first %))))
                                    question? (and (component? %) (re-matches #"question<(.*)>(\..*)?" (name (first %))))
                                    link? (and (component? %) (re-matches #"(link|a)" (name (first %))))
                                    ;; center? (and (component? %) (re-matches #"center(\..*)?" (name (first %))))
                                    ]
                                (cond
                                  rows? (apply rows (last rows?) (rest %))
                                  cols? (apply cols (last cols?) (rest %))
                                  ;; center? (apply center (last center?) (rest %))
                                  img? (apply img [(nth img? 1) (nth img? 2)] (rest %))
                                  link? (apply link (rest %))
                                  block? (apply block (clojure.string/replace (second block?) "_" " ")
                                                (rest %))
                                  question? (apply question-block (clojure.string/replace (second question?) "_" " ")
                                                   (rest %))
                                  (component? %) (apply format-component %)
                                  :else %))))]
    `(def ~slide-name {:slide (fn [~'pause] ~slide)
                       :breakpoints ~breakpoints
                       :nb-pauses ~(dec (count breakpoints))})))
