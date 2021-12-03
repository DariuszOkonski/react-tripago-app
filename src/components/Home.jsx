import '../assets/css/Home.css';

export const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <h1 className="home__header container">Welcome to Tripago App</h1>
                <p className="home_paragraph container">
                    <div>
                        <quotes className="home_quotes">Never let your memories be greater than your dreams.</quotes>
                        <span className="home_author">- Douglas Ivester</span>
                    </div>
                </p>                
            </div>
        </div>
    )
}
