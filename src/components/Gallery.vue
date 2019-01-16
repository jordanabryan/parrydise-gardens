<template>
    <div ref='galleryWrapper' class='content-section'>
        <div class='content-wrap'>
            <div class='content-inner'>
                <h3>Gallery</h3>
                <div class='gallery'>
                    <div 
                        v-bind:class="[inViewport === true ? 'active' : '', 'gallery-image']" 
                        v-bind:style="inViewport === true ? `transition-delay: ${(index * 100)}ms;` : ''" 
                        v-for="(item, index) in gallery" v-bind:key='index'>
                        <img
                            v-on:click="show" 
                            v-bind:src="item.src" 
                            v-bind:alt="item.alt"
                            v-bind:title="item.title" />
                    </div>
                </div>
            </div>
        </div>
        <div 
            v-if="ifshowing"
            v-bind:class="[showing == true ? 'showing' : '', 'gallery-model']"
            v-on:click="hide">
            <div 
                v-bind:class="[showing == true ? 'showing' : '', 'gallery-model-inner']">
                <div class='gallery-model-close'>&times;</div>
                <div class='gallery-model-image'>
                    <img ref='galleryImage' v-bind:src="galleryShowing.image" />
                </div>
                <div class='gallery-model-content'>{{ galleryShowing.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Container',
    props: ['title', 'content'],
    data(){
        return {
            showing: false,
            ifshowing: false,
            inViewport: false,
            galleryShowing: {
                image: '',
                content: ''
            },
            gallery: [{
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-11.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-0.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-1.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-2.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-3.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-4.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-5.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-6.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-7.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-8.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-9.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            },
            {
                src: 'https://s3.eu-west-2.amazonaws.com/parrydise-gardens/static/gallery/garden-10.jpg',
                alt: 'before garden maintenance photo',
                title: 'before garden maintenance'
            }],
        }
    },
    methods: {
        show(event) {

            if(this.ifshowing == true) return false;

            this.ifshowing = true;
            
            setTimeout(() => {
                this.galleryShowing.image = event.target.src;
                this.galleryShowing.content = event.target.title;
                this.showing = true;
            }, 50);

        },
        hide(){
            if(this.ifshowing == false) return false;
            
            this.showing = false;

            setTimeout(() => {
                this.galleryShowing.image = '';
                this.galleryShowing.content = '';
                this.ifshowing = false;
            }, 500);
        },
        handleScroll(event){
            if(this.$parent.elementInViewport(this.$refs.galleryWrapper)){
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

.gallery{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .gallery-image{
        width: 25%;
        max-height: 200px;
        overflow: hidden;
        padding: 10px;
        transform: scale(0);
        transition: all 500ms;

        &.active{
            transform: scale(1);
        }

        @media(min-width: 660px) and (max-width: 880px){
            width: 50%;
        }

        @media(max-width: 660px){
            width: 100%;
        }

    }
}


.gallery-model{
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    display: flex;

    &.showing{
        pointer-events: auto;    
    }

    .gallery-model-inner{
        width: 60%;
        max-height: 60%;
        display: block;
        transform: scale(0);
        transition: all 500ms;
        overflow: hidden;

        &.showing{
            transform: scale(1);
        }

        .gallery-model-close{
            color: #fff;
            font-size: 20px;
            font-wight: bold;
            text-align: right;
            cursor: pointer;
        }
        .gallery-model-image{}
        .gallery-model-content{
            margin-top: 5px;
            color: #fff;
        }
    }
}


</style>

