#!/usr/bin/python3
import random

number = random.randint(-10000, 10000)

last_digit = abs(number) % 10
is_greater_than_5 = last_digit > 5

print(f"last digit of {number} is {last_digit} and is ", end="")

    if last_digit == 0:
        print("0")
    elif is_greater_than_5:
        print("greater than 5")
    else:
        print(f"less than 6 and not 0")
