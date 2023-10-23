# ResumeBuilder-CR-WebDev
A Online Resume Builder Website.


## Abstract
The Resume Builder Web Application is a user-friendly tool that simplifies the process of creating professional resumes. It offers a variety of templates and allows users to input their personal details, professional experience, educational background, skills, hobbies, and more. Users can also include links to their GitHub, LinkedIn, and Facebook profiles. The application supports exporting resumes in PDF and Word formats, and users can even print their resumes directly from the web app.

This project is built using web technologies such as HTML, CSS, and JavaScript, with additional server-side functionality implemented using Node.js. It leverages PDF generation libraries to create downloadable and printable resumes. Whether you're building your own personal website or need an easy way to generate professional resumes, this project provides a solid foundation and is open for contributions and customization.

This project serves as the server-side component of the Resume Builder application. It connects the front-end user interface with a database and enables user authentication(using JWT) for using the website. The complete application allows users to create, customize, and export their professional resumes.

### Code Overview:
The provided code is the backend server for the Resume Builder Web Application. It uses Node.js and Express to handle requests and serves HTML templates using the EJS view engine. Key features of the code include:

- Connection to MongoDB for data storage.
- Middleware for user authentication using cookies.
- Routing for user-related operations.
- Serving static files and rendering HTML templates.
- Handling 404 errors for unknown routes.

## Key Features:
- User-friendly web interface for resume creation.
- Multiple resume templates to choose from.
- Easily add and edit personal information, contact details, and profile photo.
- Include links to your GitHub, LinkedIn, and Facebook profiles.
- List your hobbies and languages you speak.
- Add professional experience and educational details.
- Showcase your skills and expertise.
- Highlight projects and certifications.
- Write an objective statement and an "About Me" section.
- Export resumes as PDF and Word documents or either Print it.

## Technologies Used:
- HTML
- CSS (Bootstrap)
- JavaScript
- Node.js (for server-side functionality)
