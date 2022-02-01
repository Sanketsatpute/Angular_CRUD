import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor(private utility:UtilityService , private fb:FormBuilder) { }
  data:any

  myform=this.fb.group({
    firstname:new FormControl(),
    lastname:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    salary:new FormControl()
  })

  ngOnInit(): void {
    this.datamongo()
   
  }

  datamongo(){
    this.utility.getData().subscribe(_c=>{
      console.log(_c)
      this.data=_c
    })
  }

  edit(ans ,id){
    console.log(id)

    // this.myform.
    // console.log(ans);
    // console.log(this.myform.value)
    this.myform.controls['firstname'].setValue(ans.firstname)
    this.myform.controls['lastname'].setValue(ans.lastname)
    this.myform.controls['email'].setValue(ans.email)
    this.myform.controls['mobile'].setValue(ans.mobile)
    this.myform.controls['salary'].setValue(ans.salary)

    localStorage.setItem("id" , ans._id)
    

  }
  saveedit(){

    this.utility.putData(localStorage.getItem("id"), this.myform.value).subscribe(
      _c=>{
        console.log(_c);
      setTimeout(() => {
        window.location.reload()
      }, 100);
        
      }
    )
  }
  
  remove(ans,id){
    this.utility.deletedata(ans._id).subscribe(
      _c=>{
        this.datamongo()
      }
    )
  }

}
