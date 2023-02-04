import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formEl') singUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female', 'other'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'George';

    // this.singUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'heorhiipluhovui@gmail.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'Cookie',
    //   gender: 'male'
    // });

    this.singUpForm.form.patchValue({
      userData: {
        username: suggestedName,
        email: 'heorhiipluhovui@gmail.com'
      },
      secret: 'pet',
      questionAnswer: 'Chow-chow Cookie',
      gender: 'male'
    });
  }

  onSubmit(formEl: NgForm) {
    console.log(formEl);

    this.submitted = true;

    this.user.username = this.singUpForm.value.userData.username;
    this.user.email = this.singUpForm.value.userData.email;
    this.user.secretQuestion = this.singUpForm.value.secretQuession;
    this.user.questionAnswer = this.singUpForm.value.questionAnswer;
    this.user.gender = this.singUpForm.value.gender;

    this.singUpForm.reset();
  }
}
