
function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex =  0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
    this.start = function (elId) {
        var that = this;

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        // subscribe to events
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });


        // create imeges array
        this.imagesUrls.push('https://www.sekizsilindir.com/wp-content/uploads/2015/11/12191143-993564157373237-7113099556739137653-o-1.jpg');
        this.imagesUrls.push('https://sun9-62.userapi.com/c507601/u234206906/video/l_9f313dc5.jpg');
        this.imagesUrls.push('https://www.img.gen.tr/images/2018/01/11/images466238.jpg');
        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/202366/b7b1e46e-7cb1-4be2-ae73-f29d0742c166/s1200?webp=false');

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };

    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };

    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        //disable next button if need
        if (this.currentImageIndex === 3) {
            this.showNextBtn.disabled = true;
        }
    };
}