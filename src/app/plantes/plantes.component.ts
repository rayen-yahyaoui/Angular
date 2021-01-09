import { Component, OnInit } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-plantes',
  templateUrl: './plantes.component.html'
})
export class PlantesComponent implements OnInit {
  plantes! : Plante[];
  constructor(private planteService: PlanteService ,
    private router :Router) {
    //this.voitures = voitureService.listeVoitures();
    }

  ngOnInit(): void {
    this.planteService.listePlantes().subscribe(p => {
      console.log(p);
      this.plantes  = p;
      });
      
  }


  supprimerPlante(p: Plante)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.planteService.supprimerPlante(p.idPlante).subscribe(() => {
  console.log("plante supprimé");
  this.SuprimerPlanteDuTableau(p);

  });
  }

  SuprimerPlanteDuTableau(p : Plante) {
    this.plantes.forEach((cur, index) => {
    if(p.idPlante=== cur.idPlante) {
    this.plantes.splice(index, 1);
    }
    });
    }

}