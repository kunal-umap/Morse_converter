const input = document.getElementById('morceIP');
const op1 = document.querySelector('.output1');
const op2 = document.querySelector('.output2');
MORSE_CODE_DICT = ['A', 'B',
                    'C', 'D', 'E',
                    'F', 'G', 'H',
                    'I', 'J', 'K',
                    'L', 'M', 'N',
                    'O', 'P', 'Q',
                    'R', 'S', 'T',
                    'U', 'V', 'W',
                    'X', 'Y', 'Z',
                    '1', '2', '3',
                    '4', '5', '6',
                    '7', '8', '9',
                    '0'];
MORSE_CODE_DICT1 = ['.-', '-...',
                    '-.-.', '-..', '.',
                    '..-.', '--.', '....',
                    '..', '.---', '-.-',
                    '.-..', '--', '-.',
                    '---', '.--.', '--.-',
                    '.-.', '...', '-',
                    '..-', '...-', '.--',
                    '-..-', '-.--', '--..',
                    '.----', '..---', '...--',
                    '....-', '.....', '-....',
                    '--...', '---..', '----.',
                    '-----'];
let MorseCode = "";
let arrowCode = "_Click_ ";

input.addEventListener('change',(e)=>{
    let text = input.value.toUpperCase();
    
    for(var i =0;i<text.length;i++){
        if(text[i] == ' '){
            MorseCode += "_";
        }else{
            let code = text[i];
            for(var j = 0;j<36;j++){
                if(MORSE_CODE_DICT[j] == code){
                    MorseCode += MORSE_CODE_DICT1[j];
                    MorseCode += ' ';
                }
                console.log(code, MORSE_CODE_DICT[j])
            }
            
            // MorseCode += a;
            // MorseCode += " ";
        }
    }

    for(var i =0;i<MorseCode.length;i++){
        if(MorseCode[i]==" "){
            arrowCode += '→ ';
        }else if(MorseCode[i] == "."){
            arrowCode += '↑ ';
        }else if(MorseCode[i] == "-"){
            arrowCode += '↓ ';
        }else if(MorseCode[i] == "_"){
            arrowCode += '← ';
        }
    }
    op1.innerHTML = MorseCode;
    op2.innerHTML = arrowCode +" _Click_";
    // ↑ ↓ → ←
});
