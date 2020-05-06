$_mod.def("/marko$4.21.7/src/runtime/nextTick", function(require, exports, module, __filename, __dirname) { var promise;
module.exports =
  typeof queueMicrotask === "function"
    ? queueMicrotask
    : typeof Promise === "function" && (promise = Promise.resolve())
    ? function(cb) {
        promise.then(cb).catch(rethrow);
      }
    : setTimeout;

function rethrow(err) {
  setTimeout(function() {
    throw err;
  });
}

});