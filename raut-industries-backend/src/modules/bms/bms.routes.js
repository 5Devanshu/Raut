const router         = require('express').Router();
const { proxy }      = require('./bms.controller');
const authenticate   = require('../../middlewares/auth.middleware');

router.use(authenticate);

// Forwards ALL methods + paths to BMS /v1/*
// POST /api/bms/clients          → BMS POST /v1/clients
// GET  /api/bms/templates        → BMS GET  /v1/templates
// GET  /api/bms/tax-rates        → BMS GET  /v1/tax-rates
// POST /api/bms/invoices         → BMS POST /v1/invoices
// GET  /api/bms/invoices         → BMS GET  /v1/invoices
router.all('/{*splat}', proxy);

module.exports = router;