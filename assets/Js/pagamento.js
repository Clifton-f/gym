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


let page = 1
let clientes = [];
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
    let htmlCode = "<tbody><tr><th style='display:none'>indice</th><th>nome</th><th>contacto</th><th>status</th><th>pagar</th><th>editar</th></tr>"
    let lastElement = 0;
    if(array.length > firstEl+10){
      lastElement= firstEl+10
      document.getElementById("next").disabled=false;
    }else{
      lastElement=array.length
      document.getElementById("next").disabled=true;
    }

    for(let i = firstEl; i<lastElement; i++){
      htmlCode+="<tr><td style='display:none;width=0%'>"+i+"</td><td>"+array[i].name+"</td><td>"+array[i].phone+"</td><td>"+array[i].status.status+"</td><td><button onClick='storePagamento(clientes["+i+"])'>pagar</button></td><td><button onclick='storeClient(clientes["+i+"])'>editar</button></td></tr>";
      
     


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




function storePagamento(cliente){
  sessionStorage.setItem("id", cliente.id)
  sessionStorage.setItem('name',cliente.name)
  sessionStorage.setItem('phone',cliente.phone)
  window.location.href="./addPagamento.html";
}

  
  

  
  fetch("http://196.3.100.142:1997/client/clients/",{ headers: new Headers({
    "Authorization": 'Basic'+btoa('clifton:87654321')
  })}).then(response => response.json()).
then(json=>{console.log(json)
  clientes = json
  document.getElementById("tabela").innerHTML= buildTable(json,0)

}


)