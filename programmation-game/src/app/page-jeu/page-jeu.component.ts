import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.css']
})
export class PageJeuComponent implements OnInit {

  vousAvezRate: boolean = false;

  constructor(private router: Router) { }
  user = new FormControl('');
  mdp = new FormControl('');
  currentStep = "Debut";

  ngOnInit(): void {
  }
  desamorcer(){
    if (this.mdp.value === "password123" && this.user.value ==="jesuistresmechant"){
      this.router.navigateByUrl('/bomb');
    } else {
      this.vousAvezRate = true;
    }
  }
}
