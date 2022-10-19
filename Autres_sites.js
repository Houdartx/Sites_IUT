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
			"title":"Le W",
			"url": "http://srv-peda.iut-acy.local/houdartx/"
		},
		{
			"title": "Discord",
			"url": "https://discord.com/login"
		},
        {
            "title":"Notion",
            "url": "https://www.notion.so/login"
        },
        {
            "title":"Teams",
            "url": "https://login.microsoftonline.com/e21e9783-d0a0-48f8-850e-0b081b46d788/oauth2/v2.0/authorize?response_type=id_token&scope=openid%20profile&client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fgo&state=eyJpZCI6ImI4MDc0ZDEzLTNjNjMtNDdjNS1iYmNlLWYyMmY3MzVmNjhhYiIsInRzIjoxNjM5MDcwNTM3LCJtZXRob2QiOiJyZWRpcmVjdEludGVyYWN0aW9uIn0%3D&nonce=76751925-7238-45ba-983f-27f2108f7053&client_info=1&x-client-SKU=MSAL.JS&x-client-Ver=1.3.4&login_hint=xavier.houdart%40etu.univ-smb.fr&client-request-id=78edda50-d071-42ac-abee-f07cee63db8a&response_mode=fragment&sso_reload=true"
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


