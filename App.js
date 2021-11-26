var Weight = document.getElementById("uInput");
var Height = document.getElementById("uInput2");

function CalculateBMI(weight, height)
{
    return (weight / (height * height));
}

function OnClick()
{
    let bmi = CalculateBMI(parseInt(Weight.value), parseInt(Height.value));

    if (bmi >= 16 && bmi <= 18.5)
    {
        document.getElementById("bmi").innerHTML = "You're underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24)
    {
        document.getElementById("bmi").innerHTML = "You're normal";
    }
    else if (bmi >= 24 && bmi <= 30)
    {
        document.getElementById("bmi").innerHTML = "You're fat";
    }
    else if (bmi >= 30 && bmi <= 35)
    {
        document.getElementById("bmi").innerHTML = "You're very fat";
    }
    else if (bmi >= 35 && bmi <= 40)
    {
        document.getElementById("bmi").innerHTML = "You're insanely fat";
    }
    else if (bmi > 40)
    {
        document.getElementById("bmi").innerHTML = "You have your own gravity";
    }
}