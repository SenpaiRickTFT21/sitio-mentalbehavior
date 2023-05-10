import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AuthGuard } from './_helpers/auth.guard';

import { TopNavModule } from './componentes/top-nav/top-nav.module';
import { HomeLandingModule } from './componentes/home-landing/home-landing.module';
import { ArticuloModule } from './componentes/articulo/articulo.module';
import { TestsModule } from './componentes/tests/tests.module';
import { SeccionesModule } from './componentes/secciones/secciones.module';
import { AutenticacionModule } from './componentes/autenticacion/autenticacion.module';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeLandingComponent } from './componentes/home-landing/home-landing.component';
import { CrearArticuloComponent } from './componentes/crear-articulo/crear-articulo.component';
import { RegistrarUserComponent } from './componentes/autenticacion/registrar-user/registrar-user.component';
import { LoginComponent } from './componentes/autenticacion/login/login.component';
import { TestsComponent } from './componentes/tests/tests.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';

const appRoutes: Routes = [
  { path: '', component: HomeLandingComponent },
  { path: 'signup', component: RegistrarUserComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'articulo/:id',
    component: ArticuloComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crear-articulo',
    component: CrearArticuloComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tests/:id',
    component: TestsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'secciones/:id',
    component: SeccionesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [AppComponent, FooterComponent, CrearArticuloComponent],
  imports: [
    NgbModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    TopNavModule,
    HomeLandingModule,
    ArticuloModule,
    TestsModule,
    AutenticacionModule,
    BrowserAnimationsModule,
    SeccionesModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
