import time
from datetime import datetime

now = datetime.now()

current_time = now.strftime("%H:%M:%S")

print("Current Time =", current_time)

print("Start log testing")

c = 0

while c<100:
    f = open('../website/static/log_test.txt', 'w')
    f.write(str(datetime.now()-now))
    print(datetime.now()-now)
    f.close()
    time.sleep(1)
    c += 1
print("End log testing")
