<template>
    <div 
        v-bind:class="[active ? 'active' : '', 'poi-holder']"
        v-bind:style="active ? `transition-delay: ${(index * 100)}ms;` : ''">
        <div v-if='icon' class='poi-border'>
            <div class='poi-wrapper'>
                <div class='poi'>
                    <img :src="`${icon}`" />
                </div>
            </div>
        </div>
        <div v-if='iconsmall' class='poi-border'>
            <div class='poi-wrapper'>
                <div class='poi'>
                    <img :src="`${icon}`" />
                </div>
            </div>
        </div>
        <div class='poi-content'>
            <h4>{{ title }}</h4>
            <p v-if='content'>{{ content }}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Poi',
  props: ['title', 'content', 'icon', 'iconsmall', 'active', 'index'],
};

</script>


<style lang="scss" scoped>

$white: #fff;
$orange: #d28330;

.poi-holder{
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    top: 100px;
    opacity: 0;
    position: relative;
    transition: all 500ms;

    &.active{
        top: 0;
        opacity: 1;
    }

    .poi-border{
        width: 150px;
        height: 150px;
        text-align: center;
        margin: 0 auto 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        .poi-wrapper{
            width: 130px;
            height: 130px;
            display: flex;
            align-items: center;
            justify-content: center;

            .poi{
                font-size: 2em;
                padding: 10px;
            }
        }
    }

    .poi-content{
        color: $white;
        font-size: 1.1em;

        h4{
            font-size: 1.2em;
        }

        p{
        font-weight: bold;
        }

    }
}

</style>
