import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    const fromCpu = this.cpuService.compute(12, 10);
    const fromDisk = this.diskService.getData('Disk service.');

    return [fromCpu, fromDisk];
  }
}
