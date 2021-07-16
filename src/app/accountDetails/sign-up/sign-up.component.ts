import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupSuccess: boolean = true;
  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{                           
      this.signupSuccess = false;
  }, 3000);
  }

}
