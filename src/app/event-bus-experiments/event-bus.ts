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
    // nasz event
    registerObserver( string , obs: Observer);
    unregisterObserver( string , obs: Observer); // usubscribe
    notifyObserver( string , data: any); // bedzie uzywala danych ktore bedziemy brodcatowac do innnych
}

class EventBus implements Subject {
    private observers: Observer[] = [];


    registerObserver(obs: Observer) {
        // wrzucamy do tablicy observera ktorego otrzymalismy
        this.observers.push(obs);
    }
    unregisterObserver(obs: Observer) {
        // aby teraz wyjac naszego observera uzyjemy lodasha
        // remove usuwa nam wybrany element tablicy predicate
        // to twierdzic. Usuwa element gdy rowna sie obs;
        //    _.remove(this.observers, (el) => {
        //    return el === obs;
        // }) to to samo
        _.remove(this.observers, el => el === obs);
    }
    notifyObserver(data: any) {
        // dla kazdego elementu robimy notifikacje
        // to zawiadomienie, powiadomienie kogos innego
        // o jakims fakcie. Tutaj notify to tylko interfejs
        // dla kazdego obserwatora sa wysylane dane forEach
        // te dane z Obserwatora zawiadamiajacego trafiaja do
        // innych obserwatorow. Kazdy z obserwatorow dosteje
        // egzemplarz tej funkcji.
        // Wlasciwie tutaj dostajemy wskaznik do klasy
        // komponentu i wywolujemy jego funkcje z naszymi danymi
        // bo LessonListComponent jest przekazywany this i takimi
        // trafem te dane trafiaja do  naszego komponentu
        console.log(this.observers);
        this.observers.forEach(obs => obs.notify(data));
    }

}

// tutaj eksportujemy stworzona klase
// to jest singleton tutaj
export const globalEventBus = new EventBus();
