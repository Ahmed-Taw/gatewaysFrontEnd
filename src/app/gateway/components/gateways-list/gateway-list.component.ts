import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GatewayService } from "../../gateway.service";
import { GatewayModel } from "../../models/gateway.model";


@Component({
    selector: 'app-gateway-list',
    templateUrl: './gateway-list.component.html',
     styleUrls: ['./gateway-list.component.css']
  })
export class GatewayListComponent implements OnInit{
    
    displayedColumns: string[] = ['id', 'name', 'iP', 'action'];

    gateways: GatewayModel[];
    constructor(private gatewayService: GatewayService,private router: Router){

    }
    
 ngOnInit(): void {
    this.gatewayService.getAllgateways().subscribe((result: any) => {

        this.gateways = result;
    });
}

onEdit(gatewayid){
    this.router.navigate(['gateways/Edit', gatewayid]);
}
onAdd(){
    this.router.navigate(['gateways/Add']);

}
}