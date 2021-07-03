define({
  User: class User {},
  Message: class Message {
    id = Date.now();
    content = '';
    createdAt = Date.now();
  },
});
