import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from "angular-2-local-storage";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '@core/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'TechMonks';

  constructor(private _translateService: TranslateService,
    private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {
    this._translateService.use("en-US");
    // if (this._authService.isUserLoggedIn()) {
    //   this.redirectToDashboard();
    // }
  }

  /**
   * Redirect User to Dashboard module
   */
  redirectToDashboard(): void {
    this._router.navigate(['/dashboard']);
  }
}
