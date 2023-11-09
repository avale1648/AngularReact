import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTransferServiceService } from '../services/DataTransfer/data-transfer-service.service';
@Component({
  selector: 'app-receiver2nd',
  templateUrl: './receiver2nd.component.html',
  styleUrls: ['./receiver2nd.component.scss']
})
export class Receiver2ndComponent implements OnDestroy{
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
