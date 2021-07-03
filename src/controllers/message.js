define(['src/stores/message', 'src/entities', 'src/app-state'], function(
  messageStore,
  { Message },
  { username }
) {
  function fetch() {
    return messageStore.sort('createdAt').fetch();
  }

  function add(content) {
    const message = new Message();
    message.author = username;
    message.content = content;
    return messageStore.add(message);
  }

  function remove(id) {
    return messageStore.remove(id);
  }

  function onAdd(callback) {
    messageStore.on('add', callback);
  }

  function onRemove(callback) {
    messageStore.on('delete', callback);
  }

  return { fetch, add, remove, onAdd, onRemove };
});
