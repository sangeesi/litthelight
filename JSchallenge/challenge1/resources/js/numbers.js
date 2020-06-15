
/*function createTable(){
let arraylen = document.getElementById("arraylen").value,
    multiple = document.getElementById("multiple").value;
*/
  let arraylen = prompt("ENTER A NUMBER", "100");
  let multiple = prompt("ENTER A MULTIPLE?", "5");   
document.write("HERE ARE YOUR NUMBERS TILL " + arraylen + " IN MULTIPLES OF " + multiple + "<br /> <br />");

window.addEventListener("load", function (){

        // Draw HTML table

        let table = document.createElement("table"),
            row = table.insertRow();
      
        for (let i=1; i <= arraylen; i++)  
        {
            var nextmultiple = i * multiple;
            if (nextmultiple <= arraylen)
            {
            let cell1 = row.insertCell();
            cell1.innerHTML = i + " * " + multiple + " = "; 

            let cell2 = row.insertCell();
            cell2.innerHTML = nextmultiple;
           
          // Break into next row
            }
            row = table.insertRow();
        }
      
        // Attach table to container
        document.getElementById("container").appendChild(table);
      });