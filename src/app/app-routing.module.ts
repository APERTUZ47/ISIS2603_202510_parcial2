import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosListComponent } from './candidatos/candidatos-list/candidatos-list.component';


const routes: Routes = [
  { path: 'candidatos', component: CandidatosListComponent },
  { path: 'candidatos/:id’', component:  CandidatosListComponent},
 


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }