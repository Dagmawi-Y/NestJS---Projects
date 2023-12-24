import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(data: string) {
    // console.log('Consuming 10 watts of power from the power source.');
    this.powerService.supplyPower(10);
    return data;
  }
}
