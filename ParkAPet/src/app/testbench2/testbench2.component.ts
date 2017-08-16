import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../_services/post.service';
import { ImageService } from '../_services/imgupload.service';

@Component({
  selector: 'app-testbench2',
  templateUrl: './testbench2.component.html',
  styleUrls: ['./testbench2.component.css']
})
export class Testbench2Component implements OnInit {
  post: any = [];
  @ViewChild('imgInput') el: ElementRef;
  constructor(
    private pstSvc: PostService,
    private is: ImageService
  ) {}
  ngOnInit() {}
  newPost(){
    var usrID = window.localStorage.getItem('usrId');
    if(this.el.nativeElement.files[0]){
      this.is.uploadPostImg(this.el.nativeElement.files[0], usrID + this.post.petName, (snap, err)=>{
        if(err){
          return console.log(err);
        }
        this.pstSvc.create(usrID, this.post.petName, this.post.petBreed, this.post.description, snap.downloadURL);
      })
    }
  }
}
