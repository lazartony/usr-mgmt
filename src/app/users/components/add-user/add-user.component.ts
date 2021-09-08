import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  isSaved = false;

  addUserForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    phone: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required, Validators.email])
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  handleAddUser(){
    console.log(this.addUserForm);
    this.userService.createUser(this.addUserForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res && res.id){
        this.isSaved = true;
      }
    });
  }

}
