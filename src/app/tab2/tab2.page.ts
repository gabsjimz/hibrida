import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonSelect, IonSelectOption, IonTextarea,IonButton,
  IonList, IonItem, IonLabel,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
/* Importe el servicio */
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonSelect, IonSelectOption, IonTextarea,IonButton,
    IonList, IonItem, IonLabel,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ReactiveFormsModule]
})
export class Tab2Page {
  constructor(private providerService: ProviderService) {
    
  }
  /* Nombre de la colección */
  collectionName = 'reviews';

  /* Arreglo con datos locales */
  dataList: any[] = [];
  myForm: FormGroup = new FormGroup({
    score: new FormControl("", Validators.required),
    opinion: new FormControl("", Validators.required)
  });
  onSubmit() {
      console.log(this.myForm.value);
      alert(this.myForm.controls["score"].value)
      
      this.providerService.createDocument(this.collectionName, this.myForm.value).then(() => {
        this.myForm.reset()
    });
  }
  
  /* Al inicializar, carga los datos  */
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.providerService.readCollection(this.collectionName).subscribe((data) => {
        this.dataList = data;
    });
  }
  

}
