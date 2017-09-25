(ns template.util
  (:require
    [template.pages :refer [groups]]))

;; Get info about group/slide
(defn get-group
  ([state]
   (let [slide (get @state :slide-shown)]
     (get-group state slide)))
  ([state slide]
   (get groups (first slide))))
(defn get-slide
  ([state]
   (get-slide state (get @state :slide-shown)))
  ([state slide]
   (get-in groups [(first slide) 1 (second slide)])))

;; Get id about next/previous slide
(defn whos-previous
  ([state]
   (whos-previous state (get @state :slide-shown)))
  ([state slide]
   (let [[this-group this-slide this-pause] slide
         prev-group (- this-group 1)
         prev-slide (- this-slide 1)
         nb-prev-group (count (get-in groups [prev-group 1]))]
     (cond
       (< 0 this-pause) [this-group this-slide (dec this-pause)]
       (get-slide state [this-group prev-slide]) [this-group prev-slide (get-in (get-slide state [this-group prev-slide]) [1 :nb-pauses])]
       (get-slide state [prev-group (- nb-prev-group 1)]) [prev-group (- nb-prev-group 1) (get-in (get-slide state [prev-group (- nb-prev-group 1)]) [1 :nb-pauses])]))))
(defn whos-next
  ([state]
   (whos-next state (get @state :slide-shown)))
  ([state slide]
   (let [[this-group this-slide this-pause] slide
         this-nb-pause (get-in (get-slide state [this-group this-slide]) [1 :nb-pauses])
         next-group (+ this-group 1)
         next-slide (+ this-slide 1)]
     (cond
       (< this-pause this-nb-pause) [this-group this-slide (inc this-pause)]
       (get-slide state [this-group next-slide]) [this-group next-slide 0]
       (get-slide state [next-group 0]) [next-group 0 0]))))

;; Go to spesific slide or next/previous
(defn go-to [state slide]
  (let [current-slide (get @state :slide-shown)]
    (swap! state #(-> %
                      (assoc :slide-shown slide)
                      (assoc :anim (if (= 1 (compare current-slide slide))
                                     "previous"
                                     "next"))))))
(defn go-to-previous [state]
  (when-let [slide (whos-previous state)]
    (go-to state slide)))
(defn go-to-next [state]
  (when-let [slide (whos-next state)]
    (go-to state slide)))
