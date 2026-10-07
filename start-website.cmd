@echo off
cd /d "%~dp0"
where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo Install Node.js 24 LTS, then run this launcher again.
  pause
  exit /b 1
)
if not exist node_modules (
  call npm.cmd ci
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
echo Building the optimized website. Please wait for the local address below.
call npm.cmd run build
if errorlevel 1 (
  pause
  exit /b 1
)
echo Open http://127.0.0.1:8080 in your browser once the preview server is ready.
call npm.cmd run preview -- --host 127.0.0.1 --port 8080
pause
