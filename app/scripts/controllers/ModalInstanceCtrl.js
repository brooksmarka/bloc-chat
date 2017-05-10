(function() {
  function ModalInstanceCtrl ($uibModalInstance, Room) {
    this.room = '';
    this.submit = function() {
      Room.add(this.room);
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
