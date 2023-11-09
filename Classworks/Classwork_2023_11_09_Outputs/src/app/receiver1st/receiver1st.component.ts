import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTransferServiceService } from '../services/DataTransfer/data-transfer-service.service';

@Component({
  selector: 'app-receiver1st',
  templateUrl: './receiver1st.component.html',
  styleUrls: ['./receiver1st.component.scss']
})
export class Receiver1stComponent implements OnDestroy 
{
  private subscription: Subscription;
  data: number = 0;
  constructor(private readonly dataTransferService: DataTransferServiceService)
  {
    this.subscription = this.dataTransferService.data$.subscribe(d=>this.setData(d));
  }
  setData(value: number):void
  {
    this.data = value;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
