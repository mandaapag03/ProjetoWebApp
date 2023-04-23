import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  constructor(private elemento: ElementRef) { }

  ngAfterViewInit(): void {
    this.elemento.nativeElement.ownerDocument.body.style.backgroundColor = '#17161C';
    this.elemento.nativeElement.ownerDocument.body.style.backgroundImage = 'url("assets/images/fundo-login.jpg")';
    this.elemento.nativeElement.ownerDocument.body.style.backgroundRepeat = 'no-repeat';
    this.elemento.nativeElement.ownerDocument.body.style.backgroundSize = '100%';
  }
} 
