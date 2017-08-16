import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { LandingComponent } from './home/landing/landing.component';
import { CreateComponent } from './createpost/create.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './profile/update/update.component';
import { AuthGuard } from './_guards/index';
import { TestbenchComponent } from './testbench/testbench.component';
import {ContactUs} from './contactus/contact.component';
import {Submit} from './contactus/submit.component';

export const appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'posts', component: TestbenchComponent, canActivate:[AuthGuard]},
    { path: 'profile', component: ProfileComponent},
    { path: 'contact', component: ContactUs},
    { path: 'submit', component: Submit},
    { path: 'update', component: UpdateComponent, canActivate:[AuthGuard] },
    { path: 'landing', component: LandingComponent}
];
