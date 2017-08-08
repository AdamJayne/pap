import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'login-root',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.html']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private afa: AngularFireAuth,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.afa.auth.signInWithEmailAndPassword(this.model.email, this.model.password)
            .then(() => {
                console.log("Signed In!");
            }).catch((err) =>{
                console.log(err);
            })
    }
}