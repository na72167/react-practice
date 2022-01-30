
import React,{ VFC } from 'react';
// import { Link } from 'react-router-dom';
import {SignUp} from '../components/auth/SignUp';
import {Login} from '../components/auth/Login';
import hero from '../scss/Home/hero.module.scss';
import about from '../scss/Home/about.module.scss';
import review from '../scss/Home/review.module.scss';
import contact from '../scss/Home/contact.module.scss';

export const Home: VFC = () => {
  return (
    <div>
      {/* ヒーロバナー */}
      <section className={hero['hero']}>
        <div className={hero['hero__content']}>
          <div className={hero['hero__text-wrap']}>
            <h1 className={hero['hero__text-catchTheam']}>
            Easier Deployment
            </h1>
            <div className={hero['hero__text-about']}>
            サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプルサン
            </div>
            <a className={hero['hero__text-aboutLink']} href="#index-about">このサービスについて</a>
          </div>

          <div>
            <SignUp
              // v-if="checkAuthComponents === 'signUp'"
            />
            <Login
              // v-if="checkAuthComponents === 'login'"
            />
          </div>
        </div>
      </section>

      {/* アプリ内容 */}
      <section id="index-about" className={about['about']}>
        <div className={about['about__content-wrap']}>
          <h3 className={about['about__content-title']}>
          About app
          </h3>
          <div className={about['about__content-text']}>
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
            サンプルサンプルサンプルサンプルサンプルサンプルサンプル
          </div>
          {/* リンク先はセッション内のログイン情報に沿ってif文で変更する。ログインしている場合はマイページへ。していない場合はサインアップ画面へ移動する。 */}
          {/* TODO:href="#index-top"を使ってid属性を設定した所へ移動したのちリロードすると上手くいかない */}
          <a href="#index-top" className={about['about__content-link active-signup-menu']}>
            このサービスを使ってみる
          </a>
        </div>
      </section>
    </div>
  );
}
