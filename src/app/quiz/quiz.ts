(() => {

    'use strict';

    angular
        .module('ngaApp.quiz')
        .component('ngaQuiz', {
            controller: Quiz,
            controllerAs: 'vm',
            templateUrl: 'app/quiz/quiz.html'
        });

    function Quiz($filter, $mdToast, quizService) {
        const vm = this;
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
            const notCompleted = $filter('filter')(vm.questions, {answer: null}, true);
            if (notCompleted.length > 0) {
                $mdToast.show(
                    $mdToast.simple()
                      .textContent('A true hero must be honest..Answer all questions!')
                      .action('Dismiss')
                      .position('top right')
                      .highlightAction(true));
            } else {
                quizService.getHero().then(heroes => {
                    angular.forEach(vm.questions, question => {
                        question.answer = null;
                    });
                    vm.hero = heroes[0];
                });
            }
        }
    }
})();