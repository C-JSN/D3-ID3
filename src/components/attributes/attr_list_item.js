import React from 'react';

const AttrListItem = ({info, updateValue}) => {
  return (
      <div>
        {info[0].source}
        <br/>
        {info[0].method + '(' + info[0].name}<input type={info[0].type} value={info[0].value} onChange={(e) => updateValue(info[1], e.target.value)}></input>{')'}
      </div>
  );
};

export default AttrListItem;