<template>
  <div class='title-wrap'>
    <video autoplay muted loop class="bgvideo">
      <source src='https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/video.mp4' type="video/mp4">
    </video>
    <div class='title-inner'>
      <div class='logo-holder'>
        <div class='logo-wrap'>
          <img src='https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/logo.png' class='logo' alt='parrydise gardens' />
        </div>
        <p>{{ phone }}</p>
        <p>{{ facebook }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      phone: '07780528844',
      facebook: '@ParrydiseGardens',
    };
  },
};
</script>

<style lang='scss' scoped>

$black: #333;
$white: #fff;

.title-wrap{
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .title-inner{
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    &:before{
      content: '';
      background: rgba($black, 0.3);
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 1;
    }

    .logo-holder{
      width: 350px;
      text-align: center;
      text-shadow: 0 0 10px $black;
      color: $white;
      margin-top: 30px;
      position: relative;
      z-index: 5;

      .logo-wrap{
        width: 250px;
        margin: 0 auto 20px;
        border-radius: 50%;
        box-shadow: 0 0 20px $black;
      }
      p{
        font-size: 2em;
        font-weight: bold;
        color: $white;
        margin: 10px 0 0 0;
      }
    }

  }

}

.bgvideo{
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

</style>
