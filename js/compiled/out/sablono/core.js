// Compiled by ClojureScript 1.8.51 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__21322__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__21321 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__21321,(0),null);
var body = cljs.core.nthnext.call(null,vec__21321,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__21322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21323__i = 0, G__21323__a = new Array(arguments.length -  0);
while (G__21323__i < G__21323__a.length) {G__21323__a[G__21323__i] = arguments[G__21323__i + 0]; ++G__21323__i;}
  args = new cljs.core.IndexedSeq(G__21323__a,0);
} 
return G__21322__delegate.call(this,args);};
G__21322.cljs$lang$maxFixedArity = 0;
G__21322.cljs$lang$applyTo = (function (arglist__21324){
var args = cljs.core.seq(arglist__21324);
return G__21322__delegate(args);
});
G__21322.cljs$core$IFn$_invoke$arity$variadic = G__21322__delegate;
return G__21322;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__21329(s__21330){
return (new cljs.core.LazySeq(null,(function (){
var s__21330__$1 = s__21330;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21330__$1);
if(temp__4657__auto__){
var s__21330__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21330__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__21330__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__21332 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__21331 = (0);
while(true){
if((i__21331 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__21331);
cljs.core.chunk_append.call(null,b__21332,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__21333 = (i__21331 + (1));
i__21331 = G__21333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21332),sablono$core$update_arglists_$_iter__21329.call(null,cljs.core.chunk_rest.call(null,s__21330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21332),null);
}
} else {
var args = cljs.core.first.call(null,s__21330__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__21329.call(null,cljs.core.rest.call(null,s__21330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19536__auto__ = [];
var len__19529__auto___21339 = arguments.length;
var i__19530__auto___21340 = (0);
while(true){
if((i__19530__auto___21340 < len__19529__auto___21339)){
args__19536__auto__.push((arguments[i__19530__auto___21340]));

var G__21341 = (i__19530__auto___21340 + (1));
i__19530__auto___21340 = G__21341;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__21335(s__21336){
return (new cljs.core.LazySeq(null,(function (){
var s__21336__$1 = s__21336;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21336__$1);
if(temp__4657__auto__){
var s__21336__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21336__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__21336__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__21338 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__21337 = (0);
while(true){
if((i__21337 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__21337);
cljs.core.chunk_append.call(null,b__21338,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__21342 = (i__21337 + (1));
i__21337 = G__21342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21338),sablono$core$iter__21335.call(null,cljs.core.chunk_rest.call(null,s__21336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21338),null);
}
} else {
var style = cljs.core.first.call(null,s__21336__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__21335.call(null,cljs.core.rest.call(null,s__21336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq21334){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21334));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to21343 = (function sablono$core$link_to21343(var_args){
var args__19536__auto__ = [];
var len__19529__auto___21346 = arguments.length;
var i__19530__auto___21347 = (0);
while(true){
if((i__19530__auto___21347 < len__19529__auto___21346)){
args__19536__auto__.push((arguments[i__19530__auto___21347]));

var G__21348 = (i__19530__auto___21347 + (1));
i__19530__auto___21347 = G__21348;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to21343.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to21343.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to21343.cljs$lang$maxFixedArity = (1);

sablono.core.link_to21343.cljs$lang$applyTo = (function (seq21344){
var G__21345 = cljs.core.first.call(null,seq21344);
var seq21344__$1 = cljs.core.next.call(null,seq21344);
return sablono.core.link_to21343.cljs$core$IFn$_invoke$arity$variadic(G__21345,seq21344__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21343);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21349 = (function sablono$core$mail_to21349(var_args){
var args__19536__auto__ = [];
var len__19529__auto___21354 = arguments.length;
var i__19530__auto___21355 = (0);
while(true){
if((i__19530__auto___21355 < len__19529__auto___21354)){
args__19536__auto__.push((arguments[i__19530__auto___21355]));

var G__21356 = (i__19530__auto___21355 + (1));
i__19530__auto___21355 = G__21356;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to21349.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to21349.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21352){
var vec__21353 = p__21352;
var content = cljs.core.nth.call(null,vec__21353,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to21349.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to21349.cljs$lang$applyTo = (function (seq21350){
var G__21351 = cljs.core.first.call(null,seq21350);
var seq21350__$1 = cljs.core.next.call(null,seq21350);
return sablono.core.mail_to21349.cljs$core$IFn$_invoke$arity$variadic(G__21351,seq21350__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21349);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21357 = (function sablono$core$unordered_list21357(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list21357_$_iter__21362(s__21363){
return (new cljs.core.LazySeq(null,(function (){
var s__21363__$1 = s__21363;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21363__$1);
if(temp__4657__auto__){
var s__21363__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21363__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__21363__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__21365 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__21364 = (0);
while(true){
if((i__21364 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__21364);
cljs.core.chunk_append.call(null,b__21365,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21366 = (i__21364 + (1));
i__21364 = G__21366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21365),sablono$core$unordered_list21357_$_iter__21362.call(null,cljs.core.chunk_rest.call(null,s__21363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21365),null);
}
} else {
var x = cljs.core.first.call(null,s__21363__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list21357_$_iter__21362.call(null,cljs.core.rest.call(null,s__21363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21357);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21367 = (function sablono$core$ordered_list21367(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list21367_$_iter__21372(s__21373){
return (new cljs.core.LazySeq(null,(function (){
var s__21373__$1 = s__21373;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21373__$1);
if(temp__4657__auto__){
var s__21373__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21373__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__21373__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__21375 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__21374 = (0);
while(true){
if((i__21374 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__21374);
cljs.core.chunk_append.call(null,b__21375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21376 = (i__21374 + (1));
i__21374 = G__21376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21375),sablono$core$ordered_list21367_$_iter__21372.call(null,cljs.core.chunk_rest.call(null,s__21373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21375),null);
}
} else {
var x = cljs.core.first.call(null,s__21373__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list21367_$_iter__21372.call(null,cljs.core.rest.call(null,s__21373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21367);
/**
 * Create an image element.
 */
sablono.core.image21377 = (function sablono$core$image21377(var_args){
var args21378 = [];
var len__19529__auto___21381 = arguments.length;
var i__19530__auto___21382 = (0);
while(true){
if((i__19530__auto___21382 < len__19529__auto___21381)){
args21378.push((arguments[i__19530__auto___21382]));

var G__21383 = (i__19530__auto___21382 + (1));
i__19530__auto___21382 = G__21383;
continue;
} else {
}
break;
}

var G__21380 = args21378.length;
switch (G__21380) {
case 1:
return sablono.core.image21377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21378.length)].join('')));

}
});

sablono.core.image21377.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image21377.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image21377.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21377);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__21385_SHARP_,p2__21386_SHARP_){
return [cljs.core.str(p1__21385_SHARP_),cljs.core.str("["),cljs.core.str(p2__21386_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__21387_SHARP_,p2__21388_SHARP_){
return [cljs.core.str(p1__21387_SHARP_),cljs.core.str("-"),cljs.core.str(p2__21388_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field21389 = (function sablono$core$color_field21389(var_args){
var args21390 = [];
var len__19529__auto___21457 = arguments.length;
var i__19530__auto___21458 = (0);
while(true){
if((i__19530__auto___21458 < len__19529__auto___21457)){
args21390.push((arguments[i__19530__auto___21458]));

var G__21459 = (i__19530__auto___21458 + (1));
i__19530__auto___21458 = G__21459;
continue;
} else {
}
break;
}

var G__21392 = args21390.length;
switch (G__21392) {
case 1:
return sablono.core.color_field21389.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21389.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21390.length)].join('')));

}
});

sablono.core.color_field21389.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.color_field21389.call(null,name__21139__auto__,null);
});

sablono.core.color_field21389.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.color_field21389.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21389);

/**
 * Creates a date input field.
 */
sablono.core.date_field21393 = (function sablono$core$date_field21393(var_args){
var args21394 = [];
var len__19529__auto___21461 = arguments.length;
var i__19530__auto___21462 = (0);
while(true){
if((i__19530__auto___21462 < len__19529__auto___21461)){
args21394.push((arguments[i__19530__auto___21462]));

var G__21463 = (i__19530__auto___21462 + (1));
i__19530__auto___21462 = G__21463;
continue;
} else {
}
break;
}

var G__21396 = args21394.length;
switch (G__21396) {
case 1:
return sablono.core.date_field21393.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21394.length)].join('')));

}
});

sablono.core.date_field21393.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.date_field21393.call(null,name__21139__auto__,null);
});

sablono.core.date_field21393.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.date_field21393.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21393);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21397 = (function sablono$core$datetime_field21397(var_args){
var args21398 = [];
var len__19529__auto___21465 = arguments.length;
var i__19530__auto___21466 = (0);
while(true){
if((i__19530__auto___21466 < len__19529__auto___21465)){
args21398.push((arguments[i__19530__auto___21466]));

var G__21467 = (i__19530__auto___21466 + (1));
i__19530__auto___21466 = G__21467;
continue;
} else {
}
break;
}

var G__21400 = args21398.length;
switch (G__21400) {
case 1:
return sablono.core.datetime_field21397.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21398.length)].join('')));

}
});

sablono.core.datetime_field21397.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.datetime_field21397.call(null,name__21139__auto__,null);
});

sablono.core.datetime_field21397.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.datetime_field21397.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21397);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21401 = (function sablono$core$datetime_local_field21401(var_args){
var args21402 = [];
var len__19529__auto___21469 = arguments.length;
var i__19530__auto___21470 = (0);
while(true){
if((i__19530__auto___21470 < len__19529__auto___21469)){
args21402.push((arguments[i__19530__auto___21470]));

var G__21471 = (i__19530__auto___21470 + (1));
i__19530__auto___21470 = G__21471;
continue;
} else {
}
break;
}

var G__21404 = args21402.length;
switch (G__21404) {
case 1:
return sablono.core.datetime_local_field21401.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21401.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21402.length)].join('')));

}
});

sablono.core.datetime_local_field21401.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.datetime_local_field21401.call(null,name__21139__auto__,null);
});

sablono.core.datetime_local_field21401.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.datetime_local_field21401.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21401);

/**
 * Creates a email input field.
 */
sablono.core.email_field21405 = (function sablono$core$email_field21405(var_args){
var args21406 = [];
var len__19529__auto___21473 = arguments.length;
var i__19530__auto___21474 = (0);
while(true){
if((i__19530__auto___21474 < len__19529__auto___21473)){
args21406.push((arguments[i__19530__auto___21474]));

var G__21475 = (i__19530__auto___21474 + (1));
i__19530__auto___21474 = G__21475;
continue;
} else {
}
break;
}

var G__21408 = args21406.length;
switch (G__21408) {
case 1:
return sablono.core.email_field21405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21406.length)].join('')));

}
});

sablono.core.email_field21405.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.email_field21405.call(null,name__21139__auto__,null);
});

sablono.core.email_field21405.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.email_field21405.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21405);

/**
 * Creates a file input field.
 */
sablono.core.file_field21409 = (function sablono$core$file_field21409(var_args){
var args21410 = [];
var len__19529__auto___21477 = arguments.length;
var i__19530__auto___21478 = (0);
while(true){
if((i__19530__auto___21478 < len__19529__auto___21477)){
args21410.push((arguments[i__19530__auto___21478]));

var G__21479 = (i__19530__auto___21478 + (1));
i__19530__auto___21478 = G__21479;
continue;
} else {
}
break;
}

var G__21412 = args21410.length;
switch (G__21412) {
case 1:
return sablono.core.file_field21409.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21409.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21410.length)].join('')));

}
});

sablono.core.file_field21409.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.file_field21409.call(null,name__21139__auto__,null);
});

sablono.core.file_field21409.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.file_field21409.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21409);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21413 = (function sablono$core$hidden_field21413(var_args){
var args21414 = [];
var len__19529__auto___21481 = arguments.length;
var i__19530__auto___21482 = (0);
while(true){
if((i__19530__auto___21482 < len__19529__auto___21481)){
args21414.push((arguments[i__19530__auto___21482]));

var G__21483 = (i__19530__auto___21482 + (1));
i__19530__auto___21482 = G__21483;
continue;
} else {
}
break;
}

var G__21416 = args21414.length;
switch (G__21416) {
case 1:
return sablono.core.hidden_field21413.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21414.length)].join('')));

}
});

sablono.core.hidden_field21413.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.hidden_field21413.call(null,name__21139__auto__,null);
});

sablono.core.hidden_field21413.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.hidden_field21413.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21413);

/**
 * Creates a month input field.
 */
sablono.core.month_field21417 = (function sablono$core$month_field21417(var_args){
var args21418 = [];
var len__19529__auto___21485 = arguments.length;
var i__19530__auto___21486 = (0);
while(true){
if((i__19530__auto___21486 < len__19529__auto___21485)){
args21418.push((arguments[i__19530__auto___21486]));

var G__21487 = (i__19530__auto___21486 + (1));
i__19530__auto___21486 = G__21487;
continue;
} else {
}
break;
}

var G__21420 = args21418.length;
switch (G__21420) {
case 1:
return sablono.core.month_field21417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21418.length)].join('')));

}
});

