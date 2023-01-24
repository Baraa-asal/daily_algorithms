let str = " (y)(kk)kk(.)"
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
        count++;
    }
    if (str[i] == ")" && count > 0) {
        count--;
    }
    else if (str[i] == ")" && count == 0) {
        count=1;
        break;
    }

}

if (count > 0) {
    console.log("False")
}
else {
    console.log("True")
}