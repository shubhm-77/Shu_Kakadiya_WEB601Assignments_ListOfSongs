import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shu_Kakadiya_ListOfSongs';

  constructor(private logService: LogUpdateService) { }
  ngOnInit(): void {
    this.logService.init();
  }
}
