let datosJSON= `
{
    "hospital": "Hospital Central",
    "ciudad": "Sevilla",
    "pacientes": [
        {"nombre":"JuanPérez","edad":45,"diagnostico":"Gripe"},
        {"nombre":"AnaLópez","edad":30,"diagnostico":"Fractura"},
        {"nombre":"CarlosRuiz","edad":60,"diagnostico":"Hipertensión"}
    ]
}
`;

// Esto se visualizará en la consola como texto plano
console.log(datosJSON);
let hospital = JSON.parse(datosJSON);
// Tras parsearlo, esto se visualizará como un objeto de JavaScript
console.log(hospital);

// Nombre del hospital
document.getElementById("nombreHospital").textContent = hospital.hospital;
// Ciudad
document.getElementById("ciudad").textContent = "Ciudad: " + hospital.ciudad;
// Pacientes
let lista = "";
for(let i = 0; i < hospital.pacientes.length; i++) {
    let p = hospital.pacientes[i];
    lista += `
    <li>
        <strong>${p.nombre}</strong> - ${p.edad} años - ${p.diagnostico}
    </li>
    `
};
    document.getElementById("pacientes").innerHTML = lista;