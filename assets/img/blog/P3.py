total = 0
number = 0
counter = 0
while number >= 0:
    number = int(input("Number please: "))
    if number >= 0:
        total += number
        counter += 1         
print("Total : " + str(total))
print("Average : " + str(total / counter))
