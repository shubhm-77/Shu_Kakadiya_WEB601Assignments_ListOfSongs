import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contentListArr:Content[] = [];
  displayMsgCode:number=-2;
  generateContent(id:number,contentArr:(string)[]){
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
  }
    userTitleInputForm = this.formBuilder.group({
      contentTitleField: ''
    });

    onSubmit=()=>{
      if (!this.userTitleInputForm.controls.contentTitleField.value) {
        return;
      }
      this.displayMsgCode = this.contentListArr.findIndex(content=>content.title.toLowerCase()===this.userTitleInputForm.controls.contentTitleField.value?.toLowerCase());
      if(this.displayMsgCode>-1){
        this.contentListArr[this.displayMsgCode].highlight = true;
        this.scroller.scrollToAnchor(this.contentListArr[this.displayMsgCode].title);
      }
      setTimeout(() => {
        this.contentListArr[this.displayMsgCode].highlight = false;
        this.displayMsgCode = -2;
      }, 5000);
    }

    constructor(private formBuilder: FormBuilder, private scroller: ViewportScroller){
      this.contentListArr.push({
        ...this.generateContent(
          1,['Eastside','Friends Keep Secrets','Halsey, Khalid, Benny Blanco']
        ),
        ...{imgURL:''},
        ...{type:'Pop'},
        ...{tags:['2018']}
      });
      this.contentListArr.push({
        ...this.generateContent(
          2,['Tonight',`Icarus Falls`,'Zayn Malik']
        ),
        ...{type:'Pop'},
        ...{imgURL:''}
      });
      this.contentListArr.push({
        ...this.generateContent(
          3,['Gods Plan','Scorpion','Drake']
      ),
    ...{type:'Pop music, Trap music, R&B/Soul, Pop rap, Hip-Hop/Rap'}
    });
      this.contentListArr.push({
        ...this.generateContent(
          4,['Itni Si Baat Hain','Azhar','Arijit Singh, Antara Mitra']
        ),
        ...{type:'Pop'},
        ...{imgURL:''},
        ...{tags:['2016']}
      });
      this.contentListArr.push({
        ...this.generateContent(
          5,['Teri Jhuki Nazar','Murder 3','Pritam Chakraborty, Shafqat Amanat Ali']
        )
      });
      this.contentListArr.push({
        ...this.generateContent(
          6,['Mogal Taro Aashro',' Mogal Taro Aashro (feat. Kirtidan Gadhavi)',' Jigardan Gadhavi']
        )
      });
      this.contentListArr.push({
        ...this.generateContent(
          7,[' Radha Sang Raas Rame Shyam','Folk','Jais Kukadiya']
        )
      });
      this.contentListArr.push({
        ...this.generateContent(
          8,['Badnaam Kiya','Badnaam Kiya','Yasser Desai']
        )
      });
    }
  }
