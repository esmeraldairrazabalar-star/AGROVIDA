/**
 * AgroVida - Módulo de Enfermedades y Plagas Agrícolas
 * Catálogo técnico oficial validado:
 * - Corteva Agriscience (Papa)
 * - Doctor Agro Perú (Arveja y leguminosas)
 * - Portal Frutícola (Haba y Quinua)
 * - Yara Perú (Maíz y Choclo)
 */

const EnfermedadesModule = {
  catalogoBase: [
  {
    "id": "enf_papa_gota_corteva",
    "nombre": "Gota o Tizón tardío de la papa",
    "nombreCientifico": "Phytophthora infestans",
    "cultivos": [
      "Papa",
      "Tomate"
    ],
    "foto": "img/cultivos/papa-tizon-tardio.svg",
    "fuente": "Corteva Agriscience (corteva.com)",
    "severidad": "Alta",
    "sintomas": "Manchas necróticas acuosas irregulares en los márgenes y ápices de las hojas, de verde oscuro a marrón y negro. En condiciones de alta humedad aparece una vellosidad blanca en el envés (esporangióforos). En tallos causa lesiones anilladas que quiebran la planta. En los tubérculos genera una pudrición seca de color castaño-rojizo bajo la piel.",
    "causas": "Oomiceto altamente destructivo favorecido por humedad relativa superior al 85%, neblinas frecuentes y temperaturas frescas de 12°C a 20°C. Las esporas se dispersan rápidamente por viento y salpicaduras de lluvia.",
    "prevencion": "Monitoreo preventivo continuo. Utilizar tubérculo-semilla certificado libre de patógenos. Respetar distancias entre surcos de 80 a 90 cm para ventilación. Realizar aporque alto para cubrir los tubérculos y evitar que las esporas lavadas penetren.",
    "queHacer": "Manejo según programa fitosanitario Corteva: Aplicaciones preventivas y curativas con fungicidas especializados de alta eficacia como Zorvec® Encantia® (acción sistémica prolongada), Curzate® M-8, Equation® Pro y protectores multisitio como Dithane™ M-45 WP NT o Cobrethane™.",
    "practicasEvitar": "No regar por aspersión al final de la tarde o en la noche. No abandonar rastrojos ni plantas voluntarias ('huachas') infectadas en el campo. Evitar el exceso de fertilización nitrogenada que hace el tejido foliar más tierno y susceptible.",
    "evitarRecurrencia": "Rotación de cultivos por mínimo 3 campañas sin solanáceas y desinfección preventiva del terreno."
  },
  {
    "id": "enf_papa_tizon_temprano_corteva",
    "nombre": "Tizón temprano de la papa",
    "nombreCientifico": "Alternaria solani",
    "cultivos": [
      "Papa",
      "Tomate"
    ],
    "foto": "img/cultivos/papa-tizon-temprano.svg",
    "fuente": "Corteva Agriscience (corteva.com)",
    "severidad": "Media",
    "sintomas": "Manchas circulares u ovales castaño oscuro a negro en hojas inferiores, caracterizadas por presentar anillos concéntricos en forma de diana o 'tiro al blanco'. Las hojas afectadas se tornan amarillas, se secan y quedan adheridas al tallo.",
    "causas": "Hongo que sobrevive en rastrojos secos y malezas solanáceas. Prolifera con la alternancia de períodos húmedos (rocío nocturno) y días cálidos y secos (22°C - 28°C), común en plantas bajo estrés nutricional.",
    "prevencion": "Garantizar una nutrición balanceada (adecuado aporte de potasio y magnesio). Evitar el estrés hídrico. Manejo de rastrojos mediante arado profundo.",
    "queHacer": "Tratamientos foliares recomendados por Corteva: Aplicación de fungicidas como Fontelis® (carboxamida de última generación) en rotación con Dithane™ M-45 WP NT para prevenir resistencias.",
    "practicasEvitar": "Evitar el estrés por sequía seguido de sobre-riego. No descuidar las hojas inferiores de la planta.",
    "evitarRecurrencia": "Eliminar rastrojos de cosechas previas e incorporar materia orgánica descompuesta al suelo."
  },
  {
    "id": "enf_papa_gorgojo_corteva",
    "nombre": "Gorgojo de los Andes / Gusano blanco de la papa",
    "nombreCientifico": "Premnotrypes vorax",
    "cultivos": [
      "Papa"
    ],
    "foto": "img/cultivos/papa-gorgojo-andes.svg",
    "fuente": "Corteva Agriscience (corteva.com)",
    "severidad": "Alta",
    "sintomas": "Adultos provocan mordeduras semicirculares características en los bordes de las hojas ('en forma de media luna'). El daño principal lo causan las larvas que barrenan el interior de los tubérculos, excavando galerías cavernosas llenas de excrementos oscuros, destruyendo por completo la calidad comercial.",
    "causas": "Insecto coleóptero no volador endémico de los Andes. Los adultos emergen del suelo con las primeras lluvias y caminan desde lotes infestados hacia las nuevas siembras.",
    "prevencion": "Zanjas perimetrales con plástico en los linderos para atrapar adultos caminadores. Cosecha oportuna sin demoras en el terreno. Uso de semilla limpia sin orificios.",
    "queHacer": "Manejo químico según Corteva: Aplicaciones dirigidas al cuello de la planta y base de los tallos durante la emergencia y el aporque con insecticidas como Vydate® C-LV o Exalt® en rotación estratégica.",
    "practicasEvitar": "No transportar tubérculos agusanados a almacenes sanos ni botar papas con gusano al borde de la chacra.",
    "evitarRecurrencia": "Rotación rigurosa con pastos, cereales o leguminosas. Dejar aves en el lote tras la cosecha para predación de larvas."
  },
  {
    "id": "enf_papa_polilla_corteva",
    "nombre": "Polilla de la papa y Polilla guatemalteca",
    "nombreCientifico": "Tecia solanivora / Phthorimaea operculella",
    "cultivos": [
      "Papa"
    ],
    "foto": "img/cultivos/papa-polilla.svg",
    "fuente": "Corteva Agriscience (corteva.com)",
    "severidad": "Alta",
    "sintomas": "Larvas que penetran en los tubérculos formando túneles superficiales y profundos tanto en campo como en bodegas de almacenamiento. Se observa aserrín oscuro expulsado por los orificios de entrada. Facilita la entrada de bacterias pudridoras.",
    "causas": "Microlepidópteros con altísima capacidad de reproducción en épocas secas y cálidas. Las hembras ovipositan en el suelo cerca de las raíces cuando este se agrieta por falta de humedad.",
    "prevencion": "Mantener el suelo con humedad constante para evitar agrietamientos en surcos. Aporque alto y compacto para que las polillas no alcancen los tubérculos. Uso de trampas de feromona.",
    "queHacer": "Control fitosanitario recomendado por Corteva: Aplicaciones foliares y a la base con insecticidas como Lannate™ 40, Closer™ 240 SC, Toretto™ o Exalt® al detectar vuelo de adultos.",
    "practicasEvitar": "No dejar tubérculos expuestos a la luz del sol en la superficie de los surcos ni almacenar papas sin seleccionar.",
    "evitarRecurrencia": "Limpieza profunda y encalado de paredes de almacenes de papa antes de guardar la nueva cosecha."
  },
  {
    "id": "enf_papa_rizoctonia_corteva",
    "nombre": "Costra negra y chancro del tallo en papa",
    "nombreCientifico": "Rhizoctonia solani",
    "cultivos": [
      "Papa"
    ],
    "foto": "img/cultivos/papa-rizoctonia.svg",
    "fuente": "Corteva Agriscience (corteva.com)",
    "severidad": "Media",
    "sintomas": "En tubérculos: costras negras irregulares muy duras adheridas a la piel (esclerocios) que parecen terrones de tierra pero no se caen al lavar. En brotes y tallos subterráneos: lesiones necróticas hundidas de color marrón que estrangulan el brote y causan fallas en la emergencia.",
    "causas": "Hongo habitante común del suelo y transmitido en tubérculos semilla infectados. Favorecido por siembras en suelos fríos, pesados y con drenaje deficiente.",
    "prevencion": "Desinfección de semilla antes de sembrar. Siembra superficial en cama caliente para acelerar la emergencia de los brotes y aporcar luego gradualmente.",
    "queHacer": "Aplicar fungicidas curasemillas específicos y bioestimulantes de enraizamiento. Tratamientos al fondo del surco al momento de la siembra.",
    "practicasEvitar": "No sembrar en terrenos pesados inundables ni usar tubérculos con presencia evidente de costras negras.",
    "evitarRecurrencia": "Solarización del suelo en época de estiaje y rotación larga con abonos verdes."
  },
  {
    "id": "enf_arveja_minador_doctoragro",
    "nombre": "Mosca minadora de la arveja",
    "nombreCientifico": "Liriomyza huidobrensis",
    "cultivos": [
      "Arvejas",
      "Haba"
    ],
    "foto": "img/cultivos/arveja-mosca-minadora.png",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Alta",
    "sintomas": "Las larvas se alimentan del parénquima foliar excavando galerías o minas serpenteantes translúcidas y sinuosas que secan el tejido foliar. Los adultos realizan perforaciones de alimentación y oviposición en hojas y vainas tiernas, dejando cicatrices necróticas que demeritan gravemente la calidad exportable del grano verde.",
    "causas": "Plaga clave en los valles de arveja del Perú. Los adultos presentan máxima actividad al mediodía con alta radiación solar (ocultándose en días nublados bajo las hojas). La oviposición es intensa en las primeras horas de la mañana.",
    "prevencion": "Manejo Integrado según Doctor Agro: Instalación de cercos vivos con maíz alrededor de la parcela para albergar y fomentar fauna benéfica. Colocación de trampas pegantes amarillas (100 trampas/ha) para captura masiva de adultos. Fomento del parasitoide biológico nativo Halticoptera arduine.",
    "queHacer": "Lavados fitosanitarios con jabón potásico al 1-2% para limpiar hojas y oviposiciones. Aplicación de insecticidas selectivos y de bajo impacto (reguladores de crecimiento o grupo IRAC 30) respetando rigurosamente los Límites Máximos de Residuos (LMR).",
    "practicasEvitar": "No aplicar insecticidas piretroides o fosforados de amplio espectro que eliminan a las avispitas parasitoides benéficas.",
    "evitarRecurrencia": "Eliminación inmediata de rastrojos luego de la cosecha y rotación con cultivos no hospederos."
  },
  {
    "id": "enf_arveja_prodiplosis_doctoragro",
    "nombre": "Mosquilla de los brotes o 'Caracha' en arveja",
    "nombreCientifico": "Prodiplosis longifila",
    "cultivos": [
      "Arvejas",
      "Haba"
    ],
    "foto": "img/cultivos/arveja-dano-prodiplosis.png",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Alta",
    "sintomas": "Las larvas raspan y dañan los tejidos meristemáticos tiernos, provocando encrespamiento, oscurecimiento y atrofia de los brotes en crecimiento (aspecto de 'escoba de bruja'). Causa aborto y caída masiva de botones florales, y en las vainas en formación genera deformaciones severas, curvaturas y costras corchosas ('caracha').",
    "causas": "Díptero cecidómido de hábitos sumamente crípticos. Posee un ciclo biológico sumamente rápido (de 9 a 11 días en épocas cálidas de verano), con múltiples generaciones superpuestas. Los adultos muestran mayor actividad durante las horas del crepúsculo.",
    "prevencion": "Control cultural estricto: Eliminación constante de malezas hospederas en bordos, acequias y caminos colindantes. Riegos oportunos sin generar estrés a la planta.",
    "queHacer": "Soluciones técnicas Doctor Agro: Lavados a alta presión al final de la tarde utilizando jabón potásico enriquecido con coadyuvantes siliconados (adherentes) para atrapar e inmovilizar a los adultos al momento de su vuelo. Rotación estratégica de insecticidas de contacto e ingestión para romper ciclos biológicos.",
    "practicasEvitar": "No regar en exceso ni permitir brotes etiolados débiles. Evitar aplicaciones al mediodía cuando los adultos están ocultos.",
    "evitarRecurrencia": "Mantener limpios los canales de regadío y monitorear brotes tiernos semanalmente."
  },
  {
    "id": "enf_arveja_gusanos_doctoragro",
    "nombre": "Gusanos de tierra y cortadores de brotes en arveja",
    "nombreCientifico": "Copitarsia sp. / Spodoptera sp. / Chrysodeixis includens",
    "cultivos": [
      "Arvejas",
      "Haba"
    ],
    "foto": "img/cultivos/arveja-dano-gusano.png",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Media",
    "sintomas": "En plántulas recién emergidas: corte a ras del cuello del tallo provocando la caída y muerte de la plantita. En plantas en floración y fructificación: las larvas esqueletizan las hojas o perforan directamente las vainas verdes para alimentarse de los granos tiernos en llenado.",
    "causas": "Lepidópteros de hábitos crepusculares y nocturnos. Durante el día las larvas permanecen ocultas bajo el suelo, terrones o malezas secas para protegerse del sol y aves.",
    "prevencion": "Recomendaciones Doctor Agro: Riegos de machaco pesados previos a la siembra para anegar el suelo y ahogar pupas invernantes. Buena preparación y desmenuzado del terreno. Trampas de melaza fermentada para captura de polillas adultas.",
    "queHacer": "Aplicación de agentes biológicos específicos como Bacillus thuringiensis (Bt) cepa Kurstaki o nematodos entomopatógenos (Steinernema carpocapsae) en pulverizaciones al atardecer cuando las orugas salen a alimentarse.",
    "practicasEvitar": "No dejar terrones grandes en el suelo tras el arado que sirvan de madriguera diurna para las orugas.",
    "evitarRecurrencia": "Deshierbes tempranos a los 20-25 días para suprimir hospederos silvestres."
  },
  {
    "id": "enf_arveja_chupadera_doctoragro",
    "nombre": "Chupadera fungosa de la arveja",
    "nombreCientifico": "Rhizoctonia solani",
    "cultivos": [
      "Arvejas",
      "Haba"
    ],
    "foto": "img/cultivos/arveja-chupadera.png",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Alta",
    "sintomas": "Lesión hundida de color castaño-rojizo que circunda y estrangula el cuello del tallito a nivel del suelo. Las plantitas jóvenes se marchitan rápidamente, se doblan y mueren ('damping-off'), dejando claros vacíos en los surcos de siembra.",
    "causas": "Hongo telúrico favorecido por suelos pesados, arcillosos o con mal drenaje, sumado a temperaturas templadas y exceso de humedad en los primeros riegos.",
    "prevencion": "Adecuada nivelación del terreno para impedir empozamientos de agua. Sembrar sobre el lomo del surco y no en el fondo. Tratamiento preventivo de la semilla con cepas antagonistas de Trichoderma harzianum.",
    "queHacer": "Suspender riegos pesados de inmediato y abrir zanjas de drenaje. Aplicación dirigida al cuello con caldo sulfocálcico o fungicidas protectores de suelo.",
    "practicasEvitar": "No sembrar semilla sin desinfectar. Evitar enterrar la semilla a más de 5 cm de profundidad.",
    "evitarRecurrencia": "Incorporar materia orgánica bien compostada que aumente la microfauna antagonista del suelo."
  },
  {
    "id": "enf_arveja_botrytis_doctoragro",
    "nombre": "Moho gris o Pudrición por Botrytis en arveja",
    "nombreCientifico": "Botrytis cinerea",
    "cultivos": [
      "Arvejas",
      "Haba"
    ],
    "foto": "img/cultivos/arveja-botrytis.png",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Alta",
    "sintomas": "Manchas acuosas marrón claro en flores, vainas y hojas senescentes que rápidamente se cubren de un denso micelio o moho algodonoso gris cenizo. Provoca caída de flores fecundadas y pudrición blanda de vainas listas para cosecha o en poscosecha.",
    "causas": "Hongo necrotrófico oportunista activado por lluvias continuas, neblina, humedad relativa >90% y temperaturas entre 15°C y 22°C. Aprovecha los pétalos marchitos que quedan pegados a la vaina.",
    "prevencion": "Manejo según Doctor Agro: Tutorado adecuado de la arveja con cañas y rafia para levantar el follaje del suelo. Respetar distanciamientos amplios para permitir el paso de corrientes de aire.",
    "queHacer": "Eliminación manual de hojas y vainas infectadas. Pulverizaciones preventivas con productos a base de azufre micronizado, oxicloruro de cobre o fungicidas botricidas específicos antes del cierre de hilera.",
    "practicasEvitar": "No mojar las flores y vainas durante riegos por aspersión. No cosechar con vainas húmedas de rocío.",
    "evitarRecurrencia": "Recojo y quema de rastrojos infectados al terminar la campaña para eliminar esclerocios."
  },
  {
    "id": "enf_arveja_oidium_doctoragro",
    "nombre": "Oídium o Cenicilla de la arveja",
    "nombreCientifico": "Erysiphe pisi",
    "cultivos": [
      "Arvejas"
    ],
    "foto": "img/cultivos/arveja-oidium.svg",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Media",
    "sintomas": "Manchas pulverulentas blanquecinas de aspecto harinoso o talco sobre la superficie de hojas, tallos y vainas. Al avanzar cubre toda la lámina foliar, volviéndola clorótica, arrugada y seca prematuramente. En ataques tardíos mancha las vainas verdes desmereciendo la calidad comercial.",
    "causas": "Hongo biotrófico favorecido por clima seco con alta humedad atmosférica nocturna (rocío) y temperaturas moderadas de 18°C a 25°C.",
    "prevencion": "Empleo de variedades con resistencia genética. Adecuada ventilación del dosel mediante tutorado y distanciamiento entre líneas.",
    "queHacer": "Aplicaciones oportunas de azufre micronizado soluble o biofungicidas a base de Bacillus subtilis. Tratamientos preventivos antes de la floración masiva.",
    "practicasEvitar": "Evitar densidades de siembra excesivas que impidan la insolación del follaje. No aplicar azufre con temperaturas superiores a 28°C.",
    "evitarRecurrencia": "Eliminar rastrojos tras la cosecha y rotar con maíz o papa."
  },
  {
    "id": "enf_arveja_pulgon_doctoragro",
    "nombre": "Pulgón verde de la arveja",
    "nombreCientifico": "Acyrthosiphon pisum",
    "cultivos": [
      "Arvejas",
      "Haba"
    ],
    "foto": "img/cultivos/arveja-pulgon-verde.svg",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Media",
    "sintomas": "Colonias densas de pulgones verdes agrupados en los brotes tiernos, envés de hojas y pedúnculos florales. Succionan savia causando amarillamiento, encrespamiento foliar y marchitez. Excretan abundante melaza azucarada sobre la cual se instala el hongo fumagina (negrilla). Además es vector de virus fitopatógenos.",
    "causas": "Afídido favorecido por épocas secas y templadas. Presenta alta tasa reproductiva por partenogénesis.",
    "prevencion": "Conservación y suelta de mariquitas (Hippodamia convergens / Cycloneda sanguínea), crisopas y sírfidos predadores. Trampas pegantes amarillas.",
    "queHacer": "Lavados con jabón potásico o aceite agrícola al 1% al detectar los primeros focos. Uso de insecticidas aficidas específicos respetando los periodos de carencia.",
    "practicasEvitar": "Evitar aplicaciones indiscriminadas de insecticidas de amplio espectro que eliminen a los enemigos naturales.",
    "evitarRecurrencia": "Monitoreo constante de brotes apicales desde la tercera semana tras la siembra."
  },
  {
    "id": "enf_arveja_antracnosis_doctoragro",
    "nombre": "Antracnosis de la arveja",
    "nombreCientifico": "Ascochyta pisi",
    "cultivos": [
      "Arvejas"
    ],
    "foto": "img/cultivos/arveja-antracnosis.svg",
    "fuente": "Doctor Agro Perú (doctoragro.pe)",
    "severidad": "Media",
    "sintomas": "Manchas circulares u ovales ligeramente deprimidas de color pardo o canela claro con un margen marrón oscuro bien delimitado. En el centro de las lesiones se observan diminutos puntos negros (picnidios). En las vainas causa lesiones hundidas que alcanzan las semillas, tiñéndolas de marrón.",
    "causas": "Hongo transmitido principalmente por semilla infectada y rastrojos húmedos. Requiere lluvias o riegos por aspersión para liberar esporas.",
    "prevencion": "Empleo obligatorio de semilla certificada y desinfectada. Rotación de cultivos mínima de 2 a 3 años sin leguminosas.",
    "queHacer": "Tratamiento preventivo a la semilla. En campo, pulverizaciones con fungicidas protectores de contacto (mancozeb, oxicloruro de cobre) al inicio de floración si hay condiciones de lluvia.",
    "practicasEvitar": "No sembrar semilla proveniente de campos con presencia de manchas en vainas. Evitar el riego por aspersión durante el llenado de vainas.",
    "evitarRecurrencia": "Destrucción o compostaje controlado de rastrojos de cosecha."
  },
  {
    "id": "enf_haba_mancha_chocolate",
    "nombre": "Mancha chocolate de la haba",
    "nombreCientifico": "Botrytis fabae",
    "cultivos": [
      "Haba",
      "Arvejas"
    ],
    "foto": "img/cultivos/haba-mancha-chocolate.svg",
    "fuente": "Portal Frutícola (portalfruticola.com)",
    "severidad": "Alta",
    "sintomas": "Pequeñas manchas circulares de color chocolate marrón-rojizo en hojas y tallos. En condiciones de alta humedad, las manchas aumentan de tamaño rápidamente, se tornan negras y coalescen, cubriendo toda la hoja y provocando una severa defoliación y caída de flores.",
    "causas": "Hongo patógeno clave del haba estimulado por humedad relativa superior al 80%, neblinas prolongadas y temperaturas frescas (15°C a 20°C).",
    "prevencion": "Semilla garantizada limpia y desinfectada. Densidades de siembra amplias (70-80 cm entre surcos) que faciliten la circulación de aire y penetración del sol.",
    "queHacer": "Aplicaciones preventivas con fungicidas cúpricos (oxicloruro de cobre, caldo bordelés) o biofungicidas antagonistas (Trichoderma). Poda de hojas basales infectadas.",
    "practicasEvitar": "No realizar riegos por aspersión pesados en horas de la tarde que dejen el follaje mojado toda la noche.",
    "evitarRecurrencia": "Rotación con papa o maíz/choclo y eliminación de rastrojos infestados."
  },
  {
    "id": "enf_haba_roya",
    "nombre": "Roya del haba",
    "nombreCientifico": "Uromyces viciae-fabae",
    "cultivos": [
      "Haba"
    ],
    "foto": "img/cultivos/haba-roya.svg",
    "fuente": "Portal Frutícola (portalfruticola.com)",
    "severidad": "Media",
    "sintomas": "Pequeñas pústulas circulares de color pardo-anaranjado o herrumbroso en el envés de las hojas y tallos tiernos, rodeadas por un halo clorótico amarillo. Al secarse, las pústulas liberan un polvillo marrón oscuro de esporas, secando el follaje de forma acelerada.",
    "causas": "Hongo biotrófico favorecido por rocíos matutinos, alternancia de días soleados y noches frescas con alta humedad atmosférica.",
    "prevencion": "Monitoreo fitosanitario desde el inicio de la floración. Elección de ecotipos tolerantes adaptados a los valles andinos.",
    "queHacer": "Tratamientos con azufre micronizado soluble o fungicidas protectores al detectar las primeras pústulas en las hojas inferiores.",
    "practicasEvitar": "No abusar del nitrógeno en la fertilización para evitar tejidos foliares demasiado tiernos.",
    "evitarRecurrencia": "Incorporar rastrojos con arado profundo y dejar reposar el suelo."
  },
  {
    "id": "enf_haba_pulgon_negro",
    "nombre": "Pulgón negro del haba",
    "nombreCientifico": "Aphis fabae",
    "cultivos": [
      "Haba"
    ],
    "foto": "img/cultivos/haba-pulgon-negro.svg",
    "fuente": "Portal Frutícola (portalfruticola.com)",
    "severidad": "Media",
    "sintomas": "Colonias masivas de pulgones de color negro mate que colonizan de forma compacta los brotes terminales, flores y vainas jóvenes. Succión masiva de savia que detiene el crecimiento del tallo, deforma hojas y causa caída de flores. Presencia abundante de hormigas asociadas y fumagina negra.",
    "causas": "Insecto chupador altamente prolífico en temporadas templadas. Se dispersa rápidamente por formas aladas arrastradas por el viento.",
    "prevencion": "Despuntado manual o corte del ápice del tallo una vez cuajadas las vainas basales (elimina el sitio preferido de alimentación del pulgón). Conservación de mariquitas y crisopas.",
    "queHacer": "Lavados con jabón potásico al 2% dirigidos a las puntas de las plantas. Aplicación localizada de insecticidas aficidas selectivos antes de que las colonias invadan las vainas.",
    "practicasEvitar": "No retrasar el despunte del haba. Evitar aplicar insecticidas tóxicos para abejas durante la floración.",
    "evitarRecurrencia": "Eliminar malezas hospederas en los bordes de la parcela."
  },
  {
    "id": "enf_haba_gorgojo",
    "nombre": "Gorgojo del grano de haba",
    "nombreCientifico": "Bruchus rufimanus",
    "cultivos": [
      "Haba"
    ],
    "foto": "img/cultivos/haba-gorgojo.svg",
    "fuente": "Portal Frutícola (portalfruticola.com)",
    "severidad": "Alta",
    "sintomas": "Las hembras adultas ovipositan en las vainas verdes en formación. Las larvas recién nacidas perforan la pared de la vaina y penetran en el grano verde en desarrollo, donde completan su ciclo. Al madurar el grano seco, el escarabajo adulto corta un orificio circular perfecto ('ventana') en la piel de la semilla para emerger, arruinando su valor comercial y poder germinativo.",
    "causas": "Coleóptero que vuela activamente al campo durante la floración del haba atraído por el polen y flores.",
    "prevencion": "Empleo de semilla certificada limpia de orificios. Solarización o congelamiento de semillas almacenadas. Cosecha inmediata al secar la vaina para evitar que los gorgojos salgan a campo.",
    "queHacer": "Control del vuelo de adultos al inicio de floración antes de la oviposición en las vainas. Almacenamiento hermético de granos con ceniza vegetal o tierra de diatomeas.",
    "practicasEvitar": "No guardar semillas sin seleccionar ni abandonar habas caídas en el campo tras la trilla.",
    "evitarRecurrencia": "Limpieza y desinfección de depósitos y almacenes antes de la cosecha."
  },
  {
    "id": "enf_haba_mildiu",
    "nombre": "Mildiu del haba",
    "nombreCientifico": "Peronospora viciae",
    "cultivos": [
      "Haba"
    ],
    "foto": "img/cultivos/haba-mildiu.svg",
    "fuente": "Portal Frutícola (portalfruticola.com)",
    "severidad": "Media",
    "sintomas": "Manchas cloróticas amarillentas irregulares en el haz de las hojas, que en el envés se corresponden con una vellosidad densa o fieltro algodonoso de color gris-violáceo. Las hojas afectadas se deforman, se enrollan hacia abajo y caen.",
    "causas": "Oomiceto favorecido por temperaturas frescas (10°C a 16°C) y humedad relativa cercana al 100% (lluvias finas, neblinas densas).",
    "prevencion": "Evitar terrenos sombreados o con drenaje deficiente. Buena separación entre plantas.",
    "queHacer": "Tratamientos con fungicidas preventivos multisitio (cúpricos, mancozeb) ante alertas de neblinas persistentes.",
    "practicasEvitar": "No regar en días nublados de alta humedad ambiental.",
    "evitarRecurrencia": "Rotación con cultivos no leguminosos durante 2 temporadas."
  },
  {
    "id": "enf_maiz_cogollero_yara",
    "nombre": "Gusano cogollero del maíz",
    "nombreCientifico": "Spodoptera frugiperda",
    "cultivos": [
      "Maíz",
      "Choclo"
    ],
    "foto": "img/cultivos/maiz-cogollero.svg",
    "fuente": "Yara Perú (yara.com.pe)",
    "severidad": "Alta",
    "sintomas": "Oruga que barrena y destruye el cogollo o verticilo central de la planta. Provoca perforaciones simétricas grandes en las hojas en desarrollo y abundante excremento húmedo similar a aserrín grueso. En ataques severos destruye el punto de crecimiento ('meristemo apical'), impidiendo la formación de la espiga y mazorca.",
    "causas": "Plaga principal del maíz en el Perú. La polilla hembra oviposita masas de 100 a 200 huevos cubiertos de escamas en las hojas. Su ciclo se acelera con temperaturas cálidas (25°C a 32°C).",
    "prevencion": "Monitoreo semanal del 20% de las plantas desde la emergencia (V1 a V6). Siembra temprana y uniforme. Conservación de tijeretas (Doru taeniatum) y avispitas parasitoides (Chelonus insularis).",
    "queHacer": "Aplicaciones focalizadas dirigidas al embudo del cogollo con bioinsecticidas como Bacillus thuringiensis o extractos de neem. En alta presión, insecticidas del grupo diamidas o espinosinas en primeras etapas larvarias.",
    "practicasEvitar": "No aplicar cuando la oruga ya tiene más de 3 cm y está profundamente metida bajo el tapón de excrementos.",
    "evitarRecurrencia": "Eliminar malezas gramíneas hospederas y triturar rastrojos tras la cosecha."
  },
  {
    "id": "enf_maiz_cercospora_yara",
    "nombre": "Mancha foliar por Cercospora / Cercosporiosis del maíz",
    "nombreCientifico": "Cercospora zeae-maydis",
    "cultivos": [
      "Maíz",
      "Choclo"
    ],
    "foto": "img/cultivos/maiz-cercospora.svg",
    "fuente": "Yara Perú (yara.com.pe)",
    "severidad": "Media",
    "sintomas": "Lesiones alargadas, angostas y estrictamente rectangulares delimitadas por las nervaduras laterales de la hoja. Comienzan con color verde pálido aceitoso y evolucionan a marrón-grisáceo. En ataques severos las manchas se unen, secando por completo las hojas y reduciendo drásticamente el llenado del grano.",
    "causas": "Hongo que sobrevive en rastrojos de maíz sobre el suelo. Activado por rocíos prolongados de más de 8 horas y temperaturas entre 22°C y 30°C.",
    "prevencion": "Rotación de cultivos con leguminosas (arveja, haba, frijol). Incorporación profunda de rastrojos para acelerar su degradación. Selección de híbridos y variedades tolerantes.",
    "queHacer": "Deshoje fitosanitario de hojas basales senescentes infectadas antes del espigado. Tratamientos fungicidas sistémicos (estrobilurinas + triazoles) entre floración femenina y llenado de grano.",
    "practicasEvitar": "No practicar monocultivo continuo de maíz sin rotación.",
    "evitarRecurrencia": "Eliminar el rastrojo infestado tras la cosecha y desinfectar el terreno."
  },
  {
    "id": "enf_maiz_roya_yara",
    "nombre": "Roya común del maíz",
    "nombreCientifico": "Puccinia sorghi",
    "cultivos": [
      "Maíz",
      "Choclo"
    ],
    "foto": "img/cultivos/maiz-roya.svg",
    "fuente": "Yara Perú (yara.com.pe)",
    "severidad": "Media",
    "sintomas": "Pústulas pulverulentas alargadas o redondeadas de color marrón dorado a castaño herrumbroso distribuidas en ambas caras de las hojas. Al romperse la epidermis de la hoja liberan esporas anaranjadas. En etapas avanzadas las pústulas se tornan negras (teliosporas).",
    "causas": "Esporas transportadas por el viento a grandes distancias. Prolifera con temperaturas frescas a moderadas (16°C a 23°C) y humedad relativa alta (>95%).",
    "prevencion": "Uso de híbridos comerciales con resistencia genética. Nutrición equilibrada según planes de fertilización Yara (evitar exceso de nitrógeno sin potasio).",
    "queHacer": "Aplicación de fungicidas foliares al observar las primeras pústulas en las hojas medias antes de la floración.",
    "practicasEvitar": "Evitar siembras escalonadas tardías que reciban la carga de esporas de lotes vecinos ya maduros.",
    "evitarRecurrencia": "Eliminar malezas reservorio como Sorghum halepense (pasto Johnson)."
  },
  {
    "id": "enf_maiz_carbon_yara",
    "nombre": "Carbón común del maíz",
    "nombreCientifico": "Ustilago maydis",
    "cultivos": [
      "Maíz",
      "Choclo"
    ],
    "foto": "img/cultivos/maiz-carbon.svg",
    "fuente": "Yara Perú (yara.com.pe)",
    "severidad": "Media",
    "sintomas": "Formación de agallas o tumores hinchados y carnosos en mazorcas, tallos, hojas y espigas masculinas. Las agallas jóvenes están cubiertas por una membrana lisa de color blanco plateado. Al madurar, la membrana se rompe liberando una masa densa de polvo negro azabache (teliosporas).",
    "causas": "Hongo telúrico cuyas esporas penetran por heridas causadas por insectos (cogollero, barrenadores), granizadas o labores de cultivo.",
    "prevencion": "Control riguroso de insectos masticadores para no generar heridas de entrada. Fertilización balanceada recomendada por Yara (el exceso de nitrógeno aumenta la susceptibilidad).",
    "queHacer": "Retiro manual cuidadoso de agallas jóvenes antes de que revienten y liberen las esporas al suelo. Cortar y enterrar o quemar los tejidos afectados fuera de la parcela.",
    "practicasEvitar": "No romper ni dejar agallas negras maduras abiertas sobre el suelo de la chacra.",
    "evitarRecurrencia": "Rotación con papa, haba o arveja por al menos 2 años."
  },
  {
    "id": "enf_maiz_barrenador_yara",
    "nombre": "Barrenador del tallo del maíz",
    "nombreCientifico": "Diatraea saccharalis",
    "cultivos": [
      "Maíz",
      "Choclo"
    ],
    "foto": "img/cultivos/maiz-barrenador.svg",
    "fuente": "Yara Perú (yara.com.pe)",
    "severidad": "Alta",
    "sintomas": "Las orugas jóvenes raspan las hojas del cogollo y luego perforan el tallo, excavando galerías internas longitudinales. Se aprecian orificios en los entrenudos con expulsión de aserrín. Provoca acame o quiebre del tallo por el viento, marchitez de la parte superior ('corazón muerto') y mazorcas poco desarrolladas.",
    "causas": "Microlepidóptero cuyas larvas barrenan tallos gruesos de gramíneas.",
    "prevencion": "Destrucción de rastrojos y tocones de maíz tras la cosecha. Monitoreo de oviposiciones en el envés de las hojas.",
    "queHacer": "Liberación de parasitoides de huevos (Trichogramma) al detectar los primeros vuelos. Aplicaciones insecticidas tempranas antes de que la larva ingrese al interior del tallo.",
    "practicasEvitar": "No descuidar el control cuando las larvas aún están en las hojas, pues una vez dentro del tallo los químicos convencionales no tienen efecto.",
    "evitarRecurrencia": "Picar e incorporar rastrojos tras la cosecha para destruir larvas invernantes."
  },
  {
    "id": "enf_quinua_mildiu_portal",
    "nombre": "Mildiú velloso de la quinua",
    "nombreCientifico": "Peronospora variabilis",
    "cultivos": [
      "Quinua"
    ],
    "foto": "img/cultivos/quinua-mildiu.svg",
    "fuente": "Portal Frutícola (portalfruticola.com)",
    "severidad": "Alta",
    "sintomas": "Manchas cloróticas angulares irregulares en la cara superior de las hojas, que según el ecotipo de quinua adquieren tonalidades amarillo brillante, anaranjado, rojizo o violáceo. En el envés se desarrolla un afelpamiento o vellosidad algodonosa gris violácea característica (esporangióforos). Ocasiona amarillamiento progresivo, defoliación masiva de hasta el 80% y severa disminución en el tamaño de la panoja y grano.",
    "causas": "Enfermedad más destructiva de la quinua en los Andes. Oomiceto transmitido por oosporas en la cascarilla (perigonio) de la semilla y restos de tallos. Muy activo con humedad relativa >85% y temperaturas entre 10°C a 18°C.",
    "prevencion": "Manual Técnico Portal Frutícola: Selección de ecotipos resistentes (Pasankalla, Amarilla de Maranganí o Blanca de Junín). Escarificado, lavado y desinfección preventiva de la semilla. Distanciamiento amplio entre surcos (50 a 60 cm) orientado a favor del viento para rápido secado del follaje.",
    "queHacer": "Aplicaciones preventivas con biofungicidas (Trichoderma, caldos minerales a bajas dosis como sulfocálcico al 0.5% o caldo bordelés al 0.5% para no causar fitotoxicidad en el follaje tierno). Monitoreo semanal desde la formación del cuarto par de hojas.",
    "practicasEvitar": "No sembrar en depresiones del terreno propensas a nieblas estancadas ni utilizar semilla de campos infectados.",
    "evitarRecurrencia": "Realizar barbecho profundo en época seca para exponer las esporas a la radiación solar."
  },
  {
    "id": "enf_quinua_kcona_portal",
    "nombre": "Polilla de la quinua (Kcona kcona)",
    "nombreCientifico": "Eurysacca melanocampta",
    "cultivos": [
      "Quinua"
    ],
    "foto": "img/cultivos/quinua-kcona.svg",
    "fuente": "Portal Frutícola (portalfruticola.com)",
    "severidad": "Alta",
    "sintomas": "Las larvas pequeñas de color verdoso o amarillento atacan las panojas e inflorescencias, tejiendo finos hilos de seda blanquecina que aglutinan los granos y glomérulos formando nidos. En el interior devoran los granos tiernos en estado lechoso y pastoso, dejando solo cascarillas vacías y abundantes deyecciones.",
    "causas": "Plaga insectil clave de la quinua andina. Las polillas adultas realizan vuelos crepusculares y depositan huevos en los brotes y panojas.",
    "prevencion": "Trampas de luz o trampas de agua con melaza para captura de polillas adultas. Aporque alto y deshierbes tempranos.",
    "queHacer": "Pulverizaciones dirigidas a la panoja con Bacillus thuringiensis (Bt) al inicio del cuajado de granos cuando las larvas son pequeñas y están expuestas.",
    "practicasEvitar": "No dejar rastrojos de panojas atacadas en el campo tras la cosecha.",
    "evitarRecurrencia": "Rotación con haba o arveja y limpieza de bordos de chacra."
  }
],

  catalogo: [],
  usandoBase: true,
  unsubscribe: null,
  listeners: [],
  cropFilter: "todos",
  searchQuery: "",

  init() {
    const guardado = window.AgroVidaStorage ? window.AgroVidaStorage.get("enfermedades_catalogo", null) : null;
    const hasOldPlaceholder = guardado && Array.isArray(guardado) && guardado.some((e) => (e.foto || "").includes("hoja-enferma.jpg"));

    // Si tiene la lista completa y sin fotos viejas de regaderas, usar caché; sino actualizar con el catálogo completo
    if (guardado && Array.isArray(guardado) && guardado.length >= this.catalogoBase.length && !hasOldPlaceholder) {
      this.catalogo = this.normalizar(guardado);
      this.usandoBase = false;
    } else {
      this.catalogo = this.normalizar(this.catalogoBase);
      this.usandoBase = true;
      if (window.AgroVidaStorage) {
        window.AgroVidaStorage.set("enfermedades_catalogo", this.catalogo);
      }
    }
    this.setupListeners();
    this.renderCards(this.catalogo);
  },

  normalizar(lista) {
    return lista.map((e) => {
      const fotos = Array.isArray(e.fotos) && e.fotos.length ? e.fotos : (e.foto ? [e.foto] : []);
      return {
        ...e,
        cultivos: Array.isArray(e.cultivos) ? e.cultivos : [],
        nombreCientifico: e.nombreCientifico || "",
        sintomas: e.sintomas || "",
        causas: e.causas || "",
        prevencion: e.prevencion || "",
        queHacer: e.queHacer || "",
        practicasEvitar: e.practicasEvitar || "",
        evitarRecurrencia: e.evitarRecurrencia || "",
        fotos: fotos,
        foto: fotos[0] || "img/cultivos/hoja-enferma.svg",
        severidad: e.severidad || "Media"
      };
    });
  },

  attach() {
    if (this.unsubscribe || !window.firestoreDb) return;
    this.unsubscribe = window.firestoreDb.collection("enfermedades_catalogo").onSnapshot(
      (snap) => {
        if (snap.empty) {
          this.catalogo = this.normalizar(this.catalogoBase);
          this.usandoBase = true;
        } else {
          this.usandoBase = false;
          const docs = [];
          snap.forEach((d) => docs.push({ id: d.id, ...d.data() }));
          docs.sort((a, b) => (a.nombre || "").localeCompare(b.nombre || "", "es"));
          this.catalogo = this.normalizar(docs);
          if (window.AgroVidaStorage) {
            window.AgroVidaStorage.set("enfermedades_catalogo", this.catalogo);
          }
        }
        this.aplicarFiltros();
        this.listeners.forEach((fn) => fn());
      },
      (err) => {
        console.warn("Aviso Firestore catálogo (modo local activo):", err);
        this.catalogo = this.normalizar(this.catalogoBase);
        this.aplicarFiltros();
      }
    );
  },

  detach() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  },

  onChange(fn) {
    this.listeners.push(fn);
  },

  setupListeners() {
    const searchInput = document.getElementById("input-buscar-enfermedad");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.aplicarFiltros();
      });
    }

    document.querySelectorAll(".chip-filtro-cultivo").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        document.querySelectorAll(".chip-filtro-cultivo").forEach((c) => c.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.cropFilter = e.currentTarget.getAttribute("data-crop") || "todos";
        this.aplicarFiltros();
      });
    });
  },

  aplicarFiltros() {
    let lista = this.catalogo;
    const q = this.searchQuery;
    const crop = this.cropFilter;

    if (crop && crop !== "todos") {
      lista = lista.filter((enf) => enf.cultivos.some((c) => c.toLowerCase().includes(crop.toLowerCase())));
    }
    if (q) {
      lista = lista.filter(
        (enf) =>
          enf.nombre.toLowerCase().includes(q) ||
          enf.nombreCientifico.toLowerCase().includes(q) ||
          enf.sintomas.toLowerCase().includes(q) ||
          (enf.fuente && enf.fuente.toLowerCase().includes(q)) ||
          enf.cultivos.some((c) => c.toLowerCase().includes(q))
      );
    }
    this.renderCards(lista);
  },

  filterEnfermedades(query) {
    this.searchQuery = (query || "").toLowerCase().trim();
    this.aplicarFiltros();
  },

  filterByCrop(cropName) {
    this.cropFilter = cropName || "todos";
    this.aplicarFiltros();
  },

  renderCards(items) {
    const container = document.getElementById("enfermedades-cards-grid");
    if (!container) return;
    const esc = window.escapeHtml;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box full-width">
          <span class="empty-icon">🔍</span>
          <p>No se encontraron afecciones o plagas que coincidan con la búsqueda.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items
      .map(
        (enf) => `
        <div class="card disease-card">
          <div class="disease-card-header">
            <img src="${esc(enf.foto)}" alt="${esc(enf.nombre)}" class="disease-card-thumb" onerror="this.src='img/cultivos/hoja-enferma.svg'">
            <div class="disease-title-box">
              <h3>${esc(enf.nombre)}</h3>
              ${enf.nombreCientifico ? `<p class="scientific-name"><em>${esc(enf.nombreCientifico)}</em></p>` : ""}
              ${enf.fuente ? `<span style="display: inline-block; font-size: 0.74rem; font-weight: 700; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 9999px; margin-bottom: 6px;">📚 ${esc(enf.fuente)}</span>` : ""}
              <div class="crop-tags">
                ${enf.cultivos.map((c) => `<span class="crop-tag">${esc(c)}</span>`).join("")}
              </div>
            </div>
          </div>

          ${enf.fotos && enf.fotos.length > 1 ? `
          <div class="disease-gallery">
            ${enf.fotos.slice(0, 5).map((f) => `<img src="${esc(f)}" alt="${esc(enf.nombre)}" onerror="this.style.display='none'">`).join("")}
          </div>` : ""}

          <div class="disease-card-body">
            <div class="disease-section">
              <span class="section-badge badge-symptom">🔍 Síntomas y Daños</span>
              <p>${esc(enf.sintomas)}</p>
            </div>

            <div class="disease-section">
              <span class="section-badge badge-cause">⚠️ Causas y Biología</span>
              <p>${esc(enf.causas)}</p>
            </div>

            <div class="disease-section">
              <span class="section-badge badge-prevent">🛡️ Prevención Técnica</span>
              <p>${esc(enf.prevencion)}</p>
            </div>

            <div class="disease-section">
              <span class="section-badge badge-action">💡 Manejo y Control</span>
              <p>${esc(enf.queHacer)}</p>
            </div>

            <div class="disease-section alert-box-avoid">
              <strong>⚠️ Qué prácticas evitar:</strong>
              <p>${esc(enf.practicasEvitar)}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }
};

window.EnfermedadesModule = EnfermedadesModule;