define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./MessageBoard.html',
  'dojo/on',
  'dijit/registry',
  'src/controllers/message',
  'src/widgets/MessageCard',
  'src/widgets/RemoveAnchor',
  'src/app-state',
], function(
  declare,
  _WidgetBase,
  _TemplatedMixin,
  template,
  on,
  registry,
  messageController,
  MessageCard,
  RemoveAnchor,
  { username }
) {
  declare('MessageBoard', [_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'message-board',

    postCreate() {
      // use event delegation avoid massive listeners
      on(this.domNode, '.remove-anchor:click', e => {
        messageController.remove(e.target.getAttribute('dataId'));
      });
    },

    async startup() {
      await this._renderMessages();
      this._watchMessages();
    },

    /**
     * Handler message changes.
     */
    _watchMessages() {
      messageController.onAdd(e => {
        this._appendMessage(e.target);
      });

      messageController.onRemove(e => {
        registry.byId(e.id).destroy();
      });
    },

    _appendMessage(message) {
      const card = new MessageCard(message);
      card.placeAt(this.domNode);
      if (message.author === username) {
        new RemoveAnchor({ dataId: message.id }).placeAt(card.domNode);
        card.domNode.classList.add('align-right');
      }
      card.domNode.scrollIntoView();
    },

    async _renderMessages() {
      const messages = await messageController.fetch();
      messages.forEach(message => {
        this._appendMessage(message);
      });
    },
  });
});
