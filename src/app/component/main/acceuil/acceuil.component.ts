import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { createPopper } from '@popperjs/core';
import { ConnectionService } from 'src/app/service/connection.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  user!:string;
  password!:string;
  isConnected:boolean = false;
  constructor(
    private router:Router,private modalService: NgbModal, private connect : ConnectionService
  ) { }

  ngOnInit(): void {
    this.connect.$isConnected.subscribe(()=>{
       this.isConnected = this.connect.isConnectChecker();
    })
  }
  
  // Route to Settings 

  starter(){
    this.router.navigate(['/settings']);
  }

  // Route to stat ( Not available in Deploy version )

  stat(){
    this.router.navigate(['/statistique'])
  }
  
  open(content:any){
    this.modalService.open(content);
  }
  sendLogs(){
    if(this.isConnected){
      this.connect.disconnect();
    }else{
      if(this.connect.getLogs({user:this.user,password:this.password})){
      this.connect.isConnectChecker();
      }
    }
    
  }

}

