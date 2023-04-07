import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreatorService } from '../creator.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class ModifyContentComponentComponent {
  @Output() updatedContentAdded = new EventEmitter<Content>();
  @Input() creator: Content[] = [];
  @Input() currentContent: Content | undefined;
  currentcreator: Content[] | undefined;

  constructor() {}

  updatedContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator:'',
    imgURL: '',
    type: '',
    tags: [],
  };
  setCurrentMovie(id: number) {
    console.log('click');
    const movie = this.creator.find((creator) =>creator.id === id);
    if (CreatorService) {
      this.currentcreator = this.creator;
    }
  }
  addContent() {
    const clonedContent = Object.assign({}, this.updatedContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    this.updatedContentAdded.emit(clonedContent);
    this.updatedContent = {
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
