import { NgModule } from '@angular/core';
import { ResourceManagerRoutingModule } from './resource-manager.routing.module';
import { SharedModule } from '@shared/shared.module';
import { PositionComponent } from './components/position.component';
import { ResourceAllocationComponent } from './components/resource-allocation.component';

@NgModule({
    declarations: [
        PositionComponent,
        ResourceAllocationComponent
    ],
    imports: [
        ResourceManagerRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: []
})
export class ResourceManagerModule {

}