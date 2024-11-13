function sortNumbers(input, order = 'asc') {
    let numArray = [...new Set(input.split(/[\s,]+/).map(Number))];
    
    numArray.sort(function(a, b) {
        return order === 'asc' ? a - b : b - a;
    });
    
    return numArray;
}
document.getElementById('sortButton').addEventListener('click', function() {
    const userInput = document.getElementById('numberInput').value;
    const sortOrder = document.getElementById('sortOrder').value;
    
    const sortedNumbers = sortNumbers(userInput, sortOrder);
    document.getElementById('result').innerText = sortedNumbers.join(', ');
});