


function couleur_alea()
{
    document.querySelector("#v2_couleur").style.color = '#'+Math.floor(Math.random()*16777215).toString(16);

}
setInterval(couleur_alea,500);


