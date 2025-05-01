import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MovieComponent } from './pages/movie/movie.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'catalog', component: AuthComponent},
    {path: 'tarrifs', component: AuthComponent},
    {path: 'profile', component: AuthComponent},
    {path: 'settings', component: AuthComponent},
    {path: 'movie/:id', component: MovieComponent},
];
