import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { CandidatosDetail } from './candidatos-detail';


@Injectable({
 providedIn: 'root'
})
export class Candidatoservice {

  private apiUrl: string = environments.baseUrl + 'books';

  constructor(private http: HttpClient) { }


  getPapas(): Observable<CandidatosDetail[]> {
    return this.http.get<CandidatosDetail[]>(this.apiUrl);
  }

   getById(id: number): Observable<CandidatosDetail> {
    return this.http.get<CandidatosDetail>(`${this.baseUrl}/${id}`);
  }


}
