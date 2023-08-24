import { useContext } from 'react';
import { SocialContext } from './SocialContext';

const BackSocial = () => {

  const {isMode} = useContext(SocialContext);

  return (
    <div className={`back-social-container ${isMode && 'back-social-mode-dark'}`}>
    </div>
  )
};

export default BackSocial;
