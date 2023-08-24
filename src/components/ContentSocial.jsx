import BannerSocial from './BannerSocial';
import FollowersSocial from './FollowersSocial';
import TodaySocial from './TodaySocial';

const ContentSocial = () => {
  return (
    <section className='content-social-container'>
       <BannerSocial/>
       <FollowersSocial/>
       <TodaySocial/>
    </section>
  )
};

export default ContentSocial;
