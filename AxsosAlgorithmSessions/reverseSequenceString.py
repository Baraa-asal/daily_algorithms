import re
string = "This, is a test!"
splittedArr = re.split('[,.!?]', string)
print(splittedArr)

temp = 0
j = len(splittedArr)-1
half_length = int(len(splittedArr)/2)
for i in range(0, half_length, 1):
    temp = splittedArr[i].lower()
    splittedArr[i] = splittedArr[j].lower()
    splittedArr[j] = temp
    j -= 1
print(splittedArr)
str1 = " "
print(str1.join(splittedArr))




