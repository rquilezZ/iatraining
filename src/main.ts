import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './app/UI/main/main.component';
import { appConfig } from './app/config/app.config';

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));
