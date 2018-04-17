import { QuestionModel } from './question.model';
import { QuizService } from './quiz.service';
import { Character } from '../core/character.model';

declare var angular: angular.IAngularStatic;

export class Quiz implements angular.IComponentController {
  hero: Character;
  questions: QuestionModel[] = [];

  constructor(private $filter: any, private $mdToast: angular.material.IToastService, private quizService: QuizService) {}

  $onInit() {
    this.questions = this.quizService.getQuestions();
  }

  resetQuiz() {
    this.hero = undefined;
  }

  submit() {
    const notCompleted: QuestionModel[] = this.$filter('filter')(this.questions, {answer: null});
    if (notCompleted.length > 0) {
      this.$mdToast.show(
        this.$mdToast.simple()
              .textContent('A true hero must be honest..Answer all questions!')
              .action('Dismiss')
              .position('top right')
              .highlightAction(true));
    } else {
      this.quizService.getHero().then(hero => {
            angular.forEach(this.questions, question => {
                question.answer = null;
            });
            this.hero = hero;
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
