import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../post.model';
@Component({
    selector: 'app-petPost',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.css']
})

export class PetPost {
    petList: Post[] = [
        new Post('Test Pet', 'this is just a path', 'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/A5F4E80F-72B7-458F-A40EB676E963E9A9/thul-1e3a85be-5590-5ef4-b332-bc456353498e.jpg?response-content-disposition=inline'),
        new Post('Big Pet', 'listen to me here now', 'https://ckcusa.com/images/breeds/COLLIE.jpg')
    ];
    constructor(){
        console.log(this.petList);
    }
    
}