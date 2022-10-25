
let logout = document.getElementById('logout')
logout?.addEventListener('click', async (e)=>{
    e.preventDefault()
    const response  = await fetch('api/sessions/logout')
    .then(result=>result.json())
    console.log(response)
    if(response.success) location.assign('/logout');

    
})

