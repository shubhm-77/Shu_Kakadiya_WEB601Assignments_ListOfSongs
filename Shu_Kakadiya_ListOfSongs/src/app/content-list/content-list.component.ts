import { Component } from '@angular/core';
import {  Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent{
  @Input() searchText: any;
  public isAvailable = false;
  content: Content[] = [];
  contentList: any;

  constructor() {
    const content1: Content = {
      id: 1,
      title: 'Eastside',
      description: 'Friends Keep Secrets(2018)',
      creator: 'Benny Blanco, Halsey, Khalid',
      //imgURL: '',
      type: 'Pop'
    };
    const content2: Content = {
      id: 2,
      title: 'Tonight',
      description: 'Icarus Fall(2018)',
      creator: 'Zayn Malik',
      //imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/2.jpg',
      type: 'Pop'
    };
    const content3: Content = {
      id: 3,
      title: 'Perfect',
      description: '÷Divide(2017)',
      creator: 'ED Sheeran',
      //imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/3.jpg',
      type: 'Pop'
    };
    const content4: Content = {
      id: 4,
      title: 'One Million Bullets',
      description: 'This Is Acting(2016)',
      creator: 'Sia',
      //imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/4.jpg',
      type: 'Indian Film Pop, Alternative/Indie, R&B/Soul, Electropop, Pop, UK R&B, Dance Pop, Singer-Songwriter'
    };
    const content5: Content = {
      id: 5,
      title: 'Better',
      description: 'Suncity(2018)',
      creator: 'Khalid',
      //imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/5.jpg',
      type: 'R&B/Soul'
    };
    const content6: Content = {
      id: 6,
      title: 'Lovely',
      description: 'When We All Fall Asleep, Where Do We Go?',
      creator: 'Billie Eilish, Khalid',
      //imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/6.jpg',
      type: 'Pop'
    };

    const content7: Content = {
      id: 7,
      title: 'Infinity',
      description: 'Feel Something(2017)',
      creator: 'Jaymes Young',
      //imgURL: 'Shu_Kakadiya_ListOfSongs/src/assets/7.jpg',
      type: 'Alternative/Indie, Children\'s Music, Electronic rock'
    };
    this.content.push(content1);
    this.content.push(content2);
    this.content.push(content3);
    this.content.push(content4);
    this.content.push(content5);
    this.content.push(content6);
    this.content.push(content7);
    this.isAvailable = false;
  }

  searchContent() {
    console.log(this.searchText);

    this.contentList.forEach((content: { title: string | any[]; }) => {
      if (content.title.includes(this.searchText)) {
        this.isAvailable = true;
      } else if (this.searchText === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }

  onContentAdded(newContent: Content) {
    this.contentList.push(newContent);

    console.log(`Added ${newContent.title} successfully`);

    console.log(this.contentList);
  }
}
