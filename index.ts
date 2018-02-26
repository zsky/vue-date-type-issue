import Vue from 'vue';

Vue.extend({
    props: {
        start: Date
    },
    created() {
        // this.start should be Date, but typescript think it is String
        this.start.getTime();
    }
});
