# Yale SOA Website Rework  

This project is a rework of the [Yale School of Art (SOA) website](https://www.art.yale.edu/), reimagined using Angular and Tailwind CSS. It documents my learning journey and highlights areas for improvement as I explored new tools and technologies.

## 😆 My Journey  

This project represents several "firsts" for me:
- **Learning Angular**: This was my first time even touching Angular (and it was MUCH HARDER than React 😢).  
- **Using Tailwind CSS Extensively**: I've worked with Tailwind before, but never to this extent. I did realise how useful it was compared to using pure css.  
- **A Rushed Timeline**: I started this at 3 PM (thanks to my horrendous sleep cycle) and rushed to finish the code by 12am, deployment by 1am (so I can sleep and go to church tomorrow 🤓).  

### Acknowledgments  
- **BIGGG THANK YOU to ChatGPT**: For providing guidance and debugging help along the way.  
- **Thank you to [Ahsan](https://www.youtube.com/watch?v=oUmVFHlwZsI)**: For an excellent 90-minute crash course on Angular.  
- **Tech Note**: I used Angular v18 (instead of v17) to accommodate a library requiring the latest version.

---

## 📌 Areas for Improvement  

Reflecting on the tight development process, there are key areas I aim to refine in future projects:

1. **Efficient Tailwind Usage**  
   - Many styles were reused, but I didn't leverage Tailwind's abstraction features like `@apply` to reduce repetitive code.  

2. **Componentization**  
   - The `Home` component became a cluttered mess with too many embedded sub-components, making it lengthy and hard to maintain.  
   - Splitting it into smaller, more manageable components would enhance readability and scalability.  

3. **Maximizing Angular Features**  
   - I missed opportunities to use new Angular v18 utilities, directives like `@for` (I used ngFor instead, the old-fashioned way), and signals. These could have streamlined logic and improved code efficiency.  

4. **Using Arrays for Data**  
   - Hardcoded elements like navbar items could have been dynamically rendered using arrays for better reusability and maintainability.
     
5. **Using Spartan Library more Efficiently**
   - I used Spartan's library for one component only, but when I installed it, I imagined so many components that could be useful for this project. However, I didn't have enough time to explore it.  
   - For the calendar, I wanted to use [Spartan's Data Table](https://www.spartan.ng/components/data-table). Unfortunately, since it was my first time learning Angular, I was still quite new to all of this and I couldn't understand how to use the data table effectively. As of now, Spartan does not have a tutorial for that component, which is a shame :(

---

## 🛠️ Tools and Technologies  

- **Frontend Framework**: Angular v18  
- **CSS Framework**: Tailwind CSS  
- **Learning Resources**:  
  - [Angular Crash Course by Ahsan](https://www.youtube.com/watch?v=oUmVFHlwZsI)  
  - ChatGPT
- **Deployment**: Vercel

---

## 🌟 Features  

- Redesigned Yale SOA website with a cleaner, modern aesthetic.  
- Fully responsive UI leveraging Tailwind CSS.  
- Modular and scalable Angular architecture.  

---

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com/). You can view the live version of the site here: **[Yale, Reworked](https://yale-rework.vercel.app/)** (Best viewed on desktop!)

