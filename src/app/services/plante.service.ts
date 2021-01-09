import { Injectable } from '@angular/core';
import { Plante } from '../model/plante.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class PlanteService {

  apiURL: string = 'http://localhost:8087/plantes/api';

  plantes ! : Plante[]; 

  plante !: Plante ;

   


  constructor(private http : HttpClient) {

 /* this.plantes = [
      {idPlante : 1, nomPlante : "Tulip",couleurPlante : 'Violet' ,prixPlante : 21.200, dateVente : new Date("01/14/2011")},
      {idPlante : 2, nomPlante : "Narcis",couleurPlante : 'Blanche' ,prixPlante : 32.500, dateVente : new Date("12/12/2018")},
      {idPlante : 3, nomPlante : "coquelicot",couleurPlante : 'blue' ,prixPlante : 12.23, dateVente : new Date("02/14/2013")}

    ];*/
  }

  listePlantes():Observable <Plante[]> {
    return  this.http.get<Plante[]>(this.apiURL); ;
  }

  ajouterPlante (pl: Plante) :Observable<Plante>{
    return this.http.post<Plante>(this.apiURL, pl, httpOptions);

  }
  supprimerPlante( pl: Plante){

    //supprimer une plante du tableau plantes
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

    consulterPlante(id:number) : Plante{
   // this.plante = this.plantes.find(p => p.idPlante == id);
    return this.plante ;}
    
    

    trierPlantes(){
      this.plantes = this.plantes.sort((n1,n2) => {
      if (n1.idPlante > n2.idPlante) {
      return 1;
      }
      if (n1.idPlante < n2.idPlante) {
      return -1;
      }
      return 0;
      });
      }
      

    updatePlante(p:Plante)
    {
      // console.log(p);
      this.supprimerPlante(p);
      this.ajouterPlante(p);
      this.trierPlantes();
    }

}
