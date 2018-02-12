import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
// Dodajemy implementacje Observera
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];
  constructor() {
    // dlatego serwisy daje sie do konstruktora
    globalEventBus.registerObserver(this);
  }

  ngOnInit() {
    console.log('lessons list component is registered as observer...');
    // w tym komponecie chcemy zarezerwowac observer
    // observer this bo to bedzie nam obserwoalo
    // this w tym przypadku to LessonListComponent {lessons: Array()}
    // i jest tutaj rejestracja obserwatora
    //

  }
  // bylo any i sobie dalismy lesson
  // w pierwszej wersji te notify nie dostalo danych
  // prubujemy zmienic czas i dajemy globalEventBus.registerObserver
  // do konstruktora i to dziala
  // ten notify tajemniczo odbiera dane

  notify(data: Lesson[]) {
    console.log('Lesson list component received data');
    this.lessons = data;
  }
}
