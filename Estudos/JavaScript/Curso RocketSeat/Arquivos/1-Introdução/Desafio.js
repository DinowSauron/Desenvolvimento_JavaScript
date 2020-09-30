function pares(x, y) {
    for(var i = x;i <= y;i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
   }
   //pares(32, 321);

   var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

   function getUsers(Users){
       for(user of Users){
           console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join("; ")}` )
       }
   }
   console.log(getUsers(usuarios));
   