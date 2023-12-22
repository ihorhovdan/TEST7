import { Col, Button } from 'react-bootstrap'

const SingleComment = (props) => {


    const deleteComment = async (asin) => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" + asin,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNzg5YmZlMDMxZTAwMTliYTFjNzkiLCJpYXQiOjE3MDMyNTgwMzksImV4cCI6MTcwNDQ2NzYzOX0.GOm0hD-bhSrnait6fUhwPkgCXNFc8SOqu9Ng4Sei1tU',
                    },
                }
            );
            if (response.ok) {
                alert("Commento eliminato");
            } else {
                alert("Errore nella cancellazione");
            }
        } catch (err) {
            alert("Errore");
        }
    };


    return (
        <Col className="d-flex justify-content-between ">
            <p className='text-white'>Recensione: {props.commento.comment}</p>
            <Button className="bg-delete border-0" onClick={() => deleteComment(props.commento._id)}>
            🗑
            </Button>
        </Col>

    )
}

export default SingleComment
