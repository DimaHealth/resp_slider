import popup from "./tmplPopup.pug"

class Popup{
    constructor($root){
        this.$root = $root
        this.animTime = 400
    }
    openPopup(data){

        let promise = new Promise((resolve, reject) => {

            this.$root.prepend(popup(data));
            this.$popup = this.$root.find(".popup")
            setTimeout( ()=> {
                this.$popup.addClass("popup--appear")
            }, this.animTime)
            resolve("opened");

        });
        promise
            .then(
                opened => {
                    this.initClose(this.$popup.find('.js-close'))
                },
            );
    }


    initClose($close){
        $close.on("click", ()=>{
            this.$popup.removeClass("popup--appear")
            setTimeout(()=> {
                this.$popup.remove();
            }, this.animTime)
        })
    }
}

export default Popup