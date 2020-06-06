import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public collapsed = true;

    constructor(private dataService: DataStorageService) { }

    public onSaveData() {
        this.dataService.storeRecipes();
    }

    public onFetchData() {
        this.dataService.fetchRecipes().subscribe();
    }
}
