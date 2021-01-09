import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';

@Component({
  selector: 'app-plantes',
  templateUrl:'./plantes.component.html',
  styleUrls: ['./plantes.component.css']
})
export class PlantesComponent implements OnInit {

  plantes !: Plante[] ;

  constructor(private planteService: PlanteService, private router: Router) {

  // this.plantes = planteService.listePlantes();
  }

  ngOnInit(): void {
    this.planteService.listePlantes().subscribe(plant => {
      console.log(plant);
      this.plantes = plant;
      });
      
  }


/*supprimerPlante(p: Plante)
{
let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.planteService.supprimerPlante(p.idPlante).subscribe(() => {
    console.log("plante supprimé");
    });
        this.router.navigate(['produits']).then(() => {
        window.location.reload();
        });
}*/

}