const ALLOWED_COLORS = [
    "#13d3b5", "#e396ff", "#495cb2", "#7fcbe6",
    "#7fe6ba", "#3acb06", "#cfb896", "#d16f6f"];

const getRandomColor = () => ALLOWED_COLORS[Math.floor(Math.random() * ALLOWED_COLORS.length)];

const fakeFetch = () => {
    return new Promise(function (resolve) {
        setTimeout( function () {
            resolve({success: true})
        }, Math.random()*3000);
    });
};

const vueApp = new Vue({
    el: '#app',
    data: {
        courses: [
            {
                title: "Frontend-разработчик",
                description: "Профессиональная верстка сайтов по современным стандартам",
                freePlaces: 10,
                bg: getRandomColor()
            },
            {
                title: "Программист Java",
                description: "Написано однажды - работает везде",
                freePlaces: 7,
                bg: getRandomColor()
            },
            {
                title: "Разработчик игр на Unity",
                description: "Стань частью игровой индустрии",
                freePlaces: 21,
                bg: getRandomColor()
            },
            {
                title: "SEO-специалист",
                description: "Научим быть в ТОПе",
                freePlaces: 0,
                bg: getRandomColor()
            },
            {
                title: "Программист PHP",
                description: "Выбор мировых разработчиков Facebook, Google, NASA, Yahoo, Wikipedia",
                freePlaces: 16,
                bg: getRandomColor()
            },
            {
                title: "Программист Python",
                description: "Выбор профессиональных веб-разработчиков из Google, Яндекс, Mail, Youtube и Instagram",
                freePlaces: 1,
                bg: getRandomColor()
            },
        ],
        offset: 0,
        showForm: false,
        showIn: false,
        form: {
            name:"",
            mail: "",
            body: "show"
        }
    },
    methods: {
        swapCourse (direction) {

            this.offset = this.offset + (direction ? 1 : -1);
            this.offset = this.offset < 0 ? this.courses.length + this.offset : this.offset;

        },
        scrollToCourses () {
            window.scrollBy({ top: document.querySelector('.courses').offsetTop, behavior: 'smooth' });
        },
        switchForm (bool) {
            if(bool){
                this.showForm = bool;
                setTimeout( () => this.showIn = bool, 100);
            } else {
                this.showIn = bool;
                setTimeout( () => this.showForm = bool, 300);
            }
        },
        sendForm() {
            if(!this.form.name || !this.form.mail)
                return alert('Заполните все поля');
            this.form.body = 'loading';
            fakeFetch().then( res => {
                if(res.success){
                    this.form.body = 'success';
                }
            })
        }
    },
    computed: {
        selected: function () {
            const newCourses = [];
            for(let i = this.offset; i < this.offset + 3; i++){
                newCourses.push(this.courses[i % this.courses.length])
            }
            return newCourses;
        }
    }
});