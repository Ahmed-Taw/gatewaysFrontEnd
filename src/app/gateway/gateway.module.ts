import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { GatewayDetailsComponent } from "./components/gateway-details/gateway-details.component";
import { GatewayDeviceAddDialog } from "./components/gateway-device-add-dialog/gateway-device-add-dialog.component";
import { GatewayDeviceListComponent } from "./components/gateway-device-list/gateway-device-list.component";
import { GatewayListComponent } from "./components/gateways-list/gateway-list.component";
import { GatewayService } from "./gateway.service";

const productRoutes: Routes = [
    { path: '', component: GatewayListComponent },
    { path: 'gateways', component: GatewayListComponent },
    { path: 'gateways/Add', component: GatewayDetailsComponent },
    { path: 'gateways/Edit/:gatewayId', component: GatewayDetailsComponent }

  ];
@NgModule({
    declarations: [
      GatewayListComponent,
      GatewayDetailsComponent,
      GatewayDeviceListComponent,
      GatewayDeviceAddDialog
    ],
    imports: [
     RouterModule.forChild(productRoutes),
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     MatInputModule,
     MatTableModule,
     MatPaginatorModule,
     MatProgressSpinnerModule,
     MatDialogModule
    ],
      
      entryComponents: [GatewayDeviceAddDialog],
    providers: [GatewayService],
    bootstrap: []
  })
export class GatewayModule{} 