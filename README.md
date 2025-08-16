# LINE Blog Generator with Claude API

? LINEボットを使ってClaude APIでブログ記事を自動生成するシステム

## 機能

- LINEメッセージでトピックを送信
- Claude APIが自動でブログ記事を生成
- 生成完了をLINEで通知

## 技術スタック

- **Platform**: Vercel (Serverless Functions)
- **AI**: Anthropic Claude API
- **Messaging**: LINE Messaging API
- **Runtime**: Node.js

## セットアップ

### 1. 環境変数の設定

Vercelダッシュボードで以下の環境変数を設定：

```
CLAUDE_API_KEY=your_claude_api_key
LINE_CHANNEL_SECRET=your_line_channel_secret
LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token
```

### 2. デプロイ

```bash
# Vercel CLIでデプロイ
vercel --prod
```

### 3. LINE Webhook設定

LINE Developers Consoleで Webhook URL を設定：
```
https://your-app.vercel.app/webhook
```

## API エンドポイント

- `POST /webhook` - LINE Webhook受信

## 使い方

1. LINEボットを友達追加
2. ブログのトピックをメッセージで送信
3. 自動生成されたブログ記事が保存される
4. 完了通知を受信

## ライセンス

MIT

