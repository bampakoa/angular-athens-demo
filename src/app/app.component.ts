import { environment } from '../environments/environment';

export class AppComponent implements angular.IComponentController {
  title = '';
  version = '';

  $onInit() {
    this.title = environment.settings.appTitle;
    this.version = environment.settings.version;
  }
}
