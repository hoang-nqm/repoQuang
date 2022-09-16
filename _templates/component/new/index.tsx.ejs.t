---
to: src/<%= h.changeCase.param(level) %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.component.jsx
sh: prettier --write src/<%= h.changeCase.param(level) %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.component.jsx
---
import React from 'react';
import './<%= h.changeCase.param(name) %>.style.scss';

const <%= h.changeCase.pascal(name) %> = (props) => (
  <div className='<%= h.changeCase.param(name) %>'>
    <h1><%= h.changeCase.param(name) %></h1>
  </div>
);

export default <%= h.changeCase.pascal(name) %>