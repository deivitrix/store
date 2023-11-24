import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public information() {
    const inform = [
      {
        producto: 'Pepperidge Farm Goldfish Crackers',
        peso: '187g / 6.6oz',
        precio: '3.89$',
        imagen: '../assets/img/goldfish.png',
      },
      {
        producto: 'Pepperidge Farm Goldfish Crackers',
        peso: '187g / 6.6oz',
        precio: '3.89$',
        imagen: '../assets/img/goldfish colores.png',
      },
      {
        producto: 'Pepperidge Farm Goldfish Crackers',
        peso: '187g / 6.6oz',
        precio: '3.89$',
        imagen: '../assets/img/goldfish_origin.png',
      },
      {
        producto: 'Pepperidge Farm Goldfish Crackers',
        peso: '187g / 6.6oz',
        precio: '3.89$',
        imagen: '../assets/img/caramelos.png',
      },
    ];
    return inform;
  }

  public imagenes_home() {
    const imagenes = [
      {
        nombre: 'DULCE',
        imagen: '../assets/img/dulces.png',
      },
      {
        nombre: 'SALADO',
        imagen: '../assets/img/salado.jpg',
      },
      {
        nombre: 'ASIA',
        imagen: '../assets/img/golosinasAsia.jpeg',
      },
      {
        nombre: 'BEBIDA',
        imagen: '../assets/img/bebidas.jpg',
      },
      {
        nombre: 'NUESTRAS BOX',
        imagen: '../assets/img/box.jpeg',
      },

      {
        nombre: 'ANTI-DESPERDICIO',
        imagen: '../assets/img/anti-depre.jpg',
      },
    ];
    return imagenes;
  }

  public marcas() {
    const marca_logo = [
      {
        nombre: 'Reesets',
        imagen: '../assets/img/Reeses.png',
      },
      {
        nombre: 'Kraft',
        imagen: '../assets/img/kraft.png',
      },
      {
        nombre: 'Cheetos',
        imagen: '../assets/img/cheetos_logo.png',
      },
      {
        nombre: 'Betty Crocker',
        imagen: '../assets/img/betty crocker.png',
      },
      {
        nombre: 'Hersheys',
        imagen: '../assets/img/Hershey.png',
      },
      {
        nombre: 'Quaker',
        imagen: '../assets/img/quaker.png',
      },
      {
        nombre: 'Takis',
        imagen: '../assets/img/Takis_logo.png',
      },
      {
        nombre: 'Aunt jemima',
        imagen: '../assets/img/aunt jemima.png',
      },
      {
        nombre: 'Oreo',
        imagen: '../assets/img/oreo.png',
      },
    ];
    return marca_logo;
  }

  public menu_option(){
    const menu=[
      {
        nombre:"NEW",
        nombrepagina:"new",
        color:"",
        colorletra:""
      },
      {
        nombre:"MEJORES VENTAS",
        nombrepagina:"ventas",
        color:"",
        colorletra:""
      },
      {
        nombre:"DULCE",
        nombrepagina:"dulce",
        color:"",
        colorletra:""
      },
      {
        nombre:"SALADO",
        nombrepagina:"salado",
        color:"",
        colorletra:""
      },
      {
        nombre:"BEBIDAS",
        nombrepagina:"bebidas",
        color:"",
        colorletra:""
      },
      {
        nombre:"HALLOWEEN",
        nombrepagina:"halloween",
        color:"#f77e7e",
        colorletra:"#f7f2f2"
      },
      {
        nombre:"BLACK FRIDAY",
        nombrepagina:"black",
        color:"#333131",
        colorletra:"#f7f2f2"
      },
      {
        nombre:"TRANKSGIVING",
        nombrepagina:"tranksgiving",
        color:"",
        colorletra:""
      },
      {
        nombre:"INSPIRACION",
        nombrepagina:"inspiracion",
        color:"",
        colorletra:""
      },
      {
        nombre:"NUESTRAS BOX",
        nombrepagina:"box",
        color:"",
        colorletra:""
      },
      {
        nombre:"OFERTAS",
        nombrepagina:"ofertas",
        color:"",
        colorletra:""
      },
      {
        nombre:"ASIA",
        nombrepagina:"asia",
        color:"",
        colorletra:""
      },

    ]

    return menu;
  }

  public productos_new(){
    const product=[
      {
        producto:"Candy Can Bebida con Gas Manzana Acida",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89 $",
        imagen: '../assets/img/candy.webp'
      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Cheddar",
        densidad:"187g / 6.6 oz",
        precio:"5.69 $",
        imagen: '../assets/img/goldfish.png'
      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Colores",
        densidad:"187g / 6.6 oz",
        precio:"5.69 $",
        imagen: '../assets/img/goldfish colores.png'
      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Original",
        densidad:"187g / 6.6 oz",
        precio:"5.69 $",
        imagen: '../assets/img/goldfish_origin.png'
      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Goldfish Parmesano",
        densidad:"187g / 6.6 oz",
        precio:"5.69 $",
        imagen: '../assets/img/goldfish_parmesan.webp'
      },
      {
        producto:"Qdol - Refresco Con Sabor A Uva - Pokemon",
        densidad:"187g / 6.6 oz",
        precio:"5.69 $",
        imagen: '../assets/img/soda_pokemon.webp'
      },
      {
        producto:"Soda Jones - Soda Americana Con Sabor A Uva",
        densidad:"355g / 12fl oz",
        precio:"2.89 $",
        imagen: '../assets/img/soda_jones_grape.webp'
      },
      {
        producto:"Komesan - Chips De Arroz Sabor Crema y Cebolla",
        densidad:"60g / 2.12 oz",
        precio:"3.49 $",
        imagen: '../assets/img/komesan.webp'
      },
      {
        producto:"Komesan - Chips De Arroz Sabor Ketchup - One",
        densidad:"60g / 2.12 oz",
        precio:"3.49 $",
        imagen: '../assets/img/komesan_ketchup.webp'
      },
      {
        producto:"Gumisan - Caramelo De Fruta Del Diablo - One",
        densidad:"180g / 6.35 oz",
        precio:"4.69 $",
        imagen: '../assets/img/komesan_one.webp'
      },


    ]
    return product;
  }

}
