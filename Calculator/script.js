let calculationHistory = [];
let lastResultShown = false;

function addDisplay(value) {
    if (lastResultShown) {
        clearDisplay();
        lastResultShown = false;
    }
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    lastResultShown = false;
}

function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    lastResultShown = false;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        const calculation = `${display.value} = ${result}`;
        
        calculationHistory.unshift(calculation);
        display.value = result;
        lastResultShown = true;
    } catch (error) {
        display.value = 'Error';
        lastResultShown = true;
    }
}

function toggleHistoryPopup() {
    const popup = document.getElementById('historyPopup');
    const historyContent = document.getElementById('historyContent');
    
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
    
    historyContent.innerHTML = calculationHistory
        .map(calc => `<div class="mb-2 p-2 bg-gray-700 rounded">${calc}</div>`)
        .join('');
}

function downloadHistory() {
    const historyText = calculationHistory.join('\n');
    const blob = new Blob([historyText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calculator_history.txt';
    a.click();
    
    URL.revokeObjectURL(url);
}

document.getElementById('historyIcon').addEventListener('click', toggleHistoryPopup);