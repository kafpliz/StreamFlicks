import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MovieComponent } from './pages/movie/movie.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { SignupComponent } from './pages/auth/components/signup/signup.component';
import { LoginComponent } from './pages/auth/components/login/login.component';

export const routes: Routes = [
  //  { path: '', component: MainComponent },
  /*   {
        path: 'auth', component: AuthComponent,  children: [    
             {
                path: '',
                redirectTo: 'login',
                pathMatch: "full"
            },
            {
                path: 'signup',
                component: SignupComponent,
            },
            {
                path: 'login',
                component: LoginComponent
            }

        ]
    }, */
   // { path: 'catalog', component: CatalogComponent },
  //  { path: 'tarrifs', component: AuthComponent },
 //   { path: 'profile', component: AuthComponent },
  //  { path: 'settings', component: AuthComponent },
    { path: 'movie/:id', component: MovieComponent },
];
