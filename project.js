var eng_btn = document.getElementById("eng_btn")
var ar_btn = document.getElementById("ar_btn")
var title_g = document.getElementById("title_g")
var alert_logo = document.getElementById("alert")
var txt1 = document.getElementById("card_txt_1")
var txt2 = document.getElementById("card_txt_2")
var txt3 = document.getElementById("card_txt_3")
var card_tit = document.getElementById("card_tit")
var for_tit = document.getElementById("for_tit")

ar_btn.addEventListener("click",()=>{
title_g.innerText = "المبرمج جورج "
alert_logo.innerText ="نرحب بك في موقع جورج !"
alert_logo.dir = "rtl"
localStorage.setItem("lang","arb")
txt1.innerHTML = "شهادة اتش تي ام ال من اكاديمية شيار المحترمة"
txt2.innerHTML = "شهادة سي اس اس  من اكاديمية شيار المحترمة"
txt3.innerHTML = "شهادة بوتستراب  من اكاديمية شيار المحترمة"
card_tit.innerHTML = "الشهادات"
for_tit.innerHTML = "حولنا "
card_tit.style.direction = "rtl"
})


eng_btn.addEventListener("click",()=>{
    title_g.innerText = "Coder George"
    alert_logo.innerText ="  Welcome to George Site !"
    alert_logo.dir = "ltr"
    localStorage.setItem("lang","eng")
    txt1.innerHTML = "html certification from shyar academy"
    txt2.innerHTML = "css certification from shyar academy"
    txt3.innerHTML = "bootstrap 5 certification from shyar academy"
    card_tit.innerHTML = "certifications"
for_tit.innerHTML = "About us"
    
    card_tit.style.direction = "ltr"


    })

    onload = ()=>{
        if(localStorage.getItem("lang")=="eng")
       {eng_btn.click()
        alert("default sittings have been restored ")} 
    else if(localStorage.getItem("lang")=="arb")
    {ar_btn.click()
    alert("تم استرجاع الاعدادت الافتراضية ")}

    }









    


