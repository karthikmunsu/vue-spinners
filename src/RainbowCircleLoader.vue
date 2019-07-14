<template>
    <div class="v-spinner" :show="loading">
        <div class="v-rainbow" :style="spinnerStyle">

        </div>
    </div>
</template>

<script>
export default {
    name: 'RainbowCircleLoader',
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
            default: '35px'
        },
        radius: {
            type: String,
            default: '100%'
        }
    },
    computed: {
        spinnerStyle () {
            let style = {
                height: this.size,
                width: this.size,
                borderWidth: '2px',
                borderRadius: this.radius,
                background: 'transparent'
            }
            return style;
        }
    }
}
</script>

<style>
.v-spinner {
    
}
.v-rainbow {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border-top: 3px solid #28B463;
    border-bottom: 3px solid #28B463;
    animation: spin 1s linear infinite;
}
.v-spinner .v-rainbow
{
    -webkit-animation: v-anim 0.75s 0s infinite linear;
            animation: v-anim 0.75s 0s infinite linear;
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
    100%
    {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
</style>

