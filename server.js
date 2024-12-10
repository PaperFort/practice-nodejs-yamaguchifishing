// server.js
const express = require('express'); //express
require('dotenv').config(); //.env

//エンドポイントインポート
const fishingplaceRouts = require('./routs/fishingplaceRouts');
const beginnerRouts = require('./routs/beginnerRouts');
const apiRouts = require('./routs/apiRouts');

const mongoose = require('mongoose'); //mongoDB

const connectDB = require('./config/db.js'); // mongoDB接続

const app = express();
const port = process.env.PORT;

// データベース接続を呼び出す
connectDB();

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs'); 
app.set('views', './views');  // views フォルダを設定

// ミドルウェアの設定
app.use(express.static('public')); // 静的ファイルの設定
app.use(express.json()); //JSONデータの解析

//ベースパス(:3000との間に来る)
app.use('/fishing-place', fishingplaceRouts);
app.use('/beginner', beginnerRouts);
app.use('/api', apiRouts);

//エンドポイントを設定
app.get('/', (req, res) => {
    res.render('index'); //index.ejsをレンダリング
})
app.get('/fishing-place', (req, res) => {
    res.render('fishing-list'); //fishing-list.ejsをレンダリング
});
app.get('/beginner', (req, res) => {
    res.render('beginner'); //beginner.ejsをレンダリング
});

// サーバー起動
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
