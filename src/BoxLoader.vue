<template>
    <div class="v-spiner">
        <div class="v-box" :v-show="loading">
            <div>
                <div class="box1" :style="spinnerStyle"></div>
                <div class="box2" :style="spinnerStyle"></div>
            </div>
            <div>
                <div class="box3" :style="spinnerStyle"></div>
                <div class="box4" :style="spinnerStyle"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoxLoader',
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
            default: '15px'
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
        }
    }
}
</script>

<style>
.box1, .box2, .box3, .box4 {
    display: inline-block;
    animation: fade 2s infinite;
}
.box1 {
    animation-delay: 0.1s;
}
.box2 {
    animation-delay: 0.3s;
}
.box3 {
    animation-delay: 0.5s;
}
.box4 {
   
    animation-delay: 0.7s;
}
@keyframes fade {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@-webkit-keyframes fade {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

