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
      this.pstSvc.getByUser(window.localStorage.getItem('usrId'), function(data){
      console.log(data);
      this.items.push(data);
      console.log(this.items);
      return data;
    });
  }

}