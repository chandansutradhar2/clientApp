function showTime(){
    document.getElementById('time').innerText=new Date();
}


function login(){

    let payload={
        mobileNo:document.getElementById('mobileNo').value,
            password:document.getElementById('password').value
    }
    fetch('https://gorest.co.in/public/v2/users',{
            method:'GET',
        
    }).then(res=>{
    alert(res);
    }).catch(err=>{
        console.log(err)
    })
}