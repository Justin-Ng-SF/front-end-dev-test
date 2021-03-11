import React from 'react';

import Subsection from './components/subsection';
import WelcomeSection from './components/welcomeSection'
import MessageBlock from './components/message-block'
import Icons from './components/icons'
import Picture from './components/picture'
import CarouselComponent from './components/carousel'
import Footer from './components/footer'

import logo from './front-end-dev-test-assets/logo-white.svg'
import mainPicture from './front-end-dev-test-assets/hero.jpg'
import banner1 from './front-end-dev-test-assets/banner-1.jpg'
import banner2 from './front-end-dev-test-assets/banner-2.jpg'
import img1 from './front-end-dev-test-assets/img-1.jpg'
import stars from './front-end-dev-test-assets/5star.png'

import icon1 from './front-end-dev-test-assets/home-expertise.svg'
import icon2 from './front-end-dev-test-assets/home-hygiene.svg'
import icon3 from './front-end-dev-test-assets/home-lab.svg'
import icon4 from './front-end-dev-test-assets/home-retention.svg'

import fbIcon from './front-end-dev-test-assets/facebook.svg'
import igIcon from './front-end-dev-test-assets/instagram.svg'

import './App.css';
import 'semantic-ui-css/semantic.min.css'

var icon1link = 'icon1';
var icon2link = 'icon2';
var icon3link = 'icon3';
var icon4link = 'icon4';

var hyperlink1 = 'hyperlink1';
var hyperlink2 = 'hyperlink2';

var facebooklink = 'facebook';
var instagramlink = 'instagram'

function App() {
  return (
    <div className='App'> 
      {/* Welcome section */}
      <WelcomeSection picture={mainPicture} logo={logo}/>

      {/* section 1 climbing */}
      <Subsection color1='white'>
        <MessageBlock
          header='Sint voluptate'
          color='purple'
          content='Ea deserunt culpa consequat adipisicing enim eiusmod voluptate Lorem sit amet id ex amet ut. Pariatur labore ea esse eu duis non sunt irure ullamco. Ad velit cupidatat aliqua minim aute nisi sit est tempor sit tempor ullamco duis commodo.'
          link={hyperlink1}
        />
        <Picture src={img1} height='100%'/>
      </Subsection>

      {/* section 2 mom with son*/}
      <Subsection picture={banner1}>
        <MessageBlock
          header='Sint voluptate'
          color='purple'
          button='ui orange button'
        />
        {/* blank tag to fill in as right side of subsection */}
        <></>
      </Subsection>

      {/* section 3 icons*/}
      <Subsection color='white'  color1='white' color2='#fafafa'>
        <MessageBlock
          header='Sint voluptate'
          content='Ad cillum magna minim labore tempor eiusmod excepteur nostrud incididunt.'
          link={hyperlink2}
        />

        <div className='icons'>
          <Icons icon={icon1} link={icon1link} id='icon1' className='icon'/> 
          <Icons icon={icon2} link={icon2link} id='icon2' className='icon'/>
          <Icons icon={icon3} link={icon3link} id='icon3' className='icon'/>
          <Icons icon={icon4} link={icon4link} id='icon4' className='icon'/>
        </div>
      </Subsection>

      {/* section 4 little kid smiling*/}
      <Subsection picture={banner2}>
        <></>
        <MessageBlock
          header='Sint voluptate'
          color='purple'
          content='Mollit ipsum dolore occaecat magna anim commodo officia aliquip mollit nostrud anim.'
          button='ui orange button'
        />
      </Subsection>

      {/* sectoin 5 carousel */}
      <Subsection id='carousel' bgColor='white'>
        <div className='rating'>
          <h2 className='rating-msg'>
            Sint voluptate
          </h2>
          <img src={stars}/>
        </div>

        <CarouselComponent
          name1='first last1'
          date1='03/10/2021'
          text1='In cupidatat sint veniam do. Nostrud esse ex reprehenderit veniam reprehenderit est nulla excepteur. Irure. Reprehenderit irure elit dolore sit velit excepteur veniam. Ad cillum et reprehenderit quis culpa duis fugiat qui exercitation tempor. Quis esse consectetur quis ea. Nulla ipsum non sunt.'

          name2='first last2'
          date2='03/10/2021'
          text2='Officia eu cupidatat qui voluptate ex quis nisi officia ad.'

          name3='first last3'
          date3='03/10/2021'
          text3='Ex eu Lorem esse enim labore non incididunt Lorem dolore commodo excepteur exercitation est.'
        />
      </Subsection>

      {/* footer */}
      <Footer
        icon1={igIcon}
        link1={instagramlink}
        icon2={fbIcon}
        link2={facebooklink}
      />
    </div>
  );
}

export default App;
