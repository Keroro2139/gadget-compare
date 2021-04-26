https://medium.com/odds-team/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-mysql-server-%E0%B9%81%E0%B8%A5%E0%B8%B0-phpmyadmin-%E0%B8%9A%E0%B8%99-docker-step-by-step-4a86c48f29da
#### mysql
```
docker pull mysql
docker pull phpmyadmin/phpmyadmin
docker run --name=smart_home -e MYSQL_ROOT_PASSWORD=admin -e MYSQL_DATABASE=smart_home -p 3307:3306 -d mysql
docker exec -it 625ca8716825 bash
mysql -u root -p
show databases;
quit;
```

#### phpmyadmin
```
docker run --name smarthome_myadmin -d --link smart_home:db -p 8081:80 phpmyadmin/phpmyadmin
```
