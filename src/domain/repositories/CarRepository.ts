import Car from "../entities/Car";

export default interface CarRepository{

    getAll(): Promise<Array<Car>>

}