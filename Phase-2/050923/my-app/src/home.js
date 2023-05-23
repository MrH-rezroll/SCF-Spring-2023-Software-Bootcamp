
function Home(props){
    return(
        <div id="home-content" className="page-content">
            <h2>Welcome, {props.name}</h2>
            <p>This page is about {props.hobby}.</p>
            <button onClick={props.sayHello} />
        </div>
    );
}

export default Home;