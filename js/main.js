$(document).ready(function() {
    var moreText = "Читать дальше",
    lessText = "Скрыть",
    moreButton = $(".post_more");

    moreButton.click(function () {
        var $this = $(this);
        $this.text($this.text() == lessText ? moreText : lessText).siblings(".post_read").slideToggle("fast");
        return false;
    });
});