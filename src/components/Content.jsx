import React from 'react';

const items = [1,2,3,4,5]
  .map(nr => ({
    uuid: `${nr}`,
    fields: {
      title: `blog${nr}`
    }
  }))

export default function Content() {
  return (
    <div>
      {items.map(item => (
        <OverviewItem key={item.uuid} item={item} />
      ))}
    </div>
  );
}


function OverviewItem({ item }) {
  return (
    <div>
      {item.fields.title}
    </div>
  )
}
