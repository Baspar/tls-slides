// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21694 = [];
var len__19529__auto___21700 = arguments.length;
var i__19530__auto___21701 = (0);
while(true){
if((i__19530__auto___21701 < len__19529__auto___21700)){
args21694.push((arguments[i__19530__auto___21701]));

var G__21702 = (i__19530__auto___21701 + (1));
i__19530__auto___21701 = G__21702;
continue;
} else {
}
break;
}

var G__21696 = args21694.length;
switch (G__21696) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21694.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21697 = (function (f,blockable,meta21698){
this.f = f;
this.blockable = blockable;
this.meta21698 = meta21698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21699,meta21698__$1){
var self__ = this;
var _21699__$1 = this;
return (new cljs.core.async.t_cljs$core$async21697(self__.f,self__.blockable,meta21698__$1));
});

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21699){
var self__ = this;
var _21699__$1 = this;
return self__.meta21698;
});

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21698","meta21698",1512254968,null)], null);
});

cljs.core.async.t_cljs$core$async21697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21697";

cljs.core.async.t_cljs$core$async21697.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21697");
});

cljs.core.async.__GT_t_cljs$core$async21697 = (function cljs$core$async$__GT_t_cljs$core$async21697(f__$1,blockable__$1,meta21698){
return (new cljs.core.async.t_cljs$core$async21697(f__$1,blockable__$1,meta21698));
});

}

return (new cljs.core.async.t_cljs$core$async21697(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21706 = [];
var len__19529__auto___21709 = arguments.length;
var i__19530__auto___21710 = (0);
while(true){
if((i__19530__auto___21710 < len__19529__auto___21709)){
args21706.push((arguments[i__19530__auto___21710]));

var G__21711 = (i__19530__auto___21710 + (1));
i__19530__auto___21710 = G__21711;
continue;
} else {
}
break;
}

var G__21708 = args21706.length;
switch (G__21708) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21706.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21713 = [];
var len__19529__auto___21716 = arguments.length;
var i__19530__auto___21717 = (0);
while(true){
if((i__19530__auto___21717 < len__19529__auto___21716)){
args21713.push((arguments[i__19530__auto___21717]));

var G__21718 = (i__19530__auto___21717 + (1));
i__19530__auto___21717 = G__21718;
continue;
} else {
}
break;
}

var G__21715 = args21713.length;
switch (G__21715) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21713.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21720 = [];
var len__19529__auto___21723 = arguments.length;
var i__19530__auto___21724 = (0);
while(true){
if((i__19530__auto___21724 < len__19529__auto___21723)){
args21720.push((arguments[i__19530__auto___21724]));

var G__21725 = (i__19530__auto___21724 + (1));
i__19530__auto___21724 = G__21725;
continue;
} else {
}
break;
}

var G__21722 = args21720.length;
switch (G__21722) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21720.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21727 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21727);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21727,ret){
return (function (){
return fn1.call(null,val_21727);
});})(val_21727,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21728 = [];
var len__19529__auto___21731 = arguments.length;
var i__19530__auto___21732 = (0);
while(true){
if((i__19530__auto___21732 < len__19529__auto___21731)){
args21728.push((arguments[i__19530__auto___21732]));

var G__21733 = (i__19530__auto___21732 + (1));
i__19530__auto___21732 = G__21733;
continue;
} else {
}
break;
}

var G__21730 = args21728.length;
switch (G__21730) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21728.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19374__auto___21735 = n;
var x_21736 = (0);
while(true){
if((x_21736 < n__19374__auto___21735)){
(a[x_21736] = (0));

var G__21737 = (x_21736 + (1));
x_21736 = G__21737;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21738 = (i + (1));
i = G__21738;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21742 = (function (alt_flag,flag,meta21743){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21743 = meta21743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21744,meta21743__$1){
var self__ = this;
var _21744__$1 = this;
return (new cljs.core.async.t_cljs$core$async21742(self__.alt_flag,self__.flag,meta21743__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21744){
var self__ = this;
var _21744__$1 = this;
return self__.meta21743;
});})(flag))
;

cljs.core.async.t_cljs$core$async21742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21742.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21743","meta21743",1938100538,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21742";

cljs.core.async.t_cljs$core$async21742.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21742");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21742 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21742(alt_flag__$1,flag__$1,meta21743){
return (new cljs.core.async.t_cljs$core$async21742(alt_flag__$1,flag__$1,meta21743));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21742(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21748 = (function (alt_handler,flag,cb,meta21749){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21749 = meta21749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21750,meta21749__$1){
var self__ = this;
var _21750__$1 = this;
return (new cljs.core.async.t_cljs$core$async21748(self__.alt_handler,self__.flag,self__.cb,meta21749__$1));
});

cljs.core.async.t_cljs$core$async21748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21750){
var self__ = this;
var _21750__$1 = this;
return self__.meta21749;
});

cljs.core.async.t_cljs$core$async21748.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21749","meta21749",427630014,null)], null);
});

cljs.core.async.t_cljs$core$async21748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21748";

cljs.core.async.t_cljs$core$async21748.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21748");
});

cljs.core.async.__GT_t_cljs$core$async21748 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21748(alt_handler__$1,flag__$1,cb__$1,meta21749){
return (new cljs.core.async.t_cljs$core$async21748(alt_handler__$1,flag__$1,cb__$1,meta21749));
});

}

return (new cljs.core.async.t_cljs$core$async21748(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21751_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21751_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21752_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18459__auto__ = wport;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21753 = (i + (1));
i = G__21753;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18459__auto__ = ret;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18447__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___21759 = arguments.length;
var i__19530__auto___21760 = (0);
while(true){
if((i__19530__auto___21760 < len__19529__auto___21759)){
args__19536__auto__.push((arguments[i__19530__auto___21760]));

var G__21761 = (i__19530__auto___21760 + (1));
i__19530__auto___21760 = G__21761;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21756){
var map__21757 = p__21756;
var map__21757__$1 = ((((!((map__21757 == null)))?((((map__21757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21757):map__21757);
var opts = map__21757__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21754){
var G__21755 = cljs.core.first.call(null,seq21754);
var seq21754__$1 = cljs.core.next.call(null,seq21754);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21755,seq21754__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21762 = [];
var len__19529__auto___21812 = arguments.length;
var i__19530__auto___21813 = (0);
while(true){
if((i__19530__auto___21813 < len__19529__auto___21812)){
args21762.push((arguments[i__19530__auto___21813]));

var G__21814 = (i__19530__auto___21813 + (1));
i__19530__auto___21813 = G__21814;
continue;
} else {
}
break;
}

var G__21764 = args21762.length;
switch (G__21764) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21762.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21649__auto___21816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___21816){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___21816){
return (function (state_21788){
var state_val_21789 = (state_21788[(1)]);
if((state_val_21789 === (7))){
var inst_21784 = (state_21788[(2)]);
var state_21788__$1 = state_21788;
var statearr_21790_21817 = state_21788__$1;
(statearr_21790_21817[(2)] = inst_21784);

(statearr_21790_21817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (1))){
var state_21788__$1 = state_21788;
var statearr_21791_21818 = state_21788__$1;
(statearr_21791_21818[(2)] = null);

(statearr_21791_21818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (4))){
var inst_21767 = (state_21788[(7)]);
var inst_21767__$1 = (state_21788[(2)]);
var inst_21768 = (inst_21767__$1 == null);
var state_21788__$1 = (function (){var statearr_21792 = state_21788;
(statearr_21792[(7)] = inst_21767__$1);

return statearr_21792;
})();
if(cljs.core.truth_(inst_21768)){
var statearr_21793_21819 = state_21788__$1;
(statearr_21793_21819[(1)] = (5));

} else {
var statearr_21794_21820 = state_21788__$1;
(statearr_21794_21820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (13))){
var state_21788__$1 = state_21788;
var statearr_21795_21821 = state_21788__$1;
(statearr_21795_21821[(2)] = null);

(statearr_21795_21821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (6))){
var inst_21767 = (state_21788[(7)]);
var state_21788__$1 = state_21788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21788__$1,(11),to,inst_21767);
} else {
if((state_val_21789 === (3))){
var inst_21786 = (state_21788[(2)]);
var state_21788__$1 = state_21788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21788__$1,inst_21786);
} else {
if((state_val_21789 === (12))){
var state_21788__$1 = state_21788;
var statearr_21796_21822 = state_21788__$1;
(statearr_21796_21822[(2)] = null);

(statearr_21796_21822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (2))){
var state_21788__$1 = state_21788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21788__$1,(4),from);
} else {
if((state_val_21789 === (11))){
var inst_21777 = (state_21788[(2)]);
var state_21788__$1 = state_21788;
if(cljs.core.truth_(inst_21777)){
var statearr_21797_21823 = state_21788__$1;
(statearr_21797_21823[(1)] = (12));

} else {
var statearr_21798_21824 = state_21788__$1;
(statearr_21798_21824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (9))){
var state_21788__$1 = state_21788;
var statearr_21799_21825 = state_21788__$1;
(statearr_21799_21825[(2)] = null);

(statearr_21799_21825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (5))){
var state_21788__$1 = state_21788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21800_21826 = state_21788__$1;
(statearr_21800_21826[(1)] = (8));

} else {
var statearr_21801_21827 = state_21788__$1;
(statearr_21801_21827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (14))){
var inst_21782 = (state_21788[(2)]);
var state_21788__$1 = state_21788;
var statearr_21802_21828 = state_21788__$1;
(statearr_21802_21828[(2)] = inst_21782);

(statearr_21802_21828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (10))){
var inst_21774 = (state_21788[(2)]);
var state_21788__$1 = state_21788;
var statearr_21803_21829 = state_21788__$1;
(statearr_21803_21829[(2)] = inst_21774);

(statearr_21803_21829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (8))){
var inst_21771 = cljs.core.async.close_BANG_.call(null,to);
var state_21788__$1 = state_21788;
var statearr_21804_21830 = state_21788__$1;
(statearr_21804_21830[(2)] = inst_21771);

(statearr_21804_21830[(1)] = (10));


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
});})(c__21649__auto___21816))
;
return ((function (switch__20472__auto__,c__21649__auto___21816){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_21808 = [null,null,null,null,null,null,null,null];
(statearr_21808[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_21808[(1)] = (1));

return statearr_21808;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_21788){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_21788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e21809){if((e21809 instanceof Object)){
var ex__20476__auto__ = e21809;
var statearr_21810_21831 = state_21788;
(statearr_21810_21831[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21832 = state_21788;
state_21788 = G__21832;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_21788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_21788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___21816))
})();
var state__21651__auto__ = (function (){var statearr_21811 = f__21650__auto__.call(null);
(statearr_21811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___21816);

return statearr_21811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___21816))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22016){
var vec__22017 = p__22016;
var v = cljs.core.nth.call(null,vec__22017,(0),null);
var p = cljs.core.nth.call(null,vec__22017,(1),null);
var job = vec__22017;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21649__auto___22199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___22199,res,vec__22017,v,p,job,jobs,results){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___22199,res,vec__22017,v,p,job,jobs,results){
return (function (state_22022){
var state_val_22023 = (state_22022[(1)]);
if((state_val_22023 === (1))){
var state_22022__$1 = state_22022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22022__$1,(2),res,v);
} else {
if((state_val_22023 === (2))){
var inst_22019 = (state_22022[(2)]);
var inst_22020 = cljs.core.async.close_BANG_.call(null,res);
var state_22022__$1 = (function (){var statearr_22024 = state_22022;
(statearr_22024[(7)] = inst_22019);

return statearr_22024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22022__$1,inst_22020);
} else {
return null;
}
}
});})(c__21649__auto___22199,res,vec__22017,v,p,job,jobs,results))
;
return ((function (switch__20472__auto__,c__21649__auto___22199,res,vec__22017,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22028 = [null,null,null,null,null,null,null,null];
(statearr_22028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22028[(1)] = (1));

return statearr_22028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22022){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22029){if((e22029 instanceof Object)){
var ex__20476__auto__ = e22029;
var statearr_22030_22200 = state_22022;
(statearr_22030_22200[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22201 = state_22022;
state_22022 = G__22201;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___22199,res,vec__22017,v,p,job,jobs,results))
})();
var state__21651__auto__ = (function (){var statearr_22031 = f__21650__auto__.call(null);
(statearr_22031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___22199);

return statearr_22031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___22199,res,vec__22017,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22032){
var vec__22033 = p__22032;
var v = cljs.core.nth.call(null,vec__22033,(0),null);
var p = cljs.core.nth.call(null,vec__22033,(1),null);
var job = vec__22033;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19374__auto___22202 = n;
var __22203 = (0);
while(true){
if((__22203 < n__19374__auto___22202)){
var G__22034_22204 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22034_22204) {
case "compute":
var c__21649__auto___22206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22203,c__21649__auto___22206,G__22034_22204,n__19374__auto___22202,jobs,results,process,async){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (__22203,c__21649__auto___22206,G__22034_22204,n__19374__auto___22202,jobs,results,process,async){
return (function (state_22047){
var state_val_22048 = (state_22047[(1)]);
if((state_val_22048 === (1))){
var state_22047__$1 = state_22047;
var statearr_22049_22207 = state_22047__$1;
(statearr_22049_22207[(2)] = null);

(statearr_22049_22207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (2))){
var state_22047__$1 = state_22047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22047__$1,(4),jobs);
} else {
if((state_val_22048 === (3))){
var inst_22045 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22047__$1,inst_22045);
} else {
if((state_val_22048 === (4))){
var inst_22037 = (state_22047[(2)]);
var inst_22038 = process.call(null,inst_22037);
var state_22047__$1 = state_22047;
if(cljs.core.truth_(inst_22038)){
var statearr_22050_22208 = state_22047__$1;
(statearr_22050_22208[(1)] = (5));

} else {
var statearr_22051_22209 = state_22047__$1;
(statearr_22051_22209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (5))){
var state_22047__$1 = state_22047;
var statearr_22052_22210 = state_22047__$1;
(statearr_22052_22210[(2)] = null);

(statearr_22052_22210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (6))){
var state_22047__$1 = state_22047;
var statearr_22053_22211 = state_22047__$1;
(statearr_22053_22211[(2)] = null);

(statearr_22053_22211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (7))){
var inst_22043 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
var statearr_22054_22212 = state_22047__$1;
(statearr_22054_22212[(2)] = inst_22043);

(statearr_22054_22212[(1)] = (3));


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
});})(__22203,c__21649__auto___22206,G__22034_22204,n__19374__auto___22202,jobs,results,process,async))
;
return ((function (__22203,switch__20472__auto__,c__21649__auto___22206,G__22034_22204,n__19374__auto___22202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22058 = [null,null,null,null,null,null,null];
(statearr_22058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22058[(1)] = (1));

return statearr_22058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22047){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22059){if((e22059 instanceof Object)){
var ex__20476__auto__ = e22059;
var statearr_22060_22213 = state_22047;
(statearr_22060_22213[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22214 = state_22047;
state_22047 = G__22214;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(__22203,switch__20472__auto__,c__21649__auto___22206,G__22034_22204,n__19374__auto___22202,jobs,results,process,async))
})();
var state__21651__auto__ = (function (){var statearr_22061 = f__21650__auto__.call(null);
(statearr_22061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___22206);

return statearr_22061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(__22203,c__21649__auto___22206,G__22034_22204,n__19374__auto___22202,jobs,results,process,async))
);


break;
case "async":
var c__21649__auto___22215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22203,c__21649__auto___22215,G__22034_22204,n__19374__auto___22202,jobs,results,process,async){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (__22203,c__21649__auto___22215,G__22034_22204,n__19374__auto___22202,jobs,results,process,async){
return (function (state_22074){
var state_val_22075 = (state_22074[(1)]);
if((state_val_22075 === (1))){
var state_22074__$1 = state_22074;
var statearr_22076_22216 = state_22074__$1;
(statearr_22076_22216[(2)] = null);

(statearr_22076_22216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (2))){
var state_22074__$1 = state_22074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22074__$1,(4),jobs);
} else {
if((state_val_22075 === (3))){
var inst_22072 = (state_22074[(2)]);
var state_22074__$1 = state_22074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22074__$1,inst_22072);
} else {
if((state_val_22075 === (4))){
var inst_22064 = (state_22074[(2)]);
var inst_22065 = async.call(null,inst_22064);
var state_22074__$1 = state_22074;
if(cljs.core.truth_(inst_22065)){
var statearr_22077_22217 = state_22074__$1;
(statearr_22077_22217[(1)] = (5));

} else {
var statearr_22078_22218 = state_22074__$1;
(statearr_22078_22218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (5))){
var state_22074__$1 = state_22074;
var statearr_22079_22219 = state_22074__$1;
(statearr_22079_22219[(2)] = null);

(statearr_22079_22219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (6))){
var state_22074__$1 = state_22074;
var statearr_22080_22220 = state_22074__$1;
(statearr_22080_22220[(2)] = null);

(statearr_22080_22220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (7))){
var inst_22070 = (state_22074[(2)]);
var state_22074__$1 = state_22074;
var statearr_22081_22221 = state_22074__$1;
(statearr_22081_22221[(2)] = inst_22070);

(statearr_22081_22221[(1)] = (3));


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
});})(__22203,c__21649__auto___22215,G__22034_22204,n__19374__auto___22202,jobs,results,process,async))
;
return ((function (__22203,switch__20472__auto__,c__21649__auto___22215,G__22034_22204,n__19374__auto___22202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22085 = [null,null,null,null,null,null,null];
(statearr_22085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22085[(1)] = (1));

return statearr_22085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22074){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22086){if((e22086 instanceof Object)){
var ex__20476__auto__ = e22086;
var statearr_22087_22222 = state_22074;
(statearr_22087_22222[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22223 = state_22074;
state_22074 = G__22223;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(__22203,switch__20472__auto__,c__21649__auto___22215,G__22034_22204,n__19374__auto___22202,jobs,results,process,async))
})();
var state__21651__auto__ = (function (){var statearr_22088 = f__21650__auto__.call(null);
(statearr_22088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___22215);

return statearr_22088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(__22203,c__21649__auto___22215,G__22034_22204,n__19374__auto___22202,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22224 = (__22203 + (1));
__22203 = G__22224;
continue;
} else {
}
break;
}

var c__21649__auto___22225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___22225,jobs,results,process,async){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___22225,jobs,results,process,async){
return (function (state_22110){
var state_val_22111 = (state_22110[(1)]);
if((state_val_22111 === (1))){
var state_22110__$1 = state_22110;
var statearr_22112_22226 = state_22110__$1;
(statearr_22112_22226[(2)] = null);

(statearr_22112_22226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (2))){
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22110__$1,(4),from);
} else {
if((state_val_22111 === (3))){
var inst_22108 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22110__$1,inst_22108);
} else {
if((state_val_22111 === (4))){
var inst_22091 = (state_22110[(7)]);
var inst_22091__$1 = (state_22110[(2)]);
var inst_22092 = (inst_22091__$1 == null);
var state_22110__$1 = (function (){var statearr_22113 = state_22110;
(statearr_22113[(7)] = inst_22091__$1);

return statearr_22113;
})();
if(cljs.core.truth_(inst_22092)){
var statearr_22114_22227 = state_22110__$1;
(statearr_22114_22227[(1)] = (5));

} else {
var statearr_22115_22228 = state_22110__$1;
(statearr_22115_22228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (5))){
var inst_22094 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22110__$1 = state_22110;
var statearr_22116_22229 = state_22110__$1;
(statearr_22116_22229[(2)] = inst_22094);

(statearr_22116_22229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (6))){
var inst_22096 = (state_22110[(8)]);
var inst_22091 = (state_22110[(7)]);
var inst_22096__$1 = cljs.core.async.chan.call(null,(1));
var inst_22097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22098 = [inst_22091,inst_22096__$1];
var inst_22099 = (new cljs.core.PersistentVector(null,2,(5),inst_22097,inst_22098,null));
var state_22110__$1 = (function (){var statearr_22117 = state_22110;
(statearr_22117[(8)] = inst_22096__$1);

return statearr_22117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22110__$1,(8),jobs,inst_22099);
} else {
if((state_val_22111 === (7))){
var inst_22106 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22118_22230 = state_22110__$1;
(statearr_22118_22230[(2)] = inst_22106);

(statearr_22118_22230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (8))){
var inst_22096 = (state_22110[(8)]);
var inst_22101 = (state_22110[(2)]);
var state_22110__$1 = (function (){var statearr_22119 = state_22110;
(statearr_22119[(9)] = inst_22101);

return statearr_22119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22110__$1,(9),results,inst_22096);
} else {
if((state_val_22111 === (9))){
var inst_22103 = (state_22110[(2)]);
var state_22110__$1 = (function (){var statearr_22120 = state_22110;
(statearr_22120[(10)] = inst_22103);

return statearr_22120;
})();
var statearr_22121_22231 = state_22110__$1;
(statearr_22121_22231[(2)] = null);

(statearr_22121_22231[(1)] = (2));


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
});})(c__21649__auto___22225,jobs,results,process,async))
;
return ((function (switch__20472__auto__,c__21649__auto___22225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22125[(1)] = (1));

return statearr_22125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22110){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22126){if((e22126 instanceof Object)){
var ex__20476__auto__ = e22126;
var statearr_22127_22232 = state_22110;
(statearr_22127_22232[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22233 = state_22110;
state_22110 = G__22233;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___22225,jobs,results,process,async))
})();
var state__21651__auto__ = (function (){var statearr_22128 = f__21650__auto__.call(null);
(statearr_22128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___22225);

return statearr_22128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___22225,jobs,results,process,async))
);


var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__,jobs,results,process,async){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__,jobs,results,process,async){
return (function (state_22166){
var state_val_22167 = (state_22166[(1)]);
if((state_val_22167 === (7))){
var inst_22162 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
var statearr_22168_22234 = state_22166__$1;
(statearr_22168_22234[(2)] = inst_22162);

(statearr_22168_22234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (20))){
var state_22166__$1 = state_22166;
var statearr_22169_22235 = state_22166__$1;
(statearr_22169_22235[(2)] = null);

(statearr_22169_22235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (1))){
var state_22166__$1 = state_22166;
var statearr_22170_22236 = state_22166__$1;
(statearr_22170_22236[(2)] = null);

(statearr_22170_22236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (4))){
var inst_22131 = (state_22166[(7)]);
var inst_22131__$1 = (state_22166[(2)]);
var inst_22132 = (inst_22131__$1 == null);
var state_22166__$1 = (function (){var statearr_22171 = state_22166;
(statearr_22171[(7)] = inst_22131__$1);

return statearr_22171;
})();
if(cljs.core.truth_(inst_22132)){
var statearr_22172_22237 = state_22166__$1;
(statearr_22172_22237[(1)] = (5));

} else {
var statearr_22173_22238 = state_22166__$1;
(statearr_22173_22238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (15))){
var inst_22144 = (state_22166[(8)]);
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22166__$1,(18),to,inst_22144);
} else {
if((state_val_22167 === (21))){
var inst_22157 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
var statearr_22174_22239 = state_22166__$1;
(statearr_22174_22239[(2)] = inst_22157);

(statearr_22174_22239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (13))){
var inst_22159 = (state_22166[(2)]);
var state_22166__$1 = (function (){var statearr_22175 = state_22166;
(statearr_22175[(9)] = inst_22159);

return statearr_22175;
})();
var statearr_22176_22240 = state_22166__$1;
(statearr_22176_22240[(2)] = null);

(statearr_22176_22240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (6))){
var inst_22131 = (state_22166[(7)]);
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22166__$1,(11),inst_22131);
} else {
if((state_val_22167 === (17))){
var inst_22152 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
if(cljs.core.truth_(inst_22152)){
var statearr_22177_22241 = state_22166__$1;
(statearr_22177_22241[(1)] = (19));

} else {
var statearr_22178_22242 = state_22166__$1;
(statearr_22178_22242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (3))){
var inst_22164 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22166__$1,inst_22164);
} else {
if((state_val_22167 === (12))){
var inst_22141 = (state_22166[(10)]);
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22166__$1,(14),inst_22141);
} else {
if((state_val_22167 === (2))){
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22166__$1,(4),results);
} else {
if((state_val_22167 === (19))){
var state_22166__$1 = state_22166;
var statearr_22179_22243 = state_22166__$1;
(statearr_22179_22243[(2)] = null);

(statearr_22179_22243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (11))){
var inst_22141 = (state_22166[(2)]);
var state_22166__$1 = (function (){var statearr_22180 = state_22166;
(statearr_22180[(10)] = inst_22141);

return statearr_22180;
})();
var statearr_22181_22244 = state_22166__$1;
(statearr_22181_22244[(2)] = null);

(statearr_22181_22244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (9))){
var state_22166__$1 = state_22166;
var statearr_22182_22245 = state_22166__$1;
(statearr_22182_22245[(2)] = null);

(statearr_22182_22245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (5))){
var state_22166__$1 = state_22166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22183_22246 = state_22166__$1;
(statearr_22183_22246[(1)] = (8));

} else {
var statearr_22184_22247 = state_22166__$1;
(statearr_22184_22247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (14))){
var inst_22146 = (state_22166[(11)]);
var inst_22144 = (state_22166[(8)]);
var inst_22144__$1 = (state_22166[(2)]);
var inst_22145 = (inst_22144__$1 == null);
var inst_22146__$1 = cljs.core.not.call(null,inst_22145);
var state_22166__$1 = (function (){var statearr_22185 = state_22166;
(statearr_22185[(11)] = inst_22146__$1);

(statearr_22185[(8)] = inst_22144__$1);

return statearr_22185;
})();
if(inst_22146__$1){
var statearr_22186_22248 = state_22166__$1;
(statearr_22186_22248[(1)] = (15));

} else {
var statearr_22187_22249 = state_22166__$1;
(statearr_22187_22249[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (16))){
var inst_22146 = (state_22166[(11)]);
var state_22166__$1 = state_22166;
var statearr_22188_22250 = state_22166__$1;
(statearr_22188_22250[(2)] = inst_22146);

(statearr_22188_22250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (10))){
var inst_22138 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
var statearr_22189_22251 = state_22166__$1;
(statearr_22189_22251[(2)] = inst_22138);

(statearr_22189_22251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (18))){
var inst_22149 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
var statearr_22190_22252 = state_22166__$1;
(statearr_22190_22252[(2)] = inst_22149);

(statearr_22190_22252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (8))){
var inst_22135 = cljs.core.async.close_BANG_.call(null,to);
var state_22166__$1 = state_22166;
var statearr_22191_22253 = state_22166__$1;
(statearr_22191_22253[(2)] = inst_22135);

(statearr_22191_22253[(1)] = (10));


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
});})(c__21649__auto__,jobs,results,process,async))
;
return ((function (switch__20472__auto__,c__21649__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22195[(1)] = (1));

return statearr_22195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22166){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22196){if((e22196 instanceof Object)){
var ex__20476__auto__ = e22196;
var statearr_22197_22254 = state_22166;
(statearr_22197_22254[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22255 = state_22166;
state_22166 = G__22255;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__,jobs,results,process,async))
})();
var state__21651__auto__ = (function (){var statearr_22198 = f__21650__auto__.call(null);
(statearr_22198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_22198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__,jobs,results,process,async))
);

return c__21649__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22256 = [];
var len__19529__auto___22259 = arguments.length;
var i__19530__auto___22260 = (0);
while(true){
if((i__19530__auto___22260 < len__19529__auto___22259)){
args22256.push((arguments[i__19530__auto___22260]));

var G__22261 = (i__19530__auto___22260 + (1));
i__19530__auto___22260 = G__22261;
continue;
} else {
}
break;
}

var G__22258 = args22256.length;
switch (G__22258) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22256.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22263 = [];
var len__19529__auto___22266 = arguments.length;
var i__19530__auto___22267 = (0);
while(true){
if((i__19530__auto___22267 < len__19529__auto___22266)){
args22263.push((arguments[i__19530__auto___22267]));

var G__22268 = (i__19530__auto___22267 + (1));
i__19530__auto___22267 = G__22268;
continue;
} else {
}
break;
}

var G__22265 = args22263.length;
switch (G__22265) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22263.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22270 = [];
var len__19529__auto___22323 = arguments.length;
var i__19530__auto___22324 = (0);
while(true){
if((i__19530__auto___22324 < len__19529__auto___22323)){
args22270.push((arguments[i__19530__auto___22324]));

var G__22325 = (i__19530__auto___22324 + (1));
i__19530__auto___22324 = G__22325;
continue;
} else {
}
break;
}

var G__22272 = args22270.length;
switch (G__22272) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22270.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21649__auto___22327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___22327,tc,fc){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___22327,tc,fc){
return (function (state_22298){
var state_val_22299 = (state_22298[(1)]);
if((state_val_22299 === (7))){
var inst_22294 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22300_22328 = state_22298__$1;
(statearr_22300_22328[(2)] = inst_22294);

(statearr_22300_22328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (1))){
var state_22298__$1 = state_22298;
var statearr_22301_22329 = state_22298__$1;
(statearr_22301_22329[(2)] = null);

(statearr_22301_22329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (4))){
var inst_22275 = (state_22298[(7)]);
var inst_22275__$1 = (state_22298[(2)]);
var inst_22276 = (inst_22275__$1 == null);
var state_22298__$1 = (function (){var statearr_22302 = state_22298;
(statearr_22302[(7)] = inst_22275__$1);

return statearr_22302;
})();
if(cljs.core.truth_(inst_22276)){
var statearr_22303_22330 = state_22298__$1;
(statearr_22303_22330[(1)] = (5));

} else {
var statearr_22304_22331 = state_22298__$1;
(statearr_22304_22331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (13))){
var state_22298__$1 = state_22298;
var statearr_22305_22332 = state_22298__$1;
(statearr_22305_22332[(2)] = null);

(statearr_22305_22332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (6))){
var inst_22275 = (state_22298[(7)]);
var inst_22281 = p.call(null,inst_22275);
var state_22298__$1 = state_22298;
if(cljs.core.truth_(inst_22281)){
var statearr_22306_22333 = state_22298__$1;
(statearr_22306_22333[(1)] = (9));

} else {
var statearr_22307_22334 = state_22298__$1;
(statearr_22307_22334[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (3))){
var inst_22296 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22298__$1,inst_22296);
} else {
if((state_val_22299 === (12))){
var state_22298__$1 = state_22298;
var statearr_22308_22335 = state_22298__$1;
(statearr_22308_22335[(2)] = null);

(statearr_22308_22335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (2))){
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22298__$1,(4),ch);
} else {
if((state_val_22299 === (11))){
var inst_22275 = (state_22298[(7)]);
var inst_22285 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22298__$1,(8),inst_22285,inst_22275);
} else {
if((state_val_22299 === (9))){
var state_22298__$1 = state_22298;
var statearr_22309_22336 = state_22298__$1;
(statearr_22309_22336[(2)] = tc);

(statearr_22309_22336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (5))){
var inst_22278 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22279 = cljs.core.async.close_BANG_.call(null,fc);
var state_22298__$1 = (function (){var statearr_22310 = state_22298;
(statearr_22310[(8)] = inst_22278);

return statearr_22310;
})();
var statearr_22311_22337 = state_22298__$1;
(statearr_22311_22337[(2)] = inst_22279);

(statearr_22311_22337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (14))){
var inst_22292 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22312_22338 = state_22298__$1;
(statearr_22312_22338[(2)] = inst_22292);

(statearr_22312_22338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (10))){
var state_22298__$1 = state_22298;
var statearr_22313_22339 = state_22298__$1;
(statearr_22313_22339[(2)] = fc);

(statearr_22313_22339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (8))){
var inst_22287 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
if(cljs.core.truth_(inst_22287)){
var statearr_22314_22340 = state_22298__$1;
(statearr_22314_22340[(1)] = (12));

} else {
var statearr_22315_22341 = state_22298__$1;
(statearr_22315_22341[(1)] = (13));

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
});})(c__21649__auto___22327,tc,fc))
;
return ((function (switch__20472__auto__,c__21649__auto___22327,tc,fc){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_22319 = [null,null,null,null,null,null,null,null,null];
(statearr_22319[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_22319[(1)] = (1));

return statearr_22319;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_22298){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22320){if((e22320 instanceof Object)){
var ex__20476__auto__ = e22320;
var statearr_22321_22342 = state_22298;
(statearr_22321_22342[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22343 = state_22298;
state_22298 = G__22343;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_22298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_22298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___22327,tc,fc))
})();
var state__21651__auto__ = (function (){var statearr_22322 = f__21650__auto__.call(null);
(statearr_22322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___22327);

return statearr_22322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___22327,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__){
return (function (state_22407){
var state_val_22408 = (state_22407[(1)]);
if((state_val_22408 === (7))){
var inst_22403 = (state_22407[(2)]);
var state_22407__$1 = state_22407;
var statearr_22409_22430 = state_22407__$1;
(statearr_22409_22430[(2)] = inst_22403);

(statearr_22409_22430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22408 === (1))){
var inst_22387 = init;
var state_22407__$1 = (function (){var statearr_22410 = state_22407;
(statearr_22410[(7)] = inst_22387);

return statearr_22410;
})();
var statearr_22411_22431 = state_22407__$1;
(statearr_22411_22431[(2)] = null);

(statearr_22411_22431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22408 === (4))){
var inst_22390 = (state_22407[(8)]);
var inst_22390__$1 = (state_22407[(2)]);
var inst_22391 = (inst_22390__$1 == null);
var state_22407__$1 = (function (){var statearr_22412 = state_22407;
(statearr_22412[(8)] = inst_22390__$1);

return statearr_22412;
})();
if(cljs.core.truth_(inst_22391)){
var statearr_22413_22432 = state_22407__$1;
(statearr_22413_22432[(1)] = (5));

} else {
var statearr_22414_22433 = state_22407__$1;
(statearr_22414_22433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22408 === (6))){
var inst_22394 = (state_22407[(9)]);
var inst_22387 = (state_22407[(7)]);
var inst_22390 = (state_22407[(8)]);
var inst_22394__$1 = f.call(null,inst_22387,inst_22390);
var inst_22395 = cljs.core.reduced_QMARK_.call(null,inst_22394__$1);
var state_22407__$1 = (function (){var statearr_22415 = state_22407;
(statearr_22415[(9)] = inst_22394__$1);

return statearr_22415;
})();
if(inst_22395){
var statearr_22416_22434 = state_22407__$1;
(statearr_22416_22434[(1)] = (8));

} else {
var statearr_22417_22435 = state_22407__$1;
(statearr_22417_22435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22408 === (3))){
var inst_22405 = (state_22407[(2)]);
var state_22407__$1 = state_22407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22407__$1,inst_22405);
} else {
if((state_val_22408 === (2))){
var state_22407__$1 = state_22407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22407__$1,(4),ch);
} else {
if((state_val_22408 === (9))){
var inst_22394 = (state_22407[(9)]);
var inst_22387 = inst_22394;
var state_22407__$1 = (function (){var statearr_22418 = state_22407;
(statearr_22418[(7)] = inst_22387);

return statearr_22418;
})();
var statearr_22419_22436 = state_22407__$1;
(statearr_22419_22436[(2)] = null);

(statearr_22419_22436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22408 === (5))){
var inst_22387 = (state_22407[(7)]);
var state_22407__$1 = state_22407;
var statearr_22420_22437 = state_22407__$1;
(statearr_22420_22437[(2)] = inst_22387);

(statearr_22420_22437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22408 === (10))){
var inst_22401 = (state_22407[(2)]);
var state_22407__$1 = state_22407;
var statearr_22421_22438 = state_22407__$1;
(statearr_22421_22438[(2)] = inst_22401);

(statearr_22421_22438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22408 === (8))){
var inst_22394 = (state_22407[(9)]);
var inst_22397 = cljs.core.deref.call(null,inst_22394);
var state_22407__$1 = state_22407;
var statearr_22422_22439 = state_22407__$1;
(statearr_22422_22439[(2)] = inst_22397);

(statearr_22422_22439[(1)] = (10));


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
});})(c__21649__auto__))
;
return ((function (switch__20472__auto__,c__21649__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20473__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20473__auto____0 = (function (){
var statearr_22426 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22426[(0)] = cljs$core$async$reduce_$_state_machine__20473__auto__);

(statearr_22426[(1)] = (1));

return statearr_22426;
});
var cljs$core$async$reduce_$_state_machine__20473__auto____1 = (function (state_22407){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22427){if((e22427 instanceof Object)){
var ex__20476__auto__ = e22427;
var statearr_22428_22440 = state_22407;
(statearr_22428_22440[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22441 = state_22407;
state_22407 = G__22441;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20473__auto__ = function(state_22407){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20473__auto____1.call(this,state_22407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20473__auto____0;
cljs$core$async$reduce_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20473__auto____1;
return cljs$core$async$reduce_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__))
})();
var state__21651__auto__ = (function (){var statearr_22429 = f__21650__auto__.call(null);
(statearr_22429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_22429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__))
);

return c__21649__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22442 = [];
var len__19529__auto___22494 = arguments.length;
var i__19530__auto___22495 = (0);
while(true){
if((i__19530__auto___22495 < len__19529__auto___22494)){
args22442.push((arguments[i__19530__auto___22495]));

var G__22496 = (i__19530__auto___22495 + (1));
i__19530__auto___22495 = G__22496;
continue;
} else {
}
break;
}

var G__22444 = args22442.length;
switch (G__22444) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22442.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__){
return (function (state_22469){
var state_val_22470 = (state_22469[(1)]);
if((state_val_22470 === (7))){
var inst_22451 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
var statearr_22471_22498 = state_22469__$1;
(statearr_22471_22498[(2)] = inst_22451);

(statearr_22471_22498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (1))){
var inst_22445 = cljs.core.seq.call(null,coll);
var inst_22446 = inst_22445;
var state_22469__$1 = (function (){var statearr_22472 = state_22469;
(statearr_22472[(7)] = inst_22446);

return statearr_22472;
})();
var statearr_22473_22499 = state_22469__$1;
(statearr_22473_22499[(2)] = null);

(statearr_22473_22499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (4))){
var inst_22446 = (state_22469[(7)]);
var inst_22449 = cljs.core.first.call(null,inst_22446);
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22469__$1,(7),ch,inst_22449);
} else {
if((state_val_22470 === (13))){
var inst_22463 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
var statearr_22474_22500 = state_22469__$1;
(statearr_22474_22500[(2)] = inst_22463);

(statearr_22474_22500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (6))){
var inst_22454 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
if(cljs.core.truth_(inst_22454)){
var statearr_22475_22501 = state_22469__$1;
(statearr_22475_22501[(1)] = (8));

} else {
var statearr_22476_22502 = state_22469__$1;
(statearr_22476_22502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (3))){
var inst_22467 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22469__$1,inst_22467);
} else {
if((state_val_22470 === (12))){
var state_22469__$1 = state_22469;
var statearr_22477_22503 = state_22469__$1;
(statearr_22477_22503[(2)] = null);

(statearr_22477_22503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (2))){
var inst_22446 = (state_22469[(7)]);
var state_22469__$1 = state_22469;
if(cljs.core.truth_(inst_22446)){
var statearr_22478_22504 = state_22469__$1;
(statearr_22478_22504[(1)] = (4));

} else {
var statearr_22479_22505 = state_22469__$1;
(statearr_22479_22505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (11))){
var inst_22460 = cljs.core.async.close_BANG_.call(null,ch);
var state_22469__$1 = state_22469;
var statearr_22480_22506 = state_22469__$1;
(statearr_22480_22506[(2)] = inst_22460);

(statearr_22480_22506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (9))){
var state_22469__$1 = state_22469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22481_22507 = state_22469__$1;
(statearr_22481_22507[(1)] = (11));

} else {
var statearr_22482_22508 = state_22469__$1;
(statearr_22482_22508[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (5))){
var inst_22446 = (state_22469[(7)]);
var state_22469__$1 = state_22469;
var statearr_22483_22509 = state_22469__$1;
(statearr_22483_22509[(2)] = inst_22446);

(statearr_22483_22509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (10))){
var inst_22465 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
var statearr_22484_22510 = state_22469__$1;
(statearr_22484_22510[(2)] = inst_22465);

(statearr_22484_22510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (8))){
var inst_22446 = (state_22469[(7)]);
var inst_22456 = cljs.core.next.call(null,inst_22446);
var inst_22446__$1 = inst_22456;
var state_22469__$1 = (function (){var statearr_22485 = state_22469;
(statearr_22485[(7)] = inst_22446__$1);

return statearr_22485;
})();
var statearr_22486_22511 = state_22469__$1;
(statearr_22486_22511[(2)] = null);

(statearr_22486_22511[(1)] = (2));


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
});})(c__21649__auto__))
;
return ((function (switch__20472__auto__,c__21649__auto__){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_22469){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__20476__auto__ = e22491;
var statearr_22492_22512 = state_22469;
(statearr_22492_22512[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22513 = state_22469;
state_22469 = G__22513;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_22469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_22469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__))
})();
var state__21651__auto__ = (function (){var statearr_22493 = f__21650__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__))
);

return c__21649__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19122__auto__ = (((_ == null))?null:_);
var m__19123__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,_);
} else {
var m__19123__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22735 = (function (mult,ch,cs,meta22736){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22736 = meta22736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22737,meta22736__$1){
var self__ = this;
var _22737__$1 = this;
return (new cljs.core.async.t_cljs$core$async22735(self__.mult,self__.ch,self__.cs,meta22736__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22737){
var self__ = this;
var _22737__$1 = this;
return self__.meta22736;
});})(cs))
;

cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22735.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22736","meta22736",-537557074,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22735";

cljs.core.async.t_cljs$core$async22735.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22735");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22735 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22735(mult__$1,ch__$1,cs__$1,meta22736){
return (new cljs.core.async.t_cljs$core$async22735(mult__$1,ch__$1,cs__$1,meta22736));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22735(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21649__auto___22956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___22956,cs,m,dchan,dctr,done){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___22956,cs,m,dchan,dctr,done){
return (function (state_22868){
var state_val_22869 = (state_22868[(1)]);
if((state_val_22869 === (7))){
var inst_22864 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22870_22957 = state_22868__$1;
(statearr_22870_22957[(2)] = inst_22864);

(statearr_22870_22957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (20))){
var inst_22769 = (state_22868[(7)]);
var inst_22779 = cljs.core.first.call(null,inst_22769);
var inst_22780 = cljs.core.nth.call(null,inst_22779,(0),null);
var inst_22781 = cljs.core.nth.call(null,inst_22779,(1),null);
var state_22868__$1 = (function (){var statearr_22871 = state_22868;
(statearr_22871[(8)] = inst_22780);

return statearr_22871;
})();
if(cljs.core.truth_(inst_22781)){
var statearr_22872_22958 = state_22868__$1;
(statearr_22872_22958[(1)] = (22));

} else {
var statearr_22873_22959 = state_22868__$1;
(statearr_22873_22959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (27))){
var inst_22809 = (state_22868[(9)]);
var inst_22816 = (state_22868[(10)]);
var inst_22740 = (state_22868[(11)]);
var inst_22811 = (state_22868[(12)]);
var inst_22816__$1 = cljs.core._nth.call(null,inst_22809,inst_22811);
var inst_22817 = cljs.core.async.put_BANG_.call(null,inst_22816__$1,inst_22740,done);
var state_22868__$1 = (function (){var statearr_22874 = state_22868;
(statearr_22874[(10)] = inst_22816__$1);

return statearr_22874;
})();
if(cljs.core.truth_(inst_22817)){
var statearr_22875_22960 = state_22868__$1;
(statearr_22875_22960[(1)] = (30));

} else {
var statearr_22876_22961 = state_22868__$1;
(statearr_22876_22961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (1))){
var state_22868__$1 = state_22868;
var statearr_22877_22962 = state_22868__$1;
(statearr_22877_22962[(2)] = null);

(statearr_22877_22962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (24))){
var inst_22769 = (state_22868[(7)]);
var inst_22786 = (state_22868[(2)]);
var inst_22787 = cljs.core.next.call(null,inst_22769);
var inst_22749 = inst_22787;
var inst_22750 = null;
var inst_22751 = (0);
var inst_22752 = (0);
var state_22868__$1 = (function (){var statearr_22878 = state_22868;
(statearr_22878[(13)] = inst_22786);

(statearr_22878[(14)] = inst_22752);

(statearr_22878[(15)] = inst_22750);

(statearr_22878[(16)] = inst_22749);

(statearr_22878[(17)] = inst_22751);

return statearr_22878;
})();
var statearr_22879_22963 = state_22868__$1;
(statearr_22879_22963[(2)] = null);

(statearr_22879_22963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (39))){
var state_22868__$1 = state_22868;
var statearr_22883_22964 = state_22868__$1;
(statearr_22883_22964[(2)] = null);

(statearr_22883_22964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (4))){
var inst_22740 = (state_22868[(11)]);
var inst_22740__$1 = (state_22868[(2)]);
var inst_22741 = (inst_22740__$1 == null);
var state_22868__$1 = (function (){var statearr_22884 = state_22868;
(statearr_22884[(11)] = inst_22740__$1);

return statearr_22884;
})();
if(cljs.core.truth_(inst_22741)){
var statearr_22885_22965 = state_22868__$1;
(statearr_22885_22965[(1)] = (5));

} else {
var statearr_22886_22966 = state_22868__$1;
(statearr_22886_22966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (15))){
var inst_22752 = (state_22868[(14)]);
var inst_22750 = (state_22868[(15)]);
var inst_22749 = (state_22868[(16)]);
var inst_22751 = (state_22868[(17)]);
var inst_22765 = (state_22868[(2)]);
var inst_22766 = (inst_22752 + (1));
var tmp22880 = inst_22750;
var tmp22881 = inst_22749;
var tmp22882 = inst_22751;
var inst_22749__$1 = tmp22881;
var inst_22750__$1 = tmp22880;
var inst_22751__$1 = tmp22882;
var inst_22752__$1 = inst_22766;
var state_22868__$1 = (function (){var statearr_22887 = state_22868;
(statearr_22887[(14)] = inst_22752__$1);

(statearr_22887[(15)] = inst_22750__$1);

(statearr_22887[(16)] = inst_22749__$1);

(statearr_22887[(17)] = inst_22751__$1);

(statearr_22887[(18)] = inst_22765);

return statearr_22887;
})();
var statearr_22888_22967 = state_22868__$1;
(statearr_22888_22967[(2)] = null);

(statearr_22888_22967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (21))){
var inst_22790 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22892_22968 = state_22868__$1;
(statearr_22892_22968[(2)] = inst_22790);

(statearr_22892_22968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (31))){
var inst_22816 = (state_22868[(10)]);
var inst_22820 = done.call(null,null);
var inst_22821 = cljs.core.async.untap_STAR_.call(null,m,inst_22816);
var state_22868__$1 = (function (){var statearr_22893 = state_22868;
(statearr_22893[(19)] = inst_22820);

return statearr_22893;
})();
var statearr_22894_22969 = state_22868__$1;
(statearr_22894_22969[(2)] = inst_22821);

(statearr_22894_22969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (32))){
var inst_22808 = (state_22868[(20)]);
var inst_22809 = (state_22868[(9)]);
var inst_22811 = (state_22868[(12)]);
var inst_22810 = (state_22868[(21)]);
var inst_22823 = (state_22868[(2)]);
var inst_22824 = (inst_22811 + (1));
var tmp22889 = inst_22808;
var tmp22890 = inst_22809;
var tmp22891 = inst_22810;
var inst_22808__$1 = tmp22889;
var inst_22809__$1 = tmp22890;
var inst_22810__$1 = tmp22891;
var inst_22811__$1 = inst_22824;
var state_22868__$1 = (function (){var statearr_22895 = state_22868;
(statearr_22895[(20)] = inst_22808__$1);

(statearr_22895[(9)] = inst_22809__$1);

(statearr_22895[(12)] = inst_22811__$1);

(statearr_22895[(22)] = inst_22823);

(statearr_22895[(21)] = inst_22810__$1);

return statearr_22895;
})();
var statearr_22896_22970 = state_22868__$1;
(statearr_22896_22970[(2)] = null);

(statearr_22896_22970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (40))){
var inst_22836 = (state_22868[(23)]);
var inst_22840 = done.call(null,null);
var inst_22841 = cljs.core.async.untap_STAR_.call(null,m,inst_22836);
var state_22868__$1 = (function (){var statearr_22897 = state_22868;
(statearr_22897[(24)] = inst_22840);

return statearr_22897;
})();
var statearr_22898_22971 = state_22868__$1;
(statearr_22898_22971[(2)] = inst_22841);

(statearr_22898_22971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (33))){
var inst_22827 = (state_22868[(25)]);
var inst_22829 = cljs.core.chunked_seq_QMARK_.call(null,inst_22827);
var state_22868__$1 = state_22868;
if(inst_22829){
var statearr_22899_22972 = state_22868__$1;
(statearr_22899_22972[(1)] = (36));

} else {
var statearr_22900_22973 = state_22868__$1;
(statearr_22900_22973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (13))){
var inst_22759 = (state_22868[(26)]);
var inst_22762 = cljs.core.async.close_BANG_.call(null,inst_22759);
var state_22868__$1 = state_22868;
var statearr_22901_22974 = state_22868__$1;
(statearr_22901_22974[(2)] = inst_22762);

(statearr_22901_22974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (22))){
var inst_22780 = (state_22868[(8)]);
var inst_22783 = cljs.core.async.close_BANG_.call(null,inst_22780);
var state_22868__$1 = state_22868;
var statearr_22902_22975 = state_22868__$1;
(statearr_22902_22975[(2)] = inst_22783);

(statearr_22902_22975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (36))){
var inst_22827 = (state_22868[(25)]);
var inst_22831 = cljs.core.chunk_first.call(null,inst_22827);
var inst_22832 = cljs.core.chunk_rest.call(null,inst_22827);
var inst_22833 = cljs.core.count.call(null,inst_22831);
var inst_22808 = inst_22832;
var inst_22809 = inst_22831;
var inst_22810 = inst_22833;
var inst_22811 = (0);
var state_22868__$1 = (function (){var statearr_22903 = state_22868;
(statearr_22903[(20)] = inst_22808);

(statearr_22903[(9)] = inst_22809);

(statearr_22903[(12)] = inst_22811);

(statearr_22903[(21)] = inst_22810);

return statearr_22903;
})();
var statearr_22904_22976 = state_22868__$1;
(statearr_22904_22976[(2)] = null);

(statearr_22904_22976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (41))){
var inst_22827 = (state_22868[(25)]);
var inst_22843 = (state_22868[(2)]);
var inst_22844 = cljs.core.next.call(null,inst_22827);
var inst_22808 = inst_22844;
var inst_22809 = null;
var inst_22810 = (0);
var inst_22811 = (0);
var state_22868__$1 = (function (){var statearr_22905 = state_22868;
(statearr_22905[(20)] = inst_22808);

(statearr_22905[(27)] = inst_22843);

(statearr_22905[(9)] = inst_22809);

(statearr_22905[(12)] = inst_22811);

(statearr_22905[(21)] = inst_22810);

return statearr_22905;
})();
var statearr_22906_22977 = state_22868__$1;
(statearr_22906_22977[(2)] = null);

(statearr_22906_22977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (43))){
var state_22868__$1 = state_22868;
var statearr_22907_22978 = state_22868__$1;
(statearr_22907_22978[(2)] = null);

(statearr_22907_22978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (29))){
var inst_22852 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22908_22979 = state_22868__$1;
(statearr_22908_22979[(2)] = inst_22852);

(statearr_22908_22979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (44))){
var inst_22861 = (state_22868[(2)]);
var state_22868__$1 = (function (){var statearr_22909 = state_22868;
(statearr_22909[(28)] = inst_22861);

return statearr_22909;
})();
var statearr_22910_22980 = state_22868__$1;
(statearr_22910_22980[(2)] = null);

(statearr_22910_22980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (6))){
var inst_22800 = (state_22868[(29)]);
var inst_22799 = cljs.core.deref.call(null,cs);
var inst_22800__$1 = cljs.core.keys.call(null,inst_22799);
var inst_22801 = cljs.core.count.call(null,inst_22800__$1);
var inst_22802 = cljs.core.reset_BANG_.call(null,dctr,inst_22801);
var inst_22807 = cljs.core.seq.call(null,inst_22800__$1);
var inst_22808 = inst_22807;
var inst_22809 = null;
var inst_22810 = (0);
var inst_22811 = (0);
var state_22868__$1 = (function (){var statearr_22911 = state_22868;
(statearr_22911[(20)] = inst_22808);

(statearr_22911[(30)] = inst_22802);

(statearr_22911[(9)] = inst_22809);

(statearr_22911[(12)] = inst_22811);

(statearr_22911[(29)] = inst_22800__$1);

(statearr_22911[(21)] = inst_22810);

return statearr_22911;
})();
var statearr_22912_22981 = state_22868__$1;
(statearr_22912_22981[(2)] = null);

(statearr_22912_22981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (28))){
var inst_22808 = (state_22868[(20)]);
var inst_22827 = (state_22868[(25)]);
var inst_22827__$1 = cljs.core.seq.call(null,inst_22808);
var state_22868__$1 = (function (){var statearr_22913 = state_22868;
(statearr_22913[(25)] = inst_22827__$1);

return statearr_22913;
})();
if(inst_22827__$1){
var statearr_22914_22982 = state_22868__$1;
(statearr_22914_22982[(1)] = (33));

} else {
var statearr_22915_22983 = state_22868__$1;
(statearr_22915_22983[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (25))){
var inst_22811 = (state_22868[(12)]);
var inst_22810 = (state_22868[(21)]);
var inst_22813 = (inst_22811 < inst_22810);
var inst_22814 = inst_22813;
var state_22868__$1 = state_22868;
if(cljs.core.truth_(inst_22814)){
var statearr_22916_22984 = state_22868__$1;
(statearr_22916_22984[(1)] = (27));

} else {
var statearr_22917_22985 = state_22868__$1;
(statearr_22917_22985[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (34))){
var state_22868__$1 = state_22868;
var statearr_22918_22986 = state_22868__$1;
(statearr_22918_22986[(2)] = null);

(statearr_22918_22986[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (17))){
var state_22868__$1 = state_22868;
var statearr_22919_22987 = state_22868__$1;
(statearr_22919_22987[(2)] = null);

(statearr_22919_22987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (3))){
var inst_22866 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22868__$1,inst_22866);
} else {
if((state_val_22869 === (12))){
var inst_22795 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22920_22988 = state_22868__$1;
(statearr_22920_22988[(2)] = inst_22795);

(statearr_22920_22988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (2))){
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22868__$1,(4),ch);
} else {
if((state_val_22869 === (23))){
var state_22868__$1 = state_22868;
var statearr_22921_22989 = state_22868__$1;
(statearr_22921_22989[(2)] = null);

(statearr_22921_22989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (35))){
var inst_22850 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22922_22990 = state_22868__$1;
(statearr_22922_22990[(2)] = inst_22850);

(statearr_22922_22990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (19))){
var inst_22769 = (state_22868[(7)]);
var inst_22773 = cljs.core.chunk_first.call(null,inst_22769);
var inst_22774 = cljs.core.chunk_rest.call(null,inst_22769);
var inst_22775 = cljs.core.count.call(null,inst_22773);
var inst_22749 = inst_22774;
var inst_22750 = inst_22773;
var inst_22751 = inst_22775;
var inst_22752 = (0);
var state_22868__$1 = (function (){var statearr_22923 = state_22868;
(statearr_22923[(14)] = inst_22752);

(statearr_22923[(15)] = inst_22750);

(statearr_22923[(16)] = inst_22749);

(statearr_22923[(17)] = inst_22751);

return statearr_22923;
})();
var statearr_22924_22991 = state_22868__$1;
(statearr_22924_22991[(2)] = null);

(statearr_22924_22991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (11))){
var inst_22749 = (state_22868[(16)]);
var inst_22769 = (state_22868[(7)]);
var inst_22769__$1 = cljs.core.seq.call(null,inst_22749);
var state_22868__$1 = (function (){var statearr_22925 = state_22868;
(statearr_22925[(7)] = inst_22769__$1);

return statearr_22925;
})();
if(inst_22769__$1){
var statearr_22926_22992 = state_22868__$1;
(statearr_22926_22992[(1)] = (16));

} else {
var statearr_22927_22993 = state_22868__$1;
(statearr_22927_22993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (9))){
var inst_22797 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22928_22994 = state_22868__$1;
(statearr_22928_22994[(2)] = inst_22797);

(statearr_22928_22994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (5))){
var inst_22747 = cljs.core.deref.call(null,cs);
var inst_22748 = cljs.core.seq.call(null,inst_22747);
var inst_22749 = inst_22748;
var inst_22750 = null;
var inst_22751 = (0);
var inst_22752 = (0);
var state_22868__$1 = (function (){var statearr_22929 = state_22868;
(statearr_22929[(14)] = inst_22752);

(statearr_22929[(15)] = inst_22750);

(statearr_22929[(16)] = inst_22749);

(statearr_22929[(17)] = inst_22751);

return statearr_22929;
})();
var statearr_22930_22995 = state_22868__$1;
(statearr_22930_22995[(2)] = null);

(statearr_22930_22995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (14))){
var state_22868__$1 = state_22868;
var statearr_22931_22996 = state_22868__$1;
(statearr_22931_22996[(2)] = null);

(statearr_22931_22996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (45))){
var inst_22858 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22932_22997 = state_22868__$1;
(statearr_22932_22997[(2)] = inst_22858);

(statearr_22932_22997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (26))){
var inst_22800 = (state_22868[(29)]);
var inst_22854 = (state_22868[(2)]);
var inst_22855 = cljs.core.seq.call(null,inst_22800);
var state_22868__$1 = (function (){var statearr_22933 = state_22868;
(statearr_22933[(31)] = inst_22854);

return statearr_22933;
})();
if(inst_22855){
var statearr_22934_22998 = state_22868__$1;
(statearr_22934_22998[(1)] = (42));

} else {
var statearr_22935_22999 = state_22868__$1;
(statearr_22935_22999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (16))){
var inst_22769 = (state_22868[(7)]);
var inst_22771 = cljs.core.chunked_seq_QMARK_.call(null,inst_22769);
var state_22868__$1 = state_22868;
if(inst_22771){
var statearr_22936_23000 = state_22868__$1;
(statearr_22936_23000[(1)] = (19));

} else {
var statearr_22937_23001 = state_22868__$1;
(statearr_22937_23001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (38))){
var inst_22847 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22938_23002 = state_22868__$1;
(statearr_22938_23002[(2)] = inst_22847);

(statearr_22938_23002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (30))){
var state_22868__$1 = state_22868;
var statearr_22939_23003 = state_22868__$1;
(statearr_22939_23003[(2)] = null);

(statearr_22939_23003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (10))){
var inst_22752 = (state_22868[(14)]);
var inst_22750 = (state_22868[(15)]);
var inst_22758 = cljs.core._nth.call(null,inst_22750,inst_22752);
var inst_22759 = cljs.core.nth.call(null,inst_22758,(0),null);
var inst_22760 = cljs.core.nth.call(null,inst_22758,(1),null);
var state_22868__$1 = (function (){var statearr_22940 = state_22868;
(statearr_22940[(26)] = inst_22759);

return statearr_22940;
})();
if(cljs.core.truth_(inst_22760)){
var statearr_22941_23004 = state_22868__$1;
(statearr_22941_23004[(1)] = (13));

} else {
var statearr_22942_23005 = state_22868__$1;
(statearr_22942_23005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (18))){
var inst_22793 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22943_23006 = state_22868__$1;
(statearr_22943_23006[(2)] = inst_22793);

(statearr_22943_23006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (42))){
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22868__$1,(45),dchan);
} else {
if((state_val_22869 === (37))){
var inst_22836 = (state_22868[(23)]);
var inst_22740 = (state_22868[(11)]);
var inst_22827 = (state_22868[(25)]);
var inst_22836__$1 = cljs.core.first.call(null,inst_22827);
var inst_22837 = cljs.core.async.put_BANG_.call(null,inst_22836__$1,inst_22740,done);
var state_22868__$1 = (function (){var statearr_22944 = state_22868;
(statearr_22944[(23)] = inst_22836__$1);

return statearr_22944;
})();
if(cljs.core.truth_(inst_22837)){
var statearr_22945_23007 = state_22868__$1;
(statearr_22945_23007[(1)] = (39));

} else {
var statearr_22946_23008 = state_22868__$1;
(statearr_22946_23008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (8))){
var inst_22752 = (state_22868[(14)]);
var inst_22751 = (state_22868[(17)]);
var inst_22754 = (inst_22752 < inst_22751);
var inst_22755 = inst_22754;
var state_22868__$1 = state_22868;
if(cljs.core.truth_(inst_22755)){
var statearr_22947_23009 = state_22868__$1;
(statearr_22947_23009[(1)] = (10));

} else {
var statearr_22948_23010 = state_22868__$1;
(statearr_22948_23010[(1)] = (11));

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
});})(c__21649__auto___22956,cs,m,dchan,dctr,done))
;
return ((function (switch__20472__auto__,c__21649__auto___22956,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20473__auto__ = null;
var cljs$core$async$mult_$_state_machine__20473__auto____0 = (function (){
var statearr_22952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22952[(0)] = cljs$core$async$mult_$_state_machine__20473__auto__);

(statearr_22952[(1)] = (1));

return statearr_22952;
});
var cljs$core$async$mult_$_state_machine__20473__auto____1 = (function (state_22868){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22953){if((e22953 instanceof Object)){
var ex__20476__auto__ = e22953;
var statearr_22954_23011 = state_22868;
(statearr_22954_23011[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23012 = state_22868;
state_22868 = G__23012;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20473__auto__ = function(state_22868){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20473__auto____1.call(this,state_22868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20473__auto____0;
cljs$core$async$mult_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20473__auto____1;
return cljs$core$async$mult_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___22956,cs,m,dchan,dctr,done))
})();
var state__21651__auto__ = (function (){var statearr_22955 = f__21650__auto__.call(null);
(statearr_22955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___22956);

return statearr_22955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___22956,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23013 = [];
var len__19529__auto___23016 = arguments.length;
var i__19530__auto___23017 = (0);
while(true){
if((i__19530__auto___23017 < len__19529__auto___23016)){
args23013.push((arguments[i__19530__auto___23017]));

var G__23018 = (i__19530__auto___23017 + (1));
i__19530__auto___23017 = G__23018;
continue;
} else {
}
break;
}

var G__23015 = args23013.length;
switch (G__23015) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23013.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,state_map);
} else {
var m__19123__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,mode);
} else {
var m__19123__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___23030 = arguments.length;
var i__19530__auto___23031 = (0);
while(true){
if((i__19530__auto___23031 < len__19529__auto___23030)){
args__19536__auto__.push((arguments[i__19530__auto___23031]));

var G__23032 = (i__19530__auto___23031 + (1));
i__19530__auto___23031 = G__23032;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23024){
var map__23025 = p__23024;
var map__23025__$1 = ((((!((map__23025 == null)))?((((map__23025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23025):map__23025);
var opts = map__23025__$1;
var statearr_23027_23033 = state;
(statearr_23027_23033[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23025,map__23025__$1,opts){
return (function (val){
var statearr_23028_23034 = state;
(statearr_23028_23034[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23025,map__23025__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23029_23035 = state;
(statearr_23029_23035[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23020){
var G__23021 = cljs.core.first.call(null,seq23020);
var seq23020__$1 = cljs.core.next.call(null,seq23020);
var G__23022 = cljs.core.first.call(null,seq23020__$1);
var seq23020__$2 = cljs.core.next.call(null,seq23020__$1);
var G__23023 = cljs.core.first.call(null,seq23020__$2);
var seq23020__$3 = cljs.core.next.call(null,seq23020__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23021,G__23022,G__23023,seq23020__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23199 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23200){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23200 = meta23200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23201,meta23200__$1){
var self__ = this;
var _23201__$1 = this;
return (new cljs.core.async.t_cljs$core$async23199(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23201){
var self__ = this;
var _23201__$1 = this;
return self__.meta23200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23200","meta23200",2047086532,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23199";

cljs.core.async.t_cljs$core$async23199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23199(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23200){
return (new cljs.core.async.t_cljs$core$async23199(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23199(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21649__auto___23362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___23362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___23362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23299){
var state_val_23300 = (state_23299[(1)]);
if((state_val_23300 === (7))){
var inst_23217 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23301_23363 = state_23299__$1;
(statearr_23301_23363[(2)] = inst_23217);

(statearr_23301_23363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (20))){
var inst_23229 = (state_23299[(7)]);
var state_23299__$1 = state_23299;
var statearr_23302_23364 = state_23299__$1;
(statearr_23302_23364[(2)] = inst_23229);

(statearr_23302_23364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (27))){
var state_23299__$1 = state_23299;
var statearr_23303_23365 = state_23299__$1;
(statearr_23303_23365[(2)] = null);

(statearr_23303_23365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (1))){
var inst_23205 = (state_23299[(8)]);
var inst_23205__$1 = calc_state.call(null);
var inst_23207 = (inst_23205__$1 == null);
var inst_23208 = cljs.core.not.call(null,inst_23207);
var state_23299__$1 = (function (){var statearr_23304 = state_23299;
(statearr_23304[(8)] = inst_23205__$1);

return statearr_23304;
})();
if(inst_23208){
var statearr_23305_23366 = state_23299__$1;
(statearr_23305_23366[(1)] = (2));

} else {
var statearr_23306_23367 = state_23299__$1;
(statearr_23306_23367[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (24))){
var inst_23259 = (state_23299[(9)]);
var inst_23252 = (state_23299[(10)]);
var inst_23273 = (state_23299[(11)]);
var inst_23273__$1 = inst_23252.call(null,inst_23259);
var state_23299__$1 = (function (){var statearr_23307 = state_23299;
(statearr_23307[(11)] = inst_23273__$1);

return statearr_23307;
})();
if(cljs.core.truth_(inst_23273__$1)){
var statearr_23308_23368 = state_23299__$1;
(statearr_23308_23368[(1)] = (29));

} else {
var statearr_23309_23369 = state_23299__$1;
(statearr_23309_23369[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (4))){
var inst_23220 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23220)){
var statearr_23310_23370 = state_23299__$1;
(statearr_23310_23370[(1)] = (8));

} else {
var statearr_23311_23371 = state_23299__$1;
(statearr_23311_23371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (15))){
var inst_23246 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23246)){
var statearr_23312_23372 = state_23299__$1;
(statearr_23312_23372[(1)] = (19));

} else {
var statearr_23313_23373 = state_23299__$1;
(statearr_23313_23373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (21))){
var inst_23251 = (state_23299[(12)]);
var inst_23251__$1 = (state_23299[(2)]);
var inst_23252 = cljs.core.get.call(null,inst_23251__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23253 = cljs.core.get.call(null,inst_23251__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23254 = cljs.core.get.call(null,inst_23251__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23299__$1 = (function (){var statearr_23314 = state_23299;
(statearr_23314[(10)] = inst_23252);

(statearr_23314[(13)] = inst_23253);

(statearr_23314[(12)] = inst_23251__$1);

return statearr_23314;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23299__$1,(22),inst_23254);
} else {
if((state_val_23300 === (31))){
var inst_23281 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23281)){
var statearr_23315_23374 = state_23299__$1;
(statearr_23315_23374[(1)] = (32));

} else {
var statearr_23316_23375 = state_23299__$1;
(statearr_23316_23375[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (32))){
var inst_23258 = (state_23299[(14)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23299__$1,(35),out,inst_23258);
} else {
if((state_val_23300 === (33))){
var inst_23251 = (state_23299[(12)]);
var inst_23229 = inst_23251;
var state_23299__$1 = (function (){var statearr_23317 = state_23299;
(statearr_23317[(7)] = inst_23229);

return statearr_23317;
})();
var statearr_23318_23376 = state_23299__$1;
(statearr_23318_23376[(2)] = null);

(statearr_23318_23376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (13))){
var inst_23229 = (state_23299[(7)]);
var inst_23236 = inst_23229.cljs$lang$protocol_mask$partition0$;
var inst_23237 = (inst_23236 & (64));
var inst_23238 = inst_23229.cljs$core$ISeq$;
var inst_23239 = (inst_23237) || (inst_23238);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23239)){
var statearr_23319_23377 = state_23299__$1;
(statearr_23319_23377[(1)] = (16));

} else {
var statearr_23320_23378 = state_23299__$1;
(statearr_23320_23378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (22))){
var inst_23258 = (state_23299[(14)]);
var inst_23259 = (state_23299[(9)]);
var inst_23257 = (state_23299[(2)]);
var inst_23258__$1 = cljs.core.nth.call(null,inst_23257,(0),null);
var inst_23259__$1 = cljs.core.nth.call(null,inst_23257,(1),null);
var inst_23260 = (inst_23258__$1 == null);
var inst_23261 = cljs.core._EQ_.call(null,inst_23259__$1,change);
var inst_23262 = (inst_23260) || (inst_23261);
var state_23299__$1 = (function (){var statearr_23321 = state_23299;
(statearr_23321[(14)] = inst_23258__$1);

(statearr_23321[(9)] = inst_23259__$1);

return statearr_23321;
})();
if(cljs.core.truth_(inst_23262)){
var statearr_23322_23379 = state_23299__$1;
(statearr_23322_23379[(1)] = (23));

} else {
var statearr_23323_23380 = state_23299__$1;
(statearr_23323_23380[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (36))){
var inst_23251 = (state_23299[(12)]);
var inst_23229 = inst_23251;
var state_23299__$1 = (function (){var statearr_23324 = state_23299;
(statearr_23324[(7)] = inst_23229);

return statearr_23324;
})();
var statearr_23325_23381 = state_23299__$1;
(statearr_23325_23381[(2)] = null);

(statearr_23325_23381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (29))){
var inst_23273 = (state_23299[(11)]);
var state_23299__$1 = state_23299;
var statearr_23326_23382 = state_23299__$1;
(statearr_23326_23382[(2)] = inst_23273);

(statearr_23326_23382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (6))){
var state_23299__$1 = state_23299;
var statearr_23327_23383 = state_23299__$1;
(statearr_23327_23383[(2)] = false);

(statearr_23327_23383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (28))){
var inst_23269 = (state_23299[(2)]);
var inst_23270 = calc_state.call(null);
var inst_23229 = inst_23270;
var state_23299__$1 = (function (){var statearr_23328 = state_23299;
(statearr_23328[(15)] = inst_23269);

(statearr_23328[(7)] = inst_23229);

return statearr_23328;
})();
var statearr_23329_23384 = state_23299__$1;
(statearr_23329_23384[(2)] = null);

(statearr_23329_23384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (25))){
var inst_23295 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23330_23385 = state_23299__$1;
(statearr_23330_23385[(2)] = inst_23295);

(statearr_23330_23385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (34))){
var inst_23293 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23331_23386 = state_23299__$1;
(statearr_23331_23386[(2)] = inst_23293);

(statearr_23331_23386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (17))){
var state_23299__$1 = state_23299;
var statearr_23332_23387 = state_23299__$1;
(statearr_23332_23387[(2)] = false);

(statearr_23332_23387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (3))){
var state_23299__$1 = state_23299;
var statearr_23333_23388 = state_23299__$1;
(statearr_23333_23388[(2)] = false);

(statearr_23333_23388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (12))){
var inst_23297 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23299__$1,inst_23297);
} else {
if((state_val_23300 === (2))){
var inst_23205 = (state_23299[(8)]);
var inst_23210 = inst_23205.cljs$lang$protocol_mask$partition0$;
var inst_23211 = (inst_23210 & (64));
var inst_23212 = inst_23205.cljs$core$ISeq$;
var inst_23213 = (inst_23211) || (inst_23212);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23213)){
var statearr_23334_23389 = state_23299__$1;
(statearr_23334_23389[(1)] = (5));

} else {
var statearr_23335_23390 = state_23299__$1;
(statearr_23335_23390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (23))){
var inst_23258 = (state_23299[(14)]);
var inst_23264 = (inst_23258 == null);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23264)){
var statearr_23336_23391 = state_23299__$1;
(statearr_23336_23391[(1)] = (26));

} else {
var statearr_23337_23392 = state_23299__$1;
(statearr_23337_23392[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (35))){
var inst_23284 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23284)){
var statearr_23338_23393 = state_23299__$1;
(statearr_23338_23393[(1)] = (36));

} else {
var statearr_23339_23394 = state_23299__$1;
(statearr_23339_23394[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (19))){
var inst_23229 = (state_23299[(7)]);
var inst_23248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23229);
var state_23299__$1 = state_23299;
var statearr_23340_23395 = state_23299__$1;
(statearr_23340_23395[(2)] = inst_23248);

(statearr_23340_23395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (11))){
var inst_23229 = (state_23299[(7)]);
var inst_23233 = (inst_23229 == null);
var inst_23234 = cljs.core.not.call(null,inst_23233);
var state_23299__$1 = state_23299;
if(inst_23234){
var statearr_23341_23396 = state_23299__$1;
(statearr_23341_23396[(1)] = (13));

} else {
var statearr_23342_23397 = state_23299__$1;
(statearr_23342_23397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (9))){
var inst_23205 = (state_23299[(8)]);
var state_23299__$1 = state_23299;
var statearr_23343_23398 = state_23299__$1;
(statearr_23343_23398[(2)] = inst_23205);

(statearr_23343_23398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (5))){
var state_23299__$1 = state_23299;
var statearr_23344_23399 = state_23299__$1;
(statearr_23344_23399[(2)] = true);

(statearr_23344_23399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (14))){
var state_23299__$1 = state_23299;
var statearr_23345_23400 = state_23299__$1;
(statearr_23345_23400[(2)] = false);

(statearr_23345_23400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (26))){
var inst_23259 = (state_23299[(9)]);
var inst_23266 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23259);
var state_23299__$1 = state_23299;
var statearr_23346_23401 = state_23299__$1;
(statearr_23346_23401[(2)] = inst_23266);

(statearr_23346_23401[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (16))){
var state_23299__$1 = state_23299;
var statearr_23347_23402 = state_23299__$1;
(statearr_23347_23402[(2)] = true);

(statearr_23347_23402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (38))){
var inst_23289 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23348_23403 = state_23299__$1;
(statearr_23348_23403[(2)] = inst_23289);

(statearr_23348_23403[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (30))){
var inst_23259 = (state_23299[(9)]);
var inst_23252 = (state_23299[(10)]);
var inst_23253 = (state_23299[(13)]);
var inst_23276 = cljs.core.empty_QMARK_.call(null,inst_23252);
var inst_23277 = inst_23253.call(null,inst_23259);
var inst_23278 = cljs.core.not.call(null,inst_23277);
var inst_23279 = (inst_23276) && (inst_23278);
var state_23299__$1 = state_23299;
var statearr_23349_23404 = state_23299__$1;
(statearr_23349_23404[(2)] = inst_23279);

(statearr_23349_23404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (10))){
var inst_23205 = (state_23299[(8)]);
var inst_23225 = (state_23299[(2)]);
var inst_23226 = cljs.core.get.call(null,inst_23225,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23227 = cljs.core.get.call(null,inst_23225,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23228 = cljs.core.get.call(null,inst_23225,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23229 = inst_23205;
var state_23299__$1 = (function (){var statearr_23350 = state_23299;
(statearr_23350[(16)] = inst_23226);

(statearr_23350[(17)] = inst_23227);

(statearr_23350[(18)] = inst_23228);

(statearr_23350[(7)] = inst_23229);

return statearr_23350;
})();
var statearr_23351_23405 = state_23299__$1;
(statearr_23351_23405[(2)] = null);

(statearr_23351_23405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (18))){
var inst_23243 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23352_23406 = state_23299__$1;
(statearr_23352_23406[(2)] = inst_23243);

(statearr_23352_23406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (37))){
var state_23299__$1 = state_23299;
var statearr_23353_23407 = state_23299__$1;
(statearr_23353_23407[(2)] = null);

(statearr_23353_23407[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (8))){
var inst_23205 = (state_23299[(8)]);
var inst_23222 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23205);
var state_23299__$1 = state_23299;
var statearr_23354_23408 = state_23299__$1;
(statearr_23354_23408[(2)] = inst_23222);

(statearr_23354_23408[(1)] = (10));


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
});})(c__21649__auto___23362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20472__auto__,c__21649__auto___23362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20473__auto__ = null;
var cljs$core$async$mix_$_state_machine__20473__auto____0 = (function (){
var statearr_23358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23358[(0)] = cljs$core$async$mix_$_state_machine__20473__auto__);

(statearr_23358[(1)] = (1));

return statearr_23358;
});
var cljs$core$async$mix_$_state_machine__20473__auto____1 = (function (state_23299){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23359){if((e23359 instanceof Object)){
var ex__20476__auto__ = e23359;
var statearr_23360_23409 = state_23299;
(statearr_23360_23409[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23410 = state_23299;
state_23299 = G__23410;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20473__auto__ = function(state_23299){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20473__auto____1.call(this,state_23299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20473__auto____0;
cljs$core$async$mix_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20473__auto____1;
return cljs$core$async$mix_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___23362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21651__auto__ = (function (){var statearr_23361 = f__21650__auto__.call(null);
(statearr_23361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___23362);

return statearr_23361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___23362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23411 = [];
var len__19529__auto___23414 = arguments.length;
var i__19530__auto___23415 = (0);
while(true){
if((i__19530__auto___23415 < len__19529__auto___23414)){
args23411.push((arguments[i__19530__auto___23415]));

var G__23416 = (i__19530__auto___23415 + (1));
i__19530__auto___23415 = G__23416;
continue;
} else {
}
break;
}

var G__23413 = args23411.length;
switch (G__23413) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23411.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23419 = [];
var len__19529__auto___23544 = arguments.length;
var i__19530__auto___23545 = (0);
while(true){
if((i__19530__auto___23545 < len__19529__auto___23544)){
args23419.push((arguments[i__19530__auto___23545]));

var G__23546 = (i__19530__auto___23545 + (1));
i__19530__auto___23545 = G__23546;
continue;
} else {
}
break;
}

var G__23421 = args23419.length;
switch (G__23421) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23419.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18459__auto__,mults){
return (function (p1__23418_SHARP_){
if(cljs.core.truth_(p1__23418_SHARP_.call(null,topic))){
return p1__23418_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23418_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23422 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23423){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23423 = meta23423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23424,meta23423__$1){
var self__ = this;
var _23424__$1 = this;
return (new cljs.core.async.t_cljs$core$async23422(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23423__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23424){
var self__ = this;
var _23424__$1 = this;
return self__.meta23423;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23423","meta23423",-2036022245,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23422";

cljs.core.async.t_cljs$core$async23422.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23422");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23422 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23422(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23423){
return (new cljs.core.async.t_cljs$core$async23422(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23423));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23422(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21649__auto___23548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___23548,mults,ensure_mult,p){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___23548,mults,ensure_mult,p){
return (function (state_23496){
var state_val_23497 = (state_23496[(1)]);
if((state_val_23497 === (7))){
var inst_23492 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23498_23549 = state_23496__$1;
(statearr_23498_23549[(2)] = inst_23492);

(statearr_23498_23549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (20))){
var state_23496__$1 = state_23496;
var statearr_23499_23550 = state_23496__$1;
(statearr_23499_23550[(2)] = null);

(statearr_23499_23550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (1))){
var state_23496__$1 = state_23496;
var statearr_23500_23551 = state_23496__$1;
(statearr_23500_23551[(2)] = null);

(statearr_23500_23551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (24))){
var inst_23475 = (state_23496[(7)]);
var inst_23484 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23475);
var state_23496__$1 = state_23496;
var statearr_23501_23552 = state_23496__$1;
(statearr_23501_23552[(2)] = inst_23484);

(statearr_23501_23552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (4))){
var inst_23427 = (state_23496[(8)]);
var inst_23427__$1 = (state_23496[(2)]);
var inst_23428 = (inst_23427__$1 == null);
var state_23496__$1 = (function (){var statearr_23502 = state_23496;
(statearr_23502[(8)] = inst_23427__$1);

return statearr_23502;
})();
if(cljs.core.truth_(inst_23428)){
var statearr_23503_23553 = state_23496__$1;
(statearr_23503_23553[(1)] = (5));

} else {
var statearr_23504_23554 = state_23496__$1;
(statearr_23504_23554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (15))){
var inst_23469 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23505_23555 = state_23496__$1;
(statearr_23505_23555[(2)] = inst_23469);

(statearr_23505_23555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (21))){
var inst_23489 = (state_23496[(2)]);
var state_23496__$1 = (function (){var statearr_23506 = state_23496;
(statearr_23506[(9)] = inst_23489);

return statearr_23506;
})();
var statearr_23507_23556 = state_23496__$1;
(statearr_23507_23556[(2)] = null);

(statearr_23507_23556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (13))){
var inst_23451 = (state_23496[(10)]);
var inst_23453 = cljs.core.chunked_seq_QMARK_.call(null,inst_23451);
var state_23496__$1 = state_23496;
if(inst_23453){
var statearr_23508_23557 = state_23496__$1;
(statearr_23508_23557[(1)] = (16));

} else {
var statearr_23509_23558 = state_23496__$1;
(statearr_23509_23558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (22))){
var inst_23481 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
if(cljs.core.truth_(inst_23481)){
var statearr_23510_23559 = state_23496__$1;
(statearr_23510_23559[(1)] = (23));

} else {
var statearr_23511_23560 = state_23496__$1;
(statearr_23511_23560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (6))){
var inst_23477 = (state_23496[(11)]);
var inst_23475 = (state_23496[(7)]);
var inst_23427 = (state_23496[(8)]);
var inst_23475__$1 = topic_fn.call(null,inst_23427);
var inst_23476 = cljs.core.deref.call(null,mults);
var inst_23477__$1 = cljs.core.get.call(null,inst_23476,inst_23475__$1);
var state_23496__$1 = (function (){var statearr_23512 = state_23496;
(statearr_23512[(11)] = inst_23477__$1);

(statearr_23512[(7)] = inst_23475__$1);

return statearr_23512;
})();
if(cljs.core.truth_(inst_23477__$1)){
var statearr_23513_23561 = state_23496__$1;
(statearr_23513_23561[(1)] = (19));

} else {
var statearr_23514_23562 = state_23496__$1;
(statearr_23514_23562[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (25))){
var inst_23486 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23515_23563 = state_23496__$1;
(statearr_23515_23563[(2)] = inst_23486);

(statearr_23515_23563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (17))){
var inst_23451 = (state_23496[(10)]);
var inst_23460 = cljs.core.first.call(null,inst_23451);
var inst_23461 = cljs.core.async.muxch_STAR_.call(null,inst_23460);
var inst_23462 = cljs.core.async.close_BANG_.call(null,inst_23461);
var inst_23463 = cljs.core.next.call(null,inst_23451);
var inst_23437 = inst_23463;
var inst_23438 = null;
var inst_23439 = (0);
var inst_23440 = (0);
var state_23496__$1 = (function (){var statearr_23516 = state_23496;
(statearr_23516[(12)] = inst_23437);

(statearr_23516[(13)] = inst_23438);

(statearr_23516[(14)] = inst_23462);

(statearr_23516[(15)] = inst_23439);

(statearr_23516[(16)] = inst_23440);

return statearr_23516;
})();
var statearr_23517_23564 = state_23496__$1;
(statearr_23517_23564[(2)] = null);

(statearr_23517_23564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (3))){
var inst_23494 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23496__$1,inst_23494);
} else {
if((state_val_23497 === (12))){
var inst_23471 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23518_23565 = state_23496__$1;
(statearr_23518_23565[(2)] = inst_23471);

(statearr_23518_23565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (2))){
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23496__$1,(4),ch);
} else {
if((state_val_23497 === (23))){
var state_23496__$1 = state_23496;
var statearr_23519_23566 = state_23496__$1;
(statearr_23519_23566[(2)] = null);

(statearr_23519_23566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (19))){
var inst_23477 = (state_23496[(11)]);
var inst_23427 = (state_23496[(8)]);
var inst_23479 = cljs.core.async.muxch_STAR_.call(null,inst_23477);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23496__$1,(22),inst_23479,inst_23427);
} else {
if((state_val_23497 === (11))){
var inst_23437 = (state_23496[(12)]);
var inst_23451 = (state_23496[(10)]);
var inst_23451__$1 = cljs.core.seq.call(null,inst_23437);
var state_23496__$1 = (function (){var statearr_23520 = state_23496;
(statearr_23520[(10)] = inst_23451__$1);

return statearr_23520;
})();
if(inst_23451__$1){
var statearr_23521_23567 = state_23496__$1;
(statearr_23521_23567[(1)] = (13));

} else {
var statearr_23522_23568 = state_23496__$1;
(statearr_23522_23568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (9))){
var inst_23473 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23523_23569 = state_23496__$1;
(statearr_23523_23569[(2)] = inst_23473);

(statearr_23523_23569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (5))){
var inst_23434 = cljs.core.deref.call(null,mults);
var inst_23435 = cljs.core.vals.call(null,inst_23434);
var inst_23436 = cljs.core.seq.call(null,inst_23435);
var inst_23437 = inst_23436;
var inst_23438 = null;
var inst_23439 = (0);
var inst_23440 = (0);
var state_23496__$1 = (function (){var statearr_23524 = state_23496;
(statearr_23524[(12)] = inst_23437);

(statearr_23524[(13)] = inst_23438);

(statearr_23524[(15)] = inst_23439);

(statearr_23524[(16)] = inst_23440);

return statearr_23524;
})();
var statearr_23525_23570 = state_23496__$1;
(statearr_23525_23570[(2)] = null);

(statearr_23525_23570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (14))){
var state_23496__$1 = state_23496;
var statearr_23529_23571 = state_23496__$1;
(statearr_23529_23571[(2)] = null);

(statearr_23529_23571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (16))){
var inst_23451 = (state_23496[(10)]);
var inst_23455 = cljs.core.chunk_first.call(null,inst_23451);
var inst_23456 = cljs.core.chunk_rest.call(null,inst_23451);
var inst_23457 = cljs.core.count.call(null,inst_23455);
var inst_23437 = inst_23456;
var inst_23438 = inst_23455;
var inst_23439 = inst_23457;
var inst_23440 = (0);
var state_23496__$1 = (function (){var statearr_23530 = state_23496;
(statearr_23530[(12)] = inst_23437);

(statearr_23530[(13)] = inst_23438);

(statearr_23530[(15)] = inst_23439);

(statearr_23530[(16)] = inst_23440);

return statearr_23530;
})();
var statearr_23531_23572 = state_23496__$1;
(statearr_23531_23572[(2)] = null);

(statearr_23531_23572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (10))){
var inst_23437 = (state_23496[(12)]);
var inst_23438 = (state_23496[(13)]);
var inst_23439 = (state_23496[(15)]);
var inst_23440 = (state_23496[(16)]);
var inst_23445 = cljs.core._nth.call(null,inst_23438,inst_23440);
var inst_23446 = cljs.core.async.muxch_STAR_.call(null,inst_23445);
var inst_23447 = cljs.core.async.close_BANG_.call(null,inst_23446);
var inst_23448 = (inst_23440 + (1));
var tmp23526 = inst_23437;
var tmp23527 = inst_23438;
var tmp23528 = inst_23439;
var inst_23437__$1 = tmp23526;
var inst_23438__$1 = tmp23527;
var inst_23439__$1 = tmp23528;
var inst_23440__$1 = inst_23448;
var state_23496__$1 = (function (){var statearr_23532 = state_23496;
(statearr_23532[(12)] = inst_23437__$1);

(statearr_23532[(13)] = inst_23438__$1);

(statearr_23532[(15)] = inst_23439__$1);

(statearr_23532[(16)] = inst_23440__$1);

(statearr_23532[(17)] = inst_23447);

return statearr_23532;
})();
var statearr_23533_23573 = state_23496__$1;
(statearr_23533_23573[(2)] = null);

(statearr_23533_23573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (18))){
var inst_23466 = (state_23496[(2)]);
var state_23496__$1 = state_23496;
var statearr_23534_23574 = state_23496__$1;
(statearr_23534_23574[(2)] = inst_23466);

(statearr_23534_23574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23497 === (8))){
var inst_23439 = (state_23496[(15)]);
var inst_23440 = (state_23496[(16)]);
var inst_23442 = (inst_23440 < inst_23439);
var inst_23443 = inst_23442;
var state_23496__$1 = state_23496;
if(cljs.core.truth_(inst_23443)){
var statearr_23535_23575 = state_23496__$1;
(statearr_23535_23575[(1)] = (10));

} else {
var statearr_23536_23576 = state_23496__$1;
(statearr_23536_23576[(1)] = (11));

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
});})(c__21649__auto___23548,mults,ensure_mult,p))
;
return ((function (switch__20472__auto__,c__21649__auto___23548,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23540[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23540[(1)] = (1));

return statearr_23540;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23496){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23541){if((e23541 instanceof Object)){
var ex__20476__auto__ = e23541;
var statearr_23542_23577 = state_23496;
(statearr_23542_23577[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23578 = state_23496;
state_23496 = G__23578;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___23548,mults,ensure_mult,p))
})();
var state__21651__auto__ = (function (){var statearr_23543 = f__21650__auto__.call(null);
(statearr_23543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___23548);

return statearr_23543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___23548,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23579 = [];
var len__19529__auto___23582 = arguments.length;
var i__19530__auto___23583 = (0);
while(true){
if((i__19530__auto___23583 < len__19529__auto___23582)){
args23579.push((arguments[i__19530__auto___23583]));

var G__23584 = (i__19530__auto___23583 + (1));
i__19530__auto___23583 = G__23584;
continue;
} else {
}
break;
}

var G__23581 = args23579.length;
switch (G__23581) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23579.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23586 = [];
var len__19529__auto___23589 = arguments.length;
var i__19530__auto___23590 = (0);
while(true){
if((i__19530__auto___23590 < len__19529__auto___23589)){
args23586.push((arguments[i__19530__auto___23590]));

var G__23591 = (i__19530__auto___23590 + (1));
i__19530__auto___23590 = G__23591;
continue;
} else {
}
break;
}

var G__23588 = args23586.length;
switch (G__23588) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23586.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23593 = [];
var len__19529__auto___23664 = arguments.length;
var i__19530__auto___23665 = (0);
while(true){
if((i__19530__auto___23665 < len__19529__auto___23664)){
args23593.push((arguments[i__19530__auto___23665]));

var G__23666 = (i__19530__auto___23665 + (1));
i__19530__auto___23665 = G__23666;
continue;
} else {
}
break;
}

var G__23595 = args23593.length;
switch (G__23595) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23593.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21649__auto___23668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___23668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___23668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23634){
var state_val_23635 = (state_23634[(1)]);
if((state_val_23635 === (7))){
var state_23634__$1 = state_23634;
var statearr_23636_23669 = state_23634__$1;
(statearr_23636_23669[(2)] = null);

(statearr_23636_23669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (1))){
var state_23634__$1 = state_23634;
var statearr_23637_23670 = state_23634__$1;
(statearr_23637_23670[(2)] = null);

(statearr_23637_23670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (4))){
var inst_23598 = (state_23634[(7)]);
var inst_23600 = (inst_23598 < cnt);
var state_23634__$1 = state_23634;
if(cljs.core.truth_(inst_23600)){
var statearr_23638_23671 = state_23634__$1;
(statearr_23638_23671[(1)] = (6));

} else {
var statearr_23639_23672 = state_23634__$1;
(statearr_23639_23672[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (15))){
var inst_23630 = (state_23634[(2)]);
var state_23634__$1 = state_23634;
var statearr_23640_23673 = state_23634__$1;
(statearr_23640_23673[(2)] = inst_23630);

(statearr_23640_23673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (13))){
var inst_23623 = cljs.core.async.close_BANG_.call(null,out);
var state_23634__$1 = state_23634;
var statearr_23641_23674 = state_23634__$1;
(statearr_23641_23674[(2)] = inst_23623);

(statearr_23641_23674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (6))){
var state_23634__$1 = state_23634;
var statearr_23642_23675 = state_23634__$1;
(statearr_23642_23675[(2)] = null);

(statearr_23642_23675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (3))){
var inst_23632 = (state_23634[(2)]);
var state_23634__$1 = state_23634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23634__$1,inst_23632);
} else {
if((state_val_23635 === (12))){
var inst_23620 = (state_23634[(8)]);
var inst_23620__$1 = (state_23634[(2)]);
var inst_23621 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23620__$1);
var state_23634__$1 = (function (){var statearr_23643 = state_23634;
(statearr_23643[(8)] = inst_23620__$1);

return statearr_23643;
})();
if(cljs.core.truth_(inst_23621)){
var statearr_23644_23676 = state_23634__$1;
(statearr_23644_23676[(1)] = (13));

} else {
var statearr_23645_23677 = state_23634__$1;
(statearr_23645_23677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (2))){
var inst_23597 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23598 = (0);
var state_23634__$1 = (function (){var statearr_23646 = state_23634;
(statearr_23646[(7)] = inst_23598);

(statearr_23646[(9)] = inst_23597);

return statearr_23646;
})();
var statearr_23647_23678 = state_23634__$1;
(statearr_23647_23678[(2)] = null);

(statearr_23647_23678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (11))){
var inst_23598 = (state_23634[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23634,(10),Object,null,(9));
var inst_23607 = chs__$1.call(null,inst_23598);
var inst_23608 = done.call(null,inst_23598);
var inst_23609 = cljs.core.async.take_BANG_.call(null,inst_23607,inst_23608);
var state_23634__$1 = state_23634;
var statearr_23648_23679 = state_23634__$1;
(statearr_23648_23679[(2)] = inst_23609);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (9))){
var inst_23598 = (state_23634[(7)]);
var inst_23611 = (state_23634[(2)]);
var inst_23612 = (inst_23598 + (1));
var inst_23598__$1 = inst_23612;
var state_23634__$1 = (function (){var statearr_23649 = state_23634;
(statearr_23649[(7)] = inst_23598__$1);

(statearr_23649[(10)] = inst_23611);

return statearr_23649;
})();
var statearr_23650_23680 = state_23634__$1;
(statearr_23650_23680[(2)] = null);

(statearr_23650_23680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (5))){
var inst_23618 = (state_23634[(2)]);
var state_23634__$1 = (function (){var statearr_23651 = state_23634;
(statearr_23651[(11)] = inst_23618);

return statearr_23651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23634__$1,(12),dchan);
} else {
if((state_val_23635 === (14))){
var inst_23620 = (state_23634[(8)]);
var inst_23625 = cljs.core.apply.call(null,f,inst_23620);
var state_23634__$1 = state_23634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23634__$1,(16),out,inst_23625);
} else {
if((state_val_23635 === (16))){
var inst_23627 = (state_23634[(2)]);
var state_23634__$1 = (function (){var statearr_23652 = state_23634;
(statearr_23652[(12)] = inst_23627);

return statearr_23652;
})();
var statearr_23653_23681 = state_23634__$1;
(statearr_23653_23681[(2)] = null);

(statearr_23653_23681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (10))){
var inst_23602 = (state_23634[(2)]);
var inst_23603 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23634__$1 = (function (){var statearr_23654 = state_23634;
(statearr_23654[(13)] = inst_23602);

return statearr_23654;
})();
var statearr_23655_23682 = state_23634__$1;
(statearr_23655_23682[(2)] = inst_23603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (8))){
var inst_23616 = (state_23634[(2)]);
var state_23634__$1 = state_23634;
var statearr_23656_23683 = state_23634__$1;
(statearr_23656_23683[(2)] = inst_23616);

(statearr_23656_23683[(1)] = (5));


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
});})(c__21649__auto___23668,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20472__auto__,c__21649__auto___23668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23660[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23660[(1)] = (1));

return statearr_23660;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23634){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23661){if((e23661 instanceof Object)){
var ex__20476__auto__ = e23661;
var statearr_23662_23684 = state_23634;
(statearr_23662_23684[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23685 = state_23634;
state_23634 = G__23685;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___23668,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21651__auto__ = (function (){var statearr_23663 = f__21650__auto__.call(null);
(statearr_23663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___23668);

return statearr_23663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___23668,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23687 = [];
var len__19529__auto___23743 = arguments.length;
var i__19530__auto___23744 = (0);
while(true){
if((i__19530__auto___23744 < len__19529__auto___23743)){
args23687.push((arguments[i__19530__auto___23744]));

var G__23745 = (i__19530__auto___23744 + (1));
i__19530__auto___23744 = G__23745;
continue;
} else {
}
break;
}

var G__23689 = args23687.length;
switch (G__23689) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23687.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21649__auto___23747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___23747,out){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___23747,out){
return (function (state_23719){
var state_val_23720 = (state_23719[(1)]);
if((state_val_23720 === (7))){
var inst_23699 = (state_23719[(7)]);
var inst_23698 = (state_23719[(8)]);
var inst_23698__$1 = (state_23719[(2)]);
var inst_23699__$1 = cljs.core.nth.call(null,inst_23698__$1,(0),null);
var inst_23700 = cljs.core.nth.call(null,inst_23698__$1,(1),null);
var inst_23701 = (inst_23699__$1 == null);
var state_23719__$1 = (function (){var statearr_23721 = state_23719;
(statearr_23721[(9)] = inst_23700);

(statearr_23721[(7)] = inst_23699__$1);

(statearr_23721[(8)] = inst_23698__$1);

return statearr_23721;
})();
if(cljs.core.truth_(inst_23701)){
var statearr_23722_23748 = state_23719__$1;
(statearr_23722_23748[(1)] = (8));

} else {
var statearr_23723_23749 = state_23719__$1;
(statearr_23723_23749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (1))){
var inst_23690 = cljs.core.vec.call(null,chs);
var inst_23691 = inst_23690;
var state_23719__$1 = (function (){var statearr_23724 = state_23719;
(statearr_23724[(10)] = inst_23691);

return statearr_23724;
})();
var statearr_23725_23750 = state_23719__$1;
(statearr_23725_23750[(2)] = null);

(statearr_23725_23750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (4))){
var inst_23691 = (state_23719[(10)]);
var state_23719__$1 = state_23719;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23719__$1,(7),inst_23691);
} else {
if((state_val_23720 === (6))){
var inst_23715 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23726_23751 = state_23719__$1;
(statearr_23726_23751[(2)] = inst_23715);

(statearr_23726_23751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (3))){
var inst_23717 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23719__$1,inst_23717);
} else {
if((state_val_23720 === (2))){
var inst_23691 = (state_23719[(10)]);
var inst_23693 = cljs.core.count.call(null,inst_23691);
var inst_23694 = (inst_23693 > (0));
var state_23719__$1 = state_23719;
if(cljs.core.truth_(inst_23694)){
var statearr_23728_23752 = state_23719__$1;
(statearr_23728_23752[(1)] = (4));

} else {
var statearr_23729_23753 = state_23719__$1;
(statearr_23729_23753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (11))){
var inst_23691 = (state_23719[(10)]);
var inst_23708 = (state_23719[(2)]);
var tmp23727 = inst_23691;
var inst_23691__$1 = tmp23727;
var state_23719__$1 = (function (){var statearr_23730 = state_23719;
(statearr_23730[(10)] = inst_23691__$1);

(statearr_23730[(11)] = inst_23708);

return statearr_23730;
})();
var statearr_23731_23754 = state_23719__$1;
(statearr_23731_23754[(2)] = null);

(statearr_23731_23754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (9))){
var inst_23699 = (state_23719[(7)]);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23719__$1,(11),out,inst_23699);
} else {
if((state_val_23720 === (5))){
var inst_23713 = cljs.core.async.close_BANG_.call(null,out);
var state_23719__$1 = state_23719;
var statearr_23732_23755 = state_23719__$1;
(statearr_23732_23755[(2)] = inst_23713);

(statearr_23732_23755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (10))){
var inst_23711 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23733_23756 = state_23719__$1;
(statearr_23733_23756[(2)] = inst_23711);

(statearr_23733_23756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (8))){
var inst_23691 = (state_23719[(10)]);
var inst_23700 = (state_23719[(9)]);
var inst_23699 = (state_23719[(7)]);
var inst_23698 = (state_23719[(8)]);
var inst_23703 = (function (){var cs = inst_23691;
var vec__23696 = inst_23698;
var v = inst_23699;
var c = inst_23700;
return ((function (cs,vec__23696,v,c,inst_23691,inst_23700,inst_23699,inst_23698,state_val_23720,c__21649__auto___23747,out){
return (function (p1__23686_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23686_SHARP_);
});
;})(cs,vec__23696,v,c,inst_23691,inst_23700,inst_23699,inst_23698,state_val_23720,c__21649__auto___23747,out))
})();
var inst_23704 = cljs.core.filterv.call(null,inst_23703,inst_23691);
var inst_23691__$1 = inst_23704;
var state_23719__$1 = (function (){var statearr_23734 = state_23719;
(statearr_23734[(10)] = inst_23691__$1);

return statearr_23734;
})();
var statearr_23735_23757 = state_23719__$1;
(statearr_23735_23757[(2)] = null);

(statearr_23735_23757[(1)] = (2));


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
});})(c__21649__auto___23747,out))
;
return ((function (switch__20472__auto__,c__21649__auto___23747,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23739[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23739[(1)] = (1));

return statearr_23739;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23719){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23740){if((e23740 instanceof Object)){
var ex__20476__auto__ = e23740;
var statearr_23741_23758 = state_23719;
(statearr_23741_23758[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23759 = state_23719;
state_23719 = G__23759;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___23747,out))
})();
var state__21651__auto__ = (function (){var statearr_23742 = f__21650__auto__.call(null);
(statearr_23742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___23747);

return statearr_23742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___23747,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23760 = [];
var len__19529__auto___23809 = arguments.length;
var i__19530__auto___23810 = (0);
while(true){
if((i__19530__auto___23810 < len__19529__auto___23809)){
args23760.push((arguments[i__19530__auto___23810]));

var G__23811 = (i__19530__auto___23810 + (1));
i__19530__auto___23810 = G__23811;
continue;
} else {
}
break;
}

var G__23762 = args23760.length;
switch (G__23762) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23760.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21649__auto___23813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___23813,out){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___23813,out){
return (function (state_23786){
var state_val_23787 = (state_23786[(1)]);
if((state_val_23787 === (7))){
var inst_23768 = (state_23786[(7)]);
var inst_23768__$1 = (state_23786[(2)]);
var inst_23769 = (inst_23768__$1 == null);
var inst_23770 = cljs.core.not.call(null,inst_23769);
var state_23786__$1 = (function (){var statearr_23788 = state_23786;
(statearr_23788[(7)] = inst_23768__$1);

return statearr_23788;
})();
if(inst_23770){
var statearr_23789_23814 = state_23786__$1;
(statearr_23789_23814[(1)] = (8));

} else {
var statearr_23790_23815 = state_23786__$1;
(statearr_23790_23815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (1))){
var inst_23763 = (0);
var state_23786__$1 = (function (){var statearr_23791 = state_23786;
(statearr_23791[(8)] = inst_23763);

return statearr_23791;
})();
var statearr_23792_23816 = state_23786__$1;
(statearr_23792_23816[(2)] = null);

(statearr_23792_23816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (4))){
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23786__$1,(7),ch);
} else {
if((state_val_23787 === (6))){
var inst_23781 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23793_23817 = state_23786__$1;
(statearr_23793_23817[(2)] = inst_23781);

(statearr_23793_23817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (3))){
var inst_23783 = (state_23786[(2)]);
var inst_23784 = cljs.core.async.close_BANG_.call(null,out);
var state_23786__$1 = (function (){var statearr_23794 = state_23786;
(statearr_23794[(9)] = inst_23783);

return statearr_23794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23786__$1,inst_23784);
} else {
if((state_val_23787 === (2))){
var inst_23763 = (state_23786[(8)]);
var inst_23765 = (inst_23763 < n);
var state_23786__$1 = state_23786;
if(cljs.core.truth_(inst_23765)){
var statearr_23795_23818 = state_23786__$1;
(statearr_23795_23818[(1)] = (4));

} else {
var statearr_23796_23819 = state_23786__$1;
(statearr_23796_23819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (11))){
var inst_23763 = (state_23786[(8)]);
var inst_23773 = (state_23786[(2)]);
var inst_23774 = (inst_23763 + (1));
var inst_23763__$1 = inst_23774;
var state_23786__$1 = (function (){var statearr_23797 = state_23786;
(statearr_23797[(10)] = inst_23773);

(statearr_23797[(8)] = inst_23763__$1);

return statearr_23797;
})();
var statearr_23798_23820 = state_23786__$1;
(statearr_23798_23820[(2)] = null);

(statearr_23798_23820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (9))){
var state_23786__$1 = state_23786;
var statearr_23799_23821 = state_23786__$1;
(statearr_23799_23821[(2)] = null);

(statearr_23799_23821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (5))){
var state_23786__$1 = state_23786;
var statearr_23800_23822 = state_23786__$1;
(statearr_23800_23822[(2)] = null);

(statearr_23800_23822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (10))){
var inst_23778 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23801_23823 = state_23786__$1;
(statearr_23801_23823[(2)] = inst_23778);

(statearr_23801_23823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (8))){
var inst_23768 = (state_23786[(7)]);
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23786__$1,(11),out,inst_23768);
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
});})(c__21649__auto___23813,out))
;
return ((function (switch__20472__auto__,c__21649__auto___23813,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23805[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23805[(1)] = (1));

return statearr_23805;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23786){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23806){if((e23806 instanceof Object)){
var ex__20476__auto__ = e23806;
var statearr_23807_23824 = state_23786;
(statearr_23807_23824[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23825 = state_23786;
state_23786 = G__23825;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___23813,out))
})();
var state__21651__auto__ = (function (){var statearr_23808 = f__21650__auto__.call(null);
(statearr_23808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___23813);

return statearr_23808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___23813,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23833 = (function (map_LT_,f,ch,meta23834){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23834 = meta23834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23835,meta23834__$1){
var self__ = this;
var _23835__$1 = this;
return (new cljs.core.async.t_cljs$core$async23833(self__.map_LT_,self__.f,self__.ch,meta23834__$1));
});

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23835){
var self__ = this;
var _23835__$1 = this;
return self__.meta23834;
});

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23836 = (function (map_LT_,f,ch,meta23834,_,fn1,meta23837){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23834 = meta23834;
this._ = _;
this.fn1 = fn1;
this.meta23837 = meta23837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23838,meta23837__$1){
var self__ = this;
var _23838__$1 = this;
return (new cljs.core.async.t_cljs$core$async23836(self__.map_LT_,self__.f,self__.ch,self__.meta23834,self__._,self__.fn1,meta23837__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23838){
var self__ = this;
var _23838__$1 = this;
return self__.meta23837;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23836.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23826_SHARP_){
return f1.call(null,(((p1__23826_SHARP_ == null))?null:self__.f.call(null,p1__23826_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23836.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23834","meta23834",-1402154718,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23833","cljs.core.async/t_cljs$core$async23833",-1439115132,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23837","meta23837",-743495363,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23836";

cljs.core.async.t_cljs$core$async23836.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23836");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23836 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23836(map_LT___$1,f__$1,ch__$1,meta23834__$1,___$2,fn1__$1,meta23837){
return (new cljs.core.async.t_cljs$core$async23836(map_LT___$1,f__$1,ch__$1,meta23834__$1,___$2,fn1__$1,meta23837));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23836(self__.map_LT_,self__.f,self__.ch,self__.meta23834,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18447__auto__ = ret;
if(cljs.core.truth_(and__18447__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18447__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23834","meta23834",-1402154718,null)], null);
});

cljs.core.async.t_cljs$core$async23833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23833";

cljs.core.async.t_cljs$core$async23833.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23833");
});

cljs.core.async.__GT_t_cljs$core$async23833 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23833(map_LT___$1,f__$1,ch__$1,meta23834){
return (new cljs.core.async.t_cljs$core$async23833(map_LT___$1,f__$1,ch__$1,meta23834));
});

}

return (new cljs.core.async.t_cljs$core$async23833(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23842 = (function (map_GT_,f,ch,meta23843){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23843 = meta23843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23844,meta23843__$1){
var self__ = this;
var _23844__$1 = this;
return (new cljs.core.async.t_cljs$core$async23842(self__.map_GT_,self__.f,self__.ch,meta23843__$1));
});

cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23844){
var self__ = this;
var _23844__$1 = this;
return self__.meta23843;
});

cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23842.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23843","meta23843",-1643415578,null)], null);
});

cljs.core.async.t_cljs$core$async23842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23842";

cljs.core.async.t_cljs$core$async23842.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23842");
});

cljs.core.async.__GT_t_cljs$core$async23842 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23842(map_GT___$1,f__$1,ch__$1,meta23843){
return (new cljs.core.async.t_cljs$core$async23842(map_GT___$1,f__$1,ch__$1,meta23843));
});

}

return (new cljs.core.async.t_cljs$core$async23842(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23848 = (function (filter_GT_,p,ch,meta23849){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23849 = meta23849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23850,meta23849__$1){
var self__ = this;
var _23850__$1 = this;
return (new cljs.core.async.t_cljs$core$async23848(self__.filter_GT_,self__.p,self__.ch,meta23849__$1));
});

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23850){
var self__ = this;
var _23850__$1 = this;
return self__.meta23849;
});

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23849","meta23849",336256035,null)], null);
});

cljs.core.async.t_cljs$core$async23848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23848";

cljs.core.async.t_cljs$core$async23848.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23848");
});

cljs.core.async.__GT_t_cljs$core$async23848 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23848(filter_GT___$1,p__$1,ch__$1,meta23849){
return (new cljs.core.async.t_cljs$core$async23848(filter_GT___$1,p__$1,ch__$1,meta23849));
});

}

return (new cljs.core.async.t_cljs$core$async23848(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23851 = [];
var len__19529__auto___23895 = arguments.length;
var i__19530__auto___23896 = (0);
while(true){
if((i__19530__auto___23896 < len__19529__auto___23895)){
args23851.push((arguments[i__19530__auto___23896]));

var G__23897 = (i__19530__auto___23896 + (1));
i__19530__auto___23896 = G__23897;
continue;
} else {
}
break;
}

var G__23853 = args23851.length;
switch (G__23853) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23851.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21649__auto___23899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___23899,out){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___23899,out){
return (function (state_23874){
var state_val_23875 = (state_23874[(1)]);
if((state_val_23875 === (7))){
var inst_23870 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23876_23900 = state_23874__$1;
(statearr_23876_23900[(2)] = inst_23870);

(statearr_23876_23900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (1))){
var state_23874__$1 = state_23874;
var statearr_23877_23901 = state_23874__$1;
(statearr_23877_23901[(2)] = null);

(statearr_23877_23901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (4))){
var inst_23856 = (state_23874[(7)]);
var inst_23856__$1 = (state_23874[(2)]);
var inst_23857 = (inst_23856__$1 == null);
var state_23874__$1 = (function (){var statearr_23878 = state_23874;
(statearr_23878[(7)] = inst_23856__$1);

return statearr_23878;
})();
if(cljs.core.truth_(inst_23857)){
var statearr_23879_23902 = state_23874__$1;
(statearr_23879_23902[(1)] = (5));

} else {
var statearr_23880_23903 = state_23874__$1;
(statearr_23880_23903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (6))){
var inst_23856 = (state_23874[(7)]);
var inst_23861 = p.call(null,inst_23856);
var state_23874__$1 = state_23874;
if(cljs.core.truth_(inst_23861)){
var statearr_23881_23904 = state_23874__$1;
(statearr_23881_23904[(1)] = (8));

} else {
var statearr_23882_23905 = state_23874__$1;
(statearr_23882_23905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (3))){
var inst_23872 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23874__$1,inst_23872);
} else {
if((state_val_23875 === (2))){
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23874__$1,(4),ch);
} else {
if((state_val_23875 === (11))){
var inst_23864 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23883_23906 = state_23874__$1;
(statearr_23883_23906[(2)] = inst_23864);

(statearr_23883_23906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (9))){
var state_23874__$1 = state_23874;
var statearr_23884_23907 = state_23874__$1;
(statearr_23884_23907[(2)] = null);

(statearr_23884_23907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (5))){
var inst_23859 = cljs.core.async.close_BANG_.call(null,out);
var state_23874__$1 = state_23874;
var statearr_23885_23908 = state_23874__$1;
(statearr_23885_23908[(2)] = inst_23859);

(statearr_23885_23908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (10))){
var inst_23867 = (state_23874[(2)]);
var state_23874__$1 = (function (){var statearr_23886 = state_23874;
(statearr_23886[(8)] = inst_23867);

return statearr_23886;
})();
var statearr_23887_23909 = state_23874__$1;
(statearr_23887_23909[(2)] = null);

(statearr_23887_23909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (8))){
var inst_23856 = (state_23874[(7)]);
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23874__$1,(11),out,inst_23856);
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
});})(c__21649__auto___23899,out))
;
return ((function (switch__20472__auto__,c__21649__auto___23899,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23891 = [null,null,null,null,null,null,null,null,null];
(statearr_23891[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23891[(1)] = (1));

return statearr_23891;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23874){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23892){if((e23892 instanceof Object)){
var ex__20476__auto__ = e23892;
var statearr_23893_23910 = state_23874;
(statearr_23893_23910[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23911 = state_23874;
state_23874 = G__23911;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___23899,out))
})();
var state__21651__auto__ = (function (){var statearr_23894 = f__21650__auto__.call(null);
(statearr_23894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___23899);

return statearr_23894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___23899,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23912 = [];
var len__19529__auto___23915 = arguments.length;
var i__19530__auto___23916 = (0);
while(true){
if((i__19530__auto___23916 < len__19529__auto___23915)){
args23912.push((arguments[i__19530__auto___23916]));

var G__23917 = (i__19530__auto___23916 + (1));
i__19530__auto___23916 = G__23917;
continue;
} else {
}
break;
}

var G__23914 = args23912.length;
switch (G__23914) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23912.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__){
return (function (state_24084){
var state_val_24085 = (state_24084[(1)]);
if((state_val_24085 === (7))){
var inst_24080 = (state_24084[(2)]);
var state_24084__$1 = state_24084;
var statearr_24086_24127 = state_24084__$1;
(statearr_24086_24127[(2)] = inst_24080);

(statearr_24086_24127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (20))){
var inst_24050 = (state_24084[(7)]);
var inst_24061 = (state_24084[(2)]);
var inst_24062 = cljs.core.next.call(null,inst_24050);
var inst_24036 = inst_24062;
var inst_24037 = null;
var inst_24038 = (0);
var inst_24039 = (0);
var state_24084__$1 = (function (){var statearr_24087 = state_24084;
(statearr_24087[(8)] = inst_24036);

(statearr_24087[(9)] = inst_24061);

(statearr_24087[(10)] = inst_24039);

(statearr_24087[(11)] = inst_24037);

(statearr_24087[(12)] = inst_24038);

return statearr_24087;
})();
var statearr_24088_24128 = state_24084__$1;
(statearr_24088_24128[(2)] = null);

(statearr_24088_24128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (1))){
var state_24084__$1 = state_24084;
var statearr_24089_24129 = state_24084__$1;
(statearr_24089_24129[(2)] = null);

(statearr_24089_24129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (4))){
var inst_24025 = (state_24084[(13)]);
var inst_24025__$1 = (state_24084[(2)]);
var inst_24026 = (inst_24025__$1 == null);
var state_24084__$1 = (function (){var statearr_24090 = state_24084;
(statearr_24090[(13)] = inst_24025__$1);

return statearr_24090;
})();
if(cljs.core.truth_(inst_24026)){
var statearr_24091_24130 = state_24084__$1;
(statearr_24091_24130[(1)] = (5));

} else {
var statearr_24092_24131 = state_24084__$1;
(statearr_24092_24131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (15))){
var state_24084__$1 = state_24084;
var statearr_24096_24132 = state_24084__$1;
(statearr_24096_24132[(2)] = null);

(statearr_24096_24132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (21))){
var state_24084__$1 = state_24084;
var statearr_24097_24133 = state_24084__$1;
(statearr_24097_24133[(2)] = null);

(statearr_24097_24133[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (13))){
var inst_24036 = (state_24084[(8)]);
var inst_24039 = (state_24084[(10)]);
var inst_24037 = (state_24084[(11)]);
var inst_24038 = (state_24084[(12)]);
var inst_24046 = (state_24084[(2)]);
var inst_24047 = (inst_24039 + (1));
var tmp24093 = inst_24036;
var tmp24094 = inst_24037;
var tmp24095 = inst_24038;
var inst_24036__$1 = tmp24093;
var inst_24037__$1 = tmp24094;
var inst_24038__$1 = tmp24095;
var inst_24039__$1 = inst_24047;
var state_24084__$1 = (function (){var statearr_24098 = state_24084;
(statearr_24098[(14)] = inst_24046);

(statearr_24098[(8)] = inst_24036__$1);

(statearr_24098[(10)] = inst_24039__$1);

(statearr_24098[(11)] = inst_24037__$1);

(statearr_24098[(12)] = inst_24038__$1);

return statearr_24098;
})();
var statearr_24099_24134 = state_24084__$1;
(statearr_24099_24134[(2)] = null);

(statearr_24099_24134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (22))){
var state_24084__$1 = state_24084;
var statearr_24100_24135 = state_24084__$1;
(statearr_24100_24135[(2)] = null);

(statearr_24100_24135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (6))){
var inst_24025 = (state_24084[(13)]);
var inst_24034 = f.call(null,inst_24025);
var inst_24035 = cljs.core.seq.call(null,inst_24034);
var inst_24036 = inst_24035;
var inst_24037 = null;
var inst_24038 = (0);
var inst_24039 = (0);
var state_24084__$1 = (function (){var statearr_24101 = state_24084;
(statearr_24101[(8)] = inst_24036);

(statearr_24101[(10)] = inst_24039);

(statearr_24101[(11)] = inst_24037);

(statearr_24101[(12)] = inst_24038);

return statearr_24101;
})();
var statearr_24102_24136 = state_24084__$1;
(statearr_24102_24136[(2)] = null);

(statearr_24102_24136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (17))){
var inst_24050 = (state_24084[(7)]);
var inst_24054 = cljs.core.chunk_first.call(null,inst_24050);
var inst_24055 = cljs.core.chunk_rest.call(null,inst_24050);
var inst_24056 = cljs.core.count.call(null,inst_24054);
var inst_24036 = inst_24055;
var inst_24037 = inst_24054;
var inst_24038 = inst_24056;
var inst_24039 = (0);
var state_24084__$1 = (function (){var statearr_24103 = state_24084;
(statearr_24103[(8)] = inst_24036);

(statearr_24103[(10)] = inst_24039);

(statearr_24103[(11)] = inst_24037);

(statearr_24103[(12)] = inst_24038);

return statearr_24103;
})();
var statearr_24104_24137 = state_24084__$1;
(statearr_24104_24137[(2)] = null);

(statearr_24104_24137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (3))){
var inst_24082 = (state_24084[(2)]);
var state_24084__$1 = state_24084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24084__$1,inst_24082);
} else {
if((state_val_24085 === (12))){
var inst_24070 = (state_24084[(2)]);
var state_24084__$1 = state_24084;
var statearr_24105_24138 = state_24084__$1;
(statearr_24105_24138[(2)] = inst_24070);

(statearr_24105_24138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (2))){
var state_24084__$1 = state_24084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24084__$1,(4),in$);
} else {
if((state_val_24085 === (23))){
var inst_24078 = (state_24084[(2)]);
var state_24084__$1 = state_24084;
var statearr_24106_24139 = state_24084__$1;
(statearr_24106_24139[(2)] = inst_24078);

(statearr_24106_24139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (19))){
var inst_24065 = (state_24084[(2)]);
var state_24084__$1 = state_24084;
var statearr_24107_24140 = state_24084__$1;
(statearr_24107_24140[(2)] = inst_24065);

(statearr_24107_24140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (11))){
var inst_24050 = (state_24084[(7)]);
var inst_24036 = (state_24084[(8)]);
var inst_24050__$1 = cljs.core.seq.call(null,inst_24036);
var state_24084__$1 = (function (){var statearr_24108 = state_24084;
(statearr_24108[(7)] = inst_24050__$1);

return statearr_24108;
})();
if(inst_24050__$1){
var statearr_24109_24141 = state_24084__$1;
(statearr_24109_24141[(1)] = (14));

} else {
var statearr_24110_24142 = state_24084__$1;
(statearr_24110_24142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (9))){
var inst_24072 = (state_24084[(2)]);
var inst_24073 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24084__$1 = (function (){var statearr_24111 = state_24084;
(statearr_24111[(15)] = inst_24072);

return statearr_24111;
})();
if(cljs.core.truth_(inst_24073)){
var statearr_24112_24143 = state_24084__$1;
(statearr_24112_24143[(1)] = (21));

} else {
var statearr_24113_24144 = state_24084__$1;
(statearr_24113_24144[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (5))){
var inst_24028 = cljs.core.async.close_BANG_.call(null,out);
var state_24084__$1 = state_24084;
var statearr_24114_24145 = state_24084__$1;
(statearr_24114_24145[(2)] = inst_24028);

(statearr_24114_24145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (14))){
var inst_24050 = (state_24084[(7)]);
var inst_24052 = cljs.core.chunked_seq_QMARK_.call(null,inst_24050);
var state_24084__$1 = state_24084;
if(inst_24052){
var statearr_24115_24146 = state_24084__$1;
(statearr_24115_24146[(1)] = (17));

} else {
var statearr_24116_24147 = state_24084__$1;
(statearr_24116_24147[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (16))){
var inst_24068 = (state_24084[(2)]);
var state_24084__$1 = state_24084;
var statearr_24117_24148 = state_24084__$1;
(statearr_24117_24148[(2)] = inst_24068);

(statearr_24117_24148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24085 === (10))){
var inst_24039 = (state_24084[(10)]);
var inst_24037 = (state_24084[(11)]);
var inst_24044 = cljs.core._nth.call(null,inst_24037,inst_24039);
var state_24084__$1 = state_24084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24084__$1,(13),out,inst_24044);
} else {
if((state_val_24085 === (18))){
var inst_24050 = (state_24084[(7)]);
var inst_24059 = cljs.core.first.call(null,inst_24050);
var state_24084__$1 = state_24084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24084__$1,(20),out,inst_24059);
} else {
if((state_val_24085 === (8))){
var inst_24039 = (state_24084[(10)]);
var inst_24038 = (state_24084[(12)]);
var inst_24041 = (inst_24039 < inst_24038);
var inst_24042 = inst_24041;
var state_24084__$1 = state_24084;
if(cljs.core.truth_(inst_24042)){
var statearr_24118_24149 = state_24084__$1;
(statearr_24118_24149[(1)] = (10));

} else {
var statearr_24119_24150 = state_24084__$1;
(statearr_24119_24150[(1)] = (11));

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
});})(c__21649__auto__))
;
return ((function (switch__20472__auto__,c__21649__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_24123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24123[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__);

(statearr_24123[(1)] = (1));

return statearr_24123;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____1 = (function (state_24084){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24124){if((e24124 instanceof Object)){
var ex__20476__auto__ = e24124;
var statearr_24125_24151 = state_24084;
(statearr_24125_24151[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24152 = state_24084;
state_24084 = G__24152;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__ = function(state_24084){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____1.call(this,state_24084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__))
})();
var state__21651__auto__ = (function (){var statearr_24126 = f__21650__auto__.call(null);
(statearr_24126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_24126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__))
);

return c__21649__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24153 = [];
var len__19529__auto___24156 = arguments.length;
var i__19530__auto___24157 = (0);
while(true){
if((i__19530__auto___24157 < len__19529__auto___24156)){
args24153.push((arguments[i__19530__auto___24157]));

var G__24158 = (i__19530__auto___24157 + (1));
i__19530__auto___24157 = G__24158;
continue;
} else {
}
break;
}

var G__24155 = args24153.length;
switch (G__24155) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24153.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24160 = [];
var len__19529__auto___24163 = arguments.length;
var i__19530__auto___24164 = (0);
while(true){
if((i__19530__auto___24164 < len__19529__auto___24163)){
args24160.push((arguments[i__19530__auto___24164]));

var G__24165 = (i__19530__auto___24164 + (1));
i__19530__auto___24164 = G__24165;
continue;
} else {
}
break;
}

var G__24162 = args24160.length;
switch (G__24162) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24160.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24167 = [];
var len__19529__auto___24218 = arguments.length;
var i__19530__auto___24219 = (0);
while(true){
if((i__19530__auto___24219 < len__19529__auto___24218)){
args24167.push((arguments[i__19530__auto___24219]));

var G__24220 = (i__19530__auto___24219 + (1));
i__19530__auto___24219 = G__24220;
continue;
} else {
}
break;
}

var G__24169 = args24167.length;
switch (G__24169) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24167.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21649__auto___24222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___24222,out){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___24222,out){
return (function (state_24193){
var state_val_24194 = (state_24193[(1)]);
if((state_val_24194 === (7))){
var inst_24188 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24195_24223 = state_24193__$1;
(statearr_24195_24223[(2)] = inst_24188);

(statearr_24195_24223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (1))){
var inst_24170 = null;
var state_24193__$1 = (function (){var statearr_24196 = state_24193;
(statearr_24196[(7)] = inst_24170);

return statearr_24196;
})();
var statearr_24197_24224 = state_24193__$1;
(statearr_24197_24224[(2)] = null);

(statearr_24197_24224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (4))){
var inst_24173 = (state_24193[(8)]);
var inst_24173__$1 = (state_24193[(2)]);
var inst_24174 = (inst_24173__$1 == null);
var inst_24175 = cljs.core.not.call(null,inst_24174);
var state_24193__$1 = (function (){var statearr_24198 = state_24193;
(statearr_24198[(8)] = inst_24173__$1);

return statearr_24198;
})();
if(inst_24175){
var statearr_24199_24225 = state_24193__$1;
(statearr_24199_24225[(1)] = (5));

} else {
var statearr_24200_24226 = state_24193__$1;
(statearr_24200_24226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (6))){
var state_24193__$1 = state_24193;
var statearr_24201_24227 = state_24193__$1;
(statearr_24201_24227[(2)] = null);

(statearr_24201_24227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (3))){
var inst_24190 = (state_24193[(2)]);
var inst_24191 = cljs.core.async.close_BANG_.call(null,out);
var state_24193__$1 = (function (){var statearr_24202 = state_24193;
(statearr_24202[(9)] = inst_24190);

return statearr_24202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24193__$1,inst_24191);
} else {
if((state_val_24194 === (2))){
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(4),ch);
} else {
if((state_val_24194 === (11))){
var inst_24173 = (state_24193[(8)]);
var inst_24182 = (state_24193[(2)]);
var inst_24170 = inst_24173;
var state_24193__$1 = (function (){var statearr_24203 = state_24193;
(statearr_24203[(7)] = inst_24170);

(statearr_24203[(10)] = inst_24182);

return statearr_24203;
})();
var statearr_24204_24228 = state_24193__$1;
(statearr_24204_24228[(2)] = null);

(statearr_24204_24228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (9))){
var inst_24173 = (state_24193[(8)]);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24193__$1,(11),out,inst_24173);
} else {
if((state_val_24194 === (5))){
var inst_24173 = (state_24193[(8)]);
var inst_24170 = (state_24193[(7)]);
var inst_24177 = cljs.core._EQ_.call(null,inst_24173,inst_24170);
var state_24193__$1 = state_24193;
if(inst_24177){
var statearr_24206_24229 = state_24193__$1;
(statearr_24206_24229[(1)] = (8));

} else {
var statearr_24207_24230 = state_24193__$1;
(statearr_24207_24230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (10))){
var inst_24185 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24208_24231 = state_24193__$1;
(statearr_24208_24231[(2)] = inst_24185);

(statearr_24208_24231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (8))){
var inst_24170 = (state_24193[(7)]);
var tmp24205 = inst_24170;
var inst_24170__$1 = tmp24205;
var state_24193__$1 = (function (){var statearr_24209 = state_24193;
(statearr_24209[(7)] = inst_24170__$1);

return statearr_24209;
})();
var statearr_24210_24232 = state_24193__$1;
(statearr_24210_24232[(2)] = null);

(statearr_24210_24232[(1)] = (2));


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
});})(c__21649__auto___24222,out))
;
return ((function (switch__20472__auto__,c__21649__auto___24222,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_24214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24214[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_24214[(1)] = (1));

return statearr_24214;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_24193){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24215){if((e24215 instanceof Object)){
var ex__20476__auto__ = e24215;
var statearr_24216_24233 = state_24193;
(statearr_24216_24233[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24234 = state_24193;
state_24193 = G__24234;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_24193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_24193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___24222,out))
})();
var state__21651__auto__ = (function (){var statearr_24217 = f__21650__auto__.call(null);
(statearr_24217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___24222);

return statearr_24217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___24222,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24235 = [];
var len__19529__auto___24305 = arguments.length;
var i__19530__auto___24306 = (0);
while(true){
if((i__19530__auto___24306 < len__19529__auto___24305)){
args24235.push((arguments[i__19530__auto___24306]));

var G__24307 = (i__19530__auto___24306 + (1));
i__19530__auto___24306 = G__24307;
continue;
} else {
}
break;
}

var G__24237 = args24235.length;
switch (G__24237) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24235.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21649__auto___24309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___24309,out){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___24309,out){
return (function (state_24275){
var state_val_24276 = (state_24275[(1)]);
if((state_val_24276 === (7))){
var inst_24271 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24277_24310 = state_24275__$1;
(statearr_24277_24310[(2)] = inst_24271);

(statearr_24277_24310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (1))){
var inst_24238 = (new Array(n));
var inst_24239 = inst_24238;
var inst_24240 = (0);
var state_24275__$1 = (function (){var statearr_24278 = state_24275;
(statearr_24278[(7)] = inst_24240);

(statearr_24278[(8)] = inst_24239);

return statearr_24278;
})();
var statearr_24279_24311 = state_24275__$1;
(statearr_24279_24311[(2)] = null);

(statearr_24279_24311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (4))){
var inst_24243 = (state_24275[(9)]);
var inst_24243__$1 = (state_24275[(2)]);
var inst_24244 = (inst_24243__$1 == null);
var inst_24245 = cljs.core.not.call(null,inst_24244);
var state_24275__$1 = (function (){var statearr_24280 = state_24275;
(statearr_24280[(9)] = inst_24243__$1);

return statearr_24280;
})();
if(inst_24245){
var statearr_24281_24312 = state_24275__$1;
(statearr_24281_24312[(1)] = (5));

} else {
var statearr_24282_24313 = state_24275__$1;
(statearr_24282_24313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (15))){
var inst_24265 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24283_24314 = state_24275__$1;
(statearr_24283_24314[(2)] = inst_24265);

(statearr_24283_24314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (13))){
var state_24275__$1 = state_24275;
var statearr_24284_24315 = state_24275__$1;
(statearr_24284_24315[(2)] = null);

(statearr_24284_24315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (6))){
var inst_24240 = (state_24275[(7)]);
var inst_24261 = (inst_24240 > (0));
var state_24275__$1 = state_24275;
if(cljs.core.truth_(inst_24261)){
var statearr_24285_24316 = state_24275__$1;
(statearr_24285_24316[(1)] = (12));

} else {
var statearr_24286_24317 = state_24275__$1;
(statearr_24286_24317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (3))){
var inst_24273 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24275__$1,inst_24273);
} else {
if((state_val_24276 === (12))){
var inst_24239 = (state_24275[(8)]);
var inst_24263 = cljs.core.vec.call(null,inst_24239);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24275__$1,(15),out,inst_24263);
} else {
if((state_val_24276 === (2))){
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24275__$1,(4),ch);
} else {
if((state_val_24276 === (11))){
var inst_24255 = (state_24275[(2)]);
var inst_24256 = (new Array(n));
var inst_24239 = inst_24256;
var inst_24240 = (0);
var state_24275__$1 = (function (){var statearr_24287 = state_24275;
(statearr_24287[(7)] = inst_24240);

(statearr_24287[(10)] = inst_24255);

(statearr_24287[(8)] = inst_24239);

return statearr_24287;
})();
var statearr_24288_24318 = state_24275__$1;
(statearr_24288_24318[(2)] = null);

(statearr_24288_24318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (9))){
var inst_24239 = (state_24275[(8)]);
var inst_24253 = cljs.core.vec.call(null,inst_24239);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24275__$1,(11),out,inst_24253);
} else {
if((state_val_24276 === (5))){
var inst_24240 = (state_24275[(7)]);
var inst_24248 = (state_24275[(11)]);
var inst_24243 = (state_24275[(9)]);
var inst_24239 = (state_24275[(8)]);
var inst_24247 = (inst_24239[inst_24240] = inst_24243);
var inst_24248__$1 = (inst_24240 + (1));
var inst_24249 = (inst_24248__$1 < n);
var state_24275__$1 = (function (){var statearr_24289 = state_24275;
(statearr_24289[(11)] = inst_24248__$1);

(statearr_24289[(12)] = inst_24247);

return statearr_24289;
})();
if(cljs.core.truth_(inst_24249)){
var statearr_24290_24319 = state_24275__$1;
(statearr_24290_24319[(1)] = (8));

} else {
var statearr_24291_24320 = state_24275__$1;
(statearr_24291_24320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (14))){
var inst_24268 = (state_24275[(2)]);
var inst_24269 = cljs.core.async.close_BANG_.call(null,out);
var state_24275__$1 = (function (){var statearr_24293 = state_24275;
(statearr_24293[(13)] = inst_24268);

return statearr_24293;
})();
var statearr_24294_24321 = state_24275__$1;
(statearr_24294_24321[(2)] = inst_24269);

(statearr_24294_24321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (10))){
var inst_24259 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24295_24322 = state_24275__$1;
(statearr_24295_24322[(2)] = inst_24259);

(statearr_24295_24322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (8))){
var inst_24248 = (state_24275[(11)]);
var inst_24239 = (state_24275[(8)]);
var tmp24292 = inst_24239;
var inst_24239__$1 = tmp24292;
var inst_24240 = inst_24248;
var state_24275__$1 = (function (){var statearr_24296 = state_24275;
(statearr_24296[(7)] = inst_24240);

(statearr_24296[(8)] = inst_24239__$1);

return statearr_24296;
})();
var statearr_24297_24323 = state_24275__$1;
(statearr_24297_24323[(2)] = null);

(statearr_24297_24323[(1)] = (2));


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
});})(c__21649__auto___24309,out))
;
return ((function (switch__20472__auto__,c__21649__auto___24309,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_24301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24301[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_24301[(1)] = (1));

return statearr_24301;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_24275){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24302){if((e24302 instanceof Object)){
var ex__20476__auto__ = e24302;
var statearr_24303_24324 = state_24275;
(statearr_24303_24324[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24325 = state_24275;
state_24275 = G__24325;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_24275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_24275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___24309,out))
})();
var state__21651__auto__ = (function (){var statearr_24304 = f__21650__auto__.call(null);
(statearr_24304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___24309);

return statearr_24304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___24309,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24326 = [];
var len__19529__auto___24400 = arguments.length;
var i__19530__auto___24401 = (0);
while(true){
if((i__19530__auto___24401 < len__19529__auto___24400)){
args24326.push((arguments[i__19530__auto___24401]));

var G__24402 = (i__19530__auto___24401 + (1));
i__19530__auto___24401 = G__24402;
continue;
} else {
}
break;
}

var G__24328 = args24326.length;
switch (G__24328) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24326.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21649__auto___24404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___24404,out){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___24404,out){
return (function (state_24370){
var state_val_24371 = (state_24370[(1)]);
if((state_val_24371 === (7))){
var inst_24366 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24372_24405 = state_24370__$1;
(statearr_24372_24405[(2)] = inst_24366);

(statearr_24372_24405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (1))){
var inst_24329 = [];
var inst_24330 = inst_24329;
var inst_24331 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24370__$1 = (function (){var statearr_24373 = state_24370;
(statearr_24373[(7)] = inst_24331);

(statearr_24373[(8)] = inst_24330);

return statearr_24373;
})();
var statearr_24374_24406 = state_24370__$1;
(statearr_24374_24406[(2)] = null);

(statearr_24374_24406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (4))){
var inst_24334 = (state_24370[(9)]);
var inst_24334__$1 = (state_24370[(2)]);
var inst_24335 = (inst_24334__$1 == null);
var inst_24336 = cljs.core.not.call(null,inst_24335);
var state_24370__$1 = (function (){var statearr_24375 = state_24370;
(statearr_24375[(9)] = inst_24334__$1);

return statearr_24375;
})();
if(inst_24336){
var statearr_24376_24407 = state_24370__$1;
(statearr_24376_24407[(1)] = (5));

} else {
var statearr_24377_24408 = state_24370__$1;
(statearr_24377_24408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (15))){
var inst_24360 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24378_24409 = state_24370__$1;
(statearr_24378_24409[(2)] = inst_24360);

(statearr_24378_24409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (13))){
var state_24370__$1 = state_24370;
var statearr_24379_24410 = state_24370__$1;
(statearr_24379_24410[(2)] = null);

(statearr_24379_24410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (6))){
var inst_24330 = (state_24370[(8)]);
var inst_24355 = inst_24330.length;
var inst_24356 = (inst_24355 > (0));
var state_24370__$1 = state_24370;
if(cljs.core.truth_(inst_24356)){
var statearr_24380_24411 = state_24370__$1;
(statearr_24380_24411[(1)] = (12));

} else {
var statearr_24381_24412 = state_24370__$1;
(statearr_24381_24412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (3))){
var inst_24368 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24370__$1,inst_24368);
} else {
if((state_val_24371 === (12))){
var inst_24330 = (state_24370[(8)]);
var inst_24358 = cljs.core.vec.call(null,inst_24330);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24370__$1,(15),out,inst_24358);
} else {
if((state_val_24371 === (2))){
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24370__$1,(4),ch);
} else {
if((state_val_24371 === (11))){
var inst_24334 = (state_24370[(9)]);
var inst_24338 = (state_24370[(10)]);
var inst_24348 = (state_24370[(2)]);
var inst_24349 = [];
var inst_24350 = inst_24349.push(inst_24334);
var inst_24330 = inst_24349;
var inst_24331 = inst_24338;
var state_24370__$1 = (function (){var statearr_24382 = state_24370;
(statearr_24382[(7)] = inst_24331);

(statearr_24382[(8)] = inst_24330);

(statearr_24382[(11)] = inst_24350);

(statearr_24382[(12)] = inst_24348);

return statearr_24382;
})();
var statearr_24383_24413 = state_24370__$1;
(statearr_24383_24413[(2)] = null);

(statearr_24383_24413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (9))){
var inst_24330 = (state_24370[(8)]);
var inst_24346 = cljs.core.vec.call(null,inst_24330);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24370__$1,(11),out,inst_24346);
} else {
if((state_val_24371 === (5))){
var inst_24331 = (state_24370[(7)]);
var inst_24334 = (state_24370[(9)]);
var inst_24338 = (state_24370[(10)]);
var inst_24338__$1 = f.call(null,inst_24334);
var inst_24339 = cljs.core._EQ_.call(null,inst_24338__$1,inst_24331);
var inst_24340 = cljs.core.keyword_identical_QMARK_.call(null,inst_24331,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24341 = (inst_24339) || (inst_24340);
var state_24370__$1 = (function (){var statearr_24384 = state_24370;
(statearr_24384[(10)] = inst_24338__$1);

return statearr_24384;
})();
if(cljs.core.truth_(inst_24341)){
var statearr_24385_24414 = state_24370__$1;
(statearr_24385_24414[(1)] = (8));

} else {
var statearr_24386_24415 = state_24370__$1;
(statearr_24386_24415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (14))){
var inst_24363 = (state_24370[(2)]);
var inst_24364 = cljs.core.async.close_BANG_.call(null,out);
var state_24370__$1 = (function (){var statearr_24388 = state_24370;
(statearr_24388[(13)] = inst_24363);

return statearr_24388;
})();
var statearr_24389_24416 = state_24370__$1;
(statearr_24389_24416[(2)] = inst_24364);

(statearr_24389_24416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (10))){
var inst_24353 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24390_24417 = state_24370__$1;
(statearr_24390_24417[(2)] = inst_24353);

(statearr_24390_24417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (8))){
var inst_24334 = (state_24370[(9)]);
var inst_24330 = (state_24370[(8)]);
var inst_24338 = (state_24370[(10)]);
var inst_24343 = inst_24330.push(inst_24334);
var tmp24387 = inst_24330;
var inst_24330__$1 = tmp24387;
var inst_24331 = inst_24338;
var state_24370__$1 = (function (){var statearr_24391 = state_24370;
(statearr_24391[(14)] = inst_24343);

(statearr_24391[(7)] = inst_24331);

(statearr_24391[(8)] = inst_24330__$1);

return statearr_24391;
})();
var statearr_24392_24418 = state_24370__$1;
(statearr_24392_24418[(2)] = null);

(statearr_24392_24418[(1)] = (2));


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
});})(c__21649__auto___24404,out))
;
return ((function (switch__20472__auto__,c__21649__auto___24404,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_24396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24396[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_24396[(1)] = (1));

return statearr_24396;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_24370){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24397){if((e24397 instanceof Object)){
var ex__20476__auto__ = e24397;
var statearr_24398_24419 = state_24370;
(statearr_24398_24419[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24420 = state_24370;
state_24370 = G__24420;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_24370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_24370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___24404,out))
})();
var state__21651__auto__ = (function (){var statearr_24399 = f__21650__auto__.call(null);
(statearr_24399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___24404);

return statearr_24399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___24404,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1506396186130