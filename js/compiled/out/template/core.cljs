(ns template.core
  (:require
    [sablono.core]
    [template.ui :as ui]
    [template.util :as util]
    [template.state :as state]))

(enable-console-print!)

(defn render-app [dom-node]
  "Return an atom watcher fn
  to render the root React app component to dom-node."
  (fn [_ a o n]
    (.render js/ReactDOM (ui/page a) dom-node)))

(defn main []
  "Conditionally start the app based on whether the #main-app-area
  node is on the page."
  (when-let [node (.getElementById js/document "main-app-area")]
    (do
      (add-watch state/app-state :render
                 (render-app node))
      (.render js/ReactDOM (ui/page state/app-state) node))))

(main)
(let [mem (atom {:x 0
                 :delta 0})]
  (set! (.-ontouchstart js/document)
        #(let [x (-> % (.-touches) (aget 0) (.-pageX))]
           (reset! mem {:x x :delta 0})))
  (set! (.-ontouchmove js/document)
        #(let [x (-> % (.-touches) (aget 0) (.-pageX))
               delta (- (@mem :x) x)]
           (reset! mem {:x x :delta delta})))
  (set! (.-ontouchend js/document)
        #(let [delta (@mem :delta)]
           (cond
              (<= 0 delta) (util/go-to-next state/app-state)
              (> -5 delta) (util/go-to-previous state/app-state)))))
(set! (.-onkeydown js/document)
      #(cond
         (or (= 37 (.-keyCode %)) (= 8 (.-keyCode %))) (util/go-to-previous state/app-state)
         (or (= 39 (.-keyCode %)) (= 32 (.-keyCode %))) (util/go-to-next state/app-state)
         (= 13 (.-keyCode %)) (swap! state/app-state update :menu-visible not)))
