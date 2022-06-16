export default class Car{
    id: number;
    model: string;
    brand: string;
    year: number;
    plate: string;

    constructor(id: number, model: string, brand: string, year: number, plate: string){
        this.id    = id;
        this.model = model;
        this.brand = brand;
        this.year  = year;
        this.plate = plate;
    }
}