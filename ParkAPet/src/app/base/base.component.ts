import {Component} from '@angular/core';
import { UserService } from '../_services/user.service'
@Component({
    selector: 'baseNavbar',
    templateUrl: './base.component.html'
})
export class NavbarComponent{

    authed(){
        return this.userService.isAuthed();
    }

    signout(){
        return this.userService.signout();
    }

    constructor(private userService: UserService){

    }
    
}