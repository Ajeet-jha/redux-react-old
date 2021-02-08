import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from "../actions/postAction"
class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            console.log("nextProps.newPost :: ", nextProps.newPost);
            this.props.posts && this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        // console.log(this.props)
        return (
            <>
                {this.props.posts && this.props.posts.map(post =>{
                    return (
                        <div key = {post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.itmes,
    newPost: state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Posts)