// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/counter/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      count: counterReducer,
    }),
  ],
});
