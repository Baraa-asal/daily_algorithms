def query(inputs, queries):
    output = {}
    count = 0
    for q in queries:
        for i in inputs:
            if q not in output:
                if q == i:
                    count += 1
        if count > 0:
            output.update({q: count})
        count = 0
    return output

def add_zero_repeats(dict, queries):
    for query in queries:
        if query not in dict:
            print(query + " ====> 0")
        else: 
            print(query + " ====> ", dict.get(query))
    return

inputs = ["ab", "ab", "abc", 1, 1, "hasan"]
queries = ["ab", "abc", "bc", "hasan", "hasan", "hello", "a", "leo", "4", "hiiii"]
dict = query(inputs, queries)
print(add_zero_repeats(dict, queries))
