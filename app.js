angular.module('aiNexusApp', [])
.controller('ContactController', ['$scope', function($scope) {
    
   
    $scope.contact = {
        name: '',
        email: '',
        message: ''
    };
    

    $scope.sendEmail = function() {
        emailjs.send('service_qg42z7v', 'template_fez1pkl', {
            from_name: $scope.contact.name,
            from_email: $scope.contact.email,
            message: $scope.contact.message
        }).then(function(response) {
            alert('Message sent successfully!');
            $scope.contact.name = '';
            $scope.contact.email = '';
            $scope.contact.message = '';
            $scope.$apply();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        });
    };
}]);
