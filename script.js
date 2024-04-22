document.getElementById("demo").addEventListener("click", submitFunction);


function submitFunction() {
    //alert("test");
    let sentence = "test";

    const freqTable = {};
    const wordList = [];
    let top5 = {};
    sentence = document.getElementById("story").value;
    const tokens = sentence.split(" ");

    for(const token of tokens) {
        //console.log(token);
        if(freqTable[token]) {
            freqTable[token]++;
        }
        else {
            freqTable[token] = 1;
            wordList.push(token);
        }
    }

    console.log(freqTable);


    
    //find the top5 frequency in object
    const items = Object.entries(freqTable);

    items.sort((a, b) => b[1] - a[1]);

    top5 = items.slice(0, 5).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});

    console.log(top5);

    var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];



    for(const word of wordList) {
        if(top5[word]) {
            // Insert a row at the end of table
            var newRow = tbodyRef.insertRow();

            // Insert a cell at the end of the row
            var newCell = newRow.insertCell();

            // Append a text node to the cell
            var newText = document.createTextNode(word);
            newCell.appendChild(newText);
        }

    }




    //alert(sentence);
}
