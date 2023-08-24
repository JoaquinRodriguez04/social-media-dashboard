import React, { useContext } from 'react'
import { SocialContext } from './SocialContext';

const BannerSocial = () => {

    const {isMode, setIsMode, isToggle, setIsToggle} = useContext(SocialContext);

    const handleShowToggle = () => {
        setIsToggle(!isToggle);
        setIsMode(!isMode);
    };

    return (
      <section className='banner-social-container'>
          <div className="description-banner-social">   
              <h2 className={`description-banner-title ${isMode && 'title-banner-mode-dark'}`}>Social Media Dashboard</h2>
              <p className={`description-banner-followers ${isMode && 'followers-banner-mode-dark'}`}>Total Followers: 23,004</p>
          </div>
          <div className='line-separation-mobile'></div>
          <div className="mode-banner-social">
              <p className='mode-banner-title'>Dark Mode</p>
              <div 
              className={`mode-banner-toggle-wrapper ${isMode && 'toggle-wrapper-mode-dark'}`}
              onClick={handleShowToggle}>
                  <button 
                  className={`mode-banner-btn ${isToggle && 'toggle-active'} ${isMode && 'banner-btn-mode-dark'}`}></button>
              </div>
          </div>
      </section>
    )
};

export default BannerSocial;
