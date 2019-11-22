@ECHO off
cls
:start
ECHO.
ECHO 1. Qlik Sense
ECHO 2. QlikView
ECHO 3. NPrinting
set choice=
set /p choice=Which quality checks do you want to run? Select a number then press Enter.
if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' "source/Sense/Sense_checks.bat"
if '%choice%'=='2' "source/QlikView/QV_checks.bat"
if '%choice%'=='3' "source/NPrinting/NP_checks.bat"
ECHO "%choice%" is not valid, try again
pause
ECHO.
goto start
:hello
ECHO Qlik Sense
goto end
:bye
ECHO QlikView
goto end
:test
ECHO NPrinting
goto end
:end
pause