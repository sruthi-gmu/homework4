
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  thingsLiked = [];
  showiderror:boolean=false;
  showfistNameerror:boolean=false;
  surveyForm: FormGroup;
  showlastNameerror:boolean=false;
  showaddresserror:boolean=false;
  showcityerror:boolean=false;
  showstateerror:boolean=false;
  showziperror:boolean=false;
  showtelerror:boolean=false;
  showemailIderror:boolean=false;
  showsdateerror:boolean=false;
  showthingsLikederror:boolean=false;
  showinterestderror:boolean=false;
  showrecommenderror:boolean=false;




  constructor(private studentService: StudentService,private fb: FormBuilder,
  private router: Router) { }

   ngOnInit() {
    this.surveyForm = this.fb.group({
      id:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      address:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      zip:['', Validators.required],
      tel:['', Validators.required],
      emailId:['', Validators.required],
      sdate:['', Validators.required],
      thingsLiked:['', Validators.required],
      interest:['', Validators.required],
      recommend:['', Validators.required],




    })
   }


  

  onFocusMethod():void{
    this.showiderror=false;
   this.showfistNameerror=false;
   this.showlastNameerror=false;
   this.showaddresserror=false;
   this.showcityerror=false;
   this.showstateerror=false;
   this.showziperror=false;
   this.showtelerror=false;
   this.showemailIderror=false;
   this.showsdateerror=false;
   this.showthingsLikederror=false;
   this.showinterestderror=false;
   this.showrecommenderror=false;



  }
  
  onBlur():void{
    var id = this.surveyForm.get("id").value;
    var firstName = this.surveyForm.get("firstName").value;
    var lastName = this.surveyForm.get("lastName").value;
    var address= this.surveyForm.get("address").value;
    var city = this.surveyForm.get("city").value;
    var state = this.surveyForm.get("state").value;
    var zip = this.surveyForm.get("zip").value;
    var tel = this.surveyForm.get("tel").value;    
    var emailId = this.surveyForm.get("emailId").value;
    var sdate = this.surveyForm.get("sdate").value;
    var thingsLiked = this.surveyForm.get("thingsLiked").value;
    var interest = this.surveyForm.get("interest").value;
    var recommend = this.surveyForm.get("recommend").value;



  
  
    if(id==""){
      this.showiderror=true;
    }
    if(firstName==""){
      this.showfistNameerror=true;
    }
    if(lastName==""){
      this.showlastNameerror=true;
    }
    if(address==""){
      this.showaddresserror=true;
    }
    if(city==""){
      this.showcityerror=true;
    }
    if(state==""){
      this.showstateerror=true;
    }
    if(zip==""){
      this.showziperror=true;
    }
    if(tel==""){
      this.showtelerror=true;
    }
    if(emailId==""){
      this.showemailIderror=true;
    }
    if(sdate==""){
      this.showsdateerror=true;
    }
    if(thingsLiked==""){
      this.showthingsLikederror=true;
    }
    if(interest==""){
      this.showinterestderror=true;
    }
    if(recommend==""){
      this.showrecommenderror=true;
    }

  }
  
  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    
  }
  onSubmit() {
    
     var id = this.surveyForm.get("id").value;
     var firstName = this.surveyForm.get("firstName").value;
     var lastName = this.surveyForm.get("lastName").value;
     var address = this.surveyForm.get("address").value;
     var city = this.surveyForm.get("city").value;
     var state = this.surveyForm.get("state").value;
     var zip = this.surveyForm.get("zip").value;
     var tel = this.surveyForm.get("tel").value;
     var emailId = this.surveyForm.get("emailId").value;
     var sdate = this.surveyForm.get("sdate").value;
    var thingsLiked = this.surveyForm.get("thingsLiked").value;
    var interest = this.surveyForm.get("interest").value;
    var recommend = this.surveyForm.get("recommend").value;




    
    if(id==""){
      this.showiderror=true;
    }
    if(firstName==""){
      this.showfistNameerror=true;
    }
    if(lastName==""){
      this.showlastNameerror=true;
    }
    if(address==""){
      this.showaddresserror=true;
    }
    if(city==""){
      this.showcityerror=true;
    }
    if(state==""){
      this.showstateerror=true;
    }
    if(zip==""){
      this.showziperror=true;
    }
    if(tel==""){
      this.showtelerror=true;
    }
    if(emailId==""){
      this.showemailIderror=true;
    }
    if(sdate==""){
      this.showsdateerror=true;
    }
    if(thingsLiked==""){
      this.showthingsLikederror=true;
    }
    if(interest==""){
      this.showinterestderror=true;
    }
    if(recommend==""){
      this.showrecommenderror=true;
    }
    this.student.thingsLiked = this.thingsLiked.join();
    this.submitted = true;
    this.save(); 
    }


  gotoList() {
        this.router.navigate(['/students']);
  }

  onCheckboxChange(event, value) {
    if (event.target.checked) {

      this.thingsLiked.push(value);
    } 
    if (!event.target.checked) {

      let index = this.thingsLiked.indexOf(value);

      if (index > -1) {

        this.thingsLiked.splice(index, 1);
      }
    }
  }
}
