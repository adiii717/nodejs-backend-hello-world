# Express-demo-nodejs-application 
![N|Solid](https://nodejs.org/static/images/logo.svg)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


Express Demo application with Docker and Terraform, Dot env generated at runtime from user-data in case of Ec2 deployment with Terraform.






### dotenv

```
DEM_INFO="Hello From Ec2"
HOSTED_ON="Hosted on Ec2"
```

### Run application on EC2

All you need to the following command to deploy application

```sh
$ cd nodejs-backend-hello-world
$ npm start
#or
$ pm2 start bin/www --name demo-app
```

### Run application on Docker

All you need to the following command to deploy application

```sh
$ cd nodejs-backend-hello-world
$ docker build -t nodejs-demo .
$ docker run -it --rm -p 3000:3000 nodejs-demo
```

# Deploy this application using Terraform

##### [Deploy Nodejs on Ec2 using Terraform](https://github.com/Adiii717/terraform-ec2-nodejs-deployment)

### Todos

 - Write test case
 - Add healthcheck for ECS

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)



