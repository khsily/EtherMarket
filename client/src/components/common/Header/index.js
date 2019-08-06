import React from 'react';

import './Header.scss';
import logo_main from '../../../images/logo_main.png';

const Header = ({ navList }) => {
  const { login, not_login } = navList;

  return (
    <header>
      <div className='container'>
        <ul className='header-sub-nav'> 
          <li className='header-sub-nav-list'>로그인</li>
          <li className='header-sub-nav-list'>회원가입</li>
        </ul>
        <div className='header-main'>
          <img className='header-logo' src={ logo_main } alt='logo' />
          <ul className='header-main-nav'>
            <li className='header-main-nav-list active'>HOME</li>
            <li className='header-main-nav-list'>스토어</li>
            <li className='header-main-nav-list'>게시판</li>
          </ul>
          <div className='header-search-wrapper'>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;