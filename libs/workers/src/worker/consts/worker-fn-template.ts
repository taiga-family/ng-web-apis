// throw an error using the `setTimeout` function
// because web worker doesn't emit ErrorEvent from promises
export const WORKER_BLANK_FN = `
function(fn){
    function isFunction(type){
        return type === 'function';
    }

    self.addEventListener('message', function(e) {
        var result = fn.call(null, e.data);
        if (result && [typeof result.then, typeof result.catch].every(isFunction)){
            result
                .then(postMessage)
                .catch(function(error) {
                    setTimeout(function(){throw error}, 0)
                })
        } else {
            postMessage(result);
        }
    })
}
`;
