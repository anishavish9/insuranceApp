import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  vehicleRegNumber: string = '';
  yearOfPurchase: number | null = null;
  companyName: string = '';
  modelName: string = '';
  showPolicies: boolean = false;
  policies: any[] = [];

  constructor(private router: Router, private http: HttpClient, private ds: DataService) {}

  onSubmit() {
    this.loadVehicleDetails();
  }

  isLoggedIn(): boolean {
    return this.ds.loginStatus;
  }

  NavigateToLoginPage(): void {
    if (this.isLoggedIn()){
      this.router.navigate(['/home']);
    }else
    this.router.navigate(['/']);
  }

  purchasePolicy(policy: any) {
    this.ds.setData('paymentDetails', {
      selectedPolicy: policy,
      vehicleRegNumber: this.vehicleRegNumber,
      yearOfPurchase: this.yearOfPurchase,
      companyName: this.companyName,
      modelName: this.modelName
    });
    this.router.navigate(['/payment']);
  }

  loadVehicleDetails(): void {
    const payload = {
      registrationNumber : this.vehicleRegNumber,
      yearOfManufacturing: this.yearOfPurchase,
      company: this.companyName,
      model: this.modelName
    };

    // Call the API to save vehicle details with response type as text
    this.http.post('http://localhost:8090/api/vehicle/register', payload, { responseType: 'text' }).subscribe(
      data => {
        console.log('Vehicle details saved:', data);
        this.loadPolicies();  // Fetch policies after vehicle details are saved
      },
      error => {
        console.error('Error registering vehicle:', error);
      }
    );
  }

  loadPolicies(): void {
    // Call the API to get the list of policies with response type as text
    this.http.get('http://localhost:8090/api/policy/all', { responseType: 'text' }).subscribe(
      data => {
        // Assuming the data is in JSON format within the text response, parse it
        this.policies = JSON.parse(data);
        this.showPolicies = true;
      },
      error => {
        console.error('Error fetching policies:', error);
      }
    );
  }
}