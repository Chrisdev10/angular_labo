import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stat } from 'src/models/gamestat.model';

@Injectable({
  providedIn: 'root'
})

export class DataStatService {
  private urlData = "http://localhost:8080/api";
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Stat[]>{
    return this.http.get<Stat[]>(this.urlData+"/all");
  }

  addRecord(stat: Stat){   
    return this.http.post<Stat>(this.urlData+"/add", JSON.stringify(stat));
  }

  deleteRecord(id: number){
    return this.http.delete<Stat>(`${this.urlData}/delete/${id}`);
  }
}
