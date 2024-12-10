const express = require('express');
const router = express.Router();
// /fishing-placeのエンドポイント
// fishing-place/infoのエンドポイント
router.get('/info', (req, res) => {
    const query = req.query.place;

    res.render('fishing-info', {place: query}); //fishing-info.ejsをレンダリング
});


module.exports = router;
