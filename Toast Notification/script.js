let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"> </i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> please fix the erroe!';
let InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check agian';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);


    if(msg.includes('erroe')){
        toast.classList.add('Erroe');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}