import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';


@Component({
    moduleId: module.id,
    selector: 'profile-root',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit {
    thisUser: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private usrSvc: UserService    
    ) { }

    ngOnInit() {
        // // reset login status
        // this.authenticationService.logout();

        // // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.usrSvc.getProfile(window.localStorage.getItem('usrId'), (data)=>{
            var keys = Object.keys(data);
            console.log(keys);
            this.thisUser = (data[keys[0]]);
            console.log(data[keys[0]])
        });
    }
}
