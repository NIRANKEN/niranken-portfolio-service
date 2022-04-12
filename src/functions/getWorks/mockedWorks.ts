import { Work } from "./Work";

/* TODO: モックデータ。取得経路をDBから取得するように修正する */
export const mockedWorks: Work[] = [
  {
    id: 'workId1',
    type: 'webEngineer',
    ord: 1,
    category: '保守開発',
    work: '不具合修正・機能改善・問い合わせ対応・環境トラブル対応',
    detail: `フロントがJavaScriptとSass、バックエンドがJava6/8とSpringFramework4とOracleでつくられたWebアプリケーションを保守していました。
    環境系のトラブル(Oracle, tomcat, nginxの設定に関連するものなど)対応も色々経験できました。(JMeterで頑張って不具合再現とかやってたなぁ)
    読みやすい理解しやすいコードを書こうという意識が身につきました。`,
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
  {
    id: 'workId2',
    type: 'webEngineer',
    ord: 2,
    category: '新規開発',
    work: '既存基盤での新機能開発と、新基盤での新機能開発(MSA)',
    detail: `巷でよく使われているReactやTypescript, AWS Lambdaなどを経験でき、JavaScriptを直接書くよりも便利だ～と思った(感想)。
    スクラムでの開発も初めて経験して、みんなでコミュニケーションとりながら協力して開発できたので、一人で背負い込むことなく楽しく開発してました。`,
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
  {
    id: 'workId3',
    type: 'webEngineer',
    ord: 3,
    category: '品質改善・CI/CD',
    work: 'JUnitの導入、ビルドジョブの改修・保守',
    detail: `「Windowsバッチでファイルパスベタ書きでのビルド、Eclipse4.5での開発、ユニットテストがない」など、正直開発がしんどい環境でした。
    なので、ビルドのPipeline化をしたり、Eclipse最新にしたり、JUnit導入してサンプルのテスト書いて布教したり…。
    MSA開発時は、ユニットテスト(Jest)だけでなくE2Eテスト(Cypress)も経験できました。`,
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
  {
    id: 'personalWorkId1',
    type: 'personal',
    ord: 1,
    category: 'お遊び',
    work: '音声麻雀してみた',
    detail: `Python3で音声認識と画像認識が簡単に利用できるとのことで、即席で作ったお遊びプログラムです。`,
    linkUrl: 'https://github.com/NIRANKEN/auto_mahjong',
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
  {
    id: 'personalWorkId2',
    type: 'personal',
    ord: 2,
    category: 'React',
    work: 'ポートフォリオ',
    detail: `React, Redux, Typescript, Material-UIでポートフォリオ作りました。AWS S3にデプロイして見れるようにしてます。`,
    linkUrl: 'https://github.com/NIRANKEN/niranken-portfolio',
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
];
