import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import GetNewQuote from './GetNewQuote';
import ShareQuote from './ShareQuote';


class QuotesGenerator extends Component {


    state = {
        quotes: [],
        authors: [],
        quote: '',
        author: ''
    }

    getQuote = () => {
        const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        axios.get(URL)
            .then(res => {

                const data = res.data.quotes;
                console.log(data);
                data.map(data => {
                    let q = this.state.quotes.concat(data.quote);
                    let a = this.state.authors.concat(data.author);
                    this.setState({ quotes: q, authors: a });

                });
                let randomNumber = Math.floor(Math.random() * this.state.quotes.length);
                let randomQuote = this.state.quotes[randomNumber];
                let quoteAuthor = this.state.authors[randomNumber];
                this.setState({ quote: randomQuote, author: quoteAuthor });
            });
    }

    componentDidMount () {
        this.getQuote();
    }

    getNewQuote = () => {
        this.getQuote();

    }


    render() {
        const { quote, author } = this.state;
        return (
            <div className='container'>
                <h1>Your daily dose of positivity    ㋛</h1>
                <div id="quote-box">
                    <div id="text">
                        <h3>{quote}</h3>
                    </div> 
                    <div id="author">
                        <h4>～ {author}</h4>
                    </div>
                    <div className='icons-btn'>
                        <GetNewQuote onClick={this.getNewQuote} />
                        <ShareQuote quote={quote} author={author} />

                    </div>
                    
                    
                </div>

            </div>



        )
    }
}

export default QuotesGenerator;