// los button son html css js y python

filterProjects = () => {
    //obtener el id del button
    const selectId = this.value;
    switch (selectId) {
        case "all-btn":
            document.querySelectorAll(".card").forEach(card => card.style.display = "flex");
            break;
        case "html-btn":
            //mostrar el que en su clase tenga html y ocultar el resto
           console.log("Seleccionado html")
            break;
        case "css-btn":
            console.log("Seleccionado css")
            break;
        case "python-btn":
            console.log("Seleccionado python")
            break;
        case "java-btn":
            console.log("Seleccionado java")
            break;
    }
}
