import { Component } from '@angular/core';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonToolbar, IonTitle, IonContent, IonCard, IonHeader } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page {
  constructor() {}
}
