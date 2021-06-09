import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class GatewayService {
    private apiUrl = `${environment.apiUrl}/Gateway`;

    constructor(private http: HttpClient) {
     }

     getAllgateways(){
         return this.http.get(`${this.apiUrl}/All`);
     }

     getSpecificGateway(gatewayId: string){
         return this.http.get(`${this.apiUrl}/Details/${gatewayId}`);
     }

     addNewGateway(gateway){
         return this.http.post(`${this.apiUrl}/add`, gateway);
     }

     
     addNewGatewayDevice(gatewayDevice, gatewayId: string){
        return this.http.post(`${this.apiUrl}/addDevice/${gatewayId}`, gatewayDevice);
    }

    
    // deleteNewGatewayDevice(gatewayDeviceId, gatewayId: string){
    //     return this.http.delete(`${this.apiUrl}/addDevice/${gatewayId}`, gatewayDeviceId);
    // }
}