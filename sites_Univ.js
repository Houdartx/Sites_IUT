//Fonction créer

function create(tag, parent, text=null, classs=null, id=null) {
	let element = document.createElement(tag)
	if (text)
		element.appendChild(document.createTextNode(text))
	parent.appendChild(element)
	if (classs)
		element.classList.add(classs)
	if (id)
		element.id = id
	return element
}
let links = 
	[
		{
			"title": "Emploi du temps (EDT)",
			"url": "https://www.univ-smb.fr/edt"
		},
		{
			"title": "Messagerie",
			"url": "https://webmail.partage.univ-smb.fr/mail"
		},
        {
            "title":"Scodoc",
            "url": "https://www.iut-acy.univ-smb.fr/scodoc"
        },
        {
            "title":"Moodle",
            "url": "https://moodle.univ-smb.fr/"
        },
        {
            "title":"Intranet",
            "url": "https://intranet.univ-smb.fr/"
        }
	]

let linksSection = document.querySelector("#links")

function display(link, index) {
    let a = create("a",linksSection)
    a.classList.add("couleur_change");
	let article = create("article", a)
	
	let p = create("p", article, link.title)
	a.href = link.url
	a.target = link.title
    
}

for(let index in links) {
	let link = links[index]
	display(link, index)
}


