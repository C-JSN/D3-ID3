import data
data = data.storage
### DO NOT REMOVE ABOVE. IMPORTS PARSED DATA FROM FILE.

print(data)

def getMonth(val):
    for d in data:
        month = d['AAPL_x'][5:7]
        if int(month) == val:
            print(d)

getMonth(1)




### UNCOMMENT BELOW AND CHANGE my_data TO YOUR DATA VARIABLE NAME
# data = my_data

### DO NOT REMOVE BELOW. RETURNS PROCESSED DATA TO APPLICATION.
print(data)
