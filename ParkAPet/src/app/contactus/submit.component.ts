import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
// import {Message} from '../post.model';
@Component({
    selector: 'submit',
    templateUrl: 'submit.component.html',
    styleUrls: ['submit.component.css']
})

export class Submit {
    // model = {
    //     name: '',
    //     description: '',
    //     imgurl: ''
    // }

    // petList: Post[] = [
    //     new Post('Test Pet', 'this is just a path', 'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/A5F4E80F-72B7-458F-A40EB676E963E9A9/thul-1e3a85be-5590-5ef4-b332-bc456353498e.jpg?response-content-disposition=inline')
    // ];
    constructor(){
        // console.log(this.petList);
    }
    onSubmit() {
        
    }
}