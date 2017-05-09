(function() {
  function ModalInstanceCtrl ($uibModalInstance, Room) {
    var room = {};
    this.submit = function(room) {
      room = room;
      Room.add();
      $uibModalInstance.dismiss('cancel');
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  };

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
