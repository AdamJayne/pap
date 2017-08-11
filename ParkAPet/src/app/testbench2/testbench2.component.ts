import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-testbench2',
  templateUrl: './testbench2.component.html',
  styleUrls: ['./testbench2.component.css']
})
export class Testbench2Component implements OnInit {
  post: any = [];

  constructor(
    private pstSvc: PostService
  ) { }


  ngOnInit() {
    
  }

  newPost(){
    var usrID = window.localStorage.getItem('userId');
    this.pstSvc.create(usrID, this.post.petName, this.post.petBreed, this.post.description);
  }
}