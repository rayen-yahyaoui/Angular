import { PlantesComponent } from './plantes/plantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlantesComponent } from './add-plantes/add-plantes.component';
import { UpdatePlanteComponent } from './update-plante/update-plante.component';


const routes: Routes = [
  {path: "plantes", component : PlantesComponent },
  {path: "add-plante", component : AddPlantesComponent },
  {path: "updatePlante/:id", component: UpdatePlanteComponent},
  { path: "", redirectTo: "plantes", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
