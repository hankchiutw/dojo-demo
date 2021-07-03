define(['dstore/db/LocalStorage', 'src/entities'], function(LocalDB, { Message }) {
  const messages = [new Message(), new Message()];

  const store = new LocalDB({
    data: messages,
    idProperty: 'id',
    storeName: 'message',
  });

  return store;
});
