<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-domino">
            <div class="domino1" :style="spinnerStyle"></div>
            <div class="domino2" :style="spinnerStyle"></div>
            <div class="domino3" :style="spinnerStyle"></div>
            <div class="domino4" :style="spinnerStyle"></div>
            <div class="domino5" :style="spinnerStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DominoLoader',
    props: {
        loading: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: '#28B463'
        },
        height: {
            type: String,
            default: '20px'
        },
        width: {
            type: String,
            default: '5px'
        }
    },
    computed: {
        spinnerStyle () {
            let style = {
                height: this.height,
                width: this.width,
                backgroundColor: this.color
            }
            return style;
        }
    }
}
</script>

<style>
.domino1, .domino2, .domino3, .domino4, .domino5 {
    display: inline-block;
    border-radius: 2px;
    padding-right: 5px;
    animation: dangle 2s infinite linear;
}
.domino1{
    animation-delay: 0.1s;
}
.domino2{
    animation-delay: 0.2s;
}
.domino3{
    animation-delay: 0.3s;
}
.domino4{
    animation-delay: 0.4s;
}
.domino5{
    animation-delay: 0.5s;
}
@keyframes dangle {
    0%{
        transform: perspective(50px) rotate(45deg);
    }
    50% {
        transform: perspective(50px) rotate(75deg);
    }
    75% {
        transform: perspective(50px) rotate(-45deg);
    }
    100% {
        transform: perspective(50px) rotate(0deg);
    }
}
@-webkit-keyframes dangle {
    0%{
        transform: perspective(50px) rotate(45deg);
    }
    50% {
        transform: perspective(50px) rotate(75deg);
    }
    75% {
        transform: perspective(50px) rotate(-45deg);
    }
    100% {
        transform: perspective(50px) rotate(0deg);
    }
}
</style>

