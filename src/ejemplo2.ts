class Usuario {
  constructor(private nombre: string, private edad: number) {}

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}


window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario") as HTMLFormElement;
  const inputNombre = document.getElementById("nombre") as HTMLInputElement;
  const inputEdad = document.getElementById("edad") as HTMLInputElement;
  const salida = document.getElementById("salida") as HTMLParagraphElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = new Usuario(inputNombre.value, parseInt(inputEdad.value));
    salida.textContent = usuario.saludar();
  });
});