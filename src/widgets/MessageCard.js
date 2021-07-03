define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./MessageCard.html',
], function(declare, _WidgetBase, _TemplatedMixin, template) {
  return declare('MessageCard', [_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'message-card',
    author: '',
    content: '',
  });
});
