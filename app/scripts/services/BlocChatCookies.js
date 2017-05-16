(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
     // launch modal to prompt username
     $uibModal.open({
       //modal configuration object properties
       templateUrl: '/templates/usernameModal.html',
       controller: 'UsernameModalInstanceCtrl',
       controllerAs: '$ctrl',
       backdrop: 'static',
       size: 'sm',
     });

    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
