import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CreatorServiceService } from '../creatorservice.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent{
  @Input() contentToDisplay:Content | any;

  constructor(private crtrService: CreatorServiceService){

  }

  logIdTitle(contentInfoToLog:Content):void{
    console.log(`ID: ${contentInfoToLog.id}`)
    console.log(`TITLE: ${contentInfoToLog.title}`)
  }

  addNewContentToList(event:Content){
    const contentIndxToUpdate = this.crtrService.sharedContent.findIndex((content: { id: number | null; })=>content.id==event.id);
    if (contentIndxToUpdate > -1) {
      this.crtrService.sharedContent[contentIndxToUpdate] = event;
      this.crtrService.sharedContent = [...this.crtrService.sharedContent];
    }
  }
}
