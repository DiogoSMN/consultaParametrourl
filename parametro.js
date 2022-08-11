function Parametro() {
    var link = document.getElementById("url").value;

    if (link.match(/\?/)) {
        var div = link.split('?')[1];
        console.log("URL possui parametros");        
        let lista = document.getElementById('listas');
        lista.innerText = '';
        div = div.split('&');
        console.log(div);

        for (let i = 0; i < div.length; i++) {
                     
            var a = div[i].split('=');            
            console.log(a);

            let tr = lista.insertRow();
            let td_pr = tr.insertCell();
            let td_vl = tr.insertCell();
            td_pr.innerText = a[0];
            td_vl.innerText = a[1];            

        }

        let url = document.getElementById('listasURL');
        let trurl = url.insertRow();
        let td_url = trurl.insertCell();
        td_url.innerText = link;

    } else {
        alert("Nao foi identificado parametros nessa URL")
        console.log("Nao foi identificado parametros nessa URL")
    }
}

function Limpeza() {

    let lista = document.getElementById('listas');
    lista.innerText = '';
    let tr = lista.insertRow();
    let td_pr = tr.insertCell();
    let td_vl = tr.insertCell();

    td_pr.innerText = '';
    td_vl.innerText = '';

}
function LimparURLs() {
    let url = document.getElementById('listasURL');
    url.innerText = '';
    let trurl = url.insertRow();
    let td_url = trurl.insertCell();
    td_url.innerText = '';

}

function URLs() {
    var botaourl = document.querySelector('#urllocation');
    botaourl.addEventListener('click', () => {
        window.scroll({ top: window.innerHeight, behavior: "smooth" })
    })
}

