import { Component } from '@angular/core';
class Task
{
  name: string;
  description: string;
  deadline: Date;
  status: string;
  constructor(name: string, desciption: string, deadline: Date, status: string )
  {
    this.name = name;
    this.description = desciption;
    this.deadline = deadline;
    this.status = status;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = "";
  description: string = "";
  deadline: Date = new Date();
  status: string = "";
  title = 'Classwork_2023_10_20';
  tasks: Task[] = 
  [
    {name: "Сходить в магазин", description: "Сходить в магазин", deadline: new Date("2023-10-27"), status:"В процессе"},
    {name: "Сходить в подвал", description: "Сходить в подвал", deadline: new Date("2023-10-27"), status:"В процессе"},
  ];
  addTask(name: string, description: string, deadline: Date, status: string)
  {
    this.tasks.push(new Task(name, description, deadline, status));
  }
}
