const buttons=document.getElementsByClassName('buttons');
const input=document.getElementById('input');

for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',(event)=>{
        let inputText= '';
        switch(event.target.innerHTML){
            case 'C':
                break;
            case '=':
                try{
                    inputText=eval(input.value);
                }catch(e){
                    inputText='Error';
                }
                break;
            case '←' :
                inputText=input.value.slice(0,input.value.length-1);
                break;
            default:
                inputText=`${input.value}${event.target.innerHTML}`;      
        }
        input.value=inputText;
    });
}
