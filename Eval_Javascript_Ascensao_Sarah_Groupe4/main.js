function toggle() {
    document.body.classList.toggle('sombre');
}


function onglet(event, nomonglet) {

    document.querySelectorAll(".tabcontent").forEach(tab => tab.style.display = "none");


    document.querySelectorAll(".tablinks").forEach(button => button.classList.remove("active"));

    document.getElementById(nomonglet).style.display = "block";
    event.currentTarget.classList.add("active");
}



function validerFormulaire(event){
    event.preventDefault();
    let email= document.querySelector('#email').value;
    let pseudo = document.querySelector('#pseudo').value;
    let password = document.querySelector('#password').value;
    let passcheck = document.querySelector('#passcheck').value;


    if (email.value == '') {
        console.log("Email non valide");
        alert("L'email est requis")
    } else {
        console.log('Email valide');
        alert('Email valide');
    }

    if (pseudo.lenght < 6 ) {
        alert('Le pseudo doit avoir au moins 6 caractères')
        alert("Un pseudo est requis");
        console.log('Un pseudo est requis ');
    } else {
        console.log('Pseudo valide');
        alert('Pseudo valide');
    }

    if (password.lenght < 8 ){
        console.log('Le mot de passe doit avoir au moins 8 caractères')
    }
    if (password !== passcheck) {
        alert("Les mots de passe ne correspondent pas ");
        let passcheck = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$'); 
    } else{
        console.log('le mot de passe est valide ')
        alert('Mot de passe valide ')
    }

}

form.addEventListener('submit', validerFormulaire);

   