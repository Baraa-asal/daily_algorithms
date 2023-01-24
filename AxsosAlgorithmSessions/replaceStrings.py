oldString = "Hello, I'm Bara'a"
newString = ""

for character in oldString:
    if character != "''":
        newString += character
    else:
        newString += "-"
print(oldString)
print(newString)
