# Toban LP

Toban のランディングページプロジェクトです。

## 🚀 技術スタック

- **Next.js** - React フレームワーク
- **TypeScript** - 型安全な JavaScript
- **Emotion** - CSS-in-JS ライブラリ
- **Biome** - リンター・フォーマッター
- **Yarn** - パッケージマネージャー
- **React Icons** - アイコンライブラリ
- **Storybook** - コンポーネント開発環境
- **serve** - 静的ファイル配信サーバー

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

### 3. 不足している依存関係のインストール

プロジェクトで使用されているアイコンライブラリをインストールします：

```bash
yarn add react-icons
```

### 4. 環境変数の設定

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

### 静的ファイルのエクスポート

このプロジェクトは静的サイトとしてビルドされます：

```bash
yarn export
```

### Storybookの起動

コンポーネントの開発・テスト用にStorybookを使用できます：

```bash
yarn build-storybook
```

## 🧹 コード品質

### 自動フォーマット

このプロジェクトでは以下の方法でコード品質が自動的に管理されます：

#### 1. Git Hooks（推奨）
- コミット前に自動的にBiomeのチェックと修正が実行されます
- 問題がある場合はコミットがブロックされます
- `lint-staged`により、ステージされたファイルのみが処理されます

#### 2. VS Code設定
- ファイル保存時に自動フォーマットが適用されます
- Biome拡張機能が推奨されます

#### 3. 手動実行

```bash
# リントチェック
yarn lint

# リント自動修正
yarn lint:fix

# コードフォーマット
yarn format

# 総合チェック（リント + フォーマット）
yarn check

# 総合チェック + 自動修正
yarn check:fix

# 型チェック
yarn type-check
```

### 開発時の注意点

- コミット前に必ず`yarn check:fix`を実行することを推奨します
- VS CodeでBiome拡張機能をインストールすると、リアルタイムでエラーが表示されます
- プッシュ前にGitHub ActionsでBiomeチェックが実行されます

## 📁 プロジェクト構造

```
toban-lp/
├── public/                 # 静的ファイル
│   └── assets/            # アセットファイル
│       ├── logo/          # ロゴファイル
│       ├── HowItWorksImage/ # 説明画像
│       ├── toban-logo.svg # Tobanロゴ
│       ├── toban-logo-text.svg # Tobanテキストロゴ
│       ├── hero-image.png # ヒーロー画像
│       └── favicon.ico    # ファビコン
├── src/                   # ソースコード
│   ├── components/        # React コンポーネント
│   │   ├── common/       # 共通コンポーネント
│   │   │   └── Button.tsx # ボタンコンポーネント
│   │   ├── layouts/      # レイアウトコンポーネント
│   │   │   └── base.tsx  # ベースレイアウト
│   │   └── organisms/    # 複合コンポーネント
│   │       ├── Header/   # ヘッダーコンポーネント
│   │       ├── Footer/   # フッターコンポーネント
│   │       ├── HeroSection.tsx # ヒーローセクション
│   │       ├── Features.tsx # 機能紹介
│   │       ├── ProblemSolution.tsx # 問題と解決策
│   │       ├── HowItWorks.tsx # 使い方説明
│   │       ├── UseCases.tsx # ユースケース
│   │       ├── CaseStudies.tsx # 事例紹介
│   │       ├── SecurityStack.tsx # セキュリティスタック
│   │       ├── TrackRecord.tsx # 実績
│   │       ├── Pricing.tsx # 料金プラン
│   │       ├── Faq.tsx # よくある質問
│   │       ├── AwardsMedia.tsx # 受賞・メディア
│   │       ├── InfiniteLoop.tsx # 無限ループ
│   │       └── GettingStarted.tsx # 始め方
│   ├── data/             # データファイル
│   ├── hooks/            # カスタムフック
│   ├── locales/          # 国際化ファイル
│   ├── pages/            # Next.js ページ
│   │   ├── _app.tsx      # アプリケーション設定
│   │   ├── _document.tsx # ドキュメント設定
│   │   └── index.tsx     # メインページ
│   ├── themes/           # テーマ設定
│   │   ├── settings/     # テーマ設定
│   │   │   ├── color.ts  # カラー設定
│   │   │   ├── spaces.ts # スペーシング設定
│   │   │   └── breakpoints.ts # ブレークポイント設定
│   │   ├── styles/       # スタイル定義
│   │   │   └── globals.css # グローバルスタイル
│   │   └── global.ts     # グローバルテーマ設定
│   └── types/            # TypeScript 型定義
├── .github/              # GitHub設定
├── .yarn/                # Yarn設定
├── biome.json            # Biome 設定
├── next.config.ts        # Next.js 設定
├── next-env.d.ts         # Next.js型定義
├── package.json          # パッケージ設定
├── tsconfig.json         # TypeScript 設定
├── tsconfig.tsbuildinfo  # TypeScriptビルド情報
├── .gitignore            # Git除外設定
├── .gitattributes        # Git属性設定
├── .yarnrc.yml           # Yarn設定
└── yarn.lock             # Yarnロックファイル
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
- [Storybook ドキュメント](https://storybook.js.org/docs/react/get-started/introduction)
- [React Icons ドキュメント](https://react-icons.github.io/react-icons/)
