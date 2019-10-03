import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: '../templates/template1/views/app-header.component.html'
})
export class HeaderComponent implements OnInit {
   
    private displayUserActionPane = false;

    constructor(private _authService: AuthService) {

    }

    ngOnInit(): void {
        this.setUserActionPanelDisplayMode();
    }
 setUserActionPanelDisplayMode():void{
    this.displayUserActionPane = this._authService.isUserLoggedIn() ? true : false;
    console.log(this.displayUserActionPane);
 }
}