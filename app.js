new Vue({
    el: '#app',

    data: {
        word: '',
    },

    computed: {
        cleaned_word: function() {
            return this.word.toLowerCase().trim()
        },

        word_is_valid: function() {
            return DICTIONARY.includes(this.cleaned_word)
        },
    },
})
