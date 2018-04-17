import { NgModule } from '@angular/core';

import { QuizService } from './quiz.service';

declare var angular: angular.IAngularStatic;

@NgModule({
  providers: [QuizService]
})
export class QuizModule {}

angular.module('ngaApp.quiz', []);
