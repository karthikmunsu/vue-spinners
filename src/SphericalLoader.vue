<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-spherical" :style="spinnerStyle">
            <div class="circle1" :style="style1"></div>
            <div class="circle2" :style="style2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SphericalLoader',
    props: {
        loading: {
            type: Boolean,
            default: true
        },
        color1: {
            type: String,
            default: 'purple'
        },
        color2: {
            type: String,
            default: 'red'
        },
        color3: {
            type: String,
            default: 'green'
        }
    },
    computed: {
        spinnerStyle () {
            let style = {
                borderColor: `${this.color1} transparent transparent`
            }
            return style;
        },
        style1 () {
            return {
                borderColor: `${this.color2} transparent transparent`
            }
        },
        style2() {
            return {
                borderColor: `${this.color3} transparent transparent`
            }
        }
    }
}
</script>

<style>
.v-spherical {
    position: relative;
    border-style: solid;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    animation: spin 1s infinite linear;
}
.circle1, .circle2 {
    position: absolute;
    border-style: solid;
    border-radius: 50%;
    height: 100%;
    width: 100%;
}
.circle1 {
    margin-top: 2px;
    animation: spin 2s infinite;
    animation-delay: 0.2s;
}
.circle2 {
    margin-top: 7px;
    animation: spin 2s infinite;
    animation-delay: 0.4s;
}
@keyframes spin {
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
}
@-webkit-keyframes spin {
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
}
</style>

