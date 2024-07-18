import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent {
  images: any[];
  index: number;

  constructor(
    public dialogRef: MatDialogRef<ImagePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.images = data.images;
    this.index = data.index;
  }

  navigate(step: number): void {
    this.index = (this.index + step + this.images.length) % this.images.length;
  }

  cancel(): void {
    this.dialogRef.close('cancel');
  }
}
