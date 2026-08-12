# Formulario de selección de candidatos — piloto de BlueHeart

Pensado para Google Forms. Corregido para que las opciones de género,
orientación y a quién se busca sean **coherentes con lo que la app
realmente soporta hoy** (cerrado a mujer/hombre/prefiero no especificarlo,
sin opciones que luego no tendrían dónde encajar al rellenar el perfil
real) — ver `AVISO-PRIVACIDAD-PILOTO.md` para el mismo criterio aplicado
al piloto en sí.

## SECCIÓN 1 — Filtro

**1. ¿Qué edad tienes?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: 18, 19, 20... hasta 65+
*(No se comunica que se priorice 30–45 — se pregunta a todo el mundo y se selecciona después.)*

**2. ¿Dónde vives actualmente?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: Valencia capital / Área metropolitana de Valencia / Provincia de Valencia / Otra provincia de la Comunidad Valenciana / Otra

**3. ¿Con qué género te identificas?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: **Mujer / Hombre / Prefiero no especificarlo**
*(Se han quitado "No binario" y "Otra identidad": la app del piloto solo soporta estas tres opciones — ver `lib/matchFilter.js`. Si en el futuro se amplía el producto, se puede ampliar también este formulario.)*

**4. ¿Cuál es tu orientación sexual?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: **Heterosexual / Homosexual / Bisexual / Prefiero no indicarlo**
*(Se han quitado "Pansexual" y "Otra", para quedar alineado con el alcance que se definió para el piloto: heterosexual/homosexual/bisexual, cerrado a parejas. Esta respuesta es solo para vuestro análisis de reclutamiento — la app en sí no pregunta la orientación como etiqueta aparte, la deduce de género + a quién buscas.)*
*Dato de categoría especial bajo el RGPD — no publicar el formulario sin el texto de privacidad de la Sección 2 (más abajo).*

**5. ¿Qué personas te interesa conocer sentimentalmente?**
Tipo: Casillas de verificación · Obligatoria: Sí
Opciones: **Mujeres / Hombres**
*(Se ha quitado "Personas no binarias" por el mismo motivo que en la 3. Marcar ambas casillas equivale a "ambos" en la app.)*

**6. ¿Cuál es la edad MÍNIMA de una persona que estarías dispuesto/a a conocer?**
Tipo: Desplegable · Obligatoria: Sí — 18 a 65+

**7. ¿Y la edad MÁXIMA?**
Tipo: Desplegable · Obligatoria: Sí — 18 a 65+

**8. ¿Qué buscas actualmente?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: Una relación estable / Conocer a alguien con intención de que pueda surgir una relación / Conocer personas y ver qué ocurre / Una relación casual / Ahora mismo no estoy buscando conocer a nadie
*(Para este piloto se priorizan los dos primeros grupos.)*

**9. ¿Has utilizado alguna vez aplicaciones de citas?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: Sí, las utilizo actualmente / Sí, las he utilizado pero ya no / Las he probado muy poco / Nunca las he utilizado

**10. Si BlueHeart encontrara una persona que considera especialmente compatible contigo y su perfil te interesara, ¿estarías realmente dispuesto/a a conocerla?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: Sí / Probablemente sí / Dependería de la persona / Probablemente no / No

**11. ¿Estarías dispuesto/a a completar un cuestionario personal para que BlueHeart pueda analizar compatibilidad?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: Sí / Sí, si sé cómo se utilizarán mis datos / Depende de las preguntas / No

**12. ¿Te gustaría participar gratuitamente en esta primera prueba privada de BlueHeart?**
Tipo: Desplegable · Obligatoria: Sí
Opciones: Sí / Quizá, quiero recibir más información / No

---

## SECCIÓN 2 — Contacto

*Solo quienes respondan "Sí" o "Quizá" en la 12 llegan aquí.*

> **Antes de continuar:** al pasar a esta sección nos darás un dato de
> contacto (teléfono o email) y, en las preguntas anteriores, tu
> orientación sexual — un dato considerado especialmente protegido por el
> RGPD. Usamos esta información únicamente para valorar tu candidatura al
> piloto y contactar contigo sobre él; no se usa con fines publicitarios ni
> se comparte con terceros. Puedes pedir en cualquier momento que
> eliminemos tus respuestas escribiendo a **[tu email de contacto]**. Al
> continuar, entendemos que lo aceptas.

**13. Nombre**
Tipo: Respuesta corta · Obligatoria: Sí *(solo nombre, sin apellidos)*

**14. ¿Cómo prefieres que contactemos contigo?**
Tipo: Desplegable — WhatsApp / Email

**15. Teléfono o email**
Tipo: Respuesta corta · Obligatoria: Sí
Texto de ayuda: *Utilizaremos este dato únicamente para contactar contigo en relación con el piloto de BlueHeart, conforme a la información de privacidad indicada arriba.*

---
*Formulario de selección · Versión corregida · Agosto 2026*
