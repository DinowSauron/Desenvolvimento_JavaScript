var word = '';
var wordsLengh = 15;

function CopyText(){
    var textElement = document.querySelector('#senha');
    if(word != ""){
        textElement.select();
        textElement.setSelectionRange(0, 99999);
        document.execCommand("copy");

        alert(`Password Copied. ( ${word} )`)
    }else{
        alert('Click in the "Generate Password" Button!')
    }
    
}

function Generate(){
    var textElement = document.querySelector('#senha');
    var buttonElement = document.querySelector('#btn');
    word = ''

    var charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
    var charsLower = 'abcdefghijklmnopqrstuvxwyz';
    var specials = '1234567890*#$!-%';

    for(var x = 0; x < wordsLengh;x++){
        var rand = Math.random() * 100;
        rand = rand - (rand % 1);

        if(rand < 40){
            AddLetter(specials);
        }
        else if(rand >= 40 && rand <= 70)
        {
            AddLetter(charsUpper);
        }else{
            AddLetter(charsLower);
        }
    }

    textElement.value = word;
}

function AddLetter(calc)
{
    var letter = Math.random() * calc.length;
    letter = letter - (letter % 1);

    word += calc[letter];
}