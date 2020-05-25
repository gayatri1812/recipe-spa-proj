import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() public featureSelected = new EventEmitter<string>();
    public collapsed = true;

    public onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}
