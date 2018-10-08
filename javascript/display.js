var button = document.querySelectorAll(".filtre_link");

//Ajout d'un click sur les boutons
for(u=0;u < button.length;++u)
{
    button[u].addEventListener( "click" , display);
}

var div = document.querySelectorAll(".js-gallery [data-js-value]");

//Exection quand on clique sur un bouton
function display()
{
    for(i=0;i< div.length;++i)
    {
    	if (div[i].getAttribute("data-js-value") == this.getAttribute("data-js-value"))//si il a l'attribut il affiche sinon il masque
		{
			div[i].style.display = "block";
		} else {
			if(this.getAttribute("data-js-value") == "All")
			{
				for(f= 0; f<div.length;++f)
				{
				div[f].style.display = "block";
				}
			} else {
				div[i].style.display = "none";
			}
		}
    }

    //Récuperer l'ancien et lui enlever la class
    var select = document.querySelector(".filtre_item--selected");
    if(select) //Si select est true
    {
    	select.classList.remove("filtre_item--selected");
	  }

  //On ajoute la class
	this.parentNode.classList.add('filtre_item--selected');
}
