import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataTransferServiceService 
{
  data$: Subject<number> = new Subject<number>();
  pushData(data:number): void
  {
    this.data$.next(data);
  }
}
