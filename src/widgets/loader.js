define(['dojo/parser', 'dojo/ready', './MessageBoard', './MessageCard', './MessageInput'], function(
  parser,
  ready
) {
  ready(function() {
    parser.parse();
  });
});
