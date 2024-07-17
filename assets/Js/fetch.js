
    class Cliente{
        constructor(nome,contacto,activo, gender){
          this.name=nome;
          this.phone = contacto;
          this.status=activo;
          this.deleted = false;
          this.gender=gender;
        }
      }

      document.getElementById("form-addcliente").addEventListener("submit", function (e){
        e.preventDefault();
        let form = document.getElementById("form-addcliente");
        var formData = new FormData(form);
        
        let obj = Object.fromEntries(formData);
      let test = new Cliente(obj.name+" "+obj.apelido,obj.contacto,1,Number(obj.genero))
        
        for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
        console.log("inserir_________________")
        insertClient(test);
        
        
        
      
    
    });


    function insertClient(client){
        fetch("http://196.3.100.142:1997/client/clients/",{
            method:"POST",
            body: JSON.stringify(client),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization" : "Basic"+btoa("clifton:87654321")})
        }).then(response => {
            if(!response.ok){
                throw new console.error("Erro");
            }
            return response.json();
            }).then(result => console.log(result))
      }





      class Inscricao{
        constructor(cliente,deleted,outOfDate,amount,startDate,endDate,status,type){
            this.client = cliente
            
            this.deleted=deleted;
            this.outOfDate=outOfDate;
            this.amount=amount;
            this.startDate=startDate;
            this.endDate=endDate;
            this.subscriptionStatus= status;
            this.subscriptionType=type;

        }
        
      }
      
      let inscricao = new Inscricao(1,false,false,1200,"2024-07-05","2024-08-05",1,1);


      /*fetch("http://196.3.100.142:1997/client/subscriptions/", {
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
    .then(data => {
        alert(JSON.stringify(data));
    })
    .catch(error => {
        console.error('Blablabla:', error);
    });*/




    [
        {
            "id": 1,
            "client": {
                "id": 1,
                "status": {
                    "id": 1,
                    "status": "Activo",
                    "deleted": false
                },
                "gender": {
                    "id": 1,
                    "name": "Masculino"
                },
                "name": "Paulo",
                "phone": "841234567",
                "deleted": false
            },
            "subscriptionType": {
                "id": 1,
                "name": "Mensal",
                "description": "Dura 30 dias",
                "amount": 1200.0,
                "duration": 30,
                "deleted": false,
                "status": 1
            },
            "subscriptionStatus": {
                "id": 1,
                "status": "Activo",
                "deleted": false
            },
            "subscriptionDate": "2024-07-05",
            "subscriptionEndDate": null,
            "subscriptionAmount": 1200.0,
            "outOfDate": false,
            "deleted": false
        }
    ]
   