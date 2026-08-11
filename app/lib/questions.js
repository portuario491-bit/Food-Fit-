/**
 * Banco de preguntas del cuestionario piloto BlueHeart.
 * Extraído del prototipo (blueheart-demo.html): 8 dimensiones x 3 preguntas.
 * Cuando llegue el manual completo (16 dimensiones), este archivo se
 * ampliará sin tocar el resto de la app.
 */
const QUESTIONS = [
  // Comunicación
  {dim:"comunicacion", label:"Comunicación", text:"Llevas varios días sintiéndote incómodo/a por una actitud de tu pareja. ¿Cómo sueles actuar?",
   options:["Normalmente termino sin decir nada","Me cuesta iniciar esa conversación","Depende de la importancia del problema","Espero al momento adecuado para comentarlo","Lo hablo cuanto antes"]},
  {dim:"comunicacion", label:"Comunicación", text:"¿Qué importancia tiene para ti poder hablar de cualquier tema con tu pareja, aunque resulte incómodo?",
   options:["Muy poca","Poca","Moderada","Bastante","Es imprescindible"]},
  {dim:"comunicacion", label:"Comunicación", text:"Durante una discusión, tu pareja mantiene una opinión muy distinta a la tuya. ¿Tu primera reacción?",
   options:["Defender mi postura","Me cuesta aceptar opiniones muy diferentes","Depende del tema","Escuchar antes de responder","Intento comprender primero su punto de vista"]},

  // Confianza
  {dim:"confianza", label:"Confianza", text:"¿Con qué facilidad sueles confiar en una persona cuando comienzas una relación?",
   options:["Me resulta muy difícil","Me cuesta confiar","Necesito tiempo para confiar","Confío bastante","Confío con mucha facilidad"]},
  {dim:"confianza", label:"Confianza", text:"¿Necesitas saber con frecuencia dónde está o qué está haciendo tu pareja para sentirte tranquilo/a?",
   options:["Nunca","Rara vez","Algunas veces","Bastantes veces","Casi siempre"]},
  {dim:"confianza", label:"Confianza", text:"¿Qué importancia tiene para ti que una relación esté basada en una confianza absoluta?",
   options:["Ninguna","Poca","Moderada","Bastante","Es imprescindible"]},

  // Apego
  {dim:"apego", label:"Apego", text:"¿Cuánto tiempo necesitas compartir con tu pareja para sentirte bien en la relación?",
   options:["Muy poco","Poco","Una cantidad equilibrada","Bastante","Casi todo el tiempo posible"]},
  {dim:"apego", label:"Apego", text:"Tu pareja decide pasar un fin de semana con sus amigos sin ti. ¿Cómo lo vivirías?",
   options:["Me haría sentir mal","Me costaría aceptarlo","Me gustaría pasar más tiempo juntos, pero lo respetaría","Lo entendería sin problema","Me parecería completamente normal"]},
  {dim:"apego", label:"Apego", text:"¿Qué importancia tiene para ti mantener proyectos personales independientes de la relación?",
   options:["Ninguna","Poca","Moderada","Bastante","Muchísima"]},

  // Convivencia
  {dim:"convivencia", label:"Convivencia", text:"¿Cómo te describirías respecto al orden en tu vida diaria?",
   options:["Muy desordenado/a","Algo desordenado/a","Intermedio","Bastante ordenado/a","Muy ordenado/a"]},
  {dim:"convivencia", label:"Convivencia", text:"¿Cuánto espacio personal necesitas mantener incluso viviendo con tu pareja?",
   options:["Muy poco","Poco","Un equilibrio entre espacio y tiempo compartido","Bastante","Muchísimo"]},
  {dim:"convivencia", label:"Convivencia", text:"¿Qué importancia tiene para ti compartir actividades cotidianas (cocinar, comprar, pasear) con tu pareja?",
   options:["Muy poca","Poca","Moderada","Bastante","Muchísima"]},

  // Gestión de conflictos
  {dim:"conflictos", label:"Gestión de conflictos", text:"Cuando aparece un conflicto importante con tu pareja, ¿cuál suele ser tu primera reacción?",
   options:["Tiendo a evitarlo","Espero a que dé el primer paso mi pareja","Necesito un tiempo antes de hablar","Intento hablarlo pronto","Intento hablarlo inmediatamente"]},
  {dim:"conflictos", label:"Gestión de conflictos", text:"Si descubres que te has equivocado, normalmente...",
   options:["Rara vez pido perdón","Me cuesta mucho reconocerlo","Depende de la situación","Me cuesta un poco, pero termino haciéndolo","Pido disculpas con facilidad"]},
  {dim:"conflictos", label:"Gestión de conflictos", text:"¿Qué importancia tiene para ti llegar a acuerdos después de un conflicto?",
   options:["Muy poca","Poca","Moderada","Bastante","Es imprescindible"]},

  // Proyecto de vida
  {dim:"proyecto_vida", label:"Proyecto de vida", text:"¿Qué importancia tiene para ti construir un proyecto de vida en común con tu pareja?",
   options:["Muy poca","Poca","Moderada","Bastante","Es una prioridad absoluta"]},
  {dim:"proyecto_vida", label:"Proyecto de vida", text:"¿Qué importancia tiene para ti el desarrollo profesional dentro de tu proyecto de vida?",
   options:["Muy poca","Poca","Moderada","Bastante","Es una de mis principales prioridades"]},
  {dim:"proyecto_vida", label:"Proyecto de vida", text:"Si una oportunidad profesional implicara cambiar de ciudad o país, ¿cómo actuarías?",
   options:["Preferiría no cambiar mi lugar de residencia","Me costaría tomar esa decisión","Dependería de las circunstancias","Lo valoraría junto a mi pareja","Lo haría sin dudarlo"]},

  // Valores
  {dim:"valores", label:"Valores", text:"¿Qué importancia tiene para ti compartir valores fundamentales con tu pareja?",
   options:["Muy poca","Poca","Moderada","Bastante","Es imprescindible"]},
  {dim:"valores", label:"Valores", text:"Si tu pareja tuviera costumbres o una forma de vida diferente a la tuya, ¿cómo lo vivirías?",
   options:["Prefiero una pareja con valores muy similares a los míos","Me costaría adaptarme","Dependería de las diferencias","Lo respetaría siempre que también respetara la mía","Lo consideraría una oportunidad para aprender"]},
  {dim:"valores", label:"Valores", text:"¿Hasta qué punto influye la identidad política de una persona en tu decisión de iniciar una relación?",
   options:["No influye en absoluto","Influye poco mientras exista respeto","Depende de las ideas concretas","Influye bastante","Necesito una visión política muy similar a la mía"]},

  // Hijos
  {dim:"hijos", label:"Hijos", text:"¿Qué papel ocupa la posibilidad de tener hijos dentro de tu proyecto de vida?",
   options:["No deseo tener hijos","No forma parte de mis planes actuales","Dependería de la persona y las circunstancias","Me gustaría tener hijos en el futuro","Tener hijos es fundamental en mi proyecto de vida"]},
  {dim:"hijos", label:"Hijos", text:"¿Qué importancia tiene para ti que ambos compartáis una visión similar sobre la educación de los hijos?",
   options:["Muy poca","Poca","Moderada","Bastante","Es imprescindible"]},
  {dim:"hijos", label:"Hijos", text:"¿Cómo vivirías una relación estable con alguien que ya tuviera hijos de una relación anterior?",
   options:["Preferiría no iniciarla","Me costaría asumirlo","Dependería de las circunstancias","Estaría dispuesto/a a integrarme progresivamente","Lo viviría con total naturalidad"]},
];

const DIMENSIONS = ["comunicacion","confianza","apego","convivencia","conflictos","proyecto_vida","valores","hijos"];

const DIM_LABELS = {
  comunicacion:"Comunicación", confianza:"Confianza", apego:"Apego", convivencia:"Convivencia",
  conflictos:"Gestión de conflictos", proyecto_vida:"Proyecto de vida", valores:"Valores", hijos:"Hijos"
};

module.exports = { QUESTIONS, DIMENSIONS, DIM_LABELS };
