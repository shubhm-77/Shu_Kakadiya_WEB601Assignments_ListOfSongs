import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// @ts-ignore
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// @ts-ignore
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
// @ts-ignore
import { ContentFilterPipe } from './content-list/content-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
// @ts-ignore
import { CreateContentComponent } from './createcontent/createcontent.component';
import { CreatorserviceService } from './creatorservice.service';
import { FormsModule } from '@angular/forms';
// @ts-ignore
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component.html';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    HoverAffectDirective,
    MessagesComponent,
    CreateContentComponent,
    ModifyContentComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],

  providers: [CreatorserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
