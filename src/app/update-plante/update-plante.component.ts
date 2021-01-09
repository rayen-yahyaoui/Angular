import { Component, OnInit } from '@angular/core';

import { PlanteService } from '../services/plante.service';
import { Plante } from '../model/plante.model';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
selector: 'app-update-plante',
templateUrl: './update-plante.component.html',
styles: []
})
export class UpdatePlanteComponent implements OnInit {
currentPlante = new Plante();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private planteService: PlanteService) { }
  
  ngOnInit() {
    this.planteService.consulterPlante(this.activatedRoute.snapshot.params.id).
     subscribe( p =>{ this.currentPlante = p; } ) ;
    }


    updatePlante() {
      this.planteService.updatePlante(this.currentPlante).subscribe(p=> {
      this.router.navigate(['plantes']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }

}