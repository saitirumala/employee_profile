import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconModule } from '@ant-design/icons-angular';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';


import { NzFormModule } from 'ng-zorro-antd/form';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
//


import { registerLocaleData } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './employee.reducer';
import { StoreService } from './Service/store.service';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    PagenotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    NzInputModule,
    NzFormModule,
    NzInputNumberModule,
    MatTableModule,
    ReactiveFormsModule,
    NzMentionModule,
    NzMenuModule,
    NzIconModule,
    NzModalModule,
    IconModule,
    DemoNgZorroAntdModule,
    FormsModule,
    HttpClientJsonpModule,
    ScrollingModule,
    NzGridModule,
    DragDropModule,
    StoreModule.forRoot({ employeeData: employeeReducer })
  ],
  providers: [StoreService, { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
  bootstrap: [AppComponent]
})
export class AppModule { }