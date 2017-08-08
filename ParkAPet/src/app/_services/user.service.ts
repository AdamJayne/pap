import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../_helpers/_models/index';

@Injectable()
export class UserService {
    signup(email: string, password: string){
        this.afa.auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Signed Up!");
            }).catch((err) =>{
                console.log(err);
            })
    }
    constructor(
        private afa: AngularFireAuth
    ) {}
}