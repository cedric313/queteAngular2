import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes/Hero';
import {SignUp} from './SignUp';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
nom = 'Bob';
imageSrc = 'https://statics.lesinrocks.com/content/thumbs/uploads/2013/11/width-1125-height-612/bob.jpg';

  signUp: SignUp = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() { }

  ngOnInit() {
  }

  direBonjour() {
    console.log("bonjour" + " " + this.nom.trim());
  }

}
