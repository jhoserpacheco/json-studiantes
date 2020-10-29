async function leerJSON(url) {
  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch (err) {
    alert(err);
  }
}

function mostrar() {
  var url = "https://raw.githubusercontent.com/jhoserpacheco/jhoserpacheco/master/estudiantes.json";
  var table = "";
      leerJSON(url).then((estudiantes) => {
      estudiantes.forEach((estudiantes1) => {
        table += `
            <tr>
              <td>${estudiantes1.nombre}</td>
              <td>${estudiantes1.apellido}</td>
              <td>${estudiantes1.codigo}</td>
              <td>${estudiantes1.email}</td>
              <td>
                <select name="subjets">
                 <option selected value="0"> Materias Matriculadas</option>
                 ${mostrarMaterias(estudiantes1.materias)}
                 </option>
                </select>
              </td>
            </tr>
          `;
      });
      document.getElementById("tabla-content").innerHTML = table;
    })
}

function mostrarMaterias(materias) {
  let msj = "";
  let c = 1;
  for (var i in materias) {
    msj += "<option value=" + c++ + ">" + materias[i] + " - " + i + "</option>";
  }
  return msj;
}


mostrar();
