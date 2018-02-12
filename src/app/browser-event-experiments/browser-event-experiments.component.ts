import { Component, OnInit } from '@angular/core';
// sekcja 3 wyklad  12 = observer pattern

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {
  // lapiemy refernecjedo elemenut dom referujac do
  // elementu Html
  hoverSection: HTMLElement;
  // ciekawe ze to dziala bez konstruktora;

  ngOnInit() {
    // lapiemy element hover ze strony internetowej
    // odnosi sie do naszego elementu jak na niego jedziemy myszka to pokzuje obiekt
    // kordynacje myszki. Event w tym wypadku nam raportuje. To są wlasnie reaktywne
    // mechanizmy przegladarki
    // hoverSection  to nasz tutaj Subject
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  // Reactive extension robi podobnie nasluchujemy zdarzania zbieramy dane
  // i robimy unsubscribe.
  unsubscribe() {
    console.log('Called unsubscribe()');
    // robimy tu usubscribe elementu dom; dajemy tu callback referencje do
    // naszej funkcji zeyby byla wykonana
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}
// Korzysci z przeniesienia funkcji
function onMouseMove(event: MouseEvent) {
  console.log(event);
}

// To stare
// this.hoverSection.addEventListener('mousemove', (event) => {
//   console.log(event);
// });
