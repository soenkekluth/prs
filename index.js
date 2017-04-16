const prs = resolver => new Promise(resolver);
prs.resolve = prs.res = Promise.resolve.bind(Promise);
prs.all = Promise.all.bind(Promise);
module.exports = prs;
