import { Injectable } from '@angular/core';
// @ts-ignore
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import '../contentDb/movies.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const creator: Content[] = [
      {
        id: 1,
        title: 'Song 1',
        // imageURL: '',
        description: 'Description of creator 1',
        creator: 'Zayn Malik',
        type: 'Type 1',
        tags: ['Tag 1', 'Tag 2']
      },
      {
        id: 2,
        title: 'Song 2',
        //imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        description: 'Description of creator 2',
        creator: 'ED Sheeran',
        type: 'Type 2',
        tags: ['Tag 2', 'Tag 3']
      },
      {
        id: 3,
        title: 'Song 3',

        description: 'Description of creator 3',
        creator: 'Taylor Swift',
        type: 'Type 3',
        tags: ['Tag 3', 'Tag 4']
      },
      {
        id: 4,
        title: 'Song 4',
        // imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        description: 'Description of creator 4',
        creator: 'Ariana Grande',
        type: 'Type 4',
        tags: ['Tag 4', 'Tag 5']
      },
      {
        id: 5,
        title: 'Song 5',
        // imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        description: 'Description of creator 5',
        creator: 'Arijit Singh',
        type: 'Type 5',
        tags: ['Tag 5', 'Tag 6']
      },
      {
        id: 6,
        title: 'Song 6',
        //  imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        description: 'Description of creator 6',
        creator: 'AP Dhillon',
        type: 'Type 6',
        tags: ['Tag 6', 'Tag 7']
      },
      {
        id: 7,
        title: 'Song 7',
        //  imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        description: 'Description of creator 7',
        creator: 'Darshan Rawal',
        type: 'Type 6',
        tags: ['Tag 6', 'Tag 7']
      }];

    return { creator };
  }
  constructor() {}
  public genId(creator: Content[]): number {
    return creator.length > 0
      ? Math.max(...creator.map((creator) => creator.id)) + 1
      : 1000;
  }
}
