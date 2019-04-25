export const Posts = (props) => {
  if (!props.list) return null;

  const items = props.list
    .map(item => <li key={item.id}>{ item[props.field] }</li>);

  return props.numered ? <ol>{ items }</ol> : <ul>{ items }</ul>;
};
