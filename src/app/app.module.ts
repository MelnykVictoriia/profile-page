import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestComponent } from './interest/interest.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    EducationComponent,
    SkillsComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
