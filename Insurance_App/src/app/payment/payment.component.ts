import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

declare var bootstrap: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  paymentMethod: string = '';
  selectedPolicy: any;
  vehicleRegNumber: string = '';
  yearOfPurchase: number | null = null;
  companyName: string = '';
  modelName: string = '';

  constructor(private router: Router, private ds:DataService) { }

  ngOnInit(): void {
    // Retrieve vehicle and policy details from the state or service
    const paymentDetails = this.ds.getData('paymentDetails');
    console.log("PaymentDeatils:",paymentDetails);
    if(paymentDetails)
    {
      this.selectedPolicy = paymentDetails.selectedPolicy;
      this.vehicleRegNumber = paymentDetails.vehicleRegNumber;
      this.yearOfPurchase = paymentDetails.yearOfPurchase;
      this.companyName = paymentDetails.companyName;
      this.modelName = paymentDetails.modelName;
    }
    
  }

  NavigateToLoginPage():void{
    this.router.navigate(['/home'])
  }

  isLoggedIn():boolean{
    return this.ds.loginStatus
  }


  getPaymentMethodName(): string {
    switch (this.paymentMethod) {
      case 'debit':
        return 'Debit Card';
      case 'credit':
        return 'Credit Card';
      case 'upi':
        return 'UPI';
      case 'netbanking':
        return 'Net Banking';
      default:
        return '';
    }
  }

  onPaymentSubmit() {
    // Implement the payment logic here
    alert('Payment successful!');

    const modalElement = document.getElementById('paymentSuccessModal');
    const paymentSuccessModal = new bootstrap.Modal(modalElement);


    paymentSuccessModal.show(); // Redirect back to home after payment
    paymentSuccessModal._elemet.addEventListener('hidden.bs.modal', ()=>{

      this.router.navigate(['/home']);
    });

  }

}
