import React from 'react';
import Twitter from '../Images/twitter.png';


const ShareQuote = ({ quote, author }) => {
    return (
        <React.Fragment>
            <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="blank" id='tweet-quote'> <i class="fab fa-twitter icon"></i></a>
            {/* <a href={`tumblr.com/share/text=${quote} ${author}`} id='share-quote'> <i className="fab fa-tumblr"></i> </a> */}
        </React.Fragment>
    )
}

export default ShareQuote;