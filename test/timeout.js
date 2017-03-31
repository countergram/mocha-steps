require('../lib/step');

describe('timeout', function() {

  describe('it()', function() {
    this.timeout(1);

    it('A', function(done) {
      setTimeout(done, 50);
    });

    it('B', function(done) {
      done();
    });

    it('C', function(done) {
      done();
    });

  });

  describe('step() async', function() {
    this.timeout(1);

    step('A', function(done) {
      setTimeout(done, 50);
    });

    step('B', function(done) {
      done();
    });

    step('C', function(done) {
      done();
    });

  });

  describe('step() async then sync', function() {
    this.timeout(1);

    step('A', function(done) {
      setTimeout(done, 50);
    });

    step('B', function() {
      
    });

    step('C', function() {
      
    });

  });

});
