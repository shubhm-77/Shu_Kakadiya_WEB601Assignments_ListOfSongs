import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { CreatorServiceService } from '../creator-service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contentListArr:Content[] = [];
  retrievedContent:Content|any;
  displayMsgCode:number=-2;
  userTitleInputForm = this.formBuilder.group({
    contentTitleField: 0
  });
  onSubmit=(id?:number)=>{
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

  constructor(
    private formBuilder: FormBuilder,
    private crtrService: CreatorServiceService,
    private msgService: MessageService
  ){

  }
  ngOnInit() {
    this.crtrService.getContent().subscribe((content)=>{
      this.contentListArr = content;
      this.msgService.add({status:1,msg:'Content array loaded!'});
      this.onSubmit(4);
      setTimeout(() => {
        this.msgService.clear();
      }, 2000);
    })
  }

  addNewContentToList($event: any) {
    
  }
}
