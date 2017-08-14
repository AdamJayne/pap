import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { LandingComponent } from './home/landing/landing.component';
import { CreateComponent } from './createpost/create.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './profile/update/update.component';
import { AuthGuard } from './_guards/index';
import { TestbenchComponent } from './testbench/testbench.component'

export const appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: LandingComponent},
    { path: 'posts', component: TestbenchComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'update', component: UpdateComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
