import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, DoCheck, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss']
})
export class SomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  @Input() username:string = "";
  constructor(){}
  ngOnChanges(changes: SimpleChanges): void
  {
    console.log("NgOnChanges() works");
    console.log(changes);
  }
  ngOnInit(): void 
  {
    console.log("ngOnInit() works");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck() works");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() works");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() works");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() works");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() works");
  }
  ngOnDestroy(): void
  {
    console.log("NgOnDestroy() works");
  }
}
