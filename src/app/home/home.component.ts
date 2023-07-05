import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout() : void{
    //clear or remove set item from local storage
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['']);
  }

}
