
import {MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ImageUploadService } from 'src/app/imagesupload.service';


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
    constructor(private dialogConfig:MatDialogRef<AddEventComponent>,private formBuilder: FormBuilder,private http: HttpClient,private imageUploadService: ImageUploadService){}

    ngOnInit(): void {

      this.postForm = this.formBuilder.group({
        title: ['', Validators.required],
        desc: ['', Validators.required],
        imgUrl:this.formBuilder.array([
          {
            imgTitle:['',Validators.required],
            imgUrl:['',Validators.required],
            imgDesc:['',Validators.required]
          }
        ]),
        vidArrUrl:this.formBuilder.array([
          {
            vidTitle:['',Validators.required],
            vidUrl:['',Validators.required],
            vidDesc:['',Validators.required]
          }
        ]),
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


    
  get vidArrUrl(): FormArray {
    return this.postForm.get('vidArrUrl') as FormArray;
  }
    
    addVidurl(){
      if(this.vidForm.valid){
        this.vidArrUrls.push(this.vidForm.value);
        this.vidForm.reset();
        console.log(this.vidArrUrls);
        this.vidArrUrl.push(this.formBuilder.control(this.vidForm.value))
        console.log(this.vidArrUrl)
      }
    }

    // get imgUrl(): FormArray {
    //   return this.postForm.get('imgUrl') as FormArray;
    // }
    addImageurl(){
        if(this.imgForm.valid){
          this.imageUrls.push(this.imgForm.value);
          console.log(this.imageUrls);
          this.imgForm.reset();
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
        // this.http.post('https://jsonplaceholder.typicode.com/posts', this.postForm.value)
        //   .subscribe(response => {
        //     console.log('Post created successfully:', response);
        //   }, error => {
        //     console.error('Error creating post:', error);
        //   });
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
