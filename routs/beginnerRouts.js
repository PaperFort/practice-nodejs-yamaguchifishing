const express = require('express');
const router = express.Router();

// ユーザー一覧を表示するエンドポイント
// router.get('/users', (req, res) => {
//   res.render('users', { users });
// });

// /beginnerのエンドポイント
router.get('/type', (req, res) => {
    res.render('beginner-info-type'); //beginner-info-type.ejsをレンダリング
})
router.get('/tool', (req, res) => {
    res.render('beginner-info-tool'); //beginner-info-tool.ejsをレンダリング
})


module.exports = router;
