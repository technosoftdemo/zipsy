import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({ providedIn: 'root' })
export class AuthService {
    userName = '';
    constructor(private _localStorageService: LocalStorageService) {

    }
    isUserLoggedIn(): boolean {
        return this.userName ? true : false;
    }

    setUserName(userName: string): void {
        this.userName = userName;
    }

    getAuthToken = () => "<<auth token goes here>>";

    authEnabled = () => false;

}