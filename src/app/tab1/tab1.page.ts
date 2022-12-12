import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('swipeContainer', { static: true }) swipeContainer!: ElementRef<HTMLElement>;

  activeSegment = 'first';

  onScroll(ev: any) {
    const scrollLeft = this.swipeContainer.nativeElement.scrollLeft;
    const scrollWidth = this.swipeContainer.nativeElement.scrollWidth;
    const clientWidth = this.swipeContainer.nativeElement.clientWidth;

    if (scrollLeft === 0) {
      this.activeSegment = 'first';
    } else if (scrollLeft === clientWidth) {
      this.activeSegment = 'second';
    } else if (scrollLeft === scrollWidth - clientWidth) {
      this.activeSegment = 'third';
    }
  }

  onSegmentChange(ev: any) {
    const value = ev.detail.value;
    switch (value) {
      case 'first':
        this.swipeContainer.nativeElement.scrollTo({
          left: 0,
        });
        break;
      case 'second':
        this.swipeContainer.nativeElement.scrollTo({
          left: this.swipeContainer.nativeElement.scrollWidth / 2,
        });
        break;
      case 'third':
        this.swipeContainer.nativeElement.scrollTo({
          left: this.swipeContainer.nativeElement.scrollWidth,
        });
        break;
    }
  }

}
