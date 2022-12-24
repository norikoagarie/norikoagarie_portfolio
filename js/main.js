// Vueのインスタンスを作成
Vue.createApp({
    data() {
        return {
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
    
}).mount('#app')