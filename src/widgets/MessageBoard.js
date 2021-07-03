define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./MessageBoard.html',
  'src/controllers/message',
  'src/widgets/MessageCard',
], function(declare, _WidgetBase, _TemplatedMixin, template, messageController, MessageCard) {
  declare('MessageBoard', [_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'message-board',
    async startup() {
      await this._renderMessages();
      this._initStyle();
      messageController.onAdd(e => {
        this._appendMessage(e.target);
      });
    },
    _initStyle() {
      this.domNode.scrollTop = this.domNode.scrollHeight;
    },
    _appendMessage(message) {
      const card = new MessageCard(message);
      card.placeAt(this.domNode);
    },
    async _renderMessages() {
      const messages = await messageController.fetch();
      messages.forEach(message => {
        this._appendMessage(message);
      });
    },
  });
});
