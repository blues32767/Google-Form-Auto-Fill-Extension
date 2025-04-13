#region 初始化設定 Initialization
# ============================================================================
#    Google Form Auto-Fill Extension - PowerShell Update Script
#    Author/作者: blues32767
#    Version/版本: v1
#    https://github.com/blues32767
# ============================================================================

# 設置 UTF-8 編碼以支援中文，添加錯誤處理
# Set UTF-8 encoding to support Chinese, with error handling
try {
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    $PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
    Write-Host "✓ 系統編碼設定完成 [System encoding configured]" -ForegroundColor Green
} catch {
    Write-Host "⚠ 警告：無法設定控制台編碼為 UTF-8" -ForegroundColor Yellow
    Write-Host "  [Warning: Unable to set console encoding to UTF-8]" -ForegroundColor Yellow
}
#endregion

#region 環境檢查 Environment Check
# 顯示目前目錄
Write-Host "`n📂 工作目錄 [Working Directory]:" -ForegroundColor Cyan
Write-Host "  $PWD`n"

# 檢查必要檔案
Write-Host "🔍 檢查必要檔案 [Checking required files]..." -ForegroundColor Cyan
$requiredFiles = @("QA.txt", "content.js")
$allFilesExist = $true

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file 已找到 [Found]" -ForegroundColor Green
    } else {
        Write-Host "  ✕ $file 未找到！[Not found!]" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host "`n❌ 錯誤：缺少必要檔案，程式終止 [Error: Missing required files, terminating]" -ForegroundColor Red
    exit
}
#endregion

#region 檔案處理 File Processing
Write-Host "`n🔄 開始處理檔案 [Processing files]..." -ForegroundColor Cyan

# 定義臨時檔案
$tempFile = "temp_content.js"
"" | Out-File $tempFile -Encoding utf8

# 用於記錄映射項目的陣列
$mappedFields = @()

# 第一步：複製前段內容
Write-Host "  📝 步驟 1/3: 複製原始檔案前段 [Copying initial content]" -ForegroundColor Yellow
$foundStart = $false
$content = Get-Content "content.js" -Encoding UTF8
foreach ($line in $content) {
    if ($line -match "const fieldMappings = \[") {
        $foundStart = $true
        Write-Host "    ✓ 找到起始標記 [Found start marker]" -ForegroundColor Green
        break
    }
    $line | Out-File $tempFile -Append -Encoding utf8
}

if (-not $foundStart) {
    Write-Host "`n❌ 錯誤：檔案格式不符 [Error: Invalid file format]" -ForegroundColor Red
    exit
}

# 第二步：寫入新的映射內容
Write-Host "  📝 步驟 2/3: 寫入新的映射內容 [Writing new mappings]" -ForegroundColor Yellow
"const fieldMappings = [" | Out-File $tempFile -Append -Encoding utf8
$valueLines = Get-Content "QA.txt" -Encoding UTF8
$mappingCount = 0
$first = $true

foreach ($line in $valueLines) {
    # 跳過空行、無效行或以 # 開頭的備註行
    if ([string]::IsNullOrWhiteSpace($line) -or $line.Trim().StartsWith("#")) {
        if ($line.Trim().StartsWith("#")) {
            Write-Host "    ℹ 跳過備註行：$line" -ForegroundColor Cyan
        }
        continue
    }

    # 移除多餘空格並分割字段
    $line = $line.Trim()
    $fields = $line -split "," | ForEach-Object { $_.Trim() }

    if ($fields.Length -ge 2) {
        $fieldName = $fields[0]
        $values = $fields[1..($fields.Length - 1)]

        # 處理值部分
        $valueString = ""
        if ($values.Length -gt 1) {
            # 多值字段，轉為 JavaScript 陣列
            $formattedValues = $values | ForEach-Object { "`"$_`"" }
            $valueString = "[" + ($formattedValues -join ", ") + "]"
        } else {
            # 單值字段
            $valueString = "`"$($values[0])`""
        }

        # 記錄映射項目（用於後續輸出）
        $mappedFields += "${fieldName}: $valueString"

        # 寫入映射
        if (-not $first) {
            "    ," | Out-File $tempFile -Append -Encoding utf8
        }
        "    { field: `"$fieldName`", value: $valueString }" | Out-File $tempFile -Append -Encoding utf8
        $first = $false
        $mappingCount++
    } else {
        Write-Host "    ⚠ 警告：無效行格式 [$line]，已跳過" -ForegroundColor Yellow
    }
}
"  ];" | Out-File $tempFile -Append -Encoding utf8
Write-Host "    ✓ 已處理 $mappingCount 個映射項目 [Processed $mappingCount mappings]" -ForegroundColor Green

# 第三步：追加後段內容
Write-Host "  📝 步驟 3/3: 追加剩餘內容 [Appending remaining content]" -ForegroundColor Yellow
$foundEnd = $false
$startAppending = $false

foreach ($line in $content) {
    if ($startAppending) {
        $line | Out-File $tempFile -Append -Encoding utf8
    }
    elseif (($line -match "\];") -and (-not $foundEnd)) {
        $foundEnd = $true
        $startAppending = $true
    }
}
#endregion

#region 完成處理 Completion
# 備份與替換檔案
Write-Host "`n💾 正在完成更新 [Finalizing update]..." -ForegroundColor Cyan
if (Test-Path "content.js") {
    Copy-Item "content.js" "content.js.bak" -Force
    Write-Host "  ✓ 已建立備份：content.js.bak [Backup created]" -ForegroundColor Green
    Remove-Item "content.js"
}
Move-Item $tempFile "content.js"

# 輸出已寫入的映射項目清單
Write-Host "`n📋 已寫入的映射項目 [Mapped Fields]:" -ForegroundColor Cyan
if ($mappedFields.Count -eq 0) {
    Write-Host "  無映射項目寫入" -ForegroundColor Yellow
} else {
    foreach ($field in $mappedFields) {
        Write-Host "  • $field" -ForegroundColor White
    }
}

# 完成訊息
Write-Host "`n✨ 更新完成！[Update completed!]" -ForegroundColor Green
Write-Host "  • 檔案已更新：content.js" -ForegroundColor Cyan
Write-Host "  • 備份位置：content.js.bak" -ForegroundColor Cyan
Write-Host "  • 處理映射數：$mappingCount" -ForegroundColor Cyan
#endregion