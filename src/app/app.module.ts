import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { EntityWrapperComponent } from './entity-wrapper/entity-wrapper.component';
import { EntityItemComponent } from './entity-item/entity-item.component';
import { FormsModule }   from '@angular/forms'; 
const appRoutes: Routes = [ 
{ path: 'entity-wrapper', component: EntityWrapperComponent  }, 
{ path: 'app-dashboard', component: DashboardComponent   }, 
{ path: '**', component: DashboardComponent },
]
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    EntityWrapperComponent,
    EntityItemComponent 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    NgbModule.forRoot() ,  
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent],  
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppModule { }
