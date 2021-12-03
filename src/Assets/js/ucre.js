import 'animate.css';
export function UCRE() {
    return (
        <div>
            <div className="px-5">
                <h2 className="animate__animated animate__flipInX" >giving users a voice: <span className="firstName">mitigating AI bias in voice recognition technologies</span></h2>
                <img className="px-5 center-img img-fluid" src="./img/ucre/ucreCoverPage.png" alt="a group of smart phones showing the high-fidelity wireframes of our solution" />
                <h4>project background</h4>
                <ul>
                    <li> <p><strong>my role: </strong> Research Lead</p></li>
                    <li><p><strong>skills used: </strong> semi-structured contextual interviews, generative think aloud, remote research, speed dating, empathy mapping, affinity diagramming, storyboarding</p></li>
                    <li><p><strong>project length: </strong>3 months</p></li>
                    <li><p><strong>team size: </strong>4 members (myself, Ryan Adibi, Anita Sun, Nick Chen)</p></li>
                </ul>
            </div>

            <div className="px-5">
                <br />
                <h4>executive summary</h4>
                <p>Today, voice recognition technologies have been integrated into our everyday lives. With a simple command of “Hey, Siri”, “Alexa”, or “OK Google,” we can achieve so much, from turning off the lights to calling our loved ones. However, voice recognition technologies are not exempt from shortcomings. Our generative background research suggested that many voice recognition technologies today do not work well with non-American accents, predominantly uses female voices as default for assistance, and have prevalent data privacy concerns; many of these issues at hand are embedded in the algorithm.</p>
                <p>Thus, we pose the question: <strong>How might we harness the everyday users’ power to alleviate AI biases in voice recognition technology?</strong></p>
                <p>To answer this question, we employed 6 generative and evaluative methods in order to understand our audience’s experiences, perceptions, and attitudes towards voice recognition technologies. We dove deep into what barriers people face when using these systems as well as what solutions would most benefit these users.</p>
            </div>

            <div className="px-5">
                <br />
                <h4>background research</h4>
                <p>To kick off the project, our team conducted background research on voice assistants and the issues with AI in speech recognition. We also 4 generative think-alouds in order to better understand the problem space</p>
                <ul style={{ "list-style-type": "disc" }}>
                    <li><span>General research, empathy mapping</span></li>
                    <li><strong><span>Who we spoke to:</span></strong><span style={{ "line-height": "107%", "font-family": "\"Times New Roman\",serif", "font-size": "16px" }}>&nbsp;people who have previous experience with voice technologies, focusing on those with non-American accents</span></li>
                    <li><strong><span>What we wanted to learn:&nbsp;</span></strong><span style={{ "line-height": "107%", "font-family": "\"Times New Roman\",serif", "font-size": "16px" }}>the different types of biases in voice technologies, how individuals interact with voice recognition software in daily scenarios, how users who do not have English as their first language interact with voice technologies, users’ hidden needs and concerns, how users hope that the voice technologies could be improved</span></li>
                    <li><strong><span>Think-aloud tasks&nbsp;</span></strong>
                        <ol style={{ "list-style-type": "circle" }}>
                            <li><span>1. Briefly introduce yourself in your native language and ask [voice assistant] to translate your introduction into English</span></li>
                            <li><span>2. Create three separate reminders for your daily schedule using [voice assistant].</span></li>
                            <li><span>3.</span><span>Ask your [voice assistant] to recommend a place to have dinner tonight.</span></li>
                        </ol>
                    </li>
                    <li><strong><span>Findings&nbsp;</span></strong>
                        <ol style={{ "list-style-type": "circle" }}>
                            <li><span>Voice recognition technology fails to recommend restaurants in the user’s current location, instead recommends some place in the country of the language the user’s phone is set up in.</span></li>
                            <li><span>Voice assistants fail to recognize / pronounce users’ names when the users’ names are not in English. They also fail to capture the subtle nuances of pronunciation of certain words/phrases in different cultural backgrounds.</span></li>
                            <li><span>The training data of voice assistants are not very expansive and do not enable the devices to handle different dialects and accents, hence one of the reasons why voice technologies display racial and gender bias. Words, even in English, are misidentified due to the way the speaker pronounces and says certain words and phrases.</span></li>
                        </ol>
                    </li>
                </ul>
                <p>Based on our research and findings, we were able to understand our target users and their needs better and created an empathy map to understand and synthesize their experiences, needs, and pain points. </p>
                <img className="px-5 center-img img-fluid" src="./img/ucre/empathyMap.jpg" alt="empathy map with 7 sections" />
            </div>
            <div className="px-5">
                <br />
                <h4>methods</h4>
                <p>Our background research drew our attention to the common challenges users face when interacting with speech recognition technologies. Through this, our team then decided to focus on bridging the gap between the user’s voice and the software understanding it. This led us to conduct contextual inquiries and speed dating sessions that talked about Siri, Alexa, and Google Assistant. </p>
            </div>
            <div className="px-5">
                <h6>contextual inquiry</h6>
                <ul style={{ "list-style-type": "disc" }}>
                    <li><strong><span>Who we interviewed:</span></strong><span>&nbsp;4 users who had a significant amount of experience with speech recognition software</span></li>
                    <li><strong><span>What we wanted to learn:</span></strong><span>&nbsp;the daily user scenarios of voice technology, the problems that participants had encountered in their daily lives, user opinions and concerns about the potential improvements of voice technology</span></li>
                    <li><strong><span>Methods:</span></strong><span>&nbsp;remote research, directed storytelling, semi-structured interviews</span></li>
                    <li><span>Interpretation notes + affinity diagramming</span></li>
                    <li><strong><span style={{ "font-size": "16px" }}>Findings&nbsp;</span></strong>
                        <ol style={{ "list-style-type": "circle" }}>
                            <li><span >Voice recognition technologies are difficult to use for users who do not have an American accent.&nbsp;</span></li>
                            <li><span >Voice recognition technologies have trouble with correctly recognizing non-American names.</span></li>
                            <li><span >Users would love to contribute the recordings of their voices to the database in order to improve the diversity of input data of voice recognition technologies.</span></li>
                            <li><span >Users are concerned about privacy issues with contributing their voices to public databases.</span></li>
                            <li><span >heir voice to alleviate AI biases in voice technologies.</span></li>
                            <li><span >It is a challenge to improve speech recognition technology and the voices can also be quite gendered.</span></li>
                        </ol>
                    </li>
                </ul>
                <p>One of our users said:<br />“I need to imitate American accents for Siri to understand my commands.”<br /><br />From the 4 interviews, we conducted interpretation session together for each interview to translate the interviews into interpreted notes. The data we gathered from directed storytelling session and semi-structured interview sessions lead to our affinity diagram.</p>
                <img className="px-5 center-img img-fluid" src="./img/ucre/affinityDiagram.jpg" alt="affinity diagram with blue, pink, and green levels of categorization" />
            </div>

            <div className="px-5">
                <h4>speed dating</h4>
                <p><span>To ideate possible solutions, our team generated 12 storyboards that illustrated ways to improve the experience users have with voice recognition technologies. We focused on 4 user needs and values:&nbsp;</span></p>
                <ul style={{ "list-style-type": "disc" }}>
                    <li><span>Greater diversity of accents and names in voice recognition systems</span></li>
                    <li>Effective feedback systems, notification systems, and reward systems to be notified that their issues are being improved and addressed</li>
                    <li>Gender-neutral voices</li>
                    <li>Data protection during the crowdsourcing process</li>
                    <li><strong><span>Who we spoke to</span></strong><span>: the same users we interviewed for the contextual inquiries</span></li>
                    <li><strong><span>What we wanted to learn:</span></strong><span>&nbsp;validate our understanding of user needs, discover new user needs, gather thoughts and feedback on our storyboards</span></li>
                    <li><strong><span style={{ "font-size": "16px" }}>Findings:</span></strong>
                        <ol style={{ "list-style-type": "circle" }}>
                            <li><span>Being able to mitigate bias at the beginning of the experience is essential to the entire UX.</span></li>
                            <li><span>Making the experience with speech recognition fun may enable better AI and better interactions with the technologies.</span></li>
                            <li><span>Users feel clear information from speech recognition software on where their data is going is ideal.</span></li>
                            <li><span>People are more likely to assist the improvement of speech recognition software if they know that there is some level of data privacy.</span></li>
                        </ol>
                    </li>
                </ul>
                <img className="px-5 center-img img-fluid" src="./img/ucre/storyboard1.jpg" alt="storyboard on the onboarding process of Alexa" />
                <img className="px-5 center-img img-fluid" src="./img/ucre/storyboard2.JPG" alt="storyboard on integrating voice understanding into Siri workflow" />
            </div>
            <div className="px-5">
                <br />
                <h4>implications/solution</h4>
                <p><span>Inspired by the rapid storyboarding phase and the speed dating sessions, our team decided on a solution that creates an onboarding flow for the voice technology that not only hears the user’s voice, but also provides more sophisticated and detailed onboarding questions to allow the speech recognition software to truly understand the user's accent in an in-depth manner.&nbsp;</span></p>
                <p><span>A more advanced onboarding process would help mitigate the biases intrinsic to speech recognition software while providing users with feedback and the same level of privacy they are used to.</span></p>
                <ul style={{ "list-style-type": "disc" }}>
                    <li><span>Key features:</span>
                        <ol style={{ "list-style-type": "circle" }}>
                            <li><span>Onboarding process to ease the UX and mitigate user challenges</span></li>
                            <li><span>Having a sentence with every letter in the alphabet to ensure understanding of how the user pronounces certain letters and words</span></li>
                        </ol>
                    </li>
                </ul>
                <img className="px-5 center-img img-fluid" src="./img/ucre/ucreWireframes.png" alt="high-fi wireframes showcasing onboarding process" />
            </div>
            <div className="px-5">
                <br />
                <h4>takeaways: what I learned</h4>
                <p>The topic of AI bias in speech recognition was familiar to me, but this project and the different research methods implemented really enabled me to understand what specific challenges users face when they interact with these technologies. While I had conducted semi-structured interviews and usability tests before, I had never utilized the generative think-aloud or directed storytelling methods, and being able to understand the problem in the user’s context really pushed the project forward. Speed dating was also new to me, as using the storyboards to gain insights on potential solutions bridged the ideation and prototyping phases very well for our team and eased the transition into solution creation. As an aspiring UX researcher, I am more confident that I can take the skills, experiences, and knowledge I’ve gained from this project into effective industry practices.</p>
            </div>
            <br />
        </div>
    );
}