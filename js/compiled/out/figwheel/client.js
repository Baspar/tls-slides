// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25994 = cljs.core._EQ_;
var expr__25995 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25998){if((e25998 instanceof Error)){
var e = e25998;
return false;
} else {
throw e25998;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25994.call(null,"true",expr__25995))){
return true;
} else {
if(cljs.core.truth_(pred__25994.call(null,"false",expr__25995))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25995)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e26000){if((e26000 instanceof Error)){
var e = e26000;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26000;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19536__auto__ = [];
var len__19529__auto___26002 = arguments.length;
var i__19530__auto___26003 = (0);
while(true){
if((i__19530__auto___26003 < len__19529__auto___26002)){
args__19536__auto__.push((arguments[i__19530__auto___26003]));

var G__26004 = (i__19530__auto___26003 + (1));
i__19530__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26001){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26001));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26005){
var map__26008 = p__26005;
var map__26008__$1 = ((((!((map__26008 == null)))?((((map__26008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26008):map__26008);
var message = cljs.core.get.call(null,map__26008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26008__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18459__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18447__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18447__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18447__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21649__auto___26170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___26170,ch){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___26170,ch){
return (function (state_26139){
var state_val_26140 = (state_26139[(1)]);
if((state_val_26140 === (7))){
var inst_26135 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26141_26171 = state_26139__$1;
(statearr_26141_26171[(2)] = inst_26135);

(statearr_26141_26171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (1))){
var state_26139__$1 = state_26139;
var statearr_26142_26172 = state_26139__$1;
(statearr_26142_26172[(2)] = null);

(statearr_26142_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (4))){
var inst_26092 = (state_26139[(7)]);
var inst_26092__$1 = (state_26139[(2)]);
var state_26139__$1 = (function (){var statearr_26143 = state_26139;
(statearr_26143[(7)] = inst_26092__$1);

return statearr_26143;
})();
if(cljs.core.truth_(inst_26092__$1)){
var statearr_26144_26173 = state_26139__$1;
(statearr_26144_26173[(1)] = (5));

} else {
var statearr_26145_26174 = state_26139__$1;
(statearr_26145_26174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (15))){
var inst_26099 = (state_26139[(8)]);
var inst_26114 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26099);
var inst_26115 = cljs.core.first.call(null,inst_26114);
var inst_26116 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26115);
var inst_26117 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26116)].join('');
var inst_26118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26117);
var state_26139__$1 = state_26139;
var statearr_26146_26175 = state_26139__$1;
(statearr_26146_26175[(2)] = inst_26118);

(statearr_26146_26175[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (13))){
var inst_26123 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26147_26176 = state_26139__$1;
(statearr_26147_26176[(2)] = inst_26123);

(statearr_26147_26176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (6))){
var state_26139__$1 = state_26139;
var statearr_26148_26177 = state_26139__$1;
(statearr_26148_26177[(2)] = null);

(statearr_26148_26177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (17))){
var inst_26121 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26149_26178 = state_26139__$1;
(statearr_26149_26178[(2)] = inst_26121);

(statearr_26149_26178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (3))){
var inst_26137 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26139__$1,inst_26137);
} else {
if((state_val_26140 === (12))){
var inst_26098 = (state_26139[(9)]);
var inst_26112 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26098,opts);
var state_26139__$1 = state_26139;
if(cljs.core.truth_(inst_26112)){
var statearr_26150_26179 = state_26139__$1;
(statearr_26150_26179[(1)] = (15));

} else {
var statearr_26151_26180 = state_26139__$1;
(statearr_26151_26180[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (2))){
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26139__$1,(4),ch);
} else {
if((state_val_26140 === (11))){
var inst_26099 = (state_26139[(8)]);
var inst_26104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26105 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26099);
var inst_26106 = cljs.core.async.timeout.call(null,(1000));
var inst_26107 = [inst_26105,inst_26106];
var inst_26108 = (new cljs.core.PersistentVector(null,2,(5),inst_26104,inst_26107,null));
var state_26139__$1 = state_26139;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26139__$1,(14),inst_26108);
} else {
if((state_val_26140 === (9))){
var inst_26099 = (state_26139[(8)]);
var inst_26125 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26126 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26099);
var inst_26127 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26126);
var inst_26128 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26127)].join('');
var inst_26129 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26128);
var state_26139__$1 = (function (){var statearr_26152 = state_26139;
(statearr_26152[(10)] = inst_26125);

return statearr_26152;
})();
var statearr_26153_26181 = state_26139__$1;
(statearr_26153_26181[(2)] = inst_26129);

(statearr_26153_26181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (5))){
var inst_26092 = (state_26139[(7)]);
var inst_26094 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26095 = (new cljs.core.PersistentArrayMap(null,2,inst_26094,null));
var inst_26096 = (new cljs.core.PersistentHashSet(null,inst_26095,null));
var inst_26097 = figwheel.client.focus_msgs.call(null,inst_26096,inst_26092);
var inst_26098 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26097);
var inst_26099 = cljs.core.first.call(null,inst_26097);
var inst_26100 = figwheel.client.autoload_QMARK_.call(null);
var state_26139__$1 = (function (){var statearr_26154 = state_26139;
(statearr_26154[(9)] = inst_26098);

(statearr_26154[(8)] = inst_26099);

return statearr_26154;
})();
if(cljs.core.truth_(inst_26100)){
var statearr_26155_26182 = state_26139__$1;
(statearr_26155_26182[(1)] = (8));

} else {
var statearr_26156_26183 = state_26139__$1;
(statearr_26156_26183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (14))){
var inst_26110 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26157_26184 = state_26139__$1;
(statearr_26157_26184[(2)] = inst_26110);

(statearr_26157_26184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (16))){
var state_26139__$1 = state_26139;
var statearr_26158_26185 = state_26139__$1;
(statearr_26158_26185[(2)] = null);

(statearr_26158_26185[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (10))){
var inst_26131 = (state_26139[(2)]);
var state_26139__$1 = (function (){var statearr_26159 = state_26139;
(statearr_26159[(11)] = inst_26131);

return statearr_26159;
})();
var statearr_26160_26186 = state_26139__$1;
(statearr_26160_26186[(2)] = null);

(statearr_26160_26186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (8))){
var inst_26098 = (state_26139[(9)]);
var inst_26102 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26098,opts);
var state_26139__$1 = state_26139;
if(cljs.core.truth_(inst_26102)){
var statearr_26161_26187 = state_26139__$1;
(statearr_26161_26187[(1)] = (11));

} else {
var statearr_26162_26188 = state_26139__$1;
(statearr_26162_26188[(1)] = (12));

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
});})(c__21649__auto___26170,ch))
;
return ((function (switch__20472__auto__,c__21649__auto___26170,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____0 = (function (){
var statearr_26166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26166[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__);

(statearr_26166[(1)] = (1));

return statearr_26166;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____1 = (function (state_26139){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_26139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e26167){if((e26167 instanceof Object)){
var ex__20476__auto__ = e26167;
var statearr_26168_26189 = state_26139;
(statearr_26168_26189[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26190 = state_26139;
state_26139 = G__26190;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__ = function(state_26139){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____1.call(this,state_26139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___26170,ch))
})();
var state__21651__auto__ = (function (){var statearr_26169 = f__21650__auto__.call(null);
(statearr_26169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___26170);

return statearr_26169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___26170,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26191_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26191_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26198 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26198){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26196 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26197 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26197;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26196;
}}catch (e26195){if((e26195 instanceof Error)){
var e = e26195;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26198], null));
} else {
var e = e26195;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26198))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26199){
var map__26206 = p__26199;
var map__26206__$1 = ((((!((map__26206 == null)))?((((map__26206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26206):map__26206);
var opts = map__26206__$1;
var build_id = cljs.core.get.call(null,map__26206__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26206,map__26206__$1,opts,build_id){
return (function (p__26208){
var vec__26209 = p__26208;
var map__26210 = cljs.core.nth.call(null,vec__26209,(0),null);
var map__26210__$1 = ((((!((map__26210 == null)))?((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26210):map__26210);
var msg = map__26210__$1;
var msg_name = cljs.core.get.call(null,map__26210__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26209,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26209,map__26210,map__26210__$1,msg,msg_name,_,map__26206,map__26206__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26209,map__26210,map__26210__$1,msg,msg_name,_,map__26206,map__26206__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26206,map__26206__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26216){
var vec__26217 = p__26216;
var map__26218 = cljs.core.nth.call(null,vec__26217,(0),null);
var map__26218__$1 = ((((!((map__26218 == null)))?((((map__26218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26218):map__26218);
var msg = map__26218__$1;
var msg_name = cljs.core.get.call(null,map__26218__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26217,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26220){
var map__26230 = p__26220;
var map__26230__$1 = ((((!((map__26230 == null)))?((((map__26230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26230):map__26230);
var on_compile_warning = cljs.core.get.call(null,map__26230__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26230__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26230,map__26230__$1,on_compile_warning,on_compile_fail){
return (function (p__26232){
var vec__26233 = p__26232;
var map__26234 = cljs.core.nth.call(null,vec__26233,(0),null);
var map__26234__$1 = ((((!((map__26234 == null)))?((((map__26234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26234):map__26234);
var msg = map__26234__$1;
var msg_name = cljs.core.get.call(null,map__26234__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26233,(1));
var pred__26236 = cljs.core._EQ_;
var expr__26237 = msg_name;
if(cljs.core.truth_(pred__26236.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26237))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26236.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26237))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26230,map__26230__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__,msg_hist,msg_names,msg){
return (function (state_26445){
var state_val_26446 = (state_26445[(1)]);
if((state_val_26446 === (7))){
var inst_26373 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26373)){
var statearr_26447_26493 = state_26445__$1;
(statearr_26447_26493[(1)] = (8));

} else {
var statearr_26448_26494 = state_26445__$1;
(statearr_26448_26494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (20))){
var inst_26439 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26449_26495 = state_26445__$1;
(statearr_26449_26495[(2)] = inst_26439);

(statearr_26449_26495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (27))){
var inst_26435 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26450_26496 = state_26445__$1;
(statearr_26450_26496[(2)] = inst_26435);

(statearr_26450_26496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (1))){
var inst_26366 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26366)){
var statearr_26451_26497 = state_26445__$1;
(statearr_26451_26497[(1)] = (2));

} else {
var statearr_26452_26498 = state_26445__$1;
(statearr_26452_26498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (24))){
var inst_26437 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26453_26499 = state_26445__$1;
(statearr_26453_26499[(2)] = inst_26437);

(statearr_26453_26499[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (4))){
var inst_26443 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26445__$1,inst_26443);
} else {
if((state_val_26446 === (15))){
var inst_26441 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26454_26500 = state_26445__$1;
(statearr_26454_26500[(2)] = inst_26441);

(statearr_26454_26500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (21))){
var inst_26400 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26455_26501 = state_26445__$1;
(statearr_26455_26501[(2)] = inst_26400);

(statearr_26455_26501[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (31))){
var inst_26424 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26424)){
var statearr_26456_26502 = state_26445__$1;
(statearr_26456_26502[(1)] = (34));

} else {
var statearr_26457_26503 = state_26445__$1;
(statearr_26457_26503[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (32))){
var inst_26433 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26458_26504 = state_26445__$1;
(statearr_26458_26504[(2)] = inst_26433);

(statearr_26458_26504[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (33))){
var inst_26422 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26459_26505 = state_26445__$1;
(statearr_26459_26505[(2)] = inst_26422);

(statearr_26459_26505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (13))){
var inst_26387 = figwheel.client.heads_up.clear.call(null);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(16),inst_26387);
} else {
if((state_val_26446 === (22))){
var inst_26404 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26405 = figwheel.client.heads_up.append_message.call(null,inst_26404);
var state_26445__$1 = state_26445;
var statearr_26460_26506 = state_26445__$1;
(statearr_26460_26506[(2)] = inst_26405);

(statearr_26460_26506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (36))){
var inst_26431 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26461_26507 = state_26445__$1;
(statearr_26461_26507[(2)] = inst_26431);

(statearr_26461_26507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (29))){
var inst_26415 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26462_26508 = state_26445__$1;
(statearr_26462_26508[(2)] = inst_26415);

(statearr_26462_26508[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (6))){
var inst_26368 = (state_26445[(7)]);
var state_26445__$1 = state_26445;
var statearr_26463_26509 = state_26445__$1;
(statearr_26463_26509[(2)] = inst_26368);

(statearr_26463_26509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (28))){
var inst_26411 = (state_26445[(2)]);
var inst_26412 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26413 = figwheel.client.heads_up.display_warning.call(null,inst_26412);
var state_26445__$1 = (function (){var statearr_26464 = state_26445;
(statearr_26464[(8)] = inst_26411);

return statearr_26464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(29),inst_26413);
} else {
if((state_val_26446 === (25))){
var inst_26409 = figwheel.client.heads_up.clear.call(null);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(28),inst_26409);
} else {
if((state_val_26446 === (34))){
var inst_26426 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(37),inst_26426);
} else {
if((state_val_26446 === (17))){
var inst_26393 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26465_26510 = state_26445__$1;
(statearr_26465_26510[(2)] = inst_26393);

(statearr_26465_26510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (3))){
var inst_26385 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26385)){
var statearr_26466_26511 = state_26445__$1;
(statearr_26466_26511[(1)] = (13));

} else {
var statearr_26467_26512 = state_26445__$1;
(statearr_26467_26512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (12))){
var inst_26381 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26468_26513 = state_26445__$1;
(statearr_26468_26513[(2)] = inst_26381);

(statearr_26468_26513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (2))){
var inst_26368 = (state_26445[(7)]);
var inst_26368__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26445__$1 = (function (){var statearr_26469 = state_26445;
(statearr_26469[(7)] = inst_26368__$1);

return statearr_26469;
})();
if(cljs.core.truth_(inst_26368__$1)){
var statearr_26470_26514 = state_26445__$1;
(statearr_26470_26514[(1)] = (5));

} else {
var statearr_26471_26515 = state_26445__$1;
(statearr_26471_26515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (23))){
var inst_26407 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26407)){
var statearr_26472_26516 = state_26445__$1;
(statearr_26472_26516[(1)] = (25));

} else {
var statearr_26473_26517 = state_26445__$1;
(statearr_26473_26517[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (35))){
var state_26445__$1 = state_26445;
var statearr_26474_26518 = state_26445__$1;
(statearr_26474_26518[(2)] = null);

(statearr_26474_26518[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (19))){
var inst_26402 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26402)){
var statearr_26475_26519 = state_26445__$1;
(statearr_26475_26519[(1)] = (22));

} else {
var statearr_26476_26520 = state_26445__$1;
(statearr_26476_26520[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (11))){
var inst_26377 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26477_26521 = state_26445__$1;
(statearr_26477_26521[(2)] = inst_26377);

(statearr_26477_26521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (9))){
var inst_26379 = figwheel.client.heads_up.clear.call(null);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(12),inst_26379);
} else {
if((state_val_26446 === (5))){
var inst_26370 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26445__$1 = state_26445;
var statearr_26478_26522 = state_26445__$1;
(statearr_26478_26522[(2)] = inst_26370);

(statearr_26478_26522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (14))){
var inst_26395 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26395)){
var statearr_26479_26523 = state_26445__$1;
(statearr_26479_26523[(1)] = (18));

} else {
var statearr_26480_26524 = state_26445__$1;
(statearr_26480_26524[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (26))){
var inst_26417 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26417)){
var statearr_26481_26525 = state_26445__$1;
(statearr_26481_26525[(1)] = (30));

} else {
var statearr_26482_26526 = state_26445__$1;
(statearr_26482_26526[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (16))){
var inst_26389 = (state_26445[(2)]);
var inst_26390 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26391 = figwheel.client.heads_up.display_exception.call(null,inst_26390);
var state_26445__$1 = (function (){var statearr_26483 = state_26445;
(statearr_26483[(9)] = inst_26389);

return statearr_26483;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(17),inst_26391);
} else {
if((state_val_26446 === (30))){
var inst_26419 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26420 = figwheel.client.heads_up.display_warning.call(null,inst_26419);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(33),inst_26420);
} else {
if((state_val_26446 === (10))){
var inst_26383 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26484_26527 = state_26445__$1;
(statearr_26484_26527[(2)] = inst_26383);

(statearr_26484_26527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (18))){
var inst_26397 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26398 = figwheel.client.heads_up.display_exception.call(null,inst_26397);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(21),inst_26398);
} else {
if((state_val_26446 === (37))){
var inst_26428 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26485_26528 = state_26445__$1;
(statearr_26485_26528[(2)] = inst_26428);

(statearr_26485_26528[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (8))){
var inst_26375 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(11),inst_26375);
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
});})(c__21649__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20472__auto__,c__21649__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____0 = (function (){
var statearr_26489 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26489[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__);

(statearr_26489[(1)] = (1));

return statearr_26489;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____1 = (function (state_26445){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_26445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e26490){if((e26490 instanceof Object)){
var ex__20476__auto__ = e26490;
var statearr_26491_26529 = state_26445;
(statearr_26491_26529[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26530 = state_26445;
state_26445 = G__26530;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__ = function(state_26445){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____1.call(this,state_26445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__,msg_hist,msg_names,msg))
})();
var state__21651__auto__ = (function (){var statearr_26492 = f__21650__auto__.call(null);
(statearr_26492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__,msg_hist,msg_names,msg))
);

return c__21649__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21649__auto___26593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto___26593,ch){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto___26593,ch){
return (function (state_26576){
var state_val_26577 = (state_26576[(1)]);
if((state_val_26577 === (1))){
var state_26576__$1 = state_26576;
var statearr_26578_26594 = state_26576__$1;
(statearr_26578_26594[(2)] = null);

(statearr_26578_26594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26577 === (2))){
var state_26576__$1 = state_26576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26576__$1,(4),ch);
} else {
if((state_val_26577 === (3))){
var inst_26574 = (state_26576[(2)]);
var state_26576__$1 = state_26576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26576__$1,inst_26574);
} else {
if((state_val_26577 === (4))){
var inst_26564 = (state_26576[(7)]);
var inst_26564__$1 = (state_26576[(2)]);
var state_26576__$1 = (function (){var statearr_26579 = state_26576;
(statearr_26579[(7)] = inst_26564__$1);

return statearr_26579;
})();
if(cljs.core.truth_(inst_26564__$1)){
var statearr_26580_26595 = state_26576__$1;
(statearr_26580_26595[(1)] = (5));

} else {
var statearr_26581_26596 = state_26576__$1;
(statearr_26581_26596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26577 === (5))){
var inst_26564 = (state_26576[(7)]);
var inst_26566 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26564);
var state_26576__$1 = state_26576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26576__$1,(8),inst_26566);
} else {
if((state_val_26577 === (6))){
var state_26576__$1 = state_26576;
var statearr_26582_26597 = state_26576__$1;
(statearr_26582_26597[(2)] = null);

(statearr_26582_26597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26577 === (7))){
var inst_26572 = (state_26576[(2)]);
var state_26576__$1 = state_26576;
var statearr_26583_26598 = state_26576__$1;
(statearr_26583_26598[(2)] = inst_26572);

(statearr_26583_26598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26577 === (8))){
var inst_26568 = (state_26576[(2)]);
var state_26576__$1 = (function (){var statearr_26584 = state_26576;
(statearr_26584[(8)] = inst_26568);

return statearr_26584;
})();
var statearr_26585_26599 = state_26576__$1;
(statearr_26585_26599[(2)] = null);

(statearr_26585_26599[(1)] = (2));


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
});})(c__21649__auto___26593,ch))
;
return ((function (switch__20472__auto__,c__21649__auto___26593,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20473__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20473__auto____0 = (function (){
var statearr_26589 = [null,null,null,null,null,null,null,null,null];
(statearr_26589[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20473__auto__);

(statearr_26589[(1)] = (1));

return statearr_26589;
});
var figwheel$client$heads_up_plugin_$_state_machine__20473__auto____1 = (function (state_26576){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_26576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e26590){if((e26590 instanceof Object)){
var ex__20476__auto__ = e26590;
var statearr_26591_26600 = state_26576;
(statearr_26591_26600[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26601 = state_26576;
state_26576 = G__26601;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20473__auto__ = function(state_26576){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20473__auto____1.call(this,state_26576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20473__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20473__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto___26593,ch))
})();
var state__21651__auto__ = (function (){var statearr_26592 = f__21650__auto__.call(null);
(statearr_26592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto___26593);

return statearr_26592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto___26593,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21649__auto__){
return (function (){
var f__21650__auto__ = (function (){var switch__20472__auto__ = ((function (c__21649__auto__){
return (function (state_26622){
var state_val_26623 = (state_26622[(1)]);
if((state_val_26623 === (1))){
var inst_26617 = cljs.core.async.timeout.call(null,(3000));
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26622__$1,(2),inst_26617);
} else {
if((state_val_26623 === (2))){
var inst_26619 = (state_26622[(2)]);
var inst_26620 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26622__$1 = (function (){var statearr_26624 = state_26622;
(statearr_26624[(7)] = inst_26619);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26622__$1,inst_26620);
} else {
return null;
}
}
});})(c__21649__auto__))
;
return ((function (switch__20472__auto__,c__21649__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____1 = (function (state_26622){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_26622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__20476__auto__ = e26629;
var statearr_26630_26632 = state_26622;
(statearr_26630_26632[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26633 = state_26622;
state_26622 = G__26633;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__ = function(state_26622){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____1.call(this,state_26622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21649__auto__))
})();
var state__21651__auto__ = (function (){var statearr_26631 = f__21650__auto__.call(null);
(statearr_26631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21649__auto__);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21651__auto__);
});})(c__21649__auto__))
);

return c__21649__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26634){
var map__26641 = p__26634;
var map__26641__$1 = ((((!((map__26641 == null)))?((((map__26641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26641):map__26641);
var ed = map__26641__$1;
var formatted_exception = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26643_26647 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26644_26648 = null;
var count__26645_26649 = (0);
var i__26646_26650 = (0);
while(true){
if((i__26646_26650 < count__26645_26649)){
var msg_26651 = cljs.core._nth.call(null,chunk__26644_26648,i__26646_26650);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26651);

var G__26652 = seq__26643_26647;
var G__26653 = chunk__26644_26648;
var G__26654 = count__26645_26649;
var G__26655 = (i__26646_26650 + (1));
seq__26643_26647 = G__26652;
chunk__26644_26648 = G__26653;
count__26645_26649 = G__26654;
i__26646_26650 = G__26655;
continue;
} else {
var temp__4657__auto___26656 = cljs.core.seq.call(null,seq__26643_26647);
if(temp__4657__auto___26656){
var seq__26643_26657__$1 = temp__4657__auto___26656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26643_26657__$1)){
var c__19270__auto___26658 = cljs.core.chunk_first.call(null,seq__26643_26657__$1);
var G__26659 = cljs.core.chunk_rest.call(null,seq__26643_26657__$1);
var G__26660 = c__19270__auto___26658;
var G__26661 = cljs.core.count.call(null,c__19270__auto___26658);
var G__26662 = (0);
seq__26643_26647 = G__26659;
chunk__26644_26648 = G__26660;
count__26645_26649 = G__26661;
i__26646_26650 = G__26662;
continue;
} else {
var msg_26663 = cljs.core.first.call(null,seq__26643_26657__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26663);

var G__26664 = cljs.core.next.call(null,seq__26643_26657__$1);
var G__26665 = null;
var G__26666 = (0);
var G__26667 = (0);
seq__26643_26647 = G__26664;
chunk__26644_26648 = G__26665;
count__26645_26649 = G__26666;
i__26646_26650 = G__26667;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26668){
var map__26671 = p__26668;
var map__26671__$1 = ((((!((map__26671 == null)))?((((map__26671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26671):map__26671);
var w = map__26671__$1;
var message = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18447__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18447__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18447__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26679 = cljs.core.seq.call(null,plugins);
var chunk__26680 = null;
var count__26681 = (0);
var i__26682 = (0);
while(true){
if((i__26682 < count__26681)){
var vec__26683 = cljs.core._nth.call(null,chunk__26680,i__26682);
var k = cljs.core.nth.call(null,vec__26683,(0),null);
var plugin = cljs.core.nth.call(null,vec__26683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26685 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26679,chunk__26680,count__26681,i__26682,pl_26685,vec__26683,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26685.call(null,msg_hist);
});})(seq__26679,chunk__26680,count__26681,i__26682,pl_26685,vec__26683,k,plugin))
);
} else {
}

var G__26686 = seq__26679;
var G__26687 = chunk__26680;
var G__26688 = count__26681;
var G__26689 = (i__26682 + (1));
seq__26679 = G__26686;
chunk__26680 = G__26687;
count__26681 = G__26688;
i__26682 = G__26689;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26679);
if(temp__4657__auto__){
var seq__26679__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26679__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__26679__$1);
var G__26690 = cljs.core.chunk_rest.call(null,seq__26679__$1);
var G__26691 = c__19270__auto__;
var G__26692 = cljs.core.count.call(null,c__19270__auto__);
var G__26693 = (0);
seq__26679 = G__26690;
chunk__26680 = G__26691;
count__26681 = G__26692;
i__26682 = G__26693;
continue;
} else {
var vec__26684 = cljs.core.first.call(null,seq__26679__$1);
var k = cljs.core.nth.call(null,vec__26684,(0),null);
var plugin = cljs.core.nth.call(null,vec__26684,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26694 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26679,chunk__26680,count__26681,i__26682,pl_26694,vec__26684,k,plugin,seq__26679__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26694.call(null,msg_hist);
});})(seq__26679,chunk__26680,count__26681,i__26682,pl_26694,vec__26684,k,plugin,seq__26679__$1,temp__4657__auto__))
);
} else {
}

var G__26695 = cljs.core.next.call(null,seq__26679__$1);
var G__26696 = null;
var G__26697 = (0);
var G__26698 = (0);
seq__26679 = G__26695;
chunk__26680 = G__26696;
count__26681 = G__26697;
i__26682 = G__26698;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26699 = [];
var len__19529__auto___26702 = arguments.length;
var i__19530__auto___26703 = (0);
while(true){
if((i__19530__auto___26703 < len__19529__auto___26702)){
args26699.push((arguments[i__19530__auto___26703]));

var G__26704 = (i__19530__auto___26703 + (1));
i__19530__auto___26703 = G__26704;
continue;
} else {
}
break;
}

var G__26701 = args26699.length;
switch (G__26701) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26699.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19536__auto__ = [];
var len__19529__auto___26710 = arguments.length;
var i__19530__auto___26711 = (0);
while(true){
if((i__19530__auto___26711 < len__19529__auto___26710)){
args__19536__auto__.push((arguments[i__19530__auto___26711]));

var G__26712 = (i__19530__auto___26711 + (1));
i__19530__auto___26711 = G__26712;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26707){
var map__26708 = p__26707;
var map__26708__$1 = ((((!((map__26708 == null)))?((((map__26708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26708):map__26708);
var opts = map__26708__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26706){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26706));
});

//# sourceMappingURL=client.js.map?rel=1506396187558