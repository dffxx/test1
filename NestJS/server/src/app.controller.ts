import { Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { request } from 'http';
import { create } from 'domain';
import { number } from 'joi';

@Controller('/post')
export class AppController {

  
    @Post('/mas')
    create(@Body() dto = new Array ) {
        dto.sort((a, b) => a - b);
        //numbers.sort((a, b) => a - b);
        return dto;
    }
      
  
}
