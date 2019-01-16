<template>
    <div class='quote-wrap'>
        <div class='quote-inner'>
            <div class='quote'>
                <p class='title'>{{ quote }}</p>
                <p class='small'>{{ author }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Review',
  data() {
    return {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jordan Bryan',
    };
  },
};

</script>

<style lang='scss' scoped>

$black: #333;
$light-grey: #ddd;

.quote-wrap{
    position: relative;
    z-index: 2;
    background: $light-grey;
    height: 300px;
    width: 100%;

    @media(max-width: 700px){
        height: initial;
    }

    .quote-inner{
        text-align: center;
        padding: 60px;
        position: relative;
        z-index: 2;
        display: table;
        margin: 0 auto;
        max-width: 1100px;
        width: 100%;
        height: 100%;

        .quote{
            display: table-cell;
            vertical-align: middle;
            position: relative;
            height: 100%;

            .title{
                font-size: 2em;
                margin-bottom: 5px;
            }

            .small{
                font-size: 1.6em;
            }

            &:before{
                content: '"';
                font-family: 'Times new roman';
                position: absolute;
                font-size: 5em;
                left: -20px;
                color: rgba($black, 0.3);
                top: -10px;
            }

            &:after{
                content: '"';
                font-family: 'Times new roman';
                position: absolute;
                font-size: 5em;
                right: -30px;
                color: rgba($black, 0.3);
                bottom: -20px;
            }
        }
    }
}

</style>
