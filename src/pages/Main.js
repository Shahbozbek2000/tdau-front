import React from 'react';
import './MainStyle';
import {
  MyContainer,
  Header,
  FirstPage,
  MainBottom,
  MainBody,
  TitleSection,
} from './MainStyle';
import { BsCalendarWeek } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import {
  AiFillEye,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import Navbar from '../components/MainPage/Navbar/Navbar';
import About from '../components/MainPage/AboutSection/About';
import News from '../components/MainPage/News/News';
import Service from '../components/MainPage/Service/Service';
import MediaGallery from '../components/MainPage/MediaGallery/MediaGallery';
import LinksSection from '../components/MainPage/LinksSection/LinksSection';
import IntroSection from '../components/MainPage/IntroSection/IntroSection';
import BottomNews from '../components/MainPage/BottomNews/BottomNews';

function Main() {
  return (
    <>
      <Header>
        <Navbar />
        <IntroSection />
        <BottomNews />
      </Header>
      <MainBody>
        <About />
        <TitleSection>
          <h2>Ташкентский государственный аграрный университет</h2>
          <h2>Ташкентский государственный аграрный университет</h2>
        </TitleSection>
        <News />
        <Service />
        <MediaGallery />
        <LinksSection />
      </MainBody>
    </>
  );
}
export default Main;
