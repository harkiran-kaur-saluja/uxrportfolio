
import 'animate.css';
export function NavBar(props) {

    return (
        <div className="nav">
            <nav>
                <div className="nav-sig">
                    <p className="signature"><img src="img/general/signaturepic.png" alt="Harkiran in signature style"></img></p>
                    <p className="name">kaur saluja</p>
                </div>
                <div className="links">
                    <ul>
                        <li><button className="btn btn-link navlink home" onClick={() => { props.handleClickHome() }}>Home</button></li>
                        <li><button className="btn btn-link navlink work" onClick={() => { props.handleClickWork() }}>Work</button></li>
                        <li><button className="btn btn-link navlink"><a href="https://drive.google.com/file/d/1MqqagyaZZHlzQO9kpCr4CSjnJSiatULL/view?usp=sharing">Resume</a></button></li>
                        <li><button className="btn btn-link navlink about" onClick={() => { props.handleClickAbout() }}>About</button></li>
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
                    <p>HCI + design researcher interested in the connection between technology and education.</p>
                    <p>Master of Human-Computer Interaction student at Carnegie Mellon University, graduating in August 2022.</p>
                    <p>Currently researching the intersection between algorithms, education, and participatory design.</p>
                    <br />
                    <button className="checkOut" onClick={() => { props.handleClick() }}>Check out my work</button>
                </div>
                <div className='col col-image'>
                    <Picture />
                </div>
            </div>
            <div className="container">
                <hr />
                <div className="row">
                    <div className="col colCheckout">
                        <p className="checkOut">Latest Work</p>
                    </div>
                    <div className="col colCheckout">
                        <button className="btn btn-outline-secondary" onClick={() => { props.handleClick() }} >See All Work</button>
                    </div>
                </div>
            </div>
            <br /><br /><br />
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
    console.log('po: ', props);
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

function ProjectOverviewLeft(props) {
    console.log('pol: ', props);
    // props should be an array of project objects
    // going to assume some information rn but can flesh it out later
    return (
        <div className="container animate__animated animate__zoomIn">
            <div className="row justify-content-center">
                <div className="col col-image">
                    <div className="image-stack">
                        <div className="image-stack__item image-stack__item--top_left">
                            <img src={props.project.Image1} className="height" alt="a banner for humaneOS" />
                        </div>
                        <div className="image-stack__item image-stack__item--bottom_left">
                            <img src={props.project.Image2} className="height" alt="a banner for humaneOS" />
                        </div>
                    </div>
                </div>
                <div className="col col-content">
                    <div className="fs-2">{'0' + props.project.ProjectNumber}</div>
                    <br />
                    <div className="h2">{props.project.ProjectName}</div>
                    <br />
                    <div className="h5">{'Role: ' + props.project.ProjectRole}</div>
                    <br />
                    <div className="lead">{props.project.ProjectOverview}</div>
                    <br />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => { props.handleClickIndv(props.project) }}>View Project</button>
                    <br />
                </div>
            </div>
        </div>
    );
}


function ProjectOverviewRight(props) {
    // props should be an array of project objects
    // going to assume some information rn but can flesh it out later
    console.log('por: ', props);
    return (
        <div className="container animate__animated animate__zoomIn" >
            <div className="row justify-content-center">
                <div className="col col-content">
                    <div className="fs-2">{'0' + props.project.ProjectNumber}</div>
                    <br />
                    <div className="h2">{props.project.ProjectName}</div>
                    <br />
                    <div className="h5">{'Role: ' + props.project.ProjectRole}</div>
                    <br />
                    <div className="lead">{props.project.ProjectOverview}</div>
                    <br />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => { props.handleClickIndv(props.project) }}>View Project</button>
                    <br />
                </div>
                <div className="col col-image">
                    <div className="image-stack">
                        <div className="image-stack__item image-stack__item--top_right">
                            <img src={props.project.Image1} className="height" alt="a banner for humaneOS" />
                        </div>
                        <div className="image-stack__item image-stack__item--bottom_right">
                            <img src={props.project.Image2} className="height" alt="a banner for humaneOS" />
                        </div>
                    </div>
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
                <img className="kerryPic animate__animated animate__pulse" src="./img/general/kerrypic.jpg" alt="Harkiran in a pink sweatshirt sitting in front of the Kerry Park view" />
                <br />
                <p>Hello there! I’m Harkiran (she/her, pronounced harr-KI-run). I grew up in Southern California and later moved to Seattle to pursue my passion for technology. In June of 2021, I graduated from the University of Washington with a <a href="https://ischool.uw.edu/programs/informatics%22%3E">Bachelor of Science in Informatics</a>: Human-Computer Interaction and a minor in Gender, Women, &amp; Sexuality Studies.</p>

                <p>Currently, I am pursuing my <a href="https://hcii.cmu.edu/academics/mhci%22%3E">Master of Human-Computer Interaction</a> at Carnegie Mellon University, where I conduct research as part of the <a href="https://www.thecoalalab.com/#people%22%3E">CoALA Lab</a> and overall dive deeper into HCI so that I can become the best practitioner I can be.</p>

                <p>In the future, my aim through research is to use co-design to improve children's education inside and outside of the classroom. Feel free to check out my publications <a href="https://scholar.google.com/citations?user=FyUvGMgAAAAJ&hl=en&oi=ao%22%3E">here</a>!
                </p>

                <p>Lately, I’ve been spending my free time watching Schitt’s Creek!</p>
                <br />
            </div>
            <div>
                <p className="contact"><strong>Want to chat? Feel free to connect with me on <a href="https://www.linkedin.com/in/harkiran-kaur-saluja/%22%3E">LinkedIn</a> or email me at <a href="mailto: hsaluja@andrew.cmu.edu">hsaluja@andrew.cmu.edu</a>.</strong></p>
            </div>
        </div>
    );
}




