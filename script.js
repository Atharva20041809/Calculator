let numbers=document.querySelectorAll(".num");
let operator=document.querySelectorAll(".oprtr");
let equalto=document.querySelector(".eqls");
let calculations=document.querySelector(".top");
let num1=0;
numbers.forEach((num)=>{
    num.addEventListener("click",()=>{
        if(num.getAttribute("id")=="zero"){
            calculations.innerText+="0";   
        }else{
            calculations.innerText+=num.getAttribute("id");
        }
    })
})
let signs=[];
let all_numbers=[];
operator.forEach((oprtr)=>{
    oprtr.addEventListener("click",()=>{
        signs.push(oprtr.getAttribute("id"));
        all_numbers.push(parseInt(calculations.innerText));
        calculations.innerText='';
    });
});
// ['E', '%', 'd', '/', 'x', '-', '+']
let count_eql=0;
equalto.addEventListener("click",()=>{
    if(count_eql==0){
        count_eql+=1
        all_numbers.push(parseInt(calculations.innerText));
        let a=all_numbers[0];
        for(let i=0;i<=signs.length;i++){
            if(signs[i]=="%"){
                a%=all_numbers[i+1];
            }else if(signs[i]=="/"){
                a/=all_numbers[i+1];
            }else if(signs[i]=="x"){
                a*=all_numbers[i+1];
            }else if(signs[i]=="-"){
                a-=all_numbers[i+1];
            }else if(signs[i]=="+"){
                a+=all_numbers[i+1];
            }
        }
        calculations.innerText=a.toFixed(2);
    }else{
        count_eql+=1
        let a=all_numbers[all_numbers.length-1];
        all_numbers.push(parseInt(calculations.innerText));
        for(let i=signs.length-1;i<=signs.length-1;i++){
            if(signs[i]=="%"){
                a%=all_numbers[all_numbers.length-1];
            }else if(signs[i]=="/"){
                a/=all_numbers[all_numbers.length-1];
            }else if(signs[i]=="x"){
                a*=all_numbers[all_numbers.length-1];
            }else if(signs[i]=="-"){
                a-=all_numbers[all_numbers.length-1];
            }else if(signs[i]=="+"){
                a+=all_numbers[all_numbers.length-1];
            }
        }
        calculations.innerText=a.toFixed(2);
    }
});
document.querySelector(".E").addEventListener("click",()=>{
    calculations.innerText='';
    signs=[];
    all_numbers=[];
    count_eql=0;
})
document.querySelector(".del").addEventListener("click",()=>{
    calculations.innerText=calculations.innerText.slice(0,-1);
})
