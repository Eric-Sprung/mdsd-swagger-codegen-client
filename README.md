# Getting Started

## get latest version of swagger-codegen
```bash
wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.22/swagger-codegen-cli-3.0.22.jar -O swagger-codegen-cli.jar
```
## you need more help? 
```bash
java -jar swagger-codegen-cli.jar --help
java -jar swagger-codegen-cli.jar generate --help
```
## generate a clients from model.json
### PHP
```bash
java -jar swagger-codegen-cli.jar generate -i ./model.json -l php -o ./clients/php_api_client
java -jar swagger-codegen-cli.jar generate --input-spec ./model.json --lang php --output ./clients/php_api_client
```

### JAVA
```bash
java -jar swagger-codegen-cli.jar generate -i ./model.json -l java -o ./clients/java_api_client
```
### JAVA Spring
```bash
java -jar swagger-codegen-cli.jar generate -i ./model.json -l spring -o ./clients/spring_api_client
```
## generate server stub from model.json
### NODEJS
```bash
java -jar swagger-codegen-cli.jar generate -i ./model.json -l nodejs-server -o ./servers/nodejs_api_server
```