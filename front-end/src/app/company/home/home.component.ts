import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  addEmployeeComponent = false
  listEmployeeComponent = true
  statisticsComponent = false

  @Output() isLogout = new EventEmitter<any>()
  ngOnInit(): void {



  }
  
  onNavStatusChange(status: string){
    if(status=== 'add'){
      this.addEmployeeComponent = true
      this.listEmployeeComponent = false
      this.statisticsComponent = false
    }
    if(status=== 'list'){
      this.addEmployeeComponent = false
      this.listEmployeeComponent = true
      this.statisticsComponent = false
    }
    if(status=== 'stat'){
      this.addEmployeeComponent = false
      this.listEmployeeComponent = false
      this.statisticsComponent = true
    }
  }
  onLogout(){
    this.isLogout.emit()
  }
  

}
