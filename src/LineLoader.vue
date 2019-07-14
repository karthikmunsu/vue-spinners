<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-line" :style="containerStyle">
            <div class="line1" :style="spinnerStyle"></div>
            <div class="line2" :style="spinnerStyle"></div>
            <div class="line3" :style="spinnerStyle"></div>
            <div class="line4" :style="spinnerStyle"></div>
            <div class="line5" :style="spinnerStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LineLoader',
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
        },
        height: {
            type: String,
            default: '35px'
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
                background: this.color
            }
            return style;
        },
        containerStyle() {
            return {
                height: this.size,
                width: this.size
            }
        }
    }
}
</script>

<style>
.line1, .line2, .line3, .line4, .line5 {
    height: 35px;
    width: 5px;
    border-radius: 2px;
    background: #28B463;
    animation: grow 1s infinite;
    animation-iteration-count: infinite;
    display: inline-block;
}
.line1 {
    animation-delay: 0.1s
}
.line2 {
    animation-delay: 0.2s
}
.line3 {
    animation-delay: 0.3s
}
.line4 {
    animation-delay: 0.4s
}
.line5 {
    animation-delay: 0.5s
}
@keyframes grow {
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(0.4);
    }
    100% {
        transform: scaleY(1);
    }
}
@-webkit-keyframes grow {
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(0.4);
    }
    100% {
        transform: scaleY(1);
    }
}
</style>
