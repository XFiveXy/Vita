const botaoPesquisa = document.getElementById("btnPesquisa");
const campoPesquisa = document.getElementById("campoPesquisa");


const loginBtn = document.querySelector(".link-login");
const modal = document.getElementById("loginModal");
const fecharModal = document.getElementById("fecharModal");
const emailLogin = document.getElementById("emailLogin");
const senhaLogin = document.getElementById("senhaLogin");
const btnEntrar = document.getElementById("btnEntrar");
const mensagemLogin = document.getElementById("mensagemLogin");

const btnTopo = document.getElementById("btnTopo");

const artigoConviccao = document.getElementById("artigoConviccao");
const artigoAcreditar = document.getElementById("artigoAcreditar");
const artigoFe = document.getElementById("artigoFe");

const secoes = {
    "inicio": document.querySelector(".vita-landing"),
    "home": document.querySelector(".vita-landing"),

    "artigos": document.querySelector(".vita-artigos"),
    "artigo": document.querySelector(".vita-artigos"),

    "sobre": document.querySelector(".vita-sobre"),
    "sobrenos": document.querySelector(".vita-sobre"),

    "ia": document.querySelector(".vita-ajuda"),
    "ai": document.querySelector(".vita-ajuda"),
    "gnosia": document.querySelector(".vita-ajuda"),
    "assistente": document.querySelector(".vita-ajuda"),

    "contato": document.querySelector("footer"),
    "email": document.querySelector("footer")
};

// Botão de pesquisa
botaoPesquisa.addEventListener("click", function () {
    if (
        campoPesquisa.style.display === "none" ||
        campoPesquisa.style.display === ""
    ) {
        campoPesquisa.style.display = "block";
        campoPesquisa.focus();
    } else {
        campoPesquisa.style.display = "none";
    }
});

// Quando vc da enter ele vai.
campoPesquisa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let busca = campoPesquisa.value.toLowerCase().trim();

        // Artigos específicos
        if (busca.includes("conv")) {
            window.scrollTo({
                top: artigoConviccao.offsetTop - 100,
                behavior: "smooth"
            });
            campoPesquisa.value = "";
            return;
        }

        if (busca.includes("fe")) {
            window.scrollTo({
                top: artigoFe.offsetTop - 100,
                behavior: "smooth"
            });
            campoPesquisa.value = "";
            return;
        }

        if (busca.includes("acr")) {
            window.scrollTo({
                top: artigoAcreditar.offsetTop - 100,
                behavior: "smooth"
            });
            campoPesquisa.value = "";
            return;
        }

        // Seções gerais
       let resultado = Object.keys(secoes).find(chave =>
    chave.includes(busca)
);

if (resultado) {
    window.scrollTo({
        top: secoes[resultado].offsetTop - 100,
        behavior: "smooth"
    });
    campoPesquisa.value = "";
} else {
    alert("Nenhuma seção encontrada.");
}
    }
});


// POPUP LOGIN
loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
});

fecharModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// BOTÃO VOLTAR AO TOPO - Ninguem mexe, a não ser que uma abençoado consiga de fato fazer ele subir suavemente, ou é meu windows q n pega essa msr sla
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
setTimeout(() => {
    window.scrollTo({
        top: 1500,
        behavior: "smooth"
    });
}, 2000);
btnEntrar.addEventListener("click", function () {
    let email = emailLogin.value;
    let senha = senhaLogin.value;

    if (email === "admin@vita.com" && senha === "123456") {
        mensagemLogin.innerText = "Login realizado com sucesso!";
        mensagemLogin.style.color = "lightgreen";

        setTimeout(() => {
            modal.style.display = "none";
        }, 1000);
    } else {
        mensagemLogin.innerText = "Email ou senha incorretos.";
        mensagemLogin.style.color = "red";
    }
});
