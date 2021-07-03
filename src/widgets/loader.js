define([
  'dojo/parser',
  'dojo/ready',
  './MessageBoard',
  './MessageCard',
  './MessageInput',
  './RemoveAnchor',
], function(parser, ready) {
  ready(function() {
    parser.parse();
  });
});
