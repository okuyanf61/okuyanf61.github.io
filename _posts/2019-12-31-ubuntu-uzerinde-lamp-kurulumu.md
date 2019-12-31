---
layout: post
title: "Ubuntu Üzerine LAMP (Linux, Apache, MySQL, PHP) nasıl kurulur?"
date: 2019-12-31 09:00:00
image: '/assets/img/blob-image.png'
description: 'Ubuntu 18.04'
tags:
- linux
- ubuntu
- turkce
categories:
- turkce
twitter_text: 'Ubuntu 18.04 Üzerine LAMP (Linux, Apache, MySQL, PHP) nasıl kurulur?'
---

### Adım 1 - Apache'yi Yükleme ve Güvenlik Duvarını Güncelleme

Öncelikle sunucumuza ssh ile bağlanıp giriş yapıyoruz. 

<img src="/assets/img/blog/lamp01.png" alt="1"/>

Ardından "Apache" yüklemek için kolları sıvıyoruz. 

```shell
$ sudo apt install apache2
```

<img src="/assets/img/blog/lamp05.png" alt="2"/>

Kurulumu tamamlamak için gelen soruya "Y" diyerek evet yanıtını veriyoruz.

#### Güvenlik Duvarını Web Trafiğine İzin Verecek Şekilde Ayarlama

UFW güvenlik duvarını etkinleştirdiğimizi varsayarsak, güvenlik duvarımızın HTTP ve HTTPS trafiğine izin verdiğinden emin oluyoruz. Bunun için şu kodları kullanıyoruz:

```shell
$ sudo ufw app list
$ sudo ufw app info "Apache Full"
```

<img src="/assets/img/blog/lamp06.png" alt="3"/>

Gördüğünüz gibi Apache için 80 ve 443 portlarında trafiğe izin verilmiş.

Test etmek için tarayıcımızdan makinemizin yerel IP adresine gidiyoruz. Makinenizin yerel IP adresini bilmiyorsanız ifconfig komutuyla öğrenmeniz mümkün.

```shell
$ ifconfig
```

<img src="/assets/img/blog/lamp07.png" alt="4"/>

```shell
http:// makinenizin_ip_adresi 
```
<br>

Karşınıza aşağı yukarı böyle bir sayfa çıkması gerekiyor.

<img src="/assets/img/blog/lamp08.png" alt="5"/>

### Adım 2 - MySQL Kurulumu

Artık web sunucumuz çalıştığına göre MySQL'i kurabiliriz. MySQL bir veritabanı yönetim sistemidir. Temel olarak, sitenizin bilgi depolayabileceği veritabanlarını organize eder.
MySQL'i yüklemek için yine apt kullanıyoruz.

```shell
$ sudo apt install mysql-server
```

<img src="/assets/img/blog/lamp09.png" alt="6"/>

Kurulumu tamamlamak için gelen soruya "Y" diyerek evet yanıtını veriyoruz.

Kurulum tamamlandıktan sonra ise aşağıdaki komutla MySQL'e giriş yapıp kurulumu kontrol ediyoruz.

```shell
$ sudo mysql
```

<img src="/assets/img/blog/lamp10.png" alt="7"/>

Çıkış yapmak için exit komutunu kullanıyoruz.

```shell
mysql> exit
```
<br>

### Adım 3 - PHP Kurulumu

PHP, uygulamamızı çalıştırır. Komut dosyaları çalıştırabilir ve bilgi almak için MySQL veritabanlarınıza bağlanabilir.

PHP kurmak için bir kez daha apt kullanıyoruz. Fakat bu sefer, PHP kodunun Apache sunucusu altında çalışabilmesi ve MySQL veritabanı ile iletişime geçebilmesi için bazı yardımcı paketler de kuruyoruz.

```shell
$ sudo apt install php libapache2-mod-php php-mysql
```

<img src="/assets/img/blog/lamp11.png" alt="8"/>

Kurulumu tamamlamak için gelen soruya "Y" diyerek evet yanıtını veriyoruz.

Bu şekile PHP  sorunsuz kurulmuş olmadılır. Birazdan test edeceğiz.

Şu anda Apache'ye bir klasör isteği attığımızda Apache biza ilk önce index.html dosyasını servis etmek isteyecektir. Bunun index.php olması için bir kaç şeyi değiştirmemiz gerekiyor. 
Bunu yapmak için, dir.conf dosyasını root ayrıcalıklarına sahip bir metin düzenleyicisinde açıyoruz: 

```shell
$ sudo nano /etc/apache2/mods-enabled/dir.conf
```
<br>

index.php satırın son sıralarında yer alıyor. Onu en başa taşıyoruz. Taşıdığımızda görüntü bu şekilde olacaktır. 

<img src="/assets/img/blog/lamp12.png" alt="9"/>

İşiniz bittiğinde CTRL ve X tuşlarına aynı anda basarak dosyayı kaydedin. "Y" yazarak kaydetmeyi onaylayın ve ardından dosya kaydetme konumunu doğrulamak için ENTER tuşuna basın.

Değişikliklerin etkili olabilmesi için Apache'yi yeniden başlatmamız gerekli. Bunun için:

```shell
$ sudo systemctl restart apache2
```
<br>
Ayrıca apache2 hizmetinin durumunu şu komutla kontrol edebiliriz:

```shell
$ sudo systemctl status apache2
```

<img src="/assets/img/blog/lamp02.png" alt="10"/>

Çıkmak için Q tuşuna basabilirsiniz.


### Adım 4 - PHP'yi Test Etme

Sistemimizin PHP için düzgün kurduğumuzu test etmek için info.php isimli bir dosya oluşturuyor ve içine basit bir kod parçaçığı ekliyoruz.
Dosyamızı oluşturmak için yine nano kullanacağız.

```shell
$ sudo nano /var/www/info.php
```
<br>
```php
<?php phpinfo(); ?>
```

<img src="/assets/img/blog/lamp03.png" alt="11"/>

İşiniz bittiğinde CTRL ve X tuşlarına aynı anda basarak dosyayı kaydedin. "Y" yazarak kaydetmeyi onaylayın ve ardından dosya kaydetme konumunu doğrulamak için ENTER tuşuna basın.

Artık web sunucumuzun PHP tarafından oluşturulan içeriği doğru bir şekilde görüntüleyip görüntülemediğini test edebiliriz. Bunu test etmek için tarayıcımızdan makinemizin yerel IP adresine gidiyoruz. Makinenizin yerel IP adresini bilmiyorsanız ifconfig komutuyla öğrenmeniz mümkün.

```shell
http:// makinenizin_ip_adresi /info.php
```

<img src="/assets/img/blog/lamp04.png" alt="12"/>

Eğer karşınıza böyle bir görüntü geldiyse kurulum sorunsuz tamamlanmış demektir. 

Not: Saldıranlara sunucunuz ve sunucunuzun yapılandırması hakkında kritik bilgi sağlayacağı için bu test dosyasını kontrol ettikten sonra kaldırmak son derece önemlidir.
Test dosyasını kaldırmak için şu komutu kullanıyoruz:

```shell
$ sudo rm /var/www/html/info.php
```
<br>

### Sonuç

Ubuntu üzerinde LAMP server kurduk. Kurulumdan sonra PHP dosyalarımızı sunucuya yükleyebilir ve web uygulamalarımızı çalıştırabiliriz. Bir sonraki yazımda LAMP yüklediğimiz bu sunucuya WordPress kurulumunu anlatacağım. 
