console.log("he;lo")
const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET',url)
xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200 ){
        const objects = JSON.parse(xhr.responseText)
        var output = ''
        objects.forEach(object => {
            //output+=`<img src="${object.url}">`
            document.querySelector('.center').appendChild(createAlbum(object))
        });
        //document.querySelector('.center').innerHTML = output
        //console.log(output);
    }
}

xhr.send()

function create(element){
    const ele = document.createElement(element)
    return ele
}

function createAlbum(object){
    const card = create('div')
    card.setAttribute('class','card')
    const anchor = create('a')
    anchor.setAttribute('href','') //Set the link Here.....................
    const image = create('div')
    image.setAttribute('class','image')
    image.setAttribute('style',`background-image:url(${object.url})`)
    anchor.appendChild(image)

    const description = create('div')
    description.setAttribute('class','description')
    const heading = create('h5')
    heading.textContent = object.id //albumId
    const p = create('p')
    p.textContent = object.title
    description.appendChild(heading)
    description.appendChild(p)

    card.appendChild(anchor)
    card.appendChild(description)

    return card
}

