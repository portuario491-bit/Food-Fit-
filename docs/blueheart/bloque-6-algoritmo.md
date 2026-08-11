# Bloque 6. El Algoritmo

## Objetivo

Diseñar el sistema de decisión que permitirá a BlueHeart transformar la información contenida en dos Perfiles de Compatibilidad en un resultado cuantificable, reproducible y explicable.

El algoritmo será responsable de determinar cómo interactúan las diferentes características de dos usuarios, qué importancia tiene cada una de ellas, qué diferencias pueden resultar compatibles, cuáles pueden generar dificultades y cómo debe integrarse toda esa información para obtener un porcentaje global de compatibilidad.

El algoritmo no intentará predecir si una relación tendrá éxito. Su función será estimar hasta qué punto dos perfiles presentan una base compatible para construir una relación, según las dimensiones, variables, pesos y reglas definidas por el Método BlueHeart.

## 6.1 Qué es el algoritmo de BlueHeart

El algoritmo de BlueHeart será el sistema de reglas, ponderaciones, relaciones y operaciones encargado de comparar dos Perfiles de Compatibilidad y transformar esa comparación en un resultado estructurado. Será el núcleo matemático y lógico del Sistema de Compatibilidad.

La inteligencia artificial podrá comprender las respuestas de los usuarios, formular preguntas adicionales, construir los perfiles e interpretar posteriormente los resultados. El algoritmo será quien determine cómo influye esa información en la compatibilidad.

Esta separación será fundamental: la IA comprende a las personas, el algoritmo compara la información estructurada de sus perfiles, y la IA explica posteriormente el resultado.

**1. El algoritmo no busca personas iguales.** BlueHeart no utilizará un modelo basado exclusivamente en la semejanza. Dos usuarios no serán considerados compatibles simplemente porque hayan proporcionado respuestas similares. Dependiendo de la variable analizada, la semejanza podrá ser positiva, neutra, poco relevante o potencialmente problemática. Del mismo modo, una diferencia podrá ser complementaria, neutra, gestionable, relevante o crítica. Por tanto, el algoritmo no deberá responder únicamente a «¿Cuánto se parecen estas dos personas?». Deberá intentar responder a «¿Cómo interactúan las características de estas dos personas dentro de una posible relación?».

**2. El algoritmo analiza relaciones entre variables.** Cada usuario dispondrá de un Perfil de Compatibilidad formado por diferentes dimensiones y variables. El algoritmo comparará esas variables utilizando las reglas definidas por el Método BlueHeart. Una comparación no consistirá necesariamente en calcular la distancia matemática entre dos respuestas: en determinadas variables podrá ser importante la similitud, en otras la compatibilidad entre necesidades, en otras la complementariedad, y determinadas cuestiones podrán requerir reglas específicas debido a su importancia para un proyecto de vida común. El algoritmo deberá permitir que diferentes tipos de variables tengan diferentes formas de comparación.

**3. El algoritmo considera la importancia personal.** Una misma diferencia no tiene necesariamente el mismo significado para todas las personas. Por ejemplo, dos personas pueden tener hábitos de viaje diferentes: si ninguna necesita compartir esa actividad con su pareja, la diferencia puede tener un impacto reducido; pero si para una de ellas viajar constituye una parte fundamental de su proyecto de vida y considera imprescindible compartirlo, esa misma diferencia adquiere una relevancia mucho mayor. Por tanto, el algoritmo deberá diferenciar qué quiere una persona, cuánto le importa, y cuánto necesita que su pareja sea compatible con ello.

**4. El algoritmo considera la flexibilidad.** La existencia de una diferencia no determina por sí sola su impacto. El sistema deberá considerar hasta qué punto cada usuario está dispuesto a adaptarse, negociar o convivir con una posición diferente. Dos usuarios pueden comenzar desde posiciones distintas y presentar una compatibilidad suficiente si ambos disponen de un margen elevado de flexibilidad; por el contrario, una diferencia aparentemente pequeña puede resultar decisiva cuando afecta a posiciones rígidas o no negociables. La flexibilidad no eliminará automáticamente una incompatibilidad — será una variable adicional que permitirá interpretar adecuadamente determinadas diferencias.

**5. El algoritmo distingue niveles de relevancia.** No todas las variables deberán influir de la misma manera. BlueHeart deberá diferenciar entre cuestiones que representan preferencias, aspectos deseables, necesidades relacionales importantes, prioridades vitales y criterios no negociables. Esta jerarquía permitirá evitar que una diferencia menor tenga un impacto desproporcionado y que una diferencia fundamental quede diluida entre numerosas coincidencias poco importantes.

**6. El algoritmo podrá analizar interacciones.** Las variables no deberán considerarse siempre de forma completamente independiente. Por ejemplo, una diferencia relacionada con la convivencia podría resultar más gestionable cuando ambos usuarios presentan buena capacidad de comunicación, flexibilidad, capacidad de negociación y buena gestión de conflictos; la misma diferencia podría adquirir mayor importancia cuando existen dificultades relevantes en esas áreas. Estas interacciones solo deberán incorporarse cuando exista una justificación metodológica suficiente — el algoritmo no deberá crear relaciones arbitrarias entre variables.

**7. El algoritmo permitirá compensaciones, pero con límites.** Una relación no necesita presentar una compatibilidad elevada en absolutamente todas las dimensiones. Determinadas diferencias podrán compensarse mediante fortalezas presentes en otras áreas cuando exista una lógica que lo justifique. Sin embargo, BlueHeart deberá evitar que numerosas coincidencias de escasa importancia oculten una incompatibilidad fundamental — por ejemplo, compartir aficiones, hábitos de ocio y preferencias similares no debería compensar automáticamente una incompatibilidad crítica respecto a tener hijos si ambos mantienen posiciones incompatibles y no negociables. Por tanto, el algoritmo deberá establecer qué diferencias pueden compensarse, qué variables pueden contribuir a esa compensación, hasta qué punto pueden hacerlo, y qué incompatibilidades no pueden compensarse.

**8. El algoritmo genera resultados por dimensiones.** Antes de obtener un porcentaje global, BlueHeart deberá poder conocer cómo funciona la combinación en las diferentes dimensiones del sistema: Comunicación, Confianza, Apego, Afecto, Familia, Hijos, Sexualidad, Dinero, Convivencia, Gestión de conflictos, Celos, Proyecto de vida, Valores, Personalidad, Inteligencia emocional y Otros factores relevantes. Estos resultados parciales permitirán comprender posteriormente cómo se ha construido el resultado global.

**9. El algoritmo genera un porcentaje global de compatibilidad.** El resultado principal de la comparación será un porcentaje global, construido a partir de los resultados de las variables, los resultados por dimensiones, los pesos y ponderaciones, la importancia personal, la flexibilidad, las interacciones relevantes, las complementariedades, las incompatibilidades, los criterios no negociables y las reglas de compensación. El porcentaje no será una simple media de respuestas coincidentes: deberá representar el resultado conjunto del Método BlueHeart aplicado a dos perfiles concretos.

**10. El algoritmo genera información explicativa.** El algoritmo no deberá devolver únicamente una cifra. Deberá producir suficiente información estructurada para que la inteligencia artificial pueda comprender por qué se ha obtenido ese resultado: principales factores positivos, principales diferencias, complementariedades relevantes, áreas de posible fricción, variables que han reducido significativamente la compatibilidad, criterios no negociables activados, incompatibilidades críticas y reglas especiales aplicadas. La explicación que recibe el usuario será posteriormente construida por la IA, pero las razones deberán proceder del cálculo real.

**11. El algoritmo deberá ser determinista y reproducible.** Dos perfiles idénticos, evaluados mediante la misma información, la misma versión del algoritmo, las mismas reglas y los mismos pesos, deberán producir el mismo resultado. La compatibilidad no podrá depender de una valoración improvisada de la inteligencia artificial. Esta reproducibilidad permitirá auditar, probar y validar el funcionamiento de BlueHeart.

**12. El algoritmo deberá ser versionado.** El Método BlueHeart evolucionará: los pesos, reglas, relaciones entre variables o mecanismos de cálculo podrán modificarse cuando exista evidencia suficiente para hacerlo. Cada resultado deberá quedar asociado a la versión del algoritmo que lo produjo, permitiendo comparar versiones, analizar cambios y recalcular compatibilidades cuando resulte necesario.

**13. El algoritmo deberá distinguir compatibilidad de confianza.** El porcentaje de compatibilidad indica cómo encajan dos perfiles según el Método BlueHeart. El nivel de confianza indica hasta qué punto BlueHeart dispone de información suficientemente completa, consistente y fiable para sostener ese resultado. Dos parejas podrían obtener un 82 % de compatibilidad y, sin embargo, presentar diferentes niveles de confianza si la calidad de la información disponible es diferente. La fórmula concreta para calcular ambos elementos se definirá posteriormente.

**14. El algoritmo no predice el futuro.** Un porcentaje elevado no significará que una relación vaya a funcionar. El comportamiento humano depende de numerosos factores que ningún cuestionario ni algoritmo puede conocer completamente. BlueHeart deberá interpretar el porcentaje como una estimación estructurada del nivel de compatibilidad entre dos perfiles según la información disponible y las reglas del Método BlueHeart — no como una probabilidad matemática de éxito de la relación.

**15. El algoritmo no decide por las personas.** El sistema podrá determinar que dos perfiles presentan una compatibilidad suficientemente elevada para ser recomendados, podrá detectar diferencias relevantes, y podrá decidir, según las reglas establecidas, que determinadas combinaciones no deben recomendarse. Pero no podrá decidir si dos personas deben iniciar una relación. Su función termina en la recomendación y la explicación. La decisión final pertenece siempre a los usuarios.

**16. El algoritmo deberá poder ser auditado.** Todo resultado deberá poder reconstruirse. BlueHeart deberá poder responder internamente: ¿qué variables fueron comparadas?, ¿qué resultado produjo cada comparación?, ¿qué pesos fueron aplicados?, ¿qué reglas especiales se activaron?, ¿qué interacciones influyeron?, ¿qué incompatibilidades fueron detectadas?, ¿cómo se llegó al porcentaje final? Esta trazabilidad será imprescindible para detectar errores, validar el método y mejorar el sistema.

### Principio fundamental

El algoritmo de BlueHeart no deberá intentar encontrar a la persona más parecida. Tampoco deberá buscar una combinación teóricamente perfecta. Su objetivo será identificar perfiles entre los que exista una base suficientemente compatible para que tenga sentido que dos personas se conozcan.

Por tanto, el principio central del algoritmo será: no medir únicamente semejanza, medir compatibilidad funcional. BlueHeart deberá analizar qué comparten dos personas, en qué se diferencian, cuánto importan esas diferencias, qué capacidad existe para gestionarlas y qué elementos no pueden razonablemente compensarse.

El algoritmo realiza el cálculo. La inteligencia artificial lo explica. Y las personas deciden qué hacer con esa información.

## 6.2 Qué información recibe del Perfil de Compatibilidad

El algoritmo de BlueHeart no trabajará directamente con las conversaciones mantenidas entre el usuario y la inteligencia artificial ni con textos libres sin estructurar. Antes de realizar cualquier comparación, la inteligencia artificial deberá transformar la información obtenida durante el cuestionario en un Perfil de Compatibilidad estructurado. Ese perfil constituirá la principal entrada de información del algoritmo.

Por tanto, el flujo general será: **Usuario → cuestionario y conversación → IA → Perfil de Compatibilidad estructurado → algoritmo → resultado de compatibilidad → IA → explicación al usuario.**

Esta separación permitirá que el algoritmo trabaje con información organizada, comparable, reproducible y auditable.

**1. El algoritmo recibe variables estructuradas.** Cada dimensión del Sistema de Compatibilidad estará formada por diferentes variables. El algoritmo no necesitará interpretar nuevamente qué quiso decir el usuario: recibirá una representación estructurada de esa información. Cada variable deberá contener los elementos necesarios para responder, cuando corresponda, a preguntas como: ¿cuál es la posición del usuario?, ¿con qué intensidad mantiene esa posición?, ¿qué importancia tiene esa cuestión para él?, ¿cuánto necesita que su pareja sea compatible con ella?, ¿qué margen de flexibilidad existe?, ¿con qué nivel de confianza conocemos esa información?, ¿de dónde procede?, ¿ha sido confirmada?, ¿representa un criterio no negociable?, ¿está actualizada? No todas las variables necesitarán utilizar necesariamente todos estos elementos — la estructura deberá adaptarse al tipo de información evaluada.

**2. Identificador de la variable.** Cada variable deberá disponer de un identificador único dentro del sistema, que permita al algoritmo saber exactamente qué característica está comparando. Por ejemplo, conceptualmente podrían existir variables equivalentes a `deseo_de_tener_hijos`, `importancia_comunicacion`, `necesidad_afecto`, `frecuencia_actividad_fisica`, `importancia_viajar` o `gestion_conflictos`. Los nombres técnicos definitivos se establecerán durante la implementación. Lo importante metodológicamente será que cada variable tenga una identidad estable que permita relacionarla con las preguntas que la alimentan, la dimensión a la que pertenece, sus reglas de comparación, su peso, sus posibles interacciones y su historial de cambios.

**3. Dimensión.** Cada variable deberá estar vinculada a una de las dimensiones del Sistema de Compatibilidad BlueHeart. Por ejemplo: variable «deseo de tener hijos» → dimensión Hijos; variable «necesidad de expresar afecto» → dimensión Afecto. Esta relación permitirá posteriormente calcular resultados por dimensiones y conocer qué áreas han contribuido al porcentaje global.

**4. Valor o posición del usuario.** El algoritmo deberá recibir una representación estructurada de la posición del usuario respecto a cada variable, que podrá proceder directamente de una respuesta o ser el resultado de varias respuestas relacionadas. Dependiendo del tipo de variable, podrá representar una escala, una categoría, una frecuencia, una preferencia, una posición, una tendencia o una elección entre alternativas. No todas las variables deberán representarse necesariamente mediante la misma escala: una variable gradual puede necesitar una escala ordenada, mientras que una cuestión como querer o no querer tener hijos puede requerir categorías con reglas específicas. La representación deberá responder a la naturaleza real de la variable y no forzar artificialmente todas las respuestas dentro del mismo modelo.

**5. Intensidad.** Cuando resulte relevante, el perfil deberá indicar con qué intensidad aparece una determinada característica — cuánto representa esa característica al usuario. No deberá confundirse con la importancia que tiene encontrar esa misma característica en la pareja. Una persona puede, por ejemplo, ser muy aficionada al deporte y practicarlo prácticamente todos los días (intensidad elevada) sin necesitar que su pareja practique deporte (importancia relacional distinta). Por tanto: intensidad es cuánto está presente una característica en el propio usuario; importancia relacional es cuánto influye esa característica en lo que necesita o espera de una pareja. Esta separación será fundamental.

**6. Importancia personal.** El algoritmo deberá conocer, cuando corresponda, qué importancia tiene una cuestión para el usuario dentro de una relación. La importancia permitirá diferenciar entre «esto me gusta» y «esto es muy importante para mí». Dos usuarios pueden mantener exactamente la misma posición respecto a una variable y concederle una relevancia completamente diferente. La importancia personal podrá modificar el impacto que una coincidencia o diferencia tenga dentro de la comparación. La forma concreta de hacerlo se definirá posteriormente.

**7. Necesidad de correspondencia en la pareja.** BlueHeart deberá distinguir entre la importancia que una característica tiene para el propio usuario y la necesidad de que su pareja presente una posición compatible. Por ejemplo, una persona puede considerar la actividad física una parte fundamental de su propia vida pero responder «no necesito que mi pareja practique deporte, me basta con que respete que para mí es importante», mientras que otra persona con exactamente el mismo nivel de actividad física puede considerar imprescindible compartir ese estilo de vida. Por tanto, cuando la variable lo requiera, el perfil deberá poder representar «importancia para mí» e «importancia de que mi pareja sea compatible con ello» — sin asumirlas como equivalentes.

**8. Flexibilidad.** Cuando resulte relevante, el perfil deberá indicar hasta qué punto el usuario acepta posiciones diferentes a la suya, distinguiendo entre una preferencia con amplio margen de adaptación y una posición con escaso margen de negociación. La flexibilidad podrá influir especialmente cuando dos perfiles presenten diferencias, pero no deberá utilizarse automáticamente para compensar cualquier incompatibilidad: existirán cuestiones en las que la flexibilidad sea relevante y otras en las que la propia naturaleza de la variable limite la posibilidad de encontrar posiciones intermedias.

**9. Criterio no negociable.** El perfil deberá indicar expresamente cuándo una cuestión ha sido confirmada por el usuario como criterio no negociable. Esta información no podrá deducirse exclusivamente a partir de una puntuación elevada de importancia — deberá existir una confirmación suficientemente clara. Por tanto, el sistema deberá diferenciar entre «importancia muy alta» y «no negociable»: una cuestión puede ser extremadamente importante y continuar admitiendo cierto margen de adaptación, mientras que un criterio no negociable representa un límite declarado por el usuario. Su tratamiento matemático y lógico se definirá posteriormente.

**10. Nivel de confianza.** Cada variable podrá disponer, cuando resulte necesario, de información sobre el nivel de confianza con el que BlueHeart considera que conoce esa característica, dependiendo de factores como la claridad de las respuestas, el número de respuestas que respaldan la conclusión, la consistencia entre ellas, la confirmación directa del usuario, la existencia de contradicciones, la presencia de inferencias o la información incompleta. El nivel de confianza no deberá modificar arbitrariamente el valor declarado por el usuario; su función principal será informar sobre la calidad de la información utilizada para construir el resultado.

**11. Origen de la información.** Siempre que sea necesario para garantizar la trazabilidad, el perfil deberá conservar el origen de cada característica relevante: respuesta directa, varias respuestas relacionadas, pregunta adaptativa, aclaración posterior, inferencia de alta confianza, confirmación expresa o corrección realizada por el usuario. Esta información permitirá reconstruir cómo se construyó el perfil y analizar posibles errores.

**12. Estado de confirmación.** Determinadas variables podrán necesitar indicar si la información ha sido declarada directamente, inferida, confirmada, pendiente de confirmación o corregida posteriormente. El estado de confirmación estará relacionado con el nivel de confianza, pero no será exactamente lo mismo: una inferencia puede tener un nivel de confianza elevado sin haber sido confirmada expresamente, y una respuesta directa puede estar confirmada por definición aunque posteriormente aparezcan contradicciones que requieran revisión.

**13. Vigencia de la información.** Determinadas características pueden cambiar con el tiempo. El perfil deberá poder conservar información suficiente para determinar cuándo fue obtenida o actualizada una variable, algo especialmente relevante en cuestiones como el deseo de tener hijos, la situación familiar, el lugar de residencia, la disponibilidad para cambiar de ciudad, las prioridades profesionales, los hábitos, el proyecto de vida o las preferencias relacionadas con la convivencia. La fecha no deberá afectar automáticamente a todas las variables de la misma manera: algunas características pueden ser relativamente estables y otras pueden requerir revisiones periódicas. Las reglas de actualización se desarrollarán posteriormente.

**14. Versión metodológica.** La información estructurada deberá estar vinculada, cuando corresponda, a la versión del cuestionario y del método mediante la que fue obtenida. Si BlueHeart modifica posteriormente una pregunta, una escala o la interpretación de una variable, deberá poder saber bajo qué versión fue construida la información existente, evitando comparaciones incorrectas entre datos que, aunque tengan nombres similares, hayan sido obtenidos mediante metodologías diferentes.

**15. Estado de completitud.** El algoritmo deberá saber si dispone de información suficiente sobre una variable o dimensión, distinguiendo conceptualmente entre información completa, suficiente, parcial, insuficiente o no disponible. La ausencia de información no deberá interpretarse como una posición neutral: no saber algo sobre un usuario no equivale a que al usuario le resulte indiferente. Esta regla será especialmente importante para evitar errores en el cálculo.

**16. Las variables podrán tener estructuras diferentes.** BlueHeart no deberá obligar a todas las variables a utilizar exactamente los mismos campos. Por ejemplo, una variable de frecuencia podrá necesitar valor + importancia + necesidad de correspondencia; una variable de criterio vital podrá necesitar posición + importancia + flexibilidad + no negociable; una variable inferida sobre una tendencia relacional podrá necesitar valor + confianza + origen + estado de confirmación. El sistema deberá compartir una estructura común suficiente para trabajar de forma coherente, pero permitir especialización según la naturaleza de cada variable.

**17. El algoritmo no recibe únicamente una cifra por usuario.** Uno de los principios fundamentales será evitar representar a una persona mediante una única puntuación en cada cuestión. Conceptualmente, una variable podría contener: posición (viajar con frecuencia), intensidad (alta), importancia personal (alta), necesidad de compartirlo con la pareja (media), flexibilidad (alta), no negociable (no), confianza (alta). Esto proporciona mucha más información que simplemente «Viajes = 4/5» y permitirá construir comparaciones mucho más precisas.

**18. Ejemplo conceptual de una variable.** Sin establecer todavía la estructura técnica definitiva, una variable del Perfil de Compatibilidad podría representarse conceptualmente así:

> Dimensión: Hijos. Variable: deseo de tener hijos. Valor: sí. Importancia: máxima. Necesidad de correspondencia: máxima. Flexibilidad: nula. No negociable: sí. Confianza: alta. Origen: respuesta directa + confirmación. Estado: confirmado. Fecha de actualización: registrada. Versión metodológica: registrada.

Otro usuario podría presentar la misma variable con valor «no», importancia máxima, necesidad de correspondencia máxima, flexibilidad nula, no negociable: sí, confianza alta. En este caso, el algoritmo dispondrá de información suficiente para identificar una incompatibilidad extremadamente relevante sin necesitar interpretar nuevamente las conversaciones originales.

**19. Ejemplo conceptual de una diferencia gestionable.** Usuario A: actividad física muy frecuente, importancia personal alta, necesidad de compartirla baja, flexibilidad alta. Usuario B: actividad física ocasional, importancia personal moderada, necesidad de compartirla baja, flexibilidad alta. La distancia entre sus hábitos es elevada, pero la información adicional indica que ninguno necesita que su pareja reproduzca exactamente su estilo de vida. Por tanto, el algoritmo no debería penalizar esa diferencia de la misma forma que lo haría un sistema basado exclusivamente en semejanza. Este ejemplo representa una de las razones fundamentales por las que BlueHeart necesitará perfiles multidimensionales.

**20. Estructura conceptual mínima.** Como punto de partida, cada variable deberá poder contener, cuando corresponda: identificador, dimensión, valor o posición, intensidad, importancia personal, necesidad de correspondencia, flexibilidad, condición de no negociable, nivel de confianza, origen, estado de confirmación, estado de completitud, fecha de actualización y versión metodológica. Esta estructura será refinada posteriormente durante el diseño técnico; no todos los campos serán obligatorios para todas las variables.

### Principio fundamental

El algoritmo no deberá recibir únicamente «¿qué respondió esta persona?». Deberá recibir suficiente información para comprender matemáticamente «¿qué significa esta respuesta para esta persona y para su relación con una posible pareja?».

Por tanto, BlueHeart deberá diferenciar siempre que resulte necesario: posición, intensidad, importancia, necesidad de correspondencia, flexibilidad, no negociable y confianza. Esta riqueza estructural permitirá que el algoritmo deje de funcionar como un simple comparador de respuestas y pueda aproximarse al objetivo real del Método BlueHeart: comparar compatibilidad, no únicamente semejanza.

## 6.3 Cómo se representan las variables

Las variables del Sistema de Compatibilidad BlueHeart no deberán representarse todas de la misma manera. Cada variable deberá utilizar una estructura acorde con la naturaleza real de la información que representa. Forzar todas las respuestas dentro de una única escala numérica simplificaría excesivamente el comportamiento humano y podría provocar comparaciones incorrectas.

**1. Principio general.** Cada variable deberá responder a dos preguntas: ¿qué tipo de información representa? y ¿cómo debe compararse esa información entre dos usuarios? Por ejemplo, la necesidad de afecto puede representarse mediante una escala ordenada; el deseo de tener hijos puede requerir categorías específicas; el lugar donde una persona quiere vivir puede admitir varias opciones sin que exista necesariamente un orden jerárquico; un criterio no negociable deberá añadir además una regla especial de exclusión. El algoritmo no deberá asumir que dos variables con cinco posibles respuestas funcionan matemáticamente de la misma manera.

**2. Variables ordinales.** Representan posiciones que pueden ordenarse de menor a mayor (muy poca / poca / moderada / bastante / muchísima), útiles para necesidad de afecto, importancia del ahorro, necesidad de espacio personal, importancia de la comunicación, necesidad de planificación, importancia de la actividad física o frecuencia de determinadas conductas. Internamente podrán transformarse en valores numéricos ordenados (1 a 5), pero esos números representan una posición en una escala — no implican que la distancia entre 1 y 2 tenga el mismo significado psicológico que la distancia entre 4 y 5.

**3. Variables categóricas nominales.** Representan categorías diferentes que no pueden ordenarse de forma natural, como el modelo de gestión económica dentro de una pareja (economía separada, gastos comunes con independencia, cuentas comunes e individuales, economía compartida, depende de las circunstancias) o el lugar de residencia preferido (gran ciudad, ciudad mediana, entorno rural, indiferente, depende de las oportunidades). Deberán compararse mediante matrices o reglas específicas y no únicamente mediante distancia numérica.

**4. Variables binarias.** Determinadas cuestiones pueden representarse mediante dos estados (sí/no, acepta/no acepta, dispuesto/no dispuesto), pero BlueHeart deberá evitar convertir una pregunta en binaria cuando la realidad necesite matices adicionales. Por ejemplo, respecto a tener hijos podrían existir posiciones como sí, no, no lo sé, dependería de las circunstancias, o ya tengo hijos y no deseo tener más — en ese caso la variable necesita una representación categórica más rica. La estructura deberá respetar la realidad que se pretende medir.

**5. Variables de frecuencia.** Representan la frecuencia con la que ocurre una conducta (nunca, ocasionalmente, una o dos veces por semana, varias veces por semana, diariamente). Podrán tratarse de forma ordinal, pero deberán conservar su significado específico: la diferencia entre «nunca» y «ocasionalmente» puede no tener el mismo impacto relacional que la diferencia entre «varias veces por semana» y «diariamente». La comparación deberá depender también de la importancia que la variable tenga para ambos usuarios.

**6. Variables de intensidad.** Representan cuánto está presente un rasgo o necesidad en una persona (necesidad de contacto físico, de autonomía, de planificación, orientación social, necesidad de estabilidad). Podrán representarse mediante escalas ordenadas, pero la intensidad deberá diferenciarse de la importancia relacional: una persona puede tener una característica muy intensa y no necesitar que su pareja la comparta. La intensidad forma parte de la descripción del usuario; su impacto en la compatibilidad dependerá de otras variables.

**7. Variables de importancia.** Representan cuánto importa una cuestión al usuario (muy poco importante, poco importante, moderadamente importante, bastante importante, fundamental). No describen cómo es la persona, sino cuánto peso subjetivo concede a una cuestión, y ayudarán al algoritmo a determinar cuánto debería influir una coincidencia o una diferencia.

**8. Variables de necesidad de correspondencia.** BlueHeart necesitará conocer cuánto necesita el usuario que su pareja comparta una determinada característica, mediante una escala del tipo: no necesito que mi pareja lo comparta / me gustaría, pero no es importante / preferiría que lo compartiera / es muy importante para mí / es imprescindible. Especialmente relevante para viajes, actividad física, religión, aficiones, vida social, hábitos saludables y estilo de vida — permitirá evitar penalizaciones innecesarias cuando dos personas sean diferentes pero acepten perfectamente esas diferencias.

**9. Variables de flexibilidad.** Representan hasta qué punto una persona está dispuesta a convivir con una posición diferente a la suya (muy flexible, bastante flexible, moderadamente flexible, poco flexible, nada flexible). La dirección de la escala deberá ser consistente en todo el sistema (por ejemplo, 0 = sin flexibilidad hasta 4 = flexibilidad muy alta); la convención definitiva se establecerá durante la implementación.

**10. Variables de límite o no negociable.** Los criterios no negociables deberán representarse mediante una estructura claramente diferenciada de la importancia: conceptualmente, `no_negociable = verdadero/falso`, pero esta condición solo podrá activarse cuando exista confirmación explícita del usuario, y deberá estar vinculada a una posición concreta (p. ej. variable «deseo de hijos», posición «sí», no negociable «sí» significa «no aceptaría una pareja que mantenga una posición incompatible con esta», no simplemente «tener hijos es muy importante para mí»). La distinción deberá mantenerse en todo el algoritmo.

**11. Variables multiselección.** Algunas cuestiones podrán permitir seleccionar más de una opción (por ejemplo, cómo sueles expresar afecto: contacto físico, palabras, tiempo compartido, actos de cuidado, detalles). La comparación deberá poder detectar coincidencias, diferencias, combinaciones complementarias y elementos especialmente prioritarios — la mera cantidad de opciones coincidentes no deberá determinar por sí sola la compatibilidad.

**12. Variables jerarquizadas.** En determinadas cuestiones será útil pedir al usuario que ordene preferencias o prioridades (p. ej. confianza, comunicación, proyecto de vida, sexualidad, independencia). Esta información representa una jerarquía personal que el algoritmo podrá utilizar para comprender prioridades relativas, aunque una posición elevada dentro de una clasificación no implicará automáticamente que sea no negociable.

**13. Variables abiertas interpretadas por IA.** Algunas respuestas podrán proceder de texto libre; en estos casos, la IA deberá transformar el lenguaje natural en información estructurada antes de que el algoritmo la utilice. Por ejemplo, «no necesito hablar con mi pareja todo el día, pero sí sentir que hay presencia y que si pasa algo importante podemos hablarlo» podría estructurarse como: necesidad de contacto frecuente moderada, necesidad de disponibilidad emocional alta, necesidad de comunicación constante baja, confianza de interpretación alta o pendiente de confirmación. El algoritmo nunca deberá trabajar directamente con el texto libre como criterio matemático de compatibilidad — deberá trabajar con la representación estructurada obtenida de él.

**14. Variables derivadas.** Algunas variables podrán construirse a partir de varias respuestas — por ejemplo, `capacidad_de_reparacion_del_conflicto` podría obtener información de preguntas sobre pedir disculpas, reconocer errores, retomar una conversación después de discutir, buscar acuerdos y evitar resentimientos prolongados. Estas variables derivadas no deberán ser creadas arbitrariamente por la IA: su existencia y reglas deberán estar definidas previamente por el Método BlueHeart. La IA podrá alimentar sus componentes; el algoritmo o una capa de cálculo estructurada obtendrá posteriormente el valor derivado.

**15. Variables compuestas.** Determinadas dimensiones podrán requerir la combinación de varias variables relacionadas — por ejemplo, la «compatibilidad de convivencia» podría estar formada por orden, limpieza, horarios, espacio personal, reparto de tareas, rutinas y actividades compartidas. La puntuación de la dimensión no será una variable primaria, sino un resultado compuesto. Esta distinción es importante: variables primarias (información del usuario), variables derivadas (patrones construidos a partir de varias variables), resultados de dimensión (compatibilidad calculada entre dos perfiles) y resultado global (porcentaje final de compatibilidad).

**16. Variables con reglas específicas.** Algunas variables podrán necesitar reglas de comparación propias no reutilizables en otros ámbitos. Por ejemplo, para el deseo de tener hijos: sí/sí puede ser muy compatible; sí/no puede constituir una incompatibilidad crítica si ambas posiciones son no negociables; sí/no lo sé puede requerir una penalización o tratamiento diferente; no/no puede ser igualmente compatible. Este comportamiento no puede representarse adecuadamente mediante una simple diferencia matemática — necesitará una tabla o matriz específica.

**17. Matrices de compatibilidad.** Para determinadas variables categóricas, BlueHeart podrá utilizar matrices de compatibilidad. Conceptualmente, para el deseo de tener hijos: sí/sí → compatible; no/no → compatible; sí/no → potencialmente crítico; sí/no lo sé → requiere análisis; no/no lo sé → requiere análisis. Esta tabla es únicamente conceptual — los valores y reglas definitivos se desarrollarán posteriormente. Las matrices permitirán definir explícitamente cómo interactúan determinadas posiciones sin depender de interpretaciones improvisadas.

**18. Escalas normalizadas.** Aunque las variables puedan utilizar estructuras diferentes, el algoritmo necesitará posteriormente combinar resultados. Por ello, determinados resultados de comparación deberán transformarse a una escala común (por ejemplo, 0 = incompatibilidad máxima, 1 = compatibilidad máxima, o 0-100%). La escala técnica definitiva se decidirá posteriormente. Lo importante será distinguir entre el valor original de la variable y el resultado normalizado de comparar dos valores — no son lo mismo.

**19. No todo valor debe convertirse directamente en puntuación.** Una variable puede contener información relevante sin producir inmediatamente puntos positivos o negativos. Por ejemplo, una elevada flexibilidad puede no aumentar automáticamente la compatibilidad — puede utilizarse únicamente para reducir el impacto de determinadas diferencias. Del mismo modo, un criterio no negociable puede no aportar puntos cuando coincide, pero sí activar una regla crítica cuando existe incompatibilidad. El algoritmo deberá permitir este tipo de comportamientos.

**20. Representación conceptual técnica.** De forma conceptual, una variable podría adoptar una estructura similar a: identificador `necesidad_espacio_personal`, tipo ordinal, valor 4/5, intensidad alta, importancia moderada, necesidad de correspondencia baja, flexibilidad alta, no negociable no, confianza alta, estado confirmado, regla de comparación `ordinal_con_flexibilidad`. Esta representación no constituye todavía el modelo definitivo de programación, pero muestra que cada variable necesitará contener no solo un valor, sino también información sobre cómo debe ser interpretada y comparada.

**21. Catálogo de variables.** BlueHeart deberá disponer finalmente de un catálogo maestro de variables. Cada variable deberá incluir, como mínimo: identificador único, nombre, dimensión, descripción, tipo de dato, valores permitidos, preguntas que la alimentan, forma de cálculo cuando sea derivada, regla de comparación, posibles interacciones, peso dentro de su dimensión, posibilidad de ser no negociable, reglas especiales y versión metodológica. Este catálogo deberá convertirse en una de las piezas centrales del diseño técnico del Sistema de Compatibilidad.

### Principio fundamental

BlueHeart deberá representar cada variable según su naturaleza real. No todas las respuestas son números. No todas las diferencias representan distancia. No todas las coincidencias generan compatibilidad. No todas las variables necesitan producir puntos directamente.

Por tanto, el algoritmo deberá trabajar con un sistema heterogéneo de variables que posteriormente pueda transformar sus comparaciones en resultados normalizados y combinables. La representación correcta de las variables será la base sobre la que se construyan todas las reglas posteriores del algoritmo.

## 6.4 Cómo se clasifican las variables

Las variables del Sistema de Compatibilidad BlueHeart no tendrán todas la misma función ni el mismo nivel de relevancia dentro del algoritmo. Algunas describirán preferencias de escaso impacto, otras representarán necesidades importantes, determinadas variables podrán generar complementariedades y otras podrán actuar como límites difíciles o imposibles de compensar. Esta clasificación permitirá que el algoritmo sepa qué variables pueden sumar compatibilidad, qué variables pueden reducirla, qué diferencias pueden compensarse, qué diferencias requieren análisis adicional, qué variables pueden activar reglas especiales y qué cuestiones pueden llegar a impedir una recomendación.

**1. Variables descriptivas.** Aportan información sobre el usuario sin generar necesariamente una puntuación directa de compatibilidad — por ejemplo, nivel de actividad física, frecuencia de viajes, rutinas personales, nivel de sociabilidad, preferencias de ocio. Podrán influir en la compatibilidad únicamente cuando se combinen con importancia personal, necesidad de correspondencia, flexibilidad o las preferencias de la otra persona.

**2. Variables de compatibilidad directa.** La combinación de las posiciones de ambos usuarios permite producir directamente un resultado de compatibilidad — por ejemplo, deseo de tener hijos, preferencia sobre convivencia, modelo económico, necesidad de contacto afectivo, necesidad de espacio personal. Dispondrán de reglas claras que determinen si una combinación es compatible, parcialmente compatible, gestionable, relevante o crítica.

**3. Variables de compatibilidad condicionada.** Determinadas diferencias no pueden valorarse correctamente sin información adicional. Por ejemplo, si una persona practica deporte diariamente y otra apenas hace ejercicio, la diferencia en sí misma no indica incompatibilidad — hace falta conocer si para ambos es importante compartir ese estilo de vida, si existe flexibilidad, o si alguno considera incompatible una vida muy diferente en ese ámbito. Estas variables deberán evaluarse siempre junto a variables auxiliares.

**4. Variables de preferencia.** Representan aquello que el usuario considera deseable, pero cuya ausencia no supone necesariamente una dificultad importante (compartir aficiones, preferir determinados planes de ocio, viajar con frecuencia, tener gustos parecidos). Las diferencias podrán reducir ligeramente la compatibilidad cuando proceda, pero no deberán tener un impacto desproporcionado — muchas preferencias podrán compensarse fácilmente mediante otras fortalezas.

**5. Variables de necesidad relacional.** Representan aspectos con influencia significativa sobre el bienestar del usuario dentro de una relación (necesidad de afecto, comunicación, independencia, tiempo compartido, estabilidad). Una diferencia importante podrá generar un impacto mayor que una simple diferencia de preferencias, aunque no deberá considerarse automáticamente una incompatibilidad crítica — el impacto dependerá también de la diferencia entre ambos perfiles, la flexibilidad, la capacidad de adaptación y las interacciones con otras variables.

**6. Variables estructurales.** Afectan directamente a la posibilidad de construir un proyecto de vida común: tener o no tener hijos, lugar de residencia, movilidad geográfica, proyecto familiar, modelo de relación, determinadas decisiones económicas, determinadas prioridades vitales. Deberán recibir un tratamiento especial porque sus diferencias pueden resultar difíciles de resolver mediante adaptación — una incompatibilidad estructural puede existir incluso cuando dos personas presenten una elevada compatibilidad emocional.

**7. Variables críticas.** Son aquellas en las que determinadas combinaciones concretas puedan tener capacidad para impedir una recomendación (no todas las posiciones dentro de una variable crítica producen necesariamente incompatibilidad). Por ejemplo, usuario A quiere hijos y es no negociable / usuario B no quiere hijos y es no negociable → combinación crítica. Pero usuario A quiere hijos / usuario B no está seguro y tiene elevada flexibilidad → podría requerir un tratamiento diferente. Por tanto, BlueHeart deberá distinguir entre variable potencialmente crítica y combinación crítica activada.

**8. Variables no compensables.** Algunas diferencias no deberán poder ser neutralizadas mediante coincidencias en otras dimensiones — por ejemplo, una incompatibilidad estructural confirmada en una cuestión no negociable no debería desaparecer porque ambos usuarios compartan aficiones, preferencias de ocio, estilos musicales, actividad física u otros elementos secundarios. El conjunto exacto de variables no compensables se definirá posteriormente.

**9. Variables parcialmente compensables.** Algunas diferencias importantes podrán reducirse parcialmente mediante fortalezas en otras áreas — por ejemplo, diferencias en hábitos de convivencia podrían resultar más fáciles de gestionar cuando existen comunicación elevada, flexibilidad, buena capacidad de negociación y gestión constructiva de conflictos. La compensación no deberá borrar la diferencia, sino reducir su impacto de forma limitada y justificada.

**10. Variables altamente compensables.** Determinadas diferencias de menor importancia podrán tener un impacto reducido cuando el resto del perfil presenta una compatibilidad elevada (preferencias de ocio, algunas aficiones, diferencias moderadas en determinados hábitos, gustos personales secundarios). No deberían impedir una recomendación cuando existen suficientes fortalezas en áreas más relevantes.

**11. Variables complementarias.** Algunas combinaciones diferentes pueden producir un resultado positivo — por ejemplo, determinadas diferencias en iniciativa, planificación o sociabilidad pueden generar equilibrio cuando ambos usuarios aceptan y valoran esas diferencias. Sin embargo, BlueHeart no deberá asumir que «opuestos = complementarios»: cada complementariedad deberá estar previamente definida mediante reglas específicas.

**12. Variables amplificadoras.** Determinadas variables pueden modificar el efecto de otras — por ejemplo, una elevada flexibilidad puede reducir el impacto de determinadas diferencias, una buena gestión de conflictos puede facilitar la convivencia con hábitos distintos, y una elevada intolerancia a la incertidumbre podría amplificar determinadas diferencias relacionadas con comunicación o disponibilidad. No generan compatibilidad por sí mismas — modifican la forma en que otras variables afectan al resultado.

**13. Variables protectoras.** Algunas características podrán actuar como factores que reducen el impacto potencial de determinadas diferencias (buena comunicación, flexibilidad, capacidad de negociación, empatía, buena regulación emocional). No deberán utilizarse como excusa para compensar cualquier incompatibilidad — su efecto deberá limitarse a situaciones con una relación metodológicamente justificada.

**14. Variables de riesgo relacional.** Algunas combinaciones podrán aumentar la probabilidad de fricción — por ejemplo, dos perfiles con fuerte tendencia a evitar conflictos, dos perfiles extremadamente rígidos, o elevada necesidad de control combinada con elevada necesidad de independencia. BlueHeart podrá utilizarlas para identificar posibles áreas de dificultad, sin interpretarlas como predicciones de fracaso.

**15. Variables informativas.** Algunas variables podrán mantenerse dentro del perfil únicamente porque aportan información relevante para explicar una recomendación, aunque tengan poco o ningún impacto matemático. Deberán estar claramente identificadas para evitar que información puramente descriptiva influya accidentalmente en el cálculo.

**16. Variables sensibles.** Determinadas variables contienen información especialmente personal (sexualidad, religión, consumo de sustancias, determinadas cuestiones familiares, información emocional). La categoría «sensible» no determinará necesariamente su peso dentro de la compatibilidad; su finalidad será definir reglas adicionales de acceso, privacidad, uso, explicación y almacenamiento. El tratamiento técnico y legal detallado se desarrollará en los bloques de Seguridad y Aspectos Legales.

**17. Variables obligatorias y opcionales.** BlueHeart podrá distinguir entre variables obligatorias (necesarias para realizar una comparación suficientemente fiable) y variables opcionales (enriquecen el perfil pero su ausencia no impide necesariamente calcular compatibilidad). El algoritmo deberá conocer esta diferencia para determinar el nivel de completitud del perfil.

**18. Variables primarias y derivadas.** Las primarias proceden directamente de las respuestas del usuario; las derivadas se construyen mediante varias variables primarias siguiendo reglas definidas previamente (p. ej. capacidad de reparación del conflicto, orientación hacia la planificación, necesidad global de autonomía, estilo general de convivencia). Una variable derivada no deberá crearse mediante una interpretación improvisada de la IA — su fórmula o regla de construcción deberá estar documentada.

**19. Variables estáticas y dinámicas.** Algunas características podrán considerarse relativamente estables durante largos periodos (determinadas preferencias profundas o valores); otras podrán cambiar con mayor facilidad (lugar de residencia, situación profesional, deseo actual de tener hijos, disponibilidad para trasladarse, determinados hábitos). Esta clasificación permitirá establecer posteriormente reglas de actualización.

**20. Una variable puede pertenecer a varias categorías.** Las categorías no serán necesariamente excluyentes — una variable podrá ser simultáneamente estructural, potencialmente crítica, no compensable, sensible y obligatoria (por ejemplo, el deseo de tener hijos), mientras que una preferencia de ocio podría ser descriptiva, altamente compensable y opcional. Por tanto, la clasificación deberá implementarse mediante atributos y no necesariamente mediante una única etiqueta.

**21. Clasificación conceptual de ejemplo.** Variable «deseo de tener hijos»: tipo técnico categórica, función compatibilidad directa, relevancia estructural, potencial crítico sí, compensabilidad no compensable cuando existe incompatibilidad crítica, puede ser no negociable sí, obligatoria sí, sensibilidad alta, dinámica sí. Variable «frecuencia de actividad física»: tipo técnico ordinal/frecuencia, función compatibilidad condicionada, relevancia preferencia o estilo de vida, potencial crítico no por defecto, compensabilidad alta, puede ser no negociable solo si el usuario lo confirma mediante una variable asociada, obligatoria no necesariamente, dinámica sí.

**22. Catálogo de clasificación.** El catálogo maestro de variables deberá incorporar atributos que permitan representar esta clasificación: tipo técnico, función dentro del algoritmo, nivel de relevancia, grado de compensabilidad, potencial crítico, posibilidad de activar un no negociable, carácter obligatorio u opcional, carácter primario o derivado, carácter estable o dinámico, carácter sensible, posibles funciones amplificadoras o protectoras, y reglas especiales. Esta información permitirá que el algoritmo aplique automáticamente el tratamiento adecuado a cada variable.

### Principio fundamental

BlueHeart no deberá preguntar únicamente «¿qué valor tiene esta variable?». También deberá saber «¿qué papel desempeña esta variable dentro de la compatibilidad?». Una variable puede describir, puntuar, modificar otra, proteger frente a una diferencia, amplificar una dificultad, permitir compensación, limitarla, o activar una incompatibilidad crítica.

La correcta clasificación de las variables permitirá que el algoritmo trate cada característica de acuerdo con su verdadera relevancia dentro de una relación, evitando tanto simplificaciones excesivas como reglas arbitrarias.

## 6.5 Cómo se asigna importancia a cada variable

El algoritmo de BlueHeart no deberá tratar todas las variables con la misma relevancia, pero esa importancia no podrá depender únicamente de un único valor. BlueHeart distinguirá al menos tres elementos: importancia metodológica de la variable, importancia personal para el usuario, e importancia resultante de la combinación concreta entre dos perfiles. Esta separación permitirá que el algoritmo mantenga una estructura estable definida por BlueHeart y, al mismo tiempo, respete las prioridades individuales de cada persona.

**1. Importancia metodológica.** Representa cuánto considera BlueHeart que una variable puede influir, de forma general, en la compatibilidad de pareja. No será definida por la inteligencia artificial — será establecida dentro del Método BlueHeart y posteriormente validada y ajustada mediante evidencia, pruebas y datos reales. Variables como tener hijos, proyecto de vida, valores fundamentales, comunicación o gestión de conflictos podrían tener una relevancia metodológica superior a aficiones, hábitos de ocio o gustos secundarios — sin que esto signifique que una variable secundaria sea irrelevante para todos los usuarios.

**2. La importancia metodológica no será una sentencia definitiva.** El peso base de una variable deberá entenderse como una hipótesis metodológica revisable cuando exista evidencia suficiente, evitando asignar pesos únicamente por intuición personal. Los pesos iniciales podrán construirse utilizando literatura científica, investigación sobre relaciones de pareja, validación con profesionales, pruebas piloto y datos obtenidos del funcionamiento real de BlueHeart. La modificación de estos pesos deberá seguir los mecanismos de validación establecidos en el Bloque 9, Aprendizaje.

**3. Importancia personal.** BlueHeart deberá conocer qué importancia tiene una cuestión concreta para cada usuario, ya que dos personas pueden responder de forma idéntica y, sin embargo, concederle un nivel de importancia completamente diferente (por ejemplo, vivir en una ciudad grande puede ser una simple preferencia para uno y una condición esencial para otro). El algoritmo deberá incorporar la importancia subjetiva del usuario cuando resulte relevante.

**4. La importancia personal no sustituye al peso metodológico.** El usuario no deberá decidir por sí solo cuánto pesa una variable dentro del algoritmo global — si así fuera, podría convertir cualquier pequeña preferencia en una variable dominante. BlueHeart deberá respetar esa preferencia y podrá incluso tratarla como un criterio personal relevante si el usuario la confirma, pero esa decisión no deberá alterar automáticamente la importancia metodológica que esa variable tiene para el sistema general. Por tanto: BlueHeart define el peso metodológico, el usuario define cuánto le importa personalmente, y el algoritmo combina ambas informaciones según reglas previamente establecidas.

**5. Importancia de correspondencia.** El algoritmo deberá distinguir entre «cuánto me importa esta cuestión en mi propia vida» y «cuánto necesito que mi pareja sea compatible conmigo en esta cuestión». Por ejemplo, una persona puede considerar el deporte fundamental para su bienestar personal pero tener una necesidad de correspondencia muy baja — en ese caso, una pareja sedentaria no debería recibir una penalización elevada únicamente porque ambos tengan estilos diferentes. La diferencia matemática entre los hábitos puede ser la misma; la relevancia relacional no lo es.

**6. Importancia bilateral.** Al comparar dos perfiles, BlueHeart deberá tener en cuenta la importancia que una variable tiene para ambas personas. Una diferencia puede resultar poco importante para ambos, muy importante para uno y poco para el otro, muy importante para ambos, no negociable para uno, o no negociable para ambos — cada combinación deberá recibir un tratamiento distinto. Cuando ambos conceden importancia máxima y sus posiciones son incompatibles, el impacto deberá ser mucho mayor.

**7. Importancia resultante.** La importancia final de una variable dentro de una comparación no deberá depender únicamente del peso base ni únicamente de la importancia personal. De forma conceptual, deberá surgir de la combinación entre el peso metodológico, la importancia de ambos usuarios, la necesidad de correspondencia de ambos, la flexibilidad, la distancia o tipo de combinación entre posiciones, la existencia de criterios no negociables, y las reglas especiales asociadas a la variable. La fórmula exacta se desarrollará posteriormente; por ahora, BlueHeart establece que la relevancia final deberá ser contextual.

**8. No toda coincidencia debe sumar con la misma intensidad.** Una coincidencia en una variable importante deberá tener más capacidad de contribuir al resultado que una coincidencia en una variable secundaria — pero tampoco deberá crearse un sistema en el que unas pocas variables fundamentales absorban prácticamente todo el porcentaje. El algoritmo deberá mantener equilibrio entre variables estructurales, necesidades relacionales, variables emocionales, variables de convivencia y preferencias personales.

**9. No toda diferencia debe restar con la misma intensidad.** La penalización de una diferencia deberá depender tanto de su relevancia como de la naturaleza de la combinación — una diferencia pequeña en una variable muy importante puede tener más impacto que una diferencia grande en una variable irrelevante para ambos usuarios. La pregunta no será solo «¿cuánto difieren?» sino también «¿cuánto importa que difieran?».

**10. Las variables críticas no dependerán exclusivamente de pesos.** Determinadas combinaciones deberán tratarse mediante reglas lógicas y no únicamente mediante ponderación numérica. Un conflicto confirmado entre dos criterios no negociables respecto a tener hijos no debería resolverse mediante una fórmula como «-25 puntos», porque una elevada puntuación en otras variables podría compensarlo artificialmente. En estos casos, el algoritmo deberá poder activar reglas especiales que limiten o bloqueen la recomendación. Los pesos gestionan relevancia; las reglas críticas gestionan límites — no deberán confundirse.

**11. Escala metodológica de importancia.** BlueHeart podrá utilizar una escala interna (1 = relevancia muy baja … 5 = relevancia muy alta) que servirá inicialmente para clasificar y ordenar variables, y podrá transformarse posteriormente en coeficientes normalizados.

**12. Escala de importancia personal.** Podrá representarse mediante una escala similar (0 = no me importa … 5 = fundamental), coherente con las respuestas del cuestionario. Cuando sea posible, BlueHeart deberá obtener esta información directamente mediante preguntas específicas y no deducirla de forma automática.

**13. Escala de necesidad de correspondencia.** Podrá tener su propia escala (0 = no necesito que lo comparta … 5 = imprescindible). Un valor máximo no deberá convertirse automáticamente en no negociable — el criterio no negociable deberá continuar requiriendo confirmación explícita.

**14. Peso por dimensión y peso por variable.** BlueHeart deberá diferenciar entre el peso de la dimensión y el peso de la variable dentro de esa dimensión. Por ejemplo, dentro de «Proyecto de vida» podrían existir variables como lugar de residencia, desarrollo profesional, movilidad, objetivos a largo plazo y equilibrio entre vida y trabajo, que no tendrán necesariamente el mismo peso. El cálculo deberá seguir una jerarquía conceptual: variable → resultado de dimensión → resultado global. Esto evitará que una dimensión con muchas preguntas termine pesando más simplemente porque contiene más variables.

**15. El número de preguntas no determina el peso.** Una dimensión no deberá tener mayor influencia únicamente porque incluya más preguntas — Gestión de conflictos puede requerir numerosas preguntas para obtener una representación fiable sin que eso signifique que cada pregunta deba sumar peso independiente. BlueHeart deberá evitar la ecuación «más preguntas = más peso»: el peso deberá depender de la relevancia metodológica, no del volumen del cuestionario.

**16. Evitar doble contabilización.** Cuando varias preguntas midan aspectos similares, BlueHeart deberá evitar que una misma característica sea contabilizada varias veces. Si el algoritmo utiliza tanto las variables primarias como una variable derivada de ellas sin ajustes, podría duplicar artificialmente su importancia. El catálogo de variables deberá indicar claramente qué variables puntúan directamente, cuáles alimentan variables derivadas, cuáles son únicamente informativas, y qué variables no deben contabilizarse simultáneamente.

**17. Los pesos deberán estar normalizados.** Los pesos utilizados dentro de una misma dimensión deberán poder normalizarse para evitar inconsistencias — por ejemplo, si una dimensión contiene cinco variables, el conjunto de sus pesos podría normalizarse para representar el 100 % de esa dimensión, y posteriormente las dimensiones podrán normalizarse dentro del porcentaje global. Esto permitirá modificar el número de variables sin alterar accidentalmente la escala completa del algoritmo.

**18. Los pesos deberán ser configurables.** No deberían quedar codificados de forma rígida dentro de múltiples partes del software — BlueHeart deberá poder modificar los pesos mediante una configuración versionada, permitiendo pruebas, comparación de modelos, validación de cambios, ajustes y recálculo de resultados con versiones diferentes.

**19. Los pesos deben poder explicarse.** BlueHeart deberá evitar pesos arbitrarios cuya razón no pueda justificarse. Para cada variable relevante debería ser posible documentar por qué tiene ese nivel de importancia, qué evidencia o razonamiento lo respalda, qué versión introdujo ese peso, cuándo fue revisado, y qué impacto produce dentro del sistema — especialmente importante cuando BlueHeart empiece a validar el algoritmo con datos reales.

**20. Ejemplo conceptual.** Variable A, «deseo de tener hijos»: peso metodológico muy alto; usuario A sí/importancia máxima/correspondencia máxima/no negociable sí; usuario B no/importancia máxima/correspondencia máxima/no negociable sí. Aquí la regla crítica podría imponerse al sistema de pesos y bloquear la recomendación. Variable B, «viajar con frecuencia»: peso metodológico bajo/moderado; usuario A viaja mucho/importancia alta/correspondencia baja/flexibilidad alta; usuario B viaja poco/importancia baja/correspondencia baja/flexibilidad alta. Aquí existe una diferencia grande de comportamiento, pero su impacto sobre la compatibilidad debería ser reducido. Este ejemplo demuestra que la distancia entre respuestas no basta para determinar la importancia de una diferencia.

**21. Modelo conceptual de relevancia.** Sin establecer todavía una fórmula matemática definitiva, BlueHeart podrá entender la relevancia de una comparación como una función de: peso metodológico + importancia personal + necesidad de correspondencia + contexto de la combinación + flexibilidad + reglas especiales. Esta expresión es conceptual — no significa que esos elementos deban sumarse directamente. La fórmula definitiva deberá evitar duplicidades y mantener los valores normalizados.

**22. Jerarquía de decisión.** Cuando varios tipos de importancia entren en conflicto, BlueHeart deberá aplicar una jerarquía lógica: 1) reglas críticas y no negociables; 2) variables estructurales de alta relevancia; 3) necesidades relacionales importantes; 4) variables de compatibilidad general; 5) preferencias; 6) variables informativas. Esta jerarquía no significa que todas las variables dentro de una categoría tengan idéntico peso — sirve para evitar que elementos secundarios puedan superar artificialmente límites fundamentales.

**23. La importancia no define por sí sola la compatibilidad.** Una variable muy importante no produce automáticamente compatibilidad si existe coincidencia, ni produce automáticamente incompatibilidad si existe diferencia — su efecto dependerá de la combinación concreta. Por tanto, BlueHeart deberá separar siempre importancia de la variable de resultado de comparar esa variable. El peso determina cuánto importa; la regla de comparación determina cómo encajan las posiciones.

### Principio fundamental

BlueHeart no deberá utilizar un único peso para responder a todas las preguntas sobre importancia. La relevancia de una variable deberá surgir de la combinación entre lo que BlueHeart considera metodológicamente importante, lo que cada usuario considera personalmente importante, lo que cada usuario necesita encontrar en su pareja, el grado de flexibilidad existente, y la naturaleza concreta de la combinación entre ambos perfiles.

Por tanto: el método aporta estructura, el usuario aporta prioridades, el algoritmo integra ambas. Esto permitirá que BlueHeart mantenga criterios consistentes sin perder la individualidad de las personas que utiliza el sistema.

## 6.6 Cómo se ponderan las dimensiones

El Sistema de Compatibilidad BlueHeart organizará las variables en diferentes dimensiones que representan grandes áreas de la relación. Estas dimensiones permitirán agrupar información relacionada, calcular resultados parciales y construir posteriormente el porcentaje global de compatibilidad. Sin embargo, las dimensiones no deberán tener necesariamente el mismo peso — BlueHeart deberá determinar cuánto contribuye cada una al resultado global sin permitir que el número de preguntas o variables que contiene determine accidentalmente su importancia.

**1. Las dimensiones representan áreas diferentes de la relación.** Las dimensiones principales definidas por BlueHeart son: Comunicación, Confianza, Apego, Afecto, Familia, Hijos, Sexualidad, Dinero, Convivencia, Gestión de conflictos, Celos, Proyecto de vida, Valores, Personalidad, Inteligencia emocional y Otros factores relevantes. Cada dimensión agrupará variables relacionadas conceptualmente, permitiendo que el algoritmo analice la compatibilidad desde diferentes áreas antes de construir un resultado global.

**2. Cada dimensión tendrá un peso metodológico.** BlueHeart podrá asignar a cada dimensión un peso base que represente su relevancia dentro del Sistema de Compatibilidad, definido por el Método BlueHeart y no por la inteligencia artificial. Dimensiones como Proyecto de vida, Valores, Comunicación, Gestión de conflictos o Hijos podrían tener una influencia metodológica diferente a otras relacionadas con determinados hábitos o preferencias — pero los pesos concretos no deberán establecerse únicamente mediante intuición, deberán ser posteriormente validados y ajustados.

**3. Las dimensiones no deberán pesar lo mismo por defecto.** Asignar exactamente el mismo peso a todas las dimensiones sería una decisión metodológica en sí misma. Si la evidencia indica que determinadas áreas tienen mayor capacidad para afectar a la compatibilidad relacional, el algoritmo deberá poder reflejarlo — sin exagerar tampoco la diferencia entre dimensiones sin justificación suficiente.

**4. El número de variables no determina el peso de la dimensión.** Una dimensión puede necesitar muchas variables para ser medida adecuadamente (Gestión de conflictos) y otra pocas (Hijos), sin que eso signifique que la primera deba tener más influencia sobre el porcentaje global. El peso deberá depender de la relevancia metodológica, no del volumen de información necesario para medirla.

**5. Primero se calcula la compatibilidad interna de la dimensión.** Conceptualmente: respuestas → variables → compatibilidad entre variables → resultado de dimensión → resultado global. Por ejemplo, Convivencia podrá contener resultados relacionados con orden, limpieza, horarios, reparto de tareas, espacio personal, rutinas y tiempo compartido; estas comparaciones producirán un resultado interno que posteriormente contribuirá al porcentaje global según el peso asignado a la dimensión.

**6. Las variables mantienen pesos internos.** Dentro de cada dimensión, las variables podrán tener pesos diferentes, de modo que el resultado de una dimensión no deberá calcularse necesariamente mediante una media simple: compatibilidad de dimensión = combinación ponderada de las variables que pertenecen a esa dimensión. Esto permitirá que una variable especialmente relevante tenga más influencia dentro de su dimensión que otras variables secundarias.

**7. El peso de dimensión y el peso de variable son niveles diferentes.** BlueHeart deberá mantener claramente separados el peso de la variable dentro de su dimensión y el peso de la dimensión dentro del resultado global. Por ejemplo, una variable podría representar el 30 % del resultado interno de una dimensión, pero esa dimensión podría representar posteriormente una proporción diferente del resultado global. Esta estructura evitará que los pesos se mezclen y permitirá auditar cada nivel por separado.

**8. Las dimensiones deberán normalizarse.** El conjunto de pesos de las dimensiones deberá utilizar una estructura normalizada — conceptualmente, todos los pesos podrían sumar 1 (o 100 %). Por ejemplo, exclusivamente ilustrativo: Dimensión A → 0,12; Dimensión B → 0,08; Dimensión C → 0,15 (suma del conjunto = 1). Estos valores son solo ejemplos matemáticos, no los pesos reales de BlueHeart. La normalización permitirá que el resultado global mantenga una escala estable.

**9. Los pesos base deberán ser globales.** El Método BlueHeart deberá disponer de una distribución metodológica común de pesos que permita al algoritmo conservar consistencia entre usuarios. La inteligencia artificial no podrá decidir que para una pareja una dimensión pesa un 20 % y para otra un 5 % según su propia interpretación — los pesos base deberán proceder de una configuración versionada del algoritmo.

**10. Las prioridades individuales podrán modificar la relevancia efectiva.** Aunque los pesos metodológicos sean comunes, la importancia efectiva de una dimensión podrá variar según las prioridades de los usuarios, mediante las variables personales ya definidas (importancia, necesidad de correspondencia, flexibilidad, criterios no negociables) — no modificando arbitrariamente el peso base. Por tanto: el peso metodológico de la dimensión permanece estable; la relevancia efectiva de las comparaciones internas puede variar.

**11. No deberán personalizarse arbitrariamente los pesos globales.** BlueHeart deberá evitar un sistema en el que cada usuario pueda decidir directamente «para mí Sexualidad vale un 30 %», ya que esto podría producir resultados matemáticamente inestables y permitir que determinadas preferencias dominaran excesivamente el cálculo. El usuario expresará sus prioridades mediante el cuestionario; el algoritmo será responsable de incorporarlas dentro de límites metodológicos definidos.

**12. Podrán existir límites de personalización.** Cuando la importancia personal modifique la relevancia efectiva de una variable o dimensión, BlueHeart podrá establecer límites máximos y mínimos, evitando que una prioridad personal multiplique indefinidamente su peso o que una importancia baja elimine completamente una variable metodológicamente fundamental. Los límites concretos se establecerán al diseñar la fórmula.

**13. Las dimensiones estructurales pueden contener reglas externas al peso.** Una dimensión puede contener variables cuya importancia no pueda representarse únicamente mediante su peso global. Hijos podría tener un peso moderado dentro del porcentaje y, al mismo tiempo, contener una variable con una regla crítica capaz de impedir la recomendación: peso de la dimensión ≠ capacidad de bloqueo. Las reglas críticas deberán evaluarse independientemente del sistema general de ponderación.

**14. Una dimensión baja no deberá quedar ocultada completamente.** BlueHeart deberá evitar que una compatibilidad global elevada esconda una incompatibilidad importante dentro de una dimensión relevante (por ejemplo, compatibilidad global 84 % pero Proyecto de vida 32 %). El sistema deberá detectar esa concentración de incompatibilidad y, dependiendo de la dimensión y las variables implicadas, reducir adicionalmente el resultado, activar una advertencia, requerir análisis específico, o impedir una recomendación si existe una regla crítica.

**15. Podrán existir mínimos por dimensión.** Tras su validación, BlueHeart podrá establecer umbrales mínimos para dimensiones especialmente relevantes, de forma que una pareja necesite tanto un porcentaje global mínimo como no encontrarse por debajo de determinados mínimos en áreas estructurales. La necesidad y los valores concretos se definirán posteriormente.

**16. No todas las dimensiones necesitarán un mínimo.** Los umbrales por dimensión no deberán aplicarse automáticamente a todas las áreas — una compatibilidad relativamente baja en una dimensión altamente compensable podría ser perfectamente compatible con una relación funcional. Los mínimos deberán reservarse para dimensiones con justificación metodológica suficiente.

**17. Podrán existir interacciones entre dimensiones.** Las dimensiones tampoco deberán considerarse compartimentos completamente independientes — por ejemplo, Comunicación + Gestión de conflictos, Afecto + Apego, Proyecto de vida + Hijos + Familia, o Personalidad + Convivencia pueden interactuar. Estas interacciones deberán definirse explícitamente; BlueHeart no deberá permitir que la IA invente relaciones entre dimensiones durante el cálculo.

**18. Las interacciones no deberán duplicar puntuaciones.** Cuando dos dimensiones interactúen, BlueHeart deberá evitar contabilizar dos veces la misma información — si una determinada capacidad comunicativa ya ha contribuido al resultado de Comunicación, una interacción con Gestión de conflictos no deberá volver a sumar íntegramente esa misma puntuación. Las interacciones deberán funcionar como modificadores limitados, no como duplicadores de compatibilidad.

**19. Las dimensiones deberán poder auditarse individualmente.** Para cada resultado global, BlueHeart deberá poder reconstruir el resultado de cada dimensión, el peso metodológico aplicado, las variables que contribuyeron al resultado, las variables con mayor impacto positivo y negativo, los modificadores aplicados, las reglas críticas activadas, y el nivel de confianza de la dimensión — permitiendo explicar por qué dos personas han obtenido un determinado porcentaje.

**20. Confianza por dimensión.** Además del resultado de compatibilidad, BlueHeart podrá calcular un nivel de confianza específico para cada dimensión — por ejemplo, Comunicación con compatibilidad alta y confianza alta, frente a Sexualidad con compatibilidad alta pero confianza limitada (si existe mucha información sobre comunicación pero poca sobre sexualidad). El nivel de confianza global podrá construirse posteriormente teniendo en cuenta estas diferencias.

**21. Dimensiones con información incompleta.** Cuando una dimensión no disponga de información suficiente, BlueHeart no deberá interpretarla como una compatibilidad media: información insuficiente ≠ 50 % de compatibilidad. El algoritmo deberá identificar esa dimensión como incompleta y posteriormente decidir si se excluye temporalmente del cálculo, se redistribuyen pesos de manera controlada, se limita el nivel de confianza global, o se requiere completar información antes de recomendar. La estrategia concreta se definirá en el apartado dedicado a información incompleta.

**22. Los pesos deberán ser configurables y versionados.** Los pesos de las dimensiones deberán almacenarse como configuración del Método BlueHeart, no repartidos de forma rígida dentro del código — conceptualmente: versión del algoritmo 1.0, peso Comunicación configurable, peso Valores configurable, peso Proyecto de vida configurable, peso Convivencia configurable, y así sucesivamente. Esto permitirá realizar pruebas y modificaciones sin alterar la arquitectura del sistema.

**23. Los pesos iniciales serán hipótesis.** La primera versión del algoritmo necesitará pesos iniciales antes de disponer de datos propios suficientes. BlueHeart deberá reconocer explícitamente que estos pesos constituyen una hipótesis metodológica inicial, basada en investigación científica disponible, literatura especializada, opinión profesional, coherencia con el Método BlueHeart, pruebas piloto y análisis de sensibilidad — y deberán ser posteriormente contrastados con datos reales.

**24. BlueHeart no optimizará únicamente el porcentaje.** Cuando existan datos reales, el objetivo no deberá ser simplemente modificar pesos hasta que los porcentajes parezcan más atractivos para los usuarios. La validación deberá estudiar si los resultados tienen relación con indicadores posteriores relevantes, como la percepción de compatibilidad después de conocerse, la calidad de las conversaciones, el interés mutuo, la continuidad del contacto y la evaluación posterior de las recomendaciones. Los indicadores definitivos se establecerán en el Bloque 9, Aprendizaje. El algoritmo deberá mejorar su capacidad de representar compatibilidad, no su capacidad de producir porcentajes elevados.

**25. Estructura conceptual del cálculo.** Sin definir todavía la fórmula definitiva, la arquitectura podrá seguir conceptualmente este proceso: 1) comparar las variables de una dimensión; 2) aplicar pesos internos de las variables; 3) aplicar importancia personal y modificadores permitidos; 4) evaluar reglas especiales e interacciones internas; 5) obtener compatibilidad de la dimensión; 6) evaluar confianza de la dimensión; 7) repetir el proceso para todas las dimensiones; 8) aplicar pesos metodológicos de las dimensiones; 9) evaluar interacciones entre dimensiones; 10) evaluar reglas críticas y mínimos; 11) obtener porcentaje global de compatibilidad; 12) obtener nivel de confianza del resultado.

**26. Ejemplo conceptual.** Supongamos, exclusivamente como ejemplo: Comunicación 88 % (peso metodológico alto), Proyecto de vida 91 % (peso metodológico muy alto), Convivencia 72 % (peso metodológico moderado), Aficiones y estilo de vida 55 % (peso metodológico bajo). Un sistema basado en medias simples podría penalizar excesivamente la diferencia en aficiones; BlueHeart deberá permitir que la elevada compatibilidad en áreas fundamentales tenga una influencia superior. Sin embargo, si apareciera Hijos con incompatibilidad crítica confirmada, esa regla podría imponerse al porcentaje global independientemente de la elevada compatibilidad existente en otras dimensiones.

### Principio fundamental

Las dimensiones permitirán organizar la compatibilidad sin convertir todas las áreas de una relación en elementos equivalentes. BlueHeart deberá mantener un equilibrio entre una estructura metodológica común para todos los usuarios y la importancia particular que determinadas cuestiones tienen para cada persona.

Por tanto: las variables construyen las dimensiones, las dimensiones construyen el resultado global, los pesos determinan relevancia, las reglas críticas establecen límites, y ninguna media matemática deberá ocultar una incompatibilidad fundamental.

## 6.7 Cómo se comparan dos variables

La comparación entre dos variables constituye una de las operaciones fundamentales del algoritmo de BlueHeart. Cada vez que el sistema compare dos perfiles, deberá analizar cómo interactúan las posiciones de ambos usuarios respecto a una misma variable. El objetivo no será comprobar únicamente si las respuestas son iguales o diferentes, sino determinar qué significado tiene esa combinación concreta dentro de una posible relación.

**1. Principio general de comparación.** Cada variable deberá disponer de una regla de comparación previamente definida. El algoritmo recibirá el valor de ambos usuarios, su importancia personal, su necesidad de correspondencia, su flexibilidad, posibles criterios no negociables, el nivel de confianza de la información, el tipo y clasificación de la variable, y las reglas especiales asociadas. A partir de estos elementos, el sistema determinará el resultado de la interacción. La inteligencia artificial no decidirá esta lógica durante la comparación — la regla deberá estar previamente definida dentro del algoritmo.

**2. La comparación produce un resultado distinto del valor original.** BlueHeart deberá distinguir entre el valor del usuario y el resultado de compatibilidad de la comparación. Por ejemplo, usuario A con necesidad de espacio personal = 4/5 y usuario B = 2/5 describen a cada usuario; el algoritmo deberá transformar esa combinación en un resultado diferente, por ejemplo compatibilidad de la variable = 0,65 (65 %). La escala definitiva será determinada posteriormente — lo importante será que los valores originales nunca se confundan con la puntuación generada al compararlos.

**3. Cada variable tendrá una función de comparación.** No existirá necesariamente una única fórmula para todas las variables. Conceptualmente podrían existir funciones de comparación por similitud, por distancia ordinal, categórica mediante matriz, condicionada por importancia, condicionada por flexibilidad, complementaria, crítica, multiselección o mediante variable derivada. El catálogo maestro de variables deberá indicar qué función corresponde a cada una.

**4. Comparación por similitud.** En determinadas variables, posiciones similares podrán favorecer la compatibilidad (necesidad de contacto afectivo, importancia de compartir tiempo, determinados hábitos de convivencia, algunas expectativas relacionales): menor distancia entre valores → mayor compatibilidad. Esta regla solo deberá utilizarse cuando exista una justificación metodológica para considerar positiva la semejanza — BlueHeart no deberá utilizarla como regla universal.

**5. Comparación por distancia ordinal.** Cuando una variable esté representada mediante una escala ordenada, el algoritmo podrá calcular la distancia entre ambas posiciones. Una posible normalización conceptual: `distancia_normalizada = |A - B| / distancia_máxima`, y posteriormente `compatibilidad_base = 1 - distancia_normalizada`. En una escala de 1 a 5, con A=4 y B=3, distancia normalizada = 1/4 = 0,25 y compatibilidad base = 0,75. Esto es únicamente un ejemplo de función matemática, no significa que esta fórmula vaya a aplicarse automáticamente a todas las variables ordinales.

**6. La distancia matemática puede necesitar ajustes.** Dos diferencias con la misma distancia numérica pueden no tener el mismo significado relacional (A=1/B=2 frente a A=4/B=5 tienen la misma distancia matemática pero un significado potencialmente diferente según la variable). Por tanto, determinadas variables ordinales podrán necesitar curvas no lineales, penalizaciones específicas, umbrales, matrices ordinales o reglas especiales en extremos.

**7. Comparación mediante matrices.** Las variables categóricas o estructurales podrán utilizar matrices de compatibilidad. Por ejemplo, para el deseo de tener hijos: sí/sí → muy compatible; no/no → muy compatible; sí/no → muy incompatible; sí/no lo sé → compatibilidad incierta; no/no lo sé → compatibilidad incierta. Posteriormente, la importancia, flexibilidad y condición de no negociable podrán modificar el tratamiento de algunas combinaciones. La matriz permitirá definir explícitamente qué significa cada pareja de valores.

**8. Las matrices deberán ser simétricas cuando corresponda.** En muchas variables, comparar A con B deberá producir el mismo resultado que comparar B con A — «sí quiere hijos / no quiere hijos» deberá representar la misma incompatibilidad que «no quiere hijos / sí quiere hijos». Sin embargo, determinadas variables podrán necesitar componentes asimétricos cuando la necesidad de correspondencia de cada usuario sea diferente. En estos casos, BlueHeart deberá separar la compatibilidad estructural de los valores del impacto personal de esa diferencia para cada usuario.

**9. Compatibilidad bilateral.** BlueHeart podrá calcular, cuando sea útil, dos efectos parciales: el impacto de la combinación sobre el Usuario A y sobre el Usuario B. Por ejemplo, si A viaja mucho y necesita que su pareja viaje con él, mientras B viaja poco pero está dispuesto a hacerlo con frecuencia, la diferencia inicial puede afectar mucho a A pero la flexibilidad de B puede reducir ese impacto. Si en cambio B viaja poco y no desea aumentar esa frecuencia, la misma diferencia inicial tendría un resultado completamente distinto.

**10. El algoritmo deberá evitar promedios que oculten unilateralidad.** Si una combinación resulta completamente satisfactoria para un usuario pero muy negativa para el otro, una media simple podría producir un resultado engañoso (impacto A=100 %, impacto B=20 %, media simple=60 % — pero 60 % podría sugerir una compatibilidad moderada cuando en realidad uno de los dos perfiles presenta una necesidad claramente insatisfecha). BlueHeart deberá valorar fórmulas que penalicen de manera especial las asimetrías importantes.

**11. Posible combinación bilateral conservadora.** Una opción metodológica evaluable consiste en dar mayor relevancia al usuario más afectado por la diferencia: `resultado_bilateral = combinación entre media y peor resultado individual`. Esto podría permitir que una incompatibilidad fuerte para uno de los usuarios no quede completamente diluida por la flexibilidad o indiferencia del otro. La fórmula definitiva deberá ser validada antes de adoptarse.

**12. Importancia personal como modificador.** Una vez obtenido el resultado base de comparar dos valores, el algoritmo podrá ajustar su impacto según la importancia personal: una diferencia base moderada con importancia muy baja para ambos → impacto final reducido; la misma diferencia con importancia máxima para ambos → impacto final mucho mayor. Esto permitirá separar distancia entre posiciones de relevancia de esa distancia.

**13. Necesidad de correspondencia como modificador.** Deberá tener una influencia especialmente relevante. Por ejemplo, si A practica deporte diariamente y B nunca, la diferencia es elevada, pero si A no necesita que su pareja practique deporte y B no tiene ningún problema con el estilo de vida de A, el impacto sobre la compatibilidad puede ser mínimo. Por el contrario, si A considera imprescindible compartir ese estilo de vida, la misma diferencia adquiere una relevancia mucho mayor.

**14. Flexibilidad como modificador.** La flexibilidad podrá reducir el impacto de determinadas diferencias: mayor diferencia + mayor flexibilidad → penalización potencialmente menor. Sin embargo, deberá actuar únicamente cuando la variable permita adaptación real — no podrá utilizarse para neutralizar cuestiones que, por su naturaleza, no admitan una solución intermedia razonable.

**15. La flexibilidad debe ser bilateral.** La adaptación no deberá recaer automáticamente sobre una sola persona. BlueHeart deberá valorar la flexibilidad de ambos usuarios: si A=posición 5 con flexibilidad alta y B=posición 2 con flexibilidad alta, la diferencia puede ser gestionable; pero si A tiene flexibilidad nula y B flexibilidad alta, el sistema no deberá asumir automáticamente que B debe adaptarse completamente a A — la compatibilidad deberá reflejar también la asimetría de esa situación.

**16. Criterios no negociables.** Antes de aplicar compensaciones o modificadores, el algoritmo deberá comprobar si alguno de los valores entra en conflicto con un criterio no negociable confirmado. Si existe una combinación crítica, no deberá aplicarse una compensación normal — el sistema deberá activar la regla correspondiente. Por ejemplo, A quiere hijos (no negociable sí) y B no quiere hijos (no negociable sí) → resultado: incompatibilidad crítica, no «compatibilidad de variable = 15 %». La regla lógica tendrá prioridad sobre el resultado numérico ordinario.

**17. Comparaciones complementarias.** En determinadas variables, una diferencia podrá producir un resultado superior al que generaría una comparación basada únicamente en similitud — por ejemplo, determinadas diferencias de iniciativa o planificación podrían generar complementariedad. Esa regla deberá estar expresamente documentada. Conceptualmente, una función complementaria podría tener una zona óptima que no se encuentre exactamente en A=B: una distancia moderada podría ser positiva mientras que una distancia extrema podría volver a ser problemática, representando relaciones no lineales.

**18. Curvas de compatibilidad.** Determinadas variables podrán utilizar curvas en lugar de simples distancias. Ejemplo conceptual: diferencia 0 → compatibilidad 0,90; diferencia 1 → 1,00; diferencia 2 → 0,85; diferencia 3 → 0,55; diferencia 4 → 0,20. En este ejemplo, una pequeña diferencia produce el mejor resultado porque la variable se considera potencialmente complementaria. Este tipo de función deberá utilizarse únicamente cuando exista una justificación metodológica.

**19. Comparaciones multiselección.** Cuando una variable contenga varios valores simultáneos, BlueHeart podrá utilizar medidas de coincidencia entre conjuntos. Por ejemplo, A elige viajar/deporte/cine y B elige viajar/lectura/cine — coincidencias: viajar, cine. El resultado no deberá calcularse únicamente mediante «2 coincidencias de 3 = 66 %»; será necesario considerar la prioridad de cada opción, la importancia de compartirlas, la existencia de opciones incompatibles, la flexibilidad y la relevancia metodológica de la variable.

**20. Comparaciones derivadas.** Algunas comparaciones podrán producirse sobre variables ya construidas previamente — por ejemplo, «capacidad de reparación del conflicto» podrá representar una variable derivada de diferentes respuestas. El algoritmo podrá comparar el valor derivado de ambos perfiles siempre que la regla de construcción sea estable, no se duplique posteriormente el peso de las variables primarias, y el nivel de confianza del valor derivado sea suficiente.

**21. Resultado estructurado de cada comparación.** Cada comparación entre dos variables no debería devolver únicamente un número. Conceptualmente, podrá producir algo similar a: `variable_id: necesidad_espacio_personal`, `resultado_base: 0,70`, `resultado_ajustado: 0,78`, `impacto_usuario_A: 0,82`, `impacto_usuario_B: 0,74`, `clasificación: diferencia_gestionable`, `importancia_efectiva: media`, `regla_aplicada: ordinal_flexibilidad`, `modificadores: flexibilidad_alta`, `regla_crítica: no`, `confianza: alta`. Esta estructura permitirá posteriormente calcular dimensiones, explicar resultados, auditar decisiones y detectar errores.

**22. Clasificación cualitativa del resultado.** Además del resultado normalizado, BlueHeart podrá asignar una categoría interpretativa: compatibilidad excelente, alta, favorable, neutral, diferencia gestionable, diferencia relevante, incompatibilidad fuerte o incompatibilidad crítica. Los umbrales definitivos se establecerán posteriormente; estas categorías serán especialmente útiles para la explicación generada por la IA.

**23. El resultado numérico y la categoría deben coincidir.** BlueHeart deberá evitar incoherencias como puntuación 85 % con categoría «diferencia relevante», salvo que exista una regla especial que justifique claramente esa combinación. Las categorías deberán derivarse del resultado y de las reglas activadas — una incompatibilidad crítica será una excepción lógica capaz de imponerse a la puntuación numérica.

**24. La comparación debe conservar su explicación técnica.** Para cada variable, BlueHeart deberá poder responder qué valores se compararon, qué regla se utilizó, qué resultado base produjo, qué modificadores se aplicaron, por qué se aplicaron, y qué resultado final produjo. Esto será fundamental para la trazabilidad del algoritmo.

**25. La comparación debe ser determinista.** Utilizando los mismos valores, los mismos modificadores, la misma versión de reglas y la misma configuración, el algoritmo deberá producir exactamente el mismo resultado. Una llamada a la IA no deberá intervenir en la puntuación matemática una vez que los datos estructurados hayan sido consolidados.

**26. Ejemplo completo: espacio personal.** Usuario A: necesidad de espacio personal 5/5, importancia 4/5, necesidad de correspondencia 3/5, flexibilidad 3/4. Usuario B: necesidad de espacio personal 3/5, importancia 3/5, necesidad de correspondencia 2/5, flexibilidad 4/4. La diferencia ordinal es moderada, pero ambos presentan flexibilidad elevada, ninguno exige una correspondencia exacta, y la diferencia no afecta a un criterio no negociable. El algoritmo podría clasificar conceptualmente la combinación como diferencia gestionable y producir una compatibilidad relativamente favorable. La cifra concreta no se define todavía.

**27. Ejemplo completo: hijos.** Usuario A: deseo de hijos sí, importancia máxima, correspondencia máxima, flexibilidad nula, no negociable sí. Usuario B: deseo de hijos no, importancia máxima, correspondencia máxima, flexibilidad nula, no negociable sí. La matriz detectará una combinación incompatible; los criterios no negociables activarán una regla crítica. Resultado: incompatibilidad crítica — no deberá existir una compensación posterior mediante otras variables.

**28. Ejemplo completo: actividad física.** Usuario A: actividad física diaria, importancia personal alta, necesidad de correspondencia baja, flexibilidad alta. Usuario B: actividad física ocasional, importancia personal moderada, necesidad de correspondencia baja, flexibilidad alta. Existe una elevada diferencia conductual, pero la relevancia relacional es reducida. Resultado conceptual: diferencia neutral o altamente gestionable. Este ejemplo demuestra de nuevo que BlueHeart no deberá confundir distancia con incompatibilidad.

### Principio fundamental

La comparación de dos variables deberá responder siempre a tres preguntas diferentes: 1) ¿cuánto se parecen o diferencian las posiciones?; 2) ¿qué significado tiene esa combinación concreta?; 3) ¿cuánto importa esa diferencia para estas dos personas? Solo después podrá producirse una puntuación de compatibilidad.

Por tanto: la distancia describe, la regla interpreta, la importancia determina relevancia, la flexibilidad modifica cuando corresponde, los límites no negociables pueden imponerse al cálculo, y el resultado final de cada comparación deberá ser numérico, cualitativo, reproducible y explicable.

## 6.8 Similitud, diferencia y complementariedad

El algoritmo de BlueHeart deberá distinguir con claridad entre similitud, diferencia y complementariedad. Estos conceptos no son equivalentes y no deberán producir automáticamente el mismo efecto dentro de la compatibilidad. Una de las principales diferencias entre BlueHeart y un sistema simplificado de matching será precisamente evitar la regla «cuanto más iguales, más compatibles» — la compatibilidad dependerá del significado de cada combinación concreta.

**1. Similitud.** Representa el grado en que dos usuarios presentan posiciones parecidas respecto a una variable. En determinadas variables, una elevada similitud podrá favorecer la compatibilidad (deseo de tener hijos, valores fundamentales, necesidad de afecto, expectativas sobre convivencia, importancia de la comunicación, determinadas prioridades de proyecto de vida): posiciones próximas pueden reducir el riesgo de fricción.

**2. La similitud no siempre es positiva.** Una coincidencia elevada no deberá sumar automáticamente compatibilidad — algunas características compartidas pueden amplificar dificultades (dos personas con elevada evitación del conflicto, dos personas extremadamente rígidas, dos personas con muy baja capacidad de adaptación, dos personas con elevada impulsividad en determinadas situaciones). Cada variable deberá indicar si la semejanza tiene un efecto positivo, neutral, condicionado o potencialmente negativo.

**3. Diferencia.** Representa la distancia o falta de coincidencia entre las posiciones de dos usuarios. Una diferencia no deberá interpretarse automáticamente como incompatibilidad — podrá clasificarse como neutral, gestionable, relevante, complementaria o crítica, dependiendo del tipo de variable, el peso metodológico, la importancia para ambos usuarios, la necesidad de correspondencia, la flexibilidad, la existencia de no negociables y las interacciones con otras variables.

**4. Diferencias neutrales.** Algunas diferencias podrán tener un impacto mínimo o prácticamente nulo — por ejemplo, dos personas pueden tener aficiones distintas sin que ninguna necesite compartirlas con su pareja. La diferencia existe, pero no afecta de manera relevante al funcionamiento esperado de la relación; BlueHeart no deberá penalizar artificialmente la compatibilidad.

**5. Diferencias gestionables.** Una diferencia será considerada gestionable cuando pueda convivir razonablemente dentro de la relación mediante adaptación, comunicación o negociación (distintos niveles de orden, diferencias moderadas en planificación, distinta necesidad de tiempo individual, hábitos de ocio distintos). La clasificación como gestionable dependerá también de la flexibilidad de ambos usuarios.

**6. Diferencias relevantes.** Una diferencia será considerada relevante cuando pueda generar fricción significativa aunque no constituya por sí sola una incompatibilidad crítica. Estas diferencias deberán influir en el cálculo, aparecer en la explicación cuando sean suficientemente importantes, poder generar recomendaciones de conversación previa, y ser tenidas en cuenta junto al resto del perfil — no deberán ocultarse simplemente porque el porcentaje global sea alto.

**7. Diferencias críticas.** Una diferencia será crítica cuando entre en conflicto con una regla estructural o con un criterio no negociable y no pueda resolverse razonablemente mediante compensación (por ejemplo, quiere hijos/no quiere hijos, cuando ambas posiciones están confirmadas como no negociables). Estas diferencias deberán ser tratadas por reglas especiales y no únicamente mediante una penalización numérica.

**8. Complementariedad.** Representa una diferencia que puede generar un equilibrio funcional entre dos perfiles. No significa que las personas sean opuestas, sino que determinadas características diferentes pueden interactuar de forma positiva — por ejemplo, mayor iniciativa/menor necesidad de liderar, mayor planificación/mayor flexibilidad, diferentes niveles moderados de sociabilidad, o diferentes estilos de organización compatibles entre sí. La existencia concreta de complementariedades deberá estar previamente definida por el método.

**9. No toda diferencia es complementaria.** BlueHeart deberá evitar la idea simplista de que «los polos opuestos se atraen». Una diferencia solo podrá considerarse complementaria cuando exista una regla metodológica que indique que esa combinación puede generar una interacción funcional. Por ejemplo, alta necesidad de cercanía + alta necesidad de distancia no deberá considerarse complementaria simplemente porque ambas posiciones sean opuestas — puede representar una fuente importante de fricción.

**10. Complementariedad condicionada.** Algunas diferencias podrán resultar complementarias únicamente bajo determinadas condiciones — por ejemplo, una persona muy planificadora y otra más espontánea podrían complementarse cuando ambas valoran esa diferencia, existe flexibilidad, ninguna necesita imponer su estilo, y la diferencia no genera conflictos importantes en áreas estructurales. Si una de las dos posiciones es extremadamente rígida, la misma combinación podría convertirse en problemática.

**11. Zona óptima de diferencia.** Algunas variables podrán tener una relación no lineal con la compatibilidad: demasiada similitud → resultado bueno; diferencia moderada → resultado incluso mejor; diferencia extrema → resultado negativo. Este tipo de comportamiento podrá representarse mediante curvas o matrices específicas — no deberá aplicarse de forma general.

**12. Similitud estructural.** En determinadas áreas, BlueHeart podrá priorizar fuertemente la coincidencia — proyecto de hijos, modelo de relación, determinados valores fundamentales, aspectos críticos del proyecto vital. En estas variables, la complementariedad tendrá un margen mucho menor porque las decisiones afectan directamente al futuro compartido.

**13. Diferencia funcional.** Una diferencia podrá ser funcional cuando ambas personas puedan mantener sus posiciones sin que una de ellas tenga que renunciar a una necesidad fundamental. Por ejemplo, si una persona practica deporte diariamente y la otra no, pero ninguna necesita compartir esa actividad y ambas respetan el estilo de vida de la otra, la diferencia puede ser funcional. La compatibilidad no exige homogeneidad.

**14. Diferencia unilateralmente problemática.** BlueHeart deberá detectar cuando una diferencia es aceptable para uno de los usuarios pero problemática para el otro. Por ejemplo, A no necesita compartir aficiones mientras B considera fundamental compartir muchas actividades — la diferencia no deberá evaluarse únicamente mediante una media, la necesidad insatisfecha de B deberá tener relevancia suficiente.

**15. Similitud unilateralmente irrelevante.** También puede ocurrir lo contrario: dos usuarios pueden coincidir en una característica que no resulta importante para ninguno (ambos disfrutan del cine, pero ninguno considera relevante compartir esa afición). La coincidencia no deberá recibir una bonificación excesiva solo porque existe semejanza.

**16. Bonificación por complementariedad.** Cuando una complementariedad esté claramente definida y se cumplan sus condiciones, BlueHeart podrá aplicar una bonificación limitada, que deberá estar documentada, tener un límite máximo, no compensar incompatibilidades críticas, no duplicar puntuaciones ya contabilizadas, y ser reproducible. La complementariedad deberá actuar como un modificador, no como una fuente ilimitada de puntos.

**17. Penalización por similitud problemática.** Cuando una similitud esté definida como potencialmente disfuncional, BlueHeart podrá aplicar una penalización limitada (por ejemplo, dos perfiles con elevada evitación del conflicto podrían recibir una penalización específica dentro de la dimensión correspondiente). Esta penalización deberá estar respaldada por una regla concreta — la IA no podrá decidir arbitrariamente que una similitud es problemática.

**18. Matriz conceptual de relación.** Cada variable podrá indicar conceptualmente qué tipo de relación favorece: Tipo A (similitud preferente, la semejanza suele favorecer la compatibilidad); Tipo B (diferencia tolerada, la semejanza no es imprescindible, las diferencias suelen ser gestionables); Tipo C (complementariedad posible, determinadas diferencias moderadas pueden ser positivas); Tipo D (regla específica, la combinación debe analizarse mediante una matriz propia); Tipo E (crítica estructural, determinadas combinaciones pueden activar incompatibilidades críticas). Esta clasificación podrá formar parte del catálogo maestro de variables.

**19. Resultado de interacción.** Cada comparación podrá devolver no solo una puntuación, sino también un tipo de interacción, por ejemplo: `similarity_positive`, `similarity_neutral`, `similarity_risk`, `difference_neutral`, `difference_manageable`, `complementarity`, `difference_relevant`, `critical_conflict`. Estos valores permitirán posteriormente explicar mejor el resultado.

**20. Ejemplo: necesidad de afecto.** Usuario A y B: necesidad de afecto muy alta. La similitud puede favorecer la compatibilidad si ambos disfrutan de una expresión afectiva frecuente. Sin embargo, habrá que comprobar también la forma de expresar afecto, la forma de recibirlo y la necesidad de autonomía — la similitud en una variable no sustituirá el análisis del resto de la dimensión.

**21. Ejemplo: planificación.** Usuario A: planificación alta; Usuario B: planificación moderada; flexibilidad de ambos alta → esta diferencia podría considerarse complementaria o gestionable. Pero si Usuario A: planificación máxima, flexibilidad nula, y Usuario B: improvisación máxima, flexibilidad nula → la misma variable podría producir diferencia relevante o fuerte. Por tanto, el resultado no dependerá solo de la distancia.

**22. Ejemplo: hijos.** A quiere hijos / B quiere hijos → similitud estructural positiva. A quiere hijos / B no quiere hijos, ambos no negociables → diferencia crítica. Aquí no existe una zona de complementariedad.

**23. Ejemplo: liderazgo e iniciativa.** A con alta iniciativa / B que prefiere que la otra persona tome más iniciativa → combinación potencialmente complementaria. Pero A necesita controlar todas las decisiones / B también necesita controlar todas las decisiones → la similitud podría generar fricción. De nuevo, la variable deberá distinguir correctamente entre iniciativa, liderazgo y rigidez para evitar interpretaciones simplistas.

**24. Complementariedad no significa desigualdad obligatoria.** BlueHeart no deberá recomendar sistemáticamente perfiles diferentes con el objetivo de crear equilibrio. Dos personas pueden ser altamente compatibles siendo muy similares — la complementariedad será únicamente una de las posibles formas de compatibilidad.

**25. La complementariedad debe poder validarse.** Las reglas de complementariedad iniciales deberán considerarse hipótesis metodológicas, validables posteriormente mediante datos reales, feedback de usuarios, resultados posteriores a citas e investigación. Si una regla de complementariedad no muestra utilidad, deberá poder modificarse o eliminarse en versiones futuras.

**26. Explicabilidad.** Cuando una complementariedad o una similitud problemática influya de forma relevante en el porcentaje, BlueHeart deberá poder explicar qué ocurrió — por ejemplo: «Tenéis estilos diferentes de organización, pero ambos mostráis elevada flexibilidad y la combinación puede resultar complementaria» o «Compartís una tendencia a posponer los conflictos, lo que puede dificultar que determinados problemas se resuelvan con rapidez». La explicación deberá proceder de reglas reales del algoritmo.

### Principio fundamental

BlueHeart deberá abandonar dos ideas simplistas: «iguales = compatibles» y «diferentes = incompatibles». La compatibilidad dependerá de cómo interactúan las características. Por tanto: la similitud puede favorecer, no influir o generar dificultad; la diferencia puede ser neutral, gestionable, complementaria, relevante o crítica; la complementariedad deberá estar definida, limitada y validada. El algoritmo deberá buscar la combinación más funcional, no la máxima semejanza ni la máxima diferencia.

## 6.9 Cómo se mide la capacidad de adaptación

La capacidad de adaptación representa hasta qué punto una persona puede convivir de forma satisfactoria con determinadas diferencias respecto a su pareja sin sentir que está renunciando a una necesidad fundamental. BlueHeart deberá distinguir entre flexibilidad declarada (cuánto afirma el usuario que está dispuesto a aceptar una posición diferente) y capacidad de adaptación (margen real que existe dentro de una variable concreta para que dos posiciones diferentes puedan convivir). No deberán considerarse exactamente lo mismo.

**1. La adaptación será específica de cada variable.** BlueHeart no deberá clasificar globalmente a una persona como flexible o inflexible — una persona puede ser muy flexible respecto al ocio y completamente rígida respecto a su proyecto familiar. La adaptación deberá evaluarse principalmente en relación con variables concretas.

**2. La adaptación no significa renuncia.** BlueHeart deberá evitar interpretar «estoy dispuesto a adaptarme» como «estoy dispuesto a renunciar a lo que necesito». La adaptación solo podrá reducir el impacto de una diferencia cuando exista una zona razonable de convivencia entre ambas posiciones.

**3. Adaptación bilateral.** Cuando exista una diferencia, el algoritmo deberá valorar la capacidad de adaptación de ambos usuarios: ambos muy flexibles → elevada capacidad potencial de adaptación; uno flexible y otro moderadamente flexible → adaptación posible; uno flexible y otro completamente rígido → adaptación asimétrica; ambos rígidos → capacidad de adaptación reducida. El algoritmo no deberá considerar automáticamente compatible una diferencia simplemente porque uno de los usuarios esté dispuesto a adaptarse.

**4. Evitar la adaptación unilateral.** BlueHeart deberá penalizar o limitar aquellas situaciones en las que la compatibilidad dependa sistemáticamente de que una sola persona modifique su comportamiento, expectativas o necesidades. Una relación funcional no debería construirse matemáticamente sobre «A encaja con B siempre que A ceda». Por tanto, las asimetrías importantes deberán poder ser detectadas.

**5. Límites de adaptación.** La flexibilidad podrá modificar diferencias leves, moderadas o gestionables, pero tendrá capacidad limitada o nula frente a criterios no negociables, incompatibilidades críticas, determinadas diferencias estructurales, o necesidades fundamentales incompatibles.

**6. La adaptación no genera puntos por sí sola.** Una elevada flexibilidad no deberá producir automáticamente una puntuación positiva — su función principal será modificar el impacto de determinadas diferencias. Por ejemplo, «no existe diferencia + alta flexibilidad» no deberá necesariamente sumar más compatibilidad que «no existe diferencia + flexibilidad moderada». La flexibilidad cobra relevancia principalmente cuando existe algo que gestionar.

**7. Adaptación y confianza.** Cuando la capacidad de adaptación haya sido inferida por la IA y no declarada directamente, deberá conservar su nivel de confianza. Las inferencias con baja confianza no deberán modificar significativamente el cálculo hasta disponer de información suficiente.

### Principio fundamental

Adaptarse no significa renunciar. BlueHeart deberá valorar la capacidad de dos personas para gestionar diferencias sin convertir la flexibilidad de una de ellas en una obligación permanente de ceder.

## 6.10 Cómo se tratan las preferencias

Las preferencias representan características que una persona desea encontrar en una pareja o dentro de una relación, pero cuya ausencia no constituye necesariamente una incompatibilidad fundamental. BlueHeart deberá respetarlas sin permitir que dominen desproporcionadamente el Sistema de Compatibilidad.

**1. Una preferencia no es una necesidad.** El sistema deberá diferenciar claramente «me gustaría» de «lo necesito para sentirme bien dentro de una relación». Por ejemplo, «me gustaría que mi pareja practicara deporte» no deberá recibir el mismo tratamiento que «para mí es fundamental compartir un estilo de vida físicamente activo».

**2. Las preferencias podrán influir positivamente.** Cuando dos usuarios coincidan en preferencias relevantes, BlueHeart podrá reconocer esa coincidencia — formas similares de ocio, intereses compartidos, preferencias de viaje, determinadas rutinas, actividades compartidas. Estas coincidencias pueden facilitar conexión y experiencias comunes.

**3. Las diferencias de preferencias tendrán penalización limitada.** Cuando las preferencias sean diferentes, el impacto deberá ser proporcional a la importancia, la necesidad de correspondencia y la flexibilidad. Una diferencia en una preferencia secundaria no deberá reducir significativamente el porcentaje global.

**4. Las preferencias no deberán acumular poder excesivo.** BlueHeart deberá evitar que numerosas coincidencias menores produzcan una compatibilidad artificialmente elevada. Dos usuarios pueden compartir música, cine, viajes, deporte, restaurantes y aficiones pero mantener diferencias fundamentales en hijos, valores y proyecto de vida — las primeras coincidencias no deberán neutralizar las segundas.

**5. Una preferencia puede adquirir mayor relevancia personal.** Una característica considerada metodológicamente una preferencia puede resultar especialmente importante para un usuario concreto. BlueHeart deberá reconocer esa importancia, pero esto no transformará automáticamente la variable en estructural o crítica — el algoritmo podrá aumentar su impacto dentro de límites establecidos.

**6. Preferencias extremas.** Si un usuario declara que una determinada preferencia constituye realmente una condición imprescindible, BlueHeart deberá comprobar si se trata realmente de un criterio no negociable, si el usuario comprende las implicaciones, y si existe confirmación expresa. No deberá convertir automáticamente cualquier puntuación máxima de preferencia en un filtro absoluto.

### Principio fundamental

Las preferencias importan, pero deberán ocupar el lugar que les corresponde. BlueHeart deberá utilizarlas para mejorar el encaje entre personas, no para permitir que coincidencias secundarias oculten incompatibilidades fundamentales.

## 6.11 Cómo se tratan las necesidades fundamentales

Las necesidades fundamentales representan características que tienen una influencia importante sobre el bienestar de una persona dentro de una relación. Su tratamiento deberá tener mayor relevancia que el de las preferencias. Podrán incluir cuestiones relacionadas con afecto, comunicación, autonomía, seguridad, tiempo compartido, intimidad, apoyo, estabilidad, determinadas necesidades sexuales y determinadas necesidades de convivencia.

**1. Necesidad no significa no negociable.** BlueHeart deberá distinguir entre preferencia, necesidad importante, necesidad fundamental y criterio no negociable. Una necesidad fundamental puede admitir cierto margen de adaptación; un criterio no negociable establece un límite.

**2. Las necesidades deberán analizarse bilateralmente.** El algoritmo deberá estudiar qué necesita A y qué puede ofrecer B, y qué necesita B y qué puede ofrecer A. Esto es especialmente importante porque dos personas pueden describirse de forma similar y, sin embargo, no satisfacer adecuadamente las necesidades de la otra.

**3. Necesidad y capacidad de respuesta.** BlueHeart deberá evitar comparar únicamente necesidad A ↔ necesidad B. En determinadas variables será necesario comparar necesidad de A ↔ capacidad/preferencia de B para responder a ella. Por ejemplo, si A tiene una necesidad elevada de expresión afectiva, lo relevante no será únicamente cuánto afecto necesita B, sino también cómo B tiende a expresarlo.

**4. Necesidades recíprocas.** Cuando ambos usuarios presentan necesidades compatibles y ambos perfiles muestran capacidad para responder a ellas, el algoritmo podrá considerar esta combinación especialmente favorable.

**5. Necesidades insatisfechas.** Cuando una necesidad fundamental de uno de los usuarios encuentre una respuesta claramente insuficiente en el perfil del otro, la diferencia deberá tener una influencia importante. La elevada compatibilidad en preferencias secundarias no deberá ocultarla.

**6. Necesidades parcialmente compatibles.** No todas las diferencias deberán considerarse incompatibles. BlueHeart deberá poder detectar zonas intermedias donde existe cierta diferencia, hay suficiente capacidad de respuesta, existe flexibilidad, y ninguno necesita realizar una renuncia fundamental — estas situaciones podrán clasificarse como gestionables.

**7. Necesidades incompatibles entre sí.** En determinadas situaciones, satisfacer plenamente la necesidad de un usuario puede entrar directamente en conflicto con la necesidad del otro — por ejemplo, necesidad muy elevada de contacto constante frente a necesidad muy elevada de autonomía y espacio. El algoritmo deberá detectar esta tensión incluso si ambas características son perfectamente válidas individualmente. BlueHeart no deberá juzgar cuál de las dos necesidades es correcta — deberá evaluar su compatibilidad.

**8. Necesidades y adaptación.** La flexibilidad podrá reducir determinadas diferencias, pero BlueHeart deberá establecer límites. Una persona no deberá ser considerada compatible simplemente porque declara estar dispuesta a ignorar permanentemente una necesidad fundamental.

**9. Necesidades inferidas.** Cuando la IA detecte una posible necesidad fundamental mediante varias respuestas, deberá diferenciar entre necesidad declarada, necesidad inferida y necesidad confirmada. Las necesidades de alto impacto deberán disponer de suficiente confianza antes de influir fuertemente en el cálculo.

### Principio fundamental

BlueHeart no deberá limitarse a preguntar «¿sois parecidos?». Deberá intentar determinar «¿puede cada uno encontrar en esta relación aquello que necesita sin obligar al otro a dejar de ser quien es?». Esta será una de las bases de la compatibilidad funcional.

## 6.12 Cómo funcionan los criterios no negociables

Los criterios no negociables representan límites personales expresamente confirmados por un usuario. Su tratamiento deberá diferenciarse completamente del sistema ordinario de pesos. Un no negociable no significa «esto es muy importante» — significa «no deseo construir una relación de pareja con una persona cuya posición sea incompatible con este límite».

**1. Los no negociables deberán ser explícitos.** BlueHeart no deberá deducir automáticamente un criterio no negociable únicamente porque la importancia sea máxima, la flexibilidad sea baja, o varias respuestas indiquen una posición fuerte. Deberá existir una confirmación suficientemente explícita del usuario.

**2. Confirmación específica.** Cuando BlueHeart detecte una posible condición no negociable, la IA podrá formular una pregunta de confirmación — por ejemplo: «Has indicado que deseas tener hijos y que esta cuestión es fundamental para ti. ¿Considerarías una relación con alguien que tenga claro que no quiere tenerlos?». La respuesta permitirá diferenciar una prioridad muy importante de un verdadero límite.

**3. El no negociable está vinculado a una condición.** El sistema no deberá almacenar únicamente `hijos = no negociable`, sino conceptualmente algo equivalente a: posición requerida (desea hijos), posición incompatible (no desea hijos), condición (no negociable). Esto permitirá aplicar correctamente la regla.

**4. Un no negociable no necesita coincidencia exacta.** Declarar un criterio no negociable no significa necesariamente exigir una persona idéntica — por ejemplo, una persona puede considerar no negociable que su pareja respete su religión sin necesitar que profese esa misma religión. Por tanto, el algoritmo deberá identificar exactamente cuál es la condición requerida.

**5. Conflicto entre no negociables.** Cuando dos criterios no negociables confirmados sean incompatibles, BlueHeart deberá activar una regla crítica. Por ejemplo, A quiere tener hijos (no negociable) y B no quiere tener hijos (no negociable) → resultado: incompatibilidad crítica. La compatibilidad existente en otras dimensiones no podrá neutralizar esta condición.

**6. No negociable unilateral.** No será necesario que ambos usuarios hayan declarado la cuestión como no negociable para que exista un conflicto relevante. Si A establece un límite claro y B presenta una posición incompatible confirmada, el sistema deberá respetar el límite de A. Por ejemplo, A no mantendría una relación con una persona fumadora, y B fuma habitualmente y no desea dejarlo — la indiferencia de B respecto al hábito de A no elimina el conflicto con el límite de A.

**7. No negociable y flexibilidad.** Un criterio no negociable confirmado no deberá reducirse mediante flexibilidad genérica. Si el usuario posteriormente manifiesta que existe margen de adaptación, BlueHeart deberá revisar si realmente continúa siendo no negociable.

**8. No negociable y porcentaje.** Los criterios no negociables deberán evaluarse mediante reglas lógicas independientes del sistema general de ponderaciones. Una incompatibilidad crítica no deberá convertirse simplemente en «-20 % de compatibilidad», porque podría ser compensada artificialmente por otras coincidencias. El algoritmo deberá poder impedir la recomendación, marcar la comparación como incompatible, y mantener, si resulta útil, un porcentaje descriptivo independiente. La forma exacta de presentar estos casos se definirá al desarrollar el porcentaje global.

**9. El porcentaje puede seguir teniendo valor informativo.** Una pareja podría presentar conceptualmente compatibilidad general 87 % pero recomendación «no compatible debido a un conflicto no negociable». Esto podría resultar metodológicamente más transparente que transformar artificialmente el 87 % en un porcentaje muy bajo. BlueHeart deberá estudiar esta posibilidad al definir el resultado final — el porcentaje describiría el encaje general, la regla crítica determinaría la recomendación, y ambos conceptos no tendrían por qué ser exactamente lo mismo.

**10. Los no negociables deberán limitarse.** BlueHeart deberá evitar incentivar que los usuarios conviertan una gran cantidad de preferencias en filtros absolutos — un número excesivo de no negociables podría reducir artificialmente las posibilidades de encontrar personas, transformar el sistema de compatibilidad en un sistema de filtros, y reforzar expectativas excesivamente rígidas. La experiencia de usuario deberá explicar la diferencia entre preferencia, necesidad, prioridad y no negociable.

**11. BlueHeart no decidirá los límites personales.** El sistema podrá ayudar al usuario a comprender las consecuencias de establecer un criterio no negociable, pero no deberá decidir por él qué debería aceptar o rechazar. La decisión pertenece al usuario.

**12. Los no negociables podrán actualizarse.** Las personas cambian. Los criterios no negociables deberán poder añadirse, eliminarse, modificarse o volver a confirmarse. Los cambios deberán quedar asociados a una fecha y versión del perfil. Las compatibilidades afectadas podrán necesitar recálculo.

**13. Trazabilidad.** Cuando un criterio no negociable impida una recomendación, el sistema deberá registrar la variable afectada, la posición de A, la posición de B, el usuario que estableció el límite, la regla aplicada, el estado de confirmación y la versión del algoritmo. Esto permitirá explicar y auditar la decisión.

**14. Explicación al usuario.** La IA deberá explicar estas situaciones de forma neutral. No deberá decir «esta persona no es adecuada para ti» — podrá explicar «existe una diferencia en una cuestión que has identificado como no negociable» y posteriormente describir el motivo cuando las reglas de privacidad lo permitan.

### Principio fundamental

Los criterios no negociables representan los límites del usuario, no los límites que BlueHeart decide imponerle. Por tanto: la importancia pondera, la flexibilidad modera, las preferencias orientan, las necesidades influyen fuertemente, y los no negociables establecen límites. Cuando exista un conflicto real entre un límite confirmado y la posición de otro usuario, el algoritmo deberá respetarlo aunque el resto de la compatibilidad sea elevada.

## 6.13 Cómo funcionan las incompatibilidades críticas

Las incompatibilidades críticas representan combinaciones entre dos perfiles que, por su naturaleza o por los límites expresamente establecidos por los usuarios, pueden impedir que BlueHeart recomiende que esas dos personas se conozcan como potencial pareja. Su funcionamiento deberá mantenerse separado del sistema ordinario de puntuaciones — una incompatibilidad crítica no será simplemente una diferencia muy grande, será una condición que activa una regla especial dentro del algoritmo.

**1. Diferencia importante e incompatibilidad crítica no son lo mismo.** BlueHeart deberá distinguir entre diferencia relevante (existe una dificultad potencial significativa, pero puede existir margen para adaptación, negociación o convivencia) e incompatibilidad crítica (existe un conflicto que impide satisfacer simultáneamente posiciones o límites fundamentales de ambos perfiles). Solo la segunda tendrá capacidad para bloquear una recomendación.

**2. Origen de una incompatibilidad crítica.** Podrá aparecer principalmente cuando exista conflicto entre criterios no negociables, conflicto entre un no negociable y una posición incompatible del otro usuario, determinadas combinaciones estructurales definidas expresamente por el Método BlueHeart, o alguna condición que haga imposible satisfacer simultáneamente dos proyectos relacionales. No deberá activarse simplemente porque dos respuestas estén muy alejadas.

**3. Las reglas críticas deberán estar predefinidas.** La IA no podrá decidir durante una comparación «esto me parece demasiado incompatible». Las combinaciones capaces de activar una incompatibilidad crítica deberán estar documentadas dentro del catálogo de reglas. Conceptualmente: `rule_id: children_conflict_01`, `variable: deseo_hijos`, `condición A: quiere_hijos + no_negociable`, `condición B: no_quiere_hijos`, `resultado: critical_conflict`, `acción: block_recommendation`. La estructura técnica definitiva se desarrollará posteriormente.

**4. Incompatibilidad crítica unilateral.** Una regla crítica podrá activarse aunque solo uno de los usuarios haya declarado un criterio no negociable. Si A necesita una condición determinada y la declara no negociable, y B presenta una posición confirmada incompatible, el límite de A deberá respetarse — no será necesario que B considere la cuestión igualmente importante.

**5. Incompatibilidad crítica bilateral.** Cuando ambos usuarios presenten posiciones incompatibles y ambos las consideren no negociables, la confianza en la existencia del conflicto será especialmente elevada. El sistema deberá registrar esta situación de forma diferenciada.

**6. Incompatibilidades estructurales.** Algunas combinaciones podrán tener una relevancia estructural incluso sin un no negociable explícito. Sin embargo, BlueHeart deberá ser especialmente prudente antes de convertirlas en reglas de bloqueo — como principio general, las incompatibilidades críticas automáticas deberán ser pocas, claras y justificables. Cuando exista duda, será preferible una penalización elevada o una advertencia antes que una exclusión automática.

**7. Las reglas críticas se evalúan antes de la compensación.** El algoritmo deberá comprobar la existencia de incompatibilidades críticas antes de aplicar mecanismos generales de compensación. Si una regla crítica está activa, otras coincidencias no podrán neutralizarla.

**8. Porcentaje y recomendación.** Una incompatibilidad crítica podrá coexistir con un porcentaje descriptivo elevado — por ejemplo, compatibilidad general calculada 84 %, estado incompatibilidad crítica, recomendación no recomendar. Esto permitirá mantener información sobre el encaje general sin manipular artificialmente el porcentaje. La presentación definitiva al usuario se establecerá posteriormente.

**9. Múltiples incompatibilidades críticas.** El sistema deberá poder registrar más de una incompatibilidad crítica dentro de la misma comparación — no será necesario detener el análisis matemático al detectar la primera. Continuar el cálculo puede resultar útil para auditoría, validación, investigación, explicación y mejora futura del algoritmo. Sin embargo, una única regla crítica con capacidad de bloqueo podrá ser suficiente para impedir la recomendación.

**10. Confianza de una incompatibilidad crítica.** BlueHeart no deberá bloquear una recomendación basándose en información ambigua o inferencias débiles. Las variables necesarias para activar una regla crítica deberán disponer de un nivel mínimo de confianza. Cuando no exista suficiente certeza, el sistema podrá solicitar aclaración, marcar la regla como potencialmente crítica, suspender temporalmente la recomendación, o reducir el nivel de confianza.

**11. Revisión y actualización.** Si el usuario modifica una posición que había generado una incompatibilidad crítica, las comparaciones afectadas deberán recalcularse. La regla anterior deberá conservarse en el historial para garantizar trazabilidad.

**12. Resultado estructurado.** Una incompatibilidad crítica deberá generar información equivalente a: identificador de regla, variable o variables implicadas, posiciones comparadas, usuario afectado por el límite, estado de confirmación, nivel de confianza, acción aplicada, y versión de la regla.

### Principio fundamental

BlueHeart deberá reservar la categoría de incompatibilidad crítica para situaciones realmente justificadas. No toda gran diferencia es crítica. No toda necesidad es no negociable. No todo conflicto debe impedir una recomendación. Pero cuando exista un límite confirmado que no pueda coexistir con la posición del otro usuario, ninguna cantidad de coincidencias secundarias deberá ocultarlo.

## 6.14 Cómo interactúan distintas variables entre sí

Las relaciones humanas no funcionan como una colección de características completamente independientes. El efecto de una variable puede depender de otras. Por este motivo, BlueHeart podrá incorporar interacciones entre variables cuando exista una justificación metodológica suficiente.

**1. Qué es una interacción.** Existe una interacción cuando el efecto de una variable sobre la compatibilidad cambia debido al estado de otra variable. Por ejemplo, una diferencia en hábitos de convivencia puede resultar más gestionable cuando ambos usuarios presentan flexibilidad elevada, buena comunicación y buena capacidad de negociación. La diferencia original continúa existiendo, pero otras características modifican su impacto esperado.

**2. Interacciones internas de una dimensión.** Algunas interacciones podrán producirse entre variables pertenecientes a la misma dimensión — por ejemplo, dentro de Gestión de conflictos: tendencia a evitar conflictos, capacidad para retomarlos posteriormente, capacidad de pedir disculpas, capacidad de reparación. Una respuesta aislada puede adquirir un significado diferente al analizarla junto a las demás.

**3. Interacciones entre dimensiones.** También podrán existir interacciones entre dimensiones diferentes: Comunicación ↔ Gestión de conflictos, Apego ↔ Afecto, Personalidad ↔ Convivencia, Proyecto de vida ↔ Hijos, Dinero ↔ Proyecto de vida. Estas relaciones deberán estar expresamente definidas.

**4. Las interacciones deberán ser limitadas.** BlueHeart no deberá intentar relacionar todas las variables con todas las demás — esto produciría complejidad excesiva, dificultad de validación, riesgo de sobreajuste, menor explicabilidad y mayor posibilidad de errores. Las interacciones deberán introducirse únicamente cuando aporten valor claro.

**5. Interacciones protectoras.** Una interacción podrá reducir parcialmente el impacto de una diferencia — por ejemplo, diferencia moderada de convivencia + elevada negociación bilateral podría recibir una reducción limitada de la penalización.

**6. Interacciones amplificadoras.** También podrá ocurrir lo contrario — por ejemplo, diferencia importante + rigidez elevada en ambos usuarios podrá aumentar el impacto negativo.

**7. Interacciones positivas.** Algunas combinaciones de fortalezas podrán aumentar moderadamente la compatibilidad. Sin embargo, BlueHeart deberá evitar otorgar bonificaciones excesivas simplemente porque varias variables positivas coincidan.

**8. Interacciones negativas.** Determinadas combinaciones podrán generar mayor dificultad conjunta que cada característica por separado — conceptualmente, alta necesidad de control + alta necesidad de autonomía del otro usuario puede producir una tensión superior a la que reflejarían ambas variables analizadas aisladamente.

**9. Interacciones direccionales.** Algunas relaciones podrán depender de quién presenta cada característica — por tanto, una interacción podrá ser simétrica o asimétrica. El catálogo deberá indicar esta condición cuando corresponda.

**10. Evitar doble contabilización.** Una interacción no deberá volver a sumar o restar íntegramente aquello que ya ha sido contabilizado en sus variables originales — deberá actuar normalmente como un modificador limitado, no como una nueva puntuación completa.

**11. Límites de modificación.** Cada interacción deberá disponer de un límite máximo de efecto — por ejemplo, conceptualmente `modifier_cap = ±0,10`, lo que significaría que esa interacción nunca podría alterar el resultado más allá del límite definido. La cifra es únicamente ilustrativa.

**12. Registro de interacción.** Cada interacción deberá disponer de identificador, variables implicadas, condiciones de activación, dirección, efecto, límite máximo, justificación metodológica y versión.

**13. Interacciones inferidas.** La IA no podrá crear nuevas interacciones durante una comparación — podrá detectar que se cumplen las condiciones de una interacción previamente definida. La regla continuará perteneciendo al algoritmo.

### Principio fundamental

BlueHeart deberá reconocer que las características humanas interactúan, pero deberá resistirse a convertir el algoritmo en una red imposible de explicar. Pocas interacciones. Bien justificadas. Efectos limitados. Completamente trazables.

## 6.15 Mecanismos de compensación

Una relación no necesita presentar una compatibilidad elevada en todas las variables. BlueHeart deberá permitir que determinadas fortalezas reduzcan parcialmente el impacto de algunas diferencias — este mecanismo se denominará compensación. Sin embargo, la compensación deberá estar limitada por reglas estrictas.

**1. Qué significa compensar.** Compensar no significa borrar una diferencia — significa reconocer que determinadas fortalezas pueden facilitar que esa diferencia sea gestionable. Por ejemplo, una diferencia moderada en organización doméstica podría resultar menos problemática cuando ambos usuarios presentan alta flexibilidad, buena comunicación y capacidad de negociación. La diferencia continuará apareciendo en el análisis; su impacto podrá reducirse.

**2. Compensación dentro de una dimensión.** La forma más segura de compensación será aquella que ocurre entre variables relacionadas — por ejemplo, dentro de Convivencia, una diferencia moderada en horarios podría compensarse parcialmente mediante elevada flexibilidad, buena negociación y baja necesidad de sincronización.

**3. Compensación entre dimensiones.** BlueHeart podrá permitir algunas compensaciones entre dimensiones cuando exista una relación metodológica clara — por ejemplo, una dificultad moderada de convivencia podría verse parcialmente mitigada por fortalezas muy elevadas en Comunicación y Gestión de conflictos. Estas compensaciones deberán ser más restrictivas que las internas.

**4. Compensaciones explícitas.** El algoritmo no deberá asumir que «todo lo positivo compensa todo lo negativo». Cada mecanismo deberá estar definido — conceptualmente: diferencia objetivo (horarios), factor compensador (flexibilidad), efecto máximo (limitado).

**5. Compensación proporcional.** Cuanto mayor sea la dificultad, menor deberá ser la capacidad relativa de una compensación ordinaria para neutralizarla completamente. Una diferencia leve podrá quedar prácticamente neutralizada; una diferencia moderada podrá reducirse parcialmente; una diferencia muy fuerte deberá conservar un impacto significativo.

**6. Las fortalezas no desaparecen.** Cuando una variable positiva se utilice como factor compensador, BlueHeart deberá evitar contabilizarla dos veces de manera completa — por ejemplo, la buena comunicación puede contribuir a la dimensión Comunicación y además reducir parcialmente una dificultad de convivencia, pero el segundo efecto deberá ser limitado para evitar doble puntuación.

**7. Compensación bilateral.** Las compensaciones relacionadas con adaptación, comunicación o negociación deberán considerar a ambos usuarios. Una fortaleza presente únicamente en uno de ellos podrá tener menor capacidad compensadora que una fortaleza bilateral.

**8. Compensaciones condicionadas.** Algunas fortalezas solo podrán compensar determinadas dificultades — por ejemplo, compartir muchas aficiones no deberá compensar una diferencia en proyecto familiar, mientras que una elevada flexibilidad puede compensar parcialmente diferencias en ocio o rutinas.

**9. Límite máximo.** Cada mecanismo compensador deberá disponer de un límite. Nunca deberá poder transformar automáticamente una incompatibilidad fuerte en compatibilidad excelente.

**10. Registro.** Toda compensación aplicada deberá quedar registrada: diferencia afectada, variable compensadora, regla aplicada, magnitud original, magnitud compensada y límite utilizado. Esto permitirá explicar posteriormente el resultado.

### Principio fundamental

BlueHeart deberá permitir que las fortalezas importen. Pero compensar no significa borrar: una fortaleza podrá hacer una diferencia más gestionable, pero no deberá convertir artificialmente una incompatibilidad real en una coincidencia.

## 6.16 Cómo evitar compensaciones absurdas

Uno de los mayores riesgos de un algoritmo ponderado consiste en permitir que numerosas coincidencias pequeñas neutralicen diferencias fundamentales. BlueHeart deberá diseñarse expresamente para impedir este comportamiento.

**1. El problema de la media matemática.** Supongamos que dos usuarios coinciden enormemente en música, cine, viajes, deporte, alimentación, ocio, vida social y horarios, pero mantienen una incompatibilidad absoluta respecto a tener hijos. Una media tradicional podría seguir produciendo un porcentaje elevado. BlueHeart no deberá interpretar ese resultado como una recomendación válida.

**2. Sistema de capas.** Para evitarlo, el algoritmo deberá funcionar mediante diferentes capas de decisión: Capa 1, reglas críticas (se comprueba si existe alguna incompatibilidad capaz de impedir la recomendación); Capa 2, compatibilidad estructural (se analizan las áreas fundamentales para construir un proyecto de vida); Capa 3, necesidades relacionales (se analiza si ambos perfiles pueden responder razonablemente a las necesidades importantes del otro); Capa 4, compatibilidad general (se incorporan convivencia, personalidad, hábitos y otras variables relevantes); Capa 5, preferencias y afinidades (se incorporan elementos secundarios que pueden mejorar el encaje, pero con capacidad limitada). Esta arquitectura impedirá que cientos de coincidencias menores tengan el mismo poder que una incompatibilidad estructural.

**3. Techos de compensación.** Cada tipo de diferencia podrá establecer cuánto puede reducirse mediante compensaciones — conceptualmente: diferencia leve → compensación máxima elevada; diferencia moderada → compensación máxima intermedia; diferencia fuerte → compensación máxima reducida; incompatibilidad crítica → compensación = 0. Los valores concretos se definirán posteriormente.

**4. Suelos de penalización.** Determinadas diferencias podrán conservar una penalización mínima aunque existan factores protectores, evitando que una dificultad relevante desaparezca completamente.

**5. Límites por categoría.** Las preferencias y afinidades podrán tener un techo máximo de contribución al porcentaje global, de forma que compartir muchas características secundarias no pueda dominar el resultado.

**6. Límites por dimensión.** Una dimensión extremadamente positiva tampoco deberá disponer de capacidad ilimitada para neutralizar otra dimensión extremadamente negativa — el algoritmo podrá establecer límites de compensación entre dimensiones.

**7. Mínimos estructurales.** BlueHeart podrá establecer umbrales mínimos en determinadas dimensiones estructurales — una comparación podría necesitar compatibilidad global suficiente, ausencia de incompatibilidades críticas, y eventualmente mínimos en determinadas áreas fundamentales. Los valores concretos deberán validarse.

**8. No compensación entre elementos no relacionados.** Para que exista compensación deberá existir una relación lógica — buena comunicación puede ayudar a gestionar una diferencia de convivencia, pero mismos gustos musicales no compensa una diferencia en convivencia. La relación deberá estar definida previamente.

**9. No utilizar el porcentaje como única decisión.** La recomendación final no deberá depender exclusivamente de `compatibility_percentage >= X` — deberá considerar también reglas críticas, mínimos estructurales, nivel de confianza, calidad de la información y posibles condiciones pendientes de aclaración. Esto permitirá separar puntuación de compatibilidad de elegibilidad para recomendación.

**10. Resultado multidimensional.** Antes de recomendar, BlueHeart deberá disponer al menos de: porcentaje global, resultados por dimensiones, reglas críticas, diferencias relevantes, nivel de confianza y estado de elegibilidad. Esto evitará tomar decisiones a partir de una sola cifra.

**11. Casos de prueba obligatorios.** El algoritmo deberá incluir pruebas específicamente diseñadas para detectar compensaciones absurdas, entre ellas: Caso A — alta coincidencia general + incompatibilidad crítica en hijos → resultado esperado: no recomendar. Caso B — alta coincidencia en preferencias + baja compatibilidad estructural → resultado esperado: el porcentaje no deberá inflarse artificialmente. Caso C — diferencia moderada + elevada flexibilidad bilateral → resultado esperado: penalización reducida de forma limitada. Caso D — diferencia fuerte + flexibilidad únicamente unilateral → resultado esperado: no considerar completamente compensada. Caso E — numerosas coincidencias menores + necesidad fundamental insatisfecha → resultado esperado: la necesidad fundamental conserva una influencia significativa.

**12. Auditoría automática.** Durante el desarrollo, BlueHeart deberá poder detectar resultados sospechosos, por ejemplo compatibilidad global > 80 % junto a dimensión estructural < 30 %. Esto no significa necesariamente que exista un error, pero debería activar una comprobación automática o quedar registrado para análisis. Los umbrales son únicamente ilustrativos.

**13. Explicabilidad.** Cuando el porcentaje global sea elevado pero exista una dificultad relevante, la IA deberá comunicar ambas realidades — por ejemplo: «Presentáis un nivel elevado de compatibilidad general, aunque existe una diferencia importante respecto a vuestro proyecto familiar que conviene considerar especialmente». Si la diferencia activa una regla crítica, deberá explicarse de forma todavía más clara.

### Principio fundamental

BlueHeart deberá impedir que las matemáticas produzcan conclusiones que contradigan la lógica del propio método. Por tanto: las coincidencias pequeñas no compran incompatibilidades fundamentales; las fortalezas pueden reducir dificultades, pero no borrarlas arbitrariamente; las reglas críticas están por encima de la compensación; y el porcentaje global nunca deberá interpretarse aislado del resto del perfil de compatibilidad.

## 6.17 Cómo se calcula la compatibilidad por dimensión

Una vez comparadas las variables individuales, BlueHeart deberá transformar sus resultados en una puntuación de compatibilidad para cada dimensión, que deberá representar cómo encajan ambos usuarios dentro de esa área concreta de la relación. El cálculo deberá respetar cuatro principios: las variables no tienen necesariamente el mismo peso; el número de preguntas no determina la importancia de una dimensión; las reglas críticas funcionan independientemente de la media; la ausencia de información no equivale a compatibilidad media.

**1. Entrada del cálculo.** Para cada variable comparable (i), el algoritmo dispondrá conceptualmente de Cᵢ (puntuación de compatibilidad de la variable, normalizada entre 0 y 1) y Wᵢ (peso metodológico de la variable dentro de la dimensión). Los efectos de importancia personal, necesidad de correspondencia, flexibilidad, complementariedad e interacciones habrán sido incorporados durante la comparación de variables o mediante modificadores expresamente definidos.

**Regla de aplicación única de modificadores.** Cada modificador del Sistema de Compatibilidad deberá tener definida una única capa responsable de su aplicación. Un mismo efecto no podrá aplicarse en más de una fase del cálculo. Conceptualmente, cada regla o modificador deberá indicar un `application_layer` que podrá corresponder, según su naturaleza, a comparación de variable, cálculo de dimensión, interacción entre variables, interacción entre dimensiones, o elegibilidad. Por ejemplo, si la flexibilidad ya ha modificado el resultado de una comparación concreta dentro del Variable Comparison Engine, no podrá volver a aplicarse posteriormente como una bonificación adicional sobre la misma diferencia dentro del Dimension Engine. Del mismo modo, una interacción utilizada para modificar una dimensión no deberá volver a aplicarse durante el cálculo global. Esta regla deberá evitar la doble contabilización y garantizar que cada efecto metodológico tenga un único propietario dentro del motor.

**2. Compatibilidad base de dimensión.** La primera versión del algoritmo podrá utilizar una media ponderada normalizada:

> D = Σ(Cᵢ × Wᵢ) / ΣWᵢ

donde D = compatibilidad de la dimensión, Cᵢ = compatibilidad final de cada variable, Wᵢ = peso de esa variable. El resultado estará comprendido entre 0 y 1, y posteriormente podrá expresarse entre 0 y 100.

**3. Ejemplo conceptual.** Supongamos una dimensión con cuatro variables: A (compatibilidad 0,90, peso 0,35), B (compatibilidad 0,75, peso 0,30), C (compatibilidad 0,60, peso 0,20), D (compatibilidad 0,80, peso 0,15). El resultado sería D = (0,90×0,35 + 0,75×0,30 + 0,60×0,20 + 0,80×0,15) / 1 = 0,78, es decir, compatibilidad de dimensión: 78 %. Los valores son únicamente ilustrativos.

**4. Las variables ausentes no reciben cero.** Si una variable no dispone de información suficiente, no deberá utilizarse Cᵢ = 0 — eso significaría interpretar desconocimiento como incompatibilidad. La variable podrá quedar temporalmente excluida del numerador y del denominador: `D = Σ(Cᵢ × Wᵢ) / ΣWᵢ disponible`. Esto permitirá calcular sobre la información existente, aunque la ausencia deberá reducir posteriormente la confianza del resultado.

**5. Cobertura de la dimensión.** Además de la compatibilidad, cada dimensión deberá disponer de una medida de cobertura: `Cobertura = peso disponible / peso total esperado`. Por ejemplo, si las variables respondidas representan el 80 % del peso esperado, cobertura = 0,80. Esto permitirá distinguir «compatibilidad de dimensión: 85 %, cobertura: 95 %» de «compatibilidad de dimensión: 85 %, cobertura: 40 %» — ambos resultados numéricos son iguales, su fiabilidad no lo es.

**6. Modificadores de dimensión.** Después de obtener la compatibilidad base, podrán aplicarse únicamente aquellos modificadores definidos expresamente para la dimensión: interacción protectora, interacción amplificadora, complementariedad, penalización por asimetría, suelo de penalización, techo de compensación. Conceptualmente: `D_final = limitar(D_base + modificadores, 0, 1)`. Los modificadores deberán tener límites establecidos.

**7. Las reglas críticas no se incorporan como una media.** Si dentro de una dimensión existe una incompatibilidad crítica, D podrá continuar calculándose con fines descriptivos, pero deberá añadirse `critical_conflict = true`. La existencia de ese conflicto será evaluada posteriormente por el motor de elegibilidad.

**8. Resultado estructurado de dimensión.** Cada dimensión deberá devolver como mínimo: identificador, compatibilidad base, compatibilidad final, cobertura, confianza, variables utilizadas, variables ausentes, principales fortalezas, principales diferencias, modificadores, reglas críticas y versión del algoritmo.

**9. Evitar resultados engañosos.** Una dimensión con muy poca información no deberá mostrarse al usuario con la misma seguridad que una dimensión completamente evaluada. El sistema podrá establecer posteriormente una cobertura mínima necesaria para considerar válida una puntuación de dimensión.

### Principio fundamental

BlueHeart calculará cada dimensión a partir de las variables que realmente la componen, ponderadas según su importancia metodológica. Compatibilidad y cantidad de información serán dos conceptos distintos: la primera determina el encaje, la segunda contribuirá a determinar cuánto podemos confiar en ese encaje.

## 6.18 Cómo se obtiene el porcentaje global de compatibilidad

El porcentaje global será el principal indicador cuantitativo de compatibilidad mostrado por BlueHeart. Deberá representar el encaje conjunto entre dos perfiles según el Método BlueHeart. No representará la probabilidad de que una relación tenga éxito.

**1. Entrada del cálculo global.** Cada dimensión (j) proporcionará Dⱼ (compatibilidad de la dimensión), Wⱼ (peso metodológico de la dimensión) y Kⱼ (información sobre cobertura y confianza). Además, el sistema conocerá las reglas críticas, las interacciones entre dimensiones, los mínimos estructurales y el estado de elegibilidad.

**2. Compatibilidad global base.** Como arquitectura inicial, BlueHeart podrá utilizar una media ponderada normalizada de las dimensiones que dispongan de información suficiente para participar en el cálculo:

> G = Σ(Dⱼ × Wⱼ) / ΣWⱼ disponible

donde G = compatibilidad global base, Dⱼ = compatibilidad final de cada dimensión válida para el cálculo, Wⱼ = peso metodológico de cada dimensión, y ΣWⱼ disponible = suma de los pesos metodológicos de las dimensiones que disponen de información suficiente para participar en el cálculo. El resultado se normalizará entre 0 y 1 y posteriormente se convertirá a porcentaje: Porcentaje de compatibilidad = G × 100.

Una dimensión sin información suficiente no recibirá automáticamente una puntuación de 0 ni de 0,5 — podrá excluirse temporalmente del cálculo cuando las reglas de cobertura lo permitan. Sin embargo, esta exclusión reducirá la cobertura y el nivel de confianza global. No todas las dimensiones podrán excluirse mediante renormalización: si falta información en una dimensión o variable considerada necesaria para el matching, estructural o potencialmente crítica, el sistema podrá establecer el estado de la comparación como pendiente de información antes de permitir una recomendación. De este modo, la renormalización permitirá calcular con información parcial sin permitir que la ausencia de información fundamental sea sustituida artificialmente por el resto de dimensiones.

**3. Ejemplo conceptual.** Supongamos exclusivamente como ejemplo: Comunicación 85 %, Valores 92 %, Proyecto de vida 88 %, Convivencia 74 %, Afecto 81 %. El resultado global no será la media simple — cada dimensión contribuirá según su peso metodológico.

**4. El porcentaje no incluirá directamente la confianza.** BlueHeart deberá evitar una fórmula como `compatibilidad × confianza = porcentaje final`. Si dos perfiles presentan una compatibilidad estimada del 85 % pero poca información, reducir el resultado a 55 % mezclaría dos conceptos diferentes. Por tanto: compatibilidad = cómo encajan según la información disponible; confianza = cuánto podemos confiar en esa estimación. Deberán mostrarse y almacenarse separadamente.

**5. Las reglas críticas no manipulan artificialmente el porcentaje.** Cuando exista una incompatibilidad crítica, BlueHeart podrá conservar el porcentaje descriptivo calculado — por ejemplo, compatibilidad general 86 %, estado de recomendación no elegible, motivo incompatibilidad crítica. Esto será más transparente que transformar artificialmente el porcentaje en una cifra baja.

**6. Estado de elegibilidad.** El algoritmo deberá producir un estado de elegibilidad independiente del porcentaje de compatibilidad. BlueHeart utilizará internamente los siguientes estados: `RECOMMENDED` (la comparación cumple las condiciones necesarias para ser recomendada); `RECOMMENDED_WITH_NOTES` (cumple las condiciones de recomendación, pero contiene una o varias diferencias relevantes que deberán formar parte de la explicación); `PENDING_INFORMATION` (no existe todavía información suficiente o suficientemente fiable para tomar una decisión definitiva); `BELOW_THRESHOLD` (la información es suficiente y no existen incompatibilidades críticas, pero el porcentaje de compatibilidad no alcanza el umbral mínimo establecido para la versión vigente del algoritmo); `CRITICAL_CONFLICT` (existe al menos una incompatibilidad crítica confirmada con capacidad para impedir la recomendación). Estos estados constituirán la nomenclatura interna del motor; la interfaz de usuario podrá traducirlos posteriormente a expresiones más naturales sin modificar su significado técnico.

**7. Motor de elegibilidad.** Después de calcular la compatibilidad, BlueHeart deberá evaluar: 1) ¿existe incompatibilidad crítica? si existe una regla bloqueante confirmada → no elegible. 2) ¿existe información suficiente? si no → pendiente de información. 3) ¿se cumplen los mínimos estructurales definidos? si no → podrá impedirse o limitarse la recomendación según la regla correspondiente. 4) ¿se alcanza el umbral global de recomendación? si se cumplen los requisitos anteriores, se evaluará el porcentaje global.

**8. Umbral de recomendación.** BlueHeart deberá establecer posteriormente un porcentaje mínimo a partir del cual dos perfiles puedan ser candidatos a recomendación. Ese porcentaje no deberá decidirse todavía de forma arbitraria — la beta permitirá observar qué distribución producen los primeros perfiles y ayudará a calibrarlo.

**9. Bandas de compatibilidad.** Para facilitar la interpretación, el porcentaje podrá clasificarse posteriormente en bandas conceptuales: compatibilidad excepcional, muy alta, alta, favorable, limitada, baja. Los rangos definitivos no deberán establecerse hasta disponer de pruebas suficientes.

**10. Evitar falsa precisión.** Aunque internamente el algoritmo pueda trabajar con numerosos decimales, la interfaz no deberá sugerir una precisión científica inexistente — mostrar 82,4736 % sería innecesariamente preciso. Para el usuario podrá mostrarse 82 % mientras el sistema conserva internamente el valor completo.

**11. Resultado global estructurado.** El resultado de una comparación deberá contener conceptualmente: `compatibility_score`, `compatibility_percentage`, `confidence_score`, `eligibility_status`, `dimension_scores`, `critical_conflicts`, `strengths`, `frictions` y `algorithm_version`.

**12. El porcentaje deberá ser reproducible.** Los mismos perfiles, utilizando la misma versión del algoritmo, deberán producir exactamente el mismo porcentaje. La IA no podrá aumentar o reducir posteriormente esa cifra.

### Principio fundamental

El porcentaje de BlueHeart deberá responder «según la información disponible y las reglas actuales del Método BlueHeart, ¿qué nivel de compatibilidad presentan estos dos perfiles?». Nunca «¿qué probabilidad tienen de enamorarse?» o «¿qué probabilidad tiene su relación de funcionar?». El porcentaje mide compatibilidad. No predice el futuro.

## 6.19 Cómo se calcula el nivel de confianza del resultado

BlueHeart deberá acompañar el porcentaje de compatibilidad con una medida independiente de confianza. La confianza representará la calidad de la evidencia disponible para realizar la comparación. No representará la compatibilidad.

**1. Factores principales.** El nivel de confianza podrá depender principalmente de la cobertura del perfil, la cobertura de las dimensiones, la calidad de las respuestas, el estado de confirmación, la consistencia, la presencia de contradicciones, la cantidad de información inferida, la confianza de las inferencias, y la vigencia de los datos.

**2. Confianza de variable.** Cada variable podrá disponer de una confianza normalizada Kᵢ ∈ [0,1], donde 1 = información muy fiable y 0 = información insuficiente o no utilizable. No será necesario que el usuario vea este número.

**3. Factores que aumentan la confianza.** Respuesta directa clara, confirmación posterior, varias respuestas consistentes, preguntas adaptativas coherentes, ausencia de contradicciones, información reciente.

**4. Factores que reducen la confianza.** Información incompleta, respuestas ambiguas, contradicciones, inferencias no confirmadas, respuestas potencialmente inconsistentes, datos antiguos en variables dinámicas.

**5. Confianza de dimensión.** Podrá calcularse mediante las variables disponibles y su peso: `K_dim = Σ(Kᵢ × Wᵢ) / ΣW_total`. Esta fórmula permite que la información ausente reduzca la confianza porque el denominador representa el peso total esperado. Podrán añadirse penalizaciones limitadas por contradicciones relevantes.

**6. Confianza global.** Podrá construirse a partir de la confianza de las dimensiones: `K_global = Σ(Kⱼ × Wⱼ) / ΣWⱼ`. Podrán existir además penalizaciones por dimensiones estructurales insuficientemente evaluadas, contradicciones críticas, o información especialmente relevante pendiente de confirmación.

**7. La confianza no debe inflarse por preguntas secundarias.** Responder muchas preguntas de poca importancia no deberá compensar la ausencia de información fundamental — la confianza deberá utilizar pesos metodológicos.

**8. Confianza mínima para recomendar.** BlueHeart podrá establecer un nivel mínimo de confianza para realizar recomendaciones — por ejemplo, un 91 % de compatibilidad con confianza muy baja podría producir «pendiente de información», no «recomendación altamente compatible». El umbral concreto deberá calibrarse.

**9. Categorías de confianza.** Para el usuario, BlueHeart podrá traducir la confianza a categorías sencillas: muy alta, alta, moderada, limitada, insuficiente. Los rangos definitivos se establecerán posteriormente.

**10. Ejemplo.** Pareja A: compatibilidad 84 %, confianza alta. Pareja B: compatibilidad 84 %, confianza limitada. El algoritmo considera que ambas combinaciones presentan un encaje similar según la información existente, pero existe mucha más evidencia para sostener el resultado de la primera comparación.

**11. Confianza e inferencias de IA.** Las inferencias realizadas por la IA deberán tener especial cuidado: una inferencia de confianza elevada podrá contribuir al perfil; una inferencia incierta deberá tener menor peso en confianza, solicitar confirmación cuando sea relevante, y no activar por sí sola reglas críticas.

**12. Confianza y no negociables.** Una incompatibilidad crítica no deberá activarse mediante información de confianza insuficiente. Cuando exista una posible incompatibilidad fundamental pero la información sea ambigua: estado = pendiente de aclaración. La IA podrá formular preguntas adicionales antes de permitir que el algoritmo tome una decisión definitiva.

**13. La confianza también deberá ser reproducible.** La misma información y la misma versión del sistema deberán generar el mismo nivel de confianza — no podrá depender de una valoración improvisada de la IA.

### Principio fundamental

BlueHeart deberá poder decir simultáneamente «este es nuestro cálculo» y «este es el nivel de evidencia que tenemos para sostenerlo». Separar compatibilidad de confianza permitirá ofrecer resultados más transparentes y evitar una falsa sensación de certeza.

## 6.20 Qué ocurre cuando falta información

La ausencia de información será una situación normal dentro de BlueHeart. Los usuarios podrán no responder determinadas preguntas, abandonar temporalmente el cuestionario, no disponer todavía de una opinión clara, preferir no responder determinadas cuestiones, o tener información pendiente de confirmación. El algoritmo deberá gestionar estas situaciones sin inventar datos.

**1. Regla fundamental.** Ausencia de información ≠ respuesta neutral. Ausencia de información ≠ compatibilidad media. Ausencia de información ≠ incompatibilidad. Significa únicamente que BlueHeart no dispone de información suficiente sobre esa variable.

**2. Variables ausentes.** Cuando una variable no pueda calcularse: no recibirá puntuación cero, no recibirá automáticamente 50 %, no será inferida arbitrariamente. Se marcará como no disponible o insuficiente.

**3. Renormalización controlada.** Cuando falten variables no esenciales, BlueHeart podrá calcular temporalmente una dimensión utilizando únicamente el peso disponible: `D = Σ(Cᵢ × Wᵢ disponibles) / ΣWᵢ disponibles`. Esto evita penalizar matemáticamente al usuario por no haber respondido, aunque la cobertura y confianza disminuirán.

**4. No toda ausencia permite renormalización.** Si falta información sobre una variable esencial o potencialmente crítica, el algoritmo podrá impedir temporalmente la recomendación. Redistribuir ese peso hacia aficiones u otras variables sería incorrecto si BlueHeart no conoce suficientemente la posición de un usuario respecto a una cuestión estructural necesaria para el matching.

**5. Variables obligatorias.** El catálogo maestro deberá indicar qué variables son necesarias antes de permitir recomendaciones: conceptualmente `required_for_matching = true/false` y, cuando corresponda, `required_for_dimension = true/false`.

**6. Cobertura mínima del perfil.** BlueHeart deberá establecer un nivel mínimo de cobertura antes de considerar que un perfil está preparado para participar en recomendaciones. La cifra definitiva se calibrará durante las pruebas.

**7. Cobertura estructural.** Además de una cobertura global, determinadas dimensiones podrán necesitar cobertura mínima propia — esto impedirá un perfil 90 % completo globalmente pero con proyecto de vida prácticamente desconocido, donde el primer porcentaje por sí solo sería engañoso.

**8. Preguntas adaptativas.** Cuando falte información especialmente importante para comparar dos perfiles, la IA podrá formular preguntas adicionales. Esto permitirá una estrategia útil: BlueHeart no necesita preguntar absolutamente todo a todo el mundo desde el principio, puede disponer de un núcleo común y profundizar posteriormente cuando una comparación concreta lo necesite.

**9. Matching adaptativo.** Conceptualmente: dos perfiles presentan una compatibilidad prometedora → el algoritmo detecta que faltan datos importantes en una variable relevante → la comparación queda provisional → la IA solicita información adicional → se actualizan los perfiles → el algoritmo recalcula. Esto permitirá aumentar progresivamente la precisión.

**10. No sabe / no está seguro.** Una respuesta «no lo sé» no deberá tratarse necesariamente como información ausente — puede constituir una posición real (por ejemplo, ante «¿quieres tener hijos?», «no lo sé» contiene información relevante y deberá disponer de reglas específicas, diferenciándose de «pregunta no contestada»).

**11. Prefiere no responder.** BlueHeart deberá distinguir también «no sabe», «no responde» y «prefiere no responder» — estas situaciones pueden tener implicaciones diferentes para la confianza y la experiencia del usuario.

**12. Información parcial.** Una variable podrá estar parcialmente construida — por ejemplo, BlueHeart conoce la posición del usuario pero todavía no conoce importancia, flexibilidad o necesidad de correspondencia. En estos casos, el sistema deberá determinar si existe información suficiente para realizar una comparación provisional.

**13. Resultados provisionales.** Cuando la cobertura sea suficiente para calcular pero no óptima, el resultado podrá marcarse como `provisional = true`, diferenciándolo de un cálculo basado en perfiles suficientemente consolidados.

**14. Recalcular automáticamente.** Cada vez que se complete información relevante: se actualizará el perfil, se identificarán las comparaciones afectadas, se recalcularán los resultados, y se conservará la versión anterior cuando sea necesario para auditoría.

**15. La IA no rellena huecos.** La IA podrá realizar inferencias únicamente dentro de las reglas definidas en el Bloque 5 — no deberá inventar valores para permitir que el algoritmo complete una comparación. Cuando exista incertidumbre suficiente: preguntar será preferible a asumir.

**16. Beta inicial.** Durante la primera beta, BlueHeart deberá registrar especialmente qué preguntas se omiten más, qué variables quedan incompletas, qué preguntas generan dudas, qué comparaciones requieren aclaraciones, y cuánto cambia el resultado después de completar información. Estos datos serán especialmente útiles para mejorar el cuestionario y el algoritmo.

### Principio fundamental

BlueHeart no deberá confundir falta de información con información negativa. Cuando no sepa algo, lo reconocerá. Cuando pueda calcular parcialmente, indicará menor confianza. Cuando falte información fundamental, preguntará antes de recomendar. Y cuando el perfil se complete, recalculará.

## 6.21 Cómo se gestiona la información contradictoria

BlueHeart deberá asumir que los perfiles humanos pueden contener contradicciones. Una persona puede responder de una forma en una pregunta y expresar posteriormente una posición aparentemente diferente. Esto no deberá interpretarse automáticamente como falta de sinceridad — las contradicciones podrán aparecer por diferencias de contexto, mala interpretación de una pregunta, cambios de opinión, ambivalencia real, respuestas demasiado generales, evolución personal, errores de respuesta, o inferencias incorrectas de la IA. El sistema deberá detectarlas, clasificarlas y resolverlas cuando sean relevantes.

**1. Contradicción no significa error.** Dos respuestas diferentes pueden describir aspectos distintos de una misma persona — por ejemplo, «necesito bastante espacio personal» y «me gusta pasar mucho tiempo con mi pareja» no son necesariamente incompatibles. Por tanto, BlueHeart deberá diferenciar entre contradicción aparente y contradicción real.

**2. Detección estructurada.** Las contradicciones relevantes deberán estar asociadas a reglas previamente definidas. La IA podrá detectar posibles inconsistencias lingüísticas, pero no deberá modificar directamente el perfil. Conceptualmente: `possible_conflict = true` → evaluación → confirmación si es necesaria → actualización de variable.

**3. Niveles de contradicción.** BlueHeart podrá clasificar las contradicciones como leves, moderadas, relevantes o críticas para el cálculo. Una contradicción sobre una preferencia secundaria no deberá tener el mismo tratamiento que una contradicción sobre una variable estructural.

**4. Prioridad de información.** Cuando existan datos diferentes sobre una misma variable, BlueHeart podrá utilizar una jerarquía como: 1) respuesta directa y explícitamente confirmada; 2) respuesta directa reciente; 3) varias respuestas consistentes entre sí; 4) variable derivada con elevada confianza; 5) inferencia de IA. La información inferida no deberá imponerse a una declaración explícita sin solicitar aclaración.

**5. Contradicciones importantes.** Cuando una contradicción pueda alterar significativamente una compatibilidad, un no negociable, una incompatibilidad crítica, una dimensión estructural, o la elegibilidad de una recomendación, BlueHeart deberá solicitar aclaración antes de tomar una decisión definitiva.

**6. La IA como herramienta de aclaración.** La IA podrá formular preguntas como: «En una respuesta indicas que tener hijos es importante para ti, pero en otra dices que podrías imaginar una vida sin ellos. ¿Cuál de estas opciones representa mejor tu posición actual?». La finalidad será obtener información más precisa, no decidir cuál de las respuestas es verdadera.

**7. Impacto sobre la confianza.** Mientras exista una contradicción relevante sin resolver: la confianza de la variable disminuirá, podrá disminuir la confianza de la dimensión, podrá disminuir la confianza global. Si la contradicción afecta a una condición necesaria para el matching, la recomendación podrá quedar pendiente.

**8. Contradicciones entre información antigua y reciente.** Cuando una persona actualice claramente una posición, la información reciente podrá sustituir a la anterior para los cálculos actuales. Sin embargo, BlueHeart deberá conservar el historial cuando resulte necesario para trazabilidad.

**9. Contradicciones derivadas de la IA.** Si una inferencia de IA contradice una respuesta explícita del usuario, el sistema deberá priorizar inicialmente la respuesta del usuario. La IA podrá señalar la inconsistencia y pedir aclaración cuando sea relevante — no deberá corregir al usuario automáticamente.

**10. Resultado estructurado.** Las contradicciones relevantes podrán registrar: variables afectadas, respuestas implicadas, severidad, estado, pregunta de aclaración, resolución, fecha y confianza posterior.

### Principio fundamental

BlueHeart deberá entender que las personas pueden ser complejas sin ser incoherentes. Detectará contradicciones. No las juzgará. Preguntará cuando importen. Y nunca permitirá que una inferencia incierta modifique silenciosamente una característica fundamental del usuario.

## 6.22 Cómo se establece el umbral de recomendación

BlueHeart deberá diferenciar entre calcular compatibilidad y decidir qué personas recomienda. El algoritmo podrá calcular un porcentaje entre dos perfiles sin que eso implique que ambos deban ser presentados.

**1. El porcentaje no será el único criterio.** La elegibilidad para recomendación deberá considerar el porcentaje global, las incompatibilidades críticas, la compatibilidad estructural, la cobertura, la confianza, las variables pendientes y las reglas especiales. Por tanto: porcentaje alto ≠ recomendación automática.

**2. Umbral global.** BlueHeart podrá establecer un porcentaje mínimo de compatibilidad para que dos perfiles sean candidatos a recomendación: conceptualmente `compatibility_percentage ≥ threshold`. El valor concreto no deberá fijarse todavía como definitivo — la beta permitirá observar la distribución real de resultados.

**3. Umbral inicial experimental.** Para poder desarrollar y probar el sistema será necesario utilizar un valor provisional, identificado como `beta_threshold` y no como una conclusión científica. Podrá modificarse fácilmente mediante configuración sin cambiar el código del algoritmo.

**4. Condiciones adicionales.** Una comparación podrá considerarse recomendable únicamente cuando se cumpla: compatibilidad global suficiente, ausencia de incompatibilidades críticas, confianza mínima suficiente, cobertura suficiente, y mínimos estructurales cuando correspondan.

**5. Estados de recomendación.** BlueHeart podrá utilizar estados internos como `RECOMMENDED` (cumple todos los criterios), `RECOMMENDED_WITH_NOTES` (cumple los criterios, pero existen diferencias relevantes que conviene explicar), `PENDING` (falta información importante), `BELOW_THRESHOLD` (información suficiente pero compatibilidad insuficiente), `CRITICAL_CONFLICT` (existe una regla crítica).

**6. No convertir el umbral en una frontera absoluta de verdad.** Una pareja con 69 % y otra con 70 % no son necesariamente cualitativamente distintas. Por tanto, si el umbral provisional fuera 70 %, BlueHeart no deberá comunicar «69 % = incompatible, 70 % = compatible». El umbral será una herramienta de selección, no una frontera científica.

**7. Zona de incertidumbre.** El sistema podrá establecer una zona próxima al umbral donde determinadas comparaciones requieran análisis adicional — solicitar información adicional, aumentar cobertura, revisar variables relevantes. Los límites concretos se calibrarán posteriormente.

**8. Umbrales por dimensión.** Determinadas dimensiones estructurales podrán disponer de mínimos propios, impidiendo que un porcentaje global favorable oculte una puntuación extremadamente baja en un área fundamental. Los umbrales deberán ser pocos y justificables.

**9. Umbral y disponibilidad de candidatos.** BlueHeart no deberá reducir automáticamente sus criterios simplemente porque existan pocos candidatos disponibles. Si ningún perfil cumple las condiciones, el sistema podrá no recomendar a nadie — esto será preferible a presentar una combinación de baja calidad únicamente para generar actividad.

**10. Beta.** Durante la beta deberán registrarse: distribución de porcentajes, número de candidatos por usuario, porcentaje de comparaciones que superan cada posible umbral, valoración humana de las recomendaciones, y casos próximos al umbral. Esto permitirá calibrar posteriormente el valor.

### Principio fundamental

BlueHeart no deberá recomendar a alguien simplemente porque sea «la mejor opción disponible». Deberá recomendar únicamente cuando exista un nivel mínimo suficiente de compatibilidad y confianza. A veces, la mejor recomendación será no recomendar todavía a nadie.

## 6.23 Cómo se construye el ranking de candidatos

Una vez identificadas las comparaciones elegibles, BlueHeart deberá ordenar los candidatos para determinar cuáles presentan mayor compatibilidad para cada usuario. El ranking será posterior al motor de elegibilidad: primero se decide «¿puede recomendarse esta combinación?», después «¿en qué posición debería aparecer respecto a las demás?».

**1. Solo participan candidatos elegibles.** Un perfil con incompatibilidad crítica no deberá aparecer por encima de otro simplemente porque su porcentaje descriptivo sea mayor. Conceptualmente: filtrado de elegibilidad → ranking. Nunca: ranking → filtrado.

**2. Puntuación principal.** El porcentaje global será el principal elemento cuantitativo del ranking — mayor compatibilidad → mejor posición. Sin embargo, podrán utilizarse criterios secundarios para resolver resultados próximos.

**3. Confianza como criterio secundario.** Supongamos candidato A con 86 % de compatibilidad y confianza limitada, frente a candidato B con 85 % y confianza muy alta. BlueHeart no deberá asumir necesariamente que A es una recomendación superior — la confianza podrá actuar como criterio secundario de ranking sin alterar el porcentaje de compatibilidad.

**4. Compatibilidad estructural.** Cuando dos candidatos tengan resultados globales muy próximos, BlueHeart podrá favorecer al perfil con mejor encaje en dimensiones estructurales. Esta regla deberá estar previamente definida.

**5. Diferencias relevantes.** También podrá considerarse el número de diferencias relevantes, su intensidad, las asimetrías, y las necesidades fundamentales parcialmente insatisfechas — no para crear una nueva puntuación opaca, sino para resolver comparaciones muy próximas.

**6. Evitar falsa precisión.** Una diferencia entre 83,2 % y 83,1 % no deberá interpretarse como evidencia de que el primer candidato es significativamente mejor. BlueHeart podrá utilizar bandas o tolerancias internas — conceptualmente, si dos resultados se encuentran dentro de un margen pequeño, `ranking_tie = true` y podrán utilizarse criterios secundarios.

**7. Ranking bilateral.** La compatibilidad deberá ser fundamentalmente bilateral. Si A aparece como candidato para B, la combinación deberá ser válida también desde las necesidades y límites de B hacia A. BlueHeart no deberá construir recomendaciones exclusivamente desde la perspectiva de un usuario.

**8. Ranking no significa valor humano.** La posición dentro del ranking deberá interpretarse únicamente como grado de compatibilidad calculado con ese usuario concreto — no representa calidad personal, atractivo, valor ni deseabilidad general. Un usuario podrá ocupar posiciones completamente diferentes al compararse con perfiles distintos.

**9. Ranking dinámico.** Cuando cambia un perfil, se completa información, se modifica un no negociable, cambia una versión del algoritmo, o aparecen nuevos candidatos, el ranking podrá recalcularse.

**10. No mostrar necesariamente el ranking completo.** Internamente BlueHeart podrá ordenar numerosos candidatos — eso no significa que el usuario deba ver «eres la opción número 17». La interfaz deberá evitar convertir la experiencia en una competición.

**11. Diversidad de recomendaciones.** BlueHeart no deberá introducir diversidad artificial reduciendo la compatibilidad. Sin embargo, cuando varios candidatos se encuentren dentro de una misma banda de compatibilidad, podrá evitar mostrar siempre perfiles prácticamente idénticos si existen otras combinaciones igualmente válidas. Esta regla deberá utilizarse con cuidado y nunca superar criterios fundamentales.

**12. Beta con 20 perfiles.** En una beta con 20 usuarios, BlueHeart podrá comparar cada perfil con todos los perfiles potencialmente elegibles, eliminar combinaciones bloqueadas, ordenar las restantes, analizar los primeros candidatos, y comparar el ranking algorítmico con la valoración posterior de los participantes. Esto permitirá empezar a observar si el orden producido por el algoritmo tiene sentido.

### Principio fundamental

BlueHeart no buscará «la persona con mayor puntuación disponible». Buscará «las personas que superan nuestras condiciones mínimas y, dentro de ellas, cuáles presentan el encaje más sólido». Primero: elegibilidad. Después: ranking.

## 6.24 Cómo evitar coincidencias forzadas

BlueHeart deberá poder concluir que actualmente no existe una recomendación suficientemente buena para un usuario. La ausencia de candidatos adecuados será un resultado válido del algoritmo. El sistema no deberá fabricar matches para mantener actividad, aumentar métricas o evitar que el usuario espere.

**1. No siempre tiene que existir un match.** Si ningún perfil supera las condiciones de elegibilidad: `resultado = sin recomendación disponible`. Esto no deberá interpretarse como un fallo del sistema — será una consecuencia normal de aplicar criterios de compatibilidad.

**2. No bajar automáticamente el umbral.** BlueHeart no deberá actuar así: «no existen candidatos ≥ 75 % → bajar a 70 % → si tampoco existen, bajar a 65 %». El umbral deberá mantenerse según la versión metodológica vigente.

**3. No ignorar reglas críticas.** La falta de candidatos nunca justificará ignorar un no negociable, reducir una incompatibilidad crítica, inventar flexibilidad, o utilizar información insuficiente como si estuviera confirmada.

**4. No inflar porcentajes.** El algoritmo no deberá modificar pesos dinámicamente para producir resultados más altos cuando exista poca oferta de candidatos. Los mismos dos perfiles deberán producir el mismo resultado independientemente de cuántos usuarios existan en la plataforma.

**5. Separar compatibilidad de disponibilidad.** BlueHeart deberá diferenciar «no hemos encontrado todavía una persona suficientemente compatible» de «no existen personas compatibles contigo» — la segunda afirmación sería injustificable. El resultado solo describe la base de usuarios disponible en ese momento.

**6. Ampliación progresiva de la búsqueda.** Cuando no existan candidatos, BlueHeart podrá ampliar la distancia geográfica (si el usuario lo permite), determinados filtros de preferencia, o rangos previamente definidos como flexibles — pero nunca podrá modificar no negociables, límites expresamente establecidos, o reglas críticas. Cualquier ampliación deberá respetar las preferencias del usuario.

**7. Solicitar revisión de preferencias.** BlueHeart podrá permitir que el usuario revise voluntariamente determinados criterios — por ejemplo: «Actualmente no encontramos perfiles que cumplan todos tus criterios. Si quieres, puedes revisar algunas de tus preferencias». No deberá presionarlo para modificar necesidades o límites.

**8. Esperar es una opción válida.** Si no existe una combinación suficientemente buena, BlueHeart podrá esperar — nuevos usuarios, perfiles actualizados o nueva información podrán generar futuras recomendaciones.

**9. Métricas de producto no deben modificar el algoritmo.** BlueHeart deberá mantener una separación estricta entre objetivos de negocio y reglas de compatibilidad. Métricas como número de matches, tiempo dentro de la aplicación, número de conversaciones o frecuencia de apertura no deberán utilizarse para alterar el porcentaje o reducir los criterios de compatibilidad con el objetivo de aumentar engagement.

**10. La IA tampoco podrá forzar recomendaciones.** La IA no podrá decidir «aunque está por debajo del umbral, creo que deberían conocerse». Si el algoritmo determina que una combinación no es elegible, la IA deberá respetar ese resultado.

**11. Evitar el efecto catálogo.** BlueHeart no deberá necesitar presentar constantemente numerosos perfiles. Una filosofía posible será: menos recomendaciones, pero mejor justificadas — coherente con el objetivo del proyecto de priorizar calidad sobre volumen.

**12. Beta.** Durante la beta será especialmente importante registrar usuarios sin candidatos, motivos, umbrales responsables, reglas críticas más frecuentes, filtros responsables, y distribución de compatibilidades. Si prácticamente nadie encuentra candidatos, puede existir un problema de calibración; si prácticamente todos encuentran numerosos candidatos con porcentajes muy elevados, también. Ambos extremos deberán analizarse.

### Principio fundamental

BlueHeart deberá estar diseñado para encontrar compatibilidad, no para fabricar coincidencias. Por tanto: no bajará artificialmente sus criterios, no manipulará porcentajes, no ignorará límites, no confundirá falta de oferta con falta de compatibilidad personal. Y cuando no exista una combinación suficientemente sólida: esperar será una respuesta legítima del sistema.

## 6.25 Reproducibilidad del algoritmo

El Sistema de Compatibilidad BlueHeart deberá ser reproducible. Esto significa que los mismos perfiles, utilizando exactamente la misma versión del algoritmo y la misma información, deberán producir siempre el mismo resultado. La inteligencia artificial no podrá introducir variaciones aleatorias en el cálculo.

**1. Principio de determinismo.** Conceptualmente: mismos perfiles + mismas reglas + mismos pesos + misma versión = mismo resultado. Esto deberá aplicarse a variables, dimensiones, porcentaje global, confianza, reglas críticas, elegibilidad y ranking.

**2. Separación entre algoritmo e IA.** La IA podrá conversar, interpretar respuestas cuando corresponda, estructurar información, detectar posibles contradicciones y generar explicaciones. Pero una vez que los datos estructurados estén disponibles, el cálculo deberá pertenecer al algoritmo determinista. La IA no podrá decidir modificar un 78 % y convertirlo en 82 % porque considere que dos personas parecen compatibles.

**3. Datos de entrada reproducibles.** Cada cálculo deberá identificar qué versiones de los perfiles fueron utilizadas — conceptualmente `profile_A_version: 17`, `profile_B_version: 9`, `algorithm_version: 0.1.0`. Esto permitirá reproducir posteriormente la comparación.

**4. Configuración reproducible.** Los pesos, matrices, umbrales, curvas, reglas críticas e interacciones deberán pertenecer a una configuración identificable. Modificar una configuración deberá generar una nueva versión.

**5. Pruebas automatizadas.** El algoritmo deberá disponer de perfiles de prueba con resultados esperados: perfiles prácticamente idénticos, diferencias moderadas, complementariedad, no negociable unilateral, conflicto crítico bilateral, información incompleta, flexibilidad asimétrica, numerosas coincidencias menores frente a una incompatibilidad estructural. Cada modificación deberá comprobar que no produce efectos inesperados.

**6. Tolerancia matemática.** Cuando se utilicen números decimales, la implementación deberá definir reglas consistentes de precisión, redondeo y normalización. La interfaz podrá mostrar porcentajes enteros mientras el motor conserva mayor precisión.

**7. Aleatoriedad fuera del cálculo.** Si BlueHeart utiliza aleatoriedad para elementos de producto, como variar el orden de perfiles con resultados prácticamente empatados, esa aleatoriedad deberá estar separada del cálculo de compatibilidad. Dos usuarios no deberán cambiar de 82 % a 79 % por una operación aleatoria.

### Principio fundamental

El porcentaje de BlueHeart deberá ser una consecuencia reproducible de datos y reglas — no una opinión generada cada vez que se solicita una comparación.

## 6.26 Versionado del algoritmo

BlueHeart deberá mantener versiones identificables de su Sistema de Compatibilidad. El algoritmo evolucionará: cambiarán pesos, reglas, curvas, umbrales, variables, interacciones y sistemas de confianza. Por tanto, cada resultado deberá poder asociarse a la metodología exacta que lo produjo.

**1. Identificador de versión.** Conceptualmente podrá utilizarse un sistema como `BlueHeart Compatibility Engine v0.1.0`. Durante desarrollo y beta podrán existir v0.1.1, v0.2.0, etc. La nomenclatura técnica definitiva podrá adaptarse posteriormente.

**2. Tipos de cambios.** Conceptualmente: cambio menor (correcciones técnicas que no modifican intencionadamente la metodología); cambio metodológico (modificación de pesos, reglas, matrices, funciones o umbrales capaz de alterar resultados); cambio estructural (introducción o modificación importante de dimensiones, variables o arquitectura). Los cambios metodológicos deberán quedar claramente identificados.

**3. Configuración asociada a versión.** Cada versión deberá conservar pesos de dimensiones, pesos de variables, matrices, curvas, reglas críticas, interacciones, compensaciones, umbrales y parámetros de confianza. La versión del algoritmo y la versión de configuración deberán registrarse de forma independiente cuando resulte necesario: `algorithm_version` identificará la versión de la lógica y arquitectura del motor; `configuration_version` identificará el conjunto concreto de pesos, matrices, curvas, umbrales, reglas e interacciones utilizado durante el cálculo. De este modo, BlueHeart podrá modificar configuraciones experimentales sin confundir esos cambios con modificaciones del código principal del algoritmo.

**4. No sobrescribir versiones antiguas.** Cuando una configuración cambie, BlueHeart no deberá borrar simplemente la anterior — la versión utilizada en cálculos históricos deberá conservarse mientras sea necesaria para auditoría.

**5. Resultados asociados a versión.** Cada comparación deberá almacenar `algorithm_version` y, cuando corresponda, `configuration_version`, permitiendo saber por qué un resultado antiguo puede ser diferente del actual.

**6. Comparación entre versiones.** Durante la beta será especialmente útil ejecutar los mismos perfiles con distintas configuraciones — por ejemplo, v0.1 → 76 %, v0.2 → 82 %. BlueHeart podrá analizar exactamente qué cambios provocaron esa diferencia.

**7. Cambios controlados.** No deberán modificarse simultáneamente numerosos parámetros sin registrar qué se cambió. Siempre que sea posible, las pruebas deberán permitir identificar qué modificación mejora o empeora los resultados.

**8. Versiones experimentales.** Durante el desarrollo podrán existir configuraciones experimentales que no afecten a los usuarios reales, permitiendo probar nuevos pesos, umbrales, funciones e interacciones antes de convertirlas en versión activa.

### Principio fundamental

BlueHeart deberá poder responder siempre «¿con qué versión del método se calculó este resultado?». Si no podemos responder esa pregunta, no podremos validar seriamente el algoritmo.

## 6.27 Trazabilidad de cada resultado

BlueHeart deberá poder reconstruir cómo se obtuvo cualquier resultado de compatibilidad. No será suficiente almacenar únicamente «83 %» — el sistema deberá conocer el camino que produjo ese porcentaje.

**1. Cadena de trazabilidad.** Conceptualmente: respuestas → variables construidas → comparaciones entre variables → modificadores → resultados por dimensión → interacciones → porcentaje global → confianza → reglas de elegibilidad → recomendación. Esta cadena deberá poder auditarse.

**2. Trazabilidad de variable.** Para cada comparación relevante deberá poder conocerse: variable, valor de A, valor de B, regla utilizada, resultado base, importancia efectiva, modificadores, resultado final, confianza.

**3. Trazabilidad de dimensión.** Para cada dimensión: variables utilizadas, pesos, variables ausentes, resultado base, modificadores, resultado final, cobertura, confianza, reglas relevantes.

**4. Trazabilidad global.** Para el porcentaje final: resultados de dimensiones, pesos de dimensiones, interacciones, resultado global, confianza, estado de elegibilidad, reglas críticas, versión.

**5. Explicación técnica y explicación al usuario.** BlueHeart deberá distinguir entre la traza técnica (información detallada necesaria para auditoría) y la explicación comprensible (la que la IA construye para el usuario a partir de la información permitida).

**6. La IA explica; no inventa.** Si BlueHeart afirma «vuestro proyecto de vida es uno de vuestros principales puntos de compatibilidad», deberá existir evidencia real dentro de la traza que justifique esa afirmación. La IA no podrá crear razones atractivas que no hayan influido realmente en el cálculo.

**7. Privacidad.** Trazabilidad no significa revelar todas las respuestas de otro usuario. La explicación deberá respetar las reglas de privacidad definidas en BlueHeart — el sistema puede conocer internamente por qué existe una diferencia sin mostrar literalmente la respuesta privada de la otra persona.

**8. Registro de decisiones críticas.** Las decisiones especialmente importantes deberán disponer de trazabilidad reforzada: bloqueo de recomendación, no negociables, incompatibilidades críticas, umbrales estructurales, información insuficiente.

**9. Utilidad durante la beta.** La trazabilidad permitirá analizar casos como «esta pareja ha recibido 61 %, pero los participantes consideran que encajan mucho mejor», reconstruyendo qué dimensiones redujeron el resultado, qué variables fueron responsables, qué pesos se utilizaron, si existe una regla mal calibrada, y si el problema procede del cuestionario o del algoritmo. Sin esta información, ajustar el sistema sería prácticamente ensayo y error.

### Principio fundamental

BlueHeart deberá ser capaz de explicar internamente cada punto relevante que suma, resta, modifica o bloquea una comparación. Ningún resultado importante deberá aparecer como una caja negra.

## 6.28 Cuándo y cómo se recalculan las compatibilidades

Las compatibilidades de BlueHeart no serán necesariamente permanentes. Los perfiles cambian, la información aumenta, el algoritmo evoluciona. Por tanto, el sistema deberá establecer cuándo debe producirse un nuevo cálculo.

**1. Cambio relevante del perfil.** Una comparación deberá recalcularse cuando cambie una variable utilizada en ella: cambio de posición, cambio de importancia, cambio de flexibilidad, nuevo no negociable, eliminación de un no negociable, confirmación de una inferencia, o resolución de una contradicción.

**2. Nueva información.** Cuando una pregunta adicional permita completar una variable anteriormente desconocida, las comparaciones afectadas deberán poder actualizarse — especialmente importante para el matching adaptativo.

**3. Cambio de algoritmo.** Cuando BlueHeart active una nueva versión metodológica, podrá recalcular las compatibilidades vigentes utilizando esa nueva versión. El resultado anterior deberá conservar su versión histórica cuando sea necesario.

**4. No recalcular innecesariamente todo.** BlueHeart deberá intentar identificar qué comparaciones están afectadas por un cambio — si el Usuario A modifica su perfil, deberán recalcularse principalmente las comparaciones relacionadas con A, sin necesidad de recalcular automáticamente todas las parejas existentes en la plataforma.

**5. Dependencias.** El sistema deberá conocer qué variables afectan a variables derivadas, dimensiones, interacciones y reglas críticas. Si cambia una respuesta que alimenta una variable derivada, deberán actualizarse también los resultados dependientes.

**6. Estado obsoleto.** Cuando un perfil cambie pero una comparación todavía no haya sido recalculada, el resultado anterior deberá poder marcarse internamente como `stale` o equivalente — no deberá presentarse como resultado actual si ya no representa los datos vigentes.

**7. Recalculo de ranking.** Cuando cambie una compatibilidad relevante: se actualizará la comparación, se reevaluará la elegibilidad, se actualizará el ranking correspondiente.

**8. Recalculo por versión.** Durante la beta podrá ser especialmente útil recalcular todos los perfiles cuando se pruebe una nueva configuración, permitiendo comparar antes y después sobre exactamente la misma muestra.

**9. Historial.** Cuando sea metodológicamente útil, BlueHeart podrá conservar el resultado anterior, el resultado nuevo, el motivo del recálculo, la versión anterior, la versión nueva y la fecha — permitiendo analizar la evolución del algoritmo.

**10. La IA no activa cambios arbitrarios.** La IA podrá generar nueva información estructurada o detectar la necesidad de aclaración, pero el recálculo deberá activarse mediante reglas del sistema cuando cambien los datos relevantes.

**11. Beta.** Durante la primera beta será útil registrar cuánto cambian los porcentajes después de preguntas adicionales, resolución de contradicciones, confirmación de variables, ajustes de pesos y cambios de reglas. Una variación excesiva ante pequeñas modificaciones podría indicar inestabilidad del algoritmo.

### Principio fundamental

BlueHeart deberá mantener siempre sincronizados el perfil actual, la versión actual del algoritmo, y el resultado actual de compatibilidad. Cuando alguno de los elementos que afectan al cálculo cambie: el resultado deberá poder recalcularse de forma controlada, reproducible y trazable.

## 6.29 Cómo se valida y calibra el algoritmo

La primera versión del Sistema de Compatibilidad BlueHeart deberá comenzar necesariamente con determinadas decisiones metodológicas provisionales. Antes de disponer de datos propios, BlueHeart necesitará establecer pesos iniciales, funciones de comparación, matrices, curvas, umbrales, reglas de complementariedad, límites de compensación, reglas críticas y parámetros de confianza. Estos valores constituirán la primera hipótesis funcional del Método BlueHeart — no deberán presentarse como verdades científicas definitivas.

**1. Diferencia entre diseño y validación.** Diseñar el algoritmo significa establecer una primera representación matemática de la compatibilidad. Validar el algoritmo significa comprobar posteriormente si esa representación produce resultados coherentes y útiles al aplicarse a personas reales. Por tanto, la versión inicial deberá entenderse como `BlueHeart Compatibility Engine v0.1`, no como un modelo definitivo.

**2. Validación técnica.** Antes de utilizar perfiles reales, BlueHeart deberá probar el algoritmo mediante perfiles artificiales diseñados específicamente para llevar sus reglas a diferentes extremos: dos perfiles altamente compatibles; dos perfiles muy similares pero con similitudes potencialmente problemáticas; dos perfiles diferentes pero complementarios; dos perfiles con diferencias gestionables; dos perfiles con baja compatibilidad general; conflicto no negociable unilateral; conflicto no negociable bilateral; alta compatibilidad general con incompatibilidad crítica; alta compatibilidad en preferencias y baja compatibilidad estructural; flexibilidad bilateral; flexibilidad unilateral; información incompleta; información contradictoria; baja confianza; empate entre candidatos. El resultado esperado de cada caso deberá establecerse antes de ejecutar la prueba.

**3. Pruebas de sensibilidad.** BlueHeart deberá analizar cuánto cambia el resultado cuando cambia ligeramente una respuesta. Por ejemplo, si modificar una respuesta de 3/5 → 4/5 provoca que una compatibilidad pase de 82 % → 63 % sin una razón estructural clara, podría existir un problema de sensibilidad excesiva. El sistema deberá buscar resultados suficientemente estables.

**4. Pruebas de extremos.** También deberán probarse combinaciones extremas para comprobar que los porcentajes permanecen dentro del rango permitido, las reglas críticas funcionan, las compensaciones respetan sus límites, los pesos están normalizados, no aparecen resultados imposibles, y la información ausente no genera puntuaciones artificiales.

**5. Primera beta humana.** Una vez superadas las pruebas técnicas, BlueHeart podrá realizar una primera prueba con un grupo reducido de usuarios. El objetivo inicial no será demostrar científicamente que BlueHeart predice relaciones duraderas, sino observar si los perfiles representan razonablemente a los usuarios, las comparaciones resultan coherentes, los porcentajes parecen razonables, las principales fortalezas tienen sentido, las diferencias detectadas son reconocibles, las recomendaciones parecen plausibles, y si existen resultados claramente absurdos.

**6. Feedback estructurado.** Después de determinadas comparaciones, BlueHeart podrá recoger información como: ¿te representa correctamente tu perfil?, ¿te parece razonable esta compatibilidad?, ¿reconoces las fortalezas señaladas?, ¿reconoces las diferencias señaladas?, ¿hay algo importante que el sistema no haya detectado?, ¿consideras que alguna cuestión ha recibido demasiado o demasiado poco peso? El diseño definitivo de estas preguntas pertenecerá al sistema de aprendizaje y validación.

**7. Calibración.** Cuando aparezcan patrones repetidos, BlueHeart podrá modificar pesos, curvas, matrices, umbrales, modificadores y reglas — pero los cambios deberán realizarse de forma controlada y versionada.

**8. No ajustar por casos individuales.** Una única persona que no esté de acuerdo con un resultado no deberá provocar automáticamente un cambio metodológico. BlueHeart deberá buscar patrones.

**9. Validación progresiva.** La validación deberá continuar conforme aumente el número de usuarios: pruebas artificiales → beta reducida → beta ampliada → datos longitudinales → validación continua.

### Principio fundamental

La primera versión del algoritmo será una hipótesis funcional. BlueHeart deberá tener suficiente confianza para probarla, pero suficiente humildad metodológica para modificarla cuando los datos demuestren que puede mejorar.

## 6.30 Cómo aprende el algoritmo de datos reales

BlueHeart podrá mejorar progresivamente utilizando información obtenida de su funcionamiento real. Sin embargo, aprender no significará permitir que un sistema automático modifique libremente las reglas de compatibilidad. La evolución deberá ser controlada, auditable y metodológicamente justificable.

**1. Qué datos pueden resultar útiles.** Con los permisos y condiciones correspondientes, BlueHeart podrá analizar información agregada relacionada con la valoración de recomendaciones, el interés mutuo, el inicio de conversaciones, la continuidad del contacto, la decisión de conocerse, la valoración posterior a una cita, la percepción de compatibilidad, la continuidad temporal, y los motivos declarados de falta de encaje. La definición legal y de privacidad de esta recogida de información deberá establecerse en los bloques correspondientes.

**2. Diferenciar métricas de producto y compatibilidad.** BlueHeart deberá evitar interpretar automáticamente «más mensajes = mayor compatibilidad», «más tiempo en la aplicación = mejor relación», «más matches = mejor algoritmo». Estas pueden ser métricas de producto, no necesariamente indicadores de compatibilidad relacional.

**3. Señales de validación.** Los datos deberán utilizarse para comprobar preguntas como: ¿las parejas con mayor puntuación perciben mayor compatibilidad?, ¿qué dimensiones parecen estar sobreponderadas o infraponderadas?, ¿qué diferencias consideradas importantes resultan poco relevantes en la práctica?, ¿qué combinaciones generan problemas que el algoritmo no está captando?, ¿qué reglas de complementariedad funcionan realmente?

**4. No aprendizaje automático sin control.** BlueHeart no deberá permitir inicialmente que un modelo modifique automáticamente pesos o reglas directamente en producción. El proceso deberá ser: datos → análisis → hipótesis de mejora → prueba → validación → nueva versión → despliegue controlado.

**5. Evitar optimizar por engagement.** El algoritmo no deberá aprender a recomendar perfiles simplemente porque generen más clics, más mensajes, más tiempo de uso o más aperturas, si esos comportamientos no representan mejor compatibilidad. BlueHeart deberá mantener alineado el aprendizaje con su propósito.

**6. Evitar sesgos derivados de la muestra.** Los primeros usuarios de BlueHeart no representarán necesariamente a toda la población. Las conclusiones obtenidas de muestras pequeñas deberán tratarse con prudencia — una regla que funciona en una primera beta no deberá convertirse automáticamente en una verdad universal.

**7. Datos longitudinales.** A largo plazo, determinados indicadores podrán resultar especialmente valiosos: evolución de la percepción de compatibilidad, continuidad de la relación, satisfacción, gestión de diferencias, cambios de valoración con el tiempo. Estos datos podrán permitir una validación mucho más profunda que el feedback inmediatamente posterior a un match.

**8. Aprendizaje versionado.** Toda modificación derivada de datos reales deberá producir una versión identificable del algoritmo, permitiendo comparar el modelo anterior frente al modelo nuevo.

### Principio fundamental

BlueHeart deberá aprender de las personas sin convertirlas en simples métricas de engagement. El objetivo del aprendizaje será mejorar la representación de la compatibilidad, no conseguir que los usuarios permanezcan más tiempo dentro de la aplicación.

## 6.31 Límites del algoritmo

El Sistema de Compatibilidad BlueHeart deberá reconocer expresamente aquello que puede y aquello que no puede determinar. Un algoritmo puede analizar información, encontrar patrones, comparar posiciones y detectar posibles compatibilidades. No puede garantizar el resultado de una relación humana.

**1. El algoritmo no predice el amor.** Un porcentaje elevado no significa «estas dos personas se enamorarán». La atracción, el momento vital, la química, las experiencias compartidas y numerosos factores no pueden reducirse completamente a un cuestionario.

**2. El algoritmo no garantiza relaciones exitosas.** Un 90 % de compatibilidad no representa 90 % de probabilidad de éxito — representa únicamente el grado de compatibilidad calculado según el Método BlueHeart y la información disponible.

**3. Compatibilidad no significa ausencia de conflictos.** Dos personas altamente compatibles pueden discutir, cometer errores, cambiar, dejar de quererse. BlueHeart intenta mejorar la selección inicial, no eliminar la complejidad de las relaciones humanas.

**4. Baja compatibilidad no significa imposibilidad.** Personas con una puntuación inferior podrían construir una relación satisfactoria. El algoritmo representa una estimación metodológica, no una ley.

**5. El algoritmo no diagnostica.** BlueHeart no deberá utilizar el algoritmo para diagnosticar trastornos psicológicos, patologías, estilos clínicos o condiciones médicas. Las variables psicológicas deberán utilizarse exclusivamente dentro de los límites definidos por el Método BlueHeart.

**6. El algoritmo no determina el valor de una persona.** Una puntuación baja entre A y B significa bajo encaje entre A y B según determinadas variables — no significa que A o B sean peores personas, menos deseables, o menos capaces de mantener una relación. La compatibilidad siempre será relacional.

**7. El algoritmo no sustituye la decisión humana.** BlueHeart podrá recomendar. La decisión de hablar, conocerse, continuar o iniciar una relación pertenecerá siempre a los usuarios.

**8. El algoritmo depende de la calidad de la información.** Si los usuarios responden de forma poco sincera, no se conocen bien, interpretan incorrectamente preguntas, o cambian con el tiempo, la precisión del sistema podrá verse afectada. Por ello existen mecanismos de confianza, actualización y recalculo.

**9. El algoritmo deberá comunicar incertidumbre.** Cuando exista información insuficiente o baja confianza, BlueHeart deberá reconocerlo — no deberá presentar una cifra como certeza cuando los datos no permiten sostenerla.

### Principio fundamental

BlueHeart utilizará tecnología para ayudar a las personas a tomar mejores decisiones. No para decidir sus vidas por ellas. El algoritmo deberá ser una herramienta de orientación. Nunca un veredicto sobre el amor.

## 6.32 Especificación técnica del motor de compatibilidad

El Bloque 6 deberá poder transformarse en una especificación técnica independiente destinada a implementar el Sistema de Compatibilidad BlueHeart. Esta especificación constituirá el puente entre el Método BlueHeart y el código.

**1. Flujo general del motor.** La implementación del Sistema de Compatibilidad seguirá conceptualmente las siguientes fases: cuestionario y conversación → respuestas estructuradas → construcción y validación de variables → Perfil de Compatibilidad estructurado → comprobación de cobertura, confianza y datos necesarios → evaluación preliminar de reglas críticas → comparación bilateral de variables → aplicación de modificadores propios de cada comparación → cálculo de compatibilidad por dimensiones → aplicación de interacciones internas y modificadores de dimensión → cálculo de compatibilidad global → aplicación de interacciones globales permitidas → cálculo del nivel de confianza → evaluación definitiva de reglas críticas, mínimos estructurales y cobertura → determinación del estado de elegibilidad → ranking entre candidatos elegibles → construcción de datos explicativos → explicación mediante IA. Las reglas críticas podrán evaluarse en más de una fase del flujo cuando resulte necesario para detectar conflictos lo antes posible; sin embargo, una misma regla crítica solo podrá producir un único efecto lógico sobre el resultado. Del mismo modo, cada interacción o modificador deberá aplicarse exclusivamente en la capa que tenga asignada.

**2. Componentes principales.** La implementación deberá separar conceptualmente módulos equivalentes a: Profile Builder (transforma respuestas válidas en variables estructuradas), Variable Comparison Engine (compara cada variable de dos perfiles), Dimension Engine (construye resultados por dimensión), Critical Rules Engine (evalúa incompatibilidades críticas), Interaction Engine (aplica interacciones permitidas), Compatibility Engine (construye el porcentaje global), Confidence Engine (calcula confianza y cobertura), Eligibility Engine (determina si la combinación puede recomendarse), Ranking Engine (ordena candidatos elegibles), y Explanation Data Builder (construye los datos que posteriormente utilizará la IA para explicar el resultado).

**3. Separación entre motor e IA.** La arquitectura deberá mantener una frontera clara: el ALGORITMO calcula; la IA interpreta información cuando esté permitido, conversa y explica. La IA no deberá alterar directamente pesos, puntuaciones, reglas críticas, porcentaje o elegibilidad.

**4. Configuración externa.** Deberán poder configurarse sin reescribir la lógica principal: variables, pesos, matrices, curvas, interacciones, compensaciones, reglas críticas, umbrales y parámetros de confianza.

**5. Resultado estándar.** Una comparación completa deberá devolver conceptualmente: `comparison_id`, `profile_A_version`, `profile_B_version`, `algorithm_version`, `configuration_version`, `compatibility_score`, `compatibility_percentage`, `confidence_score`, `coverage_score`, `eligibility_status`, `dimension_results`, `critical_conflicts`, `strengths`, `frictions`, `applied_rules`, `created_at`.

**6. Determinismo.** El motor deberá ser determinista. Las llamadas a modelos generativos deberán mantenerse fuera del núcleo matemático.

**7. Tests.** Cada componente deberá poder probarse independientemente. El sistema deberá disponer de unit tests, integration tests, casos sintéticos y regression tests, especialmente después de modificar configuraciones.

**8. Preparación para la beta.** La versión inicial no necesita implementar todas las sofisticaciones futuras. Deberá priorizar arquitectura correcta, variables esenciales, comparaciones principales, pesos configurables, reglas críticas, dimensiones, porcentaje, confianza, elegibilidad y trazabilidad. Las funciones avanzadas podrán añadirse progresivamente sin modificar los fundamentos.

### Principio fundamental

La primera implementación deberá ser simple suficiente para poder probarse, pero estructurada suficiente para poder crecer. BlueHeart no necesita construir en la primera beta el algoritmo definitivo — necesita construir una primera versión seria, reproducible y mejorable.

## 6.33 Modelo de datos mínimo del algoritmo

Para que la metodología pueda convertirse en código, BlueHeart deberá definir una estructura mínima común para representar variables, perfiles, comparaciones y resultados. Este modelo no pretende establecer todavía la arquitectura definitiva de base de datos — define la información que el motor necesitará conceptualmente.

**1. Definición de variable.** Cada variable deberá poder almacenar: `variable_id` (identificador único y estable), `dimension_id` (dimensión a la que pertenece), `name` (nombre interno), `description` (descripción metodológica de aquello que representa), `value_type` (booleano, categórico, ordinal, numérico, multiselección, derivado), `allowed_values` (valores o rango admitidos cuando corresponda), `comparison_type` (función utilizada para comparar la variable), `method_weight` (peso metodológico dentro de su dimensión), `algorithm_role` (función que desempeña: descriptiva, compatibilidad directa, compatibilidad condicionada, preferencia, necesidad relacional, estructural, informativa), `compensability` (grado en que sus diferencias pueden compensarse), `required_for_matching`, `critical_capable`, `non_negotiable_capable`, `interaction_model` (similitud, tolerancia a la diferencia, complementariedad o reglas específicas), `sensitive`, `dynamic`, `derived`, `version`. No todas las propiedades tendrán que utilizarse en todas las variables — esta estructura permitirá que el catálogo maestro describa tanto qué información contiene una variable como el comportamiento que deberá tener dentro del algoritmo.

**2. Valor de variable de usuario.** Conceptualmente: `user_id`, `variable_id`, `value`, `intensity`, `importance`, `partner_requirement`, `flexibility`, `non_negotiable`, `confidence`, `source`, `confirmed`, `completeness_status`, `updated_at`, `profile_version`. No todos estos campos serán obligatorios para todas las variables — su utilización dependerá de la definición establecida para cada variable dentro del catálogo maestro.

**3. Fuente del dato.** El campo `source` deberá permitir diferenciar, por ejemplo: `Direct answer`, `Adaptive answer`, `Derived`, `AI inference`, `User confirmation`. Esto será fundamental para calcular confianza y trazabilidad.

**4. Definición de dimensión.** Cada dimensión deberá disponer de: `dimension_id`, `name`, `method_weight`, `minimum_coverage`, `structural`, `minimum_score` (cuando corresponda), `version`.

**5. Regla de comparación.** Conceptualmente: `rule_id`, `variable_id`, `comparison_function`, `parameters`, `modifier_limits`, `application_layer` (indica la fase exacta del motor en la que la regla o sus modificadores deben aplicarse), `version`.

**6. Regla crítica.** Conceptualmente: `critical_rule_id`, `variables`, `conditions`, `required_confidence`, `action`, `version`.

**7. Interacción.** Conceptualmente: `interaction_id`, `variables`, `conditions`, `modifier`, `modifier_cap`, `directionality`, `version`, `application_layer` (indica si la interacción actúa durante la comparación de variables, el cálculo de dimensión o la combinación entre dimensiones).

**8. Resultado de variable.** Cada comparación podrá producir: `variable_id`, `value_A`, `value_B`, `base_score`, `adjusted_score`, `impact_A`, `impact_B`, `interaction_type`, `applied_modifiers`, `confidence`, `critical_conflict`.

**9. Resultado de dimensión.** Conceptualmente: `dimension_id`, `base_score`, `final_score`, `coverage`, `confidence`, `variables_used`, `missing_variables`, `modifiers`, `critical_conflicts`.

**10. Resultado global.** Conceptualmente: `comparison_id`, `user_A`, `user_B`, `profile_A_version`, `profile_B_version`, `algorithm_version`, `configuration_version`, `compatibility_score`, `compatibility_percentage`, `confidence_score`, `coverage_score`, `eligibility_status`, `dimension_results`, `critical_conflicts`, `strengths`, `frictions`, `created_at`.

**11. Historial de cálculo.** Cuando una comparación sea recalculada deberá poder registrarse: `previous_comparison_id`, `new_comparison_id`, `recalculation_reason`, `previous_algorithm_version`, `new_algorithm_version`, `timestamp`.

**12. Datos para explicación.** El motor deberá generar una capa específica de información destinada a la IA, que deberá contener únicamente los elementos necesarios y permitidos para explicar: principales fortalezas, diferencias relevantes, complementariedades, advertencias, conflictos, y nivel de confianza. La IA no deberá necesitar acceder indiscriminadamente a todos los datos privados del otro usuario para generar una explicación.

**13. Preparación para crecimiento.** El modelo deberá permitir posteriormente añadir nuevas variables, dimensiones, reglas, funciones de comparación y versiones sin reconstruir completamente el sistema.

**14. Configuración frente a código.** Siempre que resulte razonable, los valores metodológicos deberán vivir en configuración y la lógica general deberá vivir en código. Por ejemplo: el código sabe ejecutar una matriz de compatibilidad; la configuración determina qué matriz utiliza la variable Hijos. Esto permitirá evolucionar BlueHeart mucho más rápidamente.

### Principio fundamental

El modelo de datos deberá representar fielmente el Método BlueHeart. No deberá obligar al método a adaptarse a una estructura técnica demasiado rígida. La arquitectura tecnológica estará al servicio de la metodología. No al contrario.
