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
  apiURL: string = 'http://localhost:8087/plantes/api/';
  plantes !: Plante[];
  
 


  constructor(private http : HttpClient) { 
    /*this.plantes = [
      {idPlante : 1, nomPlante : "Tulip", couleurPlante:"Move",prix :70.600, dateVente
       : new Date("01/12/2019")},
      {idPlante : 2, nomPlante : "Lacrun", couleurPlante:"Red",prix :32.5, dateVente
       : new Date("01/01/2012")},
      {idPlante : 3, nomPlante : "Rose", couleurPlante:"Pink",prix :12.5, dateVente
       : new Date("13/01/2021")}
       ];*/
  }

  listePlantes(): Observable<Plante[]>{
    return this.http.get<Plante[]>(this.apiURL);
    }

    ajouterPlante( p: Plante):Observable<Plante>{
      return this.http.post<Plante>(this.apiURL, p, httpOptions);
      }
      


      supprimerPlante(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
  
        consulterPlante(id: number): Observable<Plante> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Plante>(url);
          }
          
  
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



      updatePlante(p :Plante) : Observable<Plante>
      {
      return this.http.put<Plante>(this.apiURL, p, httpOptions);
      }

}