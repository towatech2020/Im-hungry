FROM adoptopenjdk/openjdk11:alpine

WORKDIR /usr/src/app

COPY target/imh-0.0.1-SNAPSHOT.jar ./

EXPOSE 3002

CMD ["java", "-jar", "imh-0.0.1-SNAPSHOT.jar"]
