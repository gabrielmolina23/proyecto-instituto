function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;
    const rol = document.getElementById('rol').value;
  
    if (usuario && clave) {
      alert(`Bienvenido, ${usuario}!\nRol: ${rol}`);
      //redirigir segun rol
      window.location.href = `menu.html?rol=${rol}`;
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }
  