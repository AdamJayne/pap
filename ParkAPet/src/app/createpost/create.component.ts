import {Component} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
    moduleId: module.id,
    templateUrl: 'create.component.html',
    selector: 'create-root'
})



export class CreateComponent {
    posts: FirebaseListObservable<any[]>;
    constructor(db: AngularFireDatabase){
        this.posts = db.list('/posts');
    }
}