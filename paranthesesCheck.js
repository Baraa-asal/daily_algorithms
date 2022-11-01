var counter=0; 

function countPar(text) {
    
    for (var i = 0; i<text.length; i++){
        if (text[i] == '('){
            counter++;
        }
        else if (text[i] == ')' && counter==0){
            return false
        }
        else if (text[i] == ')' && counter>0){
            counter--;
        }
    }
    if(counter==0){
        return true;
    }
    else{
        return false;
    } 
}
console.log(countPar("(())))(("));
