const express = require('express');
const router = express.Router();
const spotModel = require('../models/yamaguchiFishing.js')
router.use(express.json());

// DBデータ保存
router.post('/add', async (req, res) => {
    try {
        // リクエストボディが配列かどうかを確認
        if (Array.isArray(req.body)) {
            // 配列の場合、各アイテムを個別に保存
            const savedSpots = await Promise.all(
                req.body.map(async (item) => {
                    const newSpot = new spotModel(item);
                    return await newSpot.save();
                })
            );
            res.status(201).json(savedSpots); // 全ての保存結果を返す
        } else {
            // 単一の場合
            const newSpot = new spotModel(req.body);
            const savedSpot = await newSpot.save();
            res.status(201).json(savedSpot); // 保存結果を返す
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DBデータ確認
router.get('/fishingSpots', async (req, res) => {
    try {
        const spots = await spotModel.find(); //全件取得
        res.json(spots); //JSON形式で返却
    } catch (error) {
        res.status(500).json({ message: 'data acquisition error' });
    }
});

// DBデータ修正
router.patch('/fishingSpots/:id', async (req, res) => {
    try {
        await spotModel.findByIdAndUpdate(req.params.id, req.body);
        await spotModel.save();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DBデータ削除
router.delete('/fishingSpots/:id', async (req, res) => {
    try {
        await spotModel.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
