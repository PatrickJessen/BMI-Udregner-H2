var Weight = document.getElementById("uInput");
var Height = document.getElementById("uInput2");

function CalculateBMI(weight, height)
{
    return (weight / (height * height));
}

function OnClick()
{
    document.getElementById("bmi").innerHTML = CalculateBMI(parseInt(Weight.value), parseInt(Height.value));
}