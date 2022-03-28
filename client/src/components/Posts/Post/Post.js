import useStyles from "./styles"
import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import {ThumbUpAltIcon} from '@material-ui/icons/ThumbUpAlt'
import {DeleteIcon} from '@material-ui/icons/Delete';
import {MoreHorizonIcon} from '@material-ui/icons/MoreHoriz'
import {moment} from 'moment'
import {useDispatch} from 'react-redux'
import {deletePost} from "../../../actions/posts"

function Post({post}) {
    const classes = useStyles();
    const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}>
        <div className={classes.overlay}>
          <Typography variant="h6"> {post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay}>
          <Button style={{color:'white'}} size="small" onClick={() => {}}>
            <MoreHorizonIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>

        <Typography className={classes.title} variant="h5" gutterBottom>
            
              {post.title}
            </Typography>

          <CardContent>
            <Typography  variant="body2" color="textSecondary" component="p" gutterBottom>
              {post.message}
            </Typography>
          </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon size="small" />
            Like {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
            <DeleteIcon fontSize="small" />
            Delete
            </Button> 
        </CardActions>
      </CardMedia>
    </Card>
  )
}

export default Post