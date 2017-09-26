// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25506_25520 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25507_25521 = null;
var count__25508_25522 = (0);
var i__25509_25523 = (0);
while(true){
if((i__25509_25523 < count__25508_25522)){
var f_25524 = cljs.core._nth.call(null,chunk__25507_25521,i__25509_25523);
cljs.core.println.call(null,"  ",f_25524);

var G__25525 = seq__25506_25520;
var G__25526 = chunk__25507_25521;
var G__25527 = count__25508_25522;
var G__25528 = (i__25509_25523 + (1));
seq__25506_25520 = G__25525;
chunk__25507_25521 = G__25526;
count__25508_25522 = G__25527;
i__25509_25523 = G__25528;
continue;
} else {
var temp__4657__auto___25529 = cljs.core.seq.call(null,seq__25506_25520);
if(temp__4657__auto___25529){
var seq__25506_25530__$1 = temp__4657__auto___25529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25506_25530__$1)){
var c__19270__auto___25531 = cljs.core.chunk_first.call(null,seq__25506_25530__$1);
var G__25532 = cljs.core.chunk_rest.call(null,seq__25506_25530__$1);
var G__25533 = c__19270__auto___25531;
var G__25534 = cljs.core.count.call(null,c__19270__auto___25531);
var G__25535 = (0);
seq__25506_25520 = G__25532;
chunk__25507_25521 = G__25533;
count__25508_25522 = G__25534;
i__25509_25523 = G__25535;
continue;
} else {
var f_25536 = cljs.core.first.call(null,seq__25506_25530__$1);
cljs.core.println.call(null,"  ",f_25536);

var G__25537 = cljs.core.next.call(null,seq__25506_25530__$1);
var G__25538 = null;
var G__25539 = (0);
var G__25540 = (0);
seq__25506_25520 = G__25537;
chunk__25507_25521 = G__25538;
count__25508_25522 = G__25539;
i__25509_25523 = G__25540;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25541 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25541);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25541)))?cljs.core.second.call(null,arglists_25541):arglists_25541));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25510 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25511 = null;
var count__25512 = (0);
var i__25513 = (0);
while(true){
if((i__25513 < count__25512)){
var vec__25514 = cljs.core._nth.call(null,chunk__25511,i__25513);
var name = cljs.core.nth.call(null,vec__25514,(0),null);
var map__25515 = cljs.core.nth.call(null,vec__25514,(1),null);
var map__25515__$1 = ((((!((map__25515 == null)))?((((map__25515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25515):map__25515);
var doc = cljs.core.get.call(null,map__25515__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25515__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25542 = seq__25510;
var G__25543 = chunk__25511;
var G__25544 = count__25512;
var G__25545 = (i__25513 + (1));
seq__25510 = G__25542;
chunk__25511 = G__25543;
count__25512 = G__25544;
i__25513 = G__25545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25510);
if(temp__4657__auto__){
var seq__25510__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25510__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__25510__$1);
var G__25546 = cljs.core.chunk_rest.call(null,seq__25510__$1);
var G__25547 = c__19270__auto__;
var G__25548 = cljs.core.count.call(null,c__19270__auto__);
var G__25549 = (0);
seq__25510 = G__25546;
chunk__25511 = G__25547;
count__25512 = G__25548;
i__25513 = G__25549;
continue;
} else {
var vec__25517 = cljs.core.first.call(null,seq__25510__$1);
var name = cljs.core.nth.call(null,vec__25517,(0),null);
var map__25518 = cljs.core.nth.call(null,vec__25517,(1),null);
var map__25518__$1 = ((((!((map__25518 == null)))?((((map__25518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25518):map__25518);
var doc = cljs.core.get.call(null,map__25518__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25518__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25550 = cljs.core.next.call(null,seq__25510__$1);
var G__25551 = null;
var G__25552 = (0);
var G__25553 = (0);
seq__25510 = G__25550;
chunk__25511 = G__25551;
count__25512 = G__25552;
i__25513 = G__25553;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1506396186777