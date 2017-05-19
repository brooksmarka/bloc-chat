(function() {
  function MessageCtrl(Message) {
    this.message = '';
    this.submit = function() {
      Message.send(this.message);
    };
  };

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
