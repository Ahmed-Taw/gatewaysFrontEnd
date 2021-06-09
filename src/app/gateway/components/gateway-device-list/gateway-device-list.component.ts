import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatTable } from "@angular/material";
import { Router } from "@angular/router";
import { GatewayService } from "../../gateway.service";
import { GatewayModel } from "../../models/gateway.model";
import { GatewayDeviceAddDialog } from "../gateway-device-add-dialog/gateway-device-add-dialog.component";


@Component({
    selector: 'app-gateway-device-list',
    templateUrl: './gateway-device-list.component.html'
    //  styleUrls: ['./gateway-list.component.css']
  })
export class GatewayDeviceListComponent implements OnInit{
    
    @ViewChild(MatTable, null) table: MatTable<any>;
    displayedColumns: string[] = ['vendor', 'status', 'createdDate', 'action'];

    @Input() gatewayDevices
    @Input() gatewayId    
    constructor(private router: Router, public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef){

    }
    
 ngOnInit(): void {
    
}
openDialog(): void {
    const dialogRef = this.dialog.open(GatewayDeviceAddDialog, {
      width: '500px',
      data: {gatewayId: this.gatewayId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.gatewayDevices.unshift(result);
      this.table.renderRows();
      this.changeDetectorRefs.detectChanges();
    });
  }

onEdit(gatewayid){
    this.router.navigate(['gateways/Edit', gatewayid]);
}
onAdd(){
    this.router.navigate(['gateways/Add']);

}
}