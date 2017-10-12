
import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    @Output() feature = new EventEmitter<String>();

    onSelect(feature: String) {

        this.feature.emit(feature);


    }

}