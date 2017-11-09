
var btnGuardar = document.getElementById("btnGuardar");

btnGuardar.onclick = guardar;
var db = openDatabase('contactos', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {  
   tx.executeSql('CREATE TABLE IF NOT EXISTS contactos (id AUTO_ICREMENT unique, nombre,apellidos,correo,telefono)');
});

function guardar(){
	var nombre =   document.getElementById("nombre").value; 
	var apellidos =   document.getElementById("apellidos").value; 
	var correo =   document.getElementById("correo").value; 
	var telefono =   document.getElementById("telefono").value; 
	var sexo =   document.getElementsByName("sexo").value; 
	db.transaction(function (tx) {
           tx.executeSql('INSERT INTO contactos (id, nombre,apellidos,correo,telefono,sexo) VALUES (2, "'+nombre+'", "'+apellidos+'", "'+correo+'", "'+telefono+'", "'+sexo+'")');
       });
	
	console.log("Here!!");
	
	 db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM contactos', [], function (tx, results) {
               var len = results.rows.length, i;
               msg = "<p>Found rows: " + len + "</p>";
               document.querySelector('#status').innerHTML +=  msg;
					
               for (i = 0; i < len; i++){
                  msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
                  document.querySelector('#status').innerHTML +=  msg;
               }
            }, null);
         });
}



