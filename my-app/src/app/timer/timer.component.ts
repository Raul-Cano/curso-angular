import { Component, effect, signal } from '@angular/core';
import { time } from 'console';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = signal(new Date())

  constructor(){
    effect(() => {
      time()
    })
  }

  actualizarTiempo(){
    setInterval(() => time(),1000)
  }
}
