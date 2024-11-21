export const serializeForm = (formulario) => {
    /* Se crea un objeto con todos los campos del formulario. FormFata es un objeto especial, devuelve el Array con arrays que empareja en la primera posición el nombre y en la segunda en su valor */
    const formData = new FormData(formulario)
    /* console.log(formData) */

    /* Se crea un objeto data vacío */
    const data = {}

    /* Se recorre FormData asignando su value a cada name. Con los corchetes [] creamos una propiedad nueva en el objeto data (esto es una propiedad conmutada)(sería lo mismo que data.name, pero en este caso el for of no soporta esa nomenclatura al querer crear un nuevo name en cada vuelta) */
    for (let [name, value] of formData) {
        data[name] = value
    }

    const tags = data.tags.split(", ")
    data.tags=tags
    /* console.log(data,"Data en serializeForm") */
    /* Devuelve el objeto Data */
    return data

}