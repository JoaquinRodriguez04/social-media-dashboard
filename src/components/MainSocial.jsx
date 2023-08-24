import { useContext } from 'react';
import { SocialContext } from './SocialContext';
import BackSocial from './BackSocial';
import ContentSocial from './ContentSocial';

const MainSocial = () => {

  const {isMode} = useContext(SocialContext);

  return (
    <main className={`app-container ${isMode && 'app-mode-dark'}`}>
        <BackSocial/>
        <ContentSocial/>
    </main>
  )
};

export default MainSocial;
