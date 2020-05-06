$_mod.def("/marko$4.21.7/src/runtime/components/GlobalComponentsContext", function(require, exports, module, __filename, __dirname) { var nextComponentIdProvider = require('/marko$4.21.7/src/runtime/components/util-browser'/*"./util"*/).___nextComponentIdProvider;

function GlobalComponentsContext(out) {
  this.___renderedComponentsById = {};
  this.___rerenderComponent = undefined;
  this.___nextComponentId = nextComponentIdProvider(out);
}

module.exports = GlobalComponentsContext;

});