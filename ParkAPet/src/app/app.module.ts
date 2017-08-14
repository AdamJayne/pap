import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// used to create fake backend
import { BaseRequestOptions } from '@angular/http';
// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent }  from './app.component';
import { appRoutes } from './app.routing';
import { NavbarComponent } from './base/base.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { LandingComponent } from './home/landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './profile/update/update.component';
import { FooterComponent } from './footer/footer.component';
import { TestbenchComponent } from './testbench/testbench.component';
import { Testbench2Component } from './testbench2/testbench2.component';
import { Testbench3Component } from './testbench3/testbench3.component';
import { PostService } from './_services/post.service';
import { FileUploader } from 'ng2-file-upload';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UpdatePostComponent } from './update-post/update-post.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        LandingComponent,
        ProfileComponent,
        UpdateComponent,
        FooterComponent,
        TestbenchComponent,
        Testbench2Component,
        Testbench3Component,
        UserPostsComponent,
        UpdatePostComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        PostService,
        AngularFireAuth,
        AngularFireDatabase,

        // providers used to create fake backend
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }