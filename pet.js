function pet(){
    for(let a = 0; a < 10000; a ++){
        const $pet = 
        `<div class="pet" id=pet${a}>
            <img src="./src/bottle.png">
            <p>${a+1}</p>
        </div>
        `
        $("#container").append($pet);
    }

    setTimeout(function(){
        fade();
    },100)
}

function fade(){
    $(".pet").css({"display":"none"})
    $("#enpty").css({"display":"none"})
    for(let i = 0; i < 10000; i ++){
        setTimeout(function(){
            $(`#pet${i}`).fadeIn(100);
            $(`#pet${i}`).css({"display":"inline-block"})
        },100)
    }
    setTimeout(function(){
        bottom()
    },100)
}

function bottom(){
    $('body,html').animate({
    scrollTop: $(document).height()},10000);
    return false;
}

function totop(){
    console.log("a")
    $('body,html').animate({
    scrollTop: 0},10000);
    return false;
}