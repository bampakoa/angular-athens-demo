import { NgModule } from '@angular/core';

import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz.component';
import { QuizService } from './quiz.service';
import { AppMaterialModule } from '../app-material.module';
import { SharedModule } from '../shared/shared.module';

declare var angular: angular.IAngularStatic;

@NgModule({
  declarations: [
    QuestionComponent,
    QuizComponent
  ],
  imports: [
    AppMaterialModule,
    SharedModule
  ],
  providers: [QuizService],
  entryComponents: [QuizComponent]
})
export class QuizModule {}

angular.module('ngaApp.quiz', []);
