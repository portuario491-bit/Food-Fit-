# BlueHeart — app piloto

App funcional mínima para probar BlueHeart con un grupo reducido de
personas (10-20) antes de invertir en una versión de producción: cuenta,
foto y perfil, cuestionario de compatibilidad y comparación con el resto
de personas que ya hayan completado el suyo.

No es la versión final. Es deliberadamente pequeña para poder validar
rápido y barato — ver `docs/blueheart/` para el manual completo del
proyecto y `blueheart-demo.html` para el prototipo de producto sin backend.

## Qué incluye

- Registro / inicio de sesión (email + contraseña, con `bcryptjs`).
- Perfil con foto (subida, foto principal, borrado) y datos básicos.
- Género, a quién te gustaría conocer (hombres/mujeres/ambos) y rango de
  edad, como **filtro duro de emparejamiento** (`lib/matchFilter.js`) —
  independiente del algoritmo de compatibilidad, y siempre comprobado en
  los dos sentidos (que a ti te encaje alguien no basta, tiene que ser
  mutuo). Incluye "prefiero no especificarlo" para quien no se reconozca
  en hombre/mujer.
- El cuestionario reducido del prototipo (8 dimensiones × 3 preguntas),
  guardado por usuario y reanudable.
- Lista de compatibilidades con el resto de personas del piloto que ya
  hayan terminado el cuestionario y pasen el filtro de emparejamiento —
  separadas en "recomendadas" y "otras personas" (visibles con su motivo,
  por transparencia durante el piloto) — y una vista detallada por persona
  (gráfico, estado de elegibilidad, fortalezas, aspectos a vigilar, y el
  desglose completo del cálculo).
- El **algoritmo de compatibilidad real** (`lib/algorithm/`), implementando
  la arquitectura del Bloque 6: comparación de variables, reglas críticas
  independientes del sistema de pesos, cálculo por dimensión y global,
  nivel de confianza separado del porcentaje, y un motor de elegibilidad
  con cinco estados (`RECOMMENDED`, `RECOMMENDED_WITH_NOTES`,
  `BELOW_THRESHOLD`, `PENDING_INFORMATION`, `CRITICAL_CONFLICT`). Ver
  `lib/algorithm/README.md` para el detalle y sus limitaciones honestas.
- Todo en un único proceso Node.js con SQLite embebido (`node:sqlite`,
  nativo desde Node 22.5) — sin bases de datos ni servicios externos que
  dar de alta para el piloto.
- **Chat interno** (Bloque 7.19): cuando dos personas son recomendadas mutuamente
  (match de género/edad + compatibilidad `RECOMMENDED`/`RECOMMENDED_WITH_NOTES`),
  pueden escribirse dentro de la propia app, sin compartir teléfono ni redes.
  Al recibir un mensaje, la otra persona recibe un aviso por email (si
  `EMAIL_USER`/`EMAIL_PASS` están configuradas) y por notificación push
  del navegador (si `VAPID_PUBLIC_KEY`/`VAPID_PRIVATE_KEY` están
  configuradas y la persona la ha activado con el botón "🔔 Activar
  avisos" de la barra superior) — ninguno de los dos avisos incluye el
  contenido del mensaje, solo un enlace para verlo (Bloque 7.32.4).
- **Panel de administración** (`/admin`, protegido por `ADMIN_PASSWORD`,
  separado del código de invitación): lista de personas registradas con su
  estado de perfil/cuestionario, la **matriz completa de compatibilidad**
  entre todas las parejas que pasan el filtro de género/edad (no solo la
  vista individual de cada persona), y borrado de cuentas.

## Qué NO incluye todavía (a propósito)

- Recuperación de contraseña, verificación de email, moderación de fotos,
  bloqueo/denuncia de usuarios — nada de esto es necesario para un piloto
  cerrado con gente de confianza, pero sí antes de abrir la app a
  desconocidos.
- Despliegue / hosting: por defecto esto corre en local. Ver
  [`DEPLOY.md`](./DEPLOY.md) para la guía paso a paso de cómo ponerlo en
  Railway (o Render) con un volumen persistente para no perder los datos
  del piloto en cada reinicio.

## Cómo ejecutarlo en local

```bash
cd app
npm install
cp .env.example .env   # y rellena SESSION_SECRET (ver instrucciones dentro)
npm start
```

Abre `http://localhost:3000`.

En desarrollo, si no defines `SESSION_SECRET` la app arranca igualmente
con una clave temporal (verás un aviso en la consola) — las sesiones se
cerrarán al reiniciar el servidor, lo cual es aceptable para probar en
local pero no para el piloto real.

## Variables de entorno

Ver `.env.example`. Las importantes:

- `SESSION_SECRET` — clave para firmar las cookies de sesión.
- `BLUEHEART_INVITE_CODE` — si la defines, el registro pedirá ese código
  (útil para que solo entren las personas invitadas al piloto).
- `ADMIN_PASSWORD` — contraseña para entrar en `/admin` (panel de gestión
  del piloto). Sin ella, `/admin` no deja pasar a nadie. Usa una distinta
  del código de invitación.
- `PORT` — puerto del servidor (por defecto 3000).

## Estructura

```
app/
  server.js          # arranque, sesiones, montaje de rutas
  lib/
    db.js            # capa de datos (SQLite embebido)
    algorithm/        # motor de compatibilidad real (Bloque 6) — ver su README
    matchFilter.js     # filtro duro de género/orientación/edad (independiente del algoritmo)
    questions.js      # banco de preguntas (compartido con blueheart-demo.html)
    upload.js         # subida de fotos (multer, validación de tipo/tamaño)
    middleware.js     # requireAuth, requireProfileBasics
  routes/             # auth, profile, quiz, matches
  views/              # HTML server-rendered (sin framework de plantillas)
  public/style.css    # misma identidad visual que blueheart-demo.html
  data/               # SQLite (no se sube a git)
  uploads/<userId>/   # fotos subidas (no se sube a git)
```

## Notas de seguridad para un piloto con datos reales

- Las fotos se sirven solo a usuarios autenticados (`GET /fotos/:id`), no
  hay una carpeta pública de imágenes.
- Contraseñas con `bcryptjs`, cookies de sesión `httpOnly`.
- Los datos que se recogen (incluyendo respuestas sobre sexualidad,
  valores, etc.) son datos sensibles — antes de invitar a nadie, comparte
  con las personas del piloto un texto breve de consentimiento: qué se
  recoge, para qué, que es una prueba, y que pueden pedir borrar su cuenta
  cuando quieran.
