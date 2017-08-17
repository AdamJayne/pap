import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


import { FirebaseApp, AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class ImageService {
    private PostImages: firebase.storage.Reference;
    private Storage: firebase.storage.Storage;

    constructor(private db: FirebaseApp, private test:AngularFireModule){
        this.Storage = db.storage();
        this.PostImages = db.storage().ref('/PostImage/');
    }

    uploadPostImg(img: any,id:string, cb?:(snapshot:firebase.storage.UploadTaskSnapshot,err?:Error)=>null|void){
        this.Storage.ref('/PostImage/'+ id).put(img).then((snap)=>{
            if(cb){
                cb(snap,null)
            }
        }).catch(err=>{
            if(cb){
                cb(null,err);
            }
        });
    }
}