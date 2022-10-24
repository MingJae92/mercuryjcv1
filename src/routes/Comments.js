import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import "./Comments.css"

const Comments = () => {
  // const [userName, setUserName]=useState("")
  // const [comments, setComments]=useState("")
  // const [newComments, setNewComments]=useState("")

  //  const updateInput = (e)=>{
  //  const [name, value] = useState({
  //   name:name.e.target,
  //   value:value.e.target
  //  })
   
  //  }

  // const postComment = (e)=>{
  //   e.preventDefault();
  //   const {userName, newComments} = useState("")
  //   if(userName.trim() || newComments.trim()==="") return;
  //   const data ={
  //     name:userName,
  //     text: newComments,
  //     votes: 0
  //   };
    
  //   useEffect(()=>{
  //     axios.post("/localhost/5000/comment", data).then(res.setNewComments(res.data))
  //   },[])

  
  return (
    <div>
      <Grid >
        <Card style={{ maxWidth: 430, padding: "0", margin: "0 auto" }}>
          <CardContent>
            <Typography  gutterBottom variant="h5">
            <p>Feel free to make some comments!</p>  
          </Typography> 
            
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter first name" name="firstname" variant="outlined" style={{padding:"0.5em"}} fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter last name" name="lastname" variant="outlined" style={{padding:"0.5em"}} fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="message" multiline rows={4} placeholder="Type your message here" variant="outlined" style={{padding:"0.5em"}} fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button style={{height: "5vh"}}  variant="contained" color="primary" fullWidth>Submit</Button>
                  </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Comments
