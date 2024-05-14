const express = require('express');
const app = express();

// 静的ファイルの提供
app.use(express.static('public'));

// サーバーの起動
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});