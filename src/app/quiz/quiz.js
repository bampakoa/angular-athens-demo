(function () {

    'use strict';

    angular
        .module('ngaApp.quiz')
        .component('ngaQuiz', {
            controller: Quiz,
            controllerAs: 'vm',
            templateUrl: 'app/quiz/quiz.html'
        });

    function Quiz(quizService) {
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
            if (vm.questions.find(function(question) { return !question.answer }) !== undefined) {
                alert('You sneaky...A true hero must answer all the questions!');
            } else {
                quizService.getHero().then(function(hero) { vm.hero = hero });
            }
        }
    }
})();