(()=>{var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const i=flarum.core.compat.app;var a=e.n(i);flarum.core.compat["admin/components/ExtensionPage"],a().initializers.add("litalino-related-discussions",(function(){a().extensionData.for("litalino-related-discussions").registerSetting({setting:"litalino-related-discussions.relatedLimit",name:"relatedLimit",type:"number",label:a().translator.trans("flarum-ext-related-discussions.admin.relatedLimit"),help:a().translator.trans("flarum-ext-related-discussions.admin.relatedLimit-help")}),a().extensionData.for("litalino-related-discussions").registerSetting({setting:"litalino-related-discussions.showTooltip",label:a().translator.trans("flarum-ext-related-discussions.admin.showTooltip"),type:"boolean"}),a().extensionData.for("litalino-related-discussions").registerSetting({setting:"litalino-related-discussions.relatedTitle",name:"relatedTitle",type:"text",label:a().translator.trans("litalino-related-discussions.admin.relatedTitle"),help:a().translator.trans("litalino-related-discussions.admin.relatedTitle-help"),placeholder:"You title..."}),a().extensionData.for("litalino-related-discussions").registerSetting({setting:"litalino-related-discussions.DiscussionPageLayout",label:a().translator.trans("litalino-related-discussions.admin.DiscussionPageLayout"),type:"boolean"})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map