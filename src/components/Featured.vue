<template>
  <div ref='wrapper' class='feature-wrap'>
    <div class='feature-inner'>
      <div class='feature-content'>
        <div class='features'>
          <div class='feature-inner' v-for="item in items" v-bind:key='item.id'>
            <Poi
              v-bind:index="item.id"
              v-bind:active="inViewport === true ? 'active' : ''" 
              v-bind:title='item.title'
              v-bind:content='item.content'
              v-bind:icon='item.icon' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Poi from './Poi';

export default {
  name: 'Featured',
  components: {
    Poi,
  },
  data() {
    return {
      inViewport: false,
      items: [
        {
          id: 1,
          title: 'Lawn maintenance',
          content: 'Lawn mowing and patch care produce a beautiful lawn',
          icon: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/lawn.png',
        },
        {
          id: 2,
          title: 'Re-turfing',
          content: 'Real and astroturf replacement and ground leveling',
          icon: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/grass.png',
        },
        {
          id: 3,
          title: 'Flower and tree planting',
          content: 'Bring colour to your garden with new flowers and trees',
          icon: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/spring.png',
        },
        {
          id: 4,
          title: 'Seasonal preperation',
          content: 'Prepare your garden for the upcomming season',
          icon: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/wheelbarrow.png',
        },
        {
          id: 5,
          title: 'General maintenance',
          content: 'Tidy your garden with our general maintenance service',
          icon: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/shovel.png',
        },
        {
          id: 6,
          title: 'Fence maintenance',
          content: 'Replace or paint your fences for your gardens finishing touch',
          icon: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/fence.png',
        },
      ],
    };
  },
  methods: {
    handleScroll(event){
      if(this.$parent.elementInViewport(this.$refs.wrapper)){
        this.inViewport = true;
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang='scss' scoped>

$black: #333;

.feature-wrap{
  background-image: url('https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/autumn.jpg');
  position: relative;
  width: 100%;
  height: 100%;
  display: table;
  background-attachment: fixed;
  background-size: cover;
  text-align: left;
  z-index: 2;

  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($black, 0.6);
  }


  .feature-inner{
    position: relative;
    z-index: 2;
    display: table;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1100px;

    .feature-content{
      position: relative;
      z-index: 2;
      padding: 100px 20px;
      max-width: 100%;
      display: table-cell;
      vertical-align: middle;

      .features{
        position: relative;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .feature-inner{
          max-width: 100%;
          width: 300px;
          padding: 10px;
        }

      }
    }
  }
}

</style>
