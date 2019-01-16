<template>
    <div ref='wrapper' class='breaker-wrap' :style="`background-image: url(${image})`">
        <div :class="['breaker-inner', align]">
            <div class='breaker-content'>
                <div 
                    v-bind:class="[inViewport === true ? 'active' : '', 'breaker']"
                    v-bind:style="pos === 'left' ? 'left: -1000px;' : 'left: 1000px;'">
                    <h3>{{ title }}</h3>
                    <p>{{ content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Breaker',
    props: ['image', 'title', 'content', 'align', 'pos'],
    data(){
        return {
            inViewport: false,
        }
    },
    methods: {
        handleScroll(event){
            if(this.$parent.elementInViewport(this.$refs.wrapper)){
                this.inViewport = true;
            } else {
                this.inViewport = false;
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
$white: #fff;

.breaker-wrap{
    position: relative;
    width: 100vw;
    height: 100vh;
    display: table;
    background-attachment: fixed;
    background-size: cover;
    text-align: left;
    z-index: 3;

    .breaker-inner{
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 auto;
        width: 100vw;
        min-height: 100vh;
        max-width: 1100px;

        &.justify-end{
            justify-content: flex-end;
        }

        &.justify-start{
            justify-content: flex-start;
        }

        .breaker-content{
            position: relative;
            z-index: 2;
            padding: 100px 20px;
            max-width: 100%;

            .breaker{
                background: rgba($black, 0.8);
                padding: 20px;
                max-width: 700px;
                width: 100%;
                color: $white;
                position: relative;
                transition: all 500ms;

                &.active{
                    left: 0 !important;
                }

                h3{
                    font-size: 2em;
                    margin: 0 0 20px 0;
                }

                p{
                    font-size: 1.6em;
                }
            }
        }
    }
}

</style>
