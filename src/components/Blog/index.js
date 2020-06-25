import React, { Component } from 'react';
import Mumbai from '../../assets/location/mumbai.svg';
import Delhi from '../../assets/location/delhi.svg';
import Chennai from '../../assets/location/chennai.svg';

class Blog extends Component {
	render() {
		return(
			<div>
				<section className="section">
        <div className="container has-text-centered">
            <h2 className="title">All things real estat-y</h2>
            <p> 
                Buying a house is tricky, there's no denying it. A myriad of features lure, and to pick from them, <br />
                is a challenge as paramount as financing it. Read here, some of the best content we have, curated through our research.
            </p>

            <div className="columns is-centered" style={{padding: "2rem"}}>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-2by1">
                                <img src= {Mumbai} alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">Buy low, sell high</p>
                                    <p className="subtitle is-6"><a href="https://www.linkedin.com/in/dkp1903" target="_blank">@dkp1903</a></p>
                                </div>
                            </div>

                            <div className="content">
                                Start small, scale as you progress, is the motive for investing in housing. Childhood aspirations, 
                                and market fluctuations often lure is into investing large into seemingly 'prime' properties that are expected
                                to give huge returns. 

                                The Real estate market however, is prone to ravages, as has been seen in the case of the COVID pandemic. 
                                And thus, it is always good to hold your emotions at bay, cover your bets, and invest large only when
                                you are prepared to lose it.
                                <br />
                                <a href = "https://economictimes.indiatimes.com/wealth/real-estate/how-much-can-you-afford-to-buy-a-house-for/articleshow/63653919.cms?from=mdr" target = "_blank">
                                    <button className = "button is-primary" >Learn More
                                        </button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-2by1">
                                <img src={Delhi} alt="Placeholder"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">Location over amenities</p>
                                    <p className="subtitle is-6"><a href="https://www.linkedin.com/in/dkp1903" target="_blank">@dkp1903</a></p>
                                </div>
                            </div>

                            <div className="content">
                                While it is human tendency to be swayed by amenities provided, research shows that the 
                                amenities are often sugar-coats for a less-prime location, which can often stagnate prices, 
                                as well as cause logistic inconvenience. Hence, it is usually a good measure to prefer location
                                over amenities. <br/>

                                Urban lifestyle has translated luxury at par with necessity, and this applies largely in the real estate business.
                                Thus, location is one factor that shouldn't be compromised.
                                <br />
                                <a href = "https://www.confident-group.com/blog/importance-of-location-in-real-estate/#:~:text=Importance%20of%20location%20in%20real%20estate%20purchase%20always%20seems%20to,causes%20a%20rise%20in%20price." target = "_blank">
                                    <button className = "button is-primary" >Learn More
                                        </button>
                                </a>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-2by1">
                                <img src={Chennai} alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">Financing</p>
                                    <p className="subtitle is-6"><a href="https://www.linkedin.com/in/dkp1903" target="_blank">@dkp1903</a></p>
                                </div>
                            </div>

                            <div className="content">
                                Prefer buying a house on short term loans, and avoid making the entire payment in cash. As has been said earlier, 
                                the real estate market is balanced rather precariously on the market demand, and thus, there are chances of stagnation
                                or downfall. In such a case, should you have invested in cash, you might have to forfeit all of it. Loans, however,
                                have a chance of being written off, based on situation, by the banks.
                                <br />
                                <a href = "https://www.fool.com/millionacres/real-estate-financing/articles/5-tips-getting-loan-your-real-estate-investment/" target = "_blank">
                                    <button className = "button is-primary" >Learn More
                                        </button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </section>

			</div>
		)
	}
}

export default Blog;