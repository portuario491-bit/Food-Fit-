const express = require('express');
const db = require('../lib/db');
const { renderScreeningForm, renderScreeningContact, renderScreeningThanks } = require('../views/screening');

const router = express.Router();

const REQUIRED_FIELDS = [
  'age', 'location', 'gender', 'orientation', 'age_min', 'age_max',
  'looking_for', 'dating_apps_experience', 'would_meet_match',
  'would_fill_questionnaire', 'wants_to_participate',
];

router.get('/seleccion', (req, res) => {
  res.send(renderScreeningForm());
});

router.post('/seleccion', (req, res) => {
  const values = {};
  REQUIRED_FIELDS.forEach((f) => { values[f] = (req.body[f] || '').trim(); });
  const seekingList = [].concat(req.body.seeking || []).filter(Boolean);
  values.seekingList = seekingList;

  const missing = REQUIRED_FIELDS.some((f) => !values[f]);
  if (missing || seekingList.length === 0) {
    return res.status(400).send(
      renderScreeningForm({ error: 'Falta responder alguna pregunta — todas son obligatorias.', values })
    );
  }

  const id = db.createScreeningResponse({
    age: values.age,
    location: values.location,
    gender: values.gender,
    orientation: values.orientation,
    seeking: seekingList.join(', '),
    age_min: values.age_min,
    age_max: values.age_max,
    looking_for: values.looking_for,
    dating_apps_experience: values.dating_apps_experience,
    would_meet_match: values.would_meet_match,
    would_fill_questionnaire: values.would_fill_questionnaire,
    wants_to_participate: values.wants_to_participate,
  });

  if (values.wants_to_participate === 'No') {
    return res.redirect('/seleccion/gracias');
  }
  req.session.screeningId = id;
  res.redirect('/seleccion/contacto');
});

router.get('/seleccion/contacto', (req, res) => {
  if (!req.session.screeningId) return res.redirect('/seleccion');
  res.send(renderScreeningContact());
});

router.post('/seleccion/contacto', (req, res) => {
  if (!req.session.screeningId) return res.redirect('/seleccion');
  const name = (req.body.name || '').trim();
  const contactMethod = (req.body.contact_method || '').trim();
  const contactValue = (req.body.contact_value || '').trim();

  if (!name || !contactMethod || !contactValue) {
    return res.status(400).send(
      renderScreeningContact({ error: 'Completa tu nombre y un dato de contacto.', values: { name, contact_method: contactMethod, contact_value: contactValue } })
    );
  }

  db.addScreeningContact(req.session.screeningId, { name, contactMethod, contactValue });
  delete req.session.screeningId;
  res.redirect('/seleccion/gracias');
});

router.get('/seleccion/gracias', (req, res) => {
  res.send(renderScreeningThanks());
});

module.exports = router;
