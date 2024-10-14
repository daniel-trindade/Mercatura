import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUajlekJhiUWvd_L8T8kFZbhBBkvMwYV0",
  authDomain: "mercatura-dcfe9.firebaseapp.com",
  databaseURL: "https://mercatura-dcfe9-default-rtdb.firebaseio.com",
  projectId: "mercatura-dcfe9",
  storageBucket: "mercatura-dcfe9.appspot.com",
  messagingSenderId: "12472689165",
  appId: "1:12472689165:web:d84d597cb9a172cc236b44",
  measurementId: "G-P3CPMGT9XS"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
