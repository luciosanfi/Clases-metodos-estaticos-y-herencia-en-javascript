class Persona {
    nombre = "";
    apellido = "";
    static bornDate = 1995;
    static set date(bornDate){
        Persona.bornDate = bornDate;
    }
    static get date(){
        return Persona.bornDate;
    }
    static saludo(){
        console.log("Hola te estoy saludando estaticamente");
    }
}
const persona1 = new Persona();
console.log(Persona.bornDate);
Persona.date = 2000;
console.log(Persona.date);
Persona.saludo();
class Taxista extends Persona{
    numeroDeChapa = 0;
    set nombres(nombre){
        this.nombre = nombre;
    }
    get nombres(){
      return "mi nombre es " + this.nombre;
    }
    set apellidos(apellido){
        this.apellido = apellido;
    }
    get apellidos(){
        return "mi apellido es " + this.apellido;
    }
}
const taxista1 = new Taxista();
taxista1.nombres = "Rolando";
console.log(taxista1.nombres);
taxista1.apellidos = "Rivas";
console.log(taxista1.apellidos);


