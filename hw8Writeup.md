Harkiran Saluja  
PUI HW8: Implementing a Web Portfolio  

**Part 1**  
For this project, I have designed and implemented a web portfolio that showcases me as a UX researcher and HCI practitioner. This website displays my research and design work from both my undergraduate and graduate experiences. With my website, I convey the research  areas that I have specialized in, the methods and processes I have utilized as a researcher and designer, and my approaches and styles to the work I have done. There are four projects that I present displaying the qualitative research and app design I have done and the steps I took to complete those projects. Some of the projects on the website are still in progress, hence the placeholder images lorem ipsum text on the pages. Additionally, I describe my personal background and interests so that readers can know me beyond just an HCI student. I make the website interesting and engaging by having animations on all the pages, vibrant colors, and several buttons and links. The target audience of my portfolio are primarily recruiters, hiring managers, and UX professionals, since this is a crucial component in the job hiring process. Students who want to pursue HCI and UX can also fall under the target audience if they need to see an example of a portfolio or if they would like to reach out to me for help with their HCI projects or goals.

**Part 2**
1. buttons
- i. click on them
- ii. Ways this can be reproduced are: clicking 'check out my work' and 'see all work' on the home page to go the work page and clicking 'view project' on the home and work pages to go to the individual project pages.
2. navigation bar
- i. click on tab
- ii. Within any page on the website, click on the word on the top right that corresponds to the page you want to navigate to.
3. hover
- i. placing cursor on the images brings the bottom image to the top, placing cursor on buttons changes the button color
- ii. On the home and work pages, put your cursor on the images and buttons.
4. links
- i. click on them
- ii. On the about page, there are links highlighted in green for more information on that specific part. Click on them to read more.

**Part 3**
1. Animations
- i. Animations from animate.css
- ii. I chose to use it because it only requires classes to be added to the components within the tags in components.js.
- iii/iv. I used it for each of the different pages to draw attention to a specific aspect of the pages themselves. This includes zoom in for the work pages, pulse for the about page, and back in for the home page.  
2. Bootstrap
- i. Bootstrap framework
- ii. I chose to use it because importing the SASS file saves me from writing a lot of CSS. In turn, I can just add class names to the aspects of the page that I want to change.
- iii/iv. I used this framework to format various page components like the rows and columns for the home page and the work page. It also helps to make the page look consistent. Additionally, I used it in the navigation bar and to format various buttons so that they match and have microinteractions when clicked.
3. React
- i. React.js
- ii. I chose to use this to make the webpage modular and so that I could call various components in the main section and organize content more easily.
- iii/iv. This was used to generate the entire webpage, as well as individual pages. It adds simplicity and modularity to the back end of the website, and also sets the overall structure of the webpages.

**Part 4**  
There were no major changes made to my original design from HW7. One change that was implemented though was the formatting of content for the project pages at the beginning from a centered overview to a list overview that talked about the project context. Other than that, I added animations to the pages.

**Part 5**
Some challenges that I experienced when building the website was implementing the overlap of images on the home and work pages, implementing react v6 and making sure pages rendered consistently, and adding media queries to ensure the pages still looked smooth across various devices. To overcome these, I used Google and previous projects to find out how to do these and tailored the sample code to my webpages. Another quick note that should be made is that the images were not working when placed in the Assets folder, and it is standard for them to be in a folder called public, hence why I did that. 
