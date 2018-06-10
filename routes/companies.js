const express = require('express');
const setRouter = require('./set_router');

const router = express.Router();
const companyController = require('../controllers/company_controller');
const clientCompanyController = require('../controllers/client_company_controller');
const prospectCompanyController = require('../controllers/prospect_company_controller');

router.get('/clients', clientCompanyController.index);
router.get('/prospects', prospectCompanyController.index);

setRouter(router, companyController);

module.exports = router;
