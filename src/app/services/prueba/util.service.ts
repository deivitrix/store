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

}
