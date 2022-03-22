import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { LogsInfo } from 'src/models/logs.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  adminLogs:LogsInfo = {
    user:"root",
    password:"root"
  }
  
  
  private isConnected: boolean = false;
  private isConnected$ = new BehaviorSubject(null);
  constructor() { }

  getLogs(log: LogsInfo): boolean{
    if(log.user === this.adminLogs.user && log.password === this.adminLogs.password){
      localStorage.setItem("user", "admin");
      this.isConnected = true;
      this.isConnected$.next(null);
      return true
    }
    return false;
  }

  isConnectChecker(){
    if(localStorage.getItem("user") === "admin"){
      this.isConnected = true;
    }
    else{
      this.isConnected = false;
    }
    return this.isConnected;
  }

  disconnect(){
    localStorage.removeItem("user");
    this.isConnected = false;
    this.isConnected$.next(null);
  }

    /**
     * Getter $isConnected
     * @return {boolean }
     */
	public get $isConnected() {
		return this.isConnected$;
	}

}
