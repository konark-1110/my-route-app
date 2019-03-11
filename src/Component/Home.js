import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    state ={
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            //console.log('Response from API',res);
            this.setState({
                posts: res.data.slice(0, 20)
            })
            //console.log('Our home state',this.state.posts);
        })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>

                        <div className='card-content'>
                            <Link to = {'/' + post.id} >
                                <span className='card-title'>{post.title}</span>
                            </Link>
                            <img className="image1" src="https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2017/07/the-punisher-logo.jpg" alt="oops! not found!" />
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No posts yet </p>
        )

        return(
            <div className='center'>
                <h4 className='container'>Homepage</h4>
                { postList }
            </div>
        )
    }
}

export default Home;


// const posts =this.state.posts;
