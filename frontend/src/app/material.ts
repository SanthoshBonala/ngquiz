import {MatButtonModule,MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
   imports:[MatButtonModule,MatCheckboxModule,MatCardModule,MatToolbarModule,MatChipsModule, MatFormFieldModule],
   exports:[MatButtonModule,MatCheckboxModule,MatCardModule,MatToolbarModule,MatChipsModule, MatFormFieldModule],
})

export class MaterialModule{}