var e=require("lodash.flowright"),r=function(e){return new Promise(e)},o=Promise.resolve.bind(Promise),i=Promise.reject.bind(Promise),s=Promise.all.bind(Promise);r.all=s,r.resolve=o,r.res=o,r.reject=i,r.rej=i,r.compose=function(r){return e(Promise.resolve.bind(Promise),r)},module.exports=r;
//# sourceMappingURL=prs.js.map
