

 function solve()
 {
    let x=document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
 }

 function display(val)
 {
     document.getElementById("result").value+=val
 }

 function clr ()
 {
     document.getElementById("result").value = ""
 }

