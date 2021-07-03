define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./RemoveAnchor.html',
], function(declare, _WidgetBase, _TemplatedMixin, template) {
  return declare('RemoveAnchor', [_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'remove-anchor',
    dataId: null,
    _setDataIdAttr: { node: 'domNode', type: 'attribute' },
  });
});
