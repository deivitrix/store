import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-carrosel-component',
  templateUrl: './carrosel-component.component.html',
  styleUrls: ['./carrosel-component.component.css']
})
export class CarroselComponentComponent implements OnInit, AfterViewInit {

  @ViewChild('sliderContainer') // para saber el elementos que este nombrado
  sliderContainer!:ElementRef;

  product:any[]=[];

  slideContainerWidth=0; //el ancho del container
  slideWidth=0;
  elementsToShow=5;
  sliderWidth=0;

  //margen
  sliderMarginLeft=0;

  @HostListener('window:resize',['$event'])
  onScreenResize() // escuchar el ancho de la pantalla
  {
  this.setUpSlide();
  }

  ngOnInit(): void {
    this.getProducto();
  }

  constructor(
    private _utilService:UtilService
  ){

  }

  ngAfterViewInit(): void {

    this.setUpSlide();
  }

  setUpSlide() // para poder saber el tamaño del container y los espacio que contiene cada uno de los elementos
  {
    if(window.innerWidth<500) // para poner los contenedores
    this.elementsToShow=1;
  else if(window.innerWidth<700)
   this.elementsToShow=2
   else if(window.innerWidth<900)
   this.elementsToShow=3
  else if(window.innerWidth<1300)
    this.elementsToShow=4
  else
  this.elementsToShow=5

   let container=this.sliderContainer.nativeElement as HTMLElement;

    this.slideContainerWidth=container.clientWidth // espacio del container
    this.slideWidth=this.slideContainerWidth/this.elementsToShow; // separar para cuantos elementos
    this.sliderWidth=this.slideWidth * 5; // espacio que se requiere para esos elementos
  //  console.log(this.sliderWidth);





  }

  getProducto(){
    this.product=this._utilService.information();
    // console.log(this.product);
  }

  prev(){
    if(this.sliderMarginLeft==0)
    {
      return
    }
    this.sliderMarginLeft =this.sliderMarginLeft+this.slideWidth;
    // console.log(this.sliderMarginLeft);
  }
  next(){

    const temp=this.product.length-this.elementsToShow;
    const temp1=-(temp*this.slideWidth);
    console.log(temp1);
    console.log(this.sliderMarginLeft);
    if(this.sliderMarginLeft<=temp1){
        return
    }
    this.sliderMarginLeft =this.sliderMarginLeft-this.slideWidth;



  }

}
