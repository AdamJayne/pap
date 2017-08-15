import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  upDat: any = [];
  
  constructor( private pstSvc: PostService ) { }

  ngOnInit() {
  }

  update(postID){
    this.pstSvc.updatePost(postID, this.upDat)
  }
}
