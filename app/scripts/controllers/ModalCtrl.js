(function() {
    function ModalCtrl($uibModal, Room) {
    //  var room = {};
      //this.animationsEnabled = true;

      this.open = function(){
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: 'sm',
        });
      }
      //this.createRoom = function(room){
      //  Room.add()
      //}

    };



       //logic for the Modal:
       //open the modal upon button click through ng-click
       //close the modal
       //upon submit trigger Room.add functionality


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal','Room', ModalCtrl]);

})();
