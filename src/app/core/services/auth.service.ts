import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CacheService } from './cache.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    userName = '';
    constructor(private _localStorageService: LocalStorageService, private _cacheService: CacheService) {

    }
    isUserLoggedIn(): boolean {
        let userLoggedIn: boolean = this._cacheService.get('userLoggedIn');
        return userLoggedIn;
    }

    setUserName(userName: string): void {
        this.userName = userName;
        this._cacheService.set('userLoggedIn', true);
    }

    getAuthToken = () => "<<auth token goes here>>";

    authEnabled = () => false;

}