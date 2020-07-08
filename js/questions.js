var app = new Vue({
    el: '#app',
    data: {
        content: "",
        choices: [],
        userAnswer: null,
        falseURL: false,

        defaultContent: "Не мають закінчення обидва слова в рядку",
        defaultChoices: [{
                id: 0,
                content: "*А*: ухвалено, збудований",
                is_correct: false
            },
            {
                id: 1,
                content: "*Б*: сорок, по-полтавськи",
                is_correct: false
            },
            {
                id: 2,
                content: "*В*: горілиць, плакучі",
                is_correct: false
            },
            {
                id: 3,
                content: "*Г*: запанібрата, змито",
                is_correct: true
            }
        ],
    },

    mounted() {
        var url =
            "http://zno-dev.eu-central-1.elasticbeanstalk.com/questions/random?subject=ukr";

        this.$http
            .get(url)
            .then(response => {
                this.content = response.data.content;
                this.choices = response.data.choices;
                // console.log(response.data);
            })
            .catch(error => {
                this.falseURL = true;
                console.log(error);
            });
    },
})