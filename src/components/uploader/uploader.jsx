import { Button, Card, Grid, Typography } from '@mui/material';
import React from 'react'
import { useDropzone } from 'react-dropzone';
import "./uploader.css";

function Uploader(props){
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
        <>
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh', marginTop:'100px' }}
      >
      <Grid item xs={3}>
      <Card sx={{
         display: 'column',maxWidth: 500, minWidth:300, padding:5, 
         boxShadow: '0px 0px 20px #fff',
         overflow: 'visible',
         borderRadius: '1.5rem',
         }} className="card">
      <section className="inputBox">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} className=""/>
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <h3 className="filename">{files}</h3>
      </section>
      <Grid container justify="center">
      <Button className="btn" variant="outlined" sx={{
        marginBottom:0,
        justifyContent:'center',
        alignItems:'center',
      }}>UPLOAD</Button>
      </Grid>
      </Card>
      </Grid>
      </Grid>
      </>
      
 

  );
}

export default Uploader