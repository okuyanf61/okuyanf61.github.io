---
layout: post
title: CTFd Platformu Kurulumu
date:   2018-04-01 06:00:0
categories: turkce
---

Bu yazımda kullanımı en basit olan CTF platformu CTFd' yi Ubuntu Server 16.04 LTS' ye nasıl kuracağımızı, nasıl kullanılabilir hale getirebileceğimizi göstereceğim.

Öncelikle sunucumuza ssh ile bağlanıp giriş yapıyoruz. 
<img src="/assets/1-giris.PNG" alt="1"/>
Ardından platform dosyalarını sunucuya kopyalamak için "git" yüklüyoruz.

```shell
$ sudo apt-get install git
```

<img src="/assets/2-git-install.PNG" alt="2"/>

git yüklendikten sonra dosyalarımızı sunucuya kopyalıyoruz

```shell
$ git clone https://github.com/CTFd/CTFd.git
```

<img src="/assets/3-git-clone.PNG" alt="3"/>

Dosyalarımız kopylanmış mı kontrol edelim
```shell
$ cd CTFd/
$ ls -lh
```

<img src="/assets/4-klasor-icerigi.PNG" alt="4"/>

Platformu kullanabilmemiz için bazı paketler gerekiyor. Bu paketleri "prepare.sh" komut dosyasını çalıştırarak yüklüyoruz.

```shell
$ ./prepare.sh
```

<img src="/assets/5-kurulum.PNG" alt="5"/>

Gerekli paketlerin kurulumu tamamlandıktan sonra platformu çalıştırabiliriz. Bunun için:

```shell
$ python serve.py
```

<img src="/assets/6-local.PNG" alt="6"/>

Eğer bu işleme kadar bir hata almadıysanız platform 127.0.0.1 adresinde (localhost) 4000 portunda çalışmakta olucaktır. CTRL + C yaparak işlemi durduruyoruz. 
Platformu internet üzerinde erişilebilir hale getirmek için yapmamız gereken 2 işlem daha var. 
1-) Nginx kurmak.
2-) Gunicorn' un Nginx ile entegre çalışması için gerekli konfügrasyonları yapmak.

İsterseniz öncelikle gunicorn' u test edelim. 

```shell
$ gunicorn --bind "0.0.0.0:4000" -w 4 "CTFd:create_app()"
```

<img src="/assets/7-gunicorn.PNG" alt="7"/>

Burada belirttiğimiz 4000 portu rastgele seçilmiştir. İstediğiniz port numarasını seçebilirsiniz.
Eğer herhangi bir hata almadıysanız "http://makineniziz_ip_adresi:4000" adresinde platformu görüntüleyebilirsiniz. (Örneğin: 192.168.1.39:4000 veya 93.127.58.3:4000)

<img src="/assets/8-setup-page.PNG" alt="8"/>

Nginx' in kurulumuna geçelim. 

```shell
$ sudo apt-get install nginx
```

<img src="/assets/9-nginx-install.PNG" alt="9"/>

Kurulum tamamlandıktan sonra gunicorn' un Nginx ile entegre çalışması için gerekli konfügrasyonları yapmamız gerekiyor.
Bunun için "/etc/nginx/sites-available/" klasöründe "ctfd_app.conf" isimli bir dosya oluşturuyorum. Ben bunun için "nano" isimli metin editörünü tercih ettim. 

```shell
$ sudo nano /etc/nginx/sites-available/ctfd_app.conf
```

<img src="/assets/10-nginx-conf.PNG" alt="10"/>

Gerekli ayarları yapıp dosyamızı kaydediyoruz. Bu ayarda Nginx' e 80 portuna gelen istekleri makinemizde 4000 portunda çalışan gunicorn' a yönlendirmesini söylüyoruz.

```nginx
server {
	listen 80;
	server_name makineniziz_ip_adresi;
	
	location / {
		include proxy_params;
		proxy_pass http://localhost:4000;
	}
}
```

<img src="/assets/11-nginx-conf.PNG" alt="11"/>

Artık bu konfügrasyon dosyasını "/etc/nginx/sites-enabled/" klasörüne bağlayarak etkinleştirelibilir.

```shell
$ sudo ln -s /etc/nginx/sites-available/ctfd_app.conf /etc/nginx/sites-enabled/
```

<img src="/assets/12-nginx-symlink.PNG" alt="12"/>

Yaptığımız ayarlarda bir problem var mı kontrol ediyoruz ve nginx servisini yeniden başlatıyoruz.

```shell
$ sudo nginx -t
$ sudo systemctl restart nginx
```

<img src="/assets/13-nginx-test.PNG" alt="13"/>

CTFd anadizinine geri dönüp gunicorn' u tekrar çalıştırıyoruz.

```shell
$ gunicorn --bind "0.0.0.0:4000" -w 4 "CTFd:create_app()"
```

<img src="/assets/14-gunicorn-start.PNG" alt="14"/>

Artık platforma http://makineniziz_ip_adresi üzerinden (Örneğin: 192.168.1.39 veya 93.124.57.42) erişebilir ve CTF' inizi organize edebilirsiniz.

<img src="/assets/15-finish.PNG" alt="15"/>
