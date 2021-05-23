# vue-java-integration
It is an Vue application with a Java backend, frontend in vue.js and a custom vue-cli configuration.  It is my attempt to learn how to combine a VueJS front-end with a Java backend

Let’s build the Vue side first.

## yarn build
This will result in the public directory being created in the src/main/resources/ directory, which will be served by our Spark Java application.

Next we have to build the Java backend itself. We will build an uber jar or fat jar, as others call them. This is basically a file with all your application dependencies bundled into one .jar and with the jar’s main-class configured in the MANIFEST file.

Run the following command: "yarn build" or "npm run build" for NPM

## mvn clean package
If this executes successfully, it will result in jar files in the target directory named something like spark-vue-0.1.0-SNAPSHOT.jar and spark-vue-0.1.0-SNAPSHOT-original.jar.

Our uber jar is the one without the -original suffix. Next run this in your command line to start the server:

### java --enable-preview -jar target/spark-vue-0.1.0-SNAPSHOT.jar 
NOTE: We use the --enable-preview because our code is compile with the Java Records feature

This should produce output similar to what’s shown below and indicates Spark is running our Java API code:

[2020-07-05 04:14:18] INFO - StaticResourceHandler configured with folder = /public
[2020-07-05 04:14:18] INFO - ========== API RUNNING =================
[2020-07-05 04:14:18] INFO - Logging initialized @1766ms to org.eclipse.jetty.util.log.Slf4jLog
[2020-07-05 04:14:18] INFO - == Spark has ignited ...
[2020-07-05 04:14:18] INFO - >> Listening on 0.0.0.0:4567
...
Congratulations, it’s running!! Open your browser and visit http://localhost:4567/


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##Run VUE build together with Maven build
As you can see, we had to first build our Vue app with yarn build and then our Java code with mvn package, while it’s just two commands it is easy to forget to build the front-end before the backend. We can solve this using the exec-maven-plugin which allows us to run arbitrary commands during a maven build.
Add the following plugin configuration to your pom.xml file.

Now all you have to do is run mvn clean package to build both the Vue and Java code together.
