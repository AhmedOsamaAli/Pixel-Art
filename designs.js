//select colorPicker 
var colorPicker = document.getElementById('colorPicker');
// Select size input
let sizepicker = document.getElementById('sizePicker')
let width = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight');
sizepicker.addEventListener('submit', function (e) {
    e.preventDefault();
    table.innerHTML = "";
    let height = document.getElementById('inputHeight');
    let width = document.getElementById('inputWidth');
    makeGrid();
})

// When size is submitted by the user, call function to make his ordered table size

function makeGrid() {
    /****
    loop to make the height of table  
     * 
     */
    for (i = 1; i <= height.value; i++) {
        let tr = document.createElement('tr')
        table.appendChild(tr)
        for (j = 1; j <= width.value; j++) {
            /*** 
     * 
     *nested loop to make the width of table
    */

            let td = document.createElement('td');
            td.addEventListener('click', function () {
                td.style.backgroundColor = colorPicker.value;
            })
            tr.appendChild(td);
        }
    }

}

/////you are a great reviewer many thanks to you^_^



