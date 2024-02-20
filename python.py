def function():
    count = 0
    sum = 0

    with open('Lab_data2.txt', 'r') as f:
        data = f.readlines()

    for line in data:
        for num in line.split(','):
            if num !='\n':
                num = int(num)
                if num >= 50:
                    count += 1
                    sum += num

    average = sum/count