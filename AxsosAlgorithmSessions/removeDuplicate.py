Arr = [1, 2, 1, 3, 4, 4, 5, 6, 7, 88, 2]
nodup = []

setted = sorted(set(Arr))
# for i in range(len(setted)):
for j in range(len(setted)):
    nodup.append(setted[j])
print(nodup)
print(Arr)
