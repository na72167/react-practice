import React,{ VFC,Fragment } from 'react';
import { Link } from 'react-router-dom';
import header from '../scss/header/header.module.scss';

export const Header: VFC =  () => {
  return (
    <header id="index-top" className={`js-toggle-sp-menu-target ${header.header}`}>
      <div className={header['header__content-wrap']}>
          <h1 className={header['header__title']}>
            {/* リンク設定 */}
              Title
          </h1>
          <nav className={header['header__nav']}>
            <li className={header['header__nav-list']}>MENU</li>
              {/* <router-link to="/SelectReviewCompany" class="menuAbout__itemWrap-lineNone"> */}
              <li className={header['header__nav-list']}>POSTING REVIEW</li>
            <li className={header['header__nav-list']}>LOGOUT</li>
          </nav>
        <div>
        </div>
      </div>
    </header>
  );
}

