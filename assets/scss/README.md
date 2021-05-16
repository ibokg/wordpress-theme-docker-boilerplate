Project Structure
=============================
This project utilizes [*BEM*](https://en.bem.info/methodology/) and [*7-1 Architecture*](https://github.com/HugoGiraudel/sass-boilerplate) as described on [Sass Guidelines](http://sass-guidelin.es/).

## Prefixes
In order to different between various style rules we use prefixes. The prefixes rules used in this project are:
- *c-* prefix indicates a component(block, elem and etc). Components are located in ```/components``` directory. 
Example usage: ```c-button```

- *l-* prefix indicates a layout component(block, elem and etc). Layout components are located in ```/layout``` directory.
Example usage: ```l-header```

- *p-* prefix indicates a page specific style rule or component(block, elem and etc). Page specific styles are located in ```/pages``` directory. 
Example usage: ```p-index-hero```

- *h-* prefix indicates a helper style rule. Helpers are located in ```/base/_helpers.scss```. 
Example usage: ```h-clearfix```

- *t-* prefix indicates a typograpy style rule. Typography rules are located in ```/base/_typography.scss```/.
Example usage: ```t-heading```


### Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)
