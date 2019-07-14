<template>
    <div class="v-spinner" :show="loading">
        <div class="v-tiles" :style="spinnerStyle">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TilesLoader',
    props: {
        loading: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: '#28B463'
        },
        size: {
            type: String,
            default: '50px'
        }
    },
    computed: {
        spinnerStyle () {
            let style = {
                height: this.size,
                width: this.size,
                borderWidth: '2px',
                background: this.color
            }
            return style;
        }
    }
}
</script>

<style>
.v-spinner .v-tiles
{
    -webkit-animation: v-anim 2s 0s infinite linear;
            animation: v-anim 2s 0s infinite linear;
    -webkit-animation-fill-mode: both;
	          animation-fill-mode: both;
    display: inline-block;
}

@-webkit-keyframes v-anim
{
    0%
    {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    50%
    {
        -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
    }
    100%
    {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}

@keyframes v-anim
{
    0%
    {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    50%
    {
        -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
    }
    100%
    {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
</style>

