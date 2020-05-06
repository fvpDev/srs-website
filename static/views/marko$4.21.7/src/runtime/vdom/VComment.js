$_mod.def("/marko$4.21.7/src/runtime/vdom/VComment", function(require, exports, module, __filename, __dirname) { var VNode = require('/marko$4.21.7/src/runtime/vdom/VNode'/*"./VNode"*/);
var inherit = require('/raptor-util$3.2.0/inherit'/*"raptor-util/inherit"*/);

function VComment(value, ownerComponent) {
  this.___VNode(-1 /* no children */, ownerComponent);
  this.___nodeValue = value;
}

VComment.prototype = {
  ___nodeType: 8,

  ___actualize: function(doc) {
    var nodeValue = this.___nodeValue;
    return doc.createComment(nodeValue);
  },

  ___cloneNode: function() {
    return new VComment(this.___nodeValue);
  }
};

inherit(VComment, VNode);

module.exports = VComment;

});