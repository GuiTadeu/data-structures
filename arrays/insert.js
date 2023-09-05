let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers)

// End
numbers[numbers.length] = 10
console.log(numbers);

// Begin
for (let i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i - 1];
}
numbers[0] = 666
console.log(numbers);