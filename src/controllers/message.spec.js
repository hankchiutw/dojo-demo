define(['./message'], function(messageController) {
  const registerSuite = intern.getInterface('object').registerSuite;
  const expect = intern.getPlugin('chai').expect;

  registerSuite('controllers/message', {
    'should create': function() {
      expect(messageController).to.be.ok;
    },
  });
});
