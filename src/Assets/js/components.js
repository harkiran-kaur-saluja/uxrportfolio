
import 'animate.css';
export function NavBar(props) {

    return (
        <div className="nav">
            <nav id="examples">
                <div className="nav-sig">
                    <p className="signature"><img src="img/general/signaturepic.png" alt="Harkiran in signature style"></img></p>
                    <h6 className="name">kaur saluja</h6>
                </div>
                <div className="links">
                    <ul className='example'>
                        <li><button className="fs-6 navlink home active hover1 hover1-1" onClick={() => { props.handleClickHome() }}>Home</button></li>
                        <li><button className="fs-6 navlink work hover2 hover2-1" onClick={() => { props.handleClickWork() }}>Work</button></li>
                        <li><button className="fs-6 navlink resume hover3 hover3-1" onClick={() => { props.handleClickResume() }}>Resume</button></li>
                        <li><button className="fs-6 navlink about hover4 hover4-1"d onClick={() => { props.handleClickAbout() }}>About</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export function HomeBody(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="intro col animate__animated animate__backInUp col-content">
                    <h2>Hi! I'm <span className="firstName">harkiran</span></h2>
                    <br/>
                    <h5 className="quick-intro"><strong className="bolded-words">User experience researcher</strong> eager to learn and grow.</h5>
                    <h5 className="quick-intro">Master's student at Carnegie Mellon University.</h5>
                    <h5 className="quick-intro">Pun enthusiast.</h5>
                    <br />
                    <button className="btn btn-outline-secondary button" onClick={() => { props.handleClick() }}><strong>Check out my work</strong></button>
                </div>
                <div className='col col-image'>
                    <Picture />
                </div>
            </div>
            <br/><br/><br/>
               
            <div className="container">
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className=" checkOut">Latest Work</h4>
                    </div>
                    <div className="col colCheckout">
                        {/*<button className="button" onClick={() => { props.handleClick() }} >SEE ALL WORK< /button> */}
                    </div>
                </div>
            </div>
         
            <br />
            <ProjectsView data={props.data} handleClickIndv={props.handleClickIndv} />
                
        </div>

    );
}

export function Picture() {
    return (
        <div>
            <div className="image-stack">
                <div className="image-stack__item image-stack__item--top">
                    <img src="img/general/seniorpic.jpg" className="seniorPic" alt="Harkiran sitting on a rock wearing a striped shirt and dark blue jeans" />
                </div>
                <div className="image-stack__item--bottom">
                    <div className="rectangle"></div>
                </div>
            </div>
        </div>
    );
}

export function ProjectsView(props) {
    //props is an object array
    return props.data.map((project) => {
        if (project.ProjectNumber % 2 === 1) {
            return (
                <div key={project.To}>
                    <ProjectOverviewLeft project={project} handleClickIndv={props.handleClickIndv} />
                    <br /><br />
                </div>);
        }
        else {
            return (
                <div key={project.To}>
                    <ProjectOverviewRight project={project} handleClickIndv={props.handleClickIndv} />
                    <br /><br />
                </div>);
        }

    });
}

// - UCRE project: remote contextual inquiry, generative think-aloud, "speed dating"
// - Balance: focus groups, literature review, semi-structured interviews, usability testing
// - KidsTeam: participatory design, semi-structured interviews, qualitative data analysis 
// - HumaneOS: persona creation, wireframing, prototyping
// //comment to test 
function ProjectOverviewLeft(props) {
    // props should be an array of project objects
    // going to assume some information rn but can flesh it out later
    return (
        <div className="container animate__animated animate__zoomIn">
            <div className="row justify-content-center">
                <div className="col col-image">
                    <img src={props.project.Image1} className="height" alt="a banner for humaneOS" />
                    {/* <div className="image-stack">
                        <div className="image-stack__item image-stack__item--top_left">
                            <img src={props.project.Image1} className="height" alt="a banner for humaneOS" />
                        </div>
                        <div className="image-stack__item image-stack__item--bottom_left">
                            <img src={props.project.Image2} className="height" alt="a banner for humaneOS" />
                        </div>
                    </div> */}
                </div>
                <div className="col col-content">
                    <div className="fs-2 num">{'0' + props.project.ProjectNumber}</div>
                    <br />
                    <div className="h2">{props.project.ProjectName}</div>
                    <br />
                    <div className="h5">{'Role: ' + props.project.ProjectRole}</div>
                    <br />
                    <div className="lead">{props.project.ProjectOverview}</div>
                    <br />
                    <div> {makeTags(props.project.Tags)}</div>
                    <br/>
                    <button type="button" className=" btn btn-outline-secondary button" onClick={() => { props.handleClickIndv(props.project) }}>View Project</button>
                    <br />
                </div>
            </div>
        </div>
    );
}


function ProjectOverviewRight(props) {
    // props should be an array of project objects
    // going to assume some information rn but can flesh it out later
    return (
        <div className="container animate__animated animate__zoomIn" >
            <div className="row justify-content-center">
                <div className="col col-content">
                    <div className="fs-2 num">{'0' + props.project.ProjectNumber}</div>
                    <br />
                    <div className="h2">{props.project.ProjectName}</div>
                    <br />
                    <div className="h5">{'Role: ' + props.project.ProjectRole}</div>
                    <br />
                    <div className="lead">{props.project.ProjectOverview}</div>
                    <br />
                    <div> {makeTags(props.project.Tags)}</div>
                    <br/>
                    <button type="button" className=" btn btn-outline-secondary button" onClick={() => { props.handleClickIndv(props.project) }}>View Project</button>
                    <br />
                </div>
                <div className="col col-image">
                    <img src={props.project.Image1} className="height" alt="a banner for humaneOS" />
                    {/* <div className="image-stack">
                        <div className="image-stack__item image-stack__item--top_right">
                            <img src={props.project.Image1} className="height" alt="a banner for humaneOS" />
                        </div>
                        <div className="image-stack__item image-stack__item--bottom_right">
                            <img src={props.project.Image2} className="height" alt="a banner for humaneOS" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export function About(props) {
    return (
        <div>
            <div className="aboutText">
                <h2>about <span className="me">me</span></h2>
                <img className="kerryPic animate__animated animate__pulse" src="./img/general/pophealthpic.jpeg" alt="Harkiran in a yellow and blue sweatshirt standing in front of a view of the Seattle Skyline" />
                <br />
                <p>Hello there! I’m Harkiran (she/her, pronounced harr-KI-run). I grew up in Southern California and later moved to Seattle to pursue my passion for technology. In June of 2021, I graduated from the University of Washington with a <a href="https://ischool.uw.edu/programs/informatics%22%3E">Bachelor of Science in Informatics</a>: Human-Computer Interaction and a minor in Gender, Women, &amp; Sexuality Studies.</p>

                <p>Currently, I am pursuing my <a href="https://hcii.cmu.edu/academics/mhci%22%3E">Master of Human-Computer Interaction</a> at Carnegie Mellon University, where I conduct research as part of the Social AI Group and overall dive deeper into HCI so that I can become the best practitioner I can be.</p>

                <p>In the future, my aim through research is to use co-design to improve children's education inside and outside of the classroom. Feel free to check out my publications <a href="https://scholar.google.com/citations?user=FyUvGMgAAAAJ&hl=en&oi=ao%22%3E">here</a>!
                </p>

                <p>Outside of my work, I love to watch sports, play word games, and make puns!</p>
                <br />
            </div>
            <div>
                <p className="contact"><strong>I'm always looking to learn from you! If you want to chat, feel free to connect with me on <a href="https://www.linkedin.com/in/harkiran-kaur-saluja/%22%3E">LinkedIn</a> or email me at <a href="mailto: hsaluja@andrew.cmu.edu">hsaluja@andrew.cmu.edu</a>.</strong></p>
            </div>
        </div>
    );
}

export function Footer(props) {
    return (
        <div>
            <footer id="sticky-footer" class="flex-shrink-0 py-3 text-white">
            <div class="container">
                <div className="col">
                    <p>
                        <img src="img/general/signatureWhite.png" alt="Harkiran in white signature style"></img> &emsp;
                        <div id="icons">
                            <a href="https://www.linkedin.com/in/harkiran-kaur-saluja/" class="fa fa-linkedin"> </a> &nbsp;&nbsp;
                            <a href="https://medium.com/@harkiran.kaur" class="fa fa-medium"> </a>
                        </div>
                    </p>

                    <p className="footer_email">I'm always looking to learn from you! <br/> Feel free to reach out at <a href="mailto: harkiran.saluja@gmail.com" className="footer_email">harkiran.saluja@gmail.com</a>.</p>
                </div>
                <small>Copyright 2022 &nbsp; &copy; &nbsp; Harkiran Kaur Saluja</small>

            </div>
            </footer>
        </div>
    );
}

function makeTags(taglist) {
    let tags = taglist.split(",")
    return tags.map((tag) => {
        return (<span><button className='tag my-1' disabled>{tag}</button><span>&nbsp;&nbsp;&nbsp;</span></span>);
    });
}