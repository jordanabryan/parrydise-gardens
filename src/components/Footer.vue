<template>
    <div class='footer-wrap'>
        <div class='footer-inner'>
            <div class='copyright'>
                <p>Copyright Parrydise Gardens 2018</p>
                <p>Developed by Lime House Studio</p>
                <p>All Rights Reserved</p>
            </div>
            <div class='footer-social'>
                <a href='#' target='_blank'><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                <a href='#' target='_blank'><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href='#' target='_blank'><font-awesome-icon :icon="['fa', 'envelope']" /></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Footer',
};

</script>


<style lang='scss' scoped>

.footer-wrap{
    background: #2c3e50;
    color: #fff;
    position: relative;
    height: 25vh;
    display: flex;
    align-items: center;
    padding: 20px;

    @media(max-width: 660px){
        justify-content: center;
    }

    .footer-inner{
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .copyright{

        }
        .footer-social{
            padding-left: 10px;

            a{
                font-size: 2em;
                color: #fff;
                text-decoration: none;
                margin-left: 15px;
                display: inline-block;
            }

        }

    }

    p{
    font-weight: bold;
    }

}

</style>
