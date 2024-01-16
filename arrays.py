# Ways to import arrays
# import array 
from array import *

arrayList = array("i", [1, 2, 3, 4])

#  Accessing index values
# print(len(arrayList), arrayList[0], arrayList.index(1))

# Looping through array
for arr in arrayList:
    print(arr)

# Slicing array with :

# print(arrayList[:2], arrayList[1:2])

# Change value of any element
arrayList[2] = 24

# Add new value
arrayList.append(30)

# If want to add more than one value than use extend
arrayList.extend([21, 50, 65])
# If want don't want to add element at end then use insert()
arrayList.insert(2, 100)
# remove  --- --- Here we need to specify the value/element
# If have same element many times than it will remove 1st occurrence
arrayList.remove(50)
# Also we can use pop() to remove values --- Here we need to specify the index
arrayList.pop(2)
print(arrayList)