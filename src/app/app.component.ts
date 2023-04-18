import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  SalesCustomerData: any[] = [
    {
      name: 'lohi',
      invoiceCount: 3,
      sales: 500,
      salesWithTax: 50,
      transationDate: new Date('2023-05-12T23:50:21.817Z').toISOString(),
    },
    {
      name: 'John',
      invoiceCount: 3,
      sales: 600,
      salesWithTax: 60,
      transationDate: new Date('2020-04-12T23:50:21.817Z').toISOString(),
    },
    {
      name: 'Anujha',
      invoiceCount: 2,
      sales: 700,
      salesWithTax: 70,
      transationDate: new Date('2020-03-14T23:50:21.817Z').toISOString(),
    },
    {
      name: 'ashok',
      invoiceCount: 4,
      sales: 800,
      salesWithTax: 80,
      transationDate: new Date('2023-04-14T23:50:21.817Z').toISOString(),
    },
    {
      name: 'Joe',
      invoiceCount: 5,
      sales: 900,
      salesWithTax: 90,
      transationDate: new Date('2023-04-12T23:50:21.817Z').toISOString(),
    },
    {
      name: 'Mugilan',
      invoiceCount: 5,
      sales: 1000,
      salesWithTax: 100,
      transationDate: new Date('2023-04-18T23:50:21.817Z').toISOString(),
    },
  ];
}
