import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { ImportantTaskComponent } from './components/pages/important-task/important-task.component';
import { ComplededTaskComponent } from './components/pages/compleded-task/compleded-task.component';

export const routes: Routes = [
    {path:'', component:AllTaskComponent},
    {path:'important',component:ImportantTaskComponent },
    {path:'completed',component:ComplededTaskComponent  }
];
