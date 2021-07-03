define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./MessageInput.html',
  'src/controllers/message',
], function(declare, _WidgetBase, _TemplatedMixin, template, messageController) {
  return declare('MessageInput', [_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'message-input',
    sendMessage(e) {
      messageController.add(this.inputNode.value);
      this.inputNode.value = '';
    },
  });
});
