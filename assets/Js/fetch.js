
class Cliente {
    constructor(nome, contacto, activo, gender) {

        this.name = nome;
        this.phone = contacto;
        this.status = activo;
        this.deleted = false;
        this.gender = gender;
    }
    id;

}
class Inscricao {
    constructor(id, deleted, outOfDate, amount, startDate, endDate, status, type) {
        this.client = id

        this.deleted = deleted;
        this.outOfDate = outOfDate;
        this.amount = amount;
        this.startDate = startDate;
        this.subscriptionEndDate = endDate;
        this.subscriptionStatus = status;
        this.subscriptionType = type;

    }

}


/*document.getElementById("form-addcliente").addEventListener("submit", async function (e) {
    e.preventDefault();
    //prparar objectos para inserir 
    let form = document.getElementById("form-addcliente");
    let formData = new FormData(form);

    let obj = Object.fromEntries(formData);
    let novoCliente = new Cliente(obj.name, obj.contacto, 1, Number(obj.genero))
    let amount = 0;
    let dataInicio = new Date();
    let dataFim = dataInicio;

    if (obj.modalidade == 1) {
        amount = 1300
        dataFim.setMonth(dataInicio.getMonth() + 1);
    } else {
        amount = 300;
        dataFim.setDate(dataInicio.getDate() + 1)
    }

    //inserir os objectos e capturar as respostas das requests
    let responses = []
    await insertClient(novoCliente).then(user => responses.push(user))
    let id = responses[0].id;



    let subscricao = new Inscricao(id, false, false, amount, dataInicio.toISOString().split('T')[0], dataFim.toISOString().split('T')[0], 1, obj.modalidade)
    insertSubcricao(subscricao).then(subscription => {
        responses.push(subscription)
    })





    //alert(novoCliente+insertSubcricao(subscricao))
    console.log(responses)





});*/

document.getElementById('form-addpagamento').addEventListener('submit',function (e) {
    e.preventDefault()
    let formData = new FormData(document.getElementById('form-addpagamento'));
    let obj = Object.fromEntries(formData)
    let dataInicio = new Date();
    let dataFim = new Date()
    if (obj.modalidade == 1) {
        amount = 1200 * obj.multiplier
        dataFim.setMonth(dataFim.getMonth() + 1 * obj.multiplier);
    }
    else {
        amount = 200 * obj.multiplier;
        dataFim.setDate(dataFim.getDate() + 1 * obj.multiplier);
    }
    let subscricao = new Inscricao(obj.id,false,false,amount,dataInicio.toISOString().split('T')[0],dataFim.toISOString().split('T')[0],1,obj.modalidade)
    insertSubcricao(subscricao).then(dados => console.log(dados))
    document.getElementById('form-addpagamento').reset()
    
})


function insertClient(client) {

    return fetch("http://196.3.100.142:1997/client/clients/", {
        method: "POST",
        body: JSON.stringify(client),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Basic" + btoa("clifton:87654321")
        })
    }).then(response => {
        if (!response.ok) {
            throw console.error("Erro");
        }
        return response.json();
    }).then(result => retorno = result)


}

function insertSubcricao(inscricao) {

    return fetch("http://196.3.100.142:1997/client/subscriptions/", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": 'Basic ' + btoa('clifton:87654321')
        }),
        body: JSON.stringify(inscricao)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('epa');
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('Blablabla:', error);
        });
}














