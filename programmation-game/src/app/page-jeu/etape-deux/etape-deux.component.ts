import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-etape-deux',
  templateUrl: './etape-deux.component.html',
  styleUrls: ['./etape-deux.component.css']
})
export class EtapeDeuxComponent implements OnInit {

  @Input() currentStep = "Deux";
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
 
  }

  goToNextStep(){
    this.currentStep ="Trois";
    this.newItemEvent.emit(this.currentStep);
  }

}
