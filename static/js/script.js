window.onload = login;

function login() {
    let button = document.getElementById('botonLogin');

    button.addEventListener('click', function () {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let logo = document.getElementById('logo');

        let user = searchUser(email);
        if (user) {
            if (user[0].password === password) {
                alert('Hola de vuelta prueba');
                logo.href = 'inicio.html';
            } else {
                button.type = "reset";
            }
        }
    }
    );
}

//declaration of book class
class Book {
    constructor(titulo, autor, editorial, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.isbn = isbn;
    }
}

//declaration of user class
class User{
    constructor(nombre, apellido, email, dni, fechaNacimiento, sexo, pais, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.pais = pais;
        this.password = password;
    }
}

//LISTADO DE LIBROS
var listadoLibros = [];
var libro1 = new Book('El señor de los anillos', 'J.R.R. Tolkien', 'Allen & Unwin', '123456789');
var libro2 = new Book('Harry Potter y el cáliz de fuego', 'J.K. Rowling', 'Salamandra', '123456789');
var libro3 = new Book('Clean Code', 'Robert C. Martin', 'Prentice Hall', '123456789');

listadoLibros.push(libro1);
listadoLibros.push(libro2);
listadoLibros.push(libro3);



function showBooks() {
    let formulario = document.getElementById('formularioLibros');
    let tabla = document.getElementById('listaDeLibros');

    formulario.style.display = 'none';
    tabla.style.display = 'inline-table';

    //erase content of tabla
    tabla.innerHTML = '';

    let tablaContent = ``;

    for (const item of listadoLibros) {
        //Utilizamos += para acumular los datos. 
        //Template strings syntax
        tablaContent += `
          <tr>
            <td>${item.isbn}</td>
            <td>${item.titulo}</td>
            <td>${item.autor}</td>
            <td>${item.editorial}</td>
          </td>
        `
    }
    //Añadimos el contenido a la tabla
    tabla.innerHTML += tablaContent
}

function loadBooks() {
    let formulario = document.getElementById('formularioLibros');
    let tabla = document.getElementById('listaDeLibros');

    formulario.style.display = 'inline-table';
    tabla.style.display = 'none';

}

function registerBook() {
    let title = document.getElementById('titulo').value;
    let author = document.getElementById('autor').value;
    let editorial = document.getElementById('editorial').value;
    let isbn = document.getElementById('isbn').value;

        let libro = new Book(title, author, editorial, isbn);
        listadoLibros.push(libro);
        alert(title);
        showBooks();
}

//conjunto de usuarios
var users = [];
var userAdmin = new User('admin', 'admin', 'admin@gmail.com', '45123456', null, 'genérico', 'Argentina', 'admin');
users.push(userAdmin);


function registerUser(){
    let nombre = document.getElementById('userNombre').value;
    let apellido = document.getElementById('userApellido').value;
    let email = document.getElementById('userEmail').value;
    let dni = document.getElementById('userDni').value;
    let fechaNacimiento = document.getElementById('userNacimiento').value;
    let sexo = document.getElementById('userSexo').value;
    let pais = document.getElementById('userPais').value;
    let password = document.getElementById('userPassword').value;
    let confirmacionPassword = document.getElementById('userConfirmacionPassword').value;
    let emailValidation = true;

    for (const user of users) {
        if (email === user.email) {
            emailValidation = false;
            alert('El E-mail ya se encuentra registrado');
        }
    }

    if (emailValidation && email != '') {
        if (password === confirmacionPassword) {
            let user = new User(nombre, apellido, email, dni, fechaNacimiento, sexo, pais, password);
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            change();
        }else{
            alert('Las contraseñas no coinciden');
        }
    }
    
}

function searchUser(email){
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    var result = storedUsers.filter(obj => {
    return obj.email === email});
    return result;
}



 function change() {
    let formulario = document.getElementById('formularioUser');
    let botonLogin = document.getElementById('botonLogin');

    formulario.style.display = 'none';
    botonLogin.style.display = 'block';

 }


