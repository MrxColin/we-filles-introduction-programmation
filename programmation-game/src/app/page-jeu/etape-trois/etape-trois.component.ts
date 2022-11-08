import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-etape-trois',
  templateUrl: './etape-trois.component.html',
  styleUrls: ['./etape-trois.component.css']
})
export class EtapeTroisComponent implements OnInit {
  mdp = false;
  @Input() currentStep = "Trois";
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { 
   
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  goToNextStep(){
    this.currentStep ="Quatre";
    this.newItemEvent.emit(this.currentStep);
  }

  afficherMDP(){
    this.mdp = true;
  }
 
}
