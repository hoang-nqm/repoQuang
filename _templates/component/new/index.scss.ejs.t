---
to: src/<%= h.changeCase.param(level) %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.style.scss
sh: prettier --write src/<%= h.changeCase.param(level) %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.style.scss
---
.<%= h.changeCase.param(name) %> {
  color: black;
  background-color: white;
}
