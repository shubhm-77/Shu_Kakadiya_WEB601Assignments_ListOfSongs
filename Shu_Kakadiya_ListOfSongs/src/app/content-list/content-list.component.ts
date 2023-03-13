import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent{
  contents: Content[] = [];
  inputTitle: string = '';
  titleSearchMessage: string = '';
  available: boolean = false;

  constructor() {
    const content1: Content = {
      id: 1,
      title: '',
      description: '',
      creator: '',
      type: '',
      imgURL: ''
    };
    const content2: Content = {
      id: 2,
      title: '',
      description: '',
      creator: '',
      type: '',
      imgURL: ''
    };
    const content3: Content = {
      id: 3,
      title: '',
      description: '',
      creator: '',
      type: '',
      imgURL: ''
    };
    const content4: Content = {
      id: 4,
      title: '',
      description: '',
      creator: '',
      type: '',
      imgURL: ''
    };
    const content5: Content = {
      id: 5,
      title: '',
      description: '',
      creator: '',
      type: '',
      imgURL: ''
    };
    const content6: Content = {
      id: 6,
      title: '',
      description: '',
      creator: '',
      type: '',
      imgURL: ''
    };
    this.contents.push(content1);
    this.contents.push(content2);
    this.contents.push(content3);
    this.contents.push(content4);
    this.contents.push(content5);
    this.contents.push(content6);
  }

  searchTitle() {
    this.available = false;
    this.titleSearchMessage = 'Title you searched is not Available';
    this.contents.forEach((element ) => {
      console.log(`'${element.title}'....'${this.inputTitle}'`)
      if (element.title === this.inputTitle) {
        this.available = true;
        this.titleSearchMessage = 'Title you searched is available';
      }
    });
  }

  addContent(content: Content){
    this.contents.push(content);
  }
}
