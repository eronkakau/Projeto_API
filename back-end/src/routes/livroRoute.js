const express = require('express');
const router = express.Router();
const livroControle = require('./../controleLivros/livroControle');


router.get('/',livroControle.getLivros)

router.get('/:id',livroControle.getOnLivros);

router.post('/',livroControle.createLivros);

router.put('/:id',livroControle.updateLivros);

router.delete('/:id',livroControle.deleteLivros);
module.exports = router;