import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FundComponent } from './components/fund/fund.component';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FundComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  month:any = 8;
  amout:any = 2000000;
  installMent:any

  ngOnInit(): void {
    this.installMent = (0.06 * this.amout) / this.month
  }

  loanValue(value:any){
    this.amout = value;
    this.installMent = (0.06 * this.amout) / this.month
  }

  monthValue(value:any){
    this.month = value;
    this.installMent = (0.06 * this.amout) / this.month
  }

  saveAmount(){
    console.log('Montly Installment', this.installMent);
  }
}
