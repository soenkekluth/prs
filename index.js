var prs = function(resolver){
	return new Promise(resolver);
};
prs.resolve = prs.res = Promise.resolve.bind(Promise);
prs.reject = prs.rej = Promise.reject.bind(Promise);
prs.all = Promise.all.bind(Promise);
module.exports = prs;
