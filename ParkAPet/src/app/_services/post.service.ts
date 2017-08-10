import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import { Post } from '../_helpers/_models/post.model';

@Injectable()
export class PostService {
    post: FirebaseObjectObservable<any>;
    posts: FirebaseListObservable<any[]>;

    constructor(
        private afd: AngularFireDatabase,
    ) {
        this.post = afd.object('/post');
        this.posts = this.afd.list('/clients') as FirebaseListObservable<Post[]>
    }
    // create
    create(userId, name, breed, description){
        // this.afd.database.ref('posts/'+)
        var blar = new Post(userId, name, breed, description);
        this.post = this.afd.object('/post/' + blar.petName);
        this.post.set(blar).then(()=>{
            console.log("Worked");
        })
    }
    // getAllPosts
    // getUserPosts
    // update
    // delete
}