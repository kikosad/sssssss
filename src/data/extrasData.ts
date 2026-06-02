import { BookRecommendation, MovieRecommendation, StudyDay, WriterHabit, CommonError } from '../types';

export const bookRecommendations: BookRecommendation[] = [
  {
    title: "La práctica del relato: Manual de estilo para narradores",
    author: "Ángel Zapata",
    reason: "Un clásico absoluto de la pedagogía en español que desmenuza con humor y bisturí clínico los vicios estilísticos de los principiantes (formalismo, asertividad y énfasis) y enseña a potenciar la naturalidad activa."
  },
  {
    title: "El arte de la ficción",
    author: "John Gardner",
    reason: "Introduce la maravillosa teoría del 'sueño vívido y continuo' y explica por qué los errores de mala técnica rompen el hechizo de la lectura y alejan al receptor del mundo ficcional."
  },
  {
    title: "Cartas a un joven novelista",
    author: "Mario Vargas Llosa",
    reason: "Un manual epistolar soberbioso que aborda la composición, el tiempo de la narración, la noción de vasos comunicantes y el poder de persuasión que debe poseer la voz del narrador."
  },
  {
    title: "Aspectos del cuento",
    author: "Julio Cortázar",
    reason: "Una conferencia fundamental que teoriza sobre la 'esfericidad' del cuento perfecto, la economía de medios y la necesidad vital de objetivar las obsesiones para fundarlas en relatos redondos."
  }
];

export const movieRecommendations: MovieRecommendation[] = [
  {
    title: "Rashomon",
    director: "Akira Kurosawa",
    description: "Una obra maestra absoluta para comprender la focalización, las limitaciones del narrador testigo y la distorsión subjetiva de la verdad a través del relato de un mismo crimen contado desde cuatro puntos de vista contradictorios."
  },
  {
    title: "Adaptation (El ladrón de orquídeas)",
    director: "Spike Jonze (Guión de Charlie Kaufman)",
    description: "La película definitiva sobre el bloqueo del escritor, la neurosis del proceso de creación, y cómo la obsesión personal (exorcizar fantasmas) puede dar origen a una obra maestra meta-constructiva."
  },
  {
    title: "Arrival (La llegada)",
    director: "Denis Villeneuve",
    description: "Excelente para analizar el concepto de estructuras narrativas no lineales. Estudia cómo el tiempo de la composición (analepsis, prolepsis y elipsis) altera y enriquece dramáticamente el sentido de la historia."
  }
];

export const writerHabits: WriterHabit[] = [
  {
    id: "habit-1",
    habit: "La cuota sagrada de palabras diarias",
    description: "Escribe un mínimo de 300 a 500 palabras todos los días a la misma hora sin encender la censura crítica. El objetivo es entrenar la 'loca de la casa' para que corra libre por el folio antes de que intervenga el cerebro lógico."
  },
  {
    id: "habit-2",
    habit: "La libreta de ademanes",
    description: "Lleva siempre contigo un pequeño cuaderno analógico o digital. Anota ademanes físicos, tics de peatones en el transporte, olores característicos de ciertos recintos, y fragmentos de diálogos absurdos escuchados al vuelo."
  },
  {
    id: "habit-3",
    habit: "Revisar con ojos de forense",
    description: "Deja enfriar tus borradores al menos una semana. Luego, léelos en voz alta con lápiz rojo en mano buscando palabras redundantes, adjetivos cansados y pasajes de estilo formal o asertivo."
  },
  {
    id: "habit-4",
    habit: "El diccionario como campo de juego",
    description: "Dedica 10 minutos a bucear en un diccionario ideológico o de sinónimos. Descubre nuevas palabras e introduce conscientemente asociaciones raras en tus notas cotidianas."
  }
];

export const commonErrors: CommonError[] = [
  {
    error: "El síndrome de la marioneta",
    explanation: "Forzar a los personajes a realizar acciones inverosímiles sencillamente para que encajen con la moraleja o el símbolo final que el escritor quiere imponer.",
    solution: "Permitir que el personaje actúe de manera consecuente con sus motivaciones internas. El tema debe brotar orgánicamente del comportamiento, no ser una imposición externa."
  },
  {
    error: "La verborrea o el lirismo empalagoso",
    explanation: "Saturar el relato de metáforas pomposas y adjetivos estridentes creyendo que eso le otorga 'calidad literaria' al texto.",
    solution: "Buscar la concisión y la densidad útil. Un de los mejores consejos de Hemingway es que el adjetivo que no aporta, debilita y ahoga."
  },
  {
    error: "Gritarle al lector (Énfasis excesivo)",
    explanation: "Describir situaciones dramáticas o asquerosas mediante verbos y calificativos sobredimensionados, anulando la verosimilitud de la escena.",
    solution: "Modular la voz narrativa en un volumen medio. Describe el hecho físico repulsivo o conmovedor con frialdad y precisión quirúrgica, dejando que la reacción la viva el lector de forma autónoma."
  },
  {
    error: "El diario de quejas (No objetivar)",
    explanation: "Escribir crónicas literales de miedos o problemas personales sin pasarlos por un filtro artístico, resultando en textos quejumbrosos en lugar de arte literario.",
    solution: "Exorciza tus fantasmas dándoles un cuerpo físico ajeno a ti. Convierte tu soledad en un insecto, en una tormenta de arena en el desierto o en un farero abandonado."
  }
];

export const studyPlan: StudyDay[] = [
  { day: 1, task: "Introducción y Lectura del Taller", lessonId: 1, activity: "Lee atentamente la teoría de la Clase 1 sobre las tres familias de utensilios y prepara tu rincón físico silencioso." },
  { day: 2, task: "Práctica: Acciones cotidianas", lessonId: 1, activity: "Realiza la tarea de la Clase 1. Escribe un texto concentrado exclusivamente en acciones físicas cotidianas." },
  { day: 3, task: "El misterio de las palabras", lessonId: 2, activity: "Estudia la Clase 2 sobre Significado y Significante. Cuestiona la relación rígida entre el nombre y el objeto." },
  { day: 4, task: "El choque semántico", lessonId: 2, activity: "Completa el ejercicio práctico de las dos palabras mágicas en un contrarreloj estricto de 15 minutos." },
  { day: 5, task: "Estilo Conciso y Claro", lessonId: 3, activity: "Lee la Clase 3 sobre Claridad. Aborda las tres leyes del discurso: totalidad, comprensibilidad y continuidad." },
  { day: 6, task: "El desafío de Roald Dahl", lessonId: 3, activity: "Realiza la práctica de rellenado del texto inspirado en 'Las Brujas'. Revisa si el texto final emula la oralidad." },
  { day: 7, task: "Estilo Formal y Asertivo", lessonId: 4, activity: "Clase 4. Analiza los ejemplos del estilo burocrático de manual de instrucciones y diagnostica tus propios textos." },
  { day: 8, task: "El poder de los modalizadores", lessonId: 4, activity: "Haz el ejercicio 'Desnúdalos'. Traduce un fragmento policial de estilo formal a un estilo natural e introduce modalizadores." },
  { day: 9, task: "Creación de imágenes sensoriales", lessonId: 5, activity: "Clase 5. Profundiza en el 'sueño vívido y continuo'. Practica la visualización de una instantánea fotográfica real." },
  { day: 10, task: "Trazar el borrador visual", lessonId: 5, activity: "Traduce la imagen elegida en palabras, centrándote en detalles físicos, pliegues y luces sin calificar la emoción." },
  { day: 11, task: "La música de las palabras", lessonId: 6, activity: "Clase 6. Estudia los ritmos de prosa: frases cortas para tensión, largas para calma." },
  { day: 12, task: "La escena de persecución", lessonId: 6, activity: "Realiza el desafío de persecución sintáctica. Alterna coordinadas y subordinadas para regular la respiración del lector." },
  { day: 13, task: "Modular la voz narrativa", lessonId: 7, activity: "Clase 7. Comprende por qué el narrador es ante todo una voz incorpórea y controla su volumen medio." },
  { day: 14, task: "La carta sin adjetivos abstractos", lessonId: 7, activity: "Escribe la carta del ejercicio de la Clase 7 sin usar los nombres directos de ninguna emoción." },
  { day: 15, task: "El canal de la empatía", lessonId: 8, activity: "Clase 8. Analiza la gradación de sensaciones, emociones y sentimientos. Estudia la evocación del olfato." },
  { day: 16, task: "Escena hiper-física", lessonId: 8, activity: "Completa el ejercicio de la cafetería o estación de tren, donde la atmósfera se construya enteramente de ruidos, roces y olores." },
  { day: 17, task: "La Composición y las Unidades", lessonId: 9, activity: "Clase 9. Comprende los cinco bloques del tiempo: escena, narración lineal, resumen, elipsis y descripción." },
  { day: 18, task: "El reloj de arena temporal", lessonId: 9, activity: "Escribe la crónica de tu día entero empleando visiblemente cada una de las cinco unidades del entramado compositivo." },
  { day: 19, task: "El cuento esférico", lessonId: 10, activity: "Clase 10. Reflexiona sobre la economía absoluta del cuento contemporáneo y la objetivación de tus obsessciones personales." },
  { day: 20, task: "El microrrelato con grano de arroz", lessonId: 10, activity: "Escribe el cuento esférico de menos de 15 líneas con un objeto nimio como conductor del destino." },
  { day: 21, task: "Edificación de la escena física", lessonId: 11, activity: "Clase 11. Estudia los objetos aglutinadores y los hilos de continuidad en la prosa de Stanislaw Lem." },
  { day: 22, task: "El tenedor torcido", lessonId: 11, activity: "Afronta el ejercicio del tenedor o salero. Muestra un conflicto amoroso sutil a través de la tensión física con el objeto." },
  { day: 23, task: "El diálogo y sus funciones", lessonId: 12, activity: "Clase 12. Domina las cuatro funciones del diálogo y la teoría de los vasos comunicantes en Flaubert." },
  { day: 24, task: "El diálogo en contrapunto", lessonId: 12, activity: "Escribe la consulta médica donde el paciente confiesa indirectamente un crimen mediante síntomas de migraña artificial." },
  { day: 25, task: "Dominar la luz (Punto de vista)", lessonId: 13, activity: "Clase 13. Estudia la focalización. Practica las diferencias entre el protagonista, testigo, omnisciente y cuasi-omnisciente." },
  { day: 26, task: "El metro en cuatro enfoques", lessonId: 13, activity: "Escribe las cuatro versiones cortas del incidente de metro para asimilar con precisión las barreras de cada voz." },
  { day: 27, task: "La psicología del personaje", lessonId: 14, activity: "Clase 14. Trabaja la otredad existencial y crea a tu personaje rellenando minuciosamente su ficha literaria." },
  { day: 28, task: "La mañana de Agustín", lessonId: 14, activity: "Escribe el despertar del personaje de Agustín; muestra sus obsesiones mediante gestos cotidianos." },
  { day: 29, task: "Los géneros y pactos de lectura", lessonId: 15, activity: "Clase 15. Estudia la graduación de géneros literarios (de lo probable a lo imposible) y el realismo sucio." },
  { day: 30, task: "La intrusión fantástica", lessonId: 15, activity: "Completa el ejercicio burocrático de la intrusión fantástica y consolida todo tu aprendizaje en un cuento pulido." }
];
