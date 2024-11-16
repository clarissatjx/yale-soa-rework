import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  BrnHoverCardComponent,
  BrnHoverCardContentDirective,
  BrnHoverCardTriggerDirective,
} from '@spartan-ng/ui-hovercard-brain';
import { HlmHoverCardContentComponent } from '@spartan-ng/ui-hovercard-helm';
import { Component, OnInit } from '@angular/core';
import { CalendarService, Event } from '../calendar/calendar.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
    BrnHoverCardComponent,
    BrnHoverCardContentDirective,
    BrnHoverCardTriggerDirective,
    HlmHoverCardContentComponent,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  faChevronDown = faChevronDown;

  events: Event[] = []; 

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.events = this.calendarService.getEvents(); // Get events from the service
  }

  toggleEventExpansion(event: Event) {
    this.calendarService.toggleEventExpansion(event);
  }
}
