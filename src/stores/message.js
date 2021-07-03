define(['dstore/db/LocalStorage'], function(LocalDB) {
  const store = new LocalDB({
    idProperty: 'id',
    storeName: 'message',
  });

  return store;
});
