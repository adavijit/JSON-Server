import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EmployeeDetails } from 'src/app/shared/model/employee.model';

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
  EmpName=''
  contactForm;
  deptName=''
  tech= ''
  techArray=[]
  employeeDetails : EmployeeDetails
 @Output() saveSuccess = new EventEmitter<any>()  

  constructor(
    private companyService : CompanyService,
    private formBuilder: FormBuilder
    ) { 


      this.contactForm = this.formBuilder.group({
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', [Validators.required]],
        department: ['', [Validators.required]],
        age: ['', [Validators.required]],
        address: ['', [Validators.required]],
        contact:['', [Validators.required]],
        technology:['']

        
      });
    }

  
 
    get fullName() {
      return this.contactForm.get('fullName');
    }
   
    get email() {
      return this.contactForm.get('email');
    }
   
    get gender() {
      return this.contactForm.get('gender');
    }
    get department() {
      return this.contactForm.get('department');
    }
    get contact() {
      return this.contactForm.get('contact');
    }
    get address() {
      return this.contactForm.get('address');
    }
 
   
   
    departmentList: department[] = [
      new department("Development","1"),
      new department("System Admin","2"),
      new department("Testing","3"),
      new department("Finance","4"),

    ];
   
    onSubmit() {
      
      this.employeeDetails={
        name : this.contactForm.value.fullName,
        age: this.contactForm.value.fullName,
        contact: this.contactForm.value.fullName,
        gender: this.contactForm.value.gender,
        technology: this.techArray.length? this.techArray.join(): "NA",
        address: this.contactForm.value.fullName,
        email: this.contactForm.value.email,
      }
      
      console.log(this.contactForm.value);
    }
    onCheckChange(event){
      if(event.target.checked){
        this.techArray.push(event.target.value)
      }
      else{
        this.techArray = this.techArray.filter(item => item !== event.target.value)
      }

    }
  ngOnInit(): void {
    for(let i=18;i<=this.ageLimit;i++)
    this.ages.push(i)
  }

  closeModal(status: string){
    let modal = document.getElementById('myModal')

    modal.style.display = "none";
    if(status=== 'success'){
      this.saveSuccess.emit()
    }
    
  }
  onFormSubmit(){

   

    

    console.log(this.EmpName);
    
    // let arr=[] 
    // let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    // for (let i = 0; i < checkboxes.length; i++) {
    //   this.isTech= false
    //   arr.push(checkboxes[i]['value']) 
    // }
    // let technologies= arr.join()
    // console.log(technologies);
    // if(technologies=="")
    // technologies= "NA"
    




    // if(!name || !contact || !email || !department || !age || !gender || !address || !this.phonenumberValidate(contact) ||  !this.ValidateEmail(email)){
    //   this.isError= true
    //   let modal = document.getElementById('myModal')
    //     modal.style.display = "block";
    // }else{
    //   this.companyService.saveEmployeeData({
    //     "name": name,
    //     "email": email,
    //     "department": department,
    //     "age": age,
    //     "gender": gender,
    //     "address" : address,
    //     "contact" : contact,
    //     "technologies" : technologies
    //   })
    //   .then(res=>{
    //     this.isError = false
    //     let modal = document.getElementById('myModal')
    //     modal.style.display = "block";
    //   })
    // }

   
    
  }

}

export class department {
  name: string;
  id: string;

 
  constructor(name: string,id:string) {
    this.name = name;
    this.id = name;
  }
}