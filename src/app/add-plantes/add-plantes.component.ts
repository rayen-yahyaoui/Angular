import { Component, OnInit } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-add-plantes',
  templateUrl: './add-plantes.component.html'
})
export class AddPlantesComponent implements OnInit {
  newPlante = new Plante();

  message ! :string;


  constructor(private planteService: PlanteService,
    private router :Router) { }

  ngOnInit(): void {
  }


  addPlante(){
    this.planteService.ajouterPlante(this.newPlante).subscribe(p => {
    console.log(p);
    });
    this.router.navigate(['plantes']).then(() => {
      window.location.reload();
      });

}}

