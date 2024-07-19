class pagamento{
  constructor(nome,contacto,subscrição){
    
  }

}



class Cliente{
  constructor(nome,contacto,status){
    this.name=nome;
    this.phone = contacto;
    this.status=status;
  }
}
let clientes=[]

fetch("http://196.3.100.142:1997/client/clients/",{ headers: new Headers({
    "Authorization": 'Basic'+btoa('clifton:87654321')
  })}).then(response => response.json()).
then(json=>{console.log(json)
  clientes = json
  document.getElementById("tabela").innerHTML= buildTable(json)

}


)
function storeClient(cliente){
  sessionStorage.setItem("id", cliente.id);
  sessionStorage.setItem("name", cliente.name);
  sessionStorage.setItem("status", cliente.status);
  sessionStorage.setItem("gender", cliente.gender);
  sessionStorage.setItem("phone", cliente.phone);
  sessionStorage.setItem("deleted", cliente.deleted);
  window.location.href="./editCliente.html";

}

function storePagamento(cliente){
sessionStorage.setItem("id", cliente.id)
sessionStorage.setItem('name',cliente.name)
sessionStorage.setItem('phone',cliente.phone)
window.location.href="./addPagamento.html";
}



function buildTable(array){
    let htmlCode = "<tbody><tr><th style='display:none'>indice</th><th>nome</th><th>contacto</th><th>status</th><th>pagar</th><th>editar</th></tr>"
    for(let i = 0; i<10; i++){
      htmlCode+="<tr><td style='display:none;width=0%'>"+i+"</td><td>"+array[i].name+"</td><td>"+array[i].phone+"</td><td>"+array[i].status.status+"</td><td><button onClick='storePagamento(clientes["+i+"])'>pagar</button></td><td><button onclick='storeClient(clientes["+i+"])'>editar</button></td></tr>";
      


  }
return htmlCode+"</tbody>"
}
function addPagamento(){

}






document.getElementById("formAddCliente").addEventListener("submit", function (e) {
  e.preventDefault();
  let form = document.getElementById("form-addcliente")
  var formData = new FormData(form);
  // output as an object
  let obj = Object.fromEntries(formData);
let test = new Cliente(obj.name+obj.apelido,obj.contacto,)
  // ...or iterate through the name-value pairs
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
});



function storeClient(cliente){
  let gender = cliente.gender.id
  let status = cliente.status.id
    sessionStorage.setItem("id", cliente.id)
    sessionStorage.setItem("name", cliente.name)
    sessionStorage.setItem("status", status)
    sessionStorage.setItem("gender", gender)
    sessionStorage.setItem("phone", cliente.phone)
    sessionStorage.setItem("deleted", cliente.deleted)
    window.location.href=("./editCliente.html");

}


