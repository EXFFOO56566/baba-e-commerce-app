import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  @Input('type') type;      // For Product Type
  public timeInSeconds: number;           // For Time In Seconds
  timer: any;                             // For Timer Object

  constructor(public config: ConfigService) {
  }

  ngOnInit() {
    // You Can Initialzed it your server time or your sale time (From Home Component using Input Directive)
    this.timeInSeconds = 10000;  // It's value in seconds like (100 = 00h:01m:40s)
    // For Initialized Timer Object
    this.timer = {
      secondsRemaining: this.timeInSeconds
    };
    // For Display Time In Digital Clock
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    // For Start TImer
    this.counterTimer();
  }

  // For Start Timer Function
  counterTimer() {
    setTimeout(() => {
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.counterTimer();
      }
    }, 1000);
  }

  // Display Time In Digital Clock Function
  getSecondsAsDigitalClock(second: number) {
    const secNum = parseInt(second.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return hoursString + 'h:' + minutesString + 'm:' + secondsString + 's';
  }

}
