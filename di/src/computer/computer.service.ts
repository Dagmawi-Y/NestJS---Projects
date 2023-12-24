import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Injectable()
export class ComputerService {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  run() {}
}
