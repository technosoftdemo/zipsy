import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { environment } from '@env/environment.prod';

@Component({
    selector: 'app-header',
    templateUrl: '../templates/template1/views/app-header.component.html'
})
export class HeaderComponent implements OnInit {

    displayUserActionPane = false;
    logoPath = '';
    constructor(private _authService: AuthService) {
        
    }

    ngOnInit(): void {
        this.setUserActionPanelDisplayMode();
        this.setImagePath();
    }
    setUserActionPanelDisplayMode(): void {
        this.displayUserActionPane = this._authService.isUserLoggedIn() ? true : false;
        console.log(this.displayUserActionPane);
    }

    setImagePath(): void {
        this.logoPath = environment.production ? 'img/logo.png' : 'assets/img/logo.png'
    }
}