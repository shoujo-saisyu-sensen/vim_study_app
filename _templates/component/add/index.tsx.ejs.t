---
to: <%= _path %>/<%= name %>.tsx
unless_exists: trues
---
import styles from './style.module.scss';

<% if (props) { %>
interface Props {
  test?: string;
}
<% } %>

export const <%= name %>: <%= componentType %> = () => {
  return (
    <div>
      <h1>Hello World</ h1>
    </ div>
  );
};