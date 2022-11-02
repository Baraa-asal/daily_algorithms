def nth_largest(arr):
    for i in range(0, len(arr)):
        for j in range(i+1, len(arr)):
            if arr[j] < arr[i]:
                arr[i], arr[j] = arr[j], arr[i]
    print(arr)
    print("Please enter nth required: ")
    n = int(input())
    return giveMeTheNumber(arr, n)


def giveMeTheNumber(list, n):
    return list[len(list)-n]


array = [3, 4, 7, 7, 7, 1, 99, 55, 33, 0]
print(nth_largest(array))
