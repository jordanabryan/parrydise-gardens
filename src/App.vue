<template>
  <div id="app">
    <Title />
    <Review />
    <Container
      title='Garden maintenance, Southport, Merseyside'
      content='Parrydise Gardens specialises in high quality gardening and gardening maintenance in the Southport area.
      We offer a range of services and plans to help you get the most out of your garden whatever time of year! Weather 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi
      ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.' />
    <Breaker
      image='https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/watering.jpg'
      title='Weekly or fortnightly'
      align='justify-start'
      pos='left' 
      content='We offer weekly or fourtnightly programs, allowing for almost all types of flexability.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi
      ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.' />
    <Container
      title='How we can help you'
      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi
      ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.' />
    <Breaker
      image='https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/lawnmower.jpg'
      title='Affordable seasonal maintenance'
      align='justify-end'
      pos='right'
      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi
      ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.' />
    <Gallery />
    <Featured />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>

import Title from './components/Title';
import Review from './components/Review';
import Breaker from './components/Breaker';
import Container from './components/Container';
import Gallery from './components/Gallery';
import Featured from './components/Featured';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Title,
    Review,
    Breaker,
    Container,
    Gallery,
    Featured,
    ContactForm,
    Footer,
  },
  methods: {
    elementInViewport: function(el) {
      let top = el.offsetTop;
      let left = el.offsetLeft;
      let width = el.offsetWidth;
      let height = el.offsetHeight;

      while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }

      return (
        top + 400 < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
      );
    },
  }
};
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body{
  width: 100%;
  height: 100%;
}

body{
  font-weight: 300;
}

img{
  width: 100%;
  height: auto;
  display: block;
}

ul, li{
  list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  width: 100vw;
  overflow-x: hidden;
}

</style>
