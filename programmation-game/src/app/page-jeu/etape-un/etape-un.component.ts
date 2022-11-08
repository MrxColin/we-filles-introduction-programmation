import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-etape-un',
  templateUrl: './etape-un.component.html',
  styleUrls: ['./etape-un.component.css']
})
export class EtapeUnComponent implements OnInit,AfterViewInit  {

  @Input() currentStep = "Debut";
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { 
   
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  goToNextStep(){
    this.currentStep ="Deux";
    this.newItemEvent.emit(this.currentStep);
  }


}
