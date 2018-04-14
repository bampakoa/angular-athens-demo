(function () {

    'use strict';

    angular
        .module('ngaApp.quiz')
        .component('ngaQuestion', {
            controller: Question,
            controllerAs: 'vm',
            bindings: {
                question: '<'
            },
            templateUrl: 'app/quiz/question.html'
        });

    function Question(quizService) {
        const vm = this;
        vm.answer = null;
        vm.setAnswer = setAnswer;

        function setAnswer() {
            quizService.setAnswer(vm.question, vm.answer);
        }
    }
})();
