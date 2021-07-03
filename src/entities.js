define({
  User: class User {},
  Message: class Message {
    id = Date.now().toString();
    content = '';
    author = '';
    createdAt = new Date();
  },
});
