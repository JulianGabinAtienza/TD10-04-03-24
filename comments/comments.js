// 1) Récupérer les éléments HTML
const div = document.querySelector('.comments');

// 2) Effectuer une requête http asynchrome pour récupérer les commentaires
fetch ('https://jsonplaceholder.typicode.com/comments', {

    method: 'GET',

    headers: {

        // Format de données que l'on accepte
        "Accept" : "application/json",

        // Format de donnees qu'on envoit
        "Content-type" : "application/json",
    }
})

.then(res => res.json())
.then(res => displayComments(res))
.catch(e => console.log(e));

// 3) Notre Fonction pour afficher les commentaires
function displayComments(data) {
    // On veut afficher les 10 premiers commentaires
    for(let i = 0; i < 10; i++) {
        const id = data[i].id;
        const name = data[i].name;
        const email = data[i].email;
        const body = data[i].body;

        // On crée le HTML pour un commentaire
        const html = `
        <div class="comment">
            <h2>${id} : ${name}</h2>
            <p>${email}</p>
            <p>${body}</p>
        </div>`

        // On insère le HTML dans notre div
        const comment = document.createElement('div');
        comment.innerHTML = html;

        div.appendChild(comment);
    }

}