import { Component } from '@angular/core';
import { DataTransferServiceService } from '../services/DataTransfer/data-transfer-service.service';
@Component({
  selector: 'app-sender-data-component',
  templateUrl: './sender-data-component.component.html',
  styleUrls: ['./sender-data-component.component.scss']
})
export class SenderDataComponentComponent 
{
  constructor(private readonly dataTransferService: DataTransferServiceService)
  {

  }
  clickPush():void 
  {
    this.dataTransferService.pushData(Math.random());
    console.log("click");
  }
}
