//consumo de una api rest creada en NODE JS

const urlApi = "http://localhost:3300/api/users"

fetch(urlApi)
.then((response)=> response.json())
.then((res)=> {
    console.log(res)
        for (let i = 0; i < res.length; i++) 
        {
            document.write(res[i].id +"  " +res[i].name +"  " +res[i].lastname+ "<br>")
        }
})