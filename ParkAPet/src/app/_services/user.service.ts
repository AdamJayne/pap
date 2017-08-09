import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../_helpers/_models/index';

@Injectable()
export class UserService {
    signup(email: string, password: string){
        this.afa.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                console.log("Signed Up!");
                localStorage.setItem('userId', response.uid);
            }).catch((err) =>{
                console.log(err);
            })
    }
    signin(email: string, password: string){
        this.afa.auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                console.log("Signed In!");
                this.router.navigateByUrl('home');
            }).catch((err) => {
                console.log(err);
            })
    }
    signout(){
        localStorage.clear();
    }
    constructor(
        private afa: AngularFireAuth,
        private router: Router
    ) {}
}