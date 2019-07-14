<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-spin">
            <div class="v-spin-circle" :style="spinnerStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpinLoader',
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
            default: '7px'
        },
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
.v-spin {
    height: 50px;
    width: 50px;
    border: 6px solid gainsboro;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    animation-iteration-count: infinite
}
.v-spin-circle {
    border-radius: 50%;
}
@keyframes spin {
    0%{
        transform: perspective(180px) rotate(0deg)
    }
    50%{
        transform: perspective(180px) rotate(180deg)
    }
    100%{
        transform: perspective(180px) rotate(360deg)
    }
}
@-webkit-keyframes spin {
    0%{
        transform: perspective(180px) rotate(0deg)
    }
    50%{
        transform: perspective(180px) rotate(180deg)
    }
    100%{
        transform: perspective(180px) rotate(360deg)
    }
}
</style>

