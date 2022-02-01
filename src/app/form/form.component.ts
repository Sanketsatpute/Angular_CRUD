import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //  utility:UtilityService

  constructor(private utility:UtilityService , private route:Router) { }

  ngOnInit(): void {
 
  }
  submit(fname,lastname , email,mobile,salary){
    console.log(fname.value)
    console.log(lastname.value)
    console.log(email.value)
    console.log(mobile.value)
    console.log(salary.value)
    const obj={
      firstname:fname.value,
      lastname:lastname.value,
      email:email.value,
      mobile:mobile.value,
      salary:salary.value
    }

    this.utility.postdata(obj).subscribe(
      _c=>{
        console.log(_c);
        this.route.navigate(['/show'])
      }
    )
  }

}
