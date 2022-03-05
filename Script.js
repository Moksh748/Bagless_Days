    let number1=Math.random(100000,999999);
    let number2=Math.random(100000,999999);
    document.getElementById("Question").innerHTML="What is"+number1+"+"+number2;  
        const b = document.querySelector('#answer');
        b.addEventListener('click',()=>{
            let i=document.getElementsByClassName('Answer').innerHTML;
            const section = document.createElement('p')
            if(i==number1+number2){
            section.innerHTML="<p>Correct</p><br><hr>";
            }
            else{
                section.innerHTML="<p>Wrong</p><br><hr>"
            }
            document.querySelector('body').appendChild(section)
        })
