// Vueのインスタンスを作成
Vue.createApp({
    data() {
        return {
            selectId: 0,
            products: [{
                    image: './img/furoshiki_b.jpg',
                    product: '風呂敷 ハイビスカス',
                    category: '紅型',
                    text: 'お客様のご依頼で風呂敷を沖縄にいるお母様にプレゼントしたいということで制作いたしました。こんなに大きな柄ではありませんが型紙をつなぎかえることでたくさんのグーゲンビリアを朧型で表現することができました。風呂敷は縫製まで担当いたしました。何度も伏せては型を置きを繰り返して見た目以上の手間が掛かっています。直接お渡しすることができました。'
                },
                {
                    image: './img/kobitosan_a.jpg',
                    product: '小人さん',
                    category: '草木染め',
                    text: 'お客様のご依頼で風呂敷を沖縄にいるお母様にプレゼントしたいということで制作いたしました。こんなに大きな柄ではありませんが型紙をつなぎかえることでたくさんのグーゲンビリアを朧型で表現することができました。風呂敷は縫製まで担当いたしました。何度も伏せては型を置きを繰り返して見た目以上の手間が掛かっています。直接お渡しすることができました。'
                }
            ],
            name: '',
            email: '',
            content: '',
            alert: false,
            phoneCheck: false,
            emailCheck: false,
            failCheck: false,
            darkMode: false,
        }
    },
    methods: {
        selectFroshiki() {
            this.selectId = 0
        },
        selectKobitosan() {
            this.selectId = 1
        },
        changeToDark(){
            console.log("ダークモードon!");
            // ページの背景の色が変更した時
            this.darkMode = !this.darkMode
        },
        onSubmit() {
            this.alert = false
            // this.phoneCheck = false
            this.emailCheck = false

            // メールの形式をチェックする正規表現
            const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);


            if (this.name === '' ||  this.email === '' ||   this.content === '') {
                // alert('未入力の項目があります。')
                this.alert = !this.alert

            // } else if (this.phone.length < 11 || this.phone.length >= 12 || isNaN(Number(this.phone))) {
            //     this.phoneCheck = !this.phoneCheck
            
            } else if (!reg.test(this.email)) {
                this.emailCheck = !this.emailCheck

            } else {
                this.name = ''
                this.email= ''
                this.content = ''
                this.alert = false
                this.failCheck = true
            }   
        }
    },
    computed: {
        image() {
            return this.products[this.selectId].image
        },
        product() {
            return this.products[this.selectId].product
        },
        category() {
            return this.products[this.selectId].category
        },
        text() {
            return this.products[this.selectId].text
        }
    }   
}).mount('#app')