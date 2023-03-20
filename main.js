let row = prompt("Enter a row");
let column = prompt("enter a column");

for (i=0;i<column;i++) {
    for (j=0;j<row;j++){
        if (i == 0 || i == row-1 || j == 0 || j == column-1) {
            document.write("*");
        } else {
            document.write("&nbsp","&nbsp");
        }
    }
    document.write("<br>");
}