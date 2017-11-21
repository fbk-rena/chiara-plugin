(function ($) {
    $.fn.renaImages = function (args) {

        const images = [];
        const modal = $(`<div class="popup-img" data-popup="img-popup">
        <a class="popup-close" data-popup-close-img="img-popup" href="#">X</a>
        <div class="popup-inner">
            <img id="imgModal"class="img-fluid img-modal" src="" alt="">
            <h4 id="autor" class="autor"></h4>
            <h2 id="title" class="title"></h2>
            <p id="description" class="description-draw"></p>
        </div>
    </div>`);



        $('body').append(modal);
        modal.hide();

        args.map(function (image) {
            const div = (`<div class="renderImg">
                <img class="img-fluid" data-popup-open-img="img-popup" src="assets/${image.image_url}"/>
                <h1>${image.title}</h1>
                <h4>${image.autor}</h4>
                <p>${image.description}</p>
                
</div>`);

            $(".renderImg").click(function () {
                console.log("Image clicked");
                modal.find("#imgModal").prop('src', image.image_url);
                modal.find("#autor").val(image.autor);
                modal.find("#title").val(image.title);
                modal.find("#descrition").val(image.description);
                modal.show();
            });

            images.push(div)
        })
        this.html(images);

        const openCloseImage = function () {
            $('[data-popup-open-img]').on('click', function (e) {
                let targeted_popup_class = $(this).attr('data-popup');
                $(`[data-popup="img-popup"]`).fadeIn(350);
                e.preventDefault();
            });
            $('[data-popup-close-img]').on('click', function (e) {
                $(this).parent().fadeOut(350);
                e.preventDefault();
            });

        }
    }
})(jQuery);

$(document).ready(function () {
    $("#images").renaImages(data);
});
