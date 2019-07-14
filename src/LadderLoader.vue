<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-ladder">
            <div class="property" :style="spinnerStyle"></div>
            <div class="ladder" :style="spinnerColor"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LadderLoader',
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
            default: '10px'
        }
    },
    computed: {
        spinnerStyle () {
            let style = {
                height: this.size,
                width: this.size,
                backgroundColor: this.color
            }
            return style;
        },
        spinnerColor() {
            return {
                 backgroundColor: this.color
            }
        }
    }
}
</script>

<style>
.v-ladder {
    width: 100px;
    height: 100px;
}
.property {
    bottom: 0px;
    position: absolute;
    animation: climb 3s infinite linear;
}
.ladder {
    height: 5px;
    width: 100px;
    transform: rotate3d(0.5, 0, 1, -50deg);
}
@keyframes climb{
    0%{
        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, 0px) rotate(0deg);
    }
    25% {
        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -25px) rotate(180deg);
    }
    50%{
        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -50px) rotate(360deg);
    }
    75%{
        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -75px) rotate(0deg);
    }
    100%{
        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -105px) rotate(180deg);
    }
}
@-webkit-keyframes climb{
    0%{
        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, 0px) rotate(0deg);
    }
    25% {
        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -25px) rotate(180deg);
    }
    50%{
        transform: rotate3d(0.5, 0, 1, 50deg) translate(0px, -50px) rotate(360deg);
    }
    75%{
        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -75px) rotate(0deg);
    }
    100%{
        transform:  rotate3d(0.5, 0, 1, 50deg) translate(0px, -105px) rotate(180deg);
    }
}
</style>

