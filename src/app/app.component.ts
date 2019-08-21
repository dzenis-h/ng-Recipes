import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: environment.apiKey, 
      authDomain: environment.authDomain
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
