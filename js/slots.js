const images = ['cherry', 'grapes', 'heart', 'lemon', 'orange', 'seven', 'strawberry'];

let counter = 1;

$('#spin').click(spin);
$('#plus').click(increment);
$('#minus').click(decrement);

function increment() {
    let currentBalance = parseInt($('#balance').text());
    let currentBet = parseInt($('#bet').text());

    if (currentBet < currentBalance) {
        $('#bet').text(++counter);
    }
}

function decrement() {
    if (counter > 0) {
        $('#bet').text(--counter);
    }
}


function spin() {
    let currentBalance = parseInt($('#balance').text());
    let currentBet = parseInt($('#bet').text());

    if (currentBalance <= 0) {
        $('#heading-text').text("You lost all your money!").css('color', 'red');
    } else if (currentBalance < currentBet) {
        $('#heading-text').text("Invalid bet amount, you do not have enough money to bet $" + currentBet).css('color', 'red').fadeTo("fast", 0.1).fadeTo('fast', 0.9).fadeTo("fast", 0.1).fadeTo('fast', 0.9).fadeTo("fast", 0.1).fadeTo('fast', 0.9);
    }


    if (currentBalance > 0 && currentBalance >= currentBet) {

        $('img').each(function (index, element) {
            $(element).attr("src", "../img/" + images[ranNum()] + ".png");
        });


        if ($('#p1').attr("src") === $('#p2').attr("src") && $('#p2').attr("src") === $('#p3').attr("src")) {

            $('#heading-text').text("Congratulations! You won!").css('color', 'red').fadeTo("fast", 0.1).fadeTo('fast', 0.9);

            let winnings = (currentBet * 15);
            $('#balance').text(currentBalance + winnings);

        } else {
            $('#heading-text').text("You lost, spin again").css('color', 'red').fadeTo("fast", 0.1).fadeTo('fast', 0.9);

            $('#balance').text(currentBalance - currentBet);
        }

    }


}

function ranNum() {
    return Math.floor(Math.random() * images.length);
}
