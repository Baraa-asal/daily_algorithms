def power(n, p):
    if p < 0:
        return (1/(n*power(n, p-1)))
    if p == 0:
        return 1
    return n * power(n, p-1)


print(power(1, -2))
