import React, { useContext } from 'react'
import { SocialContext } from './SocialContext';

// icons
import up from '../assets/icons/icon-up.svg';
import down from '../assets/icons/icon-down.svg';

const TodaySocial = () => {

  const {followers, isMode, lessAmount} = useContext(SocialContext);

  return (
    <section className='today-social-container'>
      <h2 className={`today-title ${isMode && 'today-title-mode-dark'}`}>Overview - today</h2>
      <section className='grid-social-wrapper'>
          {/* cards overview - today */}
          {followers.cardsToday && followers.cardsToday.map((today) => {
            return (
              <div 
              className={`today-social-card grid-social-card ${isMode && 'grid-card-mode-dark'}`}
              key={today.id}>
                  <div className="today-top">
                    <p className='profile'>{today.title}</p>
                    <img src={today.img} alt="img-social-media" />
                  </div>
                  <div className="today-bottom">
                    <h2 className={`today-title amount ${isMode && 'amount-mode-dark'}`}>{today.number >= 10000 ? lessAmount(today.number) : today.number}</h2>
                    <div className="follower-result-wrapper">
                      {today.less ? 
                        <img src={up} alt="img-icon-up" />
                        :
                        <img src={down} alt="img-icon-down" />
                      }
                      <span className={`result ${today.less ? 'result-green' : 'result-red'}`}> {today.percentaje}%</span>
                    </div>
                  </div>
              </div>
              )
          })}
      </section>
    </section>
  )
};

export default TodaySocial;
