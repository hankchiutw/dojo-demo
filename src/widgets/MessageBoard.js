define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./MessageBoard.html',
], function(declare, _WidgetBase, _TemplatedMixin, template) {
  declare('MessageBoard', [_WidgetBase, _TemplatedMixin], {
    templateString: template,
  });
});
