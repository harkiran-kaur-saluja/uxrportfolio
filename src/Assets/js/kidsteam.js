import 'animate.css';
export function KidsTeam(props) {
    return (
        <div>
            <div className="px-5">
                <h2 className="animate__animated animate__flipInX" >Kids<span className="firstName">team</span></h2>
                <img className="px-5 center-img img-fluid" src="img/kidsTeam/kidsTeamCoverPic.png" alt="the cover for KidsTeam" />
                <h4>research overview</h4>
                <p>KidsTeam is an <strong className="bolded-words">intergenerational co-design team</strong> that is comprised of children ages 7-11 years old, adult design partners, and sometimes various outside stakeholders (this can be industry partners such as Amazon, local partners such as the Seattle Public Library, or other universities such as USC). At KidsTeam, we engage in <strong className="bolded-words">participatory design practices</strong> in which the children are equal stakeholders throughout the design process.</p>
                <p>For two and a half years, I have been studying participatory design with children as part of KidsTeam UW under Professor Jason Yip. KidsTeam UW's research is part of the Information School (iSchool) at the University of Washington and we <strong className="bolded-words">aim to understand the interactions with and perceptions of technology through co-design sessions, interviews, and qualitative coding of rich data</strong>, which further informs our approach to designing technologies with input from (and built for) children. I have worked on a variety of projects with several partners, including Amazon, Google, SunSmart, and other departments at UW.</p>
                <ul>
                    <li><p><strong>my role: </strong> Undergraduate UX Research Assistant</p></li>
                    <li><p><strong>skills used: </strong> semi-structured interviews, remote research, participatory design, qualitative data analysis, working with minors</p></li>
                    <li><p><strong>time spent conducting research: </strong>2.5 years</p></li>
                    <li><p><strong>mentors: </strong>Jason Yip, Kung Jin Lee, Wendy Roldan</p></li>
                </ul>
            </div>
        
            <h4 className="px-5">projects I worked on</h4>
            
            
            <div className="collapsible" onClick={props.handleClick}>
                <span className="px-4 section-title">Reading Sidekick with Alexa (partner: Amazon)</span>
            </div>
            <div className="px-5 content">
                <p>One of the projects I'm proudest of is an Alexa feature that was released in the summer of 2021, the Reading
                    Sidekick. We developed this with Amazon to complement child reading and build language fluency. During the
                    co-design process, we asked the children to bring books from home that they like to read and asked them what
                    aspects of reading they liked and disliked, as well as
                    <strong className="bolded-words"> how Alexa could help them with their reading experience</strong>. The idea was to use this as a
                    foundation for creating a technology that makes it easier and more fun for kids to read.
                </p>
                <p>In one of the sessions, we used 
                    <em> Bags of Stuff</em>, a co-design method that involves the use of arts and crafts to create a low-fidelity
                    prototype (see full explanation in
                    <a href="http://bigyipper.com/wp-content/uploads/2010/11/1337_final.pdf"> Walsh et al. (2013)</a>). It took us
                    some time to help the kids in our group come up with an idea, as we looked at their books and asked them how
                    they read, but we decided to use their idea of a 3D book and manifest it into Alexa reading along with the kid
                    and project videos of the action in the story. Alexa has eyes for reading and a camera that projects text,
                    animations and music videos of the story, along with speakers for sound. One thing the children noted was that
                    when they doesn't understand something they are reading, they don't stop to look it up or ask someone - they
                    just keep reading. We took this information and helped them create something that wouldn't interrupt the kids
                    too much when reading. Our final creation was an Alexa with eyes and speakers projecting a house with a
                    character from Aiken's book in it, along with some text.
                </p>
                <p>key findings:</p>
                <ul>
                    <li>children need help understanding big words and sounding them out</li>
                    <li>there should be a reward system for child improvement</li>
                    <li>children should take turns with Alexa while reading</li>
                </ul>
                <p>see news release <a href="https://www.aboutamazon.com/news/devices/alexas-new-reading-sidekick-makes-learning-to-read-fun">here</a>
                </p>
                
                
                <div className="collapsible" onClick={props.handleClick}>
                    <span className="px-4 section-title">Would You Rather (WYR)</span>
                </div>
                
                <p>In this project, I worked with Lucy Simko (UW CSE PhD student), Camille Cobb (Assistant Professor at University
                    of Illinois-Urbana Champaign who was a postdoctoral researcher at Carnegie Mellon's CyLab at the time), and
                    Professor Alexis Hiniker of the UW iSchool. This was in addition to working with Professor Yip and other
                    undergraduates.</p>
                <p>Primarily, the goal of the project was to
                    <strong className="bolded-words"> develop a focus group method using line-judging </strong>
                    (see Walsh et al. (2013)) for eliciting and discussing formative design insights with children. This method
                    involves playing the Would You Rather game in order to gain insights on children's perceptions of technology
                    (<em>e.g.</em>
                    <em>Would You Rather play with a cute robot that secretly changes your Wi-Fi password, or play with a scary
                        robot that does not secretly change anything?</em>). Here, we would collect, transcribe, and code data. Data
                    coding and analysis was performed based on factors such as the situation type of the Would You Rather question,
                    how many children chose which option, children's mental models of how technology worked, and what the children
                    value. Our findings were published in at the
                    <strong className="bolded-words"> ACM Interaction Design and Children (IDC) conference in June 2021 </strong>
                    (see publications section).
                </p>
                <p>The key stages of WYR are: scenario generation, voting and discussion, and analysis. To evaluate and refine this
                    method, we conducted
                    <strong className="bolded-words"> seven additional WYR sessions </strong>
                    with children through participatory design methods and by following the WYR stages. Below is a table that gives
                    an overview of the sessions that was presented in our IDC paper.
                </p>
                <img className="px-5 center-img img-fluid" src="img/kidsTeam/sessionsTableWYR.png" alt="sessions and examples" />
                <p>Different sessions had different focuses, as initially we started off with Creepy Tech, but we also noticed the
                    negativity in the scenarios, which is why we came up with positive ones to see whether the children would react
                    differently. Children also came up with their own scenarios in some of the sessions as part of the co-design
                    process (shown below). For each scenario, there were three options: choice 1, choice 2, and I don't know. When
                    KidsTeam went online, we
                    <strong className="bolded-words"> developed a virtual way </strong>
                    for everyone to showcase these options by having them place their hand relative to their head to indicate their
                    choice (shown below)
                </p>
                <img className="px-5 center-img img-fluid" src="img/kidsTeam/virtualWYR.png" alt="the cover for KidsTeam" />
                <p>key findings:</p>
                <ul>
                    <li>Confronting ambiguity generates design insights</li>
                    <li>Children who went with I don't know still conveyed useful insights</li>
                    <li>When explaining their reasoning for choosing a certain option participants tend to verbalize contextual
                        details: resources, habits, routines, and experiences</li>
                    <li>Arguments for a WYR choice reveal mental models and participants sense of agency over technology</li>
                    <li>Choices and hesitations convey participants preferences and values</li>
                </ul>
            </div>

            <div className="collapsible" onClick={props.handleClick}>
                <span className="px-4 section-title">KidsTeam Online</span>
            </div>
            <div className="px-5 content">
                <p>When the pandemic hit in the US, KidsTeam moved online, and this sparked another project led by Kung Jin Lee, a
                    PhD Candidate in the UW iSchool at the time. Our work was presented at the
                    <strong className="bolded-words"> CHI 2021 conference </strong>
                    (see publications section) and won the
                    <strong className="bolded-words"> Best Paper Award </strong>
                    (top 1% of 2,800 papers). Throughout the project, we utilized the theory of improvisation, and here I
                    <strong className="bolded-words"> learned </strong>
                    how to create online participatory design methods on the fly as a result of the sudden online transition. Our
                    research questions were as follows:
                </p>
                <ul>
                    <li>RQ1: What are project logistics considerations when co-designing in a synchronous online space?</li>
                    <img className="px-5 center-img img-fluid" src="img/kidsTeam/kidsCoDesigning.png" alt="the cover for KidsTeam" />
                    <li>RQ2: What are online factors considerations when co-designing in a synchronous online space?</li>
                    <li>RQ3: What kinds of participant interactions do we need to consider when co-designing in a synchronous
                        online space?</li>
                </ul>
                <p>Before COVID-19, KidsTeam UW team members met twice-a week after school for 90 minutes. These sessions consisted
                    of the children having snacks provided by the researchers (snack time), the researchers prompted the kids to
                    answer the question of the day to get their brain flowing (circle time), and co-design time with the researchers
                    and children. In the online format, we had to adjust and cut the time from 90 to 75 minutes due to the short
                    attention-span of the kids, and we also made sessions once a week instead of twice. Due to the online format,
                    there was no snack time, hence why we were able to provide enough time for co-design and reflections.</p>
                <p>There were
                    <strong className="bolded-words"> 10 co-design sessions </strong>
                    conducted from April to June of 2020, all of which were on Zoom. Below is the table from our CHI 2021 paper that
                    lists the design questions/project goals of each session, the design stage of the project conducted in the
                    session, and the co-design technique as well as digital tools utilized.
                </p>
                <img className="px-5 center-img img-fluid" src="img/kidsTeam/kidsTeamOnlineTable.png" alt="the cover for KidsTeam" />
                <p>We also conducted
                    <strong className="bolded-words"> 10 semi-structured half-hour interviews </strong>
                    with all of our child participants to further understand their environment as a part of KidsTeam online versus
                    in-person. This includes overall structure of the sessions, the co-design methods used, and the virtual tools
                    used. I served as a notetaker for these interviews while Kung Jin led them and asked follow-up questions when
                    prompted.
                </p>
                <p>To analyze the qualitative data collected, we employed an
                    <strong className="bolded-words"> inductive and grounded method </strong>
                    to further understand the emerging themes of moving to an online space. I served as one of the co-authors to
                    annotate, transcribe, and open-code the video recordings of the sessions as well as the interview notes. Our
                    themes for coding involved the co-design participants needs and experiences, the design goals of a session, and
                    the characteristics of design techniques. While coding, we focused on connecting these themes and the themes
                    from our literature review to what was
                    <strong className="bolded-words"> specific to the online space</strong>. Furthermore, I helped conduct the
                    <strong className="bolded-words"> literature review </strong>
                    on topics such as improvisation and participatory design, and assisted in writing early drafts of the paper
                </p>
                <p>Our key findings introduce a
                    <strong className="bolded-words"> conceptual model for synchronous co-design</strong>, which feature factors such as modification of the
                    co-design technique, people interacting with others as well as the technology, the logistics of the project, as
                    well as the settings of the researchers and participants (see below).
                </p>
                <img className="px-5 center-img img-fluid" src="img/kidsTeam/conceptualModel.png" alt="the cover for KidsTeam" />
            </div>

            
            <div className="collapsible" onClick={props.handleClick}>
                <span className="px-4 section-title">Master of Human-Computer Interaction + Design (MHCID) and KidsTeam</span>
            </div>
            <div className="px-5 content">
                <p>Led by Wendy Roldan, I was on a team of researchers who worked with the 2020-2021 MHCID cohort taking a
                    prototyping studio course to understand how to employ design practices to foster virtual connection. In this
                    project, MHCID students designed physical or digital products to meet this goal and received two rounds of
                    critiques from the children. Our goal was to understand how
                    <strong className="bolded-words"> novice user experience design students navigated </strong>
                    through planning remote co-design sessions, the strategies they came up with to effectively lead their sessions,
                    and the challenges they experienced in leading these sessions. We posed the following research questions:
                </p>
                <ul>
                    <li>RQ1: How do design students experience preparing for, executing, and reflecting on conducting remote usability sessions with end-users?</li>
                    <li>RQ2: How do students strategies differ from leading in-person design sessions?</li>
                    <li>RQ3: What are the advantages and disadvantages of conducting remote usability sessions during a project-based human computer interaction and design course?</li>
                </ul>
                <p>
                    To answer these research questions, we leverage rich descriptions from a range of qualitative sources that we
                    collected before the remote sessions, during the remote sessions, and after students conducted the co-design
                    sessions. Specifically, we video recorded and time stamped all
                    <strong className="bolded-words"> 8, 90-min remote co-design sessions </strong>
                    along with the breakout rooms within. Additionally, we conducted
                    <strong className="bolded-words"> 12 semi-structured, 60 minute interviews </strong>
                    with MHCID students after the course ended. I served as second interviewer for 2 of the interviews, and Wendy
                    let me lead 3 other interviews with the students. As a result of this process, I
                    <strong className="bolded-words"> learned </strong>
                    that probing and following up on participant answers is just as important as sticking to the interview protocol
                    because there may be new insights derived that researchers wouldn't get otherwise.
                </p>
                <p>
                    Additionally, we collected
                    <strong className="bolded-words"> 8 pre-reflection surveys </strong>
                    from each student team before they attended their sessions and sent students a video clip between their first
                    and second session with a
                    <strong className="bolded-words"> mid-quarter reflection survey </strong>. Data analysis involved finding overarching themes throughout the
                    sessions and the interviews, and we were able to organize the findings into
                    <strong className="bolded-words"> three higher level themes </strong>
                    related to the data about students preparing for their sessions, how the students led the sessions, and what the
                    students did after the sessions.
                </p>
                <p>
                    Our findings are being currently written in a paper that will be submitted to the
                    <strong className="bolded-words"> Design of Interactive Systems (DIS) 2022 conference</strong>, titled
                    <em> Designing at a Distance: Involving Remote Users in HCI/Design Education</em>.
                </p>
                
                <strong className="bolded-words"> takeaways: what I learned</strong>
                <p>
                    Prior to KidsTeam, I had no knowledge of the research process or even research in general. I had worked with
                    children prior to this experience and was interested in HCI, hence my interest in Professor Yip's work.
                    Throughout the two and a half years, I got to understand the process and ethics of user research and work on
                    various projects that resulted in me being the co-author of three academic papers as an undergraduate. It is
                    important to give attention to participants in the co-design process, as they are crucial stakeholders. I also
                    learned how to collect, process, and qualitatively analyze data, as well as conduct semi-structured interviews.
                    Furthermore, I was able to grasp the literature review and paper writing process. Overall, this experience
                    enabled me to pursue HCI education and UX research in the future and it set the foundation for my UX research
                    career.
                </p>
            </div>
            

           
            <div className="collapsible" onClick={props.handleClick}>
                <span className="px-4 section-title">publications</span>
            </div>
            <div className="px-5 content">
                <p>Simko, L., Chin, B., Na, S., <strong className="bolded-words">Saluja, H.K.</strong>, Zhu, T.Q., Hiniker, A., Yip, J.C., &amp; Cobb, C. (2021). Would You Rather: A focus group method for eliciting and discussing formative design insights with children. Proceedings of the 2021 IDC Interaction Design and Children. Association for Computing Machinery.<a href="https://dl.acm.org/doi/abs/10.1145/3459990.3460708">[link]</a></p>
                <br />
                <p>Lee, K.J., Roldan, W., Zhu, T.Q., <strong className="bolded-words">Saluja, H.K.</strong>, Na, S., Chin, B., Zeng, Y., Lee, J.H., &amp; Yip, J.C., (2021). The Show Must Go On: A conceptual model of conducting synchronous participatory design with children online. Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery. <a href="https://dl.acm.org/doi/abs/10.1145/3411764.3445715?casa_token=LRefEHOGNhUAAAAA:mX3-A8vvhWnXO8Sg7Ppz6Ff_ntmZkQl0olwcwJ4eK_Bzsk3VBmOJ_C7VjC9J-RID6fEIwMpuEfyhGw">[link]</a>
                <br />
                <strong>Received Best Paper Award (Top 1% of 2,800 papers)</strong></p>
            </div>
                
                
            

        </div>
    );
}
