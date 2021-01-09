import { Component, OnInit } from '@angular/core';
import { Plante } from '../model/plante.model' ;
import { PlanteService } from '../services/plante.service';

@Component({
  selector: 'app-add-plantes',
  templateUrl: './add-plantes.component.html',
  styleUrls: ['./add-plantes.component.css']
})
export class AddPlantesComponent implements OnInit {
  newPlante = new Plante();

  message !: string;

  constructor(private planteService: PlanteService) { }

  addPlante(){
   // console.log(this.newPlante);
   this.planteService.ajouterPlante(this.newPlante).subscribe(pln => {
    console.log(pln);
    });

   // this.message = "Une "+ this.newPlante.nomPlante + " ajoutée avec succés !";
    }
    

  ngOnInit(): void {
  }

}
