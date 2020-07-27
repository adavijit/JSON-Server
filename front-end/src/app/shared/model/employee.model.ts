export class EmployeeDetails {
  name: string;
  age: string;
  contact: string;
  gender: string;
  technology: string;
  address: string;
  email: string;
  department: string;
  constructor(name: string,
    age: string,
    contact: string,
    gender: string,
    technology: string,
    address: string,
    email: string,
    department: string){
      this.name = name;
      this.age = age;
      this.contact = contact;
      this.address = address;
      this.gender = gender;
      this.email = email;
      this.department = department;
      this.technology = technology;
  }
}
