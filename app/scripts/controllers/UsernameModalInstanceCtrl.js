(function(){
  function UsernameModalInstanceCtrl ($uibModalInstance, $cookies, $scope) {
    $scope.username = '';
    $scope.submit = function(){
      $cookies.put('blocChatCurrentUser', $scope.username);
      $uibModalInstance.close();
    };
  };

  angular
      .module('blocChat')
      .controller ('UsernameModalInstanceCtrl', ['$uibModalInstance', '$cookies', '$scope', UsernameModalInstanceCtrl]);
})();
