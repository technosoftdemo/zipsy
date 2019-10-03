import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class GlobalExceptionHandler extends ErrorHandler {
    constructor(private _loggerService: LoggerService) {
        //Angular provides a hook for centralized exception handling.
        //constructor ErrorHandler(): ErrorHandler
        super();
    }

    handleError(error: any): void {
        this._loggerService.logError(error);
    }

}