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
        this.posts = this.afd.list('/post');
    }
    // create
    create(userId, name, breed, description){
        // this.afd.database.ref('posts/'+)
        var blar = new Post(userId, name, breed, description);
        this.post = this.afd.object('/post/' + blar.petName);
        this.post.set(blar).then(()=>{
            console.log("Worked");
        });
    }
    // getAllPosts

    getEmAll(){
        var out = []
        this.posts.forEach(item => {
            item.forEach(post=> out.push(post))
        })
        return out

    }
    getAll() {
        return this.posts;
    }
    // getUserPosts
    getByUser(userId, callback){
        this.afd.database.ref('/post').orderByChild('usrID').equalTo(userId).on("value", function(snapshot){
            console.log(snapshot.val())
            callback(snapshot.val())
        })
    }
    // update
    // delete
}