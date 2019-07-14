<template>
    <div class="v-spinner v-center" v-show="loading">
        <div class="v-pac-man" :style="spinnerStyle"></div>
        <div class="obstacle1" :style="objStyle"></div>
        <div class="obstacle2" :style="objStyle"></div>
        <div class="obstacle3" :style="objStyle"></div>
        <div class="obstacle4" :style="objStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'PacLoader',
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
                borderTop: `25px solid ${this.color}`,
                borderBottom: `25px solid ${this.color}`,
                borderLeft: `25px solid ${this.color}`
            }
            return style;
        },
        objStyle() {
            return {
                height: this.size,
                width: this.size,
                backgroundColor: this.color
            }
        }
    }
}
</script>

<style>
.v-center {
    display: block;
    text-align: center;
    position: relative;
}
.v-pac-man {
    height: 50px;
    width: 50px;
    border-right: 25px solid transparent;
    border-radius: 50%;
    position: relative;
    float: left;
}
.obstacle1, .obstacle2, .obstacle3, .obstacle4, .obstacle5 {
    border-radius: 50%;
    display: inline-block;
    margin-top: 21px;
    padding-right: 5px;
    animation: move 1s infinite linear;
    transform: translate(0px, -1.25px);
    position: absolute;
    left: 100px;
}
.obstacle1 {
    animation-delay: 0.25s;
}
.obstacle2 {
    animation-delay: 0.5s;
}
.obstacle3 {
    animation-delay: 0.75s;
}
.obstacle4 {
    animation-delay: 1s;
}

@keyframes move {
    100% {
        transform: translate(-100px, -1.25px)
    }
}
@-webkit-keyframes move {
    100% {
        transform: translate(-100px, -1.25px)
    }
}
</style>

