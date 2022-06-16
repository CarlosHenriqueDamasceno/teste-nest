import CarRepository from "../repositories/CarRepository";

export default class GetAllCars {
    carRepo: CarRepository;

    constructor(carRepo: CarRepository){
        this.carRepo = carRepo;
    }

}