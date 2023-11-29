import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  // private producto$= new Subject<string>();
  private producSubject = new Subject<any | null>();

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
        precio:"1.89",
        imagen: 'https://www.myamericanmarket.com/media/catalog/product/cache/e14a284ad83acfa28068f240695baba3/c/a/candy-can-sour-apple.jpg',
        stock:0,
        fecha:"31/04/25",
        marca:"Candy Can",
        contador:1,
        resenia:"Definitivamente querrás probar la bebida con gas de manzana ácida que encontramos en Candy Can. Al principio, descubrirás la lata de color verde que es muy chula. Luego la abrirás y la disfrutarás. Imagina un refresco con un delicioso sabor a manzana ácida en su justa medida. ¡Pues eso es lo que ha hecho Candy Can y es absolutamente delicioso! Además, esta bebida no contiene azúcar. Una bebida perfecta para un momento refrescante y placentero.",
        ingredientes:"Agua gaseosa, regulador de acidez E330, aroma natural, edulcorantes E950-E955, antioxidante E300 (vitamina C), concentrado de cártamo, colorante E141.",
        declaracion:"(para 100ml): valor energético 0Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0g."

      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Cheddar",
        densidad:"187g / 6.6 oz",
        precio:"5.69",
        imagen: '../assets/img/goldfish.png',
        stock:100,
        fecha:"31/04/25",
        marca:"Pepperidge Farm",
        contador:1,
        resenia:"¡Tírate al agua con estos crujientes pececitos Pepperidge Farm Goldfish con un rico sabor a cheddar! Perfectas para los cheese lovers, estas simpáticas galletas alegrarán todos tus aperitivos y agradarán a tus invitados. Estos pequeños goldfish también estarán encantados de nadar en tus ricas sopas para agregarles saborcito a queso y crunchy.",
        ingredientes:"Harina de trigo** enriquezida (harina, hierro reducido, vitaminas B3-B1-B2-B9), queso cheddar ([leche de cultivo, sal, enzimas], achiote), aceites vegetales (colza**, girasol y/o soja**), sal, 2% o menos de: levadura, azúcar, extracto de levadura autolizada, paprika, especies, apio, cebolla en polvo, reguladores de acidez E341i-E500ii. Contiene trigo**, leche. **Prodotto a partire da OGM.",
        declaracion:"(para 100g): valor energético 467Kcal, grasas 16.7g (de las cuales saturadas 3.3g), hidratos de carbono 66.7g (de los cuales azúcares 0g), proteínas 10g, sal 2.1g."
      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Colores",
        densidad:"187g / 6.6 oz",
        precio:"5.69",
        imagen: '../assets/img/goldfish colores.png',
        stock:10,
        marca:"Pepperidge Farm",
        fecha:"31/04/25",
        contador:1,
        resenia:"¡Enamórate de estos pequeños peces salados de la famosa marca americana Pepperidge Farm Goldfish! Disponibles en 3 colores, rosa, verde y amarillo, estos crackers con forma de pez revelan un sutil sabor a cheddar. Ya nos imaginamos a estos simpáticos pececitos poniéndole color a tu mesa de aperitivo y haciendo que todos tus amigos quieran comérselos.",
        ingredientes:"Harina de trigo** enriquezida (harina, hierro reducido, vitaminas B3-B1-B2-B9), queso cheddar ([leche de cultivo, sal, enzimas], achiote), aceites vegetales (colza**, girasol y/o soja**), sal, 2% o menos de: levadura, azúcar, extracto de levadura autolizada, especies, apio, cebolla en polvo, reguladores de acidez E341i-E500ii, colorantes E162-E160c-E100ii, zumo concentrado de sandía para el color. Contiene trigo**, leche. **Prodotto a partire da OGM.",
        declaracion:"(para 100g): valor energético 467Kcal, grasas 16.7g (de las cuales saturadas 3.3g), hidratos de carbono 66.7g (de los cuales azúcares 0g), proteínas 10g, sal 2g."
      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Original",
        densidad:"187g / 6.6 oz",
        precio:"5.69",
        imagen: '../assets/img/goldfish_origin.png',
        stock:0,
        marca:"Pepperidge Farm",
        fecha:"31/04/25",
        contador:1,
        resenia:"Famosos desde hace décadas en Estados Unidos, descubre las galletitas saladas de aperitivo con forma de pez, ¡so cute! Estas galletitas seguro que serán un éxito para todos tus invitados, incluyendo los niños a los que les encantará su forma funny. ¡Es el snack americano perfecto para compartir en tus fiestas!",
        ingredientes:"Harina de trigo** sin blanquear enriquezida (harina, hierro reducido, vitaminas B3-B1-B2-B9), aceites vegetales (colza**, girasol y/o soja**), sal, 2% o menos de: levadura, agente leudante E503ii, reguladores de acidez E500ii-E341i, leche desnatada, azúcar, especies, cebollas deshidratadas. **Prodotto a partire da OGM.",
        declaracion:"(para 100g): valor energético 500Kcal, grasas 20g (de las cuales saturadas 1.7g), hidratos de carbono 66.7g (de los cuales azúcares 3.3g), proteínas 10g, sal 1.9g."
      },
      {
        producto:"Pepperidge Farm Goldfish Crackers Goldfish Parmesano",
        densidad:"187g / 6.6 oz",
        precio:"5.69",
        imagen: '../assets/img/goldfish_parmesan.webp',
        stock:10,
        marca:"Pepperidge Farm",
        fecha:"31/04/25",
        contador:1,
        resenia:"Los famosos Goldfish Pepperidge Farm son, sin duda, el snack salado más popular de Estados Unidos. Con forma de pececitos sonrientes, a todos los estadounidenses les encantan. Descubre una versión de estas pequeñas galletas de aperitivo con un queso mundialmente famoso, el parmesano. Ideales para un aperitivo con los amigos o la familia, ¡ya han conquistado el paladar de millones de golosos! ¿Por qué tú no?",
        ingredientes:"harina de trigo, aceite vegetal (aceite de canola, girasol, soja), queso parmesano (leche, cultivos, sal, enzimas), sal, levadura, cebolla en polvo, azúcar, mantequilla (leche), extracto de levadura, agente leudante E500",
        declaracion:"(para 100g): valor energético 467Kcal, grasas 16.7g (de las cuales saturadas 3.3g), hidratos de carbono 66.7g (de los cuales azúcares 0g), proteínas 10g, sal 5.4g."
      },
      {
        producto:"Qdol - Refresco Con Sabor A Uva - Pokemon",
        densidad:"187g / 6.6 oz",
        precio:"5.69",
        imagen: '../assets/img/soda_pokemon.webp',
        stock:10,
        marca:"odol",
        fecha:"31/04/25",
        contador:1,
        resenia:"El fantástico mundo de Pokémon te espera con este refresco afrutado con sabor a uva. Te encantará encontrarte con Psyduck, que seguramente te ha hecho reír más de una vez con sus constantes dolores de cabeza. El Pokémon de Misty seguirá sorprendiéndote con este refresco QDol. Deja que la imaginación despierte mientras saboreas esta bebida refrescante y burbujeante. ¡Y encuentra a todos tus Pokémon favoritos en nuestra colección completa de sodas QDol!",
        ingredientes:"Agua, jarabe de fructosa, dióxido de carbono, regulador de acidez E330, aroma alimentario, regulador de acidez E331, conservador E202, sacarosa.",
        declaracion:"(para 100ml): valor energético 43Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 10.6g (de los cuales azúcares 10.6g), proteínas 0g, sal 0g."
      },
      {
        producto:"Soda Jones - Soda Americana Con Sabor A Uva",
        densidad:"355g / 12fl oz",
        precio:"2.89",
        imagen: '../assets/img/soda_jones_grape.webp',
        stock:10,
        fecha:"31/04/25",
        contador:1,
        resenia:"Sumérgete en el refrescante universo de Soda Jones sabor Uva, una experiencia gustativa única que te transportará a un paraíso dulce y burbujeante. Esta bebida estadounidense es más que una simple soda; es una explosión de sabores. Cada sorbo te llevará en un viaje sensorial, despertando tus papilas gustativas con la dulzura natural de la uva. Déjate cautivar por esta bebida perfecta para días soleados, fiestas con amigos o simplemente para un momento de puro placer. ¡Y psst! ¡Recuerda mirar la tapa de tu botella...Ahí encontrarás un pequeño mensaje que es una verdadera joya de sabiduría.",
        ingredientes:"Agua carbonatada, azúcar de caña, aromas naturales y artificiales, regulador de la acidez E296, regulador de la acidez E330, conservador E211, conservador E202, colorante E129*, colorante E133. *Puede tener efectos adversos sobre la actividad y la atención de los niños.",
        declaracion:"(para 100g): valor energético 39Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 9.6g (de los cuales azúcares 9.3g), proteínas 0g, sal 0g."
      },
      {
        producto:"Komesan - Chips De Arroz Sabor Crema y Cebolla",
        densidad:"60g / 2.12 oz",
        precio:"3.49",
        imagen: '../assets/img/komesan.webp',
        stock:10,
        marca:"Jones",
        fecha:"31/04/25",
        contador:1,
        resenia:"Déjate llevar por el cautivador universo de Naruto Chips de Arroz con Sabor a Crema y Cebolla de Komesan. Cierra los ojos e imagínate en los calles de Konoha, junto a Naruto y Kakashi, listos para enfrentar lo desconocido. Aunque no tengas el espíritu valiente y decidido del joven ninja Naruto, igual tienes el derecho de deleitarte con estas deliciosas chips.",
        ingredientes:"arroz integral 76%, aceite de oliva 16%, aromas naturales, cebolla 16%, suero de leche en polvo, nata 10%, sal, estabilizador E508, dextrosa, suero de mantequilla en polvo, maltodextrina de patata, maltodextrina de maíz, leche desnatada en polvo.",
        declaracion:"(para 100g): valor energético 451Kcal, grasas 13g (de las cuales saturadas 2.3g), hidratos de carbono 74g (de los cuales azúcares 1g), proteínas 8g, sal 1.8g."
      },
      {
        producto:"Komesan - Chips De Arroz Sabor Ketchup - One",
        densidad:"60g / 2.12 oz",
        precio:"3.49",
        imagen: '../assets/img/komesan_ketchup.webp',
        stock:10,
        marca:"Komesan",
        fecha:"31/04/25",
        contador:1,
        resenia:"Es el momento de satisfacer tus antojos y sucumbir al placer irresistible de estas papas fritas de arroz inflado con ketchup. Este snack salado está pensado para compartir durante una noche de One Piece (ya sea el anime o la serie de Netflix) en familia, o disfrutarlo sólo, durante un momento relax. ¡Encontrarás a uno de los piratas más temibles del universo de One Piece en tu paquete... Es Zoro, por supuesto!",
        ingredientes:"arroz integral 77%, aceite de oliva 16%, aromas naturales, azúcar, suero de leche en polvo, sal, tomate 5%, maltodextrina de patata, regulador de acidez E330, colorante E160c, antioxidante E392. Contiene apio y mostaza.",
        declaracion:"(para 100g): valor energético 460Kcal, grasas 17g (de las cuales saturadas 1.5g), hidratos de carbono 68g (de los cuales azúcares 2.4g), proteínas 8g, sal 2.5g."
      },
      {
        producto:"Gumisan - Caramelo De Fruta Del Diablo - One",
        densidad:"180g / 6.35 oz",
        precio:"4.69",
        imagen: '../assets/img/komesan_one.webp',
        stock:10,
        marca:"Komesan",
        fecha:"31/04/25",
        contador:1,
        resenia:"¡Luffy te presenta una versión de caramelo de la fruta del diablo! ¡Por suerte para ti! ¡Estos dulces no tienen los mismos efectos que la fruta del diablo! ¡Así que no te hundirás como un yunque en el agua! ¡A menos que devores todo el paquete de una vez ;) !",
        ingredientes:"jarabe de glucosa, azúcar, gelatina de vacuno, agua, regulador de acidez E330, aroma natural: uva, boniato, manzana, rábano, cereza, colorantes E100-E133-E153, agente de recubrimiento E903",
        declaracion:"Valores nutricionales (para 100g): valor energético 330Kcal, grasas 0.1g (de las cuales saturadas 0.1g), hidratos de carbono 74g (de los cuales azúcares 45g), proteínas 6.6g, sal 0.1g."
      },
      {
        producto:"Candy Can Bebida Con Gas Algodón De Azúcar",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy_zero.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Te conseguimos una bebida efervescente de algodón de azúcar y es Candy Can quién te la brinda. En primer lugar, la lata de colores pasteles es chulísima. En segundo lugar, ábrela y enjoy. Imagina un refresco que sabe a algodón de azúcar. ¡Es posible gracias a Candy Can y es absolutamente única! Y el plus es que esta bebida no contiene azúcar. En resumen, te sentirás como si estuvieras bebiendo algodón de azúcar, ¡pero sin azúcar! ¿Te sientes tentado?",
        ingredientes:"Agua gaseosa, regulador de acidez E330, espesante E414, emulsionante E445, aroma natural, edulcorantes E950-E955, antioxidante E300 (vitamina C), colorante E141.",
        declaracion:"(para 100ml): valor energético 1Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0.1g."
      },
      {
        producto:"Candy Can Bebida Con Gas De Marshmallow",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-marshmallow.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Te conseguimos una bebida efervescente de algodón de azúcar y es Candy Can quién te la brinda. En primer lugar, la lata de colores pasteles es chulísima. En segundo lugar, ábrela y enjoy. Imagina un refresco que sabe a algodón de azúcar. ¡Es posible gracias a Candy Can y es absolutamente única! Y el plus es que esta bebida no contiene azúcar. En resumen, te sentirás como si estuvieras bebiendo algodón de azúcar, ¡pero sin azúcar! ¿Te sientes tentado?",
        ingredientes:"Agua gaseosa, regulador de acidez E330, espesante E414, emulsionante E445, aroma natural, edulcorantes E950-E955, antioxidante E300 (vitamina C), colorante E141.",
        declaracion:"(para 100ml): valor energético 1Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0.1g."
      },
      {
        producto:"Candy Can Bebida Con Gas Bubble Gum",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-can-bubble-gum.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"¿Te gusta el sabor del chicle? ¡Hemos encontrado un refresco con Bubble Gum y es Candy Can que lo hace! En primer lugar, la lata, con su colorido diseño, está súper bonita. Y cuando la abras, solo te quedará disfrutar de su delicioso sabor. Ahora, imagina un refresco que sabe a chicle. ¡Es posible con Candy Can y es absolutamente increíble! Además, esta bebida no contiene azúcar. En resumen, ¡te sentirás como si estuvieras bebiendo goma de mascar! ¿Te sientes tentado?",
        ingredientes:"Agua gaseosa, reguladores de acidez E330-E331, zanahoria (colorante), aroma, almidón modificado, edulcorantes E950-E955.",
        declaracion:"(para 100ml): valor energético 3Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0.1g."
      },
      {
        producto:"Candy Can Bebida Con Gas Rocket Ice Lolly Sabor Frutas",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-can-rocket-ice-lolly.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Hemos descubierto la bebida con gas Rocket Ice Lolly con sabor a frutas para ti, de Candy Can. Esta genial lata tiene el mismo diseño que los famosos sorbetes con forma de cohetes y sabor a fruta. ¡Apenas la puebres, te encantará! ¡Imagina un refresco con el auténtico sabor de los sorbetes cohetes! ¡Es posible con Candy Can y es absolutamente único! Además, esta bebida no contiene azúcar. En resumen, te sentirás como si estuvieras bebiendo un sorbete de frutas, ¡increíble!",
        ingredientes:"Agua gaseosa, regulador de acidez E330, aroma natural de naranja, aromas naturales, concentrado de cártamo, colorante E163, edulcorantes E950-E955.",
        declaracion:"(para 100ml): valor energético 0Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0g."
      },
      {
        producto:"Candy Can Bebida Con Gas Torta De Aniversario",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-can-birthday-cake_1.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Hemos encontrado una BEBIDA CON GAS versión tartas de cumpleaños y es de Candy Can. Comenzamos con la colorida lata que te hace querer beberla, para luego abrirla y disfrutarla. Imagínate un refresco que sabe como una gran tarta de cumpleaños... ¡Pues es posible con Candy Can y es absolutamente único! Además, esta bebida no contiene azúcar. En resumen, ¡te sentirás como si estuvieras bebiendo un pastel! Sí, es excepcional y te recomendamos que lo pruebes, ¡te encantará!",
        ingredientes:"Agua gaseosa, regulador de acidez E330, zumo concentrado de fresa, aroma, edulcorantes E950-E955, zanahoria (colorante).",
        declaracion:"(para 100ml): valor energético 0Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0g."
      },



    ]
    return product;
  }

  public porducto_relacion(){
    const relacion=[
      {
        producto:"Candy Can Bebida Con Gas Algodón De Azúcar",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy_zero.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Te conseguimos una bebida efervescente de algodón de azúcar y es Candy Can quién te la brinda. En primer lugar, la lata de colores pasteles es chulísima. En segundo lugar, ábrela y enjoy. Imagina un refresco que sabe a algodón de azúcar. ¡Es posible gracias a Candy Can y es absolutamente única! Y el plus es que esta bebida no contiene azúcar. En resumen, te sentirás como si estuvieras bebiendo algodón de azúcar, ¡pero sin azúcar! ¿Te sientes tentado?",
        ingredientes:"Agua gaseosa, regulador de acidez E330, espesante E414, emulsionante E445, aroma natural, edulcorantes E950-E955, antioxidante E300 (vitamina C), colorante E141.",
        declaracion:"(para 100ml): valor energético 1Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0.1g."
      },
      {
        producto:"Candy Can Bebida Con Gas De Marshmallow",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-marshmallow.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Te conseguimos una bebida efervescente de algodón de azúcar y es Candy Can quién te la brinda. En primer lugar, la lata de colores pasteles es chulísima. En segundo lugar, ábrela y enjoy. Imagina un refresco que sabe a algodón de azúcar. ¡Es posible gracias a Candy Can y es absolutamente única! Y el plus es que esta bebida no contiene azúcar. En resumen, te sentirás como si estuvieras bebiendo algodón de azúcar, ¡pero sin azúcar! ¿Te sientes tentado?",
        ingredientes:"Agua gaseosa, regulador de acidez E330, espesante E414, emulsionante E445, aroma natural, edulcorantes E950-E955, antioxidante E300 (vitamina C), colorante E141.",
        declaracion:"(para 100ml): valor energético 1Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0.1g."
      },
      {
        producto:"Candy Can Bebida Con Gas Bubble Gum",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-can-bubble-gum.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"¿Te gusta el sabor del chicle? ¡Hemos encontrado un refresco con Bubble Gum y es Candy Can que lo hace! En primer lugar, la lata, con su colorido diseño, está súper bonita. Y cuando la abras, solo te quedará disfrutar de su delicioso sabor. Ahora, imagina un refresco que sabe a chicle. ¡Es posible con Candy Can y es absolutamente increíble! Además, esta bebida no contiene azúcar. En resumen, ¡te sentirás como si estuvieras bebiendo goma de mascar! ¿Te sientes tentado?",
        ingredientes:"Agua gaseosa, reguladores de acidez E330-E331, zanahoria (colorante), aroma, almidón modificado, edulcorantes E950-E955.",
        declaracion:"(para 100ml): valor energético 3Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0.1g."
      },
      {
        producto:"Candy Can Bebida Con Gas Rocket Ice Lolly Sabor Frutas",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-can-rocket-ice-lolly.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Hemos descubierto la bebida con gas Rocket Ice Lolly con sabor a frutas para ti, de Candy Can. Esta genial lata tiene el mismo diseño que los famosos sorbetes con forma de cohetes y sabor a fruta. ¡Apenas la puebres, te encantará! ¡Imagina un refresco con el auténtico sabor de los sorbetes cohetes! ¡Es posible con Candy Can y es absolutamente único! Además, esta bebida no contiene azúcar. En resumen, te sentirás como si estuvieras bebiendo un sorbete de frutas, ¡increíble!",
        ingredientes:"Agua gaseosa, regulador de acidez E330, aroma natural de naranja, aromas naturales, concentrado de cártamo, colorante E163, edulcorantes E950-E955.",
        declaracion:"(para 100ml): valor energético 0Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0g."
      },
      {
        producto:"Candy Can Bebida Con Gas Torta De Aniversario",
        densidad:"330ml / 11.16 fl oz",
        precio:"1.89",
        imagen: '../assets/img/candy-can-birthday-cake_1.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"Hemos encontrado una BEBIDA CON GAS versión tartas de cumpleaños y es de Candy Can. Comenzamos con la colorida lata que te hace querer beberla, para luego abrirla y disfrutarla. Imagínate un refresco que sabe como una gran tarta de cumpleaños... ¡Pues es posible con Candy Can y es absolutamente único! Además, esta bebida no contiene azúcar. En resumen, ¡te sentirás como si estuvieras bebiendo un pastel! Sí, es excepcional y te recomendamos que lo pruebes, ¡te encantará!",
        ingredientes:"Agua gaseosa, regulador de acidez E330, zumo concentrado de fresa, aroma, edulcorantes E950-E955, zanahoria (colorante).",
        declaracion:"(para 100ml): valor energético 0Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 0g (de los cuales azúcares 0g), proteínas 0g, sal 0g."
      },


    ];

    return relacion;

  }

  public producto_relacion1(){
    const relacion=[
      {
        producto:"Libby's Pumpkin Relleno De Calabaza",
        densidad:"425g / 15oz",
        precio:"6,09",
        imagen: '../assets/img/libbys-pumpkin-pie-filling-1--pure-425g-15oz-1.webp',
        stock:10,
        marca:"Libby's",
        fecha:"31/04/25",
        contador:1,
        resenia:"La tarta de calabaza a la americana es un gran clásico de la repostería estadounidense y sobre todo un delicioso manjar típico de las fiestas familiares como el día de Acción de Gracias o Navidad. Con este puré de calabaza de Libbys podrás preparar un pastel de calabaza sin apenas esfuerzo. Además este relleno para tarta está hecho 100% de pura calabaza, conservando su alto contenido en vitamina C y E, y potasio ¡Prepara un delicioso Pumpkin Pie con el relleno favorito de Estados Unidos, Libby's!",
        ingredientes:"Calabaza (100%).",
        declaracion:"(para 100ml): valor energético 41Kcal, grasas 0.4g (de las cuales saturadas 0g), hidratos de carbono 8.2g (de los cuales azúcares 4.1g), proteínas 0.8g, sal 0g."
      },
      {
        producto:"General Mills Cereales Reese's Puffs",
        densidad:"326g / 11.5oz",
        precio:"2.06",
        imagen: '../assets/img/general-mills-reeses-puffs-326g-11.5oz-1.webp',
        stock:10,
        marca:"Reese's",
        fecha:"31/04/25",
        contador:1,
        resenia:"Las Reese's son la combinación perfecta de chocolate y crema de cacahuete. ¿Los cocías verdad? Pues ahora por fin las tienes en forma de cereales. Y todo Gracias a General Mills que te trae estos deliciosos cereales americanos Reese's Puffs para empezar el día disfrutando el sabor de tus chocolatinas preferidas. Todo un clásico en los desayunos de Estados",
        ingredientes:"maíz** a semillas enteras, azúcar, mantequilla de cacahuetes (cacahuetes, azúcar, emulsionante E471, aceite de cacahuetes, sal, melaza, almidón de maíz**, dextrosa, sémola de maíz**, sirope de maíz**, aceites de colza** y/o de girasol, sal, cacao, colorante E150c, estabilizante E339iii, aromas naturales y artificiales, antioxidante E307 (vitamina E) añadido para para preservar el frescor. Vitaminas y minerales : Fosfato tricálcico, Carbonato de calcio, zinc y hierro (minerales), vitamina C, vitamina B3, vitamina B6, vitamina B2, vitamina B1, vitamina A, vitamina B9, vitamina B12, vitamina D3 **Prodotto a partire da OGM.",
        declaracion:"(para 100ml): valor energético 414Kcal, grasas 10.3g (de las cuales saturadas 1.7g), hidratos de carbono 75.9g (de los cuales azúcares 34.5g), proteínas 6.9g, sal 1.4g."
      },
      {
        producto:"Harry Potter Autobús Noctámbulo Caja De Caramelos",
        densidad:"112g / 3.95oz",
        precio:"24.40",
        imagen: '../assets/img/harry-potter-knight-bus-tin-112g-3.95oz-2.webp',
        stock:10,
        marca:"Jelly Belly",
        fecha:"31/04/25",
        contador:1,
        resenia:"Esta es una caja de caramelos que va a poner celoso a más de uno en tu próxima fiesta Harry Potter: ¡un Autobús Noctámbulo lleno de caramelos de gelatina! Dentro encontrarás cinco caramelos de diferentes formas, colores y gustos: una botella de poción, Hedwige, el Sombrero Seleccionador, la cicatriz en forma de rayo y el símbolo de las Reliquias de la Muerte. Demasiado yummy... br/>Una vez acabados los caramelos, ¡el autobús morado de tres plantas se convierte en hucha! ¡Una caja de caramelos Harry Potter ideal si quieres complacer a un fan de la saga de JK Rowling!",
        ingredientes:"Azúcar, sirope de glucosa, almidón de patatas modificado, agua, reguladores de acidez E296-E330, antioxidante E325, aromas, concentrado de frutas y legumbres (zanahoria, espirulina, manzana, grosella negra, calabaza), glaseado (agente de glaseado E903, aceite de colza, aceite de nuez de coco), colorante E100.",
        declaracion:"(para 100ml): valor energético 340Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 85g (de los cuales azúcares 60g), proteínas 0g, sal 0.4g."
      },
      {
        producto:"Harry Potter Casas De Hogwarts Caja De Caramelos",
        densidad:"28g / 1oz",
        precio:"7.99",
        imagen: '../assets/img/harry-potter-houses-of-hogwarts-crests-candy-tin-28g-1oz-1.webp',
        stock:10,
        marca:"Jelly Belly",
        fecha:"31/04/25",
        contador:1,
        resenia:"My American Market asume el papel de sombrero seleccionador y te informa en qué Casa de Hogwarts vas a estudiar gracias a estas cajas de caramelos Jelly Belly Beans con la imagen de las Casas de la famosa escuela de magia. Estos blasones metálicos contienen deliciosos caramelos americanos Jelly Belly: Gryffindor contiene caramelos de cereza, los de Ravenclaw tienen sabor a arándano, Hufflepuff de limón y Slytherin de manzana verde. Caja de caramelos vendida por unidad y de manera aleatoria.",
        ingredientes:"Azúcar, sirope de glucosa, almidón de maíz modificado, zumo concentrado de manzana, regulador de acidez E330, agentes de glaseado E901-E903-E904, espirulina, aroma, colorantes E100, puré de arándanos, espirulina, aroma, puré de limón, concentrado de frutas y legumbres (manzana, calabaza, grosella negra, zanahoria), zumo concentrado de cereza.",
        declaracion:"(para 100ml): valor energético 364Kcal, grasas 0g (de las cuales saturadas 0g), hidratos de carbono 91g (de los cuales azúcares 61g), proteínas 0g, sal 0g."
      },
      {
        producto:"Eggnog Tradicional Ponche De Crema",
        densidad:"1L / 34 fl oz",
        precio:"1.89",
        imagen: '../assets/img/traditional-eggnog-1l-34-fl-oz-1.webp',
        stock:10,
        marca:"Candy Can",
        fecha:"31/04/25",
        contador:1,
        resenia:"El Egg Nog es una tradición en las fiestas de Fin de año. Por suerte, Luxlait está aquí para mantener vivas nuestras tradiciones. Está aromatizado con vainilla y extracto de ron (pero don’t worry, es una bebida sin alcohol). ¡El ponche puede degustarse frío y en cualquier momento del día!",
        ingredientes:"Leche semidesnatada, crema (leche), azúcar, aromas naturales, fibra (psyllium), almidón modificado, estabilizantes E466-E418, colorante E160a, sal.",
        declaracion:"(para 100ml): valor energético 104Kcal, grasas 4g (de las cuales saturadas 2.8g), hidratos de carbono 13.6g (de los cuales azúcares 12.4g), proteínas 3.2g, sal 0.2g."
      },


    ];

    return relacion;

  }

  //obtener el producto

  // setproductoSeleccionado(nombreProducto:any)
  // {
  //   this.producto$.next(nombreProducto);
  // }

  // getproductoSeleccionado():Observable<string>{

  //   return this.producto$.asObservable();

  // }

  // busqueda

  busqueda_produc(prod:any)
  {
    const aray=this.productos_new();
    return aray.find(x=>x.producto==prod);
  }

  get product$() { return this.producSubject.asObservable(); }
  setProduct(product: any){ this.producSubject.next(product);}








}
