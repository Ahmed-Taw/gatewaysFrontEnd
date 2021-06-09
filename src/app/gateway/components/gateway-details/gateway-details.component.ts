import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { GatewayService } from "../../gateway.service";
import { GatewayModel } from "../../models/gateway.model";


@Component({
    selector: 'app-gateway-details',
    templateUrl: './gateway-details.component.html',
     styleUrls: ['./gateway-details.component.css']
  })
export class GatewayDetailsComponent implements OnInit{
    
    gatewayId: string
    gateway: GatewayModel;
    gatewayForm;

     error
    pageTitle: string;
    constructor(private gatewayService: GatewayService,   private route: ActivatedRoute,private fb: FormBuilder,private router: Router){

    }
    
 ngOnInit(): void {

    this.route.params.subscribe((params) => {
        this.gatewayId = params["gatewayId"];
        this.setpageTitle();

        if(this.gatewayId){
            this.gatewayService.getSpecificGateway(this.gatewayId).subscribe((result: any) => {

                this.gateway = result;
                this.setgatewayData();
               
            });
        }
        
       
    });

    this.createForm();

    
    
}
createForm(){
    this.gatewayForm = this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        iP4: ['', Validators.required]
      });
}
setpageTitle(){
    if(this.gatewayId){
        this.pageTitle = `Edit Gateway with ID ${this.gatewayId}`;

    }else{
        this.pageTitle= 'Add New Gateway';
    }
}
setgatewayData(){
    this.gatewayForm.reset();
    this.gatewayForm.patchValue({
        id: this.gateway.id,
        name: this.gateway.name,
        iP4: this.gateway.iP4
       
      });
}

saveGateway(gatewayAdd){
    if (this.gatewayForm.valid) {
        if (this.gatewayForm.dirty) {
            this.gateway = { ...gatewayAdd, ...this.gatewayForm.value };
            this.gatewayService.addNewGateway(this.gateway).subscribe(data => {
                if(data){
                    this.gatewayId = this.gateway.id;
                    this.setpageTitle();

                }
            }, (error) => {
                this.error = error.error;
                
            });
        }
        
    }
}
onCancel(){
    this.router.navigate(['gateways']);

}

}