import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleListComponent],
  providers: [PeopleService],
  exports: [PeopleListComponent]
})
export class PeopleModule {}
