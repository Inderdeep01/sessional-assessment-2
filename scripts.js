console.log("he;lo")
const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET',url)
xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200 ){
        const objects = JSON.parse(xhr.responseText)
        var output = ''
        objects.forEach(object => {
            output+=`<img src="${object.url}">`
        });
        document.querySelector('.container').innerHTML = output
    }
}

xhr.send()