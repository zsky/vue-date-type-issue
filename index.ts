import Vue from 'vue';

Vue.extend({
    props: {
        start: Date
    },
    created() {
        this.start.getTime();
    }
});
