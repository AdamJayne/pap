import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { User } from '../_helpers/_models/user';

@Injectable()
export class UserService {
    authState;
    uid;
    authed;
    currentuser;

    user: FirebaseObjectObservable<any>;

    signup(email: string, password: string, fName: string, lName: string){

        this.afa.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                var using = new User(fName, lName, email)
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
        this.router.navigateByUrl('landing');
        this.afa.auth.signOut();
    }

    getProfile(uid){
        this.currentuser = this.afd.object('/user/'+uid);
    }

    isAuthed(){
        //returns the authstate
        return !!this.authState;
    }
    getUid(){
        return this.uid;
    }
    
    constructor( private afa: AngularFireAuth, private afd: AngularFireDatabase, private router: Router) {
        //Subscribe to the firebase authentication state
        this.afa.authState.subscribe((authState) => {
            this.authState = authState
        })
        this.afa.auth.onAuthStateChanged((authData) => {
            this.uid = authData.uid;
         })

        }

}