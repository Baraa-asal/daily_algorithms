// given a string, return the string of the same length but with characters reveresed 

var text = "creature"
function reverseString(text) {
    var arr=[]; var temp, result;
    arr = text.split("");
    
    for(i=0; i<arr.length/2;i++){
        for(j=arr.length-1; j>arr.length/2; j--){
            temp = arr[i]
            arr[i]= arr[j]
            arr[j] = temp
        }
    }
    result = arr.join("")
    console.log(text)
    console.log(result)
}


function reverseText (text) {
    var newText = []
    for(i=text.length-1; i>=0; i--) {
        newText.push(text[i])
    }
    console.log(newText.join(""))
}
reverseText(text)