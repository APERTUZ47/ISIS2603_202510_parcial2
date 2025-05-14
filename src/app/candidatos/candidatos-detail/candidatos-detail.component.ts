import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  @Input() candidato: any;
  http: any;

  constructor() {}
  ngOnInit() {}

     getById(id: number): Observable<CandidatosDetail> {
      return this.http.get<CandidatosDetail>(`${this.baseUrl}/${id}`);
    }
}
