(function() {
    function ModalCtrl($uibModal, Room) {
      this.open = function(){
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: 'sm',
        });
      }
    };
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal','Room', ModalCtrl]);

})();
