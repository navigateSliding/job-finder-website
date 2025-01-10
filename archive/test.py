with open('ztemp.txt', 'r') as f :
    for lines in f.readlines() :
        print(f"`{lines.rstrip()}`,")