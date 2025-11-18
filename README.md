# Responsive HTML from Image Mockups - e-Vahan System

A responsive web application project for the e-Vahan system, featuring multiple pages for financier details, vehicle information, and hypothecation management.

## 🌐 Live Demo

**Demo Link:** [https://transcendent-biscuit-ee8848.netlify.app/](https://transcendent-biscuit-ee8848.netlify.app/)

## 📸 Preview Images

### Main Dashboard (index.html)
![Main Dashboard Preview](https://image.prntscr.com/image/gLZ5YIX3QUCQHS-CaynJYg.png)

### Financier Amount Approve (index2.html)
![Financier Amount Approve Preview](https://image.prntscr.com/image/yYEB07cVTZq7UG-dNi1wXw.png)

### Financier Details (index3.html)
![Financier Details Preview](https://image.prntscr.com/image/rHGhLJ9mSuG4NiUeF8m5SA.png)

## Project Overview

This project consists of three main HTML pages that implement a responsive design for an e-Vahan (electronic vehicle registration) system. The application includes forms for managing financier details, vehicle information, and hypothecation data with a fully responsive header and navigation system.

## Features

### Responsive Design
- Fully responsive header with mobile toggle menu
- Mobile-friendly navigation with dropdown menus
- Responsive form layouts that adapt to different screen sizes
- Bootstrap 5 grid system for flexible layouts

### Pages

#### 1. **index.html** - Main Dashboard
- Select Assigned Office & Action functionality
- Action dropdown with search feature
- Get Pending Work panel with radio button options
- Show Form button linking to index2.html
- Responsive header with Report dropdown menu

#### 2. **index2.html** - Financier Amount Approve
- **Owner Details Tab:**
  - Registration Information
  - Owner Information (3-column layout)
  - Owner Identification/Contacts Details
  - Current Address and Permanent Address
  - Hypothecation Information (with child box)
  - Sanction Amount field
  
- **Vehicle Details Tab:**
  - Vehicle Information (3-column layout, all readonly)
  - Axle Details with nested sections:
    - Number Description and Size of Tyres
    - Registered Axle Weight(kg)
  - Hypothecation Information (with child box)
  - Sanction Amount field

#### 3. **index3.html** - Financier Details
- Similar structure to index2.html
- Hypothecation Details table (centered)
- Vehicle Information in 3-column layout
- All fields readonly
- No action buttons section

### Key Features

- **Responsive Header:**
  - Logo section with National Emblem and e-Vahan logo
  - Navigation menu with Home, Report, Update Profile, and Language options
  - Mobile hamburger menu with close icon
  - Welcome text that adapts to screen size
  - Logout button with proper mobile positioning

- **Report Dropdown:**
  - Application Status
  - Registered Vehicle Details
  - Collection Summary
  - Financier Details
  - Right-pointing arrow icons for each menu item

- **Form Styling:**
  - Consistent border styling with `border-primary` class
  - Readonly fields with custom background color (#dddddc) and text color (#202B23)
  - Required field indicators with red asterisks
  - Small form controls (`form-control-sm`, `form-select-sm`)
  - Nested form sections with child boxes

- **Search Functionality:**
  - Search input inside dropdown menus
  - Search icon positioned inside input field
  - Prevents dropdown closure on search interaction

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **Bootstrap 5.3.0** - Grid system, components, and utilities
- **JavaScript** - Interactive functionality
- **SVG Icons** - Inline SVG for icons and arrows

## File Structure

```
responsive_html_from_image_mockups/
│
├── index.html          # Main dashboard page
├── index2.html         # Financier Amount Approve page
├── index3.html         # Financier Details page
├── README.md           # Project documentation
└── images/             # Image assets (logo files)
    ├── logo-national-emblem.png
    └── logo-evahan.png
```

## Setup Instructions

1. **Clone or download** the project files
2. **Ensure** all HTML files are in the same directory
3. **Place** image files in the `images/` folder:
   - `logo-national-emblem.png`
   - `logo-evahan.png`
4. **Open** any HTML file in a modern web browser
5. **No build process required** - files can be opened directly

## Usage

### Opening the Application

Simply open `index.html` in a web browser to access the main dashboard. The application uses CDN links for Bootstrap, so an internet connection is required for full functionality.

### Navigation

- Click on **"Show Form"** button in index.html to navigate to index2.html
- Use the **Report** dropdown in the header to access different report options
- Toggle between **Owner Details** and **Vehicle Details** tabs in index2.html and index3.html

### Responsive Testing

Test the responsive design by:
- Resizing the browser window
- Using browser developer tools to simulate different device sizes
- Testing on actual mobile devices

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## CSS Customizations

### Readonly Fields
```css
.form-control:read-only {
    background-color: #dddddc !important;
    color: #202B23;
}
```

### Form Sections
- Main sections with borders and padding
- Child boxes with light blue backgrounds
- Nested child-child boxes for hierarchical organization

### Colors
- Primary border: Bootstrap primary blue
- Readonly background: #dddddc (light gray)
- Readonly text: #202B23 (dark gray)
- Required field asterisk: Red (#dc3545)

## Notes

- All form fields in Vehicle Information sections are readonly
- Hypothecation Information sections use nested child boxes
- Search functionality is integrated into dropdown menus
- Mobile menu collapses on smaller screens with absolute positioning
- All asterisks for required fields are styled in red with proper spacing

## Future Enhancements

- Add form validation
- Implement backend integration
- Add data persistence
- Enhance mobile touch interactions
- Add loading states and animations

## License

This project is created for demonstration and development purposes.

## Contact

For questions or issues, please refer to the project repository or contact the development team.

