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
  name : string= "Elin Ronda";
  email : string= "elro2506@student.miun.se";
  isStudent: boolean = true;
}

