#
# Build stage
#
FROM eclipse-temurin:17

WORKDIR /app

COPY target/chatgptapi-0.0.1-SNAPSHOT.jar /app/chatgptapi-restful-webservices.jar

ENTRYPOINT ["java", "-jar", "chatgptapi-restful-webservices.jar"]