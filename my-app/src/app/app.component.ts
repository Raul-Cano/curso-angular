import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent, 
    TimerComponent   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  name = undefined;
  data = [1,2,3,4,5,6]
  count = signal(0);

  handlerClick(ev:Event){
    ev.stopPropagation();
    this.data.push(this.data.length+1)
  }

  @HostListener('click',["$event"])
  actualizarValor(ev:Event){
    this.count.update(value=>value+1)
  }


}

