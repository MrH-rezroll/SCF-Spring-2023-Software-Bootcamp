function About(props){
    return(
        <div id="about-content" className="page-content">
            <h2>What's all this {props.name}?</h2>
            <p>About {props.hobby} page.</p>
            <button onClick={props.sayHello} />
        </div>
    );
}

export default About;