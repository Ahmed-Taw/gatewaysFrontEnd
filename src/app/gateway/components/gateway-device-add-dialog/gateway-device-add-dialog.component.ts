import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { GatewayService } from "../../gateway.service";

@Component({
    selector: 'app-gateway-device-add-dialog',
    templateUrl: 'gateway-device-add-dialog.component.html',
  })
  export class GatewayDeviceAddDialog implements OnInit {
    gatewayDeviceForm
    constructor(
      public dialogRef: MatDialogRef<GatewayDeviceAddDialog>,private fb: FormBuilder,private gatewayService: GatewayService,
      @Inject(MAT_DIALOG_DATA) public data: any) {
       console.log(data);
      }
    ngOnInit(): void {
        this.gatewayDeviceForm = this.fb.group({
            vendor: ['', Validators.required],
            status: ['', Validators.required]
          });
    }
  
    onCancelClick(): void {
      this.dialogRef.close();
    }
    saveGatewayDevice(){
        let device = {...this.gatewayDeviceForm.value}
        device.createdDate = new Date();
        this.gatewayService.addNewGatewayDevice(device, this.data.gatewayId).subscribe(data => {
            this.dialogRef.close(device)

        }
        )
    }
  }