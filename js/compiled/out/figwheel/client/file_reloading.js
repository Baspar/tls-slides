// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18459__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18459__auto__){
return or__18459__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18459__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24482_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24482_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24487 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24488 = null;
var count__24489 = (0);
var i__24490 = (0);
while(true){
if((i__24490 < count__24489)){
var n = cljs.core._nth.call(null,chunk__24488,i__24490);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24491 = seq__24487;
var G__24492 = chunk__24488;
var G__24493 = count__24489;
var G__24494 = (i__24490 + (1));
seq__24487 = G__24491;
chunk__24488 = G__24492;
count__24489 = G__24493;
i__24490 = G__24494;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24487);
if(temp__4657__auto__){
var seq__24487__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24487__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24487__$1);
var G__24495 = cljs.core.chunk_rest.call(null,seq__24487__$1);
var G__24496 = c__19270__auto__;
var G__24497 = cljs.core.count.call(null,c__19270__auto__);
var G__24498 = (0);
seq__24487 = G__24495;
chunk__24488 = G__24496;
count__24489 = G__24497;
i__24490 = G__24498;
continue;
} else {
var n = cljs.core.first.call(null,seq__24487__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24499 = cljs.core.next.call(null,seq__24487__$1);
var G__24500 = null;
var G__24501 = (0);
var G__24502 = (0);
seq__24487 = G__24499;
chunk__24488 = G__24500;
count__24489 = G__24501;
i__24490 = G__24502;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24541_24548 = cljs.core.seq.call(null,deps);
var chunk__24542_24549 = null;
var count__24543_24550 = (0);
var i__24544_24551 = (0);
while(true){
if((i__24544_24551 < count__24543_24550)){
var dep_24552 = cljs.core._nth.call(null,chunk__24542_24549,i__24544_24551);
topo_sort_helper_STAR_.call(null,dep_24552,(depth + (1)),state);

var G__24553 = seq__24541_24548;
var G__24554 = chunk__24542_24549;
var G__24555 = count__24543_24550;
var G__24556 = (i__24544_24551 + (1));
seq__24541_24548 = G__24553;
chunk__24542_24549 = G__24554;
count__24543_24550 = G__24555;
i__24544_24551 = G__24556;
continue;
} else {
var temp__4657__auto___24557 = cljs.core.seq.call(null,seq__24541_24548);
if(temp__4657__auto___24557){
var seq__24541_24558__$1 = temp__4657__auto___24557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24541_24558__$1)){
var c__19270__auto___24559 = cljs.core.chunk_first.call(null,seq__24541_24558__$1);
var G__24560 = cljs.core.chunk_rest.call(null,seq__24541_24558__$1);
var G__24561 = c__19270__auto___24559;
var G__24562 = cljs.core.count.call(null,c__19270__auto___24559);
var G__24563 = (0);
seq__24541_24548 = G__24560;
chunk__24542_24549 = G__24561;
count__24543_24550 = G__24562;
i__24544_24551 = G__24563;
continue;
} else {
var dep_24564 = cljs.core.first.call(null,seq__24541_24558__$1);
topo_sort_helper_STAR_.call(null,dep_24564,(depth + (1)),state);

var G__24565 = cljs.core.next.call(null,seq__24541_24558__$1);
var G__24566 = null;
var G__24567 = (0);
var G__24568 = (0);
seq__24541_24548 = G__24565;
chunk__24542_24549 = G__24566;
count__24543_24550 = G__24567;
i__24544_24551 = G__24568;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24545){
var vec__24547 = p__24545;
var x = cljs.core.nth.call(null,vec__24547,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24547,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24547,x,xs,get_deps__$1){
return (function (p1__24503_SHARP_){
return clojure.set.difference.call(null,p1__24503_SHARP_,x);
});})(vec__24547,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24581 = cljs.core.seq.call(null,provides);
var chunk__24582 = null;
var count__24583 = (0);
var i__24584 = (0);
while(true){
if((i__24584 < count__24583)){
var prov = cljs.core._nth.call(null,chunk__24582,i__24584);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24585_24593 = cljs.core.seq.call(null,requires);
var chunk__24586_24594 = null;
var count__24587_24595 = (0);
var i__24588_24596 = (0);
while(true){
if((i__24588_24596 < count__24587_24595)){
var req_24597 = cljs.core._nth.call(null,chunk__24586_24594,i__24588_24596);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24597,prov);

var G__24598 = seq__24585_24593;
var G__24599 = chunk__24586_24594;
var G__24600 = count__24587_24595;
var G__24601 = (i__24588_24596 + (1));
seq__24585_24593 = G__24598;
chunk__24586_24594 = G__24599;
count__24587_24595 = G__24600;
i__24588_24596 = G__24601;
continue;
} else {
var temp__4657__auto___24602 = cljs.core.seq.call(null,seq__24585_24593);
if(temp__4657__auto___24602){
var seq__24585_24603__$1 = temp__4657__auto___24602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24585_24603__$1)){
var c__19270__auto___24604 = cljs.core.chunk_first.call(null,seq__24585_24603__$1);
var G__24605 = cljs.core.chunk_rest.call(null,seq__24585_24603__$1);
var G__24606 = c__19270__auto___24604;
var G__24607 = cljs.core.count.call(null,c__19270__auto___24604);
var G__24608 = (0);
seq__24585_24593 = G__24605;
chunk__24586_24594 = G__24606;
count__24587_24595 = G__24607;
i__24588_24596 = G__24608;
continue;
} else {
var req_24609 = cljs.core.first.call(null,seq__24585_24603__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24609,prov);

var G__24610 = cljs.core.next.call(null,seq__24585_24603__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24585_24593 = G__24610;
chunk__24586_24594 = G__24611;
count__24587_24595 = G__24612;
i__24588_24596 = G__24613;
continue;
}
} else {
}
}
break;
}

var G__24614 = seq__24581;
var G__24615 = chunk__24582;
var G__24616 = count__24583;
var G__24617 = (i__24584 + (1));
seq__24581 = G__24614;
chunk__24582 = G__24615;
count__24583 = G__24616;
i__24584 = G__24617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24581);
if(temp__4657__auto__){
var seq__24581__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24581__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24581__$1);
var G__24618 = cljs.core.chunk_rest.call(null,seq__24581__$1);
var G__24619 = c__19270__auto__;
var G__24620 = cljs.core.count.call(null,c__19270__auto__);
var G__24621 = (0);
seq__24581 = G__24618;
chunk__24582 = G__24619;
count__24583 = G__24620;
i__24584 = G__24621;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24581__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24589_24622 = cljs.core.seq.call(null,requires);
var chunk__24590_24623 = null;
var count__24591_24624 = (0);
var i__24592_24625 = (0);
while(true){
if((i__24592_24625 < count__24591_24624)){
var req_24626 = cljs.core._nth.call(null,chunk__24590_24623,i__24592_24625);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24626,prov);

var G__24627 = seq__24589_24622;
var G__24628 = chunk__24590_24623;
var G__24629 = count__24591_24624;
var G__24630 = (i__24592_24625 + (1));
seq__24589_24622 = G__24627;
chunk__24590_24623 = G__24628;
count__24591_24624 = G__24629;
i__24592_24625 = G__24630;
continue;
} else {
var temp__4657__auto___24631__$1 = cljs.core.seq.call(null,seq__24589_24622);
if(temp__4657__auto___24631__$1){
var seq__24589_24632__$1 = temp__4657__auto___24631__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24589_24632__$1)){
var c__19270__auto___24633 = cljs.core.chunk_first.call(null,seq__24589_24632__$1);
var G__24634 = cljs.core.chunk_rest.call(null,seq__24589_24632__$1);
var G__24635 = c__19270__auto___24633;
var G__24636 = cljs.core.count.call(null,c__19270__auto___24633);
var G__24637 = (0);
seq__24589_24622 = G__24634;
chunk__24590_24623 = G__24635;
count__24591_24624 = G__24636;
i__24592_24625 = G__24637;
continue;
} else {
var req_24638 = cljs.core.first.call(null,seq__24589_24632__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24638,prov);

var G__24639 = cljs.core.next.call(null,seq__24589_24632__$1);
var G__24640 = null;
var G__24641 = (0);
var G__24642 = (0);
seq__24589_24622 = G__24639;
chunk__24590_24623 = G__24640;
count__24591_24624 = G__24641;
i__24592_24625 = G__24642;
continue;
}
} else {
}
}
break;
}

var G__24643 = cljs.core.next.call(null,seq__24581__$1);
var G__24644 = null;
var G__24645 = (0);
var G__24646 = (0);
seq__24581 = G__24643;
chunk__24582 = G__24644;
count__24583 = G__24645;
i__24584 = G__24646;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24651_24655 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24652_24656 = null;
var count__24653_24657 = (0);
var i__24654_24658 = (0);
while(true){
if((i__24654_24658 < count__24653_24657)){
var ns_24659 = cljs.core._nth.call(null,chunk__24652_24656,i__24654_24658);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24659);

var G__24660 = seq__24651_24655;
var G__24661 = chunk__24652_24656;
var G__24662 = count__24653_24657;
var G__24663 = (i__24654_24658 + (1));
seq__24651_24655 = G__24660;
chunk__24652_24656 = G__24661;
count__24653_24657 = G__24662;
i__24654_24658 = G__24663;
continue;
} else {
var temp__4657__auto___24664 = cljs.core.seq.call(null,seq__24651_24655);
if(temp__4657__auto___24664){
var seq__24651_24665__$1 = temp__4657__auto___24664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24651_24665__$1)){
var c__19270__auto___24666 = cljs.core.chunk_first.call(null,seq__24651_24665__$1);
var G__24667 = cljs.core.chunk_rest.call(null,seq__24651_24665__$1);
var G__24668 = c__19270__auto___24666;
var G__24669 = cljs.core.count.call(null,c__19270__auto___24666);
var G__24670 = (0);
seq__24651_24655 = G__24667;
chunk__24652_24656 = G__24668;
count__24653_24657 = G__24669;
i__24654_24658 = G__24670;
continue;
} else {
var ns_24671 = cljs.core.first.call(null,seq__24651_24665__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24671);

var G__24672 = cljs.core.next.call(null,seq__24651_24665__$1);
var G__24673 = null;
var G__24674 = (0);
var G__24675 = (0);
seq__24651_24655 = G__24672;
chunk__24652_24656 = G__24673;
count__24653_24657 = G__24674;
i__24654_24658 = G__24675;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18459__auto__ = goog.require__;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24676__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24677__i = 0, G__24677__a = new Array(arguments.length -  0);
while (G__24677__i < G__24677__a.length) {G__24677__a[G__24677__i] = arguments[G__24677__i + 0]; ++G__24677__i;}
  args = new cljs.core.IndexedSeq(G__24677__a,0);
} 
return G__24676__delegate.call(this,args);};
G__24676.cljs$lang$maxFixedArity = 0;
G__24676.cljs$lang$applyTo = (function (arglist__24678){
var args = cljs.core.seq(arglist__24678);
return G__24676__delegate(args);
});
G__24676.cljs$core$IFn$_invoke$arity$variadic = G__24676__delegate;
return G__24676;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24680 = cljs.core._EQ_;
var expr__24681 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24680.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24681))){
var path_parts = ((function (pred__24680,expr__24681){
return (function (p1__24679_SHARP_){
return clojure.string.split.call(null,p1__24679_SHARP_,/[\/\\]/);
});})(pred__24680,expr__24681))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24680,expr__24681){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24683){if((e24683 instanceof Error)){
var e = e24683;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24683;

}
}})());
});
;})(path_parts,sep,root,pred__24680,expr__24681))
} else {
if(cljs.core.truth_(pred__24680.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24681))){
return ((function (pred__24680,expr__24681){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24680,expr__24681){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24680,expr__24681))
);

return deferred.addErrback(((function (deferred,pred__24680,expr__24681){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24680,expr__24681))
);
});
;})(pred__24680,expr__24681))
} else {
return ((function (pred__24680,expr__24681){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24680,expr__24681))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24684,callback){
var map__24687 = p__24684;
var map__24687__$1 = ((((!((map__24687 == null)))?((((map__24687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24687):map__24687);
var file_msg = map__24687__$1;
var request_url = cljs.core.get.call(null,map__24687__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24687,map__24687__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24687,map__24687__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__){
return (function (state_24711){
var state_val_24712 = (state_24711[(1)]);
if((state_val_24712 === (7))){
var inst_24707 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24713_24733 = state_24711__$1;
(statearr_24713_24733[(2)] = inst_24707);

(statearr_24713_24733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (1))){
var state_24711__$1 = state_24711;
var statearr_24714_24734 = state_24711__$1;
(statearr_24714_24734[(2)] = null);

(statearr_24714_24734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (4))){
var inst_24691 = (state_24711[(7)]);
var inst_24691__$1 = (state_24711[(2)]);
var state_24711__$1 = (function (){var statearr_24715 = state_24711;
(statearr_24715[(7)] = inst_24691__$1);

return statearr_24715;
})();
if(cljs.core.truth_(inst_24691__$1)){
var statearr_24716_24735 = state_24711__$1;
(statearr_24716_24735[(1)] = (5));

} else {
var statearr_24717_24736 = state_24711__$1;
(statearr_24717_24736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (6))){
var state_24711__$1 = state_24711;
var statearr_24718_24737 = state_24711__$1;
(statearr_24718_24737[(2)] = null);

(statearr_24718_24737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (3))){
var inst_24709 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24711__$1,inst_24709);
} else {
if((state_val_24712 === (2))){
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24711__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24712 === (11))){
var inst_24703 = (state_24711[(2)]);
var state_24711__$1 = (function (){var statearr_24719 = state_24711;
(statearr_24719[(8)] = inst_24703);

return statearr_24719;
})();
var statearr_24720_24738 = state_24711__$1;
(statearr_24720_24738[(2)] = null);

(statearr_24720_24738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (9))){
var inst_24695 = (state_24711[(9)]);
var inst_24697 = (state_24711[(10)]);
var inst_24699 = inst_24697.call(null,inst_24695);
var state_24711__$1 = state_24711;
var statearr_24721_24739 = state_24711__$1;
(statearr_24721_24739[(2)] = inst_24699);

(statearr_24721_24739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (5))){
var inst_24691 = (state_24711[(7)]);
var inst_24693 = figwheel.client.file_reloading.blocking_load.call(null,inst_24691);
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24711__$1,(8),inst_24693);
} else {
if((state_val_24712 === (10))){
var inst_24695 = (state_24711[(9)]);
var inst_24701 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24695);
var state_24711__$1 = state_24711;
var statearr_24722_24740 = state_24711__$1;
(statearr_24722_24740[(2)] = inst_24701);

(statearr_24722_24740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (8))){
var inst_24691 = (state_24711[(7)]);
var inst_24697 = (state_24711[(10)]);
var inst_24695 = (state_24711[(2)]);
var inst_24696 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24697__$1 = cljs.core.get.call(null,inst_24696,inst_24691);
var state_24711__$1 = (function (){var statearr_24723 = state_24711;
(statearr_24723[(9)] = inst_24695);

(statearr_24723[(10)] = inst_24697__$1);

return statearr_24723;
})();
if(cljs.core.truth_(inst_24697__$1)){
var statearr_24724_24741 = state_24711__$1;
(statearr_24724_24741[(1)] = (9));

} else {
var statearr_24725_24742 = state_24711__$1;
(statearr_24725_24742[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21649__auto__))
;
return ((function (switch__20472__auto__,c__21649__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20473__auto__ = null;
var figwheel$client$file_reloading$state_machine__20473__auto____0 = (function (){
var statearr_24729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24729[(0)] = figwheel$client$file_reloading$state_machine__20473__auto__);

(statearr_24729[(1)] = (1));

return statearr_24729;
});
var figwheel$client$file_reloading$state_machine__20473__auto____1 = (function (state_24711){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24730){if((e24730 instanceof Object)){
var ex__20476__auto__ = e24730;
var statearr_24731_24743 = state_24711;
(statearr_24731_24743[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24744 = state_24711;
state_24711 = G__24744;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20473__auto__ = function(state_24711){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20473__auto____1.call(this,state_24711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20473__auto____0;
figwheel$client$file_reloading$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20473__auto____1;
return figwheel$client$file_reloading$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__))
})();
var state__21651__auto__ = (function (){var statearr_24732 = f__21650__auto__.call(null);
(statearr_24732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_24732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__))
);

return c__21649__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24745,callback){
var map__24748 = p__24745;
var map__24748__$1 = ((((!((map__24748 == null)))?((((map__24748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24748):map__24748);
var file_msg = map__24748__$1;
var namespace = cljs.core.get.call(null,map__24748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24748,map__24748__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24748,map__24748__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24750){
var map__24753 = p__24750;
var map__24753__$1 = ((((!((map__24753 == null)))?((((map__24753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24753):map__24753);
var file_msg = map__24753__$1;
var namespace = cljs.core.get.call(null,map__24753__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18447__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18447__auto__){
var or__18459__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto____$1)){
return or__18459__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18447__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24755,callback){
var map__24758 = p__24755;
var map__24758__$1 = ((((!((map__24758 == null)))?((((map__24758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24758):map__24758);
var file_msg = map__24758__$1;
var request_url = cljs.core.get.call(null,map__24758__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24758__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21649__auto___24846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___24846,out){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___24846,out){
return (function (state_24828){
var state_val_24829 = (state_24828[(1)]);
if((state_val_24829 === (1))){
var inst_24806 = cljs.core.nth.call(null,files,(0),null);
var inst_24807 = cljs.core.nthnext.call(null,files,(1));
var inst_24808 = files;
var state_24828__$1 = (function (){var statearr_24830 = state_24828;
(statearr_24830[(7)] = inst_24806);

(statearr_24830[(8)] = inst_24808);

(statearr_24830[(9)] = inst_24807);

return statearr_24830;
})();
var statearr_24831_24847 = state_24828__$1;
(statearr_24831_24847[(2)] = null);

(statearr_24831_24847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (2))){
var inst_24808 = (state_24828[(8)]);
var inst_24811 = (state_24828[(10)]);
var inst_24811__$1 = cljs.core.nth.call(null,inst_24808,(0),null);
var inst_24812 = cljs.core.nthnext.call(null,inst_24808,(1));
var inst_24813 = (inst_24811__$1 == null);
var inst_24814 = cljs.core.not.call(null,inst_24813);
var state_24828__$1 = (function (){var statearr_24832 = state_24828;
(statearr_24832[(11)] = inst_24812);

(statearr_24832[(10)] = inst_24811__$1);

return statearr_24832;
})();
if(inst_24814){
var statearr_24833_24848 = state_24828__$1;
(statearr_24833_24848[(1)] = (4));

} else {
var statearr_24834_24849 = state_24828__$1;
(statearr_24834_24849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (3))){
var inst_24826 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24828__$1,inst_24826);
} else {
if((state_val_24829 === (4))){
var inst_24811 = (state_24828[(10)]);
var inst_24816 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24811);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24828__$1,(7),inst_24816);
} else {
if((state_val_24829 === (5))){
var inst_24822 = cljs.core.async.close_BANG_.call(null,out);
var state_24828__$1 = state_24828;
var statearr_24835_24850 = state_24828__$1;
(statearr_24835_24850[(2)] = inst_24822);

(statearr_24835_24850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (6))){
var inst_24824 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
var statearr_24836_24851 = state_24828__$1;
(statearr_24836_24851[(2)] = inst_24824);

(statearr_24836_24851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (7))){
var inst_24812 = (state_24828[(11)]);
var inst_24818 = (state_24828[(2)]);
var inst_24819 = cljs.core.async.put_BANG_.call(null,out,inst_24818);
var inst_24808 = inst_24812;
var state_24828__$1 = (function (){var statearr_24837 = state_24828;
(statearr_24837[(12)] = inst_24819);

(statearr_24837[(8)] = inst_24808);

return statearr_24837;
})();
var statearr_24838_24852 = state_24828__$1;
(statearr_24838_24852[(2)] = null);

(statearr_24838_24852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21649__auto___24846,out))
;
return ((function (switch__20472__auto__,c__21649__auto___24846,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____0 = (function (){
var statearr_24842 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24842[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__);

(statearr_24842[(1)] = (1));

return statearr_24842;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____1 = (function (state_24828){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24843){if((e24843 instanceof Object)){
var ex__20476__auto__ = e24843;
var statearr_24844_24853 = state_24828;
(statearr_24844_24853[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24854 = state_24828;
state_24828 = G__24854;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__ = function(state_24828){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____1.call(this,state_24828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___24846,out))
})();
var state__21651__auto__ = (function (){var statearr_24845 = f__21650__auto__.call(null);
(statearr_24845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___24846);

return statearr_24845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___24846,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24855,opts){
var map__24859 = p__24855;
var map__24859__$1 = ((((!((map__24859 == null)))?((((map__24859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24859):map__24859);
var eval_body__$1 = cljs.core.get.call(null,map__24859__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24859__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18447__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18447__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18447__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24861){var e = e24861;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24862_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24862_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24867){
var vec__24868 = p__24867;
var k = cljs.core.nth.call(null,vec__24868,(0),null);
var v = cljs.core.nth.call(null,vec__24868,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24869){
var vec__24870 = p__24869;
var k = cljs.core.nth.call(null,vec__24870,(0),null);
var v = cljs.core.nth.call(null,vec__24870,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24874,p__24875){
var map__25122 = p__24874;
var map__25122__$1 = ((((!((map__25122 == null)))?((((map__25122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25122):map__25122);
var opts = map__25122__$1;
var before_jsload = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25123 = p__24875;
var map__25123__$1 = ((((!((map__25123 == null)))?((((map__25123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25123):map__25123);
var msg = map__25123__$1;
var files = cljs.core.get.call(null,map__25123__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25123__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25123__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25276){
var state_val_25277 = (state_25276[(1)]);
if((state_val_25277 === (7))){
var inst_25140 = (state_25276[(7)]);
var inst_25138 = (state_25276[(8)]);
var inst_25139 = (state_25276[(9)]);
var inst_25137 = (state_25276[(10)]);
var inst_25145 = cljs.core._nth.call(null,inst_25138,inst_25140);
var inst_25146 = figwheel.client.file_reloading.eval_body.call(null,inst_25145,opts);
var inst_25147 = (inst_25140 + (1));
var tmp25278 = inst_25138;
var tmp25279 = inst_25139;
var tmp25280 = inst_25137;
var inst_25137__$1 = tmp25280;
var inst_25138__$1 = tmp25278;
var inst_25139__$1 = tmp25279;
var inst_25140__$1 = inst_25147;
var state_25276__$1 = (function (){var statearr_25281 = state_25276;
(statearr_25281[(7)] = inst_25140__$1);

(statearr_25281[(8)] = inst_25138__$1);

(statearr_25281[(11)] = inst_25146);

(statearr_25281[(9)] = inst_25139__$1);

(statearr_25281[(10)] = inst_25137__$1);

return statearr_25281;
})();
var statearr_25282_25368 = state_25276__$1;
(statearr_25282_25368[(2)] = null);

(statearr_25282_25368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (20))){
var inst_25180 = (state_25276[(12)]);
var inst_25188 = figwheel.client.file_reloading.sort_files.call(null,inst_25180);
var state_25276__$1 = state_25276;
var statearr_25283_25369 = state_25276__$1;
(statearr_25283_25369[(2)] = inst_25188);

(statearr_25283_25369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (27))){
var state_25276__$1 = state_25276;
var statearr_25284_25370 = state_25276__$1;
(statearr_25284_25370[(2)] = null);

(statearr_25284_25370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (1))){
var inst_25129 = (state_25276[(13)]);
var inst_25126 = before_jsload.call(null,files);
var inst_25127 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25128 = (function (){return ((function (inst_25129,inst_25126,inst_25127,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24871_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24871_SHARP_);
});
;})(inst_25129,inst_25126,inst_25127,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25129__$1 = cljs.core.filter.call(null,inst_25128,files);
var inst_25130 = cljs.core.not_empty.call(null,inst_25129__$1);
var state_25276__$1 = (function (){var statearr_25285 = state_25276;
(statearr_25285[(14)] = inst_25127);

(statearr_25285[(15)] = inst_25126);

(statearr_25285[(13)] = inst_25129__$1);

return statearr_25285;
})();
if(cljs.core.truth_(inst_25130)){
var statearr_25286_25371 = state_25276__$1;
(statearr_25286_25371[(1)] = (2));

} else {
var statearr_25287_25372 = state_25276__$1;
(statearr_25287_25372[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (24))){
var state_25276__$1 = state_25276;
var statearr_25288_25373 = state_25276__$1;
(statearr_25288_25373[(2)] = null);

(statearr_25288_25373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (39))){
var inst_25230 = (state_25276[(16)]);
var state_25276__$1 = state_25276;
var statearr_25289_25374 = state_25276__$1;
(statearr_25289_25374[(2)] = inst_25230);

(statearr_25289_25374[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (46))){
var inst_25271 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25290_25375 = state_25276__$1;
(statearr_25290_25375[(2)] = inst_25271);

(statearr_25290_25375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (4))){
var inst_25174 = (state_25276[(2)]);
var inst_25175 = cljs.core.List.EMPTY;
var inst_25176 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25175);
var inst_25177 = (function (){return ((function (inst_25174,inst_25175,inst_25176,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24872_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24872_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24872_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_25174,inst_25175,inst_25176,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25178 = cljs.core.filter.call(null,inst_25177,files);
var inst_25179 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25180 = cljs.core.concat.call(null,inst_25178,inst_25179);
var state_25276__$1 = (function (){var statearr_25291 = state_25276;
(statearr_25291[(17)] = inst_25174);

(statearr_25291[(12)] = inst_25180);

(statearr_25291[(18)] = inst_25176);

return statearr_25291;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25292_25376 = state_25276__$1;
(statearr_25292_25376[(1)] = (16));

} else {
var statearr_25293_25377 = state_25276__$1;
(statearr_25293_25377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (15))){
var inst_25164 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25294_25378 = state_25276__$1;
(statearr_25294_25378[(2)] = inst_25164);

(statearr_25294_25378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (21))){
var inst_25190 = (state_25276[(19)]);
var inst_25190__$1 = (state_25276[(2)]);
var inst_25191 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25190__$1);
var state_25276__$1 = (function (){var statearr_25295 = state_25276;
(statearr_25295[(19)] = inst_25190__$1);

return statearr_25295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25276__$1,(22),inst_25191);
} else {
if((state_val_25277 === (31))){
var inst_25274 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25276__$1,inst_25274);
} else {
if((state_val_25277 === (32))){
var inst_25230 = (state_25276[(16)]);
var inst_25235 = inst_25230.cljs$lang$protocol_mask$partition0$;
var inst_25236 = (inst_25235 & (64));
var inst_25237 = inst_25230.cljs$core$ISeq$;
var inst_25238 = (inst_25236) || (inst_25237);
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25238)){
var statearr_25296_25379 = state_25276__$1;
(statearr_25296_25379[(1)] = (35));

} else {
var statearr_25297_25380 = state_25276__$1;
(statearr_25297_25380[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (40))){
var inst_25251 = (state_25276[(20)]);
var inst_25250 = (state_25276[(2)]);
var inst_25251__$1 = cljs.core.get.call(null,inst_25250,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25252 = cljs.core.get.call(null,inst_25250,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25253 = cljs.core.not_empty.call(null,inst_25251__$1);
var state_25276__$1 = (function (){var statearr_25298 = state_25276;
(statearr_25298[(21)] = inst_25252);

(statearr_25298[(20)] = inst_25251__$1);

return statearr_25298;
})();
if(cljs.core.truth_(inst_25253)){
var statearr_25299_25381 = state_25276__$1;
(statearr_25299_25381[(1)] = (41));

} else {
var statearr_25300_25382 = state_25276__$1;
(statearr_25300_25382[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (33))){
var state_25276__$1 = state_25276;
var statearr_25301_25383 = state_25276__$1;
(statearr_25301_25383[(2)] = false);

(statearr_25301_25383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (13))){
var inst_25150 = (state_25276[(22)]);
var inst_25154 = cljs.core.chunk_first.call(null,inst_25150);
var inst_25155 = cljs.core.chunk_rest.call(null,inst_25150);
var inst_25156 = cljs.core.count.call(null,inst_25154);
var inst_25137 = inst_25155;
var inst_25138 = inst_25154;
var inst_25139 = inst_25156;
var inst_25140 = (0);
var state_25276__$1 = (function (){var statearr_25302 = state_25276;
(statearr_25302[(7)] = inst_25140);

(statearr_25302[(8)] = inst_25138);

(statearr_25302[(9)] = inst_25139);

(statearr_25302[(10)] = inst_25137);

return statearr_25302;
})();
var statearr_25303_25384 = state_25276__$1;
(statearr_25303_25384[(2)] = null);

(statearr_25303_25384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (22))){
var inst_25190 = (state_25276[(19)]);
var inst_25194 = (state_25276[(23)]);
var inst_25193 = (state_25276[(24)]);
var inst_25198 = (state_25276[(25)]);
var inst_25193__$1 = (state_25276[(2)]);
var inst_25194__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25193__$1);
var inst_25195 = (function (){var all_files = inst_25190;
var res_SINGLEQUOTE_ = inst_25193__$1;
var res = inst_25194__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25190,inst_25194,inst_25193,inst_25198,inst_25193__$1,inst_25194__$1,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24873_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24873_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25190,inst_25194,inst_25193,inst_25198,inst_25193__$1,inst_25194__$1,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25196 = cljs.core.filter.call(null,inst_25195,inst_25193__$1);
var inst_25197 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25198__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25197);
var inst_25199 = cljs.core.not_empty.call(null,inst_25198__$1);
var state_25276__$1 = (function (){var statearr_25304 = state_25276;
(statearr_25304[(26)] = inst_25196);

(statearr_25304[(23)] = inst_25194__$1);

(statearr_25304[(24)] = inst_25193__$1);

(statearr_25304[(25)] = inst_25198__$1);

return statearr_25304;
})();
if(cljs.core.truth_(inst_25199)){
var statearr_25305_25385 = state_25276__$1;
(statearr_25305_25385[(1)] = (23));

} else {
var statearr_25306_25386 = state_25276__$1;
(statearr_25306_25386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (36))){
var state_25276__$1 = state_25276;
var statearr_25307_25387 = state_25276__$1;
(statearr_25307_25387[(2)] = false);

(statearr_25307_25387[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (41))){
var inst_25251 = (state_25276[(20)]);
var inst_25255 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25256 = cljs.core.map.call(null,inst_25255,inst_25251);
var inst_25257 = cljs.core.pr_str.call(null,inst_25256);
var inst_25258 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25257)].join('');
var inst_25259 = figwheel.client.utils.log.call(null,inst_25258);
var state_25276__$1 = state_25276;
var statearr_25308_25388 = state_25276__$1;
(statearr_25308_25388[(2)] = inst_25259);

(statearr_25308_25388[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (43))){
var inst_25252 = (state_25276[(21)]);
var inst_25262 = (state_25276[(2)]);
var inst_25263 = cljs.core.not_empty.call(null,inst_25252);
var state_25276__$1 = (function (){var statearr_25309 = state_25276;
(statearr_25309[(27)] = inst_25262);

return statearr_25309;
})();
if(cljs.core.truth_(inst_25263)){
var statearr_25310_25389 = state_25276__$1;
(statearr_25310_25389[(1)] = (44));

} else {
var statearr_25311_25390 = state_25276__$1;
(statearr_25311_25390[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (29))){
var inst_25190 = (state_25276[(19)]);
var inst_25196 = (state_25276[(26)]);
var inst_25194 = (state_25276[(23)]);
var inst_25193 = (state_25276[(24)]);
var inst_25198 = (state_25276[(25)]);
var inst_25230 = (state_25276[(16)]);
var inst_25226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25229 = (function (){var all_files = inst_25190;
var res_SINGLEQUOTE_ = inst_25193;
var res = inst_25194;
var files_not_loaded = inst_25196;
var dependencies_that_loaded = inst_25198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25230,inst_25226,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25228){
var map__25312 = p__25228;
var map__25312__$1 = ((((!((map__25312 == null)))?((((map__25312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25312):map__25312);
var namespace = cljs.core.get.call(null,map__25312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25230,inst_25226,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25230__$1 = cljs.core.group_by.call(null,inst_25229,inst_25196);
var inst_25232 = (inst_25230__$1 == null);
var inst_25233 = cljs.core.not.call(null,inst_25232);
var state_25276__$1 = (function (){var statearr_25314 = state_25276;
(statearr_25314[(28)] = inst_25226);

(statearr_25314[(16)] = inst_25230__$1);

return statearr_25314;
})();
if(inst_25233){
var statearr_25315_25391 = state_25276__$1;
(statearr_25315_25391[(1)] = (32));

} else {
var statearr_25316_25392 = state_25276__$1;
(statearr_25316_25392[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (44))){
var inst_25252 = (state_25276[(21)]);
var inst_25265 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25252);
var inst_25266 = cljs.core.pr_str.call(null,inst_25265);
var inst_25267 = [cljs.core.str("not required: "),cljs.core.str(inst_25266)].join('');
var inst_25268 = figwheel.client.utils.log.call(null,inst_25267);
var state_25276__$1 = state_25276;
var statearr_25317_25393 = state_25276__$1;
(statearr_25317_25393[(2)] = inst_25268);

(statearr_25317_25393[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (6))){
var inst_25171 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25318_25394 = state_25276__$1;
(statearr_25318_25394[(2)] = inst_25171);

(statearr_25318_25394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (28))){
var inst_25196 = (state_25276[(26)]);
var inst_25223 = (state_25276[(2)]);
var inst_25224 = cljs.core.not_empty.call(null,inst_25196);
var state_25276__$1 = (function (){var statearr_25319 = state_25276;
(statearr_25319[(29)] = inst_25223);

return statearr_25319;
})();
if(cljs.core.truth_(inst_25224)){
var statearr_25320_25395 = state_25276__$1;
(statearr_25320_25395[(1)] = (29));

} else {
var statearr_25321_25396 = state_25276__$1;
(statearr_25321_25396[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (25))){
var inst_25194 = (state_25276[(23)]);
var inst_25210 = (state_25276[(2)]);
var inst_25211 = cljs.core.not_empty.call(null,inst_25194);
var state_25276__$1 = (function (){var statearr_25322 = state_25276;
(statearr_25322[(30)] = inst_25210);

return statearr_25322;
})();
if(cljs.core.truth_(inst_25211)){
var statearr_25323_25397 = state_25276__$1;
(statearr_25323_25397[(1)] = (26));

} else {
var statearr_25324_25398 = state_25276__$1;
(statearr_25324_25398[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (34))){
var inst_25245 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25245)){
var statearr_25325_25399 = state_25276__$1;
(statearr_25325_25399[(1)] = (38));

} else {
var statearr_25326_25400 = state_25276__$1;
(statearr_25326_25400[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (17))){
var state_25276__$1 = state_25276;
var statearr_25327_25401 = state_25276__$1;
(statearr_25327_25401[(2)] = recompile_dependents);

(statearr_25327_25401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (3))){
var state_25276__$1 = state_25276;
var statearr_25328_25402 = state_25276__$1;
(statearr_25328_25402[(2)] = null);

(statearr_25328_25402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (12))){
var inst_25167 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25329_25403 = state_25276__$1;
(statearr_25329_25403[(2)] = inst_25167);

(statearr_25329_25403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (2))){
var inst_25129 = (state_25276[(13)]);
var inst_25136 = cljs.core.seq.call(null,inst_25129);
var inst_25137 = inst_25136;
var inst_25138 = null;
var inst_25139 = (0);
var inst_25140 = (0);
var state_25276__$1 = (function (){var statearr_25330 = state_25276;
(statearr_25330[(7)] = inst_25140);

(statearr_25330[(8)] = inst_25138);

(statearr_25330[(9)] = inst_25139);

(statearr_25330[(10)] = inst_25137);

return statearr_25330;
})();
var statearr_25331_25404 = state_25276__$1;
(statearr_25331_25404[(2)] = null);

(statearr_25331_25404[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (23))){
var inst_25190 = (state_25276[(19)]);
var inst_25196 = (state_25276[(26)]);
var inst_25194 = (state_25276[(23)]);
var inst_25193 = (state_25276[(24)]);
var inst_25198 = (state_25276[(25)]);
var inst_25201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25203 = (function (){var all_files = inst_25190;
var res_SINGLEQUOTE_ = inst_25193;
var res = inst_25194;
var files_not_loaded = inst_25196;
var dependencies_that_loaded = inst_25198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25201,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25202){
var map__25332 = p__25202;
var map__25332__$1 = ((((!((map__25332 == null)))?((((map__25332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25332):map__25332);
var request_url = cljs.core.get.call(null,map__25332__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25201,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25204 = cljs.core.reverse.call(null,inst_25198);
var inst_25205 = cljs.core.map.call(null,inst_25203,inst_25204);
var inst_25206 = cljs.core.pr_str.call(null,inst_25205);
var inst_25207 = figwheel.client.utils.log.call(null,inst_25206);
var state_25276__$1 = (function (){var statearr_25334 = state_25276;
(statearr_25334[(31)] = inst_25201);

return statearr_25334;
})();
var statearr_25335_25405 = state_25276__$1;
(statearr_25335_25405[(2)] = inst_25207);

(statearr_25335_25405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (35))){
var state_25276__$1 = state_25276;
var statearr_25336_25406 = state_25276__$1;
(statearr_25336_25406[(2)] = true);

(statearr_25336_25406[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (19))){
var inst_25180 = (state_25276[(12)]);
var inst_25186 = figwheel.client.file_reloading.expand_files.call(null,inst_25180);
var state_25276__$1 = state_25276;
var statearr_25337_25407 = state_25276__$1;
(statearr_25337_25407[(2)] = inst_25186);

(statearr_25337_25407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (11))){
var state_25276__$1 = state_25276;
var statearr_25338_25408 = state_25276__$1;
(statearr_25338_25408[(2)] = null);

(statearr_25338_25408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (9))){
var inst_25169 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25339_25409 = state_25276__$1;
(statearr_25339_25409[(2)] = inst_25169);

(statearr_25339_25409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (5))){
var inst_25140 = (state_25276[(7)]);
var inst_25139 = (state_25276[(9)]);
var inst_25142 = (inst_25140 < inst_25139);
var inst_25143 = inst_25142;
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25143)){
var statearr_25340_25410 = state_25276__$1;
(statearr_25340_25410[(1)] = (7));

} else {
var statearr_25341_25411 = state_25276__$1;
(statearr_25341_25411[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (14))){
var inst_25150 = (state_25276[(22)]);
var inst_25159 = cljs.core.first.call(null,inst_25150);
var inst_25160 = figwheel.client.file_reloading.eval_body.call(null,inst_25159,opts);
var inst_25161 = cljs.core.next.call(null,inst_25150);
var inst_25137 = inst_25161;
var inst_25138 = null;
var inst_25139 = (0);
var inst_25140 = (0);
var state_25276__$1 = (function (){var statearr_25342 = state_25276;
(statearr_25342[(32)] = inst_25160);

(statearr_25342[(7)] = inst_25140);

(statearr_25342[(8)] = inst_25138);

(statearr_25342[(9)] = inst_25139);

(statearr_25342[(10)] = inst_25137);

return statearr_25342;
})();
var statearr_25343_25412 = state_25276__$1;
(statearr_25343_25412[(2)] = null);

(statearr_25343_25412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (45))){
var state_25276__$1 = state_25276;
var statearr_25344_25413 = state_25276__$1;
(statearr_25344_25413[(2)] = null);

(statearr_25344_25413[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (26))){
var inst_25190 = (state_25276[(19)]);
var inst_25196 = (state_25276[(26)]);
var inst_25194 = (state_25276[(23)]);
var inst_25193 = (state_25276[(24)]);
var inst_25198 = (state_25276[(25)]);
var inst_25213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25215 = (function (){var all_files = inst_25190;
var res_SINGLEQUOTE_ = inst_25193;
var res = inst_25194;
var files_not_loaded = inst_25196;
var dependencies_that_loaded = inst_25198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25213,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25214){
var map__25345 = p__25214;
var map__25345__$1 = ((((!((map__25345 == null)))?((((map__25345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25345):map__25345);
var namespace = cljs.core.get.call(null,map__25345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25213,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25216 = cljs.core.map.call(null,inst_25215,inst_25194);
var inst_25217 = cljs.core.pr_str.call(null,inst_25216);
var inst_25218 = figwheel.client.utils.log.call(null,inst_25217);
var inst_25219 = (function (){var all_files = inst_25190;
var res_SINGLEQUOTE_ = inst_25193;
var res = inst_25194;
var files_not_loaded = inst_25196;
var dependencies_that_loaded = inst_25198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25213,inst_25215,inst_25216,inst_25217,inst_25218,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25190,inst_25196,inst_25194,inst_25193,inst_25198,inst_25213,inst_25215,inst_25216,inst_25217,inst_25218,state_val_25277,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25220 = setTimeout(inst_25219,(10));
var state_25276__$1 = (function (){var statearr_25347 = state_25276;
(statearr_25347[(33)] = inst_25218);

(statearr_25347[(34)] = inst_25213);

return statearr_25347;
})();
var statearr_25348_25414 = state_25276__$1;
(statearr_25348_25414[(2)] = inst_25220);

(statearr_25348_25414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (16))){
var state_25276__$1 = state_25276;
var statearr_25349_25415 = state_25276__$1;
(statearr_25349_25415[(2)] = reload_dependents);

(statearr_25349_25415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (38))){
var inst_25230 = (state_25276[(16)]);
var inst_25247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25230);
var state_25276__$1 = state_25276;
var statearr_25350_25416 = state_25276__$1;
(statearr_25350_25416[(2)] = inst_25247);

(statearr_25350_25416[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (30))){
var state_25276__$1 = state_25276;
var statearr_25351_25417 = state_25276__$1;
(statearr_25351_25417[(2)] = null);

(statearr_25351_25417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (10))){
var inst_25150 = (state_25276[(22)]);
var inst_25152 = cljs.core.chunked_seq_QMARK_.call(null,inst_25150);
var state_25276__$1 = state_25276;
if(inst_25152){
var statearr_25352_25418 = state_25276__$1;
(statearr_25352_25418[(1)] = (13));

} else {
var statearr_25353_25419 = state_25276__$1;
(statearr_25353_25419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (18))){
var inst_25184 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25184)){
var statearr_25354_25420 = state_25276__$1;
(statearr_25354_25420[(1)] = (19));

} else {
var statearr_25355_25421 = state_25276__$1;
(statearr_25355_25421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (42))){
var state_25276__$1 = state_25276;
var statearr_25356_25422 = state_25276__$1;
(statearr_25356_25422[(2)] = null);

(statearr_25356_25422[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (37))){
var inst_25242 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25357_25423 = state_25276__$1;
(statearr_25357_25423[(2)] = inst_25242);

(statearr_25357_25423[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (8))){
var inst_25150 = (state_25276[(22)]);
var inst_25137 = (state_25276[(10)]);
var inst_25150__$1 = cljs.core.seq.call(null,inst_25137);
var state_25276__$1 = (function (){var statearr_25358 = state_25276;
(statearr_25358[(22)] = inst_25150__$1);

return statearr_25358;
})();
if(inst_25150__$1){
var statearr_25359_25424 = state_25276__$1;
(statearr_25359_25424[(1)] = (10));

} else {
var statearr_25360_25425 = state_25276__$1;
(statearr_25360_25425[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20472__auto__,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____0 = (function (){
var statearr_25364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25364[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__);

(statearr_25364[(1)] = (1));

return statearr_25364;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____1 = (function (state_25276){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_25276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e25365){if((e25365 instanceof Object)){
var ex__20476__auto__ = e25365;
var statearr_25366_25426 = state_25276;
(statearr_25366_25426[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25427 = state_25276;
state_25276 = G__25427;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__ = function(state_25276){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____1.call(this,state_25276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21651__auto__ = (function (){var statearr_25367 = f__21650__auto__.call(null);
(statearr_25367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_25367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__,map__25122,map__25122__$1,opts,before_jsload,on_jsload,reload_dependents,map__25123,map__25123__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21649__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25430,link){
var map__25433 = p__25430;
var map__25433__$1 = ((((!((map__25433 == null)))?((((map__25433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25433):map__25433);
var file = cljs.core.get.call(null,map__25433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25433,map__25433__$1,file){
return (function (p1__25428_SHARP_,p2__25429_SHARP_){
if(cljs.core._EQ_.call(null,p1__25428_SHARP_,p2__25429_SHARP_)){
return p1__25428_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25433,map__25433__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25439){
var map__25440 = p__25439;
var map__25440__$1 = ((((!((map__25440 == null)))?((((map__25440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25440):map__25440);
var match_length = cljs.core.get.call(null,map__25440__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25440__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25435_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25435_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25442 = [];
var len__19529__auto___25445 = arguments.length;
var i__19530__auto___25446 = (0);
while(true){
if((i__19530__auto___25446 < len__19529__auto___25445)){
args25442.push((arguments[i__19530__auto___25446]));

var G__25447 = (i__19530__auto___25446 + (1));
i__19530__auto___25446 = G__25447;
continue;
} else {
}
break;
}

var G__25444 = args25442.length;
switch (G__25444) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25442.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25449_SHARP_,p2__25450_SHARP_){
return cljs.core.assoc.call(null,p1__25449_SHARP_,cljs.core.get.call(null,p2__25450_SHARP_,key),p2__25450_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25451){
var map__25454 = p__25451;
var map__25454__$1 = ((((!((map__25454 == null)))?((((map__25454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25454):map__25454);
var f_data = map__25454__$1;
var file = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25456,files_msg){
var map__25463 = p__25456;
var map__25463__$1 = ((((!((map__25463 == null)))?((((map__25463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25463):map__25463);
var opts = map__25463__$1;
var on_cssload = cljs.core.get.call(null,map__25463__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25465_25469 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25466_25470 = null;
var count__25467_25471 = (0);
var i__25468_25472 = (0);
while(true){
if((i__25468_25472 < count__25467_25471)){
var f_25473 = cljs.core._nth.call(null,chunk__25466_25470,i__25468_25472);
figwheel.client.file_reloading.reload_css_file.call(null,f_25473);

var G__25474 = seq__25465_25469;
var G__25475 = chunk__25466_25470;
var G__25476 = count__25467_25471;
var G__25477 = (i__25468_25472 + (1));
seq__25465_25469 = G__25474;
chunk__25466_25470 = G__25475;
count__25467_25471 = G__25476;
i__25468_25472 = G__25477;
continue;
} else {
var temp__4657__auto___25478 = cljs.core.seq.call(null,seq__25465_25469);
if(temp__4657__auto___25478){
var seq__25465_25479__$1 = temp__4657__auto___25478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25465_25479__$1)){
var c__19270__auto___25480 = cljs.core.chunk_first.call(null,seq__25465_25479__$1);
var G__25481 = cljs.core.chunk_rest.call(null,seq__25465_25479__$1);
var G__25482 = c__19270__auto___25480;
var G__25483 = cljs.core.count.call(null,c__19270__auto___25480);
var G__25484 = (0);
seq__25465_25469 = G__25481;
chunk__25466_25470 = G__25482;
count__25467_25471 = G__25483;
i__25468_25472 = G__25484;
continue;
} else {
var f_25485 = cljs.core.first.call(null,seq__25465_25479__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25485);

var G__25486 = cljs.core.next.call(null,seq__25465_25479__$1);
var G__25487 = null;
var G__25488 = (0);
var G__25489 = (0);
seq__25465_25469 = G__25486;
chunk__25466_25470 = G__25487;
count__25467_25471 = G__25488;
i__25468_25472 = G__25489;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25463,map__25463__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25463,map__25463__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1506396186707