

export const apiRest = async (endpoint, method, body) => {

    const API_URL = import.meta.env.VITE_API_URL;
    let options = {}
    if(method=="POST" || method=="PUT"){
        options={
            method,
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body),
            mode: `cors`
        }
        /* console.log(options) */
    }
    
    if(method=="GET" || method=="DELETE"){
        options={
            method
        }
    }

    try {
        const url = `${API_URL}/api/v1/${endpoint}`
        /* console.log(`API por url:${url}`, "Api url en ApiRest")
        console.log(method,"Method en ApiRest")
        console.log(body,"En apiRest helper") 
        console.log(options,"Options desde apirest") */
        const resp = await fetch(url,options)

        console.log(resp,"Resp en ApiRest")
     

        if (resp.ok) {
            const data= resp.json()
            return data
        } else {
            throw (`Error al consultar la API`)
        }

    } catch {
        console.log(error)
        throw (error)
    }

}
