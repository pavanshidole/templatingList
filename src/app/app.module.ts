import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitsComponent } from './component/fruits/fruits.component';
import { MixedCaseComponent } from './component/mixedCase/mixedCase.component';
import { NumberstrComponent } from './component/numberstr/number.component';
import { FilesComponent } from './component/files/files.component';
import { ColorsComponent } from './component/colors/colors.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    MixedCaseComponent,
    NumberstrComponent,
    FilesComponent,
    ColorsComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
