declare var angular: angular.IAngularStatic;

export class Quiz {
  hero;
  questions = [];

  constructor(private $filter, private $mdToast, private quizService) {}

  $onInit() {
    this.questions = this.quizService.getQuestions();
  }

  resetQuiz() {
    this.hero = undefined;
  }

  submit() {
    const notCompleted = this.$filter('filter')(this.questions, {answer: null}, true);
    if (notCompleted.length > 0) {
      this.$mdToast.show(
        this.$mdToast.simple()
              .textContent('A true hero must be honest..Answer all questions!')
              .action('Dismiss')
              .position('top right')
              .highlightAction(true));
    } else {
      this.quizService.getHero().then(heroes => {
            angular.forEach(this.questions, question => {
                question.answer = null;
            });
            this.hero = heroes[0];
        });
    }
  }
}

angular
  .module('ngaApp.quiz')
  .component('ngaQuiz', {
    controller: Quiz,
    templateUrl: 'app/quiz/quiz.html'
  });
