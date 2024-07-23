import {bootstrapApplication} from '@angular/platform-browser';

import {App} from './app/app.component';
import {config} from './app/app.config';

bootstrapApplication(App, config).catch((err: unknown) => console.error(err));
