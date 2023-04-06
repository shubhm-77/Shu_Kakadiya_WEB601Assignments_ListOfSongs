import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent{
  [x: string]: any;
  @Input() contentToDisplay:Content | any;
  tag: any;
  i: any;

  constructor(){

  }

  logIdTitle(contentInfoToLog:Content):void{
    console.log(`ID: ${contentInfoToLog.id}`)
    console.log(`TITLE: ${contentInfoToLog.title}`)
  }

}
