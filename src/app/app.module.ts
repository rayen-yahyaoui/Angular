import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantesComponent } from './plantes/plantes.component';
import { AddPlantesComponent } from './add-plantes/add-plantes.component';
import { UpdatePlanteComponent } from './update-plante/update-plante.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantesComponent,
    AddPlantesComponent,
    UpdatePlanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
