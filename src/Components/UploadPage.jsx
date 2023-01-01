import React from 'react'
import UploadBox from './UploadBox'
import '../index.css'
import { Button, ConfigProvider,Row} from 'antd';


function UploadPage() {
  return (
    <div className='upload-page'>
      
        <h1>Resume Parzer</h1>
        
        <div className='container' >
            <UploadBox/>
        </div>
        <div className='btn-container'>
          
            
            
            
          <ConfigProvider theme={{
      token: {
        colorPrimary: '#E63946',
        
      },
    }}>
      <Button type='primary'style={{margin:'20px'}}>Generate Profiles</Button>
    </ConfigProvider>
    
    
         
          
        </div>
        
    </div>
  )
}

export default UploadPage