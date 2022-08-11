console.log("he;lo")
const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET',url)
var objects
var albums = new Set()
xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200 ){
        objects = JSON.parse(xhr.responseText)
        objects.forEach(object => {
            //output+=`<img src="${object.url}">`
            document.querySelector('.center').appendChild(createPicture(object))
            albums.add(object.albumId)
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

function createPictures(){
    const div = document.querySelector('#container')
    div.removeChild(div.firstElementChild)
    const container = create('div')
    container.setAttribute('class','center')
    div.appendChild(container)
    objects.forEach(object => {
        document.querySelector('.center').appendChild(createPicture(object))
    })
}

function createPicture(object){

    const card = create('div')
    card.setAttribute('class','card')
    const anchor = create('a')
    anchor.setAttribute('href','') //Set the link Here.......if needed..............
    const image = create('div')
    image.setAttribute('class','image')
    image.setAttribute('style',`background-image:url(${object.url})`)
    anchor.appendChild(image)

    const description = create('div')
    description.setAttribute('class','description')
    const heading = create('h5')
    heading.textContent = object.id
    const p = create('p')
    p.textContent = object.title
    description.appendChild(heading)
    description.appendChild(p)

    card.appendChild(anchor)
    card.appendChild(description)

    return card
}
// Event Listeners
document.querySelector('#create-album').addEventListener('click',createAlbum)
document.querySelector('#create-picture').addEventListener('click',createPictures)

//document.querySelectorAll('.gallery-button').addEventListener('click',photosInGallery)

function createAlbum(){
    const div = document.querySelector('#container')
    div.removeChild(div.firstElementChild)
    const div2 = create('div')
    div2.setAttribute('id','album-container')
    div.appendChild(div2)
    console.log(albums)
    const arr = Array.from(albums)
    const albumElements = arr.map((album)=>showAlbum(album))
    albumElements.forEach(album=>div2.appendChild(album))
}

function showAlbum(album){
    /* const button = create('button')
    button.setAttribute('style','border: none; background:none;')
    button.setAttribute('id',album)
    button.setAttribute('class','gallery-button')

    const i = create('i')
    i.setAttribute('style','height: 200px; width: 200px;')
    i.setAttribute('class','fa-solid fa-images fa-10x')
    button.appendChild(i)

    return button */
    const gallContainer = create('div')
    gallContainer.setAttribute('class','gallery-container')
    const profile = create('div')
    profile.setAttribute('class','container__profile')
    const h2 = create('h2')
    h2.textContent = `Album #${album}`
    profile.appendChild(h2)
    gallContainer.appendChild(profile)

    return gallContainer

}

function photosInGallery(){

}