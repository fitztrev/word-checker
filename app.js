new Vue({
    el: '#app',

    data: {
        word: '',
    },

    computed: {
        word_is_valid: function() {
            return DICTIONARY.includes(this.word)
        },
    },
})
