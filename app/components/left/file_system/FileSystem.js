import React from 'react';
import TemplateSelect from './template_select/TemplateSelect';
import ExportFiles from './export_files/ExportFiles';
import ImportFiles from './import_files/ImportFiles';
import NewFiles from './new_files/NewFiles';
import SaveFiles from './save_files/SaveFiles';

export default (props) => {
  return (
    <div id="file-system">
      <h3>File System</h3>
      <TemplateSelect />
      <ExportFiles />
      <ImportFiles />
      <NewFiles />
      <SaveFiles />
    </div>
  );
}
