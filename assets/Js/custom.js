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

function buildTable(array){
    let htmlCode = "<tbody><tr><th>nome</th><th>contacto</th><th>status</th></tr>"
    for(let i = 0; i<10; i++){
      htmlCode+="<tr onclick='storeClient(clientes["+i+"])'><td style='display:none'>"+i+"</td><td>"+array[i].name+"</td><td>"+array[i].phone+"</td><td>"+array[i].status+"</td><td></tr>";
      


  }
return htmlCode+"</tbody>"
}
function addPagamento(){

}

/*let clientes = [new Cliente("Ana","912345678","Ativo"),
  new Cliente("João",	"965432187",	"0"),
  new Cliente("Maria",	"923876541",	"1"),
  new Cliente("Pedro",	"934567890",	"1"),
  new Cliente("Sofia",	"978123456",	"0"),
  new Cliente("Carlos",	"945678123",	"1"),
  new Cliente("Marta",	"919876543",	"1"),
  new Cliente("José",	"932156789",	"0"),
  new Cliente("Ana Rita",	"968765432",	"1"),
  new Cliente("Miguel",	"912348765",	"0"),
  new Cliente("Inês",	"923456789",	"1"),
  new Cliente("Tiago",	"934567123",	"1"),
  new Cliente("Catarina",	"978654321",	"0"),
  new Cliente("Hugo",	"945123678",	"1"),
  new Cliente("Beatriz",	"919234567",	"1"),
  new Cliente("Ricardo",	"932187654",	"0"),
  new Cliente("Diana",	"968765123"	,"1"),
  new Cliente("André",	"912345987"	,"1"),
  new Cliente("Filipa",	"923456781"	,"0"),
  new Cliente("Guilherme",	"934567812",	"1")
  
]*/




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


