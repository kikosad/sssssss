import { Lesson } from '../types';

export const lessonsData: Lesson[] = [
  {
    id: 1,
    title: "Los Utensilios del Escritor",
    subtitle: "Preparando la mesa de trabajo creativa",
    duration: "45 minutos",
    summary: "Reflexiona sobre las herramientas físicas, técnicas y temáticas necesarias para desinhibirse y activar las facultades lógicas y creativas al momento de escribir.",
    theory: [
      "Para comenzar a escribir literatura no basta con la inspiración; es necesario desplegar sobre la mesa una serie de herramientas preparadas para su uso inmediato. Estas herramientas se dividen en tres grandes familias: técnicas, temáticas y físicas.",
      "Las herramientas técnicas incluyen dos vertientes: los recursos narrativos (el punto de vista, el personaje, el diálogo) y los recursos estilísticos (la empatía, el tono, la naturalidad). Durante la escritura libre, debemos apagar la parte analítica del cerebro, permitiendo que la 'loca de la casa' (la imaginación) asocie ideas libremente. Sin embargo, en el instante de la corrección, el cerebro racional debe funcionar a máxima potencia para ajustar y afilar estas piezas narrativas.",
      "Las herramientas temáticas se reducen fundamentalmente a dos búsquedas: la búsqueda exterior (observar detalladamente los actos, inclinaciones y ademanes de las personas que nos rodean) y la búsqueda interior (resucitar caras olvidadas, sensaciones vividas y recuerdos en el baúl de nuestra memoria). Toda observación debe ser selectiva; un escritor no copia la realidad linealmente, sino que la criba con mentalidad artística para transformarla en algo enteramente nuevo.",
      "Finalmente, las herramientas físicas son el soporte material de nuestro oficio: un espacio de trabajo silencioso y solitario donde podamos desinhibirnos; una sólida colección de diccionarios (el de uso, el ideológico, el de sinónimos y antónimos, y el de la RAE); y un archivo físico o digital con recortes de prensa, diarios, notas manuscritas e Internet para documentar y amalgamar los detalles de nuestras ficciones."
    ],
    examples: [
      {
        label: "La documentación como ancla de realidad",
        text: "Un recorte de periódico sobre una herencia disputada en un pueblo remoto o un diario viejo con notas marginales sobre el clima de la primavera de 1982 pueden ser el detonante perfecto para una escena de tres páginas.",
        source: "Escuela de Escritores"
      }
    ],
    exerciseDescription: "Escribe un breve relato basado en acciones cotidianas que te hayan ocurrido recientemente (una charla informal, hacer la compra, etc.). Evita calificar el estado de ánimo, concéntrate de manera selectiva en las acciones físicas.",
    exercisePrompt: "Ayer por la tarde, mientras el verdulero pesaba los tomates, un hombre con gabardina húmeda entró corriendo...",
    tasks: [
      "Describe la escena utilizando únicamente acciones concretas y verbos de movimiento.",
      "Define con claridad quién es el narrador y quién el protagonista de la acción.",
      "Asegúrate de que la observación parezca natural y selectiva, eliminando detalles redundantes."
    ]
  },
  {
    id: 2,
    title: "Las Palabras",
    subtitle: "La deconstrucción del lenguaje convencional",
    duration: "50 minutos",
    summary: "Explora la relación arbitraria entre el significado y el significante, aprendiendo a desarmar los automatismos del lenguaje para descubrir relaciones insólitas en la prosa.",
    theory: [
      "A diferencia del pintor o del músico, el escritor utiliza un material —las palabras— con el que todos negociamos de manera utilitaria desde que aprendemos a hablar. Esto, lejos de ser una ventaja, representa un gran escollo: tenemos las palabras tan cerca y tan adheridas a la cotidianidad que las confundimos con los objetos mismos. Llamamos 'silla' al mueble con tal fuerza que ambos parecen fundidos.",
      "La labor del escritor es, en primer lugar, desarmar ese lenguaje convencional. Debe entender que la relación entre el significante (el sonido de las letras, la grafía física de la palabra) y el significado (el concepto mental del objeto) es arbitraria y puramente convencional. El significante en español de 'silla' es muy distinto al de 'chair' en inglés o 'stuhl' en alemán, pero el concepto se mantiene.",
      "Al comprender la arbitrariedad del lenguaje, el escritor abre puertas infinitas. Al descontextualizar las palabras, sopesarlas con las manos, lanzarlas unas contra otras y hacer que choquen en relaciones inauditas, logramos que el lector vea el mundo con ojos inocentes por primera vez.",
      "Llamar 'gato' a una silla ('Me voy a sentar en el gato, que estoy cansada') desata una metáfora o provoca un extrañamiento estético. Esta colisión semántica es la semilla de la literatura viva. Si escribimos: 'Érase una vez un hombre que se sentaba en cualquier silla que veía...', el cuento es aburrido. Si cambiamos la convención: 'Érase una vez un hombre que se sentaba en cualquier gato que veía...', el lector se alerta y la magia comienza."
    ],
    examples: [
      {
        label: "El choque poético de palabras",
        text: "La colisión de dos sustantivos inconexos, como 'hormiga' y 'puré' o 'isla' y 'rascacielos', genera chispas inmediatas de tensión narrativa.",
        source: "Metodología de Asociación Libre"
      }
    ],
    exerciseDescription: "Escribe una lista rápida de 10 sustantivos concretos sin pensar demasiado. Toma el primero de la lista y el último; hazlos chocar y escribe un microrrelato donde ambas palabras sean indispensables para resolver el misterio.",
    exercisePrompt: "El último piso del rascacielos estaba deshabitado, salvo por una solitaria hormiga que custodiaba...",
    tasks: [
      "Usa una lista de sustantivos muy distantes conceptualmente.",
      "Evita explicar el motivo de la extrañeza; deja que la situación se desarrolle con normalidad.",
      "Escribe el texto contrarreloj en 15 minutos para evitar la censura del cerebro analítico."
    ]
  },
  {
    id: 3,
    title: "La Claridad",
    subtitle: "El equilibrio entre la densidad y la concisión",
    duration: "55 minutos",
    summary: "Descubre cómo lograr un texto legible mediante la concisión estilística, el acercamiento a la oralidad, y la continuidad fluida del discurso narrativo.",
    theory: [
      "Muchos principiantes asocian erróneamente la profundidad con la oscuridad o la complicación. Se cree que cuanto más retorcido e incomprensible es un párrafo, con abstracciones difíciles de descifrar, mejor escrito está. Esto es un gran lastre didáctico.",
      "Para alcanzar la claridad literaria debemos buscar la concisión: esmerarse en utilizar el menor número de palabras para expresar una idea con la mayor exactitud posible. La concisión no implica brevedad, sino densidad. Cada frase debe contener sustancia viva; lo contrario es la vaguedad, la retórica vacía y el palabreo inútil.",
      "La oralidad es otra aliada: consiste en aproximar el lenguaje escrito al ritmo natural del habla. Un truco esencial es imaginar que tenemos al lector enfrente, intentando transmitir mediante la palabra escrita los gestos, ademanes y el tono del lenguaje no verbal.",
      "Un texto claro obedece además a tres leyes fundamentales:",
      "1. Totalidad: cada palabra, frase y párrafo está en función de los demás, como ladrillos de una casa.",
      "2. Comprensibilidad: escribir pensando en que hay un receptor con límites de comprensión y que no es adivino.",
      "3. Continuidad: guiar y motivar al lector paso a paso, hilvanando una línea con la siguiente para garantizar el 'avance' continuo sin tropiezos."
    ],
    examples: [
      {
        label: "La densidad de la prosa exacta",
        text: "Un texto confuso puede hacer que el lector desista en la tercera línea. Pulir las aristas, eliminar adjetivos débiles y simplificar las cláusulas sintácticas genera una legibilidad hipnótica.",
        source: "Ángel Zapata"
      }
    ],
    exerciseDescription: "A continuación proponemos un ejercicio de rellenado inspirado en el cuento 'Las Brujas' de Roald Dahl. Debes completar los huecos aplicando la máxima coherencia para que todo el párrafo mantenga la lógica fluida de la continuidad.",
    exercisePrompt: "Míralas cuidadosamente a los ojos, porque [hueco 1]. Mírala en el centro de cada ojo, donde normalmente hay [hueco 2]. Si es una bruja, el [hueco 3] cambiará de color...",
    tasks: [
      "Completa el párrafo de manera que las nuevas frases respeten la continuidad lógica de los enunciados anteriores.",
      "Elimina todo adjetivo o recurso puramente pomposo.",
      "Léelo en voz alta para comprobar si el ritmo emula la oralidad natural de una advertencia secreta."
    ]
  },
  {
    id: 4,
    title: "La Naturalidad",
    subtitle: "Los modalizadores frente a los estilos prestados",
    duration: "60 minutos",
    summary: "Aprende a identificar y corregir los vicios del estilo formal, enfático, retórico y asertivo mediante la sutil incorporación de los modalizadores lingüísticos.",
    theory: [
      "La naturalidad en la prosa no es la ausencia de estilo, sino un estilo que surge del propio vocabulario y nivel lingüístico de quien escribe, evitando expresiones impostadas. Cuando empezamos a escribir, solemos caer en lo que Ángel Zapata llama 'estilos prestados' o vicios perniciosos:",
      "1. Estilo Formal: Prosa burocrática, típica de informes policiales, actas o folletos de instrucciones. Causa un aburrimiento mortal al narrar situaciones íntimas como si fueran documentos de un ministerio.",
      "2. Estilo Enfático: El narrador le grita al lector al oído. Acumula hipérboles, repulsiones exageradas o un dramatismo asfixiante que satura la prosa y la vuelve inverosímil.",
      "3. Estilo Retórico o Poético: Abuso de metáforas azucaradas, lirismo empalagoso o arcaísmos que transforman el relato en un jeroglífico impracticable.",
      "4. Estilo Asertivo o 'Cabeza Dura': Consiste en realizar afirmaciones rotundas, mecánicas e impersonales sin matices. El narrador enuncia los hechos como si fuera un autómata sin conciencia viva.",
      "Para contrarrestar la sequedad del estilo asertivo o la rigidez de los estilos prestados, el escritor utiliza los 'modalizadores': expresiones como 'al parecer', 'prácticamente', 'quizá', 'un poco', 'por lo que recuerdo', o 'de un modo u otro'. Estas palabras restan peso absoluto a los enunciados rotundas y le indican al lector que el narrador es un ser humano vivo con vacilaciones, dudas e ironías."
    ],
    examples: [
      {
        label: "El narrador asertivo frente al narrador vivo de Salinger",
        text: "Asertivo: 'Bobby perdió todo lo que tenían con la crisis de Wall Street y se transformó en un asador'.\n\nVivo (Salinger): 'Prácticamente de la noche a la mañana, Bobby se transformó de ex agente de Bolsa y vividor en un asador vivaz, si bien de todos modos, al parecer, un poco falto de conocimientos...'",
        source: "El periodo azul de Daumier-Smith (J.D. Salinger)"
      }
    ],
    exerciseDescription: "Toma un párrafo redactado con excesiva formalidad o sequedad y desnúdalo, traduciéndolo a tu propio estilo cotidiano e insertando al menos tres modalizadores que dejen ver tus dudas o sutil desapego irónico.",
    exercisePrompt: "El individuo abandonó el recinto hospitalario a las tres de la madrugada debido a la falta de atención médica, dirigiéndose a su residencia...",
    tasks: [
      "Identifica palabras del registro formal ('recinto hospitalario', 'procedió a') y sustitúyelas por términos coloquiales.",
      "Introduce modalizadores como 'según creo', 'a duras penas', o 'tal vez'.",
      "Consigue un tono cercano que evoque verosimilitud en lugar de un reporte judicial."
    ]
  },
  {
    id: 5,
    title: "La Visibilidad",
    subtitle: "El sueño vívido y continuo de la narración",
    duration: "50 minutos",
    summary: "Comprende la importancia de crear imágenes sensoriales directas que permitan al lector visualizar las escenas y sumergirse en la trama sin rupturas intelectuales.",
    theory: [
      "El maestro John Gardner afirmaba que la narración literaria tiene como verdadero mérito proponer un 'sueño vívido y continuo' en la mente de quien lee. Una mala técnica consiste precisamente en interrumpir o romper esa ilusión mediante explicaciones racionales, moralejas o abstracciones pesadas.",
      "Las palabras y las imágenes están indisolublemente unidas en el cerebro humano. Si un amigo dice 'estoy fatal', nuestro cerebro apenas reacciona ante el concepto vago. Pero si nos describe: 'es como si me estuvieran perforando el estómago con un taladro', la imagen sensorial nos estremece y nos hace compartir físicamente su dolor.",
      "Para que el lector experimente de verdad el relato, el autor debe visualizar primero la escena con absoluta minuciosidad histórica y espacial en su propia mente. Debemos recurrir al caudal de instantáneas archivadas en nuestro cerebro: el andén del metro en invierno, el olor a pescado húmedo, la forma perezosa en que un viejo quiosquero apoya los codos sobre las portadas de los periódicos del día.",
      "Manipular deslealmente lo que se escribe —forzando a los personajes a actuar como marionetas para sostener un símbolo o interrumpir para moralizar— destruye la magia de la ilusión. La prosa debe sostener un cuerpo físico visible donde los pensamientos abstractos puedan alojarse con naturalidad."
    ],
    examples: [
      {
        label: "El poder evocador del detalle visual",
        text: "Si Pepe el biólogo nos dice 'eso es un arce' mientras caminamos junto a él, la palabra se asocia a la imagen viva del árbol meciéndose con el viento. El diccionario, en cambio, nos ofrece una definición anatómica del arce que no genera ningún sueño vívido en el corazón del lector.",
        source: "John Gardner"
      }
    ],
    exerciseDescription: "Encuentra o imagina una fotografía con gran carga emocional o misterio. Escribe un fragmento de una página que traduzca esa escena visual en palabras, de forma que el lector pueda reproducir con precisión los colores, volúmenes y el ambiente.",
    exercisePrompt: "La niña de espaldas bajo la lluvia sostenía un paraguas amarillo descolorido, cuyas varillas oxidadas...",
    tasks: [
      "Utiliza al menos tres detalles táctiles o de iluminación de la imagen.",
      "No nombres la emoción del personaje; muéstrala en los pliegues de su ropa o en su postura corporal.",
      "Evita añadir resúmenes o conclusiones lógicas sobre lo que significa la escena."
    ]
  },
  {
    id: 6,
    title: "El Ritmo del Discurso",
    subtitle: "La alternancia musical de la sintaxis",
    duration: "55 minutos",
    summary: "Estudia cómo influye la longitud de las frases, el tamaño de los párrafos y el uso de las oraciones coordinadas y subordinadas para regular la velocidad de la lectura.",
    theory: [
      "El ritmo no es coto exclusivo de la poesía; en el discurso en prosa, la métrica interna y la vibración musical de las frases dictan de manera radical cómo percibe el lector el fluir de la trama. Si el ritmo es monótono y monocorde, se produce somnolencia. Si es frenético y desordenado, se desata una taquicardia que fatiga.",
      "El ritmo viene marcado fundamentalmente por tres factores sintácticos:",
      "1. Longitud de las frases: Las oraciones largas y sinuosas son perfectas para la introspección, el análisis lento y la evocación nostálgica (como en Marcel Proust). Las frases cortas y concisas impulsan la velocidad, ideales para persecuciones, conflictos físicos o momentos de máxima tensión.",
      "2. Longitud de los párrafos: Alternar párrafos de longitudes variadas genera un contraste estético agradable que evita el cansancio visual y mental, emulando los movimientos moderados de una sinfonía literaria (con tramos rápidos y lentos).",
      "3. Coordinación frente a Subordinación: Las oraciones subordinadas acumulan matices con lentitud, engordando el discurso con precisiones analíticas. Las coordinadas aceleran la sucesión de los acontecimientos de forma acumulativa y directa ('Cogió el sombrero, y abrió la puerta, y salió a la llovizna sin mirar atrás').",
      "El verdadero escritor domina estas herramientas no con una regla matemática al escribir, sino con un oído entrenado durante el momento sagrado de la revisión."
    ],
    examples: [
      {
        label: "La melodía de los largos de frase",
        text: "En 'El avión de la Bella Durmiente', Gabriel García Márquez teje un inicio asombrosamente melodioso y pausado con oraciones largas llenas de coordinadas que detallan la inmensa belleza de la muchacha, rompiéndolo puntualmente con frases cortas de choque que sacuden la atención del lector.",
        source: "Gabriel García Márquez"
      }
    ],
    exerciseDescription: "Escribe una escena de persecución nocturna. Debes estructurarla en tres partes: una preparación lenta (usando frases largas y descriptivas), el clímax de la persecución (utilizando ráfagas de oraciones muy cortas de ritmo frenético), y el alivio final de calma.",
    exercisePrompt: "Un farol lejano parpadeaba sobre el asfalto mojado mientras yo contaba pausadamente los segundos...",
    tasks: [
      "Emplea frases subordinadas y largas en el primer tercio del ejercicio.",
      "Utiliza oraciones de no más de cinco palabras para la carrera física.",
      "Finaliza alterando voluntariamente la longitud sintáctica para simular la respiración agitada haciéndose lenta."
    ]
  },
  {
    id: 7,
    title: "La Voz Narrativa",
    subtitle: "Modulación, tono, volumen y expresividad",
    duration: "50 minutos",
    summary: "Aprende a modular la voz del narrador para que pase desapercibida en beneficio de la verosimilitud de la historia, controlando el tono y el exceso de latiguillos.",
    theory: [
      "En literatura, el narrador es ante todo una voz incorpórea que le susurra al oído del lector. El lector no ve los vestidos del narrador ni sabe lo que come; solo experimenta su voz. Esta voz arrastra los vestigios del origen hablado de los cuentos que se contaban al calor de la lumbre o en las plazas públicas.",
      "Para que el mundo ficticio sea asimilable, la voz del narrador debe pasar inadvertida en la medida de lo posible. Si el narrador está todo el rato gritando, asombrándose artificialmente o interrumpiendo para exhibirse, el lector se distrae, pierde el hilo y la ilusión narrativa se viene abajo.",
      "Tres variables fundamentales regulan la modulación de esta voz:",
      "1. El Tono: Grave o agudo, serio o desenfadado, determina el estado de ánimo con el que percibimos el suceso. Se debe cuidar que las variaciones de tono no sean gratuitas ni abruptas.",
      "2. El Volumen: Un volumen medio es idóneo. Subir el volumen mediante acumulación excesiva de adjetivos estridentes o exclamaciones cansa. Bajar el volumen es fundamental para los pasajes de puro trámite que no precisan máxima tensión.",
      "3. La Expresividad: Es la distancia afectiva del narrador respecto a los personajes (fría, cálida, tierna, hostil). No cometas el error de usar una neutralidad sosa y fría si la historia exige empatía vibrante.",
      "Además, se debe dosificar el monótono uso del latiguillo 'dijo' ('Él dijo', 'ella contestó'). Sustitúyelos por acciones que indiquen quién habla o por descripciones de los estados de ánimo de los personajes."
    ],
    examples: [
      {
        label: "Evitar la prosa chillona",
        text: "Una voz chillonamente afectada ahoga la sutileza de una descripción. Al saturar una descripción ruinosa con adjetivos rústicos exagerados, el narrador ahuyenta la verdadera atención empática del lector.",
        source: "Análisis de Estilos"
      }
    ],
    exerciseDescription: "Escribe una carta a un amigo en la que le relate un suceso de gran calado emocional utilizando tu estado anímico real. El desafío consiste en no emplear palabras abstractas (pena, alegría, melancolía, rabia); deves destilar ese sentimiento a través de descripciones de objetos y acciones.",
    exercisePrompt: "Querido Tomás, te escribo desde la mesa de la cocina. Los periódicos del domingo siguen apilados junto al bote de sal...",
    tasks: [
      "Prohibido usar nombres de emociones directamente.",
      "Modula un volumen medio, permitiendo que hablen las acciones físicas silenciosas.",
      "Sustitúyelo todo por detalles sensoriales que revelen indirectamente tu disposición de ánimo."
    ]
  },
  {
    id: 8,
    title: "La Empatía",
    subtitle: "El canal de transmisión: sentidos, emociones y sentimientos",
    duration: "50 minutos",
    summary: "Estudia los tres niveles del alma humana en la prosa —sensación, emoción y sentimiento—, prestando especial atención al uso de las percepciones sensoriales.",
    theory: [
      "Convertir un hecho plano en literatura emocionalmente resonante requiere dominar los canales de la empatía. En la vida diaria, las sensaciones, emociones y sentimientos se confunden en un magma caótico. Al escribir, nos cuesta aislarlos y plasmarlos de forma verosímil.",
      "Existe una gradación temporal y de estratificación en el alma del ser humano:",
      "1. Las Sensaciones: Están a flor de piel. Conectan directamente con los sentidos (vista, oído, tacto, gusto y el gran olvidado: el olfato). El olfato es el sentido con mayor capacidad de evocación del cerebro. Un olor a gasolina o a manzana madura colocado en el momento idóneo vale por cien imágenes visuales.",
      "2. Las Emociones: Son más cerebrales e inmediatas; representan una intensa alteración del ánimo ante un estímulo físico. No deben explicarse, sino mostrarse a través de las acciones corporales del personaje (ej. 'fumar un cigarrillo tras otro con los dientes apretados' en lugar de escribir 'sentía mucha ansiedad').",
      "3. Los Sentimientos: Florecen en las profundidades de la conciencia. Son complejos, contradictorios y duraderos. Decir 'estaba triste' es perezoso. Expresar un sentimiento de verdad valioso implica detallar la mezcla de sensaciones físicas, contradicciones racionales y pulsiones subconscientes que habitan bajo la superficie."
    ],
    examples: [
      {
        label: "El lenguaje de los sentidos olvidados",
        text: "Los escritores suelen apoyarse en exceso en el sentido de la vista por comodidad. Sin embargo, introducir sonidos lejanos en un patio interior o la rugosidad de un pasamanos de metal helado dota a la atmósfera de una carnalidad conmovedora.",
        source: "Pedagogía del Sentido"
      }
    ],
    exerciseDescription: "Escribe un breve relato romántico o de reconciliación en un entorno ruidoso (una cafetería ajetreada o una estación de tren). El centro del relato debe estar dominado por olores, texturas táctiles y ruidos de fondo, relegando lo visual a un plano secundario.",
    exercisePrompt: "El olor a café rancio quemado flotaba sobre la barra de mármol frío cuando nuestras manos se rozaron...",
    tasks: [
      "Incluye al menos dos olores precisos y una textura definida de las superficies físicas.",
      "Muestra la emoción latente con micro-gestos y actos corporales definidos.",
      "No anuncies en ningún momento qué sienten los protagonistas de forma abstracta."
    ]
  },
  {
    id: 9,
    title: "La Composición",
    subtitle: "El engranaje temporal del ritmo narrativo",
    duration: "60 minutos",
    summary: "Analiza las cinco unidades narrativas primordiales —escena, narración lineal, resumen, elipsis y descripción— para dominar la velocidad del tiempo literario.",
    theory: [
      "Para construir un edificio narrativo sólido capaz de albergar con sobriedad la trama, el escritor debe aprender a engarzar las diferentes partes del discurso mediante la composición.",
      "Toda historia está compuesta por cinco bloques de tiempo o unidades fundamentales:",
      "1. Escena: Representa el tiempo real de los hechos coincidiendo con el de la lectura de forma envolvente. Introduce los diálogos con estilo directo, colocando al lector en medio de la acción dramática.",
      "2. Narración lineal: Cuenta los hechos de forma fluida a la velocidad a la que ocurren, pero variando los escenarios y encadenando las acciones físicas complejas (muy usada en la novela de suspenso o detectivesca).",
      "3. Resumen: El tiempo cronológico de la acción es mucho mayor que el de la narración (ej. resumir tres años de noviazgo feliz en un solo párrafo cinematográfico). Es indispensable para abreviar tramos que no requieren máxima tensión dramática.",
      "4. Elipsis: Se omiten por completo los hechos ocurridos en un lapso temporal determinado ('Quince años después, regresó al pueblo con una pequeña maleta'). El salto temporal es rotundo de un párrafo al siguiente.",
      "5. Descripción: Es el paréntesis estático, tiempo muerto en la acción donde la cámara se demora a retratar personas, paisajes u objetos de manera espacial.",
      "La atinada mezcla de estas cinco unidades dicta la velocidad narrativa del relato, de forma análoga a la arena cayendo por un complejo reloj de arena con múltiples estrechamientos."
    ],
    examples: [
      {
        label: "El vaivén del tiempo narrativo",
        text: "Comenzar con un rápido resumen, dar un salto temporal mediante elipsis, demorarse en una descripción detallada que cree atmósfera, y desembocar finalmente en una escena intensa en tiempo real es una fórmula infalible de composición rítmica.",
        source: "Julio Cortázar: Del Cuento y sus Alrededores"
      }
    ],
    exerciseDescription: "Escribe un relato de una carilla que narre un día completo de tu vida, pero estructurándolo voluntariamente de manera que emplees de forma visible todas y cada una de las cinco unidades: una elipsis, un resumen, una descripción estática, una narración lineal de trámite y una escena intensa con diálogo.",
    exercisePrompt: "Sonó el despertador a las seis. [Resumen del día]. Para cuando cayó la tarde, el silencio era absoluto en el salón...",
    tasks: [
      "Señala en el texto (o planifica) qué fragmento corresponde a cada una de las cinco unidades narrativas.",
      "La escena en tiempo real debe ocupar el núcleo dramático del ejercicio.",
      "Garantiza que la elipsis temporal se sienta natural y no interrumpa el avance emocional del texto."
    ]
  },
  {
    id: 10,
    title: "El Tratamiento del Tema",
    subtitle: "La esfericidad, intensidad y objetivación literaria",
    duration: "55 minutos",
    summary: "Reflexiona sobre el proceso de exorcizar miedos personales de manera objetiva en el cuento, buscando la redondez esférica de Julio Cortázar.",
    theory: [
      "En el cuento contemporáneo los grandes temas abstractos no existen como un molde prefabricado; lo realmente relevante es la trama y el tratamiento artístico que se le da a la idea inicial.",
      "El tratamiento del tema reside sobre tres pilares fundamentales que todo escritor debe dominar:",
      "1. Ajuste de la forma al tema: Todo recurso expresivo, el tono escogido y la minuciosidad de los detalles deben estar rigurosamente al servicio del núcleo del tema. El tema es la chispa alrededor de la cual el relato se teje en círculos concéntricos.",
      "2. Brevedad, Unidad y Esfericidad: El cuento posee una economía de medios absoluta. Deberíamos poder mirar el cuento como quien mira una hermosa esfera perfecta: redonda, cerrada y cíclica. Si quitamos una sola frase de un buen cuento, toda la estructura debería tambalearse y perder el sentido como una descarga eléctrica interrumpida.",
      "3. Objetivación del tema (Exorcizar fantasmas): Una necesidad primordial del escritor es exorcizar de sus entrañas las obsesiones personales. El error más común de los principiantes es plasmar ese exorcismo directamente sobre el papel con crudeza (escribiendo que su marido no lo comprende o quejándose de la injusticia social). Eso no es literatura. Los fantasmas de la mente deben cruzar el umbral del inconsciente, sentarse en el sofá de la sala y tomar la forma tangible de monstruos, sirenas, o personajes con nombres y destinos propios ajenos a nosotros."
    ],
    examples: [
      {
        label: "La esfericidad del cuento perfecto",
        text: "En un relato redondo, la última línea se conecta conceptualmente con la primera, sellando un universo hermético donde no sobra ningún adjetivo ni existe ninguna digresión inútil.",
        source: "Julio Cortázar"
      }
    ],
    exerciseDescription: "Elige un tema abstracto que consideres insignificante o aburrido (un grano de arroz o la caída de una hoja seca). Escribe un microrrelato cerrado y cíclico de no más de 15 líneas donde este objeto actúe como el centro cósmico u organizador de todo el destino de un personaje.",
    exercisePrompt: "Aquel grano de arroz, depositado por descuido sobre el tapete verde de la timba, decidió el destino de...",
    tasks: [
      "Escribe un cuento con una estructura perfectamente cíclica (esférica).",
      "Evita digresiones explicativas; concéntrate exclusivamente en el objeto conductor.",
      "Corrige el borrador hasta asegurar que ninguna palabra pueda ser eliminada sin romper el sentido."
    ]
  },
  {
    id: 11,
    title: "La Construcción de la Escena",
    subtitle: "El armazón de los objetos conductores",
    duration: "60 minutos",
    summary: "Analiza cómo edificar escenas memorables amueblando el espacio físico con objetos concretos y verbos de acción dinámicos.",
    theory: [
      "La escena constituye la unidad narrativa mínima idónea para atrapar al lector y hacerlo experimentar los hechos en vivo. Para que una escena sea plenamente visible, no se puede sostener en el aire de las generalidades; necesita construirse sobre un sólido armazón físico.",
      "Este armazón se edifica a través de tres pilares:",
      "1. Amueblar con abundancia de sustantivos concretos: No basta con enunciar que el protagonista viaja en una nave. El texto debe enumerar y rodear al personaje de objetos físicos tangibles (blindajes, tuercas, escafandras, llaves inglesas).",
      "2. Saturar con verbos de movimiento y acción física: El dinamismo de la escena exige que los verbos indiquen actos cinéticos (perforar, atornillar, escapar, apretar), evitando los verbos de estado o mentales pasivos.",
      "3. El objeto conductor o aglutinador: Escoge un objeto físico preciso y haz que toda la escena gire en torno a él. Este objeto debe repetirse de forma melódica, actuar como foco de la acción, y finalmente servir de puente de continuidad para conectarse físicamente con el párrafo o la escena posterior.",
      "Esta técnica proporciona un esqueleto invisible bajo la piel de la prosa que le garantiza al lector un avance con tramas bien tejidas y libres de saltos bruscos."
    ],
    examples: [
      {
        label: "El armazón físico y mecánico de Stanislaw Lem",
        text: "En el inicio de 'Viaje Séptimo', Tichy narra una avería en el espacio exterior. Toda la escena se sostiene físicamente sobre una serie de herramientas detalladas y con la repetición constante de 'la llave inglesa' que se pierde flotando en el cosmos, retornando físicamente en el inicio del siguiente capítulo para asegurar una atadura de continuidad impecable.",
        source: "Viaje Séptimo (Stanislaw Lem)"
      }
    ],
    exerciseDescription: "Construye una escena dramática de tensión silenciosa entre dos personajes que cenan en un salón. El conflicto no debe resolverse con gritos, sino a través de la manipulación intensa de un objeto conductor en la mesa (un vaso astillado, un salero de plata, o un tenedor de puntas torcidas).",
    exercisePrompt: "Elena observaba fijamente las puntas torcidas del tenedor mientras sostenía la respiración...",
    tasks: [
      "Amuebla el espacio detalladamente utilizando sustantivos físicos muy específicos.",
      "Introduce abundantes verbos de acción física sutiles (frotar, girar, golpear, deslizar).",
      "Termina la escena haciendo que el objeto conductor se desplace físicamente de mano de un personaje al otro."
    ]
  },
  {
    id: 12,
    title: "El Diálogo en la Narración",
    subtitle: "Las cuatro funciones del diálogo y sus secretos de ritmo",
    duration: "55 minutos",
    summary: "Aprende a diferenciar el diálogo literario del diálogo teatral, dominando sus funciones informativas, estilísticas y de avance de la acción.",
    theory: [
      "El diálogo literario es una herramienta fundamental para dar dinamismo al relato y permitir que los personajes se revelen por sí mismos. A diferencia del teatro —donde al no haber narrador, los personajes deben decirlo absolutamente todo—, en el relato el diálogo coexiste con el narrador, lo que exige una dosificación inteligente.",
      "El diálogo narrativo cumple cuatro funciones primordiales:",
      "1. Función Informativa: el narrador comparte los datos ocultos haciendo hablar de forma indirecta a los personajes.",
      "2. Avance de la Acción: las réplicas deben provocar giros anímicos y cambios drásticos que modifiquen el curso de los hechos.",
      "3. Función Estilística (Principio de vasos comunicantes): acuñado por Mario Vargas Llosa, consiste en amalgamar en una misma escena diálogos ocurridos en distintos tiempos o espacios, enriqueciéndose mutuamente para crear una realidad global más rica.",
      "4. Función Escénica: retira momentáneamente al narrador para que los personajes hablen en vivo, ofreciendo un respiro rítmico esencial.",
      "Para construir grandes diálogos, recuerda los siguientes trucos:",
      "- No deben decirlo todo: los personajes, como nosotros, ocultan mentiras, silencios o reticencias (el subtexto).",
      "- Diálogo contrapunto: evita hablar del problema de forma directa; haz que discutan sobre algo mundano (por ejemplo, hablar de botánica mientras se rompe la relación amorosa).",
      "- Evita la monotonía de preguntas y respuestas obvias de culebrón."
    ],
    examples: [
      {
        label: "Los vasos comunicantes en Madame Bovary",
        text: "Gustave Flaubert entrelaza en una misma escena los discursos políticos rústicos de la feria electoral con los susurros y promesas de amor de Rodolfo a Emma Bovary, creando un contraste satírico grandioso.",
        source: "Madame Bovary (Gustave Flaubert)"
      }
    ],
    exerciseDescription: "Escribe una escena de conversación en la consulta de un médico. El paciente desea confesar que ha cometido un crimen, pero intenta hacerlo de manera indirecta, dialogando en contrapunto sobre los síntomas de una falsa migraña.",
    exercisePrompt: "—Es un dolor punzante en la sien astillada —dijo él, sin mirar los expedientes clínicos del doctor—, como un destornillador intentando abrir...",
    tasks: [
      "El diálogo debe sonar dinámico, utilizando réplicas asimétricas que no sigan el típico patrón rígido de pregunta y respuesta.",
      "Introduce subtexto: que se entienda la confesión sin necesidad de que el personaje la enuncie explícitamente.",
      "Dosifica el uso del 'dijo' sustituyéndolo por ademanes físicos o estados de ánimo."
    ]
  },
  {
    id: 13,
    title: "El Punto de Vista",
    subtitle: "El ángulo óptico y la focalización narrativa",
    duration: "60 minutos",
    summary: "Domina la elección e implementación de las cuatro perspectivas clásicas: narrador protagonista, testigo, omnisciente y cuasi-omnisciente.",
    theory: [
      "El punto de vista o focalización es el ángulo óptico específico que adopta el narrador para iluminar los hechos de la historia. Es la elección técnica más trascendental; un enfoque equivocado puede arruinar por completo el mejor argumento.",
      "Estudiamos las cuatro modalidades fundamentales de narrador:",
      "1. Narrador Protagonista: Cuenta los hechos en primera persona desde su propio pellejo. Todo lo que ocurre se filtra por su subjetividad, pensamientos e ilusiones (monólogo interior). No tiene acceso a la mente del resto de los personajes, excepto deduciendo a través de sus gestos.",
      "2. Narrador Testigo: Narra en primera o tercera persona desde los márgenes del relato. No es el protagonista, sino un observador secundario de las peripecias de otro (ej. el Dr. Watson presenciando la genialidad de Sherlock Holmes, o el detective clásico investigando pistas cuya respuesta desconoce, sosteniendo el suspenso de la trama).",
      "3. Narrador Omnisciente: Es el 'Dios' del relato. Sabe todo sobre el pasado y el futuro; conoce de forma ilimitada los pensamientos, sueños inéditos de los personajes y posee la osadía de juzgarlos.",
      "4. Narrador Cuasi-omnisciente: Funciona como una cámara de cine externa. Sigue a los personajes a donde vayan, registra cada lágrima, temblor o palidez de manera minuciosa, pero el lector es quien debe interpretar las emociones, ya que el narrador se abstiene de indagar la mente profunda del personaje de manera directa."
    ],
    examples: [
      {
        label: "La mirada cinematográfica en la novela",
        text: "En 'El Amante', Marguerite Duras amalgama con soltura destellos de narración en primera persona con descripciones en tercera persona de un narrador cuasi-omnisciente, logrando un realismo puramente escénico y estético.",
        source: "El Amante (Marguerite Duras)"
      }
    ],
    exerciseDescription: "Imagina un pequeño incidente cotidiano en los vagones del metro (un tropiezo con una cartera o un cruce de miradas). Escribe cuatro breves borradores de este suceso empleando las cuatro focalizaciones explicadas en esta clase.",
    exercisePrompt: "[Para el Protagonista]: Los cordones de mis zapatos estaban deshechos cuando el vagón se sacudió...",
    tasks: [
      "Escribe cuatro versiones cortas (de unas 5 líneas cada una) del mismo suceso.",
      "Asegúrate de que el narrador testigo no revele pensamientos internos del protagonista.",
      "El narrador cuasi-omnisciente debe limitarse estrictamente a detalles captados por la cámara y el micrófono."
    ]
  },
  {
    id: 14,
    title: "El Personaje Literario",
    subtitle: "La otredad: acción, visualización y comprensión humana",
    duration: "55 minutos",
    summary: "Estudia la construcción orgánica del personaje, aprendiendo a equilibrar la acción existencial con la visualización y la empatía psicológica.",
    theory: [
      "Dar vida a un personaje complejo es un proceso mágico y aterrador para el escritor. Exige sumergirse en un estado de 'otredad', una catarsis en la que el autor olvida su ser cotidiano y se amolda de forma temporal en la piel de un desconocido.",
      "Para edificar un personaje consistente requerimos trabajar sobre cuatro planos integrados:",
      "1. Acción y personaje: Estan íntimamente ligados. Las acciones del relato deben ser consecuentes con la psicología del personaje. No le atribuyas actos ajenos a sus impulsos. Si diseñas una trama, escoge al personaje idóneo que la resuelva de forma verosímil y con la complejidad existencial proporcional.",
      "2. Visualización: Debes ver e imaginar al personaje con imágenes nítidas antes de hacerlo actuar. Observa a la gente real en la calle, adivina sus vidas, extrae rasgos de sus rostros y de la forma en que sostienen la mirada.",
      "3. Identificación / Zoom de cámara: Es la oscilación empática que realiza el narrador literario: acercar la mirada hasta fundirse con la mente del personaje y volver a alejarse para registrarlo desde el exterior con objetividad, alternando de manera continua los planos espaciales.",
      "4. Comprensión del alma: El fin supremo de la literatura es investigar los matices y rincones del alma humana a los que apenas accedemos en nuestra vida real, que suele ser demasiado caótica."
    ],
    examples: [
      {
        label: "La transustanciación en la piel del otro",
        text: "En 'La metamorfosis', Franz Kafka sumerge al narrador en la piel de Gregorio Samsa, atrapado en el cuerpo de un insecto. Semejante extrañeza existencial se sostiene únicamente gracias a la minuciosidad con que se narran las reacciones cotidianas y psicológicas del personaje frente a su desgracia física.",
        source: "La metamorfosis (Franz Kafka)"
      }
    ],
    exerciseDescription: "Diseña un personaje original completando de forma detallada su 'ficha literaria' y luego escribe un texto de una página que narre los primeros cinco minutos de su día tras despertar, mostrando su personalidad a través de sus gestos rutinarios.",
    exercisePrompt: "Ficha del personaje: Nombre, edad, manía secreta. [Texto]: Agustín abrió los ojos a las siete en punto y sintió la habitual fobia al roce de las sábanas...",
    tasks: [
      "Planifica su ficha de identidad que incluya un rasgo contradictorio.",
      "Muestra sus manías mediante la interacción física con los objetos del dormitorio.",
      "Evita dictar conclusiones absolutas; deja que el comportamiento dibuje el perfil psicológico."
    ]
  },
  {
    id: 15,
    title: "Los Géneros Narrativos",
    subtitle: "La graduación de la realidad: del realismo a lo fantástico",
    duration: "60 minutos",
    summary: "Aprende a clasificar y mezclar los géneros literarios graduando el pacto de lectura desde lo probable hasta lo imposible.",
    theory: [
      "El conocimiento y graduación de los géneros narrativos le permite al escritor escoger, de forma premeditada, el nivel de pacto de lectura que mejor se adapte a la historia que desea contar.",
      "Establecemos una escala ascendente de graduación literaria dividida en cuatro grandes estaciones:",
      "1. Relatos Realistas (Lo probable): El narrador reproduce fielmente las percepciones ordinarias del ser humano y de la sociedad. Presume despersonalizarse, emulando ser un testigo cotidiano. Sin embargo, toda objetividad es un espejismo artístico; la forma selectiva de enfocar las escenas dibuja una realidad única.",
      "2. Relatos Lúdicos (Lo improbable): No se violan las leyes de la física o de la lógica ordinaria, pero sí se estira de manera exagerada la ley del azar. Se acumulan coincidencias, se buscan paisajes exóticos, personajes excéntricos y peripecias memorables (germen del relato de aventuras o de intriga policial).",
      "3. Relatos Misteriosos (Lo posible): Sucesos reales pero cuya interpretación nos perturba y dota de extrañeza. El realismo mágico (como el asombro ante el hielo en 'Cien años de soledad') o el terror psicológico sutil caen en este rango, donde la realidad parece escurrirse de la percepción normal.",
      "4. Relatos Fantásticos (Lo imposible): Se produce un quiebre absoluto del orden lógico de la naturaleza. El pacto de lectura bascula entre la vacilación y la duda constante (lo fantástico - Tzvetan Todorov), el ingreso definitivo a leyes mágicas inexplicadas (lo maravilloso), o la justificación científica prospectiva (la ciencia-ficción)."
    ],
    examples: [
      {
        label: "La delgada línea de la incredulidad",
        text: "En 'Casa tomada', Julio Cortázar relata la ocupación inexplicable de un caserón burgués de forma tan cotidiana que el misterio se amalgama a la perfección con la rutina de tejer y limpiar de los hermanos protagonistas.",
        source: "Casa tomada (Julio Cortázar)"
      }
    ],
    exerciseDescription: "Escribe un breve texto que comience como un relato puramente realista (por ejemplo, una aburrida visita al ayuntamiento para realizar un trámite burocrático) y donde, hacia la mitad de la carilla, irrumpa de forma sutil un elemento fantástico e imposible (un duende solicitando un padrón o las paredes desvaneciéndose en arena) sin alterar la sobriedad del tono narrativo.",
    exercisePrompt: "La fila de la ventanilla tres avanzaba con exasperante lentitud. Detrás de mí, un hombrecillo de apenas treinta centímetros de estatura...",
    tasks: [
      "Mantén la prosa realista y los modalizadores en la primera mitad del texto.",
      "La intrusión del suceso fantástico debe ser tratada con total naturalidad por los funcionarios.",
      "Termina el relato sosteniendo la duda sobre la realidad del hecho."
    ]
  }
];

export const modulesData = [
  {
    id: 1,
    title: "Módulo I: Los Fundamentos de la Palabra",
    description: "Explora las herramientas esenciales de trabajo, la naturaleza del lenguaje literario, y los pilares de la claridad, naturalidad y visibilidad en la prosa.",
    lessonIds: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    title: "Módulo II: Voz, Ritmo y Sentido",
    description: "Domina la melodía de tu sintaxis, la modulación íntima del narrador y la canalización física de la empatía literaria.",
    lessonIds: [6, 7, 8]
  },
  {
    id: 3,
    title: "Módulo III: Estructura, Escena y Diálogo",
    description: "Aprende a componer el tiempo dramático, amueblar escenas con verbos vivientes y construir diálogos con subtexto y contrapunto.",
    lessonIds: [9, 10, 11, 12]
  },
  {
    id: 4,
    title: "Módulo IV: Los Componentes del Relato",
    description: "Controla el ángulo óptico del narrador, crea personajes dotados de psicología existencial y gradúa tu literatura desde el realismo hasta lo fantástico.",
    lessonIds: [13, 14, 15]
  }
];
