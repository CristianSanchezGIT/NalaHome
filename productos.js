const productosData = [
  {
    "nombre": "Refrigerador",
    "descripcion": "Refrigerador de alta eficiencia energética con diseño moderno",
    "precio": "800",
    "medida": "1cm x 1cm",
    "porcentajeDescuento": 20,
    "categoria": "Electrodomésticos",
    "imagenes": [
      { "name": "refrigerador", "url": "./imagenes/productos/refrigerador.jpg" },
      { "name": "refrigerador-alt", "url": "./imagenes/productos/rosas.jpg" }
    ]
  },
  {
    "nombre": "Televisor 4K",
    "descripcion": "Televisor LED 4K de 55 pulgadas con sonido envolvente",
    "precio": "600",
    "medida": "1cm x 1cm",
    "porcentajeDescuento": 15,
    "categoria": "Tecnología",
    "imagenes": [
      { "name": "televisor", "url": "./imagenes/productos/televisor.jpg" },
      { "name": "televisor-alt", "url": "./imagenes/productos/auriculares.jpg" }
    ]
  },
  {
    "nombre": "Vela Aromática",
    "descripcion": "Vela aromática de lavanda con esencia natural",
    "precio": "15",
    "medida": "1cm x 1cm",
    "porcentajeDescuento": 0,
    "categoria": "Velas",
    "imagenes": [
      { "name": "vela", "url": "./imagenes/productos/vela.jpg" }
    ]
  },
  {
    "nombre": "Licuadora",
    "descripcion": "Licuadora profesional de 1000W con múltiples velocidades",
    "precio": "120",
    "medida": "1cm x 1cm",
    "porcentajeDescuento": 20,
    "categoria": "Electrodomésticos",
    "imagenes": [
      { "name": "licuadora", "url": "./imagenes/productos/licuadora.jpg" }
    ]
  },
  {
    "nombre": "Auriculares Inalámbricos",
    "descripcion": "Auriculares Bluetooth con cancelación de ruido activa",
    "precio": "150",
    "medida": "1cm x 1cm",
    "porcentajeDescuento": 25,
    "categoria": "Tecnología",
    "imagenes": [
      { "name": "auriculares", "url": "./imagenes/productos/auriculares.jpg" }
    ]
  },
  {
    "nombre": "Vela Perfumada",
    "descripcion": "Vela de vainilla con esencia natural de larga duración",
    "precio": "20",
    "medida": "1cm x 1cm",
    "porcentajeDescuento": 0,
    "categoria": "Velas",
    "imagenes": [
      { "name": "vela-perfumada", "url": "./imagenes/productos/vela-perfumada.jpg" }
    ]
  },
  /*FLORES Y DETALLES*/
  {
    "nombre": "Rosa Eterna",
    "descripcion": "🌹✨ Rosa Eterna ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por una rosa eterna de textura aterciopelada y color vibrante que conserva su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "15000",
    "medida": "20cm",
    "porcentajeDescuento": 40,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "rosa-eterna",
        "url": "./imagenes/productos/flores y detalles/rosa-eterna.jpeg"
      },
      {
        "name": "rosa-eterna2",
        "url": "./imagenes/productos/flores y detalles/rosa-eterna2.jpeg"
      }
    ]
  },
  {
    "nombre": "Matera Floral Decorativa",
    "descripcion": "🪴🌸 Matera con Arreglo Floral Eterno ✨\nDiseño decorativo listo para embellecer cualquier espacio del hogar u oficina. Incluye una base tipo matera con una armoniosa combinación de flores y follaje eterno que no requieren riego ni luz directa. El detalle ideal para obsequiar naturaleza y armonía permanente. 🌿🌷",
    "precio": "20000",
    "medida": "15cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "matera-floral-decorativa",
        "url": "./imagenes/productos/flores y detalles/matera-floral-decorativa.jpeg"
      },
      {
        "name": "matera-floral-decorativa2",
        "url": "./imagenes/productos/flores y detalles/matera-floral-decorativa2.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 3 Girasoles",
    "descripcion": "🌻 Ramo de 3 Girasoles Eternos ✨\nUn arreglo radiante y alegre que combina la vitalidad de girasoles eternos elaborados a mano con la ternura de un adorable peluche de pingüino. Diseñado para conservar su belleza intacta por siempre, decorado con envoltura de lujo y lazo satinado. El detalle perfecto para graduaciones, cumpleaños o para iluminar el día de alguien especial. 💛",
    "precio": "30000",
    "medida": "20cm ",
    "porcentajeDescuento": 40,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-girasoles",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles.jpeg"
      },
      {
        "name": "ramo-girasoles2",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles2.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 6 Girasoles",
    "descripcion": "🌻 Ramo de 6 Girasoles Eternos ✨\nUn arreglo radiante y alegre que combina la vitalidad de girasoles eternos elaborados a mano con la ternura de un adorable peluche de pingüino. Diseñado para conservar su belleza intacta por siempre, decorado con envoltura de lujo y lazo satinado. El detalle perfecto para graduaciones, cumpleaños o para iluminar el día de alguien especial. 💛",
    "precio": "50000",
    "medida": "30cm ",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-girasoles",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles.jpeg"
      },
      {
        "name": "ramo-girasoles2",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles2.jpeg"
      }
    ]
  },
  {
    "nombre": "Flor Cúpula – Rosa Bella y Bestia",
    "descripcion": "🌹✨ Flor Cúpula – Rosa Bella y Bestia ✨🌹\nUn detalle elegante y lleno de magia, inspirado en la clásica historia de Bella y la Bestia. Incluye una hermosa rosa encapsulada en una delicada cúpula transparente con iluminación LED cálida, perfecta para decorar y sorprender a esa persona especial. Ideal para regalar en cumpleaños, aniversarios o momentos inolvidables. 💖",
    "precio": "35000",
    "medida": "16cm",
    "porcentajeDescuento": 30,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "flor-cupula-bella-y-bestia",
        "url": "./imagenes/productos/flores y detalles/flor-cupula-bella-y-bestia.jpeg"
      },
      {
        "name": "flor-cupula-bella-y-bestia2",
        "url": "./imagenes/productos/flores y detalles/flor-cupula-bella-y-bestia2.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 5 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 5 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "40000",
    "medida": "30cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      },
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      },
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 7 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 7 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "50000",
    "medida": "40cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      },
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      },
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 15 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 15 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "90000",
    "medida": "50cm",
    "porcentajeDescuento": 10,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      },
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      },
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 18 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 18 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "100000",
    "medida": "60cm",
    "porcentajeDescuento": 50,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      },
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      },
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 20 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 20 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "110000",
    "medida": "65cm",
    "porcentajeDescuento": 45,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      },
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      },
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 30 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 30 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "130000",
    "medida": "70cm",
    "porcentajeDescuento": 35,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      },
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      },
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      },
    ]
  },
  {
    "nombre": "Ramo de 40 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 40 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "150000",
    "medida": "75cm",
    "porcentajeDescuento": 40,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      },
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      },
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de 50 Rosas Eternas",
    "descripcion": "🌹✨ Ramo de 50 Rosas Eternas ✨🌹\nEl tributo clásico a la pasión y el romanticismo. Compuesto por rosas eternas de textura aterciopelada y color vibrante que conservan su frescura y encanto a lo largo de los años sin necesidad de agua ni mantenimiento. Confeccionado con empaque de lujo ideal para aniversarios, declaraciones o fechas inolvidables. ❤️💫",
    "precio": "180000",
    "medida": "80cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-rosas-eternas3",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas3.jpeg"
      },
      {
        "name": "ramo-rosas-eternas",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas.jpeg"
      },
      {
        "name": "ramo-rosas-eternas2",
        "url": "./imagenes/productos/flores y detalles/ramo-rosas-eternas2.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de Lirios Eternos",
    "descripcion": "🌸🌿 Ramo Elegante de 4 Lirios Eternos y dos espigas en los colores deseados ✨\nArreglo floral distinguido que refleja pureza, calma y sofisticación. Diseñado con lirios eternos de acabados realistas y follaje decorativo, envuelto en papel floral de alta gama. Una alternativa duradera y libre de cuidados para regalar en felicitaciones, agradecimientos o decoración de interiores. 🤍✨",
    "precio": "40000",
    "medida": "40cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-lirios-eternos",
        "url": "./imagenes/productos/flores y detalles/ramo-lirios-eternos.jpeg"
      },
      {
        "name": "ramo-lirios-eternos2",
        "url": "./imagenes/productos/flores y detalles/ramo-lirios-eternos2.jpeg"
      },
      {
        "name": "ramo-lirios-eternos3",
        "url": "./imagenes/productos/flores y detalles/ramo-lirios-eternos3.jpeg"
      },
      {
        "name": "ramo-lirios-eternos4",
        "url": "./imagenes/productos/flores y detalles/ramo-lirios-eternos4.jpeg"
      }
    ]
  },
  {
    "nombre": "Libro con Girasol Eterno",
    "descripcion": "📖🌻 Libro Artesanal con Girasol Eterno ✨\nUn concepto poético y original que fusiona la literatura con el arte floral. Presentado en una delicada estructura tipo libro decorativo que alberga un vibrante girasol eterno, acompañado de notas florales y detalles ornamentales. Un obsequio con gran valor sentimental para lectores, amigos y personas inspiradoras. 💛📜",
    "precio": "40000",
    "medida": "20cm ",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "libro-con-girasol",
        "url": "./imagenes/productos/flores y detalles/libro-con-girasol.jpeg"
      }
    ]
  },
  {
    "nombre": "Oso Simba de Rosas Eternas",
    "descripcion": "🧸🌹 Oso Simba de Rosas Eternas Pequeño ✨\nUn detalle tierno, sutil y encantador compuesto por mini rosas eternas cuidadosamente ensambladas. Perfecto para complementar desayunos sorpresa, cajas de regalo o como un recuerdo duradero lleno de cariño y dulzura. ¡Un abrazo floral que perdura en el tiempo! 💖✨",
    "precio": "40000",
    "medida": "18cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "oso-eterno-simba",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-simba.jpeg"
      },
      {
        "name": "oso-eterno-simba2",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-simba2.jpeg"
      }
    ]
  },
  {
    "nombre": "Oso Toby de Rosas Eternas",
    "descripcion": "🧸🌹 Oso Toby de Rosas Eternas Mediano ✨\nDelicado oso floral de tamaño intermedio, elaborado con rosas eternas ultra suaves y esponjosas. Su diseño compacto y sofisticado lo convierte en el adorno perfecto para mesas de noche, tocadores o repisas. El balance perfecto entre ternura y romance para sorprender en cualquier fecha especial. 🌸💕",
    "precio": "50000",
    "medida": "28cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "oso-eterno-toby",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-toby.jpeg"
      },
      {
        "name": "oso-eterno-toby2",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-toby2.jpeg"
      }
    ]
  },
  {
    "nombre": "Oso Max de Rosas Eternas",
    "descripcion": "🧸🌹 Oso Max de Rosas Eternas Grande ✨\nImpresionante oso artesanal de gran formato, confeccionado meticulosamente con cientos de rosas sintéticas de tacto suave que jamás se marchitan. Decorado con una elegante cinta de satén en el cuello. Una pieza de impacto visual única, ideal para aniversarios, San Valentín, propuestas románticas o celebraciones memorables. ❤️✨",
    "precio": "70000",
    "medida": "32cm",
    "porcentajeDescuento": 30,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "oso-eterno-max",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-max.jpeg"
      },
      {
        "name": "oso-eterno-max2",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-max2.jpeg"
      }
    ]
  },
  {
    "nombre": "Oso Panda de Rosas Eternas",
    "descripcion": "🧸🌹 Oso Panda de Rosas Eternas Grande ✨\nImpresionante oso artesanal de gran formato, confeccionado meticulosamente con cientos de rosas sintéticas de tacto suave que jamás se marchitan. Decorado con una elegante cinta de satén en el cuello. Una pieza de impacto visual única, ideal para aniversarios, San Valentín, propuestas románticas o celebraciones memorables. ❤️✨",
    "precio": "80000",
    "medida": "32cm",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "oso-eterno-panda",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-panda.jpeg"
      },
      {
        "name": "oso-eterno-panda2",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-panda2.jpeg"
      },
      {
        "name": "oso-eterno-panda3",
        "url": "./imagenes/productos/flores y detalles/oso-eterno-panda3.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de Girasoles con Pingüino",
    "descripcion": "🌻🐧 Ramo de Girasoles Eternos con Peluche de Pingüino ✨\nUn arreglo radiante y alegre que combina la vitalidad de girasoles eternos elaborados a mano con la ternura de un adorable peluche de pingüino. Diseñado para conservar su belleza intacta por siempre, decorado con envoltura de lujo y lazo satinado. El detalle perfecto para graduaciones, cumpleaños o para iluminar el día de alguien especial. 💛",
    "precio": "100000",
    "medida": "50cm ",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-girasoles-con-pinguino",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles-con-pinguino.jpeg"
      },
      {
        "name": "ramo-girasoles-con-pinguino2",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles-con-pinguino2.jpeg"
      },
      {
        "name": "ramo-girasoles-con-pinguino3",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles-con-pinguino3.jpeg"
      }
    ]
  },
  {
    "nombre": "Ramo de Girasoles con Pingüino y Dulces",
    "descripcion": "🌻🐧 Ramo de Girasoles Eternos con Peluche de Pingüino y Dulces ✨\nUn arreglo radiante y alegre que combina la vitalidad de girasoles eternos elaborados a mano con la ternura de un adorable peluche de pingüino y deliciosos dulces. Diseñado para conservar su belleza intacta por siempre, decorado con envoltura de lujo y lazo satinado. El detalle perfecto para graduaciones, cumpleaños o para iluminar el día de alguien especial. 💛",
    "precio": "120000",
    "medida": "50cm ",
    "porcentajeDescuento": 20,
    "categoria": "Flores y Detalles",
    "imagenes": [
      {
        "name": "ramo-girasoles-con-pinguino-y-dulces",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles-con-pinguino-y-dulces.jpeg"
      },
      {
        "name": "ramo-girasoles-con-pinguino-y-dulces2",
        "url": "./imagenes/productos/flores y detalles/ramo-girasoles-con-pinguino-y-dulces2.jpeg"
      }
    ]
   },
   /*PELUCHES*/
   {
    "nombre": "Peluche Ardilla",
    "descripcion": "Adorable versión de ardilla tierna, fabricado con materiales esponjosos y suaves de la mejor calidad. ¡Suavidad, diversión y ternura en un solo abrazo! 🧸💕✨",
    "precio": "30000",
    "medida": "25cm",
    "porcentajeDescuento": 40,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-ardilla",
        "url": "./imagenes/productos/peluches/peluche-ardilla.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche Orca",
    "descripcion": "Adorable versión de orca tierno, fabricado con materiales esponjosos y suaves de la mejor calidad. ¡Suavidad, diversión y ternura en un solo abrazo! 🧸💕✨",
    "precio": "35000",
    "medida": "45cm",
    "porcentajeDescuento": 30,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-orca",
        "url": "./imagenes/productos/peluches/peluche-orca.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche Cocodrilo Tierno",
    "descripcion": "Adorable versión de cocodrilo tierno, fabricado con materiales esponjosos y suaves de la mejor calidad. ¡Suavidad, diversión y ternura en un solo abrazo! 🧸💕✨",
    "precio": "40000",
    "medida": "22cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-cocodrilo-tierno",
        "url": "./imagenes/productos/peluches/peluche-cocodrilo-tierno.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche de Snopy Flores",
    "descripcion": "Peluche de Snopy Flores súper suave y de excelente calidad. Tierno, cómodo al tacto y perfecto para regalar o coleccionar. ¡Suavidad, amor y ternura en un solo abrazo! 🧸💕✨",
    "precio": "40000",
    "medida": "30cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-snopy-flores",
        "url": "./imagenes/productos/peluches/peluche-snopy-flores.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche de Llama",
    "descripcion": "Colorido y divertido peluche de llama, elaborado con felpa ultra suave y resistente. Tierno, pachoncito y genial para sorprender con un regalo original. 🧸💕✨",
    "precio": "40000",
    "medida": "35cm ",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-llama",
        "url": "./imagenes/productos/peluches/peluche-llama.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche de Lobo",
    "descripcion": "Colorido y divertido peluche de lobo, elaborado con felpa ultra suave y resistente. Tierno, pachoncito y genial para sorprender con un regalo original. 🧸💕✨",
    "precio": "45000",
    "medida": "27cm ",
    "porcentajeDescuento": 10,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-lobo",
        "url": "./imagenes/productos/peluches/peluche-lobo.jpeg"
      },
      {
        "name": "peluche-lobo2",
        "url": "./imagenes/productos/peluches/peluche-lobo2.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche de Burro",
    "descripcion": "Simpático y entrañable peluche de burro, fabricado con materiales suaves y cómodos al tacto. ¡El regalo perfecto para compartir ternura y alegría! 🧸💕✨",
    "precio": "50000",
    "medida": "28cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-burro",
        "url": "./imagenes/productos/peluches/peluche-burro.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche de Pingüino",
    "descripcion": "Tierno peluche de pingüino, pachoncito, súper suave y de excelente calidad. Cómodo al tacto e ideal para dar un abrazo cálido y reconfortante. 🧸💕✨",
    "precio": "50000",
    "medida": "30cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-pinguino",
        "url": "./imagenes/productos/peluches/peluche-pinguino.jpeg"
      },
      {
        "name": "peluche-pinguino2",
        "url": "./imagenes/productos/peluches/peluche-pinguino2.jpeg"
      },
      {
        "name": "peluche-pinguino3",
        "url": "./imagenes/productos/peluches/peluche-pinguino3.jpeg"
      },
      {
        "name": "peluche-pinguino4",
        "url": "./imagenes/productos/peluches/peluche-pinguino4.jpeg"
      }
    ]
    },
    {
    "nombre": "Peluche de Mapache",
    "descripcion": "Simpático y esponjoso peluche de mapache, increíblemente suave al tacto y con hermosos detalles. Perfecto para regalar momentos llenos de alegría y ternura. 🧸💕✨",
    "precio": "50000",
    "medida": "25cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-mapache",
        "url": "./imagenes/productos/peluches/peluche-mapache.jpeg"
      }
    ]
   },
   {
    "nombre": "Peluche de Snopy Corazon",
    "descripcion": "Peluche de Snopy Corazon súper suave y de excelente calidad. Tierno, cómodo al tacto y perfecto para regalar o coleccionar. ¡Suavidad, amor y ternura en un solo abrazo! 🧸💕✨",
    "precio": "60000",
    "medida": "40cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-snopy-corazon",
        "url": "./imagenes/productos/peluches/peluche-snopy-corazon.jpeg"
      },
      {
        "name": "peluche-snopy-corazon",
        "url": "./imagenes/productos/peluches/peluche-snopy-corazon2.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche Angela que corre",
    "descripcion": "Adorable peluche de Angela que corre, elaborado con materiales ultra suaves y esponjosos. Tierno, cómodo al tacto y perfecto para regalar en cualquier ocasión especial. 🧸💕✨",
    "precio": "60000",
    "medida": "40cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-angela-que-corre",
        "url": "./imagenes/productos/peluches/peluche-angela-que-corre.jpeg"
      },
      {
        "name": "peluche-angela-que-corre2",
        "url": "./imagenes/productos/peluches/peluche-angela-que-corre2.jpeg"
      },
      {
        "name": "peluche-cerdito-que-corre2",
        "url": "./imagenes/productos/peluches/peluche-que-corre.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche Stich que corre",
    "descripcion": "Tierno y divertido peluche de Stich que corre, súper suave y con acabados de gran calidad. Cómodo al tacto y el compañero perfecto para abrazar o coleccionar. 🧸💕✨",
    "precio": "60000",
    "medida": "35cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-stich-que-corre",
        "url": "./imagenes/productos/peluches/peluche-stich-que-corre.jpeg"
      },
      {
        "name": "peluche-stich-que-corre2",
        "url": "./imagenes/productos/peluches/peluche-angela-que-corre2.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche Panda que corre",
    "descripcion": "Tierno y divertido peluche de Panda que corre, súper suave y con acabados de gran calidad. Cómodo al tacto y el compañero perfecto para abrazar o coleccionar. 🧸💕✨",
    "precio": "60000",
    "medida": "50cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-panda-que-corre",
        "url": "./imagenes/productos/peluches/peluche-panda-que-corre.jpeg"
      },
      {
        "name": "peluche-panda-que-corre2",
        "url": "./imagenes/productos/peluches/peluche-que-corre.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche Cerdito que corre",
    "descripcion": "Tierno y divertido peluche de Cerdito que corre, súper suave y con acabados de gran calidad. Cómodo al tacto y el compañero perfecto para abrazar o coleccionar. 🧸💕✨",
    "precio": "60000",
    "medida": "45cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-cerdito-que-corre",
        "url": "./imagenes/productos/peluches/peluche-cerdito-que-corre.jpeg"
      },
      {
        "name": "peluche-cerdito-que-corre2",
        "url": "./imagenes/productos/peluches/peluche-que-corre.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche Toro que corre",
    "descripcion": "Divertido y tierno peluche de toro que corre, súper suave y de gran calidad. Cómodo al tacto e ideal para sorprender con un detalle único y abrazable. 🧸💕✨",
    "precio": "60000",
    "medida": "50cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-toro-que-corre",
        "url": "./imagenes/productos/peluches/peluche-toro-que-corre.jpeg"
      },
      {
        "name": "peluche-toro-que-corre",
        "url": "./imagenes/productos/peluches/peluche-toro-que-corre2.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Lotso",
    "descripcion": "Hermoso peluche de Lotso, súper suave, tierno y de muy buena calidad. Cómodo al tacto y perfecto para regalar amor y dulzura en un solo abrazo. 🧸💕✨",
    "precio": "60000",
    "medida": "40cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-lotso",
        "url": "./imagenes/productos/peluches/peluche-lotso.jpeg"
      },
      {
        "name": "peluche-lotso2",
        "url": "./imagenes/productos/peluches/peluche-lotso2.jpeg"
      },
      {
        "name": "peluche-lotso3",
        "url": "./imagenes/productos/peluches/peluche-lotso3.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche Stich con Pato",
    "descripcion": "Adorable peluche de Stich abrazando a su patito, con felpa extra suave y gran nivel de detalle. Tierno, reconfortante e ideal para los fans de Stich. 🧸💕✨",
    "precio": "60000",
    "medida": "32cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-stich-con-pato",
        "url": "./imagenes/productos/peluches/peluche-stich-con-pato.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Perrito Schnauzer",
    "descripcion": "Lindo peluche de perrito Schnauzer, súper suave, esponjoso y de máxima calidad. Tierno, fiel y perfecto para regalar una dosis de cariño en cualquier momento. 🧸💕✨",
    "precio": "60000",
    "medida": "35cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-perrito-schnauzer",
        "url": "./imagenes/productos/peluches/peluche-perrito-schnauzer.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Venado",
    "descripcion": "Hermoso peluche de venado, delicado, súper suave y con acabados de primera. El compañero ideal para decorar una habitación o consentir a alguien especial. 🧸💕✨",
    "precio": "60000",
    "medida": "40cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-venado",
        "url": "./imagenes/productos/peluches/peluche-venado.jpeg"
      },
      {
        "name": "peluche-venado2",
        "url": "./imagenes/productos/peluches/peluche-venado2.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Elefante",
    "descripcion": "Tierno peluche de elefante, pachoncito, súper suave y de excelente calidad. Perfecto para consentir a los más pequeños o dar un regalo inolvidable. 🧸💕✨",
    "precio": "70000",
    "medida": "40cm",
    "porcentajeDescuento": 30,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-elefante",
        "url": "./imagenes/productos/peluches/peluche-elefante.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Tiburón",
    "descripcion": "Original y simpático peluche de tiburón, increíblemente suave y acogedor al tacto. Ideal para quienes buscan un detalle divertido, abrazable y tierno. 🧸💕✨",
    "precio": "70000",
    "medida": "80cm",
    "porcentajeDescuento": 30,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-tiburon",
        "url": "./imagenes/productos/peluches/peluche-tiburon.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Cocodrilo",
    "descripcion": "Peluche de cocodrilo súper suave y con acabados de gran calidad. Tierno, divertido y cómodo al tacto, perfecto para regalar o coleccionar. 🧸💕✨",
    "precio": "70000",
    "medida": "80cm",
    "porcentajeDescuento": 30,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-cocodrilo",
        "url": "./imagenes/productos/peluches/peluche-cocodrilo.jpeg"
      },
      {
        "name": "peluche-cocodrilo2",
        "url": "./imagenes/productos/peluches/peluche-cocodrilo2.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Totoro",
    "descripcion": "Tierno peluche de Totoro, súper suave y de excelente calidad. Ideal para abrazar, decorar o regalar a los más pequeños. 🧸💕✨",
    "precio": "80000",
    "medida": "60cm",
    "porcentajeDescuento": 20,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-totoro",
        "url": "./imagenes/productos/peluches/peluche-totoro.jpeg"
      },
      {
        "name": "peluche-totoro",
        "url": "./imagenes/productos/peluches/peluche-totoro2.jpeg"
      },
      {
        "name": "peluche-totoro3",
        "url": "./imagenes/productos/peluches/peluche-totoro3.jpeg"
      }
    ]
  },
  {
    "nombre": "Peluche de Dinosaurio",
    "descripcion": "Encantador peluche de dinosaurio, suave al tacto y de excelente calidad. Tierno, esponjoso y perfecto para regalar o llenar de ternura cualquier habitación. 🧸💕✨",
    "precio": "90000",
    "medida": "70cm",
    "porcentajeDescuento": 10,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-dinosaurio",
        "url": "./imagenes/productos/peluches/peluche-dinosaurio.jpeg"
      },
      {
        "name": "peluche-dinosaurio2",
        "url": "./imagenes/productos/peluches/peluche-dinosaurio2.jpeg"
      }
    ]
  },
  {
    "nombre": "Maleta de Peluche Gato",
    "descripcion": "Hermosa y práctica maleta de peluche con diseño de gato, ultra suave al tacto y de excelente calidad. Ideal para llevar tus cosas favoritas con un toque de ternura único. 🧸💕✨",
    "precio": "90000",
    "medida": "50cm",
    "porcentajeDescuento": 10,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "maleta-peluche-gato",
        "url": "./imagenes/productos/peluches/maleta-peluche-gato.jpeg"
      },
      {
        "name": "maleta-peluche-gato2",
        "url": "./imagenes/productos/peluches/maleta-peluche-gato2.jpeg"
      },
      {
        "name": "maleta-peluche-gato3",
        "url": "./imagenes/productos/peluches/maleta-peluche-gato3.jpeg"
      }
    ]
  },
  {
    "nombre": "Stitch Pato Grande",
    "descripcion": "Encantador peluche de Stitch con pato grande, suave al tacto y de excelente calidad. Tierno, esponjoso y perfecto para regalar o llenar de ternura cualquier habitación. 🧸💕✨",
    "precio": "170000",
    "medida": "90cm",
    "porcentajeDescuento": 15,
    "categoria": "Peluches",
    "imagenes": [
      {
        "name": "peluche-stitch-pato-grande",
        "url": "./imagenes/productos/peluches/peluche-stitch-pato-grande.jpeg"
      }
    ]
  },

   /*CERAMICAS*/
  {
    "nombre": "Venado pequeño patinador",
    "descripcion": "Hermosa pieza de venado pequeño patinador en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "12000",
    "medida": "6cm x 11cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "venado-pequeno-patinador",
        "url": "./imagenes/productos/ceramicas/venado-pequeno-patinador.jpg"
      }
    ]
  },
  {
    "nombre": "Oso de nieve pequeño",
    "descripcion": "Hermosa pieza de oso de nieve pequeño en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "15000",
    "medida": "6cm x9cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "oso-de-nieve",
        "url": "./imagenes/productos/ceramicas/oso-de-nieve.jpeg"
      },
      {
        "name": "combos",
        "url": "./imagenes/productos/ceramicas/combos.jpeg"
      },
      {
        "name": "combos2",
        "url": "./imagenes/productos/ceramicas/combos2.jpeg"
      },
      {
        "name": "combos3",
        "url": "./imagenes/productos/ceramicas/combos3.jpeg"
      }
    ]
  },
  {
    "nombre": "Árbol de Navidad pequeño",
    "descripcion": "Hermosa pieza de árbol de Navidad de pequeño en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "15000",
    "medida": "6cm x9cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "arbol-de-navidad",
        "url": "./imagenes/productos/ceramicas/arbol-de-navidad.jpeg"
      },
      {
        "name": "combos",
        "url": "./imagenes/productos/ceramicas/combos.jpeg"
      }
    ]
  },
  {
    "nombre": "Santa Claus pequeño",
    "descripcion": "Hermosa pieza de Santa Claus pequeño en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "15000",
    "medida": "6cm x9cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "santa-claus",
        "url": "./imagenes/productos/ceramicas/santa-claus.jpeg"
      },
      {
        "name": "combos",
        "url": "./imagenes/productos/ceramicas/combos.jpeg"
      },
      {
        "name": "combos2",
        "url": "./imagenes/productos/ceramicas/combos2.jpeg"
      }
    ]
  },
  {
    "nombre": "Venado pequeño",
    "descripcion": "Hermosa pieza de venado pequeño en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "15000",
    "medida": "6cm x9cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "venado",
        "url": "./imagenes/productos/ceramicas/venado.jpeg"
      },
      {
        "name": "combos3",
        "url": "./imagenes/productos/ceramicas/combos3.jpeg"
      }
    ]
  },
  {
    "nombre": "Gnomo pequeño",
    "descripcion": "Hermosa pieza de gnomo pequeño en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "15000",
    "medida": "6cm x9cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "gnomo",
        "url": "./imagenes/productos/ceramicas/gnomo.jpeg"
      },
      {
        "name": "combos2",
        "url": "./imagenes/productos/ceramicas/combos2.jpeg"
      },
      {
        "name": "combos3",
        "url": "./imagenes/productos/ceramicas/combos3.jpeg"
      }
    ]
  },
  {
    "nombre": "Posillos de Santa Claus",
    "descripcion": "Hermosa pieza de posillos de Santa Claus en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "20000",
    "medida": "10cm x 8cm",
    "porcentajeDescuento": 20,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "posillos-de-santa-claus",
        "url": "./imagenes/productos/ceramicas/posillos-de-santa-claus.jpg"
      }
    ]
  },
  {
    "nombre": "Cascanueces pequeño",
    "descripcion": "Hermosa pieza de cascanueces pequeño en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "20000",
    "medida": "9cm x 13cm",
    "porcentajeDescuento": 20,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "cascanueces-pequeno",
        "url": "./imagenes/productos/ceramicas/cascanueces-pequeno.jpeg"
      },
      {
        "name": "cascanueces-pequeno2",
        "url": "./imagenes/productos/ceramicas/cascanueces-pequeno2.jpeg"
      }
    ]
  },
  {
    "nombre": "Galleta de jengibre",
    "descripcion": "Hermosa pieza de galleta de jengibre en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "25000",
    "medida": "14cm x 13cm",
    "porcentajeDescuento": 50,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "galleta-de-jengibre",
        "url": "./imagenes/productos/ceramicas/galleta-de-jengibre.jpg"
      }
    ]
  },
  {
    "nombre": "Santa Claus Gnomo",
    "descripcion": "Hermosa pieza de Santa Claus Gnomo en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "25000",
    "medida": "8cm x 17cm",
    "porcentajeDescuento": 50,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "santa-claus-gnomo",
        "url": "./imagenes/productos/ceramicas/santa-claus-gnomo.jpeg"
      }
    ]
  },
  {
    "nombre": "Chica abstracta",
    "descripcion": "Hermosa pieza de chica abstracta en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "30000",
    "medida": "15cm x 20cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "chica-abstracta",
        "url": "./imagenes/productos/ceramicas/chica-abstracta.jpeg"
      },
      {
        "name": "chica-abstracta2",
        "url": "./imagenes/productos/ceramicas/chica-abstracta2.jpeg"
      }
    ]
  },
  {
    "nombre": "El Grinch Porta Llaves",
    "descripcion": "Hermosa pieza de el grinch porta llaves en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "30000",
    "medida": "15cm x 20cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "el-grinch-llaves",
        "url": "./imagenes/productos/ceramicas/el-grinch-llaves.jpeg"
      }
    ]
  },
  {
    "nombre": "Cascanueces largo pequeño",
    "descripcion": "Hermosa pieza de cascanueces largo pequeño en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "30000",
    "medida": "5cm x 21cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "cascanueces-largo-pequeno",
        "url": "./imagenes/productos/ceramicas/cascanueces-largo-pequeno.jpg"
      }
    ]
  },
  {
    "nombre": "Combo 2 Cabezas de venado",
    "descripcion": "Hermosa pieza de 2 cabezas de venado en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "30000",
    "medida": "7cm x 17cm - 6cm x 13cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "2-cabezas-de-venado",
        "url": "./imagenes/productos/ceramicas/2-cabezas-de-venado.jpg"
      }
    ]
  },
  {
    "nombre": "Santa Claus largo",
    "descripcion": "Hermosa pieza de Santa Claus largo en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "30000",
    "medida": "8cm x 26cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "santa-claus-largo",
        "url": "./imagenes/productos/ceramicas/santa-claus-largo.jpeg"
      }
    ]
  },
  {
    "nombre": "Rey Cascanueces",
    "descripcion": "Hermosa pieza de Rey Cascanueces en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "8cm x 27cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "rey-cascanueces",
        "url": "./imagenes/productos/ceramicas/rey-cascanueces.jpeg"
      },
      {
        "name": "rey-cascanueces2",
        "url": "./imagenes/productos/ceramicas/rey-cascanueces2.jpeg"
      }
    ]
  },
  {
    "nombre": "Gnomo con corona",
    "descripcion": "Hermosa pieza de Gnomo con corona en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "10cm x 28cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "gnomo-con-corona",
        "url": "./imagenes/productos/ceramicas/gnomo-con-corona.jpeg"
      }
    ]
  },
  {
    "nombre": "Santa Claus oso",
    "descripcion": "Hermosa pieza de Santa Claus oso en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "15cm x 20cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "santa-claus-oso",
        "url": "./imagenes/productos/ceramicas/santa-claus-oso.jpeg"
      },
      {
        "name": "santa-claus-oso2",
        "url": "./imagenes/productos/ceramicas/santa-claus-oso2.jpeg"
      }
    ]
  },
  {
    "nombre": "El Grinch",
    "descripcion": "Hermosa pieza de el grinch en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "7cm x 21cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "el-grinch",
        "url": "./imagenes/productos/ceramicas/el-grinch.jpeg"
      }
    ]
  },
  {
    "nombre": "El Grinch porta vela",
    "descripcion": "Hermosa pieza de el grinch porta vela chimenea en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "10cm x 17cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "el-grinch-chimenea",
        "url": "./imagenes/productos/ceramicas/el-grinch-chimenea.jpeg"
      }
    ]
  },
  {
    "nombre": "Oso de nieve arbolito",
    "descripcion": "Hermosa pieza de oso de nieve arbolito en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "13cm x 22cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "oso-de-nieve-arbolito",
        "url": "./imagenes/productos/ceramicas/oso-de-nieve-arbolito.jpeg"
      }
    ]
  },
  {
    "nombre": "Coyote",
    "descripcion": "Hermosa pieza de coyote en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "9cm x 32cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "coyote",
        "url": "./imagenes/productos/ceramicas/coyote.jpeg"
      }
    ]
  },
  {
    "nombre": "Árbol de nieve grande",
    "descripcion": "Hermosa pieza de árbol de nieve grande en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "35000",
    "medida": "12cm x 35cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "arbol-de-nieve-grande",
        "url": "./imagenes/productos/ceramicas/arbol-de-nieve-grande.jpg"
      }
    ]
  },
  {
    "nombre": "Oso Regalos",
    "descripcion": "Hermosa pieza de oso regalos en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "40000",
    "medida": "14cm x 25cm",
    "porcentajeDescuento": 20,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "oso-regalos",
        "url": "./imagenes/productos/ceramicas/oso-regalos.jpg"
      }
    ]
  },
  {
    "nombre": "Minnie Navidad",
    "descripcion": "Hermosa pieza de minnie navidad en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "40000",
    "medida": "12cm x 25cm",
    "porcentajeDescuento": 20,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "minnie-navidad",
        "url": "./imagenes/productos/ceramicas/minnie-navidad.jpg"
      }
    ]
  },
  {
    "nombre": "Combo de tres arbolitos de navidad",
    "descripcion": "Hermosa pieza de combo de tres arbolitos de navidad con luces en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "50000",
    "medida": "7cm x 20cm",
    "porcentajeDescuento": 50,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "combo-de-tres-arbolitos-de-navidad",
        "url": "./imagenes/productos/ceramicas/combo-de-tres-arbolitos-de-navidad.jpg"
      }
    ]
  },
  {
    "nombre": "Oso Nieve Grande",
    "descripcion": "Hermosa pieza de oso nieve grande en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "50000",
    "medida": "14cm x 30cm",
    "porcentajeDescuento": 50,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "oso-nieve-grande",
        "url": "./imagenes/productos/ceramicas/oso-nieve-grande.jpg"
      }
    ]
  },
  {
    "nombre": "Santa Claus Bota Navideña",
    "descripcion": "Hermosa pieza de Santa Claus bota navideña en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "50000",
    "medida": "14cm x 28cm",
    "porcentajeDescuento": 50,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "santa-claus-bota-navidena",
        "url": "./imagenes/productos/ceramicas/santa-claus-bota-navidena.jpg"
      }
    ]
  },
  {
    "nombre": "Santa Claus Bonachon",
    "descripcion": "Hermosa pieza de Santa Claus bonachon en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "55000",
    "medida": "20cm x 30cm",
    "porcentajeDescuento": 45,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "santa-claus-gordito",
        "url": "./imagenes/productos/ceramicas/santa-claus-gordito.jpg"
      }
    ]
  },
  {
    "nombre": "Venado sentado",
    "descripcion": "Hermosa pieza de venado sentado en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "55000",
    "medida": "23cm x 30cm",
    "porcentajeDescuento": 45,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "venado-sentado",
        "url": "./imagenes/productos/ceramicas/venado-sentado.jpg"
      }
    ]
  },
  {
    "nombre": "El Grinch Bebé",
    "descripcion": "Hermosa pieza de El Grinch bebé en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "60000",
    "medida": "23cm x 32cm",
    "porcentajeDescuento": 20,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "el-grinch-bebe",
        "url": "./imagenes/productos/ceramicas/el-grinch-bebe.jpg"
      }
    ]
  },
  {
    "nombre": "Santa Claus grande estaciones",
    "descripcion": "Hermosa pieza de Santa Claus grande estaciones en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "60000",
    "medida": "18cm x 35cm",
    "porcentajeDescuento": 40,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "santa-claus-grande-estaciones",
        "url": "./imagenes/productos/ceramicas/santa-claus-grande-estaciones.jpeg"
      },
      {
        "name": "santa-claus-grande-estaciones2",
        "url": "./imagenes/productos/ceramicas/santa-claus-grande-estaciones2.jpeg"
      },
      {
        "name": "santa-claus-grande-estaciones3",
        "url": "./imagenes/productos/ceramicas/santa-claus-grande-estaciones3.jpeg"
      }
    ]
  },
  {
    "nombre": "Venado de pie",
    "descripcion": "Hermosa pieza de venado de pie en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "65000",
    "medida": "20cm x 42cm",
    "porcentajeDescuento": 35,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "venado-de-pie",
        "url": "./imagenes/productos/ceramicas/venado-de-pie.jpeg"
      }
    ]
  },
  {
    "nombre": "Rey León",
    "descripcion": "Hermosa pieza de Rey León en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "70000",
    "medida": "18cm x 35cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "rey-leon",
        "url": "./imagenes/productos/ceramicas/rey-leon.jpeg"
      }
    ]
  },
  {
    "nombre": "El Grinch Grande",
    "descripcion": "Hermosa pieza de el grinch grande en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "70000",
    "medida": "20cm x 37cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "el-grinch-grande",
        "url": "./imagenes/productos/ceramicas/el-grinch-grande.jpg"
      }
    ]
  },
  {
    "nombre": "Jirafa grande",
    "descripcion": "Hermosa pieza de jirafa grande en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "70000",
    "medida": "18cm x 51cm",
    "porcentajeDescuento": 30,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "jirafa-grande",
        "url": "./imagenes/productos/ceramicas/jirafa-grande.jpeg"
      },
      {
        "name": "jirafa-grande2",
        "url": "./imagenes/productos/ceramicas/jirafa-grande2.jpeg"
      }
    ]
  },
  {
    "nombre": "Conejo Welcome",
    "descripcion": "Hermosa pieza de conejo welcome en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "80000",
    "medida": "17cm x 7cm",
    "porcentajeDescuento": 20,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "conejo-welcome",
        "url": "./imagenes/productos/ceramicas/conejo-welcome.jpg"
      }
    ]
  },
  {
    "nombre": "Tren Polar Express",
    "descripcion": "Hermosa pieza de tren polar Express en cerámica, pintada a mano con amor y dedicación. Personalizable en colores y detalles a tu gusto. ¡Ideal para decorar o regalar! 🎨✨",
    "precio": "90000",
    "medida": "70cm x 14cm",
    "porcentajeDescuento": 10,
    "categoria": "Cerámicas",
    "imagenes": [
      {
        "name": "tren",
        "url": "./imagenes/productos/ceramicas/tren.jpeg"
      },
      {
        "name": "tren2",
        "url": "./imagenes/productos/ceramicas/tren2.jpeg"
      },
      {
        "name": "tren3",
        "url": "./imagenes/productos/ceramicas/tren3.jpeg"
      }
    ]
  }
];
