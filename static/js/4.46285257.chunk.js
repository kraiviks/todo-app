(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[4],{166:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"b",(function(){return O})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return r}));var s={};n.r(s),n.d(s,"getTasksList",(function(){return S})),n.d(s,"getTaskById",(function(){return I}));var a={};n.r(a);var c={};n.r(c),n.d(c,"tasks",(function(){return s})),n.d(c,"models",(function(){return a}));var o={};n.r(o),n.d(o,"taskSchema",(function(){return N})),n.d(o,"normalizeTask",(function(){return w})),n.d(o,"normalizeTasks",(function(){return B})),n.d(o,"tasksInitialState",(function(){return C})),n.d(o,"$tasks",(function(){return F})),n.d(o,"$queryConfig",(function(){return z})),n.d(o,"$tasksListLoading",(function(){return q})),n.d(o,"$taskDetailsLoading",(function(){return G})),n.d(o,"$tasksList",(function(){return H})),n.d(o,"$tasksFiltered",(function(){return J})),n.d(o,"$tasksListEmpty",(function(){return P})),n.d(o,"events",(function(){return R})),n.d(o,"effects",(function(){return A})),n.d(o,"selectors",(function(){return M}));var r={};n.r(r),n.d(r,"getTaskStatus",(function(){return Q}));var i=n(75),d=n(83),u=n(169),l=n.n(u),f=n(26);const k=t=>{let{data:e,titleHref:n,children:s,...a}=t;return e||a.loading?Object(f.jsxs)(d.b,{title:"Task#".concat(a.loading?"":null===e||void 0===e?void 0:e.id),className:l.a.root,...a,children:[n?Object(f.jsx)(i.b,{to:n,children:null===e||void 0===e?void 0:e.title}):null===e||void 0===e?void 0:e.title,s]}):null};var b=n(5),j=n.n(b),g=n(170),p=n.n(g);const O=t=>{let{data:e,before:n,titleHref:s}=t;const a=s?Object(f.jsx)(i.b,{to:s,children:e.title}):e.title;return Object(f.jsxs)(d.i,{className:j()(p.a.root,{[p.a.completed]:e.completed}),children:[n,a]})};var m=n(165),v=n(168),h=n(182),x=n(173),T=n.n(x),y=n(84);const _=T.a.create({baseURL:y.a}),L="/todos",S=t=>_.get(L,{params:t}),I=t=>{let{taskId:e,...n}=t;return _.get("".concat(L,"/").concat(e),{params:n})},E=Object(m.createEvent)(),$=Object(m.createEffect)((t=>c.tasks.getTasksList(t))),D=Object(m.createEffect)((t=>c.tasks.getTaskById(t))),N=new h.b.Entity("tasks"),w=t=>Object(h.a)(t,N),B=t=>Object(h.a)(t,[N]),C={},F=Object(m.createStore)(C).on($.doneData,((t,e)=>B(e.data).entities.tasks)).on(D.doneData,((t,e)=>({...t,...w(e.data).entities.tasks}))),z=Object(m.createStore)({}).on(E,((t,e)=>e)),q=$.pending,G=D.pending,H=Object(m.combine)(F,(t=>Object.values(t))),J=Object(m.combine)(H,z,((t,e)=>t.filter((t=>void 0===e.completed||t.completed===e.completed)))),P=J.map((t=>0===t.length)),R={setQueryConfig:E},A={getTaskByIdFx:D,getTasksListFx:$},M={useTask:t=>Object(v.useStore)(F)[t]},Q=t=>t.completed?"CLOSED":"OPENED"},169:function(t,e,n){t.exports={root:"styles_root__1Slir"}},170:function(t,e,n){t.exports={root:"styles_root__fGMdR",completed:"styles_completed__2aSOy"}},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var s=n(83),a=n(166),c=n(165),o=n(183);const r=Object(c.createEvent)();a.d.$tasks.on(r,((t,e)=>Object(o.a)(t,(t=>{const n=t[e];n.completed=!n.completed}))));const i={toggleTask:r};var d=n(26);const u=t=>{let{taskId:e,withStatus:n=!0}=t;const c=a.d.selectors.useTask(e);if(!c)return null;const o=a.c.getTaskStatus(c);return Object(d.jsx)(s.c,{onClick:()=>i.toggleTask(e),checked:c.completed,children:n&&o})}},205:function(t,e,n){t.exports={root:"styles_root__1aFqh",content:"styles_content__3IC4G",card:"styles_card__hyz1A"}},206:function(t,e,n){"use strict";n.r(e),n.d(e,"TaskDetailsPage",(function(){return f}));var s=n(167),a=n(0),c=n(75),o=n(83),r=n(166),i=n(172),d=n(205),u=n.n(d),l=n(26);const f=Object(s.reflect)({view:t=>{let{match:e,isLoading:n}=t;const s=Number(null===e||void 0===e?void 0:e.params.taskId),d=r.d.selectors.useTask(s);return Object(a.useEffect)((()=>{r.d.effects.getTaskByIdFx({taskId:s})}),[s]),d||n?Object(l.jsx)(o.f,{className:u.a.root,children:Object(l.jsx)(o.f.Content,{className:u.a.content,children:Object(l.jsx)(r.a,{data:d,size:"default",loading:n,className:u.a.card,bodyStyle:{height:400},extra:Object(l.jsx)(c.b,{to:"/",children:"Back to TasksList"}),actions:[Object(l.jsx)(i.a,{taskId:s},"toggle")]})})}):Object(l.jsx)(o.h,{status:"404",title:"404",subTitle:"Task was not found",extra:Object(l.jsx)(c.b,{to:"/",children:Object(l.jsxs)(o.a,{type:"primary",children:["Back to tasks list",s]})})})},bind:{isLoading:r.d.$taskDetailsLoading}})}}]);
//# sourceMappingURL=4.46285257.chunk.js.map