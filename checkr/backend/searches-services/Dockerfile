FROM openjdk:11

WORKDIR /micro-service

COPY target/*.jar app.jar

EXPOSE 9002

CMD [ "java","-jar","app.jar" ]