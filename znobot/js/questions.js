var app = new Vue({
    el: '#app',
    data: {
        content: '',
        choices: [],
        getQuestion: false,
        answer: null,
    },

    mounted() {
        this.getQuestion = true;

        this.$http
            .get('https://zno-dev.eu-central-1.elasticbeanstalk.com/questions/random?subject=ukr')
            .then((response) => {
                this.content = response.data.content;
                this.choices = response.data.choices;

                console.log(response.data);
            });
    },

})