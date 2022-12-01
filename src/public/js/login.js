

let loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit',async (e)=>{
    e.preventDefault()
    let data = new FormData(loginForm)
    let obj = {};
    data.forEach((value, key) => obj[key]=value)
     const response = await  fetch('api/sessions/login',{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(result=> result.json())
    console.log(response)
    if(response.success) location.assign('/home');
    
})

