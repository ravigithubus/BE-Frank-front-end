
import {MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ImageUploadService } from 'src/app/imagesupload.service';
import { ApiService } from 'src/app/servises/api.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
    imageUrl!: string;
    imageUrls:any[]=[];
    vidArrUrls:any[]=[];
    vidForm!:FormGroup;
    postForm!:FormGroup;
    imgForm!:FormGroup;
    selectedImage!:any;
    selectedFile!: File;
    uploadedImage:boolean=false;
    constructor(private dialogConfig:MatDialogRef<AddEventComponent>,private formBuilder: FormBuilder,private http: HttpClient,private imageUploadService: ImageUploadService,private apiService:ApiService){}

    ngOnInit(): void {

      this.postForm = this.formBuilder.group({
        title:new FormControl('', Validators.required),
        desc: ['', Validators.required],
        imgUrl: [[]],
        vidArrUrl:[[]],
        addedByUserName: ['', Validators.required],
        role:['',Validators.required],
      });


      this.vidForm=this.formBuilder.group({
        vidTitle:['',Validators.required],
        vidUrl:['',Validators.required],
        vidDesc:['',Validators.required]
      })

      this.imgForm=this.formBuilder.group({
        imgTitle:['',Validators.required],
        imgUrl:['',Validators.required],
        imgDesc:['',Validators.required]
      })
    }
    
    addVidurl(){
      if(this.vidForm.valid){
        const vidArrUrlArray = this.postForm.get('vidArrUrl')!.value as any[];
        vidArrUrlArray.push(this.vidForm.value);
        this.postForm.get('vidArrUrl')!.setValue(vidArrUrlArray);
        this.vidForm.reset();
        const vidArrArray = this.postForm.get('vidArrUrl')!.value as any[];
        console.log(vidArrArray);
      }
    }

    addImageurl(){
        if(this.imgForm.valid){
          const imgUrlArray = this.postForm.get('imgUrl')!.value as any[];
          imgUrlArray.push(this.imgForm.value);
          this.postForm.get('imgUrl')!.setValue(imgUrlArray);
          this.imgForm.reset();
          const imgArray = this.postForm.get('imgUrl')!.value as any[];
          console.log(imgArray);
          this.selectedImage = null;
          this.imageUrl="";
          this.uploadedImage=false;
        }
    }

    uploadImage():any{
      if (this.selectedFile) {
        this.imageUploadService.uploadImage(this.selectedFile).subscribe(url => {
          this.imageUrl= url;
          this.imgForm.patchValue({
            imgUrl: this.imageUrl
          });
          this.uploadedImage=true;
        });
      }
    }


    onSubmit() {
      if (this.postForm.valid) {
        this.apiService.postData(this.postForm.value);
        console.log(this.postForm.value)
        this.postForm.reset()
      }
    }
  
  
    onFileSelected(event:any): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
      }
      if (event.target.files && event.target.files.length) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e: any) => {
          this.selectedImage = e.target.result;
        };
  
        reader.readAsDataURL(file);
      }
    }


    deleteImage(): void {
      this.selectedImage = null;
      this.imgForm.reset();
    }

    closeDialog(){
      this.dialogConfig.close();
    }
    
}
