# Fisher's Map Yamaguchi

**Fisher's Map Yamaguchi**は、山口県内の釣り場情報を提供するウェブアプリケーションです。このプロジェクトは、初心者から熟練者まで、すべての釣り愛好家が役立てられるよう設計されています。

## プロジェクト構成

yamaguchi-fishing
    |-- server.js  
    |-- package.json  
    |-- package-lock.json  
    |-- READ.me  
    |-- .env  
    |-- config  
    |   |-- db.js  
    |  
    |-- data  
    |   |-- fishingSpot_tile.json  
    |  
    |-- models  
    |   |-- yamaguchiFishing.js  
    |  
    |-- node_motules  
    |  
    |-- public  
    |   |-- css  
    |   |  |-- style.css  
    |   |-- images  
    |   |   |-- place-img  
    |   |   |   |-- senzaki.jpg  
    |   |   |-- default.jpg  
    |   |   |-- logo.webp  
    |   |   |-- yamagutiMAP.svg  
    |   |-- js  
    |       |-- main.js  
    |  
    |-- routs  
    |   |-- apiRouts.js  
    |   |-- beginnerRouts.js  
    |   |-- fishingplaceRouts.js  
    |  
    |-- views  
    |   |-- index.ejs  
    |   |-- fishing-list.ejs  
    |   |-- fishing-info.ejs  
    |   |-- beginner.ejs  
    |   |-- begginer-info-type.ejs  
    |   |-- begginer-info-tool.ejs  
    |   |-- header.ejs  
    |   |-- footer.ejs  

## 使用技術

- **Node.js 22.11.0**  
- **MongoDB 8.0.1**  
- **Express**: サーバー構築
- **EJS**: テンプレートエンジン
- **Mongoose**: MongoDBとの接続

## 主な機能

1. **釣り場一覧表示**  
   山口県内の市区町村別の釣り場をリストアップ。

2. **釣り場詳細ページ**  
   選択した釣り場の詳細情報を表示。同一市内の他の釣り場も参照可能。

3. **初心者向け情報**  
   初心者向けの道具や釣り方の説明を提供。



##  セットアップ手順

#### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/yamaguchi-fishing.git
cd yamaguchi-fishing
```
#### 2. 必要なパッケージををインストール

```bash
npm install
```

#### 3. 環境変数の設定
.envファイルを作成し、設定してください。（セキュリティの観点から、内容は省略。）

#### 4. データベースを起動
mongoDBをインストールし、起動してください。

#### 5. サーバーを起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 にアクセスしてアプリケーションを確認してください。