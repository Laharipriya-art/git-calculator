print ('Simple calculator\n')

num1 = float (input( 'Enter first number :'))
num2 = float (input( 'Enter second number :'))

print ('\nResults: ')

print ('Addition: ', num1 + num2)
print ('subtraction: ', num1 - num2)
print ('multiplication: ', num1 * num2)

if num2!=0:
	print ('Division: ', num1/num2)
else:
	print ('Division: Cannot divide by Zero')