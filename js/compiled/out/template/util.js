// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.util');
goog.require('cljs.core');
goog.require('template.pages');
template.util.get_group = (function template$util$get_group(var_args){
var args29412 = [];
var len__19529__auto___29415 = arguments.length;
var i__19530__auto___29416 = (0);
while(true){
if((i__19530__auto___29416 < len__19529__auto___29415)){
args29412.push((arguments[i__19530__auto___29416]));

var G__29417 = (i__19530__auto___29416 + (1));
i__19530__auto___29416 = G__29417;
continue;
} else {
}
break;
}

var G__29414 = args29412.length;
switch (G__29414) {
case 1:
return template.util.get_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29412.length)].join('')));

}
});

template.util.get_group.cljs$core$IFn$_invoke$arity$1 = (function (state){
var slide = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429));
return template.util.get_group.call(null,state,slide);
});

template.util.get_group.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.get.call(null,template.pages.groups,cljs.core.first.call(null,slide));
});

template.util.get_group.cljs$lang$maxFixedArity = 2;
template.util.get_slide = (function template$util$get_slide(var_args){
var args29419 = [];
var len__19529__auto___29422 = arguments.length;
var i__19530__auto___29423 = (0);
while(true){
if((i__19530__auto___29423 < len__19529__auto___29422)){
args29419.push((arguments[i__19530__auto___29423]));

var G__29424 = (i__19530__auto___29423 + (1));
i__19530__auto___29423 = G__29424;
continue;
} else {
}
break;
}

var G__29421 = args29419.length;
switch (G__29421) {
case 1:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29419.length)].join('')));

}
});

template.util.get_slide.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.get_slide.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.get_slide.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.get_in.call(null,template.pages.groups,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,slide),(1),cljs.core.second.call(null,slide)], null));
});

template.util.get_slide.cljs$lang$maxFixedArity = 2;
template.util.whos_previous = (function template$util$whos_previous(var_args){
var args29426 = [];
var len__19529__auto___29430 = arguments.length;
var i__19530__auto___29431 = (0);
while(true){
if((i__19530__auto___29431 < len__19529__auto___29430)){
args29426.push((arguments[i__19530__auto___29431]));

var G__29432 = (i__19530__auto___29431 + (1));
i__19530__auto___29431 = G__29432;
continue;
} else {
}
break;
}

var G__29428 = args29426.length;
switch (G__29428) {
case 1:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29426.length)].join('')));

}
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_previous.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var vec__29429 = slide;
var this_group = cljs.core.nth.call(null,vec__29429,(0),null);
var this_slide = cljs.core.nth.call(null,vec__29429,(1),null);
var this_pause = cljs.core.nth.call(null,vec__29429,(2),null);
var prev_group = (this_group - (1));
var prev_slide = (this_slide - (1));
var nb_prev_group = cljs.core.count.call(null,cljs.core.get_in.call(null,template.pages.groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(1)], null)));
if(((0) < this_pause)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,this_slide,(this_pause - (1))], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide,cljs.core.get_in.call(null,template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"nb-pauses","nb-pauses",-133868075)], null))], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1))], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1)),cljs.core.get_in.call(null,template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"nb-pauses","nb-pauses",-133868075)], null))], null);
} else {
return null;
}
}
}
});

template.util.whos_previous.cljs$lang$maxFixedArity = 2;
template.util.whos_next = (function template$util$whos_next(var_args){
var args29434 = [];
var len__19529__auto___29438 = arguments.length;
var i__19530__auto___29439 = (0);
while(true){
if((i__19530__auto___29439 < len__19529__auto___29438)){
args29434.push((arguments[i__19530__auto___29439]));

var G__29440 = (i__19530__auto___29439 + (1));
i__19530__auto___29439 = G__29440;
continue;
} else {
}
break;
}

var G__29436 = args29434.length;
switch (G__29436) {
case 1:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29434.length)].join('')));

}
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_next.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var vec__29437 = slide;
var this_group = cljs.core.nth.call(null,vec__29437,(0),null);
var this_slide = cljs.core.nth.call(null,vec__29437,(1),null);
var this_pause = cljs.core.nth.call(null,vec__29437,(2),null);
var this_nb_pause = cljs.core.get_in.call(null,template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,this_slide], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"nb-pauses","nb-pauses",-133868075)], null));
var next_group = (this_group + (1));
var next_slide = (this_slide + (1));
if((this_pause < this_nb_pause)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,this_slide,(this_pause + (1))], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,next_slide], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,next_slide,(0)], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_group,(0)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_group,(0),(0)], null);
} else {
return null;
}
}
}
});

template.util.whos_next.cljs$lang$maxFixedArity = 2;
template.util.go_to = (function template$util$go_to(state,slide){
var current_slide = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429));
return cljs.core.swap_BANG_.call(null,state,((function (current_slide){
return (function (p1__29442_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__29442_SHARP_,new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),slide),new cljs.core.Keyword(null,"anim","anim",-1276068045),((cljs.core._EQ_.call(null,(1),cljs.core.compare.call(null,current_slide,slide)))?"previous":"next"));
});})(current_slide))
);
});
template.util.go_to_previous = (function template$util$go_to_previous(state){
var temp__4657__auto__ = template.util.whos_previous.call(null,state);
if(cljs.core.truth_(temp__4657__auto__)){
var slide = temp__4657__auto__;
return template.util.go_to.call(null,state,slide);
} else {
return null;
}
});
template.util.go_to_next = (function template$util$go_to_next(state){
var temp__4657__auto__ = template.util.whos_next.call(null,state);
if(cljs.core.truth_(temp__4657__auto__)){
var slide = temp__4657__auto__;
return template.util.go_to.call(null,state,slide);
} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1506396710945