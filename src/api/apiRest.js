

export const apiRest = async (endpoint, method, body) => {

    const API_URL = import.meta.env.VITE_API_URL;
    let options = {}
    if(method=="POST" || method=="PUT"){
        options={
            method,
            headers: {
                "Content-Type":"aplication/json"
            },
            body: JSON.stringify(body),
            mode: `cors`
        }
    }

    if(method=="GET" || method=="DELETE"){
        options={
            method
        }
    }

    try {
        const url = `${API_URL}/api/v1/${endpoint}`
        console.log(`API por url:${url}`)

        const resp = await fetch(url,options)

     

        if (resp.ok) {
            return resp.json()
        } else {
            throw (`Error al consultar la API`)
        }

    } catch {
        console.log(error)
        throw (error)
    }

}
