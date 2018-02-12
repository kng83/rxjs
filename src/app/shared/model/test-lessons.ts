import { Lesson } from './lesson';

// Robimy tutaj globalny obiekt lessons zawierajacy lekcje
export const testLessons: Lesson[] = [
    {
        id: 1,
        description: 'Setting up an angular dev env',
        duration: '5:00'
    },
    {
        id: 2,
        description: 'Running the lesons code',
        duration: '7:00'
    },
    {
        id: 3,
        description: 'Build your first app - Hello world',
        duration: '9:00'
    }
];
