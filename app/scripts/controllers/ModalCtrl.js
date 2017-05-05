(function() {
    function ModalCtrl($uibModal, Room) {

      this.animationsEnabled = true;
      
      this.open = function(){
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl',
          size: 'sm',
        });
      }

       //logic for the Modal:
       //open the modal upon button click through ng-click
       //close the modal
       //upon submit trigger Room.add functionality
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal','Room', ModalCtrl]);
})();
