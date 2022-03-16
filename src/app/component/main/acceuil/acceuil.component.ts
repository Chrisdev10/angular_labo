import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
 
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  // Route to Settings 

  starter(){
    this.router.navigate(['/settings']);
  }

  // Route to stat ( Not available in Deploy version )

  stat(){
    this.router.navigate(['/statistique'])
  }
  

}

