var minhaPromise = function(){
    return new Promise(function(resolve,reject) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.github.com/users/DinowSauron");
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject("Erro na requisição!");
                }
            }
        }
    });
}



minhaPromise()
    .then(function(response) {
        console.log("Requisição XML");
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })


//com axios
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//importe a blibioteca..
axios.get('https://api.github.com/users/DinowSauron') 
    .then(function(response) {
        console.log("Requisição AXIOS");
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })