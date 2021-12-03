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
            </div>
        </div>
      );
}