





















// 硬編碼的欄位映射設定，field 作為關鍵字
const fieldMappings = [
    { field: "name", value: "blues" }
    ,
    { field: "姓名", value: "測試者" }
    ,
    { field: "phone", value: "0999999999" }
    ,
    { field: "手機", value: "0999999999" }
    ,
    { field: "電話", value: "" }
    ,
    { field: "line", value: "" }
    ,
    { field: "身高/體重", value: "180/80" }
    ,
    { field: "身高", value: "180" }
    ,
    { field: "體重", value: "80" }
    ,
    { field: "生日", value: "1999/08/06" }
    ,
    { field: "mail", value: "9999@example.com" }
    ,
    { field: "信箱", value: "9999@example.com" }
    ,
    { field: "性別", value: "" }
    ,
    { field: "ig", value: "" }
    ,
    { field: "instagram", value: "" }
    ,
    { field: "fb", value: "" }
    ,
    { field: "facebook", value: "" }
  ];
  // 是否強制填寫（即使已有值也覆蓋）
  const FORCE_FILL = true;
  
  // 標記表單是否已填寫完成
  let isFormFilled = false;
  
  // 將日期格式轉換為 YYYY-MM-DD
  function formatDate(value) {
    if (typeof value === 'string' && /^\d{4}\/\d{2}\/\d{2}$/.test(value)) {
      return value.replace(/\//g, '-');
    }
    return value;
  }
  
  // 模擬延遲（用於等待下拉選單展開）
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // 填寫表單的函數
  async function fillGoogleForm(mappings) {
    if (isFormFilled) {
      console.log("[自動填表] 表單已填寫完成，停止進一步操作。");
      return;
    }
  
    console.log("[自動填表] 開始填寫表單...");
    console.log("[自動填表] 欄位映射:", mappings);
  
    const textInputs = document.querySelectorAll('input[type="text"].whsOnd.zHQkBf');
    console.log("[自動填表] 找到的文字輸入框數量:", textInputs.length);
  
    const emailInputs = document.querySelectorAll('input[type="email"].whsOnd.zHQkBf');
    console.log("[自動填表] 找到的電子郵件輸入框數量:", emailInputs.length);
  
    const dateInputs = document.querySelectorAll('input[type="date"].whsOnd.zHQkBf');
    console.log("[自動填表] 找到的日期輸入框數量:", dateInputs.length);
  
    const radioOptions = document.querySelectorAll('.Od2TWd[role="radio"]');
    console.log("[自動填表] 找到的單選框選項數量:", radioOptions.length);
  
    const dropdowns = document.querySelectorAll('.jgvuAb[role="listbox"]');
    console.log("[自動填表] 找到的下拉選單數量:", dropdowns.length);
  
    if (textInputs.length === 0 && emailInputs.length === 0 && dateInputs.length === 0 && radioOptions.length === 0 && dropdowns.length === 0) {
      console.warn("[自動填表] 沒有找到任何輸入框或選擇項。請檢查表單是否已載入或選擇器是否正確。");
      return;
    }
  
    // 處理文字輸入框
    textInputs.forEach((input, index) => {
      const labelElement = input.closest('.geS5n')?.querySelector('.M7eMe');
      if (!labelElement) return;
  
      const labelText = labelElement.textContent.trim();
      let matchedField = mappings.find(mapping => labelText.includes(mapping.field));
      if (matchedField) {
        const value = Array.isArray(matchedField.value) ? matchedField.value[0] : matchedField.value;
        if (FORCE_FILL || !input.value) {
          input.value = value;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          console.log(`[自動填表] 文字輸入框 "${labelText}" 填入值: "${value}"`);
        }
      }
    });
  
    // 處理電子郵件輸入框
    emailInputs.forEach((input, index) => {
      const labelElement = input.closest('.geS5n')?.querySelector('.M7eMe');
      if (!labelElement) return;
  
      const labelText = labelElement.textContent.trim();
      let matchedField = mappings.find(mapping => labelText.includes(mapping.field));
      if (matchedField) {
        const value = Array.isArray(matchedField.value) ? matchedField.value[0] : matchedField.value;
        if (FORCE_FILL || !input.value) {
          input.value = value;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          console.log(`[自動填表] 電子郵件輸入框 "${labelText}" 填入值: "${value}"`);
        }
      }
    });
  
    // 處理日期輸入框
    dateInputs.forEach((input, index) => {
      const labelElement = input.closest('.geS5n')?.querySelector('.M7eMe');
      if (!labelElement) return;
  
      const labelText = labelElement.textContent.trim();
      let matchedField = mappings.find(mapping => labelText.includes(mapping.field));
      if (matchedField) {
        const rawValue = Array.isArray(matchedField.value) ? matchedField.value[0] : matchedField.value;
        const formattedValue = formatDate(rawValue);
        if (FORCE_FILL || !input.value) {
          input.value = formattedValue;
          input.dispatchEvent(new Event('change', { bubbles: true }));
          console.log(`[自動填表] 日期輸入框 "${labelText}" 填入值: "${formattedValue}"`);
        }
      }
    });
  
    // 處理單選框
   // 處理單選框
  radioOptions.forEach((option, index) => {
    console.log(`[自動填表] 處理第 ${index} 個單選框選項:`, option);
  
    const labelElement = option.closest('.geS5n')?.querySelector('.M7eMe');
    if (!labelElement) {
      console.warn(`[自動填表] 第 ${index} 個單選框選項在 .geS5n 中找不到關聯標籤 (.M7eMe)`);
      return;
    }
  
    const labelText = labelElement.textContent.trim();
    console.log(`[自動填表] 第 ${index} 個單選框選項的標籤文字: "${labelText}"`);
  
    let matchedField = mappings.find(mapping => labelText.includes(mapping.field));
    if (!matchedField) {
      console.log(`[自動填表] 標籤 "${labelText}" 未找到匹配的映射`);
      return;
    }
  
    const values = Array.isArray(matchedField.value) ? matchedField.value : [matchedField.value];
    console.log(`[自動填表] 匹配到的欄位 "${matchedField.field}" 的值:`, values);
  
    const optionTextElement = option.closest('.nWQGrd')?.querySelector('.aDTYNe');
    const optionText = optionTextElement ? optionTextElement.textContent.trim() : null;
    console.log(`[自動填表] 第 ${index} 個單選框選項的文字: "${optionText}"`);
  
    if (!optionText) {
      console.warn(`[自動填表] 第 ${index} 個單選框選項無法提取文字`);
      return;
    }
  
    if (values.includes(optionText)) {
      const isChecked = option.getAttribute('aria-checked') === 'true';
      console.log(`[自動填表] 選項 "${optionText}" 的 aria-checked 狀態: ${isChecked}`);
      if (!isChecked || FORCE_FILL) { // 考慮 FORCE_FILL 的情況
        console.log(`[自動填表] 在標籤 "${labelText}" 中匹配到欄位 "${matchedField.field}"，選項 "${optionText}" 符合`);
        option.click();
        console.log(`[自動填表] 第 ${index} 個單選框選項已選中: "${optionText}"`);
      } else {
        console.log(`[自動填表] 第 ${index} 個單選框選項 "${optionText}" 已選中，跳過`);
      }
    } else {
      console.log(`[自動填表] 選項 "${optionText}" 不匹配映射值:`, values);
    }
  });
  
    // 處理下拉選單（改進版）
    for (const dropdown of dropdowns) {
      const labelElement = dropdown.closest('.geS5n')?.querySelector('.M7eMe');
      if (!labelElement) continue;
  
      const labelText = labelElement.textContent.trim();
      console.log(`[自動填表] 處理下拉選單: "${labelText}"`);
  
      let matchedField = mappings.find(mapping => labelText.includes(mapping.field));
      if (matchedField) {
        const values = Array.isArray(matchedField.value) ? matchedField.value : [matchedField.value];
        const options = dropdown.querySelectorAll('.MocG8c.HZ3kWc');
  
        // 展開下拉選單
        if (dropdown.getAttribute('aria-expanded') === 'false') {
          dropdown.click();
          console.log(`[自動填表] 展開下拉選單: "${labelText}"`);
          await delay(1000); // 等待 500ms 確保選項可見
        }
  
        // 選擇匹配的選項
        for (const option of options) {
          const optionText = option.textContent.trim();
          const isSelected = option.getAttribute('aria-selected') === 'true';
          if (values.includes(optionText)) {
            if (FORCE_FILL || !isSelected) {
              console.log(`[自動填表] 在 "${labelText}" 中找到匹配選項: "${optionText}"`);
              option.click();
              console.log(`[自動填表] 下拉選單 "${labelText}" 已選擇: "${optionText}"`);
              break; // 找到並選擇後退出循環
            } else {
              console.log(`[自動填表] 下拉選單 "${labelText}" 的 "${optionText}" 已選中，跳過`);
            }
          }
        }
      }
    }
  
    console.log("[自動填表] 表單填寫完成。");
    isFormFilled = true;
    observer.disconnect();
    console.log("[自動填表] MutationObserver 已停止。");
  }
  
  // 檢查並自動填寫表單
  async function autoFillForm() {
    console.log("[自動填表] autoFillForm 被觸發");
    if (fieldMappings.length > 0) {
      await fillGoogleForm(fieldMappings);
    } else {
      console.warn("[自動填表] 未定義任何欄位映射。");
    }
  }
  
  // 頁面載入時執行
  document.addEventListener('DOMContentLoaded', () => {
    console.log("[自動填表] DOMContentLoaded 事件觸發");
    autoFillForm();
  });
  
  // 使用 MutationObserver 監聽動態載入的內容
  const observer = new MutationObserver((mutations) => {
    console.log("[自動填表] MutationObserver 檢測到頁面變化，變化數量:", mutations.length);
    autoFillForm();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  console.log("[自動填表] MutationObserver 已啟動");
