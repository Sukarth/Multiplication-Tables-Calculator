
var Answer = document.getElementById('Answer')
var form = document.getElementById('form');



form.addEventListener('submit', function (event) {
    var inputNum = document.getElementById('numField1');
    event.preventDefault();
    if (!inputNum.value) {
        console.error("Please enter values in the field")
        alert("Please enter values in the field")
    } else {
        var inputNum = parseFloat(inputNum.value);

        var storedNum = 0;
        var counter = 0;
        counter = 0;
        while (counter < 10) {
            
            storedNum = storedNum + inputNum;
            counter = counter + 1;
            var h3 = document.createElement("h3");
            var node = document.createTextNode(storedNum);
            h3.appendChild(node);
            var element = document.getElementById("resultField");
            element.appendChild(h3);

            Answer.innerText = "Answer:"


        }

    }
});