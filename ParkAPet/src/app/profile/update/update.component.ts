import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database'
@Component({
  moduleId: module.id,
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  myUser: FirebaseObjectObservable<any>;
  thisUser: any = [];
  model;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private usrSvc: UserService,
      private afd: AngularFireDatabase
  ) {

   }

  ngOnInit() {
      // // reset login status
      // this.authenticationService.logout();

      // // get return url from route parameters or default to '/'
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      this.usrSvc.getProfile(window.localStorage.getItem('usrId'), (data)=>{
          var keys = Object.keys(data)
          this.thisUser = (data[keys[0]])
      });
  }

  updateProfile(){
    var uid = window.localStorage.getItem('usrId');
    console.log(uid)
    const thisSaved = this
    if(this.thisUser.firstName){
      console.log('tested here')
      console.log(thisSaved);
      this.afd.object('/user/'+ uid).update({'firstName': thisSaved.model.firstName});
    }
  }
}