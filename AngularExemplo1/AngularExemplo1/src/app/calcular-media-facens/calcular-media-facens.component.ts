import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media-facens',
  templateUrl: './calcular-media-facens.component.html',
  styleUrls: ['./calcular-media-facens.component.css']
})
export class CalcularMediaFacensComponent implements OnInit {

  //Média Final = (AC1 * 0,15) + (AC2 *0,30) + (AG * 0,10) + (AF * 0,45)

  ac1: any;
  ac2: any;
  ag: any;
  af: any;
  media: any;

  constructor() { }

  ngOnInit(): void {
  }

  calcularMedia() {
    this.media = ((this.ac1 * 0.15) + (this.ac2 * 0.3) + (this.ag * 0.10) + (this.af * 0.45));
  }



}
