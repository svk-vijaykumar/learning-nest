import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "light Roast",
            brand: "BRU",
            flavours: ["chocolate", "vanilla"]
        },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        // throw 'A random error';
        const coffee =  this.coffees.find(item => item.id === +id);
        if (!coffee) {
            // throw new HttpException(`Coffee #${id} not found.`, HttpStatus.NOT_FOUND);
            throw new NotFoundException(`Coffee #${id} not found.`);
        }
        return coffee;
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            // Update the existing Entity
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
