import { useContext } from "react";
import { SocialContext } from "./SocialContext";

// icons
import up from '../assets/icons/icon-up.svg';
import down from '../assets/icons/icon-down.svg';

const FollowersSocial = () => {

  const {isMode, followers, lessAmount} = useContext(SocialContext);


  return (
    <section className='grid-social-wrapper'>
      {/* cards followers */}
      {followers.cardsFollowers && followers.cardsFollowers.map((follower) => {
        return (
          <div 
          className={`grid-social-card ${isMode && 'grid-card-mode-dark'}`}
          key={follower.id}>
            <div className={`follower-back-top follower-${follower.socialNetwork}`}></div>
            <div className="follower-content">
              <div className="follower-profile-wrapper">
                <img src={follower.img} alt="img-social-media" />
                <p className="profile">{follower.profile}</p>
              </div>
              <div className="follower-amount-wrapper">
                <h2 className={`amount ${isMode && 'amount-mode-dark'}`}>{follower.followers >= 10000 ? lessAmount(follower.followers) : follower.followers}</h2>
                <p className={`title ${isMode && 'title-mode-dark'}`}>{follower.socialNetwork === 'youtube' ? 'subscribers' : 'followers'}</p>
              </div>
              <div className="follower-result-wrapper">
                {follower.less ? 
                  <img src={up} alt="img-icon-up" />
                  :
                  <img src={down} alt="img-icon-down" />
                }
                <span className={`result ${follower.less ? 'result-green' : 'result-red'}`}> {follower.numberToday} today</span>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
};

export default FollowersSocial;
