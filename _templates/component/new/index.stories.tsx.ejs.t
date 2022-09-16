---
to: src/<%= h.changeCase.param(level) %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.stories.jsx
sh: prettier --write src/<%= h.changeCase.param(level) %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.stories.jsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.param(name) %>.component.jsx';

storiesOf('<%= h.changeCase.param(level) %>/<%= h.changeCase.pascal(name) %>', module).add('test', () => (
  <<%= h.changeCase.pascal(name) %>/>
));
