import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-testbench3',
  templateUrl: './testbench3.component.html',
  styleUrls: ['./testbench3.component.css']
})
export class Testbench3Component implements OnInit {
  // items: FirebaseListObservable<any[]>;
  items;//: any = [];
  constructor(public pstSvc: PostService,
              public afd: AngularFireDatabase) {
                // this.items = afd.list('/post');
                // console.log(this.items)
                
  }

  ngOnInit() {
    this.items = [];
    this.items = this.pstSvc.getAll();
  }
}
