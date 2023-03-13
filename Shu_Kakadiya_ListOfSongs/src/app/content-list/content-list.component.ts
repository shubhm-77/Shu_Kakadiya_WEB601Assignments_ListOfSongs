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
      title: 'Eastside',
      description: 'Friends Keep Secrets(2018)',
      creator: 'Benny Blanco, Halsey, Khalid',
      type: 'Pop',
      imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/1.jpg'
    };
    const content2: Content = {
      id: 2,
      title: 'Tonight',
      description: 'Icarus Fall(2018)',
      creator: 'Zayn Malik',
      type: 'Pop',
      imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/2.jpg'
    };
    const content3: Content = {
      id: 3,
      title: 'Perfect',
      description: '÷Divide(2017)',
      creator: 'ED Sheeran',
      type: 'Pop',
      imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/3.jpg'
    };
    const content4: Content = {
      id: 4,
      title: 'One Million Bullets',
      description: 'This Is Acting(2016)',
      creator: 'Sia',
      type: 'Indian Film Pop, Alternative/Indie, R&B/Soul, Electropop, Pop, UK R&B, Dance Pop, Singer-Songwriter',
      imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/4.jpg'
    };
    const content5: Content = {
      id: 5,
      title: 'Better',
      description: 'Suncity(2018)',
      creator: 'Khalid',
      type: 'R&B/Soul',
      imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/5.jpg'
    };
    const content6: Content = {
      id: 6,
      title: 'Lovely',
      description: 'When We All Fall Asleep, Where Do We Go?',
      creator: 'Billie Eilish, Khalid',
      type: 'Pop',
      imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/6.jpg'
    };

    const content7: Content = {
      id: 7,
      title: 'Infinity',
      description: 'Feel Something(2017)',
      creator: 'Jaymes Young',
      type: 'Alternative/Indie, Children\'s Music, Electronic rock',
      imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/7.jpg'
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
