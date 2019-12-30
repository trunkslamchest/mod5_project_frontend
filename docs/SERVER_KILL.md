for /f "tokens=5" %a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /f /pid %a

for /f "tokens=5" %a in ('netstat -aon ^| find ":3001" ^| find "LISTENING"') do taskkill /f /pid %a

kill -9 $(lsof -i tcp:3000 -t)

kill -9 $(lsof -i tcp:3001 -t)