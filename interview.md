### REST

* Representational State Transfer - web services - a way of providing interoperability between computer systems
* used express to create routes to expose restful services.
* built a rest server in C
* used Spring to create routes
* when you expose your services, you are saying "here's what my services look like, they are now accessible"

### curl

* postman is a tool that makes curl pretty and easy to use
* curl is just making an http request


### Definitions
* Java Persistence API (JPA) is a Java specification for accessing, persisting, and managing data between Java objects / classes and a relational database

* The phrase "instantiating a class" means the same thing as "creating an object." When you create an object, you are creating an "instance" of a class, therefore "instantiating" a class

* Interface = It declares methods but doesn't implement them "this is what the end of the plug looks like. These are the methods. Anything that implements me has to have these methods" 

"...a bit like a class, except a Java interface can only contain method signatures and fields. An Java interface cannot contain an implementation of the methods, only the signature (name, parameters and exceptions) of the method. "

* Class = a type. 

* Instance v class "A class is a blueprint or prototype from which objects are created. An instance is a single and unique unit of a class" "instance is AT RUNTIME"

    `// Tells the application context to inject an instance of QuestService here
    @Autowired
    private QuestService questService;`
    
*   `// this will create a join, many tags that can go along w the tile
   @OneToMany
   private List<Tag> tags;`