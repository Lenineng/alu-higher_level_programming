#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
last_digit = abs(number) % 10
if number < 0:
    last_digit = -last_digit
    message = f"last digit of {number} is {last_digit} and is"
    if last_digit > 5:
        print(message, "greater than 5")
    elif last_digit == 0:
        print(message, "0")
    else:
        print(message, "less than 6 and not 0")
