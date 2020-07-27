import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-employee-statistics',
  templateUrl: './employee-statistics.component.html',
  styleUrls: ['./employee-statistics.component.css']
})
export class EmployeeStatisticsComponent implements OnInit {

  constructor(private companyService:CompanyService) { }
  chartOptions = {
    responsive: true,
    tooltips: {
      enabled: true
  },
  plugins: {
      datalabels: {
          formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                  sum += data;
              });
              let percentage = (value*100 / sum).toFixed(2)+"%";
              return percentage;
          },
          color: '#fff',
      }
  }
  };
  chartData = [{
    barPercentage: 100,
    data: [],
    backgroundColor: [
      "#4b77a9",
      "#5f255f",
      "#d21243",
      "#B27200"
  ],
  borderColor: "#fff"
  }];
  dataSource = [ ];
  isDataLoaded = false

  chartLabels = ['Development', 'Testing', 'System Admin', 'Finance'];

  ngOnInit() {
    this.loadTable()
   }
   loadTable(){
    this.chartLabels.map(data=>{
      this.companyService.getDepartmentData(data).subscribe(res=>{
        this.chartData[0].data.push(Object.keys(res).length)
      })
    })

     
      this.isDataLoaded = true
    
   }

}
