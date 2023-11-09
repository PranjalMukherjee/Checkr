FROM openjdk:11

WORKDIR /micro-service

COPY target/*.jar app.jar

EXPOSE 9003

CMD [ "java","-jar","app.jar" ]