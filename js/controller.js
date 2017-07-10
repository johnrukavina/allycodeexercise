function showModal() {
    $(".modal").show();
}

function closeModal() {
    $(".modal").hide();
}

function toggleTab(el) {
    if (!$(el).hasClass("active")) {
        $(".tabcontent").toggle();
        $(".tablinks").removeClass("active");
        $(el).addClass("active");
    }
}