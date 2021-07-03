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
    handlerEnter(e) {
      if (e.keyCode === 13) {
        this.sendMessage();
      }
    },
    sendMessage() {
      if (!this.inputNode.value) {
        return;
      }
      messageController.add(this.inputNode.value);
      this.inputNode.value = '';
    },
  });
});
