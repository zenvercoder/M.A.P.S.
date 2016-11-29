### Some Code

[Getting Started with Material Design Lite](https://getmdl.io/started/index.html)
* Don't forget to add the scripts and links to index

[Components](https://getmdl.io/components/index.html)
* Layout
* Navigation
* Grid
* Footer
* Cards

`npm init -y`

[oauthwalkthru](https://github.com/tylerchase/oauthwalkthru) by [Tyler Chase](https://github.com/tylerchase)


### Webpack

* not runtime, only build time. It's a tool

* `npm install -D webpack` (capital D means --save-dev)

* [Webpack getting started](https://webpack.github.io/docs/tutorials/getting-started/)

* webpack makes it so everything can be required without having to manually do it (there is one script tag in html)
* webpack will look in node_modules for dependencies
*  `npm i -S angular angular-material angular-animate angular-aria angular-messages angular-ui-router`
* [angular-ui-router](https://github.com/angular-ui/ui-router/blob/master/package.json)
* `npm install webpack-dev-server -D`
* `"start": "webpack-dev-server --progress --colors"`
* `npm start`
* It's compiling JavaScript and static stuff into bundle.js
* Webpack will let you know before your page even loads if it's missing something you're trying to load (for example your css and it's not where you thought it was. You'll get an error when you try to build

### Next Steps

* add `ui-sref="addquest"` to index.html
* add route, controller, html, require in index.js
* fix image routes

### Setting up the Back End

* [https://spring.io/guides/gs/spring-boot/](https://spring.io/guides/gs/spring-boot/)
* [Building Java project with Maven](https://spring.io/guides/gs/maven/)
* Maven Projects are defined in the pom.xml which gives the project’s name, version, and dependencies that it has on external libraries.

*     // this will create a foreign key column author_id
      // in the table called Tile
      `@OneToOne
      private User author;`
  
      // this will create a join
      `@OneToMany
      private List<Tag> tags;`
      
* getters and setters make it so you can access private properties of a class from outside of the class

* repositories = how you get your CRUD functions

* Create = repository.save(entityYouAreSaving)
* Read = repository.findAll (this is to get all)
* Update = repository.merge(entity, entityId)
* Delete = repository.delete(either entity or entityId, one of those)


* [Java Database Tutorial](http://docs.oracle.com/javaee/6/tutorial/doc/bnbqa.html)
* Typically, an entity represents a table
* each entity instance corresponds to a row in that table 


### Temples/Resources

* [Hero Dashboard](https://getmdl.io/templates/index.html)
* [Force-Directed Graph](http://bl.ocks.org/mbostock/4062045)
