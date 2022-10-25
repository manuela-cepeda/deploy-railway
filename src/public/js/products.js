

//leyendo formulario 
const handleSubmit = (e) =>{
    e.preventDefault()
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const newProduct = {
        title: title.value,
        price: price.value
    }
    
    if(title.value.trim().length>0 && price.value.trim().length>0){
        const thumbnail = document.getElementById('thumbnail').files[0];
        const readerImg = new FileReader();
        readerImg.onloadend = function() {
            socket.emit("new-product", {
              data:readerImg.result, 
              filename: thumbnail.name, 
              title: newProduct.title,
              price: newProduct.price        
            });
        }
        readerImg.readAsDataURL(thumbnail);
       
        title.value="";
        price.value="";
        document.getElementById('thumbnail').value=""
    }

   return false;
}
let productForm = document.getElementById('productForm')
productForm.addEventListener('submit',(e)=>handleSubmit(e))


//renderizando mensajes
const renderProducts = (data) => {
    console.log('render product')
    const html = data.map(product => {
        return(
        `<tr>   
        <td>${product?.title}</td>
        <td>${product?.price}</td> 
        <td><img src="img/${product.thumbnail ? product.thumbnail : 'no image_icon.png' }" </td> 
        </tr>`)
    }).join(" ");
   
    document.getElementById('products').innerHTML = html ;
}
socket.on('products', (data) => { renderProducts(data) });


