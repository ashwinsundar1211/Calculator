function Add()
{
    var Add = 
    Number(document.getElementById("1Num").value)+
    Number(document.getElementById("2Num").value)
    document.getElementById("Answer").innerHTML = Add
}
function Subtract()
{
    var Subtract = 
    Number(document.getElementById("1Num").value)-
    Number(document.getElementById("2Num").value)
    document.getElementById("Answer").innerHTML = Subtract
}
function Multiply()
{
    var Multiply = 
    Number(document.getElementById("1Num").value)*
    Number(document.getElementById("2Num").value)
    document.getElementById("Answer").innerHTML = Multiply
}
function Divide()
{
    var Divide = 
    Number(document.getElementById("1Num").value)/
    Number(document.getElementById("2Num").value)
    document.getElementById("Answer").innerHTML = Divide
}