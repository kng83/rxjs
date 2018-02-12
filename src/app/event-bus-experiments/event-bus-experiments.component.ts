import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSON_LIST_AVAILABLE } from './event-bus';
import { testLessons } from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  // robimy tu lesson list ktora bedzie dostepna globalnie
  // ten glowny komponent bedzie emitowal liste lekcji
  // bedziemy tu robic broadcast list lessons
  constructor() { }

  ngOnInit() {

    //  ten tutaj rozglasza (zawiadamia) Obserwator zawiadamiajacy
    // dodajemy klucz informujacy ze to beda listy dostepne
    // scliem damy tu kopie
    console.log('Top level component broadcasted all lessons');
    globalEventBus.notifyObserver(LESSON_LIST_AVAILABLE,
       testLessons.slice(0));
  }

}
