import React from 'react';

const AttrListItem = ({info, updateValue}) => {
  return (
      <div>
        {info.methodObject}
        <br/>
        {info.d3MethodName + '(' + info.name}<input type={info.type} value={info.value} onChange={(e) => updateValue(info.id, e.target.value)}></input>{')'}
      </div>
  );
};

export default AttrListItem;