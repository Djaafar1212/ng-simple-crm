import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    filteredCustomers: ICustomer[] =[];
    customersOrderTotal: number;
    currencyCode: string = "USD";

    constructor() { }

    ngOnInit() {
      this.filteredCustomers = [
        {
          id: 1, name: "Ion Egizu", city: "Elizondo", orderTotal: 9.99, customerSince: new Date(2014, 7, 10)
        },
        {
          id: 2, name: "Ane Doe", city: "Pamplona", orderTotal: 19.99, customerSince: new Date(2017, 2, 22)
        },
        {
          id: 3, name: "Juan sin tierra", city: "Tudela", orderTotal: 99.99, customerSince: new Date(2019, 10, 13)
        },
        {
          id: 4, name: "Julia Thomas", city: "Tafalla", orderTotal: 599.99, customerSince: new Date(2012, 10, 31)
        }
      ];
      this.calculateOrders();
    }

    calculateOrders() {
      this.customersOrderTotal = 0;
      this.filteredCustomers.forEach( (cust:ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
        console.log('suma: ')
      } );
    }
}
