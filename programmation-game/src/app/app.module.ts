import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EtapeUnComponent } from './page-jeu/etape-un/etape-un.component';
import { EtapeDeuxComponent } from './page-jeu/etape-deux/etape-deux.component';
import { EtapeTroisComponent } from './page-jeu/etape-trois/etape-trois.component';
import { EtapeQuatreComponent } from './page-jeu/etape-quatre/etape-quatre.component';
import { BombDiffuseComponent } from './bomb-diffuse/bomb-diffuse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageJeuComponent,
    AccueilComponent,
    EtapeUnComponent,
    EtapeDeuxComponent,
    EtapeTroisComponent,
    EtapeQuatreComponent,
    BombDiffuseComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AccueilComponent },
      { path: 'jeu', component: PageJeuComponent },
      { path: 'bomb', component: BombDiffuseComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
