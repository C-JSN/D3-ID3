import data
data = data.storage
### DO NOT REMOVE ABOVE. IMPORTS PARSED DATA FROM FILE.


for d in data:
    d['x'] += 1
print(data)



### UNCOMMENT BELOW AND CHANGE my_data TO YOUR DATA VARIABLE NAME
# data = my_data

### DO NOT REMOVE BELOW. RETURNS PROCESSED DATA TO APPLICATION.
print(data)
