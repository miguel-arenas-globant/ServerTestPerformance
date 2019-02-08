# About

This tool is used to send information from the device where the application is executed and to measure times by means of the tool   [easy_profiler][1] and [chrome_tracing][2]

# Before Start

**NOTE:** This server  has only been tested on a mac, so maybe dont work on other operatives systems

# Installation and Execute
 ``
npm install 
``  
``
npm run start
``

# EndPoints

## Google Tracing - POST
**ROUTE** = /  
**Description:** Write in the **myjsonfile.json** file the json data that send the app.

## Google Tracing - GET
**ROUTE** = /  
**Description:** Show the data writed on **myjsonfile.json** file

## Clean Google Tracing - POST
**ROUTE** = /clear  
**Description:** Clear the **myjsonfile.json** file

## EASY Profiel Save File- POST
**ROUTE** = /save-file  
**Description:** Save a file with the current time and **profiler.prof** inside **uploads** folder, that file it's gonna be use to 
**easy profile gui** and watch the trace.

[1]: https://github.com/YOU-i-Labs/easy_profiler
[2]: chrome://tracing/