(function() {
    function ModalCtrl($scope,$uibModal) {
      $scope.openModal = function(){
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
        .controller('ModalCtrl', ['$scope','$uibModal', ModalCtrl]);

})();
