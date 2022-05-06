import { Appeal } from "./Appeal";

export const mockedAppeals: Appeal[] = [
  {
    id: 'appeal1',
    ord: 1,
    appeal: '1. Java6~8 + SpringFramework + Mavenを直近よく使ってました',
    detail: `JavaであればMVCを意識したコードを書いてきたので、ある程度すぐに戦力として活躍できるかなと思います。
    mavenコマンドを使ったプレマージでのユニットテスト実行基盤の整備やビルド・デプロイの保守も実施してきました。`,
    imagePath: '/static/images/java_sample.png',
    imageHeight: '240',
    imageExplanation: `(仕事のソースは貼れないので)教育免許取得のための授業で、
    　javaソース課題を提出するために書いたときの実装風景(左:実装、右:JUnit)。`,
  },
  {
    id: 'appeal2',
    ord: 2,
    appeal: '2. CI/CDの構築や、CUIでのLinuxコマンドを使った操作が得意です',
    detail: `3年前からJenkinsの保守運用やってきました。最近GitLab-CIにも手を付けてます。
    単調作業が嫌いなので、何かとgrep/sed/sortなどを組み合わせてスクリプト書いて対応することが多いです。
    Jenkinsやgitlab-runner用のUbuntuサーバーをゼロから構築したり、
    趣味でCentOSやArchLinuxのサーバーを立てたりしているので、GUIの無い状況にも慣れてます。`,
    imagePath: '/static/images/docker_jenkins.png',
    imageHeight: '240',
    imageExplanation: 'DockerでJenkinsのcontrollerやagentを立てて、CI/CDパイプラインを組めます。',
  },
  {
    id: 'appeal3',
    ord: 3,
    appeal: '3. 積極的に知らないことを勉強してコミットします！',
    detail: `研究室時代に、C++、bash、Qtを独学して、物理のシミュレーション研究していました。
    知らないことにチャレンジして勉強することが好きなので、
    目的達成のために必要なことを自主的にキャッチアップしつつ成果出していきます。`,
    imagePath: '/static/images/jamming_qt.png',
    imageHeight: '360',
    imageExplanation: `研究室時代に独学で作った物理シミュレーションプログラム。
    　(コードは滅茶苦茶だったが)可視化したことで教授陣から建設的なフィードバックをもらって研究に励めました。`,
  },
];
