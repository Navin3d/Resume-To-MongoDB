import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, ConfigProvider, Row, Col } from 'antd';

function UploadBox() {
  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:3001/pdf/single/v2',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        console.log(info)
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <Row>
      <Col span={18} offset={3}>
        <div className='uploadbox'>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#F1FAEE',
                colorTextBase: '#F1FAEE',
                sizeUnit: '25',
              },
            }}
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </Dragger>
          </ConfigProvider>

        </div>
      </Col>
    </Row>
  )
}

export default UploadBox