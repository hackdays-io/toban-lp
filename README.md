# Toban LP

Toban のランディングページプロジェクトです。

## 🚀 技術スタック

- **Next.js** - React フレームワーク
- **TypeScript** - 型安全な JavaScript
- **Emotion** - CSS-in-JS ライブラリ
- **Biome** - リンター・フォーマッター
- **Yarn** - パッケージマネージャー

## 📋 必要条件

- Node.js 18以上
- Yarn 3.2.4以上

## 🛠️ セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/hackdays-io/toban-lp.git
cd toban-lp
```

### 2. 依存関係のインストール

```bash
yarn install
```

### 3. 環境変数の設定

必要に応じて環境変数を設定してください：

```bash
# .env.local を作成
NEXT_PUBLIC_AIRTABLE_PAT=your_airtable_pat
NEXT_PUBLIC_AIRTABLE_BASE=your_airtable_base
NEXT_PUBLIC_AIRTABLE_TABLE=your_airtable_table
```

## 🏃‍♂️ 使用方法

### 開発サーバーの起動

```bash
yarn dev
```

開発サーバーが起動し、[http://localhost:3000](http://localhost:3000) でアクセスできます。

### プロダクションビルド

```bash
yarn build
```

### プロダクションサーバーの起動

```bash
yarn start
```

## 🧹 コード品質

### リント

```bash
# リントチェック
yarn lint

# リント自動修正
yarn lint:fix
```

### フォーマット

```bash
# コードフォーマット
yarn format
```

### 総合チェック

```bash
# リント + フォーマットの総合チェック
yarn check

# 総合チェック + 自動修正
yarn clean
```

## 📁 プロジェクト構造

```
toban-lp/
├── public/                 # 静的ファイル
│   └── assets/            # アセットファイル
├── src/                   # ソースコード
│   ├── components/        # React コンポーネント
│   │   ├── common/       # 共通コンポーネント
│   │   ├── layouts/      # レイアウトコンポーネント
│   │   └── organisms/    # 複合コンポーネント
│   ├── data/             # データファイル
│   ├── hooks/            # カスタムフック
│   ├── locales/          # 国際化ファイル
│   ├── pages/            # Next.js ページ
│   ├── themes/           # テーマ設定
│   │   ├── settings/    # テーマ設定
│   │   └── styles/      # スタイル定義
│   └── types/            # TypeScript 型定義
├── biome.json            # Biome 設定
├── next.config.ts        # Next.js 設定
├── package.json          # パッケージ設定
└── tsconfig.json         # TypeScript 設定
```

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🔗 関連リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)
- [Emotion ドキュメント](https://emotion.sh/docs/introduction)
- [Biome ドキュメント](https://biomejs.dev/)
