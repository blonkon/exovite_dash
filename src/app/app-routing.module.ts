import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', component: LogComponent },
  { path: 'main', component: MainComponent },
  // ... Autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
