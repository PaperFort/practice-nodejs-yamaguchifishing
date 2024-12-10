const mongoose = require('mongoose');

//FishingSpotsテーブルのスキーマ設定
const PlaceSchema = new mongoose.Schema({
    id: { type: Number, required: true, trim: true, unique: true },     // 一意の番号
    name: { type: String, required: true, trim: true },                 // 場所名 (英字)
    nameKanji: { type: String, required: true },                        // 場所名 (漢字)
    nameHurigana: { type: String, defalt: " "},                         // 場所名 (ふりがな)
    imageUrl: { type: String, required: false, trim: true },            // 画像URL
    city: { type: String, required: true, trim: true },                 // 市名(英字)
    cityKanji: { type: String, required: true },                        // 市名（漢字）
    cityHiragana: {type: String, required: true },                      // 市名（ひらがな）
    details: { type: String, required: false },                         // 詳細
    terrain: {type: String, required: false},                           // 場所の環境
    hasParking: {type: Boolean, required: true},                        // 駐車場の有無
    nearestConvenienceStore: { type: Number, default: 0, trim: true },  // 最寄りのコンビニ
    hasToilet: { type: Boolean, required: true, default: false }        // トイレの有無
});





module.exports = mongoose.model('FishingSpots', PlaceSchema);


