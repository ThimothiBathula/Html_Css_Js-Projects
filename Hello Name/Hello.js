let btn=document.getElementById('btn')
btn.addEventListener("click",function nameChange(){
    let enterName=prompt("Enter Your Name")
    document.getElementById('Name').textContent =enterName
})