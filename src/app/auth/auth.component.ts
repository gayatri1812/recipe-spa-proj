import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './auth.component.html',
    selector: 'app-auth'
})

export class AuthComponent {
    public isLoginMode = true;

    constructor(private authService: AuthService) {}

    public onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    public onSubmit(form: NgForm) {
        if (!form.valid) { return; }
        const email = form.value.email;
        const password = form.value.password;
        if (this.isLoginMode) {

        } else {

        this.authService.signup(email, password).subscribe(resData => {

        }, error => {
            console.log(error);
        });
        form.reset();
    }
}
}
