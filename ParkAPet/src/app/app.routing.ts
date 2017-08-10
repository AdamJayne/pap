import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { LandingComponent } from './home/landing/landing.component';
import { CreateComponent } from './createpost/create.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guards/index';
import { TestbenchComponent } from './testbench/testbench.component'

export const appRoutes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: LandingComponent},
    { path: 'new', component: CreateComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'testbench', component: TestbenchComponent},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
