FROM maven:3.9.5-eclipse-temurin-17

WORKDIR /usr/src/app

COPY . .

RUN mvn clean install -P mysql -Dmaven.test.skip=true

WORKDIR /usr/src/app/target

EXPOSE 8080

CMD ["java", "-jar", "MyCRM.jar"]