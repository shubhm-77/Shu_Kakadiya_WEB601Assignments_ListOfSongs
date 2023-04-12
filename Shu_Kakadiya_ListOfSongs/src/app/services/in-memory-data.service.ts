import { Injectable } from '@angular/core';
// @ts-ignore
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const content : Content[] = contentList.generateContent();
    return {content};
  }

}
