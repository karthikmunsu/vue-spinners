<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-traingle" :style="spinnerStyle">

        </div>
    </div>
</template>

<script>
export default {
    name: 'TraingleLoader',
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
            default: '25px'
        }
    },
    computed: {
        spinnerStyle () {
            let style = {
                borderLeft: `${this.size} solid transparent`,
                borderRight: `${this.size} solid transparent`,
                borderBottom: `${this.size} solid ${this.color}`
            }
            return style;
        }
    }
}
</script>

<style>
.v-spinner .v-traingle {
    animation: anim 2s 0s infinite cubic-bezier(.09, .47, .47, .9);
}
@-webkit-keyframes anim {
    0% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0deg);
        transform: perspective(100px) rotateX(180deg) rotateY(0deg);
    }
    50% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
        transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(180deg);
        transform: perspective(100px) rotateX(0deg) rotateY(180deg);
    }
    100% {
        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg);
        transform: perspective(100px) rotateX(0deg) rotateY(0deg);
    }
}
@keyframes anim {
    0% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0deg);
        transform: perspective(100px) rotateX(180deg) rotateY(0deg);
    }
    50% {
        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
        transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(180deg);
        transform: perspective(100px) rotateX(0deg) rotateY(180deg);
    }
    100% {
        -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg);
        transform: perspective(100px) rotateX(0deg) rotateY(0deg);
    }
}
</style>

