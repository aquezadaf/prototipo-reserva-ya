export class Plato {
    private rutaImagenes: string = "assets/img/platos/";
    private extensionFoto: string = ".jpg";

    constructor(public nombre: string, public precio: number) { }

    get rutaFoto(): string {
        return this.rutaImagenes +
            this.nombre.toLowerCase().replace(/\s/g, "-") +
            this.extensionFoto;
    }

    get descripcion(): string {
        return "Oriundo de Arequipa, una de las ciudades más hermosas del Perú, este plato no es apto para cualquier paladar ya que tiene una característica particular: es muy picante. ";
    }

    get ingredientes(): string[] {
        return [
            "Carne de res",
            "Sal",
            "Pimienta",
            "Comino",
            "Cebolla",
            "Ajo",
            "Ají verde",
            "Vinagre tinto o blanco",
            "Tomate",
            "Perejil",
            "Papas",
            "Aceite"
        ]
    }
}