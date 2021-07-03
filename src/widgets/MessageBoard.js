define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./MessageBoard.html',
  'src/controllers/message',
  'src/widgets/MessageCard',
], function(declare, _WidgetBase, _TemplatedMixin, template, messageController, MessageCard) {
  async function renderMessages(domNode) {
    const messages = await messageController.fetch();
    messages.forEach(message => {
      const card = new MessageCard(message);
      card.placeAt(domNode);
    });
  }

  declare('MessageBoard', [_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'message-board',
    async startup() {
      await renderMessages(this.domNode);
    },
  });
});
