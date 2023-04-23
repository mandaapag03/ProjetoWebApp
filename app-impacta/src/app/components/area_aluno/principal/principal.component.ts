import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit {
  constructor(private elemento: ElementRef) { }

  ngAfterViewInit(): void {
    this.elemento.nativeElement.ownerDocument.body.style.backgroundColor = '#FFFFFF';
    this.elemento.nativeElement.ownerDocument.body.style.backgroundImage = 'none';
  }
}
