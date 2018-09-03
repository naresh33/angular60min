import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = "Naresh Kumar";
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts : Posts[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.name = "Naresh";
    this.age = 28;
    this.email = "naresh_s@infosys.com";
    this.address = {
      street: "9th cross, Neeladri",
      city: "Bangalore",
      state: "Karnataka"
    }
    this.hobbies = ["watching movies", "write code", "Listening to music"];
    this.hello = "Hi, Hello";


    this.dataService.getPosts().subscribe((posts) =>{
      this.posts = posts;
    });
  }
  onClickBtn() {
    this.name = "Naresh Ravi";
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = true;
  }

}
interface Address {
  street: string;
  city: string;
  state: string;
}
interface Posts{
  id: number,
  title: string,
  body: string,
  userId: number
}