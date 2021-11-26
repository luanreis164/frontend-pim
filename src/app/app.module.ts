import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterpectorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ClienteService } from '../services/domain/cliente.service';
import { AuthInterpectorProvider } from '../interceptors/auth-interceptor';
import { QuartoService } from '../services/domain/quarto.service';
import { ReservaService } from '../services/domain/reserva.service';

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    AuthInterpectorProvider,
    ErrorInterpectorProvider,
    AuthService,
    StorageService,
    ClienteService,
    QuartoService,
    ReservaService,
  ]
})
export class AppModule {}
