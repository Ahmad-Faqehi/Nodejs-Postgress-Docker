# Deploy NodeJS and Postgres with Docker Compose

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]
[![Twitter][github-shield]][github-url]


<!-- PROJECT LOGO -->


  <h3 align="center"> Deploying web application with API using nodejs and JavaScript as frontend with Postgres database </h3>


![docker compose](screenshot/cover.jpg)
  
# Steps
### 1. Clone the repo

After install Docker and Docker-Compose on your machine
Clone the `Nodejs-Postgress-Docker` locally. In a terminal, run:

```shell script
git clone https://github.com/Ahmad-Faqehi/Nodejs-Postgress-Docker.git
cd Nodejs-Postgress-Docker/
```
Will find three directory's :
<br/> 
* First directory is for api that has nodejs code to connecting to database and return some json data.
<br/>
* Second directory web is for frontend to show will accept the api url from backend and show the data in clear table. 
<br/>
 * Third directory sql_scripts is for `sql` file, to auto initialization on postgresSQL.

### 2. Build Docker Compose

```shell
docker-compose up -d --build
docker ps
```
<p>Will find three of containers running. You can access the application from browser via this url:</p>

```shell script
http://localhost:3000
```

### 3. Remove all containers
<p> You can remove all the containers by one command </p>


```shell
docker-compose down
```



<!-- CONTACT -->
## Contact Me

Ahmad Faqehi - [iAhmad.info](https://iAhmad.info) - alfaqehi775@hotmail.com

Project Link: [https://github.com/Ahmad-Faqehi/Nodejs-Postgress-Docker](https://github.com/Ahmad-Faqehi/Nodejs-Postgress-Docker)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ahmad-faqehi
[twitter-shield]: https://img.shields.io/badge/-twitter-black.svg?style=for-the-badge&logo=twitter&colorB=555
[twitter-url]: https://twitter.com/A_F775
[github-shield]: https://img.shields.io/badge/-github-black.svg?style=for-the-badge&logo=github&colorB=555
[github-url]: https://github.com/Ahmad-Faqehi
