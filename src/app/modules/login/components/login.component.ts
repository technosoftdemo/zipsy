import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { CacheService } from '@core/services/cache.service';

@Component({
    selector: 'login',
    templateUrl: '../templates/template1/views/login.component.html',
    styleUrls: ['../templates/template1/themes/less/login.component.less']

})
export class LoginComponent implements OnInit {

    error: string;
    isLoading: boolean;
    loginForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
        private _router: Router, 
        private _authService: AuthService, private _cacheService: CacheService) {
            this.buildLoginForm();
    }
    ngOnInit() {
        console.log('Loading login component');
    }

    login(loginModel, isValid) {
        console.log(loginModel,{});
        this._authService.setUserName("Admin");
        this._cacheService.set('UserName','Admin');
        this._router.navigate(['/dashboard/home']);
    }

    private buildLoginForm(){
        this.loginForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }
}