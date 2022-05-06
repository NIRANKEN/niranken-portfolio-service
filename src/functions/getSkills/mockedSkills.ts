import { Skill } from './Skill';

export const mockedSkills: Skill[] = [
  {
    id: 'front-end',
    ord: 1,
    title: 'フロントエンド',
    colorCode: '#abd699',
    explanation: `# フロントエンドの評価点のイメージ

      5 ... 我がこの分野の先駆者だ！
      4 ... ゼロからの導入や開発環境の構築の経験あり。
      3 ... 一連の機能を実装したことがある。
      2 ... 多少わからない部分を調べながら、一通り読み書き経験あり。
      1 ... 読める・簡易な不具合修正くらいなら経験あり。
      0 ... 聞いたことあるな～、くらい
      `,
    results: [
      {
        baseAxisValue: 'JS',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'Sass',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'Velocity',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'CSS',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'React',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Redux',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'MUI',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'TS',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Jest',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Cypress',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'JSP',
        dataAxisValues: [2],
      },
    ],
  },
  {
    id: 'back-end',
    ord: 2,
    title: 'バックエンド',
    explanation: `# バックエンドの評価点イメージ

      5 ... 我がこの分野の先駆者だ！
      4 ... ゼロからの導入や開発環境の構築の経験あり。
      3 ... 一連の機能を実装したことがある。
      2 ... 多少わからない部分を調べながら、一通り読み書き経験あり。
      1 ... 読める・簡易な不具合修正くらいなら経験あり。
      0 ... 聞いたことあるな～、くらい
      `,
    colorCode: '#75c9b7',
    results: [
      {
        baseAxisValue: 'Java6/8',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'JUnit',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'SQL',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Spring',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'Typescript',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Python3',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'C++',
        dataAxisValues: [2],
      },
    ],
  },
  {
    id: 'infra',
    ord: 3,
    title: 'インフラ',
    explanation: `# インフラまわりの評価点のイメージ

      5 ... 我がこの分野の先駆者だ！
      4 ... ゼロからサーバーやMWの新規構築の経験がある。
      3 ... インフラ起因の不具合や、それに関するログ読み・トラブルシュート、解決のための設定値変更の経験がある。
      2 ... 多少わからない部分を調べながら、不具合調査やconf系ファイルの設定変更の経験がある。
      1 ... 多少触ったことがあって、アプリでどう使われているのかを把握している。
      0 ... 聞いたことあるな～、くらい
      `,
    colorCode: '#c7ddcc',
    results: [
      {
        baseAxisValue: 'Linux',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Windows',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'Oracle',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'tomcat',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'nginx',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'AWS EC2',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'AWS S3',
        dataAxisValues: [1],
      },
      {
        baseAxisValue: 'AWS Lambda',
        dataAxisValues: [1],
      },
    ],
  },
  {
    id: 'ci/cd',
    ord: 4,
    title: 'CI/CD',
    explanation: `# CI/CDの評価点のイメージ

      5 ... 我がこの分野の先駆者だ！
      4 ... ゼロからの導入や開発環境の構築の経験あり。
      3 ... 一連の機能やCI/CDフローを実装したことがある。
      2 ... 多少わからない部分を調べながら、一通り読み書き経験あり。
      1 ... 読める・簡易な不具合修正くらいなら経験あり。
      0 ... 聞いたことあるな～、くらい
      `,
    colorCode: '#ffe26a',
    results: [
      {
        baseAxisValue: 'Bash',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Jenkins',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Maven',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'GitLab-CI',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Docker',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'ansible',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'cloudformation',
        dataAxisValues: [1],
      },
    ],
  },
];
