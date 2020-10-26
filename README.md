### Getting Started

## get latest version of swagger-codegen
wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.22/swagger-codegen-cli-3.0.22.jar -O swagger-codegen-cli.jar

## you need more help? 
java -jar swagger-codegen-cli.jar --help

## generate a client from model.json
java -jar swagger-codegen-cli.jar generate -i ./../model.json -l php -o ./clients/php_api_client