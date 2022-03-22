import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Stat } from 'src/models/gamestat.model';

@Injectable({
  providedIn: 'root'
})

export class DataStatService {
  private urlData = "https://my-json-server.typicode.com/Chrisdev10/db/api";
  // private urlData = "http://localhost:3000/api";
  private dataSender$ = new BehaviorSubject(null);
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Stat[]>{
    return this.http.get<Stat[]>(this.urlData);
  }

  addRecord(stat: Stat){   
    console.log(stat);
    
    return this.http.post<Stat>(this.urlData, stat);
  }

  deleteRecord(id: number){
    return this.http.delete<Stat>(`${this.urlData}/${id}`).pipe(tap(()=>this.dataSender$.next(null)));
  }

  public get dataSender(){
    return this.dataSender$;
  }
}
