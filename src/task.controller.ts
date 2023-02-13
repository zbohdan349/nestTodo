import { Controller, Get, Body,Param, ParseIntPipe, Post,Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Status, Task } from '@prisma/client';
import { ApiBody, ApiProperty } from '@nestjs/swagger';

class TaskDto {
  @ApiProperty()
  name:string
  @ApiProperty({ enum: Status, enumName: 'Status' })
  status:Status
}

@Controller('tasks')
export class TaskController {
  constructor(private  appService: TaskService) {}

  @Get()
  async getAll():Promise<Task[]> {
      return this.appService.users({})
  }

  @Get('/:id')
  async getById(@Param('id',ParseIntPipe) id: number):Promise<Task> {
      return this.appService.user({id})
  }

  @Post()
  @ApiBody({type:[TaskDto]})
  async create(@Body() task: TaskDto):Promise<Task> {
      return this.appService.createUser({...task})
  }

  @Put('/:id')
  async getUpdateById(
    @Param('id',ParseIntPipe) id: number,
    @Body() task: TaskDto
  ):Promise<Task> {
      return this.appService.updateUser({
        where:{id},
        data :{...task}
      })
  }

  @Delete('/:id')
  async deleteById(@Param('id',ParseIntPipe) id: number):Promise<Task> {
      return this.appService.deleteUser({id})
  }
}
