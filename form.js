function sum(){
let valor_1=document.getElementById("valor_1").value
let valor_2=document.getElementById("valor_2").value

if(valor_1=="" || valor_2==""){
    Swal.fire({
        icon: 'error',
        title: 'por favor llenar todos los campos',
        showConfirmButton: true,
        customClass: {
            confirmButton: 'swalBtnColor',
        }
      })
}else{
    let suma=parseInt(valor_1) + parseInt(valor_2);
    window.location.href="resultado.html?"+suma;
}
}
