var express = require('express');
var router = express.Router();

const userRepository = require('../application_layer/user-repository')

router.post('/login', userRepository.login);
router.post('/register', userRepository.register);
router.post('/account', userRepository.updateUserInfo);

router.get('/account', userRepository.getItems);

module.exports = router;