import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { User } from '../_helpers/_models/user';

@Injectable()
export class UserService {
    user: FirebaseObjectObservable<any>;

    signup(email: string, password: string, fName: string, lName: string){
        this.afa.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                var using = new User(fName, lName)
                console.log("Signed Up!");
                localStorage.setItem('userId', response.uid);
                this.user = this.afd.object('/user/'+ response.uid);
                this.user.set(using).then(()=> {
                    console.log("User Created!");
                })
                this.router.navigateByUrl('posts');
            }).catch((err) =>{
                console.log(err);
            })
    }
    signin(email: string, password: string){
        this.afa.auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                localStorage.setItem('usrId', response.uid);
                console.log("Signed In!");
                this.router.navigateByUrl('posts');
            }).catch((err) => {
                console.log(err);
            })
    }
    signout(){
        localStorage.clear();
        this.afa.auth.signOut();
    }

    constructor(
        private afa: AngularFireAuth,
        private afd: AngularFireDatabase,
        private router: Router
    ) {}
}