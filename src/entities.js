define({
  User: class User {},
  Message: class Message {
    id = Date.now().toString();
    content = '';
    author = '';
    createdAt = new Date();

    timeLabel = new Date().toTimeString().substr(0, 8);
  },
});
