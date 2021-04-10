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

ReactDOM.render(
  element,
  document.getElementById('root')
);

// アプリケーションのパフォーマンスを測定・分析できるらしい。https://bit.ly/CRA-vitals
reportWebVitals();
