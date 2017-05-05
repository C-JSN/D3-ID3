import React from 'react';
import FileSystem from './file_system/FileSystem';
import DataManagement from './data_management/DataManagement';

export default (props) => {
  return (
    <div id="left-panel">
      <FileSystem />
      <DataManagement />
    </div>
  );
}
