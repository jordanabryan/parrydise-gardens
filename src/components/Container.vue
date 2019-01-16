<template>
    <div class='content-section'>
        <div class='content-wrap'>
            <div class='content-inner'>
                <h3>{{ title }}</h3>
                <p>{{ content }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Container',
  props: ['title', 'content'],
};

</script>

<style lang="scss" scoped>

$white: #fff;

.content-section{
    background: $white;
    z-index: 3;
    position: relative;

    .content-wrap{
        position: relative;
        width: 100vw;
        min-height: 100vh;
        margin: 0 auto;
        max-width: 1100px;
        display: flex;
        align-items: center;
        background: $white;

        .content-inner{
            position: relative;
            z-index: 2;
            padding: 100px 20px;
            max-width: 100%;

            h3{
                font-size: 2.6em;
                margin: 0 0 20px 0;
            }

            p{
                font-size: 1.6em;
            }
        }
    }
}

</style>

