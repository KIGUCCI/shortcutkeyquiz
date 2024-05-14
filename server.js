const express = require('express');
const path = require('path');

const app = express();

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

// ルートの定義
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index')); // index.htmlを返す
});

// サーバーの起動
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

