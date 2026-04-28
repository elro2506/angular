import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {

  //Properties
  meter: number = 0;
  feet: number = 0;
  result1: number = 0;
  result2: number = 0;
  result3: number = 0;
  result4: number = 0;
  result5: number = 0;
  result6: number = 0;
  celsius: number = 0;
  fahrenheit: number = 0;
  miles: number = 0;
  km: number = 0;

  //Metoder
  toMeter() : void {
this.result1 = this.feet / 3.28;
  }

  toFeet() : void {
this.result2 = this.meter * 3.28;
  }

  toCelsius() : void {
this.result4 = parseFloat(((this.fahrenheit - 32) / 1.8).toFixed(2));
  }

  toFahrenheit() : void {
this.result3 = (this.celsius * 1.8) + 32;
  }

  toKM() : void {
this.result5 = this.miles * 1.6;
  }

  toMiles() : void {
this.result6 = this.km / 1.6;
  }
}


