import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


export class PostService {
    constructor(
        private afd: AngularFireDatabase

    ) {}
    // create
    create(userId, name, description, date){
        // this.afd.database.ref('posts/'+)
    }
    // getAllPosts
    // getUserPosts
    // update
    // delete
}