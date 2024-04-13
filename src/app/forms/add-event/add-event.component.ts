import { Component } from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';
import {OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

    postForm!: FormGroup;
    imgUrl!:any[];
    vidArrUrl!:any[];

    selectedFile!: File;
    constructor(private dialogConfig:MatDialogRef<AddEventComponent>,private formBuilder: FormBuilder){}
    ngOnInit(): void {
      this.postForm = this.formBuilder.group({
        title: ['', [Validators.required, Validators.maxLength(1000)]],
        desc: ['', [Validators.required, Validators.maxLength(5000)]],
        timeStamp: ['', Validators.required], // You can add custom validators for date format if needed
        imgUrl: this.formBuilder.array([]), // You may need to handle validation for array items separately
        vidArrUrl: this.formBuilder.array([]), // You may need to handle validation for array items separately
        addedByUserName: ['', Validators.required],
        role: ['', Validators.required]
      });
    }

    get imgUrlControls() {
      return (this.postForm.get('imgUrl') as FormArray).controls;
    }
  
    get vidArrUrlControls() {
      return (this.postForm.get('vidArrUrl') as FormArray).controls;
    }
  
    addImageUrl() {
      const imageUrlFormGroup = this.formBuilder.group({
        imgTitle: ['', Validators.required],
        imgUrl: ['', Validators.required],
        imgDesc: ['']
      });
      (this.postForm.get('imgUrl') as FormArray).push(imageUrlFormGroup);
    }
  
    addVideoUrl() {
      const videoUrlFormGroup = this.formBuilder.group({
        vidTitle: ['', Validators.required],
        vidUrl: ['', Validators.required],
        vidDesc: ['']
      });
      (this.postForm.get('vidArrUrl') as FormArray).push(videoUrlFormGroup);
    }
  
    removeImageUrl(index: number) {
      (this.postForm.get('imgUrl') as FormArray).removeAt(index);
    }
  
    removeVideoUrl(index: number) {
      (this.postForm.get('vidArrUrl') as FormArray).removeAt(index);
    }

    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0] as File;
    }

    submitForm() {
      if (this.postForm.valid) {
        const formData = this.postForm.value;
        console.log(formData); // Here, you can send the form data to your backend
      } else {
        // Handle form validation errors
      }
    }

    closeDialog(){
      this.dialogConfig.close();
    }
    
}
