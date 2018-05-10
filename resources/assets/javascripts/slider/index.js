import Swiper from "swiper"
import Popup from "./popup"

class Slider {
    constructor($root) {
        this.$root = $root;
        this.$popupLink = this.$root.find('.js-popup-show');
        this.popup = new Popup(this.$root.closest('.content'));
        this.$slides = this.$root.find(".js-slider-item");
        this.$reseted = false;

        this.initSlider();
        this.initPopups();
        $(window).on("resize", () => {
            this.idResize = setTimeout(() => {
                clearTimeout(this.idResize);
                this.slider.update()
            }, 200);
        })
    }

    initPopups() {
        this.$popupLink.on("click", (e) => {
            let $this = $(e.currentTarget);
            let data = {};
            if ($this.data("link") !== "") {
                data.link = $this.data("link");
                $this = this.$root.find(`#${$this.data("link")}`)
            } else {
                data.link = $this.attr("id");
            }
            data.caption = $this.data("caption");
            data.text = $this.data("text");

            this.popup.openPopup(data)
        })
    }

    initSlider() {
        this.slider = new Swiper(this.$root, {
            speed: 500,
            spaceBetween: 10,
            autoHeight: true,
            slidesPerView: 5,
            updateOnImagesReady: true,
            direction: 'horizontal',
            navigation: {
                prevEl: this.$root.find('.js-btn-prev'),
                nextEl: this.$root.find('.js-btn-next')
            },
            on: {
                init: function () {
                    console.log("init ");
                },
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: "auto",
                }
            }
        });
        setTimeout(() => {
            console.log("update");
            this.slider.update();
        }, 50)
    }
}

export default Slider