document.getElementById("change").addEventListener("click",change);//butonu event verdik
function change(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    xhr.onload=function(){
        if(this.status===200){
            const response=JSON.parse(this.responseText);
            //console.log(response);//tüm jsonu getirir
            //console.log(response.rates);//sadece para birimlerini getirir
            //console.log(response.rates.TRY);
            const rate=response.rates.TRY;
            const amount=Number(document.getElementById("amount").value);//string ifade donderir o yuzden Number ekle
            document.getElementById("tl").value=amount*rate; 
        }
    }
    xhr.send();
}