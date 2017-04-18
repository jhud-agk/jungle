import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { loginComponent } from './login/login.component';
import { jamesComponent } from './james_authur/james_authur.component';
import { divideComponent } from './divide/divide.coponent';
import { madeComponent } from './made/made.component';
import { whispers2Component } from './whispers2/whispers2.component';


@NgModule({
  imports: [
  BrowserModule,
  RouterModule.forRoot([
  	{ path: 'albums', component: AlbumComponent },
  	{ path: 'home', component: HomeComponent },
    { path: 'login', component: loginComponent },
    { path: 'james_authur', component: jamesComponent },
    { path: 'divide', component: divideComponent },
    { path: 'made', component: madeComponent },
  	{ path: 'whispers2', component: whispers2Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

  	])
  ],
  declarations: [ AppComponent, AlbumComponent, HomeComponent,loginComponent,jamesComponent,divideComponent,madeComponent,whispers2Component],
  bootstrap: [ AppComponent ]
})
export class AppModule {}