// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Sabroso a la mesa",
    about: "Colaboración con Maggi, producto alimenticio sano de innovación enfocado a nuevas generaciones de clientes.",
}, {
    figure: "media/foto-02.jpg",
    title: "Helena",
    about: "Producto de emergencia, sistema que mantiene frío de medicamentos (insulina) en apagones eléctricos.",
}, {
    figure: "media/foto-03.jpg",
    title: "Pícaras",
    about: "Servicio e innovación en comida rápida chilena desde foco sustentable. ",
}, {
    figure: "media/foto-04.jpg",
    title: "Villa García",
    about: "Colaboración con Balloon Latam, diseño de experiencia en emprendimientos de Villa García.",
}, {
    figure: "media/foto-05.jpg",
    title: "Ctrl manual",
    about: "Producto que facilita el manejo de trucos en patinetas, elaborado con polímeros reciclados.",
}, {
    figure: "media/foto-06.jpg",
    title: "Pasapacá",
    about: "Snack dirigido al uso en movimiento, evitando suciedad y comodidad.",
}, {
    figure: "media/foto-07.jpg",
    title: "Dorso",
    about: "Sistema de hidratación para choferes, específicamente del transporte público.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
