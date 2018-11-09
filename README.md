# Email Stack 

A simply base to easy develop email with [MJML](https://mjml.io/) framework and the task runner [GulpJS](https://gulpjs.com/).

- [MJML](https://mjml.io/) is a responsive framework, product by [MailJET](https://fr.mailjet.com/)

----

### Install

> Install [NodeJS](https://nodejs.org/) to use NPM.  
Copy files in your project folder or clone this project with [Git](https://git-scm.com/).  
Open console:

	cd /go/in/your/project/folder/
    npm install

----

### Setup

> To config your project, look `./gulpfile.js`:  
- `path` to URL access  
- `server` to FTP access  
- `filename` to build `./src/filename.mjml` in `./dist/filename.html`

----

### Develop

> To build the HTML files and to set relative path of the images: 

    npm run dev

> To watch the MJML files and rebuild after each change: 

    npm run dev-watch

----

### Production

> To build the HTML files, to set absolute path of the images and to put the content of `./dist/` on the FTP: 

    npm run prod