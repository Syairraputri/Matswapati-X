import { useEffect } from 'react';
import defaultUsers from '../scripts/defaultUsers';
import MaswapatiXPageNav from '../../../components/Matswapati-page-nav/Nav';
import MaswapatiXPageFooter from '../../../components/MatswapatiX-page-footer/Footer';
import MainSection from './main-sections/MainSection';

export default function App() {
  useEffect(() => {
    const users = window.localStorage.getItem('users');
    const currentChangeUser = window.localStorage.getItem(
      'current-change-user'
    );
    if (users === null || currentChangeUser === null) {
      window.localStorage.setItem('users', JSON.stringify(defaultUsers));
      window.localStorage.setItem('current-change-user', '');
    }

    if (window.localStorage.getItem('current-user-remember') === 'true') {
      window.location.replace('/pages/user/dashboardrangkuman/');
    } else {
      window.localStorage.setItem('current-user-name', '');
      window.localStorage.setItem('current-user-role', '');
    }
  }, []);

  return (
    <>
      <div className="sticky top-0">
        <MaswapatiXPageNav />
      </div>
      <MainSection />
      <MaswapatiXPageFooter />
    </>
  );
}