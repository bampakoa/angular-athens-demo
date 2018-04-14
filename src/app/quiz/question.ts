class Question {
  answer;
  question;

  constructor(private quizService) {}

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
