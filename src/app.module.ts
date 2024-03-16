import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './public/users/users.module';
import { AccountsModule } from './public/accounts/accounts.module';
import { CompaniesModule } from './public/companies/companies.module';

@Module({
  imports: [UsersModule, AccountsModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
