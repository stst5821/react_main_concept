import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firstNameとlastNameをつなげる関数
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// ユーザーネーム指定
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

// formatName関数を呼び出して、変数elementに代入
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
)

// 時間を表示する。
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('clock'));
}

setInterval(tick, 1000);

ReactDOM.render(
  // カスタムコンポーネント呼び出し。App.jsの内容を表示する。
  <App />,
  document.getElementById('app')
);

ReactDOM.render(
  element, // 上記で設定した変数elementを描画
  document.getElementById('root') // idから任意の要素ノードを取得するメソッド。この場合はindex.htmlの記述した divのid、rootを取得している。
);

// アプリケーションのパフォーマンスを測定・分析できるらしい。https://bit.ly/CRA-vitals
reportWebVitals();