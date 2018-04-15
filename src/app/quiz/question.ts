import { QuestionModel } from './question.model';
import { QuizService } from './quiz.service';

declare var angular: angular.IAngularStatic;

export class Question {
  answer: 'yes' | 'no';
  question: QuestionModel;

  constructor(private quizService: QuizService) {}

  setAnswer() {
    this.quizService.setAnswer(this.question, this.answer);
  }
}

angular
  .module('ngaApp.quiz')
  .component('ngaQuestion', {
    controller: Question,
    bindings: {
        question: '<'
    },
    templateUrl: 'app/quiz/question.html'
  });
