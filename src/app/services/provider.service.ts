/* Agregue la función inject */
 import { Injectable, inject } from '@angular/core';

 /* Importe los módulos de AngularFire */
 import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  /* Inyecte de dependencia AngularFire */
  firestoreService = inject(Firestore);
  constructor() { }
  createDocument(collectionName: string, data: any): Promise<any> {
    const colRef = collection(this.firestoreService, collectionName);
    console.log(data);
    return addDoc(colRef, data);
  }
  readCollection(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestoreService, collectionName);
    return collectionData(colRef, { idField: 'id' });
 }
}
