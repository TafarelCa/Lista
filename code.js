/*variavies globais e para manipulacao do Dom(Document Objet Modelo)*/
var container=document.querySelector(".container");
var todasAtivdades=[];

function inserirAtividade(){
    var inputText=document.querySelector("#inputText");


    if(inputText.value==""){
        alert("Campo vazio!Preencha alguma ativiudade.");
    }else{
        /*Cadatro da Atividade*/
        container.innerHTML="";

        var atividade=document.createElement("div");
        atividade.classList.add("atividade");
        
        var input=document.createElement("input");
        input.type="checkbox";
        input.addEventListener("change",atualizarStatus);

        var p=document.createElement("P");
        p.innerHTML=inputText.value;

        var btn=document.createElement("button");
        btn.innerHTML="Remover";
        btn.addEventListener("click", removerAtividade);

        atividade.appendChild(input);
        atividade.appendChild(p);
        atividade.appendChild(btn);

        inputText.value="";

        todasAtivdades.push(atividade);
        for(i=0;i<todasAtivdades.length;i++){
            container.appendChild(todasAtivdades[i]);
         }
    }
}

function removerAtividade(event){
    console.log(event.target.parentElement);

    var index=todasAtivdades.indexOf(event.target.parentElement);

    console.log("Index:",index);

    todasAtivdades.splice(index,1);

    container.innerHTML="";
    for(i=0;i<todasAtivdades.length;i++){
    container.appendChild(todasAtivdades[i]);
  }
}

function atualizarStatus(event){
    var elempai=event.target.parentElement;

 if(event.target.checked==true){
    console.log("Input marcado");
    elempai.style.opacity="50%";
    elempai.children[1].style.textDecoration="line-through";
 }else{
     console.log("Input DESmarcado");
     elempai.style.opacity="100%";
     elempai.children[1].style.textDecoration="";
}
}
