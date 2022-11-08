import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-etape-quatre',
  templateUrl: './etape-quatre.component.html',
  styleUrls: ['./etape-quatre.component.css']
})
export class EtapeQuatreComponent implements OnInit {

 
  @Input() currentStep = "Quatre";
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { 
   
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  goToNextStep(){
    this.currentStep ="Cinq";
    this.newItemEvent.emit(this.currentStep);
  }
 

}
