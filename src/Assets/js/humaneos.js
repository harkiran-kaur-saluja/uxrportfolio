// renders the content for the Humane OS page
import 'animate.css';
export function HumaneOS () {
    return (
        <div>
            <div className="px-5">
                <h2 className="animate__animated animate__flipInX" >humane <span className="firstName">os</span></h2>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/HumaneOS_banner.png" alt="a banner for humaneOS"/>
                <h4>project background</h4>
                <h6>how might we..?</h6>
                <ul>
                    <li><p><strong>my role: </strong> Product Designer</p></li>
                    <li><p><strong>skills used: </strong> Figma, ideation, wireframing, prototyping, communication and presentation, agile</p></li>
                    <li><p><strong>project length: </strong>10 weeks</p></li>
                    <li><p><strong>team size: </strong>7 members</p></li>
                </ul>
            </div>
            <div className="px-5">
                <h4>executive summary</h4>
                <p>HumaneOS creates an experience that fosters goal-setting and achieving by relying on mindfulness, clarity, and focus. In this project, which consisted of 5 agile sprints, I worked in a team of seven and helped design an entire operating system that included ten to fifteen mobile apps. Throughout this journey, I worked on defining user needs, ideating design solutions with different mental models, and used Figma to create the OS. At the end of the project, we presented our apps to a panel of professional designers, who gave us a score.</p>
            </div>
            <div className="px-5">
                <h4>sprint 1</h4>
                <p>Our goal for this sprint was to create the design language for our new mobile operating system - not iOS, Android or Windows, but something entirely new. As we began brainstorming our mobile design language principles, we started to ask ourselves: <strong>What is it? and often more importantly, what isn't it?</strong></p>
                <p>First, we talked about what device we could have our OS and its features on. The idea of having an OS on wearables, such as an Apple Watch or Fitbit, was definitely on our list. One of our team members went so far as to talking about <em>Black Mirror</em>, and how our interface doesn't need to be on a physical screen. However, the rest of us realized that the more futuristic it was, the harder it would be to present.</p>
                <p>We then discussed the pros and cons of iOS and Android. Here is the list from our brainstorm that day:
                </p><ul>
                <li>iOS is simple, minimalistic</li>
                <li>Apple praised for accessibility (voice control)</li>
                <li>Consistency across apps</li>
                <li>Android has good battery life and clear, simple designs</li>
                <li>Swipe up feature in iOS isn't intuitive if you didn't know how to approach it</li>
                <li>"Not helping me live my best life"</li>
                <li>How do I stay focused on what's important in life?</li>
                <li>Lots of things drawing attention</li>
                <li>Social media can promote "soullessness"</li>
                <li>Real human encounters are what's important, narrowing the gap between your aspiring self and real self</li>
                <li>Facilitate real world experiences to be better real world experiences</li>
                <li>Keeping in mind how the user would interact with the device</li>
                </ul>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/initialDrawing.png" alt="our initial drawing for humaneOS" />
                <p />
                <p>About halfway through the sprint, the team member proposing the futuristic idea became a challenge for the rest of the team because they were pushing it hard and no one else wanted to go with it. For the scope of the project, we wanted to have our OS on a device that already exists, such as a wearable or a mobile phone. After a long discussion with the mentors regarding time and feasibility, everyone was on board and we all decided to have our OS on an iPhone, since that's what everyone had (except me, but I knew how they worked). <strong>Here, I learned that being frustrated is part of the design struggle, whether it be with working in a team or with the designs themselves.</strong></p>
                <p>Going off of our brainstorming, we thought about 2 key aspects when deciding the principles of our OS: <strong>self-actualization</strong> and <strong>self-reflection.</strong> Thus, we came up with <em>humane</em> as our design language and defined our target audience as people who are actively pushing themselves toward their higher life goals</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/designPrinciplesList.jpeg" alt="our design principles list for humaneOS" />
                <br />
                <img className="px-5 center-img img-fluid" src="img/humaneOS/moodboard.jpeg" alt="our moodboard for humaneOS"/>
                <blockquote>Humane is our design language. Our experience will foster goal-setting and achieving by using positive encouragement, because many existing goal-oriented devices can feel judgmental or naggy.</blockquote>
            </div>
            <div className="px-5">
                <h4>sprint 2</h4>
                <p>Our primary focus for this sprint was defining the overall user experience principles and best practices that will be used for our OS and all of our apps. To achieve this we had to: 
                </p><ul>
                <li>Define the target users contexts, typical behaviors and needs by developing personas</li>
                <li>Define the users journey or steps needed to complete tasks for each app type, showing flows or diagrams</li>
                <li>Breakdown the journey steps into requirements for each app type, using user stories</li>
                </ul>
                <p />
                <p>We also used a bit of this sprint to discuss the consistent use of gestures, interactions and use of motion we wanted to enhance the experience of HumaneOS. Here, the intention was to define how users will interact with various screens, how motion will be used to provide users with a sense of place, and how gestures will be used to facilitate smooth transitions between tasks and modalities.</p>
                <p>While we kept humane as our design language, our conversations and ideations during design studio led ux to change our description to this: </p>
                <blockquote>Humane is our design language. Our experience will foster goal-setting and achieving by relying on mindfulness and encouragement.</blockquote>
                <p>As designers, we looked to existing apps similar to the concept for our OS to help spark design ideas and the creative side within us. We explored around 10+ apps, some of which can be seen below. An example is that Reflectly, is a journal-like app that helps you live better by intentionally reflecting on your experiences. The app encourages you to jot down how you feel in daily by asking gentle follow up questions.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/inspiration.png" alt="existing app inspiration for humaneOS"/>
                <p>One of our biggest observations was that all those apps tend to use an earthy tone, very thin lines and fonts, and most importantly, illustrations. As a matter of fact, all of those apps above choose to use illustrations to present a cheerful mood and chill vibe. Besides illustrations, at most 3 options will be presented on the screen for user to choose at each step regardless scenarios. We think the philosophy behind this is great, reducing the distraction for users, and we try to follow this practice into our OS. Lastly, we noticed that animated transition forms a smoother use flow of the apps, a more intimate user experience, therefore making the user stick around.</p>
                <p>After sprint 1 we had low-fidelity prototypes on pencil and paper for the lock screen, so after coming together we wanted to produce a high-fidelity design.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/lockscreen.png" alt="the lockscreen for humaneOS"/>
                <p>We also created three personas and user stories to help guide our design principles. The first was for the messages app, the second was for the health app, and the third was for the notes app.</p>
                {/*2 column layout for each persona and journey*/}
                <div className="userPersona">
                    <img src="img/humaneOS/persona1.png" alt="our first user persona"/>
                    <img src="img/humaneOS/journey1.png" alt="our first user journey"/>
                </div>
                <div className="userPersona">
                    <img src="img/humaneOS/persona2.png" alt="our second user persona"/>
                    <img src="img/humaneOS/journey2.png" alt="our second user journey"/>
                </div>
                <div className="userPersona">
                    <img src="img/humaneOS/persona3.png" alt="our third user persona"/>
                    <img src="img/humaneOS/journey3.png" alt="our third user journey"/>
                </div>
                <h4>Current states + initial designs</h4>
                <p>In order to design the messages app, we looked at the current state of this app on iOS, identified the problem, and presented our solution.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/messagesCurrentState.png" alt="a view of the messages function of our app"/>
                <p>Looking at the above image, I noticed that there was a lot of information for the user to take in. Regarding UX design, cognitive overload is the strain a user experiences when they have to think too much just to get something done. Anything that requires users to stop and figure out what to do next is cognitive load. I used this information to my advantage along with the fact that people tend to spend most of their time on messaging and social media apps.</p>
                <p>During the ideation phase of the messages app, we came up with the idea of a "category bar," in which there could be a way for users to organize things into different groups. Below is the basic concept of it during the whiteboarding process. A quick note that a similar concept to this came out in an Android update in summer 2020, in the messages app.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/categoryBarIdea.jpg" alt="initial category bar drawing"/>
                <p>In the context of the messages app, we decided to give our user a way to organize contacts into different groups (shown below). When the user first opens the app, they’ll be shown all of their recent messages as normal. If they see someone who’s not in a group, they can drag their profile bubble to a group or color to be added into that group, similar to dragging a file into a folder on a computer.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/messagesCategory1.png" alt="initial category bar concept for messages"/>
                <p>Now that the user has organized their contacts into their own groups, they’re able to filter what messages they see to the people of a selected group (shown below). If they tap any of the groups on the top, the messages will filter to only messages from those people. It will also make groups with more priority show up on notifications and leave the ones less important out. Since our user wants to spend more time talking with family this was our way of addressing that issue and allowing them to focus on what’s important to them.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/messagesCategory2.png" alt="initial category bar flow for messages"/>
                <p>After looking at the current version of the health app on iOS, we notices the colors were the same and there were no symbols, visualizations, or graphs. From this, we wanted to measure success in a clear and meaningful way provides valuable personal validation and created a basic version of a health app (both whiteboard ideation and higher fidelity concept shown below): </p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/healthFlow1.jfif" alt="low-fi flow for health"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/healthFlow2.png" alt="high-fi flow for health"/>
                <p>A similar approach was taken with the notes app as the messages app. After looking at the current state of the notes app on iOS we found the same cognitive overload and clutter problems as with the messages app (shown below). This brought back our "category bar" idea for the design of the HumaneOS notes app.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/notesCurrent.png" alt="cuurent state of the iOS notes app"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/notesFlow.png" alt="overall flow for the notes app"/>
            </div>
            <div className="px-5">
                <h4>sprint 3</h4>
                <p>There were several goals we had for this particular sprint, as the project was quickly intensifying and expectations were getting higher. By the end of the two weeks, we intended to have: </p>
                <ul>
                    <li>Consistent UX patterns and UI components</li>
                    <li>Consistent app layouts and evidence of componentized thinking</li>
                    <li>Consistent methods of managing apps and system controls</li>
                    <li>Consistent use of gestures, interactions &amp; use of motion to enhance the experience</li>
                </ul>
                <p>Our design language remained evolving! We decided to include clarity in our design language, meaning easy to use or transparent, because we felt this would be helpful for goal-setting.</p>
                <blockquote>Humane is our design language. Our experience will foster goal-setting and achieving by relying on mindfulness, encouragement, and clarity.</blockquote>
                <p>Throughout the research and design process, we looked through more apps and softwares that provided inspiration for our OS, thus updating our moodboards (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/moodboard1.png" alt="improved moodboard featuring mercury and momentum extension"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/moodboard2.png" alt="improved moodboard featuring reflectly app"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/moodboard3.png" alt="improved moodboard featuring dribbble design ideas"/>
                <p>Starting off with the styleguide, we wanted fonts and icons that was readable (legible, good contrast with the background), san-serif, would add to the visual aspects of the design, and give a more modern feel to users. This is why we decided to go with the Helvetica Now font and have material icons (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide1.png" alt="styleguide with fonts and icons"/>
                <p>The tagging/folder circles from the previous sprint help us improve the concept of readability (see below). We wanted bright and vibrant colors, but not to the point where they would be too off-putting to users.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide2.png" alt="styleguide for category bar"/>
                <p>Another element of good readability is descriptive but concise subheadings or subtitles (see first image below). After presenting the category concept in sprint 2, we received feedback that we didn't take users with colorblindness into account. We then created different styleguides for different types of colorblindness as well as the option to see patterns instead of color (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide3.png" alt="regular colors styleguide"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide4.png" alt="deuteranopia styleguide"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide5.png" alt="protanopia styleguide"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide6.png" alt="tritanopia styleguide"/>
                <p>In order to think about how we can have a consistent layout throughout all of our apps, and also see which ones can use the category bar, we grouped typical OS apps together by type:</p>
                <ul>
                    <li>List: Messages, Contacts, Mail, Notes, Tasks</li>
                    <li>Media: Photos, Media Player, Arcade</li>
                    <li>Display: App Store, Music, Social Media apps, Health, News</li>
                    <li>Utility: Waller, Dialer, Clock, Camera, Calculator, Browser</li>
                    <li>Other: Springboard, Lockscreen, Global Search, Voice Assistant, Weather, Calendar, Maps</li>
                </ul>
                <p>We then used this categorization to create UX patterns for the list and display apps and ensured we had at least one of each type by the end of the project (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/patterns1.png" alt="ux pattern example for list apps"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/patterns2.png" alt="ux pattern example for display apps"/>
                <p>For the UI Components, there is one generic design for each group of components (see below). For example, we have components for the buttons, input bar, grid, dock bar, and cards in different shapes. We wanted to have a consistent size, color, and style for our components and but also have the flexibility to customize them based on the actual usage. We saw how we grouped apps into List, Media, Display, and Utility types. Buttons will remain the same size and style, but the color and the text inside will be tailored to match the functionality.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/components.png" alt="ui components guide"/>
                <p>To define how users will start, stop, manage and change multiple apps, modalities or system utilities, we started off by creating a new and intuitive way to clear recently opened apps. We thought that having to access the panel of recent apps and swipe up on each of them took too long and wasn't efficient enough since it was on a separate screen. There are also no buttons on the screen (like Android) and we wanted to make clearing apps easier. Hence, we wanted a way for users to quickly clear their recent apps and be able to clear multiple apps at a time. Below are visuals of what we designed (from concept to idea):</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/controls1.jfif" alt="whiteboard drawing of system controls"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/controls2.png" alt="digital concept for system controls"/>
                <p>The solution above has the following steps to clearing recent apps and can be done from any screen, not just home:</p>
                <ol>
                    <li>Swipe diagonally to view recent apps list</li>
                    <li>Swipe left on one app to close</li>
                    <li>Tap and hold to select multiple apps and then swipe left to close selected apps, tap on selected app to unselect</li>
                    <li>Tap on icon to open the app</li>
                    <li>Can do it from the left side if you’re left handed (would need to change in settings)</li>
                </ol>
                <p>Swiping up in our OS (see below) and in iOS returns the user to home, as it’s the easiest way for users to get to the home screen since their thumb is near the bottom of the phone. Thus, we didn’t want to cause confusion and we didn’t want to have users swipe left or right cause that would involve displaying the next screen of apps (see second image below), so we thought the corner would be easy. Furthermore, a lot of our app controls involve actions on the bottom of the screen, so we wanted to keep the consistency.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/controls3.png" alt="swiping up the screen in an app returns the user to the home screen"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/controls4.png" alt="swiping left or right will let user switch between recently used apps"/>
                <p>For notifications, the user will swipe down from the top to be shown a list of their notifications (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/controls5.png" alt="system controls for notifications"/>
                <p>We integrated the global search into the notification screen (see below). The user will tap and swipe down from anywhere on the notification screen to bring up the global search bar. Tapping the search bar will bring up the keyboard and the space for search results. We used to have the search bar at the very bottom and once the user taps it, it would jump to the very top to make room for the keyboard and search results. We found this to be very inconsistent as the search bar would keep jumping up and down and decided to have the search bar appear at the top. It would be hidden to have notifications be the main focus.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/search.png" alt="global search feature"/>
                <p>We decided to integrate the global search into the notification screen instead of the springboard because we are reserving that gesture for a new operating system function that will be introduced next, and came out in iOS 14 in Fall 2020. This regards how notification alerts are received, and they'll only show up at the top of the screen (shown below). We wanted to make the notifications take up less space but still get the point across. The alerts will show the app icon with the notification information, whether that be a text, email, or social media message (messages will also show the name of the person sending it).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/alert.png" alt="notifiction alert only shown at top"/>
                <p>Lastly, I wanted to note our idea of flows. This is basically an idea where users can have different displays based on home, school, or work and can easily switch between them. We didn't expand on this idea past sprint 3 for the scope of the project but a similar concept called focus mode came out in an Android update in early 2020, around the same time we came up with this idea.</p>
            </div>
        </div>
      );
}