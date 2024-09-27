import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/servises/api.service';
import { LookEventComponent } from '../events/look-event/look-event.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    recentEvents:any[]=[];
    name="ravi";
    currentIndex = 0;
    slideInterval: any;
    slides = 4; // Total number of slides (including images and video)
    transformStyle = 'translateX(0%)';
    constructor(private apiservice:ApiService,private dialog:MatDialog){}
    @ViewChild('videoSlide')
    videoSlide!: ElementRef<HTMLVideoElement>;
    ngOnInit(){
      this.startAutoplay();
      this.getPost();
    }
    ngOnDestroy(): void {
      clearInterval(this.slideInterval);
    }
  
    startAutoplay(): void {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Change slides every 3 seconds
    }
  
    pauseAutoplay(): void {
      clearInterval(this.slideInterval);
    }
  
    resumeAutoplay(): void {
      this.startAutoplay();
    }
  
    nextSlide(): void {
      this.currentIndex = (this.currentIndex + 1) % this.slides;
      this.updateSlider();
    }
  
    prevSlide(): void {
      this.currentIndex = (this.currentIndex - 1 + this.slides) % this.slides;
      this.updateSlider();
    }
  
    updateSlider(): void {
      this.transformStyle = `translateX(-${this.currentIndex * 100}%)`;
  
      // If the video slide is active, play the video
      if (this.currentIndex === this.slides - 1) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    }
  
    playVideo(): void {
      if (this.videoSlide && this.videoSlide.nativeElement) {
        this.videoSlide.nativeElement.play();
      }
    }
  
    pauseVideo(): void {
      if (this.videoSlide && this.videoSlide.nativeElement) {
        this.videoSlide.nativeElement.pause();
        this.videoSlide.nativeElement.currentTime = 0; // Reset video when leaving the slide
      }
    }


    getPost(){
        this.apiservice.data$.subscribe(data=>{
          let lastThreeElements = data.slice(0,3);
          this.recentEvents.push(...lastThreeElements);
          console.log(this.recentEvents);
        })
    }


    openEvent(event:any){
      const dialogRef= this.dialog.open(LookEventComponent,{
        width:'100%',
        height:'100%',
        data:{
          event:event
        }
      })  
    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }
  formatDate(input:any){
    return this.apiservice.formatDate(input);
  }
}
