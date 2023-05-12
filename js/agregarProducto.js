$(function(){
        
    $("#imagenProducto").change(function(event){
        var x = URL.createObjectURL(event.target.files[0]);
        console.log(x);
        $("#mostrarImagen").attr("src",x);
        array = [x, 0]
        let stringUrl = JSON.stringify(array);
        localStorage.setItem("urlImg",stringUrl);
    })    


});


function verificarDatos(){
    let nombre = document.getElementById("txtNombre").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let precio = document.getElementById("precioProduc").value;
    let tipo = document.getElementById("tipoProducto").value;
    console.log(nombre);
    console.log(descripcion);
    console.log(precio);

    
    
    


    let jsonUrl = localStorage.getItem("urlImg");
    let arrayUrl = JSON.parse(jsonUrl);
    
    $("#hola").attr("src",arrayUrl[0]);
    let imagen = arrayUrl[0];


    let jsonProductos = localStorage.getItem("storageProductos");
    let arrayProductos = JSON.parse(jsonProductos);

    
    let ultimoElemento = arrayProductos.slice(-1);    
    let codigo =  ultimoElemento[0].codigo;
    const obj = {
        codigo: codigo,
        tipo: tipo,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        img: imagen
        
    } 

    arrayProductos.push(obj);
    console.log(arrayProductos);
    let stringProductos = JSON.stringify(arrayProductos);

    localStorage.setItem("storageProductos", stringProductos)
}