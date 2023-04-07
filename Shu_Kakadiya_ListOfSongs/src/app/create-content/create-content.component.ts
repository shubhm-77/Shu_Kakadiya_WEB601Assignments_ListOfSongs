import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator:'',
    imgURL: '',
    type: '',
    tags: [],
  };

  addContent() {
    this.newContent = {
      id: 1,
      title: '',
      description: '',
      creator:'',
      imgURL: '',
      type: '',
      tags: [],
    };

  }
}
