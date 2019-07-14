<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-hour">
            <div class="hr" :style="spinnerStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HourLoader',
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
                borderTop: `${this.size} solid ${this.color}`,
                borderBottom: `${this.size} solid ${this.color}`
            }
            return style;
        }
    }
}
</script>

<style>
.hr {
    border-right: 25px solid transparent;
    border-left: 25px solid transparent;
    border-radius: 50%;
    animation: v-anim 2s infinite linear;
}
</style>

