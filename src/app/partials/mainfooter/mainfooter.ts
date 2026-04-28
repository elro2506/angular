import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mainfooter',
  imports: [RouterLink],
  templateUrl: './mainfooter.html',
  styleUrl: './mainfooter.css',
})
export class Mainfooter {
  //Properties
  name : string= "Elin Ronda";
  email : string= "elro2506@student.miun.se";
  isStudent: boolean = true;
}