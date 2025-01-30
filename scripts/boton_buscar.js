var btn_search = document.getElementById('icon-search');
var search_bar = document.getElementById('btn-search');
var btn_close = document.getElementById('icon-close');

btn_search.addEventListener('click', function () {
    search_bar.setAttribute("style", "display:flex");
    btn_search.setAttribute("style", "display:none");
    btn_close.setAttribute("style", "display:block")
});

btn_close.addEventListener('click', function () {
    search_bar.setAttribute("style", "display:none");
    btn_search.setAttribute("style", "display:block");
    btn_close.setAttribute("style", "display:none");
    resultado.setAttribute("style", "display:none");
    buscar.value = '';
})

//Para filtrar cada producto
const buscar = document.querySelector('#btn-search');
const resultado = document.querySelector('#resultado');
const productos = [
    { nombre: "Brida reforzada 3/4 - 1-1/16", url: "/pages/detalle_productos/Abrazadera%20sin%20fin%20reforzada%2010%20-%20Fiero.html" },
    { nombre: "Brida reforzada 3-5/16, 4-1/4", url: "/pages/detalle_productos/Abrazadera%20sin%20fin%20reforzada%2060%20-%20Fiero.html" },
    { nombre: "Aceite semi-sintetico de 4 tiempos", url: "/pages/detalle_productos/Aceite%20semi-sintetico%20de%204%20tiempos%20-%20truper.html" },
    { nombre: "Arnes de cuerpo completo con 3 anillos", url: "/pages/detalle_productos/Arnes%20de%20cuerpo%20completo%20-%20Truper.html" },
    { nombre: "Asiento redondo ligero con tapa para inodoro", url: "/pages/detalle_productos/Asiento%20redondo%20con%20tapa%20para%20WC%20-%20Foset.html" },
    { nombre: "Aspersor metalico de dos vias", url: "/pages/detalle_productos/Aspersor%20metalico%20de%20dos%20vias%20-%20Truper.html" },
    { nombre: "Aspersor metalico de una via", url: "/pages/detalle_productos/Aspersor%20metalico%20de%20una%20via%20-%20Truper.html" },
    { nombre: "Aspersor oscilatorio", url: "/pages/detalle_productos/Aspersor%20oscilatorio%20-%20Truper.html" },
    { nombre: "Azadon Lane de 1.6 lb", url: "/pages/detalle_productos/Azadon%20Lane%20de%201.6lb%20-%20Truper.html" },
    { nombre: "Azadon Lane de 2.1 lb", url: "/pages/detalle_productos/Azadon%20Lane%20de%202.1lb%20-%20Truper.html" },
    { nombre: "Bandola de acero de 5/16 con seguro", url: "/pages/detalle_productos/Bandola%20de%20acero%20de%205s16%20con%20seguro%20-%20Fiero.html" },
    { nombre: "Barra cavadora 1 x 130 cm, escoplo 102 mm", url: "/pages/detalle_productos/Barra%20cavadora%20de%20102mm%20-%20Truper.html" },
    { nombre: "Barra de punta de 1x175 cm, escoplo 72 mm", url: "/pages/detalle_productos/Barra%20de%20punta%20con%20escoplo%20de%2072%20mm%20-%20Truper.html" },
    { nombre: "Bascula capacidad 50 kg romana de resorte", url: "/pages/detalle_productos/Bascula%20capacidad%2050%20kg%20romana%20de%20resorte%20-%20Pretul.html" },
    { nombre: "Bascula digital para cocina", url: "/pages/detalle_productos/Bascula%20digital%20para%20cocina%20-%20Truper.html" },
    { nombre: "Bisagra rectangular 4' acero latonado", url: "/pages/detalle_productos/Bisagra%20rectangular%204'%20-%20Hermex.html" },
    { nombre: "Bisagra rectangular 3' acero latonado", url: "/pages/detalle_productos/Bisagra%20rectangular%20de%20acero%20latonado%20de%203'%20-%20Hermex.html" },
    { nombre: "Blíster con 4 pilas recargables", url: "/pages/detalle_productos/Blister%20de%20pilas%20AA%20-%20Volteck.html" },
    { nombre: "Bolsa con 1 kg de arandelas planas de 1/4'", url: "/pages/detalle_productos/Bolsa%20de%201%20kg%20de%20arandelas%20-%20Fiero.html" },
    { nombre: "Bomba centrífuga para agua modelo europeo, 1 HP", url: "/pages/detalle_productos/Bomba%20centrifuga%20para%20agua%20de%201%20HP%20-%20Truper.html" },
    { nombre: "Bomba manual para inflar, 100 PSI", url: "/pages/detalle_productos/Bomba%20manual%20para%20inflar%20de%20100%20PSI%20-%20Truper.html" },
    { nombre: "Bomba periférica 1/2 HP, altura máxima 20 m", url: "/pages/detalle_productos/Bomba%20periferica%201s2%20-%20Pretul.html" },
    { nombre: "Bomba periférica 3/4 HP, altura máxima 55 m", url: "/pages/detalle_productos/Bomba%20periferica%203s4%20-%20Truper.html" },
    { nombre: "Bomba periférica 1 HP, altura máxima 70 m", url: "/pages/detalle_productos/Bomba%20periferica%20de%201%20HP%20-%20Truper.html" },
    { nombre: "Bomba periférica 1 HP, altura máxima 60 m ", url: "/pages/detalle_productos/Bomba%20periferica%20de%201%20HP%20gris%20-%20Truper.html" },
    { nombre: "Bomba presurizadora multietapas 1/2 HP con control", url: "/pages/detalle_productos/Bomba%20presurizada%201s2%20-%20Truper.html" },
    { nombre: "Bomba sumergible acero inoxidable,agua sucia,1-1/2HP", url: "/pages/detalle_productos/Bomba%20sumergible%20de%20aceron%20inoxidable%201-1s2%20HP%20-%20Truper.html" },
    { nombre: "Bomba sumergible plástica, 1/2 HP para agua limpia", url: "/pages/detalle_productos/Bomba%20sumergible%20plastica%201s2%20-%20Truper.html" },
    { nombre: "Bomba sumergible, tipo bala, 1-1/2 HP, agua limpia", url: "/pages/detalle_productos/Bomba%20sumergible%20tipo%20bala%20%20de%201-1s2%20HP%20-%20Truper.html" },
    { nombre: "Bomba sumergible, tipo bala, 1 HP, agua limpia", url: "/pages/detalle_productos/Bomba%20sumergible%20tipo%20bala%20de%201%20HP%20-%20Truper.html" },
    { nombre: "Bomba hidroneumática 25L", url: "/pages/detalle_productos/bomba_hidroneumatica24L_truper.html" },
    { nombre: "Bota de seguridad negra, #25, casquillo de poliamida", url: "/pages/detalle_productos/Bota%20de%20seguridad%20negra,%2025%20-%20Pretul.html" },
    { nombre: "Botas industriales # 27 ", url: "/pages/detalle_productos/Botas%20industriales%2027%20-%20Truper.html" },
    { nombre: "Botas jardineras # 29", url: "/pages/detalle_productos/Botas%20jardineras%2029%20-%20Truper.html" },
    { nombre: "Broca escalonada óxido negro 11 escalones", url: "/pages/detalle_productos/Broca%20escalonada%20oxido%20negro%2011%20-%20Truper.html" },
    { nombre: "Broca HSS 7/16' Trublack para metal", url: "/pages/detalle_productos/Broca%20HSS%207s16%20Trublack%20para%20metal%20-%20Truper.html" },
    { nombre: "Broca para concreto de 3/8 x 6'", url: "/pages/detalle_productos/Broca%20para%20concreto%20de%203s8%20x%206'%20-%20Truper.html" },
    { nombre: "Broca para router, española, 1-1/4'", url: "/pages/detalle_productos/Broca%20para%20router,%20espanola%20-%20Truper.html" },
    { nombre: "Broca piloto de 1/4' para brocasierras diamante", url: "/pages/detalle_productos/Broca%20piloto%20de%20un%20cuarto%20para%20brocasierras%20diamante%20-%20Truper.html" },
    { nombre: "Broca HSS 1/4' Trublack para metal", url: "/pages/detalle_productos/Broca%20un%20cuarto%20Trublack%20para%20metal%20-%20Truper.html" },
    { nombre: "Cables pasa corriente 3 m, 225 A, 8 AWG, con funda", url: "/pages/detalle_productos/Cables%20pasa%20corriente%20-%20Truper.html" },
    { nombre: "Caja cosmetiquera 14¨, rosa/morado", url: "/pages/detalle_productos/Caja%20cosmetiquera%20-%20Pretul.html" },
    { nombre: "Caja para herramienta de 22¨", url: "/pages/detalle_productos/Caja%20de%20herramientas%20-%20Truper.html" },
    { nombre: "Calentador instantáneo modulante, 24L, 4 serv, gas LP", url: "/pages/detalle_productos/Calentador%20instantaneo%20modulante%20-%20Foset.html" },
    { nombre: "Candado de hierro 38 mm gancho corto en caja", url: "/pages/detalle_productos/Candado%20de%20hierro%20de%2038%20mm%20-%20Hermex.html" },
    { nombre: "Candado de hierro 50 mm gancho corto en caja", url: "/pages/detalle_productos/Candado%20de%20hierro%20de%2050%20mm%20-%20Hermex.html" },
    { nombre: "Candado italiano de gancho largo, 113", url: "/pages/detalle_productos/Candado%20italiano%20serie%20113%20-%20Yale.html" },
    { nombre: "Candado laminado, 30mm, gancho corto", url: "/pages/detalle_productos/Candado%20laminado%20de%2030%20mm%20-%20Hermex.html" },
    { nombre: "Candado serie 220", url: "/pages/detalle_productos/Candado%20serie%20220%20-%20Yale.html" },
    { nombre: "Carda copa 3¨ alambre ondulado fino, eje 5/8¨-11", url: "/pages/detalle_productos/Carda%20copa%20de%203'%20-%20Truper.html" },
    { nombre: "Careta electrónica p/soldar, semiprofesional, 9 a 13", url: "/pages/detalle_productos/Careta%20para%20soldar%20-%20Pretul.html" },
    { nombre: "Cargador c/arrancador de 50 A para baterías de 12 V", url: "/pages/detalle_productos/Cargador%20de%2050%20A%20para%20baterias%20-%20Truper.html" },
    { nombre: "Carretilla 4.5 ft3 Neumática, bastidor tubular", url: "/pages/detalle_productos/Carretilla%204.5%20ft%20-%20Truper.html" },
    { nombre: "Carretilla 5.5 ft3 Neumática, bastidor tubular", url: "/pages/detalle_productos/Carretilla%205.5%20ft%20-%20Truper.html" },
    { nombre: "Carro de servicio, 3 charolas", url: "/pages/detalle_productos/Carro%20de%20servicio%20con%203%20compartimentos%20-%20Truper.html" },
    { nombre: "Casco de seguridad, ajuste de matraca, amarillo", url: "/pages/detalle_productos/Casco%20de%20seguridad%20-%20Truper.html" },
    { nombre: "Cautín 48 W profesional para electrónica con estación", url: "/pages/detalle_productos/Cautin%2048%20W%20con%20estacion%20-%20Truper.html" },
    { nombre: "Cavador mangos de madera 48¨", url: "/pages/detalle_productos/Cavador%20con%20mangos%20de%20madera%20-%20Truper.html" },
    { nombre: "Centro de carga de sobreponer, 2 polos", url: "/pages/detalle_productos/Centro%20de%20carga%20de%202%20polos%20-%20Volteck.html" },
    { nombre: "Cepillo de alambre 64 pinceles de acero al carbono", url: "/pages/detalle_productos/Cepillo%20de%20alambre%20de%2064%20pinceles%20de%20acero%20-%20Truper.html" },
    { nombre: "Cepillo eléctrico 3-1/4¨, 850W ", url: "/pages/detalle_productos/Cepillo%20electrico%203-1s4'%20-%20Truper.html" },
    { nombre: "Cepillo tipo plancha de plástico", url: "/pages/detalle_productos/Cepillo%20tipo%20plancha%20de%20plastico%20-%20Klintek.html" },
    { nombre: "cerradura de dormitorio Bolton", url: "/pages/detalle_productos/Cerradura%20de%20dormitorio%20bolton%20-%20Yale.html" },
    { nombre: "cerradura para dormitorio York", url: "/pages/detalle_productos/Cerradura%20para%20dormitorio%20York%20-%20Yale.html" },
    { nombre: "Cerradura sobreponer derecha", url: "/pages/detalle_productos/Cerradura%20para%20sobreponer%20derecha%20-%20Hermex.html" },
    { nombre: "Cerradura sobreponer izquierda", url: "/pages/detalle_productos/Cerradura%20sobreponer%20izquierda%20-%20Hermex.html" },
    { nombre: "Cerradura tipo esfera, cilíndrico, recámara, antiguo", url: "/pages/detalle_productos/Cerradura%20tipo%20esfera%20-%20Hermex.html" },
    { nombre: "Céspol flexible 1-1/2¨ de PVC, con extensión, para fregadero", url: "/pages/detalle_productos/Cespol%20flexible%20PVC%20para%20fregadero%20-%20Foset.html" },
    { nombre: "Céspol de bote 1 1/2¨ de polipropileno, para fregadero", url: "/pages/detalle_productos/Cespol%20para%20fregadero%20-%20Foset.html" },
    { nombre: "Bolsa con 50 cinchos plásticos 50 lb", url: "/pages/detalle_productos/Cinchos%20plasticos%2050%20unds%20-%20Volteck.html" },
    { nombre: "Bolsa con 25 cinchos plásticos 50 lb", url: "/pages/detalle_productos/Cinchos%20plasticos%20negros%2050%20unds%20-%20Volteck.html" },
    { nombre: "Cinta de aislar de 18 m x 19 mm, negra", url: "/pages/detalle_productos/Cinta%20de%20aislar%20de%2018%20m%20x%2019%20mm,%20negra%20-%20Truper.html" },
    { nombre: "Cinta métrica larga de 30 m", url: "/pages/detalle_productos/Cinta%20metalica%20tipo%20cruceta%20de%2030%20m%20-%20Truper.html" },
    { nombre: "Clavija industrial plástica aterrizada, 2 polos+tierra", url: "/pages/detalle_productos/Clavija%20industrial%20aterrizada%20-%20Volteck.html" },
    { nombre: "Clavija industrial reforzada polarizada", url: "/pages/detalle_productos/Clavija%20industrial%20polarizada%20-%20Volteck.html" },
    { nombre: "Codo 90° de PVC de 1¨", url: "/pages/detalle_productos/Codo%2090%20de%201%20-%20Foset.html" },
    { nombre: "Compresor de aire, lubricado, horizontal 25L 3HP 127V", url: "/pages/detalle_productos/Compresor%20de%20aire%2025L%203HP%20-%20Truper.html" },
    { nombre: "Compresor de aire, con banda, horizontal 60L 4HP 127V", url: "/pages/detalle_productos/Compresor%20de%20aire%2060L%204HP%20-%20Truper.html" },
    { nombre: "Compresor de aire, lubricado, horizontal 50L 3½HP, 127 V", url: "/pages/detalle_productos/Compresor%20de%20aire%20de%2050%20L%20y%203%20y%20medio%20HP%20-%20Truper.html" },
    { nombre: "Conector conduit 1/2¨", url: "/pages/detalle_productos/Conector%20conduit%20-%20Volteck.html" },
    { nombre: "Conjunto impermeable doble capa amarillo con reflejante, G", url: "/pages/detalle_productos/Conjunto%20impermeable%20amarillo%20-%20Truper.html" },
    { nombre: "Cortador de ramas altas mango telescópico 2.4 m aluminio", url: "/pages/detalle_productos/Cortador%20de%20ramas%20-%20Truper.html" },
    { nombre: "Desarmador de cruz 1/4¨ x 4¨ mango de acetato", url: "/pages/detalle_productos/Desarmador%20de%20cruz%20mango%20de%20acetato%20-%20Truper.html" },
    { nombre: "Desarmador plano de golpe 1/4¨ x 4¨", url: "/pages/detalle_productos/Desarmador%20plano%20de%20golpe%20-%20Truper.html" },
    { nombre: "Desarmador tipo matraca con 42 puntas, 14 dados y extensión", url: "/pages/detalle_productos/Desarmador%20tipo%20matraca%20con%2042%20puntas%20-%20Truper.html" },
    { nombre: "Desbrozadora a gasolina 26cc mango tipo ¨D¨", url: "/pages/detalle_productos/Desbrozadora%20a%20gasolina%2026cc%20-%20Truper.html" },
    { nombre: "Desbrozadora eléctrica 550 W mango ¨D¨", url: "/pages/detalle_productos/Desbrozadora%20electrica%20550W%20-%20Truper.html" },
    { nombre: "Desmalezadora a gasolina 52 cc mango tipo ¨bici¨", url: "/pages/detalle_productos/Desmalezadora%20a%20gasolina%2052cc%20-%20Truper.html" },
    { nombre: "Destornillador inalámbrico 3.6V, 2 posiciones", url: "/pages/detalle_productos/Destornillador%20electrico%20de%203.6%20V%20-%20Truper.html" },
    { nombre: "Destornillador para panel de yeso 540W", url: "/pages/detalle_productos/Destornillador%20industrial%20de%20540W%20-%20Truper.html" },
    { nombre: "Disco de diamante de 4¨ x 1.6 mm rin continuo", url: "/pages/detalle_productos/Disco%20diamante%20de%204'%20x%201.6mm%20-%20Truper.html" },
    { nombre: "Disco 4-1/2¨ laminado grano 60 centro 7/8¨", url: "/pages/detalle_productos/Disco%20laminado%20grano%2060%20-%20Truper.html" },
    { nombre: "Disco sierra 10¨ para madera, 40 dientes centro 1¨", url: "/pages/detalle_productos/Disco%20sierra%20de%2010'%20para%20madera%20-%20Truper.html" },
    { nombre: "Disco sierra 12¨ para madera, 40 dientes centro 1¨", url: "/pages/detalle_productos/Disco%20sierra%20de%2012'%20para%20madera%20-%20Tuper.html" },
    { nombre: "Disco Tipo 41 de 4-1/2¨ x 1.2 mm corte fino de metal", url: "/pages/detalle_productos/Disco%20tipo%2041%20-%20Truper.html" },
    { nombre: "Ducha cromada Italia", url: "/pages/detalle_productos/Ducha%20cromada%20Italia%20-%20Rugo.html" },
    { nombre: "Ducha cromada Milenio", url: "/pages/detalle_productos/Ducha%20cromada%20Milenio%20-%20Rugo.html" },
    { nombre: "Ducha Florencia", url: "/pages/detalle_productos/Ducha%20Florencia%20-%20Rugo.html" },
    { nombre: "Ducha modo satélite", url: "/pages/detalle_productos/Ducha%20modo%20satelite%20-%20Rugo.html" },
    { nombre: "Escalera de extensión, tipo III, 20 peldaños", url: "/pages/detalle_productos/Escalera%20de%20extension%20de%20dos%20peldaños%20-%20Truper.html" },
    { nombre: "Escalera de tijera tipo ll 7 peldaños y bandeja", url: "/pages/detalle_productos/Escalera%20de%20tijera%20tipo%20II%20de%207%20peldanos%20y%20bandeja%20-%20Truper.html" },
    { nombre: "Escalera de tijera tipo III 5 escalones y bandeja", url: "/pages/detalle_productos/Escalera%20de%20tijera%20tipo%20III%20de%205%20escalones%20y%20bandeja%20-%20Truper.html" },
    { nombre: "Escalera telescópica,13 peldaños, tipo II, capacidad 102kg", url: "/pages/detalle_productos/Escalera%20telescopica%20de%2013%20peldanos%20-%20Truper.html" },
    { nombre: "Escalera de tijera tipo II 6 peldaños y bandeja", url: "/pages/detalle_productos/Escalera%20tijera%20-%20Truper.html" },
    { nombre: "Rastrillo plástico flexible para jardín, 30 dientes, mango 48¨", url: "/pages/detalle_productos/Escoba%20flexible%20de%2030%20dientes-%20Truper.html" },
    { nombre: "Escoba grande tipo abanico, cerdas de PVC, bastón de madera", url: "/pages/detalle_productos/Escoba%20grande%20tipo%20abanico%20-%20Klintek.html" },
    { nombre: "Escoba grande tipo cepillo, cerdas de PVC, bastón de madera", url: "/pages/detalle_productos/Escoba%20grande%20tipo%20cepillo%20-%20Klintek.html" },
    { nombre: "Escoba metálica para jardín, recta, 22 dientes, mango 48¨", url: "/pages/detalle_productos/Escoba%20metalica%20para%20jardin%20de%2022%20dientes%20-%20Truper.html" },
    { nombre: "Escoba plástica flex. p/jardín, 22 dientes, mango 48¨", url: "/pages/detalle_productos/Escoba%20plastica%20de%2022%20dientes%20-%20Pretul.html" },
    { nombre: "Esmeril de banco de 6¨ de 1/2 HP (370 W)", url: "/pages/detalle_productos/Esmeril%20de%20banco%20de%206'%20-%20Truper.html" },
    { nombre: "Esmeriladora angular 4-1/2¨, 950W", url: "/pages/detalle_productos/Esmeriladora%20angular%20950W%20-%20Truper.html" },
    { nombre: "Esmeriladora angular 4-1/2¨, 800W", url: "/pages/detalle_productos/Esmeriladora%20angular%20de%20800%20W%20-%20Truper.html" },
    { nombre: "Esmeriladora angular 7¨, 2200W", url: "/pages/detalle_productos/Esmeriladora%20angular%20de%202200%20W%20-%20Truper.html" },
    { nombre: "Estuche con 5 puntas de cruz PH2 largo 2¨", url: "/pages/detalle_productos/Estuche%20con%205%20puntas%20de%20cruz%20-%20Truper.html" },
    { nombre: "Extensión de uso rudo aterrizada 15 m 3x16 AWG", url: "/pages/detalle_productos/Extension%20de%20uso%20rudo%20calibre%2016%20-%20Volteck.html" },
    { nombre: "Faja lumbar con tercer cinturón, talla CH", url: "/pages/detalle_productos/Faja%20lumbar%20-%20Truper.html" },
    { nombre: "Flexómetro amarillo 8 m cinta 25 mm", url: "/pages/detalle_productos/Flexometro%20amarillo%20de%208%20m%20-%20Pretul.html" },
    { nombre: "Flexómetro XTRA 5.5 m cinta extra ancha 28 mm", url: "/pages/detalle_productos/Flexometro%20de%20cinta%20blanca%20-%20Truper.html" },
    { nombre: "Flexómetro Gripper contra impactos 5 m cinta 19 mm", url: "/pages/detalle_productos/Flexometro%20gripper%20de%205%20m%20-%20Truper.html" },
    { nombre: "Flexómetro Gripper contra impactos 8 m cinta 25 mm", url: "/pages/detalle_productos/Flexometro%20gripper%20de%208%20m%20-%20Truper.html" },
    { nombre: "Fumigador de 15 L manual de mochila", url: "/pages/detalle_productos/Fumigador%20de%2015%20litros%20-%20Pretul.html" },
    { nombre: "Fumigador de 25 L con motor a gasolina de 2 tiempos", url: "/pages/detalle_productos/Fumigador%20de%2025L%20con%20motor%20a%20gasolina%20-%20Truper.html" },
    { nombre: "Gafas p/soldar c/4 válvulas de ventilación, sombra 6", url: "/pages/detalle_productos/Gafas%20para%20soldar%20-%20Truper.html" },
    { nombre: "Gato hidráulico de patín 2t, 50 movimientos, maletín", url: "/pages/detalle_productos/Gato%20hidraulico%20de%202%20t%20-%20Truper.html" },
    { nombre: "Gato hidráulico de patín 2.5t, elevación rápida, con maletín", url: "/pages/detalle_productos/Gato%20hidraulico%20de%202.5%20t%20-%20Truper.html" },
    { nombre: "Gato hidráulico de botella de 21 Ton", url: "/pages/detalle_productos/Gato%20hidraulico%20de%20botella%20de%2021%20ton%20-%20Truper.html" },
    { nombre: "Gato hidráulico de botella de 32 Ton", url: "/pages/detalle_productos/Gato%20hidraulico%20de%20botella%20de%2032%20ton%20-%20Truper.html" },
    { nombre: "Generador portátil 8 kW motor a gasolina", url: "/pages/detalle_productos/Generador%20portatil%208%20kw%20motor%20a%20gasolina%20-%20Truper.html" },
    { nombre: "Generador portátil 10 kW motor a gasolina", url: "/pages/detalle_productos/Generador%20portatil%20de%2010kW%20-%20Truper.html" },
    { nombre: "Grasa blanca de litio en aerosol 295 ml", url: "/pages/detalle_productos/Grasa%20blanca%20de%20litio%20en%20aerosol%20-%20Truper.html" },
    { nombre: "Grifo mezclador de 4¨", url: "/pages/detalle_productos/Grifo%20mezclador%20de%204'%20-%20Rugo.html" },
    { nombre: "Grifo mezclador de 4¨ para lavabo", url: "/pages/detalle_productos/Grifo%20mezclador%20para%20lavamanos%20de%204'%20-%20Rugo.html" },
    { nombre: "Grifo mezclador monomando para fregadero", url: "/pages/detalle_productos/Grifo%20monomando%20para%20fregadero%20-%20Rugo.html" },
    { nombre: "Grifo mezclador monomando para pantry", url: "/pages/detalle_productos/Grifo%20monomando%20para%20pantry%20-%20Rugo.html" },
    { nombre: "Grifo mezclador monomando para lavamano cuadrado", url: "/pages/detalle_productos/Grifo%20para%20lavamanos%20cuadrado%20-%20Rugo.html" },
    { nombre: "Mezcladora monomando retráctil para fregadero", url: "/pages/detalle_productos/Grifo%20retractil%20-%20Rugo.html" },
    { nombre: "Guantes de carnaza y loneta, unitalla", url: "/pages/detalle_productos/Guantes%20de%20cuero%20y%20tela%20reforzados%20-%20Truper.html" },
    { nombre: "Guantes de piel de cabra, tipo operador", url: "/pages/detalle_productos/Guantes%20de%20piel%20para%20operador%20-%20Truper.html" },
    { nombre: "Hacha Michigan 3-1/2 lb, mango de hickory 34¨", url: "/pages/detalle_productos/Hacha%20Michigan%20-%20Truper.html" },
    { nombre: "Hacha para rajar madera 4.5 lb", url: "/pages/detalle_productos/Hacha%20para%20rajar%20madera%204.5%20lb%20-%20Truper.html" },
    { nombre: "Interruptor de sobreponer dúplex", url: "/pages/detalle_productos/Interruptor%20de%20sobreponer%20duplex%20-%20Volteck.html" },
    { nombre: "Interruptor de 3 polos 30A, enchufable", url: "/pages/detalle_productos/Interruptor%20termomagnetico%203%20polos%2030A%20-%20Voltek.html" },
    { nombre: "Inversor de corriente de 400 W con puertos USB", url: "/pages/detalle_productos/Inversor%20de%20corriente%20de%20400W%20-%20Truper.html" },
    { nombre: "Inversor de corriente de 1500 W con puertos USB", url: "/pages/detalle_productos/Inversor%20de%20corriente%20de%201500%20W%20-%20Truper.html" },
    { nombre: "Jaladera, perilla y cerrojo mariposa, latón brillante", url: "/pages/detalle_productos/Jaladera%20perilla%20y%20cerrojo%20en%20mariposa%20-%20Hermex.html" },
    { nombre: "Jalador con base de lámina de 50 cm, con bastón de madera", url: "/pages/detalle_productos/Jalador%20de%20lamina%20reforzada%20-%20Klintek.html" },
    { nombre: "Juego de 4 pinzas y 1 llave ajustable mango de vinil", url: "/pages/detalle_productos/Juego%20de%204%20pinzas%201%20llave%20ajustable%20-%20Pretul.html" },
    { nombre: "Juego de 4 repisas esquineras de vidrio", url: "/pages/detalle_productos/Juego%20de%204%20repisas%20esquinera%20de%20vidrio%20-%20Foset.html" },
    { nombre: "Juego 6 desarmadores de joyero y 4 mini pinzas Comfort Grip", url: "/pages/detalle_productos/Juego%20de%206%20desarmadores%20de%20joyero%20y%20pinzas%20-%20Truper.html" },
    { nombre: "Juego 6 desarmadores dieléctricos y 1 probador de corriente", url: "/pages/detalle_productos/Juego%20de%206%20desarmadores%20dielectricos%20y%201%20probador%20de%20corriente%20-%20Truper.html" },
    { nombre: "Juego de 9 brocas para metal, concreto y madera", url: "/pages/detalle_productos/Juego%20de%209%20brocas%20-%20Truper.html" },
    { nombre: "Juego de 11 llaves combinadas extralargas pulidas", url: "/pages/detalle_productos/Juego%20de%2011%20llaves%20combinadas%20extralargas%20pulidas%20-%20Truper.html" },
    { nombre: "Juego con 15 desarmadores de precisión", url: "/pages/detalle_productos/Juego%20de%2015%20desarmadores%20de%20precision%20-%20Truper.html" },
    { nombre: "Juego de 18 herramientas cuadro 1/2¨ mm para mecánico", url: "/pages/detalle_productos/Juego%20de%2018%20herramientas%20-%20Truper.html" },
    { nombre: "Juego 20 llaves combinadas extralargas pulidas std y mm", url: "/pages/detalle_productos/Juego%20de%2020%20llaves%20combinadas%20-%20Truper.html" },
    { nombre: "Juego 25 llaves allen largas mixtas punta bola con organizador", url: "/pages/detalle_productos/Juego%20de%2025%20llaves%20allen%20mixtas%20-%20Truper.html" },
    { nombre: "Juego de 29 brocas HSS para metal en estuche", url: "/pages/detalle_productos/Juego%20de%2029%20brocas%20-%20Truper.html" },
    { nombre: "Juego de 42 herramientas cuadro 1/2¨ std y mm para mecánico", url: "/pages/detalle_productos/Juego%20de%2042%20herramientas%20-%20Truper.html" },
    { nombre: "Juego de 70 herramientas 1/4¨ y 3/8¨ para mecánico", url: "/pages/detalle_productos/Juego%20de%2070%20herramientas%20-%20Pretul.html" },
    { nombre: "Juego de 100 puntas mixtas largo 1¨ en estuche plástico", url: "/pages/detalle_productos/Juego%20de%20100%20puntas%20mixtas%20en%20estuche%20plastico%20-%20Truper.html" },
    { nombre: "Juego de 133 herramientas", url: "/pages/detalle_productos/Juego%20de%20133%20herramientas%20-%20Pretul.html" },
    { nombre: "Juego de 172 herramientas 1/4¨, 3/8¨ y 1/2¨ mm para mecánico", url: "/pages/detalle_productos/Juego%20de%20172%20herramientas%20-%20Truper.html" },
    { nombre: "Juego de llaves de empotrar para regadera", url: "/pages/detalle_productos/Juego%20de%20llaves%20con%20maneral%20de%20cruceta%20-%20Rugo.html" },
    { nombre: "Juego de 8 tensores elásticos", url: "/pages/detalle_productos/Juego%20de%20tensores%20-%20Pretul.html" },
    { nombre: "Lámpara de alta potencia 70 W E39, luz de día", url: "/pages/detalle_productos/Lampara%20de%2070%20W%20-%20Volteck.html" },
    { nombre: "Lámpara espiral T4 24 W luz neutra en blíster", url: "/pages/detalle_productos/Lampara%20espiral%20de%2024%20W%20-%20Volteck.html" },
    { nombre: "Lámpara espiral T4 20 W luz de día en blíster", url: "/pages/detalle_productos/Lampara%20espiral%20T4%2020%20W%20luz%20de%20dia%20-%20Volteck.html" },
    { nombre: "Lámpara espiral T5 65 W alta potencia luz de día", url: "/pages/detalle_productos/Lampara%20espiral%20T5%2065%20W%20alta%20potencia%20luz%20de%20dia%20-%20Volteck.html" },
    { nombre: "Lámpara LED 1000 lm de trabajo, recargable", url: "/pages/detalle_productos/Lampara%20LED%201000%20lm%20de%20trabajo%20-%20Truper.html" },
    { nombre: "Lámpara de LED 6 W tipo MR 16 base GU10 luz de día", url: "/pages/detalle_productos/Lampara%20LED%20de%206%20W%20-%20Volteck.html" },
    { nombre: "Lámpara LED tipo bulbo A19 10 W con sensor de luz", url: "/pages/detalle_productos/Lampara%20LED%20de%2010%20W%20-%20Volteck.html" },
    { nombre: "Lavabo cerámico con rebosadero blanco", url: "/pages/detalle_productos/Lavabo%20ceramico%20blanco%20-%20Foset.html" },
    { nombre: "Lavabo cerámico con rebosadero marfil", url: "/pages/detalle_productos/Lavabo%20ceramico%20marfil%20-%20Foset.html" },
    { nombre: "Lavaplatos de empotrar 120x50cm doble tina derecha", url: "/pages/detalle_productos/Lavaplatos%20de%20empotrar%20de%20doble%20tina%20-%20Foset.html" },
    { nombre: "Lavaplatos con escurridero derecho para fregadero", url: "/pages/detalle_productos/Lavaplatos%20de%20empotrar%20inoxidable%20-%20Rugo.html" },
    { nombre: "Lentes de seguridad ajustables transparentes", url: "/pages/detalle_productos/Lentes%20de%20seguridad%20ajustables%20-%20Truper.html" },
    { nombre: "Lija de esmeril roja grano 40 de óxido de aluminio", url: "/pages/detalle_productos/Lija%20de%20esmeril%20roja%20grano%2040%20-%20Truper.html" },
    { nombre: "Limpiador de carburador, 470ml (16oz)", url: "/pages/detalle_productos/Limpiador%20de%20carburador%20-%20Truper.html" },
    { nombre: "Línea de vida 1.8 m cinta políéster con absorbedor impacto", url: "/pages/detalle_productos/Linea%20de%20vida%20-%20Truper.html" },
    { nombre: "Linterna de minero LED 160 lm, recargable", url: "/pages/detalle_productos/Linterna%20de%20minero%20125%20lm%20-%20Truper.html" },
    { nombre: "Linterna plástica 1 LED 150 lm recargable", url: "/pages/detalle_productos/Linterna%20plastica%201%20LED%20150%20lm%20recargable%20-%20truper.html" },
    { nombre: "Llave angular de compresión recta 1/2¨ x 3/8¨", url: "/pages/detalle_productos/Llave%20angular%20de%20compresion%20recta%20-%20Foset.html" },
    { nombre: "Llave angular de compresión robusta 1/2¨ x 3/8¨", url: "/pages/detalle_productos/Llave%20angular%20de%20compresión%20robusta%20-%20Foset.html" },
    { nombre: "Llave combinada extralarga 1-1/2¨ x 467 mm de largo", url: "/pages/detalle_productos/Llave%20combinada%20extralarga%20-%20Truper.html" },
    { nombre: "Llave de cruz 20¨ pulida y cromada", url: "/pages/detalle_productos/Llave%20de%20cruz%2020'%20-%20Truper.html" },
    { nombre: "Llave de impacto inalámbrica 1/2¨, 20V, sin carbones", url: "/pages/detalle_productos/Llave%20de%20impacto%2020V%20-%20Truper.html" },
    { nombre: "Llave para ducha de empotrar", url: "/pages/detalle_productos/Llave%20para%20ducha%20de%20empotrar%20-%20Rugo.html" },
    { nombre: "Llave stilson 8¨ cuerpo robusto de hierro dúctil", url: "/pages/detalle_productos/Llave%20Stilson%208'%20-%20Truper.html" },
    { nombre: "Llave stilson 36¨ cuerpo robusto de hierro dúctil", url: "/pages/detalle_productos/Llave%20Stilson%2036'%20-%20Truper.html" },
    { nombre: "Lubricante multiusos en aerosol, 235ml (8oz)", url: "/pages/detalle_productos/Lubricante%20multiusos%20en%20aerosol%20-%20Truper.html" },
    { nombre: "Machete doble filo 18¨, con correa, funda de cartón", url: "/pages/detalle_productos/Machete%20doble%20filo%20de%2018'%20-%20Truper.html" },
    { nombre: "Machete estándar 26¨ cacha negra inyectada", url: "/pages/detalle_productos/Machete%20estandar%20de%2026'%20-%20Truper.html" },
    { nombre: "Mango articulado con cuadro de 3/4¨, largo 20¨", url: "/pages/detalle_productos/Mango%20articulado%20de%2020'%20-%20Truper.html" },
    { nombre: "Manguera 5/8¨ super reforzada 4 capas 30 m conexiones metal", url: "/pages/detalle_productos/Manguera%20super%20reforzada%20de%204%20capas%20-%20Truper.html" },
    { nombre: "Martillo pulido 16 oz uña curva con mango tubular", url: "/pages/detalle_productos/Martillo%20de%2016%20oz%20-%20Truper.html" },
    { nombre: "Martillo demoledor HEX 20 kg, 55J, 1600W", url: "/pages/detalle_productos/Martillo%20demoledor%201600W%20-%20Truper.html" },
    { nombre: "Martillo tubular pulido 16 oz uña curva", url: "/pages/detalle_productos/Martillo%20tubular%20pulido%2016%20oz%20uña%20curva%20-%20Truper.html" },
    { nombre: "Mazo octagonal 10 lb, mango de madera 36¨", url: "/pages/detalle_productos/Mazo%20octagonal%20de%2010%20lb%20-%20Truper.html" },
    { nombre: "Metro de cable coaxial RG6 en rollo de 100 m", url: "/pages/detalle_productos/Metro%20de%20cable%20coaxial%20de%20100%20m%20-%20Volteck.html" },
    { nombre: "Metro manguera rígida 4¨ succión para motobomba, rollo 30 m", url: "/pages/detalle_productos/Metro%20de%20manguera%20para%20motobomba%20-%20Truper.html" },
    { nombre: "Mezcladora fregadero 8¨ negro de cuello largo y palanca", url: "/pages/detalle_productos/Mezcladora%20para%20fregadero%20de%208'%20negro%20-%20Foset.html" },
    { nombre: "Mini bomba manual para bicicleta de 60 PSI", url: "/pages/detalle_productos/Mini%20bomba%20manual%20para%20bicicleta%20de%2060%20PSI%20-%20Truper.html" },
    { nombre: "Motobomba autocebante 1¨ x 1¨ a gasolina 1-1/3 HP", url: "/pages/detalle_productos/Motobomba%20a%20gasolina%20-%20Truper.html" },
    { nombre: "Motobomba autocebante 2¨ x 2¨ a gasolina 7 HP", url: "/pages/detalle_productos/Motobomba%20autocebante%202'%20x%202'%20a%20gasolina%207%20HP%20-%20Truper.html" },
    { nombre: "Mufa con abrazadera para tubo 1-1/4¨", url: "/pages/detalle_productos/Mufa%20con%20abrazadera%20-%20Volteck.html" },
    { nombre: "Multicontacto 16 AWG doméstico con 6 entradas, negro", url: "/pages/detalle_productos/Multicontacto%20de%206%20entradas%20-%20Volteck.html" },
    { nombre: "Multicontacto 14 AWG industrial supresor picos 10 entradas", url: "/pages/detalle_productos/Multicontacto%20de%2010%20entradas%20-%20Volteck.html" },
    { nombre: "Multímetro digital para mant automotriz con RMS verdadero", url: "/pages/detalle_productos/Multimetro%20digital%20automotriz%20-%20Truper.html" },
    { nombre: "Multímetro digital junior", url: "/pages/detalle_productos/Multimetro%20digital%20junior%20-%20Truper.html" },
    { nombre: "Orejera ajustable para casco", url: "/pages/detalle_productos/Orejera%20ajustable%20para%20cascos%20-%20Truper.html" },
    { nombre: "Pala carbonera T-2000, puño ¨Y¨", url: "/pages/detalle_productos/Pala%20carbonera%20T-2000,%20puño%20'Y'-%20Truper.html" },
    { nombre: "Pala cuadrada, mango largo 44¨", url: "/pages/detalle_productos/Pala%20cuadrada%20de%2044'%20-%20Pretul.html" },
    { nombre: "Pala cuadrada T-2000, puño ¨Y¨", url: "/pages/detalle_productos/Pala%20cuadrada%20T-2000,%20puño%20'Y'%20-%20Truper.html" },
    { nombre: "Pala redonda, puño ¨D¨, mango 28-1/2¨", url: "/pages/detalle_productos/Pala%20redonda%20con%20puño%20D%20-%20Pretul.html" },
    { nombre: "Parrilla gas empotrable 60cm de 4 quemadores, vidrio negro", url: "/pages/detalle_productos/Parrilla%20de%20gas%20empotrable%20de%204%20quemadores%20vidrio%20negro%20-%20Foset.html" },
    { nombre: "Parrilla gas empotrable 75cm de 5 quemadores, vidrio negro", url: "/pages/detalle_productos/Parrilla%20de%20gas%20empotrable%20de%205%20quemadores%20vidrio%20negro%20-%20Foset.html" },
    { nombre: "Parrilla gas empotrable 90cm de 5 quemadores, acero inoxidable", url: "/pages/detalle_productos/Parrilla%20empotrable%20de%205%20quemadores%20acero%20inoxidable%20-%20Foset.html" },
    { nombre: "Perilla cerámica blanca", url: "/pages/detalle_productos/Perilla%20de%20ceramica%20blanca%20-%20Hermex.html" },
    { nombre: "Perilla metálica estilo ¨Contempo¨, latón brillante", url: "/pages/detalle_productos/Perilla%20metalica%20de%20laton%20brillante%20-%20Hermex.html" },
    { nombre: "Pinza 9¨ pela cables, 26 a 10 AWG", url: "/pages/detalle_productos/Pinza%20de%209'%20pelacables%20-%20Truper.html" },
    { nombre: "Pinza de hacendado 11¨ mango de PVC", url: "/pages/detalle_productos/Pinza%20de%20hacendado%20de%2011'%20con%20mango%20de%20PVC%20-%20Truper.html" },
    { nombre: "Pinza para electricista 6¨ mango de PVC", url: "/pages/detalle_productos/Pinza%20para%20electricista%20de%206'%20-%20Truper.html" },
    { nombre: "Pinza para electricista 9¨ c/ponchador de terminales", url: "/pages/detalle_productos/Pinza%20para%20electricista%20de%209'%20-%20Truper.html" },
    { nombre: "Piocha con mango de madera 14¨", url: "/pages/detalle_productos/Piocha%20de%2014'%20-%20Truper.html" },
    { nombre: "Pisón 10¨ x 10¨ con mango de acero de 48¨", url: "/pages/detalle_productos/Pison%20de%2010x10%20-%20Truper.html" },
    { nombre: "Pistola de calor 2000W con 9 accesorios", url: "/pages/detalle_productos/Pistola%20de%20calor%20de%202000%20W%20-%20Truper.html" },
    { nombre: "Pistola para riego de 4¨ de 2 funciones metálica", url: "/pages/detalle_productos/Pistola%20para%20riego%20con%20dos%20funciones%20-%20Pretul.html" },
    { nombre: "Pito de 3¨ de latón maquinado para manguera", url: "/pages/detalle_productos/Pito%20de%20laton%20para%20manguera%20-%20Truper.html" },
    { nombre: "Podadora con motor a gasolina de 5 HP, 20¨ de corte", url: "/pages/detalle_productos/Podadora%20de%205%20HP%20-%20Truper.html" },
    { nombre: "Podadora con motor a gasolina de 6 HP, 22¨ de corte", url: "/pages/detalle_productos/Podadora%20de%206%20HP%20-%20Truper.html" },
    { nombre: "Rack modular para tornillos con 48 gavetas", url: "/pages/detalle_productos/Rack%20modular%20para%20tornillos%20-%20Fiero.html" },
    { nombre: "Rastrillo jardinero, 14 dientes", url: "/pages/detalle_productos/Rastrillo%20jardinero%20de%2014%20dientes%20-%20Pretul.html" },
    { nombre: "Rastrillo recto de 12 dientes, mango de 48¨", url: "/pages/detalle_productos/Rastrillo%20recto%20de%2012%20dientes%20-%20Pretul.html" },
    { nombre: "Recogedor de plástico", url: "/pages/detalle_productos/Recogedor%20de%20plastico%20-%20Klintek.html" },
    { nombre: "Regadera cuadrada ABS 4¨ acabado negro mate con brazo", url: "/pages/detalle_productos/Regadera%20cuadrada%20ABS%20de%204'%20-%20Foset.html" },
    { nombre: "Regadera eléctrica con 4 temperaturas de 14.5cm, blanca", url: "/pages/detalle_productos/Regadera%20electrica%20de%204%20temperaturas%20-%20Foset.html" },
    { nombre: "Respirador de cara completa", url: "/pages/detalle_productos/Respirador%20de%20cara%20completa%20-%20Truper.html" },
    { nombre: "Rotomartillo 1/2¨, 700W", url: "/pages/detalle_productos/Rotomartillo%201s2',%20700W%20-Truper.html" },
    { nombre: "Rotomartillo 1/2¨, 1200W", url: "/pages/detalle_productos/Rotomartillo%20de%201200W%20-%20Truper.html" },
    { nombre: "Router 1200W, 1-3/4 HP", url: "/pages/detalle_productos/Router%20de%201200W%20-%20Truper.html" },
    { nombre: "Rueda abrasiva p/esmeril 6X3/4¨, óxido de aluminio, grano 60", url: "/pages/detalle_productos/Rueda%20abrasiva%20para%20esmeril%20-%20Truper.html" },
    { nombre: "Serie de 14.6 m con 24 luces de LED para exterior", url: "/pages/detalle_productos/Serie%20de%2024%20luces%20LED%20-%20Volteck.html" },
    { nombre: "Serrucho 18¨ Dorado, 9 DPP", url: "/pages/detalle_productos/Serrucho%20de%2018'%20dorado%20-%20Truper.html" },
    { nombre: "Sierra cinta 14¨, 1 HP (750 W)", url: "/pages/detalle_productos/Sierra%20cinta%2014'%20-%20Truper.html" },
    { nombre: "Sierra circular 7-1/4¨, 1750W", url: "/pages/detalle_productos/Sierra%20circular%207-1s4',%201750W%20-%20Truper.html" },
    { nombre: "Sierra circular inalámbrica 6-1/2¨, 20V, sin carbones", url: "/pages/detalle_productos/Sierra%20circular%20inalambrica%20de%2020%20V%20-%20Truper.html" },
    { nombre: "Soldadora a gasolina 145 A con generador", url: "/pages/detalle_productos/Soldadora%20a%20gasolina%20de%20145%20A%20-%20Truper.html" },
    { nombre: "Soldadora inversora, 160 A, Bi-voltaje 127/220 V", url: "/pages/detalle_productos/Soldadora%20inversora%20de%20160%20A%20-%20Pretul.html" },
    { nombre: "Soldadura con núcleo resina 60/40, para electrónica, 450 g", url: "/pages/detalle_productos/Soldadura%20con%20núcleo%20resina%2060s40,%20450%20g%20-truper.html" },
    { nombre: "Taladro de piso 8¨, 1/3 HP (250 W), broquero 1/2¨", url: "/pages/detalle_productos/Taladro%20de%20piso%208'%20-%20Truper.html" },
    { nombre: "Taladro de piso 17¨, 1-1/2 HP (1200 W), broquero 5/8¨", url: "/pages/detalle_productos/Taladro%20de%20piso%2017'%20-%20Truper.html" },
    { nombre: "Taladro inalámbrico 3/8¨, 12V", url: "/pages/detalle_productos/Taladro%20inalambrico%20de%2012%20V%20-%20Pretul.html" },
    { nombre: "Tanque bajo cerámico con accesorios, blanco", url: "/pages/detalle_productos/Tanque%20para%20WC%20ceramico%20con%20accesorios%20-%20Foset.html" },
    { nombre: "Taquetes expansivos de 1/2¨ con tornillo", url: "/pages/detalle_productos/Taquete%20expansivo%20con%20tornillo%20de%20media%20-%20Fiero.html" },
    { nombre: "Taquetes expansivos de 3/8¨ con tornillo ", url: "/pages/detalle_productos/Taquete%20expansivo%20con%20tornillo%20de%20tres%20octavo%20-%20Fiero.html" },
    { nombre: "Tijera 6¨ para electricista", url: "/pages/detalle_productos/Tijera%20de%206'%20para%20electricista%20-%20Truper.html" },
    { nombre: "Toldo negro de 5 m", url: "/pages/detalle_productos/Toldo%20negro%205%20metros%20-%20Fiero.html" },
    { nombre: "Tornillo de banco 4¨ uso industrial de hierro nodular", url: "/pages/detalle_productos/Tornillo%20de%20banco%20de%204'%20-%20Truper.html" },
    { nombre: "Trapeador de microfibra lisa, bastón de 120 cm", url: "/pages/detalle_productos/Trapeador%20ligero%20de%20microfibra%20-%20Klintek.html" },
    { nombre: "Tubo de 3 m de PVC de 3/4¨ hidráulico RD 26", url: "/pages/detalle_productos/Tubo%203%20m%20PVC%20-%20Foset.html" },
    { nombre: "Tuerca unión lisa de PVC 3/4¨", url: "/pages/detalle_productos/Tuerca%20union%20de%20PVC%20-%20Foset.html" },
    { nombre: "Válvula de pie con rejilla acero inoxidable de 1¨", url: "/pages/detalle_productos/Valvula%20de%20pie%20con%20rejilla%20acero%20inoxidable%20de%201'%20-%20Foset.html" },
]

/*const filtrar = () => {
    resultado.setAttribute("style", "display:block")
    resultado.innerHTML = '';
    const texto = buscar.value.toLowerCase();

    for (let i of productos) {  
        let producto = i.nombre.toLowerCase();
        if (producto.indexOf(texto) !== -1) {
            resultado.innerHTML += `
                <li>${i.nombre} <a href=${i.url} target="_blank"> Ver Producto</a></li>
            `
        }
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
                <li>No se encuentran coincidencias</li>
            `
    }

    if (buscar.value == '') { 
        resultado.setAttribute("style", "display:none")
    }
}*/

const filtrar = () => {
    resultado.setAttribute("style", "display:block")
    resultado.innerHTML = '';
    const texto = buscar.value.toLowerCase();
    
    for (let i of productos) {
        
        let producto = i.nombre.toLowerCase();
        if (producto.indexOf(texto) !== -1) {
            resultado.innerHTML += `
                <li>${i.nombre} <a href=${i.url} target="_blank"> Ver Producto</a></li>
            `
        }
        console.log(texto);
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
                <li>No se encuentran coincidencias</li>
            `
    }

    if (buscar.value == '') {
        resultado.setAttribute("style", "display:none")
    }
}

window.addEventListener("keyup", function (event) {
    if (event.keyCode === 27) {
        search_bar.setAttribute("style", "display:none");
        btn_search.setAttribute("style", "display:block");
        btn_close.setAttribute("style", "display:none");
        resultado.setAttribute("style", "display:none");
        buscar.value = '';
    }
});

search_bar.addEventListener('keyup', filtrar);

