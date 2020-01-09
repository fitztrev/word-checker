new Vue({
    el: '#app',

    data: {
        word: '',
    },

    computed: {
        word_is_valid: function() {
            return _.includes(DICTIONARY, this.word)
        },
    },
})
