import { Component, OnInit } from '@angular/core';
import { Menu } from '../Model/Menus';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  menuLogin: string = "Sign In";
  loginImg: string = "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  home: string = "Home";
  services: string;
  reports: string = "Reports";
  servicesDropdown: string[] = ["e-Challan", "Check Status", "Make payment", "Downloads", "Bookings"];
  google: string = "https://www.google.com";
  menus: Menu[] = [];
  searchData: string = "xyz";
  object: any = {
    a: 12,
    b: 13,
    c:14
  }

  constructor() { 
    this.services = "services";
   }

  getMenus() {
    return this.menus;
  }
  onLoginClicked(event: Event) {
    alert("Login is not allowed!!!");
  }
  search() {
    console.log(this.searchData);
  }

  ngOnInit(): void {
  }

}
