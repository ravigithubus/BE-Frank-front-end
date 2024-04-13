import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-look-event',
  templateUrl: './look-event.component.html',
  styleUrls: ['./look-event.component.css']
})
export class LookEventComponent {
    @Input() event:any;
    @Output() closeEvent=new EventEmitter<boolean>
    constructor(){}
    
    goBackTodashboard(){
        this.closeEvent.emit(false);
    }
}