sablono.core.month_field21417.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.month_field21417.call(null,name__21139__auto__,null);
});

sablono.core.month_field21417.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.month_field21417.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21417);

/**
 * Creates a number input field.
 */
sablono.core.number_field21421 = (function sablono$core$number_field21421(var_args){
var args21422 = [];
var len__19529__auto___21489 = arguments.length;
var i__19530__auto___21490 = (0);
while(true){
if((i__19530__auto___21490 < len__19529__auto___21489)){
args21422.push((arguments[i__19530__auto___21490]));

var G__21491 = (i__19530__auto___21490 + (1));
i__19530__auto___21490 = G__21491;
continue;
} else {
}
break;
}

var G__21424 = args21422.length;
switch (G__21424) {
case 1:
return sablono.core.number_field21421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21422.length)].join('')));

}
});

sablono.core.number_field21421.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.number_field21421.call(null,name__21139__auto__,null);
});

sablono.core.number_field21421.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.number_field21421.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21421);

/**
 * Creates a password input field.
 */
sablono.core.password_field21425 = (function sablono$core$password_field21425(var_args){
var args21426 = [];
var len__19529__auto___21493 = arguments.length;
var i__19530__auto___21494 = (0);
while(true){
if((i__19530__auto___21494 < len__19529__auto___21493)){
args21426.push((arguments[i__19530__auto___21494]));

var G__21495 = (i__19530__auto___21494 + (1));
i__19530__auto___21494 = G__21495;
continue;
} else {
}
break;
}

var G__21428 = args21426.length;
switch (G__21428) {
case 1:
return sablono.core.password_field21425.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21425.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21426.length)].join('')));

}
});

sablono.core.password_field21425.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.password_field21425.call(null,name__21139__auto__,null);
});

sablono.core.password_field21425.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.password_field21425.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21425);

/**
 * Creates a range input field.
 */
sablono.core.range_field21429 = (function sablono$core$range_field21429(var_args){
var args21430 = [];
var len__19529__auto___21497 = arguments.length;
var i__19530__auto___21498 = (0);
while(true){
if((i__19530__auto___21498 < len__19529__auto___21497)){
args21430.push((arguments[i__19530__auto___21498]));

var G__21499 = (i__19530__auto___21498 + (1));
i__19530__auto___21498 = G__21499;
continue;
} else {
}
break;
}

var G__21432 = args21430.length;
switch (G__21432) {
case 1:
return sablono.core.range_field21429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21430.length)].join('')));

}
});

sablono.core.range_field21429.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.range_field21429.call(null,name__21139__auto__,null);
});

sablono.core.range_field21429.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.range_field21429.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21429);

/**
 * Creates a search input field.
 */
sablono.core.search_field21433 = (function sablono$core$search_field21433(var_args){
var args21434 = [];
var len__19529__auto___21501 = arguments.length;
var i__19530__auto___21502 = (0);
while(true){
if((i__19530__auto___21502 < len__19529__auto___21501)){
args21434.push((arguments[i__19530__auto___21502]));

var G__21503 = (i__19530__auto___21502 + (1));
i__19530__auto___21502 = G__21503;
continue;
} else {
}
break;
}

var G__21436 = args21434.length;
switch (G__21436) {
case 1:
return sablono.core.search_field21433.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21433.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21434.length)].join('')));

}
});

sablono.core.search_field21433.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.search_field21433.call(null,name__21139__auto__,null);
});

sablono.core.search_field21433.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.search_field21433.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21433);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21437 = (function sablono$core$tel_field21437(var_args){
var args21438 = [];
var len__19529__auto___21505 = arguments.length;
var i__19530__auto___21506 = (0);
while(true){
if((i__19530__auto___21506 < len__19529__auto___21505)){
args21438.push((arguments[i__19530__auto___21506]));

var G__21507 = (i__19530__auto___21506 + (1));
i__19530__auto___21506 = G__21507;
continue;
} else {
}
break;
}

var G__21440 = args21438.length;
switch (G__21440) {
case 1:
return sablono.core.tel_field21437.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21437.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21438.length)].join('')));

}
});

sablono.core.tel_field21437.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.tel_field21437.call(null,name__21139__auto__,null);
});

sablono.core.tel_field21437.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.tel_field21437.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21437);

/**
 * Creates a text input field.
 */
sablono.core.text_field21441 = (function sablono$core$text_field21441(var_args){
var args21442 = [];
var len__19529__auto___21509 = arguments.length;
var i__19530__auto___21510 = (0);
while(true){
if((i__19530__auto___21510 < len__19529__auto___21509)){
args21442.push((arguments[i__19530__auto___21510]));

var G__21511 = (i__19530__auto___21510 + (1));
i__19530__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var G__21444 = args21442.length;
switch (G__21444) {
case 1:
return sablono.core.text_field21441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21442.length)].join('')));

}
});

sablono.core.text_field21441.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.text_field21441.call(null,name__21139__auto__,null);
});

sablono.core.text_field21441.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.text_field21441.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21441);

/**
 * Creates a time input field.
 */
sablono.core.time_field21445 = (function sablono$core$time_field21445(var_args){
var args21446 = [];
var len__19529__auto___21513 = arguments.length;
var i__19530__auto___21514 = (0);
while(true){
if((i__19530__auto___21514 < len__19529__auto___21513)){
args21446.push((arguments[i__19530__auto___21514]));

var G__21515 = (i__19530__auto___21514 + (1));
i__19530__auto___21514 = G__21515;
continue;
} else {
}
break;
}

var G__21448 = args21446.length;
switch (G__21448) {
case 1:
return sablono.core.time_field21445.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21445.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21446.length)].join('')));

}
});

sablono.core.time_field21445.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.time_field21445.call(null,name__21139__auto__,null);
});

sablono.core.time_field21445.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.time_field21445.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21445);

/**
 * Creates a url input field.
 */
sablono.core.url_field21449 = (function sablono$core$url_field21449(var_args){
var args21450 = [];
var len__19529__auto___21517 = arguments.length;
var i__19530__auto___21518 = (0);
while(true){
if((i__19530__auto___21518 < len__19529__auto___21517)){
args21450.push((arguments[i__19530__auto___21518]));

var G__21519 = (i__19530__auto___21518 + (1));
i__19530__auto___21518 = G__21519;
continue;
} else {
}
break;
}

var G__21452 = args21450.length;
switch (G__21452) {
case 1:
return sablono.core.url_field21449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21450.length)].join('')));

}
});

sablono.core.url_field21449.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.url_field21449.call(null,name__21139__auto__,null);
});

sablono.core.url_field21449.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.url_field21449.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21449);

/**
 * Creates a week input field.
 */
sablono.core.week_field21453 = (function sablono$core$week_field21453(var_args){
var args21454 = [];
var len__19529__auto___21521 = arguments.length;
var i__19530__auto___21522 = (0);
while(true){
if((i__19530__auto___21522 < len__19529__auto___21521)){
args21454.push((arguments[i__19530__auto___21522]));

var G__21523 = (i__19530__auto___21522 + (1));
i__19530__auto___21522 = G__21523;
continue;
} else {
}
break;
}

var G__21456 = args21454.length;
switch (G__21456) {
case 1:
return sablono.core.week_field21453.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21453.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21454.length)].join('')));

}
});

sablono.core.week_field21453.cljs$core$IFn$_invoke$arity$1 = (function (name__21139__auto__){
return sablono.core.week_field21453.call(null,name__21139__auto__,null);
});

sablono.core.week_field21453.cljs$core$IFn$_invoke$arity$2 = (function (name__21139__auto__,value__21140__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__21139__auto__,value__21140__auto__);
});

sablono.core.week_field21453.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21453);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21525 = (function sablono$core$check_box21525(var_args){
var args21526 = [];
var len__19529__auto___21529 = arguments.length;
var i__19530__auto___21530 = (0);
while(true){
if((i__19530__auto___21530 < len__19529__auto___21529)){
args21526.push((arguments[i__19530__auto___21530]));

var G__21531 = (i__19530__auto___21530 + (1));
i__19530__auto___21530 = G__21531;
continue;
} else {
}
break;
}

var G__21528 = args21526.length;
switch (G__21528) {
case 1:
return sablono.core.check_box21525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21525.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21526.length)].join('')));

}
});

sablono.core.check_box21525.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box21525.call(null,name,null);
});

sablono.core.check_box21525.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box21525.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box21525.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box21525.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21525);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21533 = (function sablono$core$radio_button21533(var_args){
var args21534 = [];
var len__19529__auto___21537 = arguments.length;
var i__19530__auto___21538 = (0);
while(true){
if((i__19530__auto___21538 < len__19529__auto___21537)){
args21534.push((arguments[i__19530__auto___21538]));

var G__21539 = (i__19530__auto___21538 + (1));
i__19530__auto___21538 = G__21539;
continue;
} else {
}
break;
}

var G__21536 = args21534.length;
switch (G__21536) {
case 1:
return sablono.core.radio_button21533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21533.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21534.length)].join('')));

}
});

