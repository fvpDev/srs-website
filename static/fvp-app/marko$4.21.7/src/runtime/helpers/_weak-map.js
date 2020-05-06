$_mod.def("/marko$4.21.7/src/runtime/helpers/_weak-map", function(require, exports, module, __filename, __dirname) { var counter = 0;
var seed = "M" + Math.random().toFixed(5);
module.exports =
  global.WeakMap ||
  function WeakMap() {
    var id = seed + counter++;
    return {
      get: function(ref) {
        return ref[id];
      },
      set: function(ref, value) {
        ref[id] = value;
      }
    };
  };

});