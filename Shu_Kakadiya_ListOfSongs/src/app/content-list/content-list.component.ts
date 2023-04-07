import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CreatorserviceService } from '../creatorservice.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  creator: Content[] = [];
  featuredcreator: Content = {} as Content;
  public isAvailable = false;
  public searchTerm = '';
  contentList: any;
  creatorService: any;
  Songs: any;

  constructor(private CreatorserviceService: CreatorserviceService) {
    this.isAvailable = false;
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.CreatorserviceService['getcreator']().subscribe((creator: Content[]) => {
      this.creator = creator;
    });
  }

  handleInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onContentAdded(newContent: Content) {

    this.creator.push(newContent);

    console.log(`Added ${newContent.title} successfully`);

    console.log(this.creator);
  }

  updateContent(updatedContent: Content) {
    this.creatorService.updateCreator(updatedContent).subscribe((updatedcreator: { id: any; }) => {
      const index = this.creator.findIndex(
        (creator: { id: any; }) => creator.id === updatedcreator.id
      );
      this.creatorService[index] = updatedcreator;
    });
  }

  searchContent() {
    console.log(this.searchTerm);

    this.contentList.forEach((creator: { title: string | string[]; }) => {
      if (creator.title.includes(this.searchTerm)) {
        this.isAvailable = true;
      } else if (this.searchTerm === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }
}
