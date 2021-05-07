//Item 1
function product()
{
    //get values
    var num1 = document.getElementById("firstInput").value;
    var num2 = document.getElementById("secondInput").value;
    //calculate
    document.getElementById("result").innerHTML = num1 + " x " + num2 + " = " + (num1 * num2);
}
function quotient()
{
    //get values
    var num1 = document.getElementById("firstInput").value;
    var num2 = document.getElementById("secondInput").value;
    //calculate
    document.getElementById("result").innerHTML = num1 + " ÷ " + num2 + " = " + (num1 / num2);
}

//Item 2
for(let i = 0; i <= 15; i++)
{
    switch(i%2)
    {
        case 0:
            var deg = "Even";
            break;
        case 1:
            var deg = "Odd";
            break;
    }
    //print
    document.getElementById("loop").innerHTML += i + " - "+ deg + "<br />";
}

//Item 3
function casing()
{
    //Clear text box
    document.getElementById("result_2").innerHTML = " RESULT <br /><br />";

    //Get text
    var text = document.getElementById("text").value;

    //split text 
    let word = text.split(" ");

    for(var i = 0; i <word.length; i++)
    {
        if(word[i].charAt(0) == word[i].charAt(0).toUpperCase())
        {
            document.getElementById("result_2").innerHTML += word[i] + " (" + word[i].charAt(0) + ") = Uppercase <br />";
        }
        else if(word[i].charAt(0) == word[i].charAt(0).toLowerCase())
        {
            document.getElementById("result_2").innerHTML += word[i] + " (" + word[i].charAt(0) + ") = Lowercase <br />";
        }
        else
        {
            document.getElementById("result_2").innerHTML = "Error";
        }
    }
}