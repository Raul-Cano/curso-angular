import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  @Input() day!:number

}