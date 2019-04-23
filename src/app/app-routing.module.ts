import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisitaTecoComponent } from './visita-teco/visita-teco.component';
import { AboutComponent} from './about/about.component';
import { Platillo1Component } from './platillo1/platillo1.component';
import { Platillo2Component } from './platillo2/platillo2.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'visita-teco',component: VisitaTecoComponent},
  {path: 'about',component: AboutComponent},
  {path: 'platillo1',component: Platillo1Component},
  {path: 'platillo2',component: Platillo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
