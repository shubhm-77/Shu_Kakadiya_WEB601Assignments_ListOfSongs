import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { CreatorServiceService } from '../creatorservice.service';
import { MessageService } from '../message.sevice';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  @Input() newContentEvent: any;
  retrievedContent:Content|any;
  displayMsgCode:number=-2;

  userTitleInputForm = this.formBuilder.group({
    contentTitleField: 0
  });

  onSubmit=(id?:number)=>{
    // @ts-ignore
    this.crtrService.getContentAtId(id?id:this.userTitleInputForm.controls.contentTitleField.value).subscribe((content)=>{
      this.msgService.clear();
      if (content) {
        this.retrievedContent={...content};
        this.retrievedContent.highlight = true;
        this.msgService.add({status:1,msg:`Content Item at id: ${id?id:this.userTitleInputForm.controls.contentTitleField.value}`});
      } else{
        this.retrievedContent='';
        this.msgService.add({status:0,msg:'There was an error getting content!!'});
      }

    })

  }

  addNewContentToList(event:Content){
    this.crtrService.sharedContent.push(event);
    this.crtrService.sharedContent = [...this.crtrService.sharedContent];
  }

  constructor(
    private formBuilder: FormBuilder,
    public crtrService: CreatorServiceService,
    private msgService: MessageService
  ){

  }

  ngOnInit() {
    // @ts-ignore
    this.crtrService.getContent().subscribe((content)=>{
      this.crtrService.sharedContent = content;
      this.msgService.add({status:1,msg:'Content array loaded!'});
      this.onSubmit(4);
      setTimeout(() => {
        this.msgService.clear();
      }, 2000);
    })
  }
}
