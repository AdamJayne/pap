import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../_services/user.service';

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
}