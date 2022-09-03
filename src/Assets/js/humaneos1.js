// renders the content for the Humane OS page
import 'animate.css';
export function HumaneOS (props) {
   // window.scrollTo(0, 0);
    return (
        <div>

            
            <div>
                <img className='img-fluid' src="./img/humaneOS/humaneOS_Title.png" alt="Maximizing productivity with efficient break-taking"/>
            </div>
            <div className='under'></div>
            <br/><br/><br/>

            <div className='container'>
                <div className='row'>
                    <div className="col br">
                        <h3 className='highlight'>
                            <mark>I designed a mobile operating system that promotes mindfulness, clarity, and focus.  </mark>
                        </h3>

                        <br/><br/>

                        <p className='lead'>HumaneOS creates an experience that fosters goal-setting and achieving by relying on mindfulness, clarity, and focus. In this project,  I worked in a team of seven and designed an entire mobile OS that included thirteen mobile apps. Throughout this journey, I worked on defining user needs, ideating design solutions with different mental models, and prototyped the screens in Figma. At the end of the project, we presented our apps to a panel of professional designers, who gave us a rating based on a 5-star criteria. </p>

                    </div>


                    <div className="ms-5 col">
                        <div className="row">
                            <h3>Timeline</h3>
                            <p>3 months, Team Project</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>Client</h3>
                            <p>Apple, Google (Academic Project)</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>My Role</h3>
                            <p>Product Designer</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>Methods</h3>
                            <p>Persona Creation, Wireframing, Prototyping</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>Deliverables</h3>
                            <span>
                                <a className="btn btn-outline-secondary button" href="https://drive.google.com/file/d/13BSJRGQiL-hDALL5SFfl6qjkeLtwcyvn/view?usp=sharing">Final Slides</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/><br/>


            <div>
                <img className="img-fluid" src="./img/humaneos/Frame 31.png" alt="project process"/>
            </div>
            <div className='under'></div>

            <div className="humane-problem white">

                <div className='px-5'>
                    <h3 className="big_intro problem-u white">THE PROBLEM</h3>
                    <br/>
                    <br/>
                    <h3 className="problem-b white display-5 font-weight-bold">
                        <strong>
                        Cognitive overload is common in user experience design and increases the amount of mental strain on users. 
                        </strong>
                    </h3>

                </div>

            </div>
            <br/><br/><br/>
           
           
                
            <div className="px-5">
                <br/>
                <br/>
                <h1 className='big_intro'>Mobile operating systems such as iOS and Android lack the ability to promote a healthy relationship between the user and the device.</h1>
                <br/><br/>
                <div className="container align-middle align-self-center ">

                    <div className="col align-middle align-self-center ps-5">
                        <img className="mx-auto d-block" src="./img/humaneOS/undraw_my_app_re_gxtj 1.png" alt="cartoon looking at phone"/>
                    </div>

                    <br/>
                    <br/>

                </div>


                
                <div>
                    <strong>
                        <h3 className='big_intro font-weight-bold'>THE OPPORTUNITY</h3>
                    </strong>
                    <br/>
                    <h3 className='highlight'>
                        <mark>How might we foster goal-setting and achieving through a mobile system?</mark>
                    </h3>
                </div>
                <br/>
                <br/><br/>
                <br/>
            </div>
            <div className="under"></div>
            <br/><br/><br/>

            <div className="px-5">
                {/* <strong>
                    <h3 className='big_intro font-weight-bold'>CREATING OUR DESIGN LANGUAGE</h3>
                </strong> */}
                <h3 className='highlight'>
                    <span>We wanted to create something that was not iOS, Android or Windows, but something entirely new.</span>
                </h3>
                <br/>

            </div>
            <div className="px-5">
                <p className="lead">
                    As we began brainstorming our mobile design language principles, we started to ask ourselves: <strong className = "bolded-words">What is it? and often more importantly, what isn't it?</strong>

                    <br/> <br/>

                    First, we talked about what device we could have our OS and its features on. The idea of having an OS on wearables, such as an Apple Watch or Fitbit, was definitely on our list. One of our team members went so far as to talking about <em>Black Mirror</em>, and how our interface doesn't need to be on a physical screen. However, the rest of us realized that the more futuristic it was, the harder it would be to present. We then discussed the pros and cons of iOS and Android.

                    <br/> <br/>
                {/* 
                    About halfway through the sprint, the team member proposing the futuristic idea became a challenge for the rest of the team because they were pushing it hard and no one else wanted to go with it. For the scope of the project, we wanted to have our OS on a device that already exists, such as a wearable or a mobile phone. After a long discussion with the mentors regarding time and feasibility, everyone was on board and we all decided to have our OS on an iPhone, since that's what everyone had (except me, but I knew how they worked).<strong className = "bolded-words"> Here, I learned that being frustrated is part of the design struggle, </strong> whether it be with working in a team or with the designs themselves.

                    <br/> <br/> */}

                    Going off of our brainstorming, we thought about 2 key aspects when deciding the principles of our OS: <strong className = "bolded-words"> self-actualization </strong> and <strong className = "bolded-words"> self-reflection. </strong> Thus, we came up with humane as our design language and defined our target audience as people who are actively pushing themselves toward their higher life goals               
                </p>
            </div>
            <br/>

            <br/><br/><br/>
            <div className="px-5">
                <div className='container'>
                    <div className='row'>
                        <div className="col align-middle align-self-center">
                            <p className="highlight">
                                <mark>Humane is our design language.</mark>
                            </p>
                        </div>

                        <div className="col">
                            <div className="row">
                                
                                <p className="lead">Our experience will foster goal-setting and achieving by using positive encouragement, because many existing goal-oriented devices can feel judgmental or naggy. Our moodboard and list of our design principles embody our design language.
                                <br/> <br/>
                                <span  style={{fontWeight: "bold"}}>These design principles included:</span>
                                <br/>
                                <ul>
                                {/* self-reflection, adaptive feedback, goal support/encouragement, judgement-free, non-intrusive/mindful, and sustainable relationships with the self, others, and one's environment. */}
                                    <li>self-reflection</li>
                                    <li>adaptive feedback</li>
                                    <li>goal support/encouragement</li>
                                    <li>judgement-free</li>
                                    <li>non-intrusive/mindful</li>
                                    <li>sustainable relationships with the self, others, and one's environment</li>
                                </ul>
                               
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <p className="lead"></p>

                <div className="container">
                    <img className="center-img img-fluid" src="./img/humaneOS/moodboard.jpeg" alt="moodboard"/>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className='under'></div>
            <br/>
            <br/>

            {/* Purpose, personas, current state, sketches and initial design */}

            <div className='px-5'>
                <strong>
                    <h3 className='big_intro font-weight-bold'>IDEATION AND PROTOTYPING</h3>
                </strong>
                <br/>
                <div className='underline'>
                    <h4 className='highlight'>Our next focus was to define the overall user experience principles and best practices that would be used for our OS and all of our apps.</h4>
                </div>
                <br/>
                <p className="lead">We also discussed the consistent use of gestures, interactions and use of motion we wanted to enhance the experience of HumaneOS. Here, the intention was to define how users will interact with various screens, how motion will be used to provide users with a sense of place, and how gestures will be used to facilitate smooth transitions between tasks and modalities.
                <br/><br/>
                While we kept humane as our design language, our conversations and ideations during design studio led us to change our description to this: 
                <br/><br/>
                <div>
                <img className='img-fluid' src="./img/humaneOS/designLanguage2.0.png" alt="Maximizing productivity with efficient break-taking"/>
                </div>
                <br/>
                As designers, we looked to existing apps similar to the concept for our OS to help spark design ideas and the creative side within us. We explored apps like Reflectly: a journal-like app that helps you live better by intentionally reflecting on your experiences. The app encourages you to jot down how you feel in daily by asking gentle follow up questions.
                
                <br/>  <br/>
                We also created <strong className = "bolded-words">three personas</strong> and user stories to help guide our design principles. The first was for the messages app, the second was for the health app, and the third was for the notes app.
                <br/><br/>
                
                {/*2 column layout for each persona and journey*/}
                <div className="row justify-content-center">
                    <img className="col-6 imgLeft" src="img/humaneOS/persona1.png" alt="our first user persona"/>
                    <img className="col-6 imgRight pu-4" src="img/humaneOS/journey1.png" alt="our first user journey"/>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <img className="col-6 imgLeft" src="img/humaneOS/persona2.png" alt="our second user persona"/>
                    <img className="col-6 imgRight pu-4" src="img/humaneOS/journey2.png" alt="our second user journey"/>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <img className="col-6 imgLeft" src="img/humaneOS/persona3.png" alt="our third user persona"/>
                    <img className="col-6 imgRight pu-4" src="img/humaneOS/journey3.png" alt="our third user journey"/>
                </div></p>
            </div>
            <br/>
            <br/>


            <div className='under'></div>
            <br/>
            <br/>

            <div className='px-5'>
                <strong>
                    <h3 className='big_intro font-weight-bold'>INITIAL DESIGNS</h3>
                </strong>
                <br/>
                <div className='underline'>
                    <h4 className='highlight'>Next, we focused on three main apps: Messaging, Health, and Notes. Our goal was ideate and refine our ideas into prototypes.</h4>
                </div>
                <br/>
            </div>

            
            <br/><br/><br/>
            <div className="px-5">
                <div className='container'>
                    <div className='row'>
                        <div className="col align-middle align-self-center">
                            <p className="highlight">
                                <mark>Messaging</mark>
                            </p>
                        </div>

                        <div className="col">
                            <div className="row">
                                
                                <p className="lead">Among our top considerations was <strong className = "bolded-words">cognitive overload:</strong> the strain a user experiences when they have to think too much just to get something done. I used this information to my advantage along with the fact that people tend to spend most of their time on messaging and social media apps. During the ideation phase of the messages app, we came up with the idea of a <strong className = "bolded-words">"category bar,"</strong> in which there could be a way for users to organize things into different groups. A quick note that a similar concept to this <strong className = "bolded-words">came out in an Android update in summer 2020</strong> in the messages app.
                                <br/> <br/>
                                <span  style={{fontWeight: "bold"}}>Within the context of our messages app, we decided to give our users the ability to:</span>
                                <br/> 
                                <ul>
                               
                                    <li>Organize contacts into different groups.</li>
                                    <li>Filter what messages they see to the people of a selected group.</li>
                                    <li>Drag a user's profile bubble to a group or color to be added into that group.</li>
                                    <li>Groups with more priority show up on notifications and leave the ones less important out.</li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="under"/>
            <br/><br/><br/>
            <div className="px-5">
                <div className='container'>
                    <div className='row'>
                        <div className="col align-middle align-self-center">
                            <p className="highlight">
                                <mark>Health</mark>
                            </p>
                        </div>

                        <div className="col">
                            <div className="row">
                                
                                <p className="lead">
                                After looking at the current version of the <strong className = "bolded-words">health</strong> app on iOS, we notices the colors were the same and there were no symbols, visualizations, or graphs. From this, we wanted to measure success in a clear and meaningful way provides valuable personal validation and created a basic version of a health app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <div className="row justify-content-center">
                        <img className="col-6 imgLeft" src="img/humaneOS/healthFlow1.jpg" alt="low-fi flow for health"/>
                        <img className="col-6 imgRight" src="img/humaneOS/healthFlow2.png" alt="high-fi flow for health"/>
                    </div>
                </div>
                <br/><br/>
               
               
            </div>

         
            <div className="under"/>
            <br/><br/><br/>
            <div className="px-5">
                <div className='container'>
                    <div className='row'>
                        <div className="col align-middle align-self-center">
                            <p className="highlight">
                                <mark>Notes</mark>
                            </p>
                        </div>

                        <div className="col">
                            <div className="row">
                                
                                <p className="lead">
                                A similar approach was taken with the <strong className = "bolded-words">notes</strong> app as the messages app. After looking at the current state of the notes app on iOS we found the same cognitive overload and clutter problems as with the messages app. This brought back our "category bar" idea for the design of the HumaneOS notes app. As designers, we looked to existing apps similar to the concept for our OS to help spark design ideas and the creative side within us. We explored apps like Reflectly: a journal-like app that helps you live better by intentionally reflecting on your experiences. The app encourages you to jot down how you feel in daily by asking gentle follow up questions.
                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <div className="row justify-content-center">
                        <img className="col-6 imgLeft" src="img/humaneOS/notesCurrent.png" alt="curent state of the iOS notes app"/>
                        <img className="col-6 imgRight" src="img/humaneOS/notesFlow.png" alt="overall flow for the notes app"/>
                    </div>
                </div>
                <br/><br/>
            </div>
            
            <br/><br/><br/>
            <div className='under'></div>
            
            <br/><br/>
            <div className="px-5">
                <strong>
                    <h3 className='big_intro font-weight-bold'>SOLUTION IMPLICATIONS</h3>
                </strong>
                <div className=''>
                <h4 className=''>Throughout the research and design process, we looked through more apps and softwares that provided inspiration for our OS, thus updating our moodboards. The project was quickly intensifying and expectations were getting higher. By the end of the two weeks, we intended to have: </h4>
            </div>
            </div>
            <br/><br/><br/>
            <div className="bgGrey">
                <br/><br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="1" src="./img/persuasive/Group 27.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Consistent UX patterns and UI components</p>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="2" src="./img/persuasive/Group 27.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Consistent app layouts and evidence of componentized thinking</p>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="2" src="./img/persuasive/Group 27.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Consistent methods of managing apps and system controls</p>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="2" src="./img/persuasive/Group 27.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Consistent use of gestures, interactions &amp; use of motion to enhance the experience</p>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
            </div> 
            <div className='px-5'>
                <p className='lead'>
                    
                </p>
            </div>        
        

            

            <div className="collapsible" onClick={props.handleClick}>
                <span className="px-4 section-title">sprint 3</span>
            </div>
            <div className="px-5 content">
               
                
                <img className="px-5 center-img img-fluid" src="img/humaneOS/moodboard1.png" alt="improved moodboard featuring mercury and momentum extension"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/moodboard2.png" alt="improved moodboard featuring reflectly app"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/moodboard3.png" alt="improved moodboard featuring dribbble design ideas"/>
                <p>Starting off with the <strong className = "bolded-words">styleguide</strong>, we wanted fonts and icons that was readable (legible, good contrast with the background), san-serif, would add to the visual aspects of the design, and give a more modern feel to users. This is why we decided to go with the <strong className = "bolded-words">Helvetica Now font</strong> and have <strong className = "bolded-words">material icons</strong> (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide1.png" alt="styleguide with fonts and icons"/>
                <p>The tagging/folder circles from the previous sprint help us improve the concept of <strong className = "bolded-words">readability</strong> (see below). We wanted bright and vibrant colors, but not to the point where they would be too off-putting to users.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/styleguide2.png" alt="styleguide for category bar"/>
                <p>Another element of good readability is descriptive but concise subheadings or subtitles (see first image below). After presenting the category concept in sprint 2, we received feedback that we didn't take users with colorblindness into account. We then created <strong className = "bolded-words">different styleguides for different types of colorblindness</strong> as well as the option to see patterns instead of color (see below).</p>
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
                <p>We then used this categorization to create <strong className = "bolded-words">UX patterns</strong> for the list and display apps and ensured we had at least one of each type by the end of the project (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/patterns1.png" alt="ux pattern example for list apps"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/patterns2.png" alt="ux pattern example for display apps"/>
                <p>For the <strong className = "bolded-words">UI components</strong>, there is one generic design for each group of components (see below). For example, we have components for the buttons, input bar, grid, dock bar, and cards in different shapes. We wanted to have a consistent size, color, and style for our components and but also have the flexibility to customize them based on the actual usage. We saw how we grouped apps into List, Media, Display, and Utility types. Buttons will remain the same size and style, but the color and the text inside will be tailored to match the functionality.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/components.png" alt="ui components guide"/>
                <p>To define how users will start, stop, manage and change multiple apps, modalities or system utilities, we started off by creating a new and intuitive way to <strong className = "bolded-words">clear recently opened apps</strong>. We thought that having to access the panel of recent apps and swipe up on each of them took too long and wasn't efficient enough since it was on a separate screen. There are also no buttons on the screen (like Android) and we wanted to make clearing apps easier. Hence, we wanted a way for users to quickly clear their recent apps and be able to clear multiple apps at a time. Below are visuals of what we designed (from concept to idea):</p>
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
                <p>For <strong className = "bolded-words">notifications</strong>, the user will swipe down from the top to be shown a list of their notifications (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/controls5.png" alt="system controls for notifications"/>
                <p>We integrated the <strong className = "bolded-words">global search</strong> into the notification screen (see below). The user will tap and swipe down from anywhere on the notification screen to bring up the global search bar. Tapping the search bar will bring up the keyboard and the space for search results. We used to have the search bar at the very bottom and once the user taps it, it would jump to the very top to make room for the keyboard and search results. We found this to be very inconsistent as the search bar would keep jumping up and down and decided to have the search bar appear at the top. It would be hidden to have notifications be the main focus.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/search.png" alt="global search feature"/>
                <p>We decided to integrate the global search into the notification screen instead of the springboard because we are reserving that gesture for a new operating system function that will be introduced next, and <strong className = "bolded-words">came out in iOS 14 in Fall 2020</strong>. This regards how notification alerts are received, and they'll only show up at the top of the screen (shown below). We wanted to make the notifications take up less space but still get the point across. The alerts will show the app icon with the notification information, whether that be a text, email, or social media message (messages will also show the name of the person sending it).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/alert.png" alt="notifiction alert only shown at top"/>
                <p>Lastly, I wanted to note our idea of <strong className = "bolded-words">flows</strong>. This is basically an idea where users can have different displays based on home, school, or work and can easily switch between them. We didn't expand on this idea past sprint 3 for the scope of the project but a similar concept called focus mode came out in an <strong className = "bolded-words">Android update in early 2020</strong>, around the same time we came up with this idea.</p>
            </div>

            <div className="collapsible" onClick={props.handleClick}>
                <span className="px-4 section-title">sprint 4</span>
            </div>
            <div className="px-5 content">
                <p>This particular sprint was focused on creating <strong className = "bolded-words">pixel-perfect apps</strong> now that the foundation for HumaneOS was laid out. Here, we created apps that are essential to an OS and added our style of design to it while still maintaining the design language of HumaneOS. Speaking of design language, another review of it caused us to make this slight change, replacing encouragement with focus:</p>
                <blockquote>Humane is our design language. Our experience will foster goal-setting and achieving by relying on mindfulness, clarity, and focus.</blockquote>
                <p>The <strong className = "bolded-words">clock</strong> app has the same features iOS and Android versions have: alarm, world clock, stopwatch, and timer. Initially, we had a color scheme of turquoise and golden yellow, but changed it to purple to match the color of the app icon. We tried to implement reminders occurring at a certain time instead of the world times but soon realized that could be done in the tasks app, the calendar, or even through the alarm clock. For the alarm clock, we allowed users to set alarms by either scrolling or dragging through the clock or tapping on the time in the card and setting the time from there.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/clock1.png" alt="alarm and world clock screens"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/clock2.png" alt="stopwatch and timer screens"/>
                <p>For the <strong className = "bolded-words">wallet</strong> app, we wanted all related information to be in one place, such as cards, banks, transactions, and sending/receiving money. When a card is chosen, it is rotated sideways so that it looks like the user is swiping a card and also to take up whitespace. We also had an option to pay for an item in the store by scanning the barcode, but this was later removed because paying for am item requires going to checkout, so the feature wouldn't apply in a real shopping scenario.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/wallet1.png" alt="wallet screens showing card and transaction history"/>
                <p>Next are the apps that have the category bar. A note that we improved the bar by showing the corresponding color to the left of the photo icon or circle for all the apps with this feature. Starting with the <strong className = "bolded-words">contacts and phone</strong> apps, the main new concept we introduced besides the categories are the icons on the right that allow the user to contact a person in their list right from the app. For example, if I wanted to text them, I could hold my finger on their photo icon and drag it above the messages app icon, and the system would automatically go the messages app and open up message history or create a new draft with that person. Holding your finger on a contact displays a card of their contact information.</p>
                <p>In the dialer, the main new element we provided was <strong className = "bolded-words">prioritizing recent calls</strong> in the order of missed, declined, and answered so that the user wouldn't have to spend time searching for which calls they missed. Category colors would still show next to the contact if applicable.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/contacts.png" alt="contacts app screens showing list and app icons on the side"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/phone.png" alt="phone app showing dialer and sorting of missed, declined, and answered calls"/>
                <p>After looking at the current state of the reminder and Google Photos app, we found the same problem as we did with the messages: cognitive overload. Our <strong className = "bolded-words">tasks</strong> app allows the user to see an overview of the amount of tasks and goals that they have created and completed (see below). This helps to show how the user is progressing as they utilize the tasks app. The user will be able to choose whether the item they are adding will be a task or a goal which affects the OS’s behavior. We also added our UI component for categorization to help with clarity.</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/tasks1.png" alt="screens showing tasks/goals and category bar"/>
                <p>Regarding the <strong className = "bolded-words">photos</strong> app, referred back to what we learned from the user interviews and decided that the "Photos" tab was where the redesign should happen. We want our design to better leverages its machine learning capabilities to identify similar photos, group them together, suggest the best ones, and facilitate photo comparison. With photo groups, users can clean up the clutter in their photo library, and more quickly compare the photos they take, select the best ones for further actions, and delete the unwanted ones (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/photos1.png" alt="screens showing photos app"/>
                <p>Browsing without clutter is the heart of our solution. Similar photos are automatically grouped in the camera roll. Users will see all the photos in the group when they click on it, and will be able to navigate around by clicking on the thumbnails and the bottom. Swiping left and right navigates to another photo group/photo, while tapping on the left/right edge navigates to the next/previous photo within the group. Now that we have photo groups, we are facing a new problem -- how do we tell how many numbers are within one photo group? We decided that using size to denote the number of photos in a group would be a better choice because size encodes more useful information in a way that people intuitively understands: the larger the size, the bigger the number (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/photos2.png" alt="screens showing photos organized by time"/>
                <p>We also revised the <strong className = "bolded-words">messages</strong> app to fix the category bar changes as well to accommodate for <strong className = "bolded-words">users with colorblindness</strong> by implementing pattern mode (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/messages1.png" alt="messages home with categories"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/messages2.png" alt="messages settings to create category"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/messages3.png" alt="messages settings to set colorblindness patterns"/>
                <p>We also decided to design the <strong className = "bolded-words">music</strong> app and put our own spin on it. Once again, we focused on delivering the necessary information as any music app would, but with less cognitive overload. Below is our design:</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/music1.png" alt="music screens showing songs and artists list"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/music2.png" alt="music screens showing albums and playlists list"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/music3.png" alt="music screens showing shazaam-like feature and song playing"/>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/music4.png" alt="music screens showing top songs and lyrics"/>
            </div>

            <div className="collapsible" onClick={props.handleClick}>
                <span className="px-4 section-title">sprint 5 + final</span>
            </div>
            <div className="px-5 content">
                <p>We spent the final stages of this project cleaning up the apps we already created to have consistency across the entire OS and to make it presentable for the judges, who are <strong className = "bolded-words">professional designers</strong> in industry.</p>
                <p>However, we did manage to design a <strong className = "bolded-words">calendar</strong> app and also significantly revise the <strong className = "bolded-words">health</strong> app. The calendar also has the category bar and is similar to the tasks app in that the user can tap on the outlined circle to "mark it done" in the event view (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/calendar.png" alt="calendar app: home, event view, day view, week view"/>
                <p>For health, we primarily focused on what would be consistent with the design language of HumaneOS, hence the mood journal, meditation, stretch, and diet tracker features (see below).</p>
                <img className="px-5 center-img img-fluid" src="img/humaneOS/health.png" alt="2 screens for the health app"/>
                <p>In order to present our work to the judges, we had to create a slideshow of our apps to "sell" our OS (<strong className = "bolded-words"><a href = "https://drive.google.com/file/d/1VUjzs8k-u6c-zBQ8P3kATfObV5iet_28/view?usp=sharing">link</a></strong>), and the judges would rate it from 1-5 stars, as users would rate apps in the app store. HumaneOS received a <strong className = "bolded-words">4.8/5 star rating.</strong></p>
            </div>



            <div className="under"></div>
            <br/><br/><br/>
            <div>
                <strong>
                    <h3 className='px-5 big_intro font-weight-bold'>TAKEAWAYS: WHAT I LEARNED</h3>
                </strong>
                <br/><br/>
                <img className="px-5 img-fluid" src="./img/humaneOS/Frame 8.png" alt=""/>
                <br/><br/>
            </div>
            <p className='px-5 blockquote-footer'>Illustration credits: unDraw</p>
            <br/><br/>
        </div>

      );
}