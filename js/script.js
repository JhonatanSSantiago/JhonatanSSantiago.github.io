
$('.navbar > div').on('click', function(){
    $('#conteudo > div').removeClass('visivel');
    $('#conteudo > div.' + this.id).addClass('visivel');
});

function ajax(caminho, funcao) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = funcao;
    xhttp.open("GET",caminho,true);
    xhttp.send();
}

//document.getElementById("about").onclick=()=>{ajax("js/dadosCurso.xml", mostrar)};
function mostrar() {
    if(this.readyState===4&&this.status===200) {
        let doc=this.responseXML;
        let filhos=doc.documentElement.childNodes;
        let tam=filhos.length;
        
        for(let i=0;i<tam;i++) {
            if(filhos[i].nodeType==1) {
                let p = document.createElement("p");
                let b = document.createElement("b");
                let tag = filhos[i].nodeName + ": ";
                let notag = document.createTextNode(tag)
                b.appendChild(notag);
                p.appendChild(b);
           
                let txt = filhos[i].firstChild.nodeValue;
                let notxt = document.createTextNode(txt);
                p.appendChild(notxt);
                document.getElementById("conteudoText").appendChild(p);
            }                    
        }
    }
}

window.onload = alert("Atenção!! Essa página ainda está em desenvolvimento");
window.onload = ()=> {ajax("js/dadosCurso.xml", mostrar)};