import { Component } from '@angular/core';
import { CreatorserviceService } from './creatorservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shu_Kakadiya_ListOfSongs';

  featuredcreator: any;

  constructor(private CreatorserviceService: CreatorserviceService) {}

  ngOnInit() {
    this.CreatorserviceService['getcreatorById'](1).subscribe((creator: any ) => {
      this.featuredcreator = creator ;
    });

  }
}
