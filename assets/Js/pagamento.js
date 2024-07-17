let page = 1
let clients = [];
let filteredArray=[];

var inputElements = document.getElementsByTagName('input');

for (var i=0; i < inputElements.length; i++) {
    if (inputElements[i].type == 'text') {
        inputElements[i].value = '';
    }}
/*fetch("http://196.3.100.142:1997/client/clients/",{ headers: new Headers({
    "Authorization": 'Basic'+btoa('clifton:87654321')
  })}).then(response => response.json()).
then(json=>{console.log(json)
  clients = json;
    searchTable(json,page);
}

)*/


/*function searchTable(array,pagina){
    let firstEl = pagina*10;
    let htmlCode = "<tbody><tr><th>nome</th><th>contacto</th><th>status</th></tr>"
    if(array.length > firstEl+10){
        for(let i = firstEl; i<10; i++){
            htmlCode+="<tr><td>"+array[i].name+"</td><td>"+array[i].phone+"</td><td>"+array[i].status.status+"</td></tr>";
            


        }
    }else{
        for(let i = firstEl; i<array.length; i++){
            console.log(i)
            htmlCode+="<tr><td>"+array[i].name+"</td><td>"+array[i].phone+"</td><td>"+array[i].status.status+"</td></tr>";

        }



    }
    pagina++;
    
    htmlCode+="</tbody>"
    document.getElementById("tabela").innerHTML=htmlCode;
    console.log(htmlCode)
    console.log(firstEl)
    return(htmlCode)
}*/
//let resultado = searchTable(clients,page);

function buildTable(array,pagina){
    let firstEl = pagina*10;
    let htmlCode = "<tbody><tr><th style='display:none'>indice</th><th>nome</th><th>contacto</th><th>status</th></tr>"
    if(array.length > firstEl+10){
        for(let i = firstEl; i<10; i++){
            htmlCode+="<tr onclick='storeClient(clientes["+i+"])'><td style='display:none'>"+i+"</td><td>"+array[i].name+"</td><td>"+array[i].phone+"</td><td>"+array[i].status+"</td><td></tr>";
            


        }
    }else{
        for(let i = firstEl; i<array.length; i++){

            htmlCode+="<tr><td>"+array[i].name+"</td><td>"+array[i].phone+"</td><td>"+array[i].status+"</td></tr>";
            document.getElementById("next").disabled=true;
        }



    }
    
    htmlCode+="</tbody>"
    document.getElementById("tabela").innerHTML=htmlCode;
    return(htmlCode)
}



function searchTable(query){
    filtro = new RegExp(query,"i")
    filteredArray = clientes.filter(element => element.name.match(filtro))
    page=0;
    document.getElementById('prev').disabled=true;
    buildTable(filteredArray,page);
    
}
class Cliente{
 
    id;
    gender;
    deleted = false;
    constructor(nome,contacto,estado){
      this.name=nome;
      this.phone = contacto;
      this.status=estado;
    }
  }
  let clientes = [new Cliente("Ana","912345678","Ativo"),
    new Cliente("João",	"965432187",	"Inativo"),
    new Cliente("Maria",	"923876541",	"Ativo"),
    new Cliente("Pedro",	"934567890",	"Ativo"),
    new Cliente("Sofia",	"978123456",	"Inativo"),
    new Cliente("Carlos",	"945678123",	"Ativo"),
    new Cliente("Marta",	"919876543",	"Ativo"),
    new Cliente("José",	"932156789",	"Inativo"),
    new Cliente("Ana Rita",	"968765432",	"Ativo"),
    new Cliente("Miguel",	"912348765",	"Inativo"),
    new Cliente("Inês",	"923456789",	"Ativo"),
    new Cliente("Tiago",	"934567123",	"Ativo"),
    new Cliente("Catarina",	"978654321",	"Inativo"),
    new Cliente("Hugo",	"945123678",	"Ativo"),
    new Cliente("Beatriz",	"919234567",	"Ativo"),
    new Cliente("Ricardo",	"932187654",	"Inativo"),
    new Cliente("Diana",	"968765123"	,"Ativo"),
    new Cliente("André",	"912345987"	,"Ativo"),
    new Cliente("Filipa",	"923456781"	,"Inativo"),
    new Cliente("Guilherme",	"934567812",	"Ativo")
    
  ];
filteredArray = clientes

 


  function nextPage(array){
    page++;
    document.getElementById("prev").disabled=false;

    buildTable(array,page);

  }
  
  function prevPage(array){
    page--
    console.log(page);
    if(page==0){
        document.getElementById('prev').disabled=true;
    }
    document.getElementById("next").disabled=false;
    buildTable(array,page);

  

  }
  
  

  function storeClient(cliente){
    sessionStorage.setItem("id", cliente.id);
    sessionStorage.setItem("name", cliente.name);
    sessionStorage.setItem("status", cliente.status);
    sessionStorage.setItem("gender", cliente.gender);
    sessionStorage.setItem("phone", cliente.phone);
    sessionStorage.setItem("deleted", cliente.deleted);
    window.location.href="./editCliente.html";

}

function editClient(client){
  let link = ("http://196.3.100.142:1997/client/client/"+client.id+"/")
  let headerList = new Headers({
    "Authorization":"Basic"+btoa("clifton:87654321"),
    "Content-Type": "Application/Json"
  })
  fetch(link,{
            method:"PUT",
            body: JSON.stringify(client),
            headers: headerList
        }).then(response=>{
      if(!response.ok){
        throw("ocorreu um erro, tente novamente")
      }
      return response.json();
    }).then(data => alert(JSON.stringify(data)))
    .catch(error=>console.log(error));

  
}


function storePagamento(pagamento){
  sessionStorage.setItem("id")
  window.location.href="./addPagamento.html";
}

  prevPage(filteredArray);
  cliente

  
  fetch("http://196.3.100.142:1997/client/clients/",{ headers: new Headers({
    "Authorization": 'Basic'+btoa('clifton:87654321')
  })}).then(response => response.json()).
then(json=>{console.log(json)
  clients = json
  document.getElementById("tabela").innerHTML= buildTable(json,)

}


)