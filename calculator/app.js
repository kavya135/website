function operate(click)
{
    var value1 = parseFloat(document.getElementById("OP1").value);
    var value2 = parseFloat(document.getElementById("OP2").value);

    if(isNaN(value1)|| isNaN(value2))
    {
        alert("enter a valid number");
    }
    else if(click =="add")
    {
        document.getElementById("output").value = value1 + value2;
    }
    else if(click=="sub")
    {
        document.getElementById("output").value = value1 - value2;
    }
    else if(click=="mul")
    {
        document.getElementById("output").value = value1 * value2;
    }
    else if(click=="div")
    {
        document.getElementById("output").value = value1 / value2;
    }

}