import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        /* const { limit, offset } = paginationQuery;
        return `This is all type of coffees with Limit : ${limit}, Offset : ${offset}`; */
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number ) {
        // return `This returns the id #${id} of coffee`
        return this.coffeeService.findOne('' + id);
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        // return body;
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        
        this.coffeeService.create(createCoffeeDto);
        return createCoffeeDto;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto:UpdateCoffeeDto) {
        // return `This action updates #${id} coffee`;
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return `This action delete #${id} coffee`;
        return this.coffeeService.remove(id);
    }
}
