# 系統更新腳本 System Update Script

```batch
@echo off

:: ====================================================
::    Google Form Auto-Fill Extension
::    Author/作者: blues32767
::    Version/版本: v1
::    https://github.com/blues32767
:: ====================================================

:: 設定系統編碼為 UTF-8
:: Set system encoding to UTF-8
chcp 65001

:: 顯示執行狀態
:: Display execution status
echo 正在執行更新，請稍候...
echo Executing update, please wait...

:: 設置工作目錄為 BAT 腳本所在目錄
:: Set working directory to BAT script location
cd /d "%~dp0"

:: 使用完整路徑執行 PowerShell 腳本
:: Execute PowerShell script using full path
"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" ^
  -NoProfile ^
  -ExecutionPolicy Bypass ^
  -File "update_content.ps1"

:: 顯示完成訊息並暫停
:: Display completion message and pause
echo 更新完成！
echo Update completed!
pause
```

## 腳本資訊 Script Information

| 項目 Item | 內容 Content |
|-----------|-------------|
| 名稱 Name | Google Form Auto-Fill Extension |
| 作者 Author | blues32767 |
| 版本 Version | v1 |
| GitHub | https://github.com/blues32767 |

## 指令說明 Command Description

| 指令 Command | 說明 Description |
|-------------|-----------------|
| `@echo off` | 關閉指令回顯功能<br>Turn off command echoing |
| `chcp 65001` | 設定 UTF-8 編碼<br>Set UTF-8 encoding |
| `cd /d "%~dp0"` | 切換至腳本所在目錄<br>Change to script directory |
| `powershell.exe -NoProfile` | 不載入 PowerShell 設定檔<br>Run PowerShell without profile |
| `-ExecutionPolicy Bypass` | 略過執行原則限制<br>Bypass execution policy |
| `pause` | 暫停等待使用者按鍵<br>Wait for user input |