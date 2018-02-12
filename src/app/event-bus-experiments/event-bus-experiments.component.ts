import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event-bus';
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
    // typ robimy brodcast lesson-list, czyli jezeli nam
    // sie zaladuje ten koponent to bedzie rozglaszal brodcatsowo
    // informacje
    //  ten tutaj rozglasza (zawiadamia) Obserwator zawiadamiajacy
    console.log('Top level component broadcasted all lessons');
    globalEventBus.notifyObserver(testLessons);
  }

}
