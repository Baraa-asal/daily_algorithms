// checking if a text is plaindrome!!
//  METHOD 1 :

function isPalindrome(text) {
    for(i=0;i<text.length;i++) {
        if(text[i]==text[text.length -1 -i]) {
            continue;
        }
        
        else {
            return false
        }
    }
    return true
}

//  Method 2: 
// function isPalindrome(text) {
//     for (i=0,j=text.length-1; i<text.length/2; i++,j--) {
//         if (text[i] == text[j]) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }


// Method 3:
// function isPalindrome(text) {
//     var rvrsdTxt = text.split("").reverse("").join("")
//     if (rvrsdTxt == text) {
//         return true
//     }
//     else {
//         return false
//     }
// }
console.log(isPalindrome("maram"))