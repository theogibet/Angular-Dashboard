
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatDialogModule,
   MatSidenavModule,
   MatTabsModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule
} from '@angular/material';

@NgModule({
   imports: [
      MatCardModule,
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatTabsModule,
      MatIconModule,
      MatSidenavModule,
      MatDialogModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule
   ],
   exports: [
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatTabsModule,
      MatIconModule,
      MatDialogModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }
