import React,{ VFC } from 'react';
import { Link } from 'react-router-dom';

export const Login: VFC =  () => {
  return (
    <div>ログイン画面</div>
    // // ログイン関係
    // <div className="login js-login-style hidden">
    //   <form className="login-formStyle" @submit.prevent="login">
    //     <h2 className="login-title">Login</h2>
    //     <div className="login-commonMsgArea">
    //       <span className="#">
    //         <strong>{{ commonErrMsg }}</strong>
    //       </span>
    //     </div>

    //     {/* メールアドレス入力欄 */}
    //     <div className="login-emailaddressField">
    //       <label className="#">
    //         <input className="login-emailForm" :class="{ errInput: emailErrMsg }" type="text" placeholder="Email" v-model="email">
    //         <div className="login-areaMsg">
    //           <span className="#">
    //               <strong>{{ emailErrMsg }}</strong>
    //           </span>
    //         </div>
    //       </label>
    //     </div>

    //     {/* パスワード入力 */}
    //     <div className="login-passwardField">
    //       <label className="#">
    //         {/* 後にphpでエラー時用のスタイルを付属させる様にする。 */}
    //         <input className="login-passwordForm" :class="{ errInput: passwordErrMsg }" type="password" placeholder="Password" v-model="password">
    //         <div className="login-areaMsg">
    //           {/* エラーメッセージの出力 */}
    //           <span className="#">
    //             <strong>{{ passwordErrMsg }}</strong>
    //           </span>
    //         </div>
    //       </label>
    //     </div>

    //     <div className="login-registerBtnField">
    //       <button className="login-registerBtnField"
    //         type="submit" :disabled="isSubmit">
    //       {{ loginButton }}
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}
