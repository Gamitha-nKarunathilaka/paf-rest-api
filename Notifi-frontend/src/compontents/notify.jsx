import axios from 'axios';
import {useEffect, useState } from "react";
function Notify()
{
 
<strong>//Logic
</strong>
  const [id, setId] = useState('');
  const [postId, setPostId] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setUsers] = useState([]);
 
 
useEffect(() => {
  (async () => await Load())();
  }, []);
  async function  Load()
  {
     const result = await axios.get("http://localhost:8085/api/v1/notification/getAll");
         
         setUsers(result.data);
         console.log(result.data);
  }
 
  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8085/api/v1/notification/save",
        {
        postId:postId,
        email: email,
        title:title,
          message: message

        });
          alert("Notification create Successfully");
          setId("");
          setPostId("");
          setEmail("");
          setTitle("");
          setMessage("");
          Load();
        }
    catch(err)
        {
          alert("Notification Create Failed");
        }
   }
 
   async function editNotification(notifications)
   {
    setPostId(notifications.postId);
    setEmail(notifications.email);
    setTitle(notifications.title);
    setMessage(notifications.message);
    setId(notifications.id);
   }
   async function DeleteNotification(id)
   {
        await axios.delete("http://localhost:8085/api/v1/notification/delete/" + id);
        alert("Notification deleted Successfully");
        Load();
   }
   async function update(event)
   {
    event.preventDefault();
   try
       {
        await axios.put("http://localhost:8085/api/v1/notification/edit/" + id ,
       {
 
        postId:postId,
        email:email,
        title:title,
        message: message,
         
      
       });
         alert("Notification Updated");
         setId("");
         setPostId("");
         setTitle("");
         setMessage("");
         Load();
       }
   catch(err)
       {
         alert("Notification Updateddd Failed");
       }
  }
 
 
 
<strong>//Design
</strong>
 
  return (
    <div>
       <h1>Notification Details</h1>
       <div class="container mt-4" >
          <form>
          <div class="form-group">
                <label>Post Id</label>
                <input type="text" class="form-control" id="topic"
                  value={postId}
                onChange={(event) =>
                  {
                    setPostId(event.target.value);      
                  }}
                />
                </div>
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" id="topic"
                  value={email}
                onChange={(event) =>
                  {
                    setEmail(event.target.value);      
                  }}
                />
            
              <div class="form-group">
                <label>Notification Title</label>
                <input  type="text" class="form-control" id="title"
                value={title}
                onChange={(event) =>
                  {
                    setTitle(event.target.value);      
                  }}
                />
              </div>
 
 
              <div class="form-group">
                <label>Notification Message</label>
                <input  type="text" class="form-control" id="message"
                 value={message}
                  onChange={(event) =>
                    {
                      setMessage(event.target.value);      
                    }}
                />
              </div>
 
              

              

              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Send</button>
 
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>  
            </form>
          </div>
                <br/>
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">PostId</th>
      <th scope="col">Email</th>
      <th scope="col">Title</th>
      <th scope="col">Message</th>
      <th scope="col">Option</th>
    </tr>



  </thead>
       {notifications.map(function fn(notification)
       {
            return(
            <tbody>
                <tr>
                <td>{notification.postId}</td>
                <td>{notification.email}</td>
                <td>{notification.title}</td>
                <td>{notification.message}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editNotification(notification)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteNotification(notification.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
  export default Notify;