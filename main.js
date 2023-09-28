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
    let HTML_For_Arrow_Code = "";
    let HTML_For_Morse = "";
    
    for(var i =0;i<text.length;i++){
        if(text[i] == ' '){
            HTML_For_Morse += `<div class="subDiv1">_</div>`;
        }else{
            let code = text[i];
            for(var j = 0;j<36;j++){
                if(MORSE_CODE_DICT[j] == code){
                    MorseCode += MORSE_CODE_DICT1[j];
                    MorseCode += ' ';
                    HTML_For_Morse += `
                    <div class="subDiv1">${MORSE_CODE_DICT1[j]}</div>`;
                }
            }
        }
    }

    op1.innerHTML = HTML_For_Morse;
    const MORS1 = document.querySelectorAll('.subDiv1');
    MORS1.forEach((ele,idx) => {
        console.log(ele,idx)
        let eleText = ele.innerText;
        HTML_For_Arrow_Code += `<div class="subDiv">`;
        if(text[idx] != " "){
            HTML_For_Arrow_Code += `<div class="helpLetter">${text[idx]}</div>`;
        }
        for(var i =0;i<eleText.length;i++){
            if(eleText[i] == "."){
                HTML_For_Arrow_Code += '↑ ';
            }else if(eleText[i] == "-"){
                HTML_For_Arrow_Code += '↓ ';
            }else if(eleText[i] == "_"){
                HTML_For_Arrow_Code += '→ ';
            }
        }
        HTML_For_Arrow_Code += `</div>`;
        // HTML_For_Arrow_Code += '→ ';
    
    });

    op2.innerHTML = HTML_For_Arrow_Code;

});
