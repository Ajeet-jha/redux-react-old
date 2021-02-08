import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPost} from "../actions/postAction"
class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : "",
            body : ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label> <br/>
                        <input type ="text" name="title" onChange = {this.handleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Body</label> <br/>
                        <textarea name ="body"  onChange = {this.handleChange} value={this.state.body}/>
                    </div>
                    <div>
                        <br />
                        <button type = "submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.itme
})

export default connect(mapStateToProps,{createPost})(PostForm)