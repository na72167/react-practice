import React,{ VFC } from 'react';
import { Link } from 'react-router-dom';

export const SignUp: VFC = () => {
  return (
    // 次はここ
    <div>ログイン画面</div>
    // <div className="signup js-signup-style">
    //   <form className="signup-formStyle" @submit.prevent="signUp">

    //     <h2 className="signup-title">SignUp</h2>
    //     <div className="signup-commonMsgArea">
    //       {/* 接続エラー等のメッセージをここに出力させる。 */}
    //       <span className="#">
    //         <strong>{{ commonErrMsg }}</strong>
    //       </span>
    //     </div>

    //     {/* メールアドレス入力欄 */}
    //     <div className="signup-emailaddressField">
    //       <label className="#">
    //         <input className="signup-emailForm" :class="{ errInput: emailErrMsg }" type="text" placeholder="Email" v-model="email">
    //         <div className="signup-areaMsg">
    //           <span className="#">
    //             <strong>{{ emailErrMsg }}</strong>
    //           </span>
    //         </div>
    //       </label>
    //     </div>

    //     {/* パスワード入力 */}
    //     <div className="signup-passwardField">
    //       <label className="#">
    //         <input className="signup-passwordForm" :class="{ errInput: passwordErrMsg }" type="password" placeholder="Password" v-model="password">
    //         <div className="signup-areaMsg">
    //           <span className="#">
    //             <strong>{{ passwordErrMsg }}</strong>
    //           </span>
    //         </div>
    //       </label>
    //     </div>

    //     {/* 確認用パスワード入力 */}
    //     <div className="signup-confirmationPasswardField">
    //       {/* 後にphpでエラー時用のスタイルを付属させる様にする。 */}
    //       <label className="#">
    //         <input className="signup-passwordConfirmationForm" :class="{ errInput: passwordConfirmation }" type="password" placeholder="Confirmation Password" v-model="passwordConfirmation">
    //       </label>
    //     </div>

    //     <div className="signup-registerBtnField">
    //       <button className="signup-registerBtnField"
    //         type="submit"
    //         :disabled="isSubmit"
    //       >
    //       {{ signUpButton }}
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}
