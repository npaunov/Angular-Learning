import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/gitHubComponents/profile/profile.component';
import { FolowersComponent } from './components/gitHubComponents/folowers/folowers.component';
import { ReposComponent } from './components/gitHubComponents/repos/repos.component';
import { ContributorsComponent } from './components/gitHubComponents/repos/contribotors/contributors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    FolowersComponent,
    ReposComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
