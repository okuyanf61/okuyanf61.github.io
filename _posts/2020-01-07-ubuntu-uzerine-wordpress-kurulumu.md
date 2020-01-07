---
layout: post
title: "Ubuntu Üzerine WordPress nasıl kurulur?"
date: 2020-01-07 18:00:00
image: '/assets/img/blob-image.png'
description: 'Ubuntu 18.04 LAMP'
tags:
- linux
- ubuntu
- turkce
categories:
- turkce
twitter_text: 'Ubuntu 18.04 Üzerine WordPress nasıl kurulur?'
---

WordPress, internetteki en popüler CMS'dir (içerik yönetim sistemi). Bu yazıda Ubuntu 18.04 sunucusunda bir LAMP (Linux, Apache, MySQL ve PHP) üzerine WordPress kuracağız.
LAMP yüklemek için bir önceki yazımı inceleyebilirsiniz. [LAMP kurulumu](https://www.mehmetfatih.com/ubuntu-uzerinde-lamp-kurulumu/)

### Adım 1 - WordPress için MySQL Veritabanı ve Kullanıcı Oluşturma

Öncelikle sunucumuza ssh ile bağlanıp giriş yapıyoruz. 

<img src="/assets/img/blog/lamp01.png" alt="1"/>

Ardından "MySQL"'e giriş yapıyoruz.

```shell
$ sudo mysql -u root -p
```

Giriş yaptıktan sonra veritabanımızı oluşturuyoruz. Veritabanı ismini kendiniz belirleyebilirsiniz. Ben "wordpress" isimli bir veritabanı oluşturdum.

```mysql
mysql> CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

<img src="/assets/img/blog/wp2.jpg" alt="2"/>

Ardından bu veritabanına erişecek yeni bir kullanıcı oluşturuyoruz.  Kullanıcı adını "wordpressadmini", parolayı ise "Parola123" olarak belirledim. Farklı kullanıcı adı ve parola kullanabilirsiniz. 

```mysql
mysql> CREATE USER 'wordpressadmini'@'localhost' IDENTIFIED BY 'Parola123';
```

Daha sonra yeni oluşturduğumuz "wordpressadmini" kullanıcısını "wordpress" veritabanında yetkilendiriyoruz.

```mysql
mysql> GRANT ALL ON wordpress.* TO 'wordpressadmini'@'localhost';
mysql> FLUSH PRIVILEGES;
mysql> EXIT;
```

<img src="/assets/img/blog/wp3.jpg" alt="3"/>

### Adım 2 - Ek PHP Uzantılarını Yükleme

WordPress'i PHP ile uyumlu bir şekilde çalıştırabilmek için bazı eklentilere ihtiyacımız var. Bu eklentileri `apt` ile yüklüyoruz.

```shell
$ sudo apt install php-curl php-gd php-mbstring php-xml php-xmlrpc php-soap php-intl php-zip
```

<img src="/assets/img/blog/wp4.jpg" alt="4"/>

Kurulumu tamamlamak için gelen soruya "Y" diyerek evet yanıtını veriyoruz.

Kurulum tamamlandıktan sonra ise Apache'nin bu eklentileri yüklemesi için Apache'yi tekrar başlatıyoruz.

```shell
$ sudo systemctl restart apache2
```

### Adım 3 - WordPress'i İndirme

Artık sunucuyu yapılandırdığımıza göre WordPress'i indirip kurabiliriz. Güvenlik nedeniyle her zaman WordPress'in en son sürümünü kurmanızı tavsiye ediyorum.

Yazılabilir bir dizine geçiyor ve ardından aşağıdakileri yazarak sıkıştırılmış WordPress dosyasını indiriyoruz: 

```shell
$ cd /tmp
$ curl -O https://wordpress.org/latest.tar.gz
```

İndirdiğimiz bu sıkıştırılmış  dosyayı `tar` ile çıkarıyoruz.

```shell
$ tar xzvf latest.tar.gz
```

<img src="/assets/img/blog/wp5.jpg" alt="5"/>

WordPress'in daha sonra kullanması için bir `.htaccess` dosyası ekliyoruz.

```shell
$ touch /tmp/wordpress/.htaccess
```

Ardından örnek yapılandırma dosyasını kopyalıyoruz. 

```shell
$ cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php
```

WordPress'in daha sonra kendini güncellerken hata almaması için `upgrade` isimli bir klasör oluşturuyoruz.

```shell
$ mkdir /tmp/wordpress/wp-content/upgrade
```

Artık tüm dosyalarımızı /var/www/html/ dizinine kopyalayabiliriz. 

```shell
$ sudo mkdir /var/www/html/wordpress
$ sudo cp -a /tmp/wordpress/. /var/www/html/wordpress
```

<img src="/assets/img/blog/wp6.jpg" alt="6"/>

### Adım 4 - WordPress Yapılandırma Dosyasını Ayarlama

Şimdi ana WordPress yapılandırma dosyasında bazı ayarlamalar yapmamız gerekiyor.

İlk işimiz kurulumumuz için biraz güvenlik sağlamak. Bunun için bazı gizli anahtarlara ihtiyacımız var. 

WordPress gizli anahtar üreticisinden güvenli değerler almak için `curl` kullanıyoruz: 

```shell
$ curl -s https://api.wordpress.org/secret-key/1.1/salt/
```

<img src="/assets/img/blog/wp7.jpg" alt="7"/>

Bu kodun çıktısını kopyalıyoruz.

WordPress yapılandırma dosyasını açıyoruz:

```shell
$ sudo nano /var/www/html/wordpress/wp-config.php
```

Dosya içerisinde ilgili yeri buluyor ve kopyaladığımız değerlerle değiştiriyoruz.

<img src="/assets/img/blog/wp8.jpg" alt="8"/>

Bu işlemin ardından WordPress'i MySQL veritabanına bağlamak için yine aynı dosyada bazı ayarlamalar yapıyoruz.

Değiştireceğimiz alanlar aşağıdaki gibidir:

<img src="/assets/img/blog/wp9.jpg" alt="9"/>

İşiniz bittiğinde `CTRL` ve `X` tuşlarına aynı anda basarak dosyayı kaydedin. `Y` yazarak kaydetmeyi onaylayın ve ardından dosya kaydetme konumunu doğrulamak için `ENTER` tuşuna basın.

### Adım 5 - Kurulumun Web Arayüzü ile Tamamlanması

Artık sunucu yapılandırması tamamlandığından, kurulumu web arayüzü üzerinden tamamlayabiliriz.

Bunun için tarayıcımızdan makinemizin yerel IP adresine gidiyoruz. Makinenizin yerel IP adresini bilmiyorsanız `ifconfig` komutuyla öğrenmeniz mümkün.

```shell
http:// makinenizin_ip_adresi /wordpress
```

Kullanmak istediğiniz dili seçin:

<img src="/assets/img/blog/wp10.jpg" alt="10"/>

Ardından ana kurulum sayfasına geliyoruz.

WordPress siteniz için bir isim ve bir kullanıcı adı seçin (güvenlik amacıyla “admin” gibi bir şey seçmemeniz önerilir). Otomatik olarak güçlü bir şifre oluşturulur. Bu şifreyi kaydedin veya alternatif güçlü bir şifre seçin.

E-posta adresinizi girin ve arama motorlarının sitenizi dizine eklemesini engellemek isteyip istemediğinizi seçin:.

<img src="/assets/img/blog/wp11.jpg" alt="11"/>

"Install WordPress" butonuna tıkladığımızda giriş yapmamızı isteyen bir sayfaya yönlendiriliyoruz.

<img src="/assets/img/blog/wp12.jpg" alt="12"/>

Az önce kaydettiğimiz bilgilerle sisteme giriş yağıyoruz.

<img src="/assets/img/blog/wp13.jpg" alt="13"/>

Giriş yaptıktan sonra WordPress kontrol paneline yönlendiriliyoruz.

<img src="/assets/img/blog/wp14.jpg" alt="14"/>

### Sonuç

Ubuntu sunucusunda LAMP üzerine WordPress kurduk. Bir sonraki yazımda LAMP üzerine PhpMyAdmin kurulumunu anlatacağım. 


























