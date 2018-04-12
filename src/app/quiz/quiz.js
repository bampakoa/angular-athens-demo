(function () {

    'use strict';

    angular
        .module('ngaApp.quiz')
        .component('ngaQuiz', {
            controller: Quiz,
            controllerAs: 'vm',
            templateUrl: 'app/quiz/quiz.html'
        });

    function Quiz($filter, quizService) {
        var vm = this;
        vm.hero = null;
        vm.questions = [];
        vm.$onInit = onInit;
        vm.resetQuiz = resetQuiz;
        vm.submit = submit;

        function onInit() {
            vm.questions = quizService.getQuestions();
        }

        function resetQuiz() {
            vm.hero = undefined;
        }

        function submit() {
            var notCompleted = $filter('filter')(vm.questions, {answer: null}, true);
            if (notCompleted.length > 0) {
                alert('You sneaky...A true hero must answer all the questions!');
            } else {
                quizService.getHero().then(function(heroes) {
                    angular.forEach(vm.questions, function(question){
                        question.answer = null;
                    });
                    vm.hero = heroes[0];
                });
            }
        }
    }
})();