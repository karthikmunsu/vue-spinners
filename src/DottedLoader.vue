<template>
    <div class="v-spinner" :v-show="loading">
        <div class="v-dotted">
            <div class="dot1" :style="spinnerStyle"></div>
            <div class="dot2" :style="spinnerStyle"></div>
            <div class="dot3" :style="spinnerStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DottedLoader',
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
            default: '20px'
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
.v-dotted {
    display: inline-flex;
}
.dot1, .dot2, .dot3 {
    border-radius: 50%;
    animation-iteration-count: infinite;
    animation-duration: 0.75s;
    padding-right: 3px;
    animation-name: dottedanim;
}
.dot1 {
    animation-delay: 0.12s;
}
.dot2 {
    animation-delay: 0.24s;
}
.dot3 {
    animation-delay: 0.36s;
}
@keyframes dottedanim {
    0%{
        transform: scale(1);
    }
    40% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
@-webkit-keyframes dottedanim {
    0%{
        transform: scale(1);
    }
    40% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>

