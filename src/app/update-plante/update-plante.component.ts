import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';


@Component({
  selector: 'app-update-plante',
  templateUrl: './update-plante.component.html',
  styles: [
  ]
})
export class UpdatePlanteComponent implements OnInit {

  currentPlante = new Plante();

  constructor(private activatedRoute: ActivatedRoute,private planteService: PlanteService,private router :Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.router.navigate(['plantes']);
  this.currentPlante = this.planteService.consulterPlante(this.activatedRoute.snapshot.params.id);
  console.log(this.currentPlante);
 
  }
  updatePlante()
  { //console.log(this.currentProduit);
  this.planteService.updatePlante(this.currentPlante);
  
  }

}
