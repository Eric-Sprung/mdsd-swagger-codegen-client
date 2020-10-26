### Getting Started
## clone this Repo
git clone https://github.com/swagger-api/swagger-codegen

## install Maven
sudo apt install maven

## build the project
mvn clean package

## generate a client from model.json
java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate \
   -i ./../model.json \
   -l php \
   -o ./clients/php_api_client