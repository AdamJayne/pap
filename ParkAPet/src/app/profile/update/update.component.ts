import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

  constructor() { }

  ngOnInit() {
  

}
}