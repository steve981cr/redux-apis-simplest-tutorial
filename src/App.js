import React, { Component } from 'react';
import { connect } from 'react-redux';

// AppComponent.js
class App extends Component {

  componentDidMount() {
    console.log('3.this.props', this.props);
    this.props.getArticles();
  }

  render() {
    console.log("2.this.props.articles", this.props.articles);
    return (
      <div>
        <h1>Articles</h1>
        <ul>
          {this.props.articles.map((article) => (
            <div key={article.id}>
              <hr />
              <h4>{article.id}: {article.title}</h4>
              <p>{article.content}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

// actions.js
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
const receiveArticles = (data) => ({
  type: RECEIVE_ARTICLES,
  articles: data,
});

const getArticles = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/articles.json')
      .then(response => response.json())
      .then(data => {
        console.log("4.data", data);
        dispatch(receiveArticles(data));
      })
      .catch(error => { 
        throw(error); 
      });
  };
};


// App.js
const mapStateToProps = (state) => {
  console.log("1.mapStateToProps:state", state);
  return {
    articles: state.articles 
  };
};
const mapDispatchToProps = { getArticles };

export default connect(mapStateToProps, mapDispatchToProps)(App);