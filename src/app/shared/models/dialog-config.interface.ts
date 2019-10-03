import { MatDialogConfig } from '@angular/material';

export interface DialogConfig extends MatDialogConfig {
    title?: string;
    message: string;
  }