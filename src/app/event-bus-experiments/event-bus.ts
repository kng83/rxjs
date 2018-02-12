// W tym pliku zrobimy observe type aby zaimplementowac
// obserwatora .Ten Observator bedzie mial jedna metode
// o nazwie notify(data) ktora bedzie przenosila dane
// to jest typical event bus
import * as _ from 'lodash';

// Dodajemy tutaj typy naszych eventow
export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';
export const LESSON_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';

export interface Observer {
    notify(data: any); // payload data
}

// Teraz bedziemy robic interfejs do Subject
// Dzieki temu interfejsowi do naszej klasy beda trafialy dane
// z innych komponentow

interface Subject {
    // dodajemy eventType by sprecyzowac jakiego typu jest
    // nasz event. Bedziemy mieli dzieki temu rozne tablice w 
    // zaleznosci od klucza
    registerObserver(eventType: string, obs: Observer);
    unregisterObserver(eventType: string, obs: Observer); // usubscribe
    notifyObserver(eventType: string, data: any); // bedzie uzywala danych ktore bedziemy brodcatowac do innnych
}

class EventBus implements Subject {
    // Zmieniamy teraz Observera na obiekt map bedziemy
    // mieli pary klucz wartosc gdzie wartosc bedzie nasza
    // tablica
    private observers: { [key: string]: Observer[] } = {};


    registerObserver(eventType: string, obs: Observer) {
        // wrzucamy do tablicy observera ktorego otrzymalismy
        // dodajemy tutaj klucz eventu i bedziemy mogli miec
        // roznych obserwatorow w zaleznosci od eventu
        this.observersPerEventType(eventType).push(obs);
    }
    unregisterObserver(eventType: string, obs: Observer) {

        _.remove(this.observersPerEventType(eventType) , el => el === obs);
    }
    notifyObserver(eventType: string, data: any) {

        // Wlasciwie tutaj dostajemy wskaznik do klasy
        // komponentu i wywolujemy jego funkcje z naszymi danymi
        // bo LessonListComponent jest przekazywany this i takimi
        // trafem te dane trafiaja do  naszego komponentu
        console.log(this.observers);
        this.observersPerEventType(eventType).forEach(obs => obs.notify(data));
    }

    // dodajemy tu funkcje ktora bedzia nam robila mapowanie
    // klucz na Observer []. Observatorzy przez klucz.

    private observersPerEventType(eventType: string): Observer[] {
        const observersPerType = this.observers[eventType];
        if (!observersPerType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }

}

// tutaj eksportujemy stworzona klase
// to jest singleton tutaj
export const globalEventBus = new EventBus();
