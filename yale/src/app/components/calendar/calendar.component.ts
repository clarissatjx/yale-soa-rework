import { Injectable } from '@angular/core';

export interface Event {
  title: string;
  description: string;
  location: string;
  date: Date;
  time?: string; // Optional field for events with timings
  isExpanded: boolean; // Track whether the event is expanded
}

@Injectable({
  providedIn: 'root', // This ensures the service is available app-wide
})
export class CalendarService {
  private events: Event[] = [
    {
      title: '"Feedback Loop" — First-Year MFA Exhibition',
      description:
        'Open to the Yale community and invited, accompanied guests. Featuring work by Alixe Turner, Amanda Atria, Ambrose Murray, Amy Chasse, Amy Fang, Amy Wang, Andrew Warner, Aru Apaza, Bendy Sohn, Cameron Patricia Downey, Camille Gwise, Chen Xiangyun, Chris Cole, Christian Badach, Christopher Postlewaite, Cierra Peters, David Jung, Denzel Boyd, Ellen Fabini, Em Wall, Faye Wei Wei, Gabriella N. Báez, Hana Jelovšek & Gal Šnajder, Hasti Kasraei, Hazal Ozgur, Heejae Kim, Hongting Zhu, Ian Faden, Inkpa Mani, Izza Alyssa, Jasmine Clarke, John Shen, Josh Rabineau, Josh Vasquez, Kiki Serna, Kimberly Heard, Leyla Tonak, Mar Figueroa, Michael Stevens, Nabla Mohammad Yahya, Olivia Reavey, Priscilla Young, Rebecca Cheng, Sok Song, Taisha Carrington, Vernando Reuben, Wenqing Zhai, Xiwen Zhang, Yuna Cho, and Yuwei Tu. Exhibition identity by Amy Fang and Camille Jen-Mei Gwise, Graphic Design MFAs 26.',
      location: '1156 Chapel Street',
      date: new Date('2024-11-13T18:00:00'),
      time: '6:00 PM',
      isExpanded: false, // Initially collapsed
    },
    {
      title: 'MFA Crits in Sculpture',
      description:
        'Sculpture critiques during the Fall 2024 semester are open to the School of Art community and will take place throughout 36 Edgewood Ave. Please find the exact location of each crit below or on the Sculpture Hub (accessible via the Student Hub).',
      location: '36 Edgewood Ave., New Haven',
      date: new Date('2024-11-19T14:00:00'),
      time: '12:00 PM - 3:30 PM EST',
      isExpanded: false, // Initially collapsed
    },
    {
      title: 'Presentation of MFA Crit Work in Painting/Printmaking',
      description:
        'While the formal crits themselves are open only to the Painting/Printmaking department, during the Fall 2024 semester, members of the School of Art community are invited to visit each crit installation in the hours before and after each crit. Please note: Only students and faculty in Painting/Printmaking are permitted in the Pit 3:30-6:30PM, during the formal crit.',
      location: '353 Crown Street, the Pit',
      date: new Date('2024-11-19T10:00:00'),
      time: '1:00 PM - 9:00 PM',
      isExpanded: false, // Initially collapsed
    },
    {
      title: 'MFA Crits in Photography',
      description:
        'Photo critiques during the Fall 2024 semester are open to the SoA community and take place in the Pool (Room G10) in Green Hall, at 1156 Chapel Street. David Billet Olivia Crumm Atefe Moeini John (Jiguang) Shen',
      location: '1156 Chapel Street, New Haven',
      date: new Date('2024-11-19T18:00:00'),
      time: '3:30 PM - 7:00 PM',
      isExpanded: false, // Initially collapsed
    },
    {
      title: 'Course Advising with DGSs, Assistant DGS, Graduate Coordinators & Registrar Emily Cappa',
      description:
        'Photo critiques during the Fall 2024 semester are open to the SoA community and take place in the Pool (Room G10) in Green Hall, at 1156 Chapel Street. David Billet Olivia Crumm Atefe Moeini John (Jiguang) Shen',
      location: 'Locations vary by Department',
      date: new Date('2024-11-20T18:00:00'),
      time: '1:00 PM - 3:30 PM',
      isExpanded: false, // Initially collapsed
    },
    {
      title: 'Visiting Artist Lecture in Photography: Sara Cwynar',
      description:
        'Sara Cwynar continues the Fall 2024 Visiting Artist Lectures in Photography with a talk on Wednesday afternoon. Fall 2024 Visiting Artist lectures in Photography are open to SoA community.',
      location: '1156 Chapel St., the Pool (Room G-10)',
      date: new Date('2024-11-20T18:00:00'),
      time: '3:30 PM - 5:00 PM',
      isExpanded: false, // Initially collapsed
    },
  ];

  // Method to get all events
  getEvents(): Event[] {
    return this.events;
  }

  // Method to get an event by its title
  getEventByTitle(title: string): Event | undefined {
    return this.events.find((event) => event.title === title);
  }

  toggleEventExpansion(event: Event) {
    event.isExpanded = !event.isExpanded; // Toggle expansion state
  }
}
