import AddComment from "../AddComment"
import { CommentContentStyled,CommentList } from "./CommentContent.styled"
import CommentCard from "../CommentCard"
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import Image from "../../../../components/Image"
import emptyImage from "../../../../image/empty.png"


export const CommentContent = ({postId,comments,setCommentState}:any) => {


    return(
        <CommentContentStyled>
            <AddComment postId={postId} setCommentState={setCommentState}/>
            <CommentList>
                {comments?.length ?
            <TransitionGroup>
                {comments?.reverse().map((item: any) => {
                    return <Collapse key={`comment-id-${item.id}`}>
                            <CommentCard {...item} />
                        </Collapse>
                })}
                </TransitionGroup>
                : <Image src={emptyImage} width="350" />
            }
            </CommentList>
        </CommentContentStyled>
    )
}