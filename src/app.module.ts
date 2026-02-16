import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Task } from './entities/task.entity';
import { Meeting } from './entities/meeting.entity';
import { Contactinfo } from './entities/contact-info.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Employee, Task, Meeting, Contactinfo]),
  ],
  providers: [AppService],
})
export class AppModule {}
