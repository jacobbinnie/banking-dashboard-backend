import { Controller } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}
}
