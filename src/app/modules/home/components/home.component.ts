import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-home',
    templateUrl: '../templates/template1/views/home.component.html'
})
export class HomeComponent implements OnInit {
    userName: string;
    constructor(private localStorageService: LocalStorageService) {

    }
    ngOnInit(): void {
    }
}