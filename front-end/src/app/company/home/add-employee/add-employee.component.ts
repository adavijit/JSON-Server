import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeDetails } from 'src/app/shared/model/employee.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  isError = false;
  ageLimit = 35;
  ages = [];
  isTech = true;
  empForm;
  techArray = [];
  modalStyle = {
    display: 'none',
    position: 'fixed',
    'z-index': '1',
    'padding-top': '100px',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    'background-color': 'rgba(0,0,0,0.4)',
  };
  @Output() saveSuccess = new EventEmitter<any>();

  constructor(
    private companyService: CompanyService,
    private formBuilder: FormBuilder
  ) {
    this.empForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      department: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      technology: [''],
    });
  }

  get fullName() {
    return this.empForm.get('fullName');
  }

  get email() {
    return this.empForm.get('email');
  }

  get gender() {
    return this.empForm.get('gender');
  }
  get department() {
    return this.empForm.get('department');
  }
  get contact() {
    return this.empForm.get('contact');
  }
  get address() {
    return this.empForm.get('address');
  }

  departmentList: department[] = [
    new department('Development', '1'),
    new department('System Admin', '2'),
    new department('Testing', '3'),
    new department('Finance', '4'),
  ];

  onSubmit() {
    const employeeDetails = new EmployeeDetails(this.empForm.value.fullName,
         this.empForm.value.age,
         this.empForm.value.contact,
       this.empForm.value.gender,
        this.techArray.length ? this.techArray.join() : 'NA',
        this.empForm.value.address,
        this.empForm.value.email,
        this.empForm.value.department)

    this.companyService
      .saveEmployeeData(employeeDetails)
      .subscribe((data) => {
        console.log(data);
        this.modalStyle = {
          display: 'block',
          position: 'fixed',
          'z-index': '1',
          'padding-top': '100px',
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
          overflow: 'auto',
          'background-color': 'rgba(0,0,0,0.4)',
        };
      });
  }
  onDeptChange(event: any) {
    if (event.target.innerHTML == 'Finance') this.isTech = false;
    else this.isTech = true;
  }

  onCancel() {
    this.saveSuccess.emit();
  }
  onCheckChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.techArray.push(event.source.value);
    } else {
      this.techArray = this.techArray.filter(
        (item) => item !== event.source.value
      );
    }
  }

  ngOnInit(): void {
    for (let i = 18; i <= this.ageLimit; i++) this.ages.push(i);
  }
}

export class department {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = name;
  }
}
