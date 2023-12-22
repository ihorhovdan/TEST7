import React from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'


class CommentArea extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        isError: false,
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' +
                this.props.id,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNzg5YmZlMDMxZTAwMTliYTFjNzkiLCJpYXQiOjE3MDMyNTgwMzksImV4cCI6MTcwNDQ2NzYzOX0.GOm0hD-bhSrnait6fUhwPkgCXNFc8SOqu9Ng4Sei1tU",
                    },
                }
            )
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false, isError: false })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }

    render() {
        console.log(this.state.comments)
        return (
            <div>
                <CommentList commenti={this.state.comments} />
                <AddComment asin={this.props.id} /> 
            </div>
        )
    }
}

export default CommentArea