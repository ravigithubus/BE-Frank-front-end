import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewComponent } from 'src/app/forms/image-preview/image-preview.component';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
      @Input()
      images!: any[];
      ngOnInit(){
       console.log(this.images)
      }

    constructor(public dialog: MatDialog){}


  openPreview(index: number): void {
    const dialogRef = this.dialog.open(ImagePreviewComponent, {
      width:'90%',
      height:'90%',
      data: { images: this.images, index: index }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'cancel') {
        console.log('Upload cancelled');
      }
    });
  }
}
