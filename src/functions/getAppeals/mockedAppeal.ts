import { Appeal } from "./Appeal";

export const mockedAppeal: Appeal[] = [
  {
    id: 'appeal1',
    appeal: '1. Java6~8 + SpringFrameworkを直近よく使ってました',
    detail: `JavaであればMVCを意識したコードを書いてきたので、ある程度すぐに戦力として活躍できるかなと思います。
    ※TODO: 個人的にJavaでなにか作って、スキル証明できるものを貼っておく`,
    imagePath: '/static/images/haribote.png',
    imageHeight: '240',
    imageExplanation: 'ここにgifやpngを貼る',
  },
  {
    id: 'appeal2',
    appeal: '2. CI/CDの構築や、CUIでのLinuxコマンドを使った操作が得意です',
    detail: `3年前からJenkinsオジサンと友達です。最近GitLab-CIにも手を付けてます。
    単調作業が嫌いなので、何かとgrep/sed/sortなどを組み合わせてスクリプト書いて対応することが多いです。
    ArchLinuxのサーバーを趣味で立てたりしているので、GUIの無い状況に慣れてます。`,
    imagePath: '/static/images/docker_jenkins.png',
    imageHeight: '240',
    imageExplanation: 'DockerでJenkinsのcontrollerやagentを立てて、CI/CD組めます(写真は自分のPCに立てたもの)',
  },
  {
    id: 'appeal3',
    appeal: '3. 積極的に知らないことを勉強してコミットします！',
    detail: `研究室時代に、C++、bash、Qtを独学して、物理のシミュレーション研究していました。
    知らないことにチャレンジして勉強することが好きなので、
    目的達成のために必要なことを自主的にキャッチアップしつつ成果出していきます。`,
    imagePath: '/static/images/jamming_qt.png',
    imageHeight: '480',
    imageExplanation: '研究室時代に独学で作った物理シミュレーションプログラム。',
  },
];
