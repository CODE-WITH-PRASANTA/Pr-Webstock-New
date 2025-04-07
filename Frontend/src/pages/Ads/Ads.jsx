import React from 'react';
import './Ads.css';


// asserts of the ads
import ads1img from '../../assets/ads-1-img.png'; // Adjust the path if needed
import displayads from '../../assets/display-ads.jpeg'
import socialmediaads from '../../assets/blogart.jpg'
import staticpostads from '../../assets/static-post-ads.jpeg'
import storiesads from '../../assets/stories-ads.jpeg'
import trialgift from '../../assets/trial-gift.png'
import Inquery from '../../components/Inquery/Inquery';

const Adsection = () => {
  return (
    <>
    <section className="Projects-section">
      <div className="Projects-content">
        <h1>Ads Section</h1>
        <p>Explore some of the impactful digital advertising campaigns that we works</p>
      </div>
    </section>

    <div className="ads-container">
      <div className="full-container">
      <div className="ads-content">
        <h2>What Is Digital Advertising?</h2>
        <p>
          Advertising is digital when you use online platforms to promote your products and services.
          Digital ads appear on search engines, social media, and websites.
        </p>
        <p>
          Unlike traditional advertising on TV, radio, or print, digital ads have the advantage of precise targeting.
          They also let you personalize ad content to fit your intended recipients and the context of their online activities.
        </p>
        <p>
          For instance, if someone in your target demographic searches for "buy dog food" on Google,
          they might see a search ad for your dog food delivery service. This ad is personalized based on
          your settings and the target audience’s search.
        </p>
      </div>
      <div className="section-ads-image">
        <img src={ads1img} alt="Digital Advertising" />
      </div>
      </div>

{/* Container-2 */}
      <div className="full-container-2">
      <div className="ads-content">
        <h2>Google Search Ads</h2>
        <p>
        Directly connect with individuals searching for keywords related to your business through search ads. 
        </p>
        <p>
        These are text-based advertisements that appear on search engine results pages (SERPs). They're positioned alongside organic search results and are clearly labeled as ads. 
        </p>
        <p>
        Search ads give you the flexibility to customize your ad's content, target specific keywords used in searches, and manage your budget to optimize your campaign performance.
        </p>
      </div>
      <div className="section-ads-image">
        <img src={ads1img} alt="Digital Advertising" />
      </div>
      </div>
{/* Container-3 */}

<div className="full-container-3">
      <div className="ads-content">
        <h2>Display Ads</h2>
        <p>
        Use display ads to show up on websites that are part of a search engine's advertising network. Like Google Display Network.
        </p>
        <p>
        For example, if you sell art supplies, you may set your display ads to appear on art-related websites. That way, you reach users who are likely to be interested in your products.
        </p>
        <p>
        Display ads help increase brand visibility and attract potential customers to your website.
        Like search ads, competitive analysis is key to creating effective display ad campaigns. When you learn what's working for competitors (and what's not), you can create better display ads that drive greater results.
        </p>
      </div>
      <div className="section-ads-image">
        <img src={displayads} alt="Display ads" />
      </div>
      </div>

      <div className="full-container-4">
      <div className="ads-content">
        <h2>Social Media Advertising</h2>
        <p>
        Target audiences on platforms like Facebook, Instagram, and X (formerly Twitter) with social media advertising. 
        </p>
        <p>
        Each platform offers unique ad formats for different marketing goals. 
        </p>
        <p>
        For example, X allows businesses to sponsor trending topics. This can drive brand awareness or bring people's attention to ongoing campaigns.
        </p>
      </div>
      <div className="section-ads-image">
        <img src={socialmediaads} alt="Digital Advertising" />
      </div>
      </div>

      <div className="full-container-5">
      <div className="ads-content">
        <h2>Static Image AdsStatic Image Ads</h2>
        <p>
        Capture users' attention and encourage them to act with static image ads. They consist of a single image coupled with text. 
        </p>
        <p>
        These ads aim to intrigue and inform users as they scroll through their feeds.
        </p>
        <p>
        When creating a static image ad, you'll choose an image that stands out, write concise, persuasive copy, and include a clear call to action (CTA) like "Shop Now" or "Learn More." 
        </p>
        <p>
        For instance, if you're advertising handmade jewelry on Pinterest, you want to select a high-quality image that highlights the craftsmanship and beauty of your pieces, then pair it with a message that speaks directly to the viewer's desire for unique accessories. 
        </p>
      </div>
      <div className="section-ads-image">
        <img src={staticpostads} alt="static-post-ads" />
      </div>
      </div>

{/* Content-6 */}
  <div className="full-container-6">
      <div className="ads-content">
        <h2> Stories Ads</h2>
        <p>
        Appear between users' stories on platforms like Instagram and Snapchat with stories ads. These ads last only 24 hours.
        </p>
        <p>
        They're full-screen and immersive, giving you a captive audience for your message. 
        </p>
        <p>
        These ads can include images or short videos. And they always have a clear call to action, like "Swipe Up to Shop." 
        </p>
        <p>
        This format is ideal for time-sensitive offers or promotions. For instance, if you're having a flash sale. The temporary nature creates a sense of urgency. 
        </p>
      </div>
      <div className="section-ads-image">
        <img src={storiesads} alt="stories-ads" />
      </div>
      </div>
    </div>


<Inquery />
    
   </>

  );
};

export default Adsection;
