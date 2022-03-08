import React from 'react';
import './landing.css';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';
import Uploader from '../uploader/uploader';
import { Button, Card, Typography } from '@mui/material';


// import { useDropzone } from 'react-dropzone'
// import DropUploader from '../uploader/uploader.jsx';
// import { DropzoneComponent } from 'react-dropzone-component';
const Landing = () => {
  return (
    <div>
      <div className="header">
      <h1 className="heading-text">Solar Burst Visualiser</h1>
      </div>
      <div className="image">
      <img src={'./public/astrologo_black.png'} alt='logo'/>
      </div>

      <Uploader/>
      {/* <DropzoneComponent/> */}
    </div>
  )
}

export default Landing
