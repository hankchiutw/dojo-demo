define(['./message'], function(messageController) {
  const registerSuite = intern.getInterface('object').registerSuite;
  const expect = intern.getPlugin('chai').expect;

  registerSuite('controllers/message', {
    beforeEach() {
      global.localStorage.clear();
    },
    'should create': function() {
      expect(messageController).to.be.ok;
    },
    'should add and remove': async function() {
      const message = await messageController.add('some message');
      let results = await messageController.fetch();
      expect(results).to.have.lengthOf(1);

      await messageController.remove(message.id);
      results = await messageController.fetch();
      expect(results).to.have.lengthOf(0);
    },
    'should call onAdd': function() {
      let called = false;
      messageController.onAdd(() => {
        called = true;
      });

      messageController.add('some message');
      expect(called).to.equal(true);
    },
    'should call onRemove': async function() {
      let called = false;
      messageController.onRemove(() => {
        called = true;
      });

      const message = await messageController.add('some message');
      messageController.remove(message.id);
      expect(called).to.equal(true);
    },
  });
});
