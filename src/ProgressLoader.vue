<template>
    <div class="v-spinner" :v-show="loading">
        <div class="v-progress" :style="spinnerStyle">
            <div class="progress" :style="spinnerStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressLoader',
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
            default: '5px'
        },
        radius: {
            type: String,
            default: '5px'
        }
    },
    computed: {
        spinnerStyle () {
            let style = {
                height: this.size,
                backgroundColor: this.color,
                borderRadius: this.radius,
            }
            return style;
        }
    }
}
</script>

<style>
.progress {
    animation: load 1s infinite linear;
}
@keyframes load {
    0% {
        width: 0px;
    }
    25% {
        width: 25px;
    }
    50% {
        width: 75px;
    }
    100% {
        width: 100px;
    }
}
@-webkit-keyframes load {
    0% {
        width: 0px;
    }
    25% {
        width: 25px;
    }
    50% {
        width: 75px;
    }
    100% {
        width: 100px;
    }
}
</style>