sablono.core.radio_button21533.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button21533.call(null,group,null);
});

sablono.core.radio_button21533.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button21533.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button21533.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button21533.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21533);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21541 = (function sablono$core$select_options21541(coll){
var iter__19239__auto__ = (function sablono$core$select_options21541_$_iter__21550(s__21551){
return (new cljs.core.LazySeq(null,(function (){
var s__21551__$1 = s__21551;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21551__$1);
if(temp__4657__auto__){
var s__21551__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21551__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__21551__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__21553 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__21552 = (0);
while(true){
if((i__21552 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__21552);
cljs.core.chunk_append.call(null,b__21553,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21556 = x;
var text = cljs.core.nth.call(null,vec__21556,(0),null);
var val = cljs.core.nth.call(null,vec__21556,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21556,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options21541.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__21558 = (i__21552 + (1));
i__21552 = G__21558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21553),sablono$core$select_options21541_$_iter__21550.call(null,cljs.core.chunk_rest.call(null,s__21551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21553),null);
}
} else {
var x = cljs.core.first.call(null,s__21551__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21557 = x;
var text = cljs.core.nth.call(null,vec__21557,(0),null);
var val = cljs.core.nth.call(null,vec__21557,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21557,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options21541.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options21541_$_iter__21550.call(null,cljs.core.rest.call(null,s__21551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21541);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21559 = (function sablono$core$drop_down21559(var_args){
var args21560 = [];
var len__19529__auto___21563 = arguments.length;
var i__19530__auto___21564 = (0);
while(true){
if((i__19530__auto___21564 < len__19529__auto___21563)){
args21560.push((arguments[i__19530__auto___21564]));

var G__21565 = (i__19530__auto___21564 + (1));
i__19530__auto___21564 = G__21565;
continue;
} else {
}
break;
}

var G__21562 = args21560.length;
switch (G__21562) {
case 2:
return sablono.core.drop_down21559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21559.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21560.length)].join('')));

}
});

sablono.core.drop_down21559.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21559.call(null,name,options,null);
});

sablono.core.drop_down21559.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down21559.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21559);
/**
 * Creates a text area element.
 */
sablono.core.text_area21567 = (function sablono$core$text_area21567(var_args){
var args21568 = [];
var len__19529__auto___21571 = arguments.length;
var i__19530__auto___21572 = (0);
while(true){
if((i__19530__auto___21572 < len__19529__auto___21571)){
args21568.push((arguments[i__19530__auto___21572]));

var G__21573 = (i__19530__auto___21572 + (1));
i__19530__auto___21572 = G__21573;
continue;
} else {
}
break;
}

var G__21570 = args21568.length;
switch (G__21570) {
case 1:
return sablono.core.text_area21567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21568.length)].join('')));

}
});

sablono.core.text_area21567.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area21567.call(null,name,null);
});

sablono.core.text_area21567.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area21567.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21567);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21575 = (function sablono$core$label21575(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21575);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21576 = (function sablono$core$submit_button21576(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21576);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21577 = (function sablono$core$reset_button21577(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21577);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21578 = (function sablono$core$form_to21578(var_args){
var args__19536__auto__ = [];
var len__19529__auto___21583 = arguments.length;
var i__19530__auto___21584 = (0);
while(true){
if((i__19530__auto___21584 < len__19529__auto___21583)){
args__19536__auto__.push((arguments[i__19530__auto___21584]));

var G__21585 = (i__19530__auto___21584 + (1));
i__19530__auto___21584 = G__21585;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to21578.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to21578.cljs$core$IFn$_invoke$arity$variadic = (function (p__21581,body){
var vec__21582 = p__21581;
var method = cljs.core.nth.call(null,vec__21582,(0),null);
var action = cljs.core.nth.call(null,vec__21582,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to21578.cljs$lang$maxFixedArity = (1);

sablono.core.form_to21578.cljs$lang$applyTo = (function (seq21579){
var G__21580 = cljs.core.first.call(null,seq21579);
var seq21579__$1 = cljs.core.next.call(null,seq21579);
return sablono.core.form_to21578.cljs$core$IFn$_invoke$arity$variadic(G__21580,seq21579__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21578);

//# sourceMappingURL=core.js.map?rel=1506396184742