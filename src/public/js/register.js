const handleSubmit = async (e) =>{
    e.preventDefault()
    let data = new FormData(registerForm)
    let obj = {};
    data.forEach((value, key) => obj[key]=value)
    const response = await fetch('api/sessions/register',{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(result=> result.json())
    console.log(response)
    if(response.success) {
      
            Swal.fire({
                text:"Nuevo usuario registrado",
                toast:true,
                position: "top-right",
            })
            
            setTimeout(() => {
                location.assign('/login');
            }, 1000);
        }
    
    }


let registerForm = document.getElementById('registerForm')
registerForm.addEventListener('submit',(e)=>handleSubmit(e))