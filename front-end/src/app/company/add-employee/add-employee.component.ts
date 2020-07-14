import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  isError = false  
  ageLimit = 35
  ages = []
  isTech= true
 @Output() saveSuccess = new EventEmitter<any>()  

  constructor(private companyService : CompanyService) { }

  ngOnInit(): void {
    for(let i=1;i<=this.ageLimit;i++)
    this.ages.push(i)
  }

  closeModal(status: string){
    let modal = document.getElementById('myModal')

    modal.style.display = "none";
    if(status=== 'success'){
      this.saveSuccess.emit()
    }
    
  }
  phonenumberValidate(inputtxt: string)
  {
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno)){
    return true
  }
  else{
    return false
  }
  }
  ValidateEmail(email:string) 
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      return (false)
  }
  onFormSubmit(name: string,contact: string,email: string,department: string,age: string,gender: string,address: string){


    let arr=[] 
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (let i = 0; i < checkboxes.length; i++) {
      this.isTech= false
      arr.push(checkboxes[i]['value']) 
    }
    let technologies= arr.join()
    console.log(technologies);
    if(technologies=="")
    technologies= "NA"
    




    if(!name || !contact || !email || !department || !age || !gender || !address || !this.phonenumberValidate(contact) ||  !this.ValidateEmail(email)){
      this.isError= true
      let modal = document.getElementById('myModal')
        modal.style.display = "block";
    }else{
      this.companyService.saveEmployeeData({
        "name": name,
        "email": email,
        "department": department,
        "age": age,
        "gender": gender,
        "address" : address,
        "contact" : contact,
        "technologies" : technologies
      })
      .then(res=>{
        this.isError = false
        let modal = document.getElementById('myModal')
        modal.style.display = "block";
      })
    }

   
    
  }

}
