import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  items = [];

  constructor( public pstSvc: PostService) { }

  ngOnInit() {
      this.items = [];
      var usrpost = this;
      this.pstSvc.getByUser(window.localStorage.getItem('usrId'), function(data){
      var keys = Object.keys(data);
      usrpost.items = [];
      keys.forEach(function(key){
        usrpost.items.push(data[key]);
      })
      console.log(usrpost.items);
    });
  }
  delete(key){
    this.pstSvc.deletePost(key);
  }
  goUpdate(key){
    
  }
}