# Desplegar el piloto de BlueHeart

Esta guía asume que quieres que las 10-20 personas del piloto puedan
entrar desde fuera, con una URL real. El código ya está listo para esto
(ver `.env.example` y las variables `DATA_DIR` / `UPLOADS_DIR`); lo que
falta es una decisión y unos pasos que solo puedes hacer tú, porque
implican crear una cuenta en un servicio externo.

Recomiendo **Railway**: conecta directamente con GitHub, detecta un
proyecto Node.js sin configuración especial, y tiene volúmenes
persistentes disponibles sin necesidad de tarjeta para empezar. Al final
de esta guía hay una alternativa con Render por si lo prefieres.

## Antes de empezar

Decide y ten a mano:

- Un **código de invitación** para `BLUEHEART_INVITE_CODE` (opcional pero
  recomendado para un piloto cerrado) — cualquier palabra o frase corta.
- Una **clave de sesión** para `SESSION_SECRET`. Genérala en tu terminal:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
  (Si no tienes Node a mano, cualquier cadena aleatoria larga —30+
  caracteres— sirve. Es solo para firmar las cookies de sesión, no hace
  falta recordarla.)

## Pasos con Railway

1. **Crea una cuenta** en [railway.app](https://railway.app), preferiblemente
   iniciando sesión con tu cuenta de GitHub (la misma donde está el
   repositorio `Food-Fit-`) — así el paso siguiente es un clic.

2. **Nuevo proyecto → Deploy from GitHub repo.** Autoriza a Railway a ver
   tus repositorios si te lo pide, y selecciona `Food-Fit-`.

3. **Configura el directorio raíz del servicio.** El código de la app vive
   en la carpeta `app/` del repositorio, no en la raíz. En la configuración
   del servicio (normalmente en la pestaña "Settings"), busca algo como
   "Root Directory" y ponlo a `app`. Railway debería detectar
   automáticamente que es un proyecto Node.js (por `package.json`) y usar
   `npm install` + `npm start`.

4. **Añade un volumen persistente.** En la pestaña de volúmenes del
   servicio, crea uno nuevo con un punto de montaje, por ejemplo `/data`.
   Este volumen es lo que evita que se borren la base de datos y las fotos
   cada vez que Railway reinicia o redespliega el contenedor.

5. **Variables de entorno.** En la pestaña "Variables" del servicio, añade:
   ```
   SESSION_SECRET=<la clave que generaste arriba>
   BLUEHEART_INVITE_CODE=<tu código de invitación>
   DATA_DIR=/data/db
   UPLOADS_DIR=/data/uploads
   ```
   (`DATA_DIR` y `UPLOADS_DIR` son subcarpetas dentro del volumen que
   montaste en el paso 4 — Railway las crea solas al arrancar la app.)
   No hace falta que definas `PORT`: Railway lo asigna automáticamente y
   la app ya lo respeta (`process.env.PORT`).

6. **Despliega.** Railway debería desplegar automáticamente tras guardar
   la configuración. Cuando termine, te dará una URL pública (algo como
   `food-fit--production.up.railway.app`, aunque puedes ponerle un nombre
   más bonito en Settings → Networking).

7. **Prueba tú primero.** Abre la URL, regístrate con el código de
   invitación, sube una foto y completa el cuestionario. Si algo falla,
   revisa los logs del servicio en Railway — ahí aparecerán los mismos
   mensajes que ves en tu terminal en local.

8. **Comparte el enlace** con las personas del piloto junto con el código
   de invitación, y con el texto de consentimiento que comentamos
   (qué se recoge, que es una prueba, que pueden pedir borrar su cuenta).

## Alternativa: Render

Los mismos conceptos aplican en [render.com](https://render.com): crea un
"Web Service" nuevo conectado al repositorio, indica `app` como Root
Directory, `npm install` como Build Command y `npm start` como Start
Command, añade un "Persistent Disk" (el equivalente al volumen de
Railway) con un punto de montaje, y configura las mismas variables de
entorno del paso 5 de arriba apuntando `DATA_DIR`/`UPLOADS_DIR` a ese
disco.

## Si el build falla

Railway a veces solo muestra "Failed to build an image. Please check the
build logs for more details." sin más contexto en el resumen — el detalle
real está en la pestaña de logs del build (o en el botón "Diagnose" si
aparece). Antes de mirar el log línea a línea, descarta esto:

- **Root Directory mal puesto.** Si no está en `app` (paso 3), Railway
  intenta construir desde la raíz del repositorio, que no tiene
  `package.json`, y el build falla casi instantáneamente (unos segundos).
  Es la causa más común. Revísalo en Settings → Root Directory.
- **Versión de Node.** El código necesita Node ≥22.5 por `node:sqlite`
  (`app/package.json` lo declara en `engines`). El repo incluye
  `app/nixpacks.toml` para forzar Node 22 explícitamente en el build de
  Railway — si sigue sin coger la versión correcta, revisa que ese fichero
  esté en `app/` (mismo nivel que `package.json`) y no en la raíz.

## Notas

- No definas `NODE_ENV=production` a menos que sirvas la app por HTTPS
  (la cookie de sesión se marca `secure` en producción — ver
  `server.js` — y un navegador la rechazará por HTTP). Railway y Render
  sirven HTTPS por defecto en sus dominios, así que en ambos casos está
  bien definirlo si quieres, pero no es obligatorio.
- Si en algún momento quieres empezar de cero (borrar todos los usuarios
  de prueba antes de invitar a gente real), basta con borrar el contenido
  del volumen desde el panel de la plataforma, o las carpetas `data/` y
  `uploads/` dentro de él.
- El primer despliegue puede tardar uno o dos minutos mientras instala
  las dependencias (`npm install`) — es normal.
