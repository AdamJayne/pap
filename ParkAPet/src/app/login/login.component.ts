import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../_services/user.service';
import { AlertService, AuthenticationService } from '../_services/index';
import * as firebase from 'firebase/app';

@Component({
    moduleId: module.id,
    selector: 'login-root',
    templateUrl: 'login.component.html',
    styleUrls: ['signin.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private afa: AngularFireAuth,
        private route: ActivatedRoute,
        private router: Router,
        private usrSvc: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.usrSvc.signin(this.model.email, this.model.password);
    }


      sociallogin() {
        this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
}