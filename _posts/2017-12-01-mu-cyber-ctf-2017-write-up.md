---
layout: post
title: "Mu Cyber CTF 2017 Write-Ups"
date:   2017-12-01 23:30:17
categories: turkce
---

## Sorular

•[Flag Format](#flag-format)

| [Theory](#theory)| [Crypto](#crypto)| [Web​ ​-​ ​Network](#web---network)| [Stegano](#stegano)| [Forensic](#forensic)| [Mixed](#mixed)| [Joy](#joy)|
| :--------: | :--------: | :--------: | :-------: | :---------:| :--------:| :-------:|
| [EXE - 100](#exe---100) | [MD5 - 50](#md5---50)| [Troll​ ​Selçuk​ ​-​ 100](#troll-selcuk---100)| [Hack​ ​İşlemi​ ​Başlatılmıştır​ ​-​ 100](#hack-islemi-baslatilmistir---100) | [Log - 100](#log---100)| [Dosya Analizi - 500](#dosya-analizi---500)| [Tweety - 300](#tweety---300)|
| [GNU - 100](#gnu---100) | [Tekrar​ ​Tekrar​ ​Dene​ ​-​ 100](#tekrar-tekrar-dene---100)| [Shrek​ ​-​ 200](#shrek---200)| [Kul Hakkı - 200](#kul-hakki---200)| [Hacker Okan - 150](#hacker-okan---150)| [C Program - 500](#c-program---500) | [Algebra - 300](#algebra---300)|
| [Sub - 100](#sub---100)| [NTLM​ ​-​ 100](#ntlm---100)| [Uptime​ ​-​ 250](#uptime---250)| [ScreenShot - 250](#screenshot---250)| [Digital World - 200](#digital-world---200)| |[998 mi? - 400](#998-mi---400)|
| [Wi-Fi - 100](#wi-fi---100)| [Zor​ ​Değil​ ​-​ 150](#zor-degil---150)| [Handshake​ ​-​ 300](#handshake---300)| [Who is this guy? -300](#who-is-this-guy---300)| [Git - 200](#git---200)| | [Ne Diyo Bu? - 500](#ne-diyo-bu---500)|
| [Arch - 150](#arch---150)| [ZOR​ ​-​ 200](#zor---200)| [Mr.Robot​ ​-​ 400](#mrrobot---400)| [24 Kasım -400](#24-kasım---400)| [Use Calc - 500](#use-calc---500)| |[Nişasta - 1000](#nisasta---1000)|

## Flag​ ​Format

Bu​ ​soru​ ​flag​ ​formatını​ ​gösteriyordu.Yani​ ​cevap​ ​mucyb3r_{FLAG}​ ​olucaktı.

## Theory

### EXE​ ​-​ ​100
[http://bfy.tw/FB8q](http://bfy.tw/FB8q)
flag:​ ​mucyb3r_{elf}


### GNU​ ​-​ 100
[http://bfy.tw/FB](http://bfy.tw/FB)
flag:​ ​mucyb3r_{gdb}


### Sub​ ​-​ 100
[http://bfy.tw/FB9a](http://bfy.tw/FB9a)
flag:​ ​mucyb3r_{26}


### Wi-Fi​ ​-​ 100
[http://bfy.tw/FBA](http://bfy.tw/FBA)
flag:​ ​mucyb3r_{iwconfig}


### Arch​ ​-​ 150
https://wiki.archlinux.org/index.php/Arch-based_distributions
flag:​ ​mucyb3r_{blackarch}



## Crypto

### MD5​ ​-​ 50
Verilen​ ​hash​ ​i​ ​MD5​ ​ile​ ​decode​ ​ettiğimizde​ ​flage​ ​ulaşıyoruz.
flag:​ ​mucyb3r_{h4ck3r}


### Tekrar​ ​Tekrar​ ​Dene​ ​-​ 100
Verilen​ ​hash​ ​i​ ​Base64​ ​ile​ ​tekrar​ ​tekrar​ ​decode​ ​ettiğimizde​ ​flage​ ​ulaşıyoruz.
flag:​ ​mucyb3r_{RECURSIVE}


### NTLM​ ​-​ 100
Verilen​ ​hash​ ​i​ ​NTLM​ ​decrypt​ ​kullanarak​ ​decode​ ​ettiğimizde​ ​flage​ ​ulaşıyoruz.
flag:​ ​mucyb3r_{yeni_basliyoruz}


### Zor​ ​Değil​ ​-​ 150
Klasik​ ​bir​ ​şifreleme​ ​yöntemi​ ​olan​ ​Vigenére​ ​ile​ ​şifrelenmiş​ ​veriyi​ ​verilen​ ​key​ ​sayesinde​ ​decrypt
ederek​ ​flag​ ​e​ ​ulaşıyoruz.
https://www.dcode.fr/vigenere-cipher
flag:​ ​mucyb3r_{blaise_de_vigenere}


### ZOR​ ​-​ 200
Bu​ ​soruda​ ​erilen​ ​değeri​ ​XOR​ ​ile​ ​decrypt​ ​etmemiz​ ​gerekiyordu.​ ​Bunun​ ​için [strelitzia wasXORdecoder aracı​](http://strelitzia.net/wasXORdecoder/wasXORdecoder.html​)nı ​kullandık.
flag:​ ​mucyb3r_{hosgeldiniz}



## Web​ ​-​ ​Network

### Troll​ ​Selçuk​ ​-​ 100
100 ​Puanlık​ ​Troll​ ​Selçuk​ ​sorusu.​ ​Öncelikle​ ​sorumuzu​ ​açtığımızda​ ​hiçbir​ ​açıklama​ ​olmaksızın
bir​ ​drive​ ​linki​ ​veriliyordu.​ ​Drive​ ​linkinden​ ​hintce.tar.xz​ ​isimli​ ​dosyayı​ ​bilgisayarımıza
indiriyoruz.​ ​İçerisinde​ ​sadece​ ​hintce.html​ ​dosyası​ ​var.​ ​Html​ ​dosyasını​ ​çalıştırdığımızda​ ​bizi
öncelikli​ ​olarak​ ​boş​ ​bir​ ​sayfadan​ ​youtube​ ​linkine​ ​yönlendiriyor.
Tabiki​ ​can​ ​alıcı​ ​nokta​ ​burası.​ ​Bunu​ ​farketmemiz​ ​gerekiyor.​ ​Sayfa​ ​yüklendiğinde​ ​karşımıza
eğlenceli​ ​bir​ ​video​ ​çıkıyor.
Videoyu​ ​keyifle​ ​izliyoruz​ ​ve​ ​bitiyor​ ​:)​ ​Burda​ ​flag​ ​yok.​ ​Sonra​ ​yapmamız​ ​gereken​ ​şey
hintce.html​ ​dosyasının​ ​kaynak​ ​kodlarına​ ​bakmalıyız.​ ​Sayfanın​ ​kaynak​ ​kodlarına​ ​bakabilmek
için​ ​html​ ​dosyasını​ ​bir​ ​text​ ​editör​ ​yardımıyla​ ​açıyoruz.​ ​Karşımıza​ 14 ​satır​ ​kısa​ ​bi​ ​kod​ ​bloğu
çıkıyor​ ​ve​ ​dikkatlice​ ​baktığımızda​ ​burda​ ​div​ ​etiketi​ ​içerisinde​ ​flag'in​ ​tanımlı​ ​olduğunu
görüyoruz.
flag​ ​:​ ​mucyb3r_(activex)


### Shrek​ ​-​ 200
200 ​Puanlık​ ​Shrek​ ​sorusu.​ ​Öncelikle​ ​sorumuzu​ ​açtığımızda​ ​hiçbir​ ​açıklama​ ​olmaksızın​ ​bir
drive​ ​linki​ ​veriliyordu.​ ​Drive​ ​linkinden​ ​troll.rar​ ​isimli​ ​dosyayı​ ​indiriyoruz.​ ​İçeriğine​ ​bakıyoruz​ 2
klasör​ ​ve​ 2 ​dosya​ ​var.
Bu​ ​dosyalara​ ​göz​ ​gezdiriyoruz​ ​ve​ ​Hahaha!!!.html​ ​dosyasını​ ​açıyoruz​ ​içeriğinde​ ​çıldırmaya
hazır​ ​mısın​ ​diye​ ​bir​ ​mesaj​ ​var
OK​ ​butonuna​ ​bastıktan​ ​sonra​ ​ekrandaki​ ​sayfa​ ​değişiyor.​ ​Dosyalara​ ​göz​ ​gezdiriyoruz.​ ​Json
ile​ ​yazılmış​ ​dosyalar​ ​görüyoruz.
Hook.js​ ​dosyasının​ ​kaynak​ ​kodunu​ ​incelediğimizde​ ​şifreli​ ​kod​ ​bloğu​ ​görünüyor.​ ​Fonksiyon
içerisindeki​ ​encode​ ​edilmiş​ ​kodları​ ​kopyalayıp​ ​"https://www.unphp.net"​ ​web​ ​adresi​ ​veya
herhangi​ ​Php​ ​Decoder​ ​sayfasında​ ​decode​ ​ettiğimizde​ ​karşımıza​ ​flag​ ​is​ ​here​ ​diye​ ​tanımlı
flag'imiz​ ​çıkıyor.
flag:​ ​mucyb3r_{oh_beee}


### Uptime​ ​-​ 250
Soruda​ ​SSID​ ​si​ ​Meryem​ ​olan​ ​kullanıcının​ ​Uptime​ ​suresini​ ​bulabilir​ ​misin?​ ​diyordu.​ ​Bu
sorunun​ ​benzeri​ ​SDUCTF'de​ ​kullanıldı.​ ​Alıntıdır​ ​Bize​ ​bir​ ​adet​ ​.pcap(analiz​ ​edilmiş​ ​ağ
dosyası)​ ​verilmiş.​ ​Ve​ ​uptime​ ​süresini​ ​bulmamız​ ​isteniyor.​ ​Komut​ ​satırından​ ​airodump-ng
aracıyla​ ​uptime​ ​süresini​ ​bulabiliyoruz.​ ​airodump​ ​aracını​ ​kullanabilmemiz​ ​için​ ​aircrack-ng'nin
yüklü​ ​olması​ ​gerekiyor​ ​alt​ ​text​ ​Bilgisayarınızda​ ​aircrack-ng​ ​yok​ ​ise​ ​"sudo​ ​apt-get​ ​install
aircrack-ng"​ ​komutu​ ​ile​ ​ekliyoruz.​ ​Komut​ ​satırına​ ​airodump-ng​ ​-r​ ​(dosya​ ​konumu)​ ​--uptime​ ​(-r
parametresi​ ​dosyayı​ ​belirtmek​ ​için​ ​kullanılıyor,​ ​--uptime​ ​parametresi​ ​ise​ ​uptime​ ​süresini
kolon​ ​olarak​ ​eklemeyi​ ​sağlar)​ ​Bu​ ​komutu​ ​verdiğimizde​ ​meryem​ ​isimli​ ​kullanıcın​ ​uptime
süresinin​ ​"00:10:54"​ ​olduğunu​ ​görüyoruz.
flag:​ ​mucyb3r_{00:10:54}


### Handshake​ ​-​ 300
300 ​Puanlık​ ​Handshake​ ​Sorusu;​ ​Galatasaraylı​ ​Emel’in​ ​kablosuz​ ​ağını​ ​ele​ ​geçirmek​ ​isteyen
saldırgan,​ ​bir​ ​handshake​ ​yakaladı.​ ​Parolayı​ ​bulmasına​ ​yardım​ ​eder​ ​misiniz?​ ​NOT:​ ​Parola​ 8
karakterlidir.​ ​Bize​ ​verilen​ ​ipuçları:​ ​Galatasaray,Emel,8​ ​Karakter​ ​Drive​ ​dosyasından
indirdiğimiz​ ​.cap(yakalanmış​ ​paket​ ​dosyası)'nı​ ​analiz​ ​etmek​ ​için​ ​kullanacak​ ​olduğumuz​ 2
araç​ ​var​ ​1)aircrack-ng​ ​2)crunch.​ ​Bu​ 2 ​araç​ ​sayesinde​ ​parolayı​ ​elde​ ​edebiliriz.​ ​Crunch:verilen
karakter​ ​uzunluğunda​ ​ve​ ​belirtilen​ ​kriterlere​ ​göre​ ​şifreler​ ​üretiyor​ ​ve​ ​bu​ ​şifreleri​ ​belirttiğimiz
dosya​ ​üzerinde​ ​brute-force​ ​tekniğini​ ​kullanarak​ ​deniyor.​ ​kullanım​ ​şekli​ ​için​ ​"crunch​ ​(min-max
karakter​ ​sayısı)​ ​(ipuçları)​ ​-r​ ​(output.file)"​ ​-r​ ​parametresi​ ​dosyaya​ ​kaydetmek​ ​için​ ​belirtiliyor.
Üretmiş​ ​olduğumuz​ ​şifreleri​ ​bir​ ​txt​ ​dosyasına​ ​kaydettik,​ ​bu​ ​işlem​ ​biraz​ ​zaman​ ​alabiliyor​ ​tüm
karakterlerin​ ​kombinasyonlarını​ ​deniyor.​ ​Ardından​ ​aircrack-ng​ ​komutuyla​ ​kaydetmiş
olduğumuz​ ​şifre​ ​dosyasını​ ​ve​ ​.cap​ ​dosyasını​ ​brute-force​ ​işlemine​ ​tabii​ ​tutuyoruz.​ ​Kısa​ ​süre
sonra​ ​şifreyi​ ​buluyoruz.
flag:​ ​mucyb3r_{1905emel}


### Mr.Robot​ ​-​ 400
400 ​Puanlık​ ​MrRobot​ ​sorusu.​ ​Karşımızda​ ​sadece​ ​.pcapng​ ​formatında​ ​bir​ ​dosya​ ​var.​ ​Öncelikli
olarak​ ​bu​ ​dosyayı​ ​wireshark​ ​ile​ ​pcap​ ​dosya​ ​formatına​ ​çeviriyoruz.​ ​Sonrasında​ ​komut​ ​satırına
"tcpflow​ ​-d2​ ​-r​ ​mrrobot.pcap"​ ​(-r​ ​dosya​ ​belirtme,​ ​-d​ ​hata​ ​ayıklama​ ​çıktıları)​ ​yazdığımızda
ekrana​ ​gelen​ ​çıktı;​ ​tcpflow:​ ​retrying_open
::open(fn=004.005.006.007.12345-008.009.010.011.02355,oflag=xc2,mask:x1b6)=5​ ​tcpflow:
Open​ ​FDs​ ​at​ ​end​ ​of​ ​processing:​ 1 ​tcpflow:​ ​demux.max_open_flows:​ 1 ​tcpflow:​ ​Flow​ ​map
size​ ​at​ ​end​ ​of​ ​processing:​ 1 ​tcpflow:​ ​Flows​ ​seen:​ 1 ​tcpflow:​ ​Total​ ​flows​ ​processed:​ 1 ​tcpflow:
Total​ ​packets​ ​processed:​ 1821
Böyle​ ​bir​ ​geri​ ​dönüt​ ​vermekte.004.005.006.007.12345-008.009.010.011.02355​ ​isimli​ ​dosyayı
$​ ​file​ ​004.005.006.007.12345-008.009.010.011.02355​ ​yazdığımızda​ ​ise
004.005.006.007.12345-008.009.010.011.02355:​ ​JPEG​ ​image​ ​data,​ ​JFIF​ ​standard​ ​1.01,
resolution​ ​(DPI),​ ​density​ ​72x72,​ ​segment​ ​length​ ​16,​ ​progressive,​ ​precision​ ​8,​ ​564x572,
frames​ 3 ​dönütünü​ ​vermekte.Yani​ ​pcap​ ​bir​ ​resim​ ​dosyası.Resim​ ​dosyası​ ​açıldığında
bayrağımızı​ ​resmin​ ​üzerinde​ ​görmekteyiz.
flag:​ ​mucyb3r_{unshattered.jpg}

## Stegano

### Hack​ ​İşlemi​ ​Başlatılmıştır​ ​-​ 100
Soruyu​ ​açtığımızda​ ​resimde​ ​saklanmış​ ​bir​ ​mesaj​ ​vardı.​ ​Steganography​ ​ile​ ​saklanmış​ ​mesajı
açığa​ ​çıkartabiliriz.​ ​Bunun​ ​için​ ​http://incoherency.co.uk/image-steganography/#unhide
aracını​ ​kullanarak​ ​cevabı​ ​mucyb3r_(Turkey)​ ​olarak​ ​buluyoruz.


### Kul​ ​Hakkı​ ​-​ 200
Bu​ ​soruda​ ​"strings"​ ​komutunu​ ​kullanarak​ ​flag​ ​e​ ​ulaşıyoruz.
flag:​ ​mucyb3r_{hak_yeme_hack_ye}


### ScreenShot​ ​-​ 250
mucyb3rctf​ ​i​ ​Snapchat​ ​adlı​ ​sosyal​ ​medya​ ​uygulamasında​ ​ekleyip​ ​son​ ​attığı​ ​story​ ​e​ ​bakınca
karşımıza​ ​bir​ ​karekod​ ​çıkıyor.
Bu​ ​karekodu​ ​herhangi​ ​bir​ ​karekod​ ​okuyucu​ ​ile​ ​okutunca​ ​flag​ ​e​ ​ulaşıyoruz.
flag:​ ​mucyb3r_{do_you_like_me}


### Who​ ​is​ ​this​ ​guy?​ ​-​ 300
Verilen​ ​fotoğraftaki​ ​dosyanın​ ​adı​ ​blockchain​ ​speech​ ​ile​ ​alakalıydı.
Google​ ​Görseller'​ ​de​ ​blockchain​ ​speech​ ​diye​ ​arattığımızda​ ​ilk​ ​fotoğraftaki​ ​adamın​ ​bizim
adamımızla​ ​aynı​ ​adam​ ​olduğunu​ ​görüyoruz.
Bu​ ​adamın​ ​adı​ ​ise​ ​Vitalik​ ​Buterin.
flag:​ ​mucyb3r_{vitalik_buterin}


### 24 ​Kasım​ ​-​ 400
Bu​ ​soruyu​ ​çözmek​ ​için​ ​mimkatz​ ​aracından​ ​faydalanacağız.​ ​Mimikatz​ ​i​ ​indirdikten​ ​sonra
verilen​ ​dosyayı​ ​mimikatz'in​ ​klasörüne​ ​kopyalıyor​ ​ve​ ​mimikatz​ ​i​ ​çalıştırıyoruz.​ ​Sırasıyla
komutları​ ​giriyoruz:
"privilege::debug"
"sekurlsa::minidump​ ​lsass.DMP"
flag:​ ​mucyb3r_{başöğretmen_ATATÜRK}

## Forensic

### Log​ ​-​ 100
Dosyamızı​ ​indirdikten​ ​sonra​ ​note​ ​pad​ ​ile​ ​açıyoruz.​ ​CTRL+F​ ​yaparak​ ​"mucyb3r"​ ​şeklinde
arama​ ​yapıyoruz​ ​flag​ ​karşımıza​ ​çıkıyor.
flag:​ ​mucyb3r_{learn_searching}


### Hacker​ ​Okan​ ​-​ 150
jpg​ ​dosyamızı​ ​indirdikten​ ​sonra​ ​Hacker​ ​Okan'a​ ​sağ​ ​tıklıyıp​ ​özelliklerine​ ​giriyoruz.
Açılan​ ​pencerede​ ​ayrıntılara​ ​girince​ ​karşımıza​ ​base64​ ​ile​ ​şifrelenmiş​ ​bir​ ​hash​ ​çıkıyor.
Bunu​ ​base64​ ​ile​ ​decode​ ​edince​ ​karşımıza​ ​flag​ ​çıkıyor.
flag:​ ​mucyb3r_{öp_elimi}


### Digital​ ​World​ ​-​ 200
Sorumuzda​ ​verdiğiz​ ​linke​ ​girince​ ​karşımıza​ ​iyibakiyi.txt​ ​adlı​ ​bir​ ​dosya​ ​çıkıyor.​ ​Bu​ ​dosyayı
indirip​ ​notepad++​ ​ile​ ​açıyoruz.​ ​CTRL+F​ ​yapıp​ ​karşımıza​ ​çıkan​ ​penceredendeğiştir​ ​kısmına
giriyoruz.
Buradan​ ​aranan​ ​kısmına​ 1 ​yazıp​ ​değiştir​ ​kısmını​ ​boş​ ​bırakarak​ ​tümünü​ ​değiştir​ ​diyoruz.
Ardından​ ​aynı​ ​işlemi​ 1 ​yerine​ 0 ​yazıp​ ​tekrar​ ​ediyoruz.​ ​Bu​ ​işlemleri​ ​yaptıktan​ ​sonra
dosyamızda​ ​sadece​ ​flag'ımız​ ​kalıyor.
flag:​ ​mucyb3r_{köroldum}


### Git​ ​-​ 200
Sorumuzda​ ​verilen​ ​linke​ ​giriyoruz.
Karşımıza​ ​çıkan​ ​github​ ​reposunda​ ​commitlere​ ​bakıyoruz.​ ​Yeterince​ ​eski​ ​commitlere​ ​gidince
delete​ ​flag​ ​adında​ ​bir​ ​commit​ ​ile​ ​karşılaşıyoruz.​ ​Bu​ ​commite​ ​girince​ ​flag​ ​karşımıza​ ​çıkıyor.
flag:​ ​mucyb3r_{taktigin_iyi}


### Use​ ​Calc​ ​-​ 500
Verilen​ ​linke​ ​girince​ ​bir​ ​ses​ ​dosyası​ ​ile​ ​karşılaşıyoruz.​ ​Bu​ ​ses​ ​dosyasının​ ​içinde​ ​ise​ ​arama
esnasında​ ​basılan​ ​tuşların​ ​sesleri​ ​yer​ ​alıyor.​ ​Bu​ ​ses​ ​dosyasını
[http://dialabc.com/sound/detect/​](http://dialabc.com/sound/detect/​) ​adresine​ ​yüklüyoruz.
Karşımıza​ 317537 ​şeklinde​ ​bir​ ​sayı​ ​çıkıyor.
Bu​ ​sayıyı​ ​hesap​ ​makine​ ​yazıp​ ​ters​ ​çevirdiğimizde​ ​flag​ ​karşımıza​ ​çıkıyor.
flag:​ ​mucyb3r_{leslie}


## Mixed

### Dosya​ ​Analizi​ ​-​ 500
Sorumuzda​ ​verilen​ ​linki​ ​indirince​ ​siber.png​ ​adında​ ​bir​ ​dosya​ ​karşımıca​ ​çıkıyor.​ ​Bu​ ​dosyayı
linux​ ​komut​ ​satırında​ ​"strings"​ ​komutu​ ​ile​ ​açıyoruz.
Bu​ ​işlemden​ ​sonra​ ​karşımıza​ ​bir​ ​takım​ ​binary​ ​kodları​ ​çıkıyor.
Bu​ ​kodları​ ​binary​ ​converter​ ​ile​ ​karakterlere​ ​çevirdiğimizde​ ​karşımıza​ ​başka​ ​bir​ ​link​ ​çıkıyor.
Bu​ ​linkte​ ​ise​ ​bak_da_gör.png​ ​adında​ ​bir​ ​karekod​ ​ile​ ​karşılaşıyoruz.​ ​Bu​ ​karekodu​ ​indirip
tekrar​ ​"strings"​ ​komutu​ ​ile​ ​açınca​ ​karşımıza​ ​başka​ ​bir​ ​link​ ​daha​ ​çıkıyor​ ​:)
Bu​ ​linkten​ ​ise​ ​fifi.tar​ ​adında​ ​bir​ ​dosya​ ​ile​ ​karşılaşıyoruz.​ ​Tar​ ​dosyasının​ ​içindekileri
çıkardığımızda​ ​13.pdf,​ ​görmek-önemli.png,​ ​ordamısın-değilmisin.pcap​ ​adında​ 3 ​dosya​ ​bizi
karşılıyor.
Ordamısın-değilmisin.pcap​ ​dosyasını​ ​wireshark​ ​ile​ ​açıyoruz.
Bu​ ​sefer​ ​karşımıza​ ​çıkan​ ​ekranda,​ ​ICMP​ ​paketlerinin​ ​içinde​ ​başka​ ​bir​ ​takım​ ​binary​ ​kodları​ ​ile
karşılaşıyoruz.
bunları​ ​da​ ​çevirince​ ​flagımız​ ​çıkıyor.
flag:​ ​mucyb3r_{stuxnet}

### C​ ​Program​ ​-​ 500
Bu​ ​sorumuzda​ ​verilen​ ​​c.cpp​​ ​adlı​ ​dosyamız​ ​her​ ​ne​ ​kadar​ ​C​ ​dili​ ​ile​ ​yazımış​ ​gibi​ ​görünse​ ​de​ ​bu
dosyamızın​ ​yazıldığı​ ​dil​ ​White​ ​Space​ ​dilidir.
Bu​ ​linkten ​​​verilen​ ​kodu​ ​yapıştırdığımızda​ ​flag​ ​değeri​ ​gayet​ ​ne​ ​bir​ ​şekilde​ ​görülebiliyordu.
flag:​ ​mucyb3r_{WpUAItsadmhak}


## Joy


### Tweety​ ​-​ 300
Bu​ ​sorumuzda​ ​flag​ ​değerini​ ​almak​ ​için​ ​Twitter'da​ ​https://twitter.com/mucyberlab​ ​sayfamızı
takip​ ​edip​ ​#mucyberCTF​ ​hashtag​ ​altında​ ​tweet​ ​atmanız​ ​gerekiyordu.​ ​Ardından​ ​Sayfa
yöneticilerimiz​ ​size​ ​bir​ ​flag​ ​değeri​ ​verdi.


### Algebra​ ​-​ 300
Bu​ ​sorumuzda​ ​ilk​ ​önce​ ​denklemlerdeki​ ​x​ ​değerlerini​ ​tek​ ​tek​ ​bulmanız​ ​gerekiyordu:
2x-7=211​ ​x=
x-8=109​ ​x=
x+2=101​ ​x=
x+10=131​ ​x=
-x+8=-90​ ​x=
-2x+5=-97​ ​x=
2x-1=227​ ​x=
-x+10=-85​ ​x=
x-9=114​ ​x=
2x-5=201​ ​x=
Bulduğumuz​ ​sayılar​ ​ASCII​ ​formatında​ ​olduğundan​ ​herhangi​ ​bir​ ​online​ ​ASCII​ ​Decoder
sayfasında​ ​decode​ ​ettiğimizde​ ​flag​ ​değeri​ ​gayet​ ​açık​ ​bir​ ​şekilde​ ​görülüyordu.
- -3x+9=-342​ ​x=
- -x+1=-115​ ​x=
- 3x+2=155​ ​x=
- -2x+3=-217​ ​x=
- -3x-1=-286​ ​x=
- -x-3=-112​ ​x=
- 2x+9=105​ ​x=
- x-4=110​ ​x=
- -3x+10=-299​ ​x=
- 4x+1=205​ ​x=
- x-11=99​ ​x=
- -x+3x=250​ ​x=
flag:​ ​mucyb3r_{gut3n_m0rg3n}


### 998 ​mi?​ -  400
Bu​ ​sorumuzda​ ​karşımıza​ ​Mu-Cyber.exe​ ​adlı​ ​bir​ ​dosya​ ​geliyordu.​ ​Dosyayı​ ​açtığımızda​ ​fareyi
üzerine​ ​getirdiğimizde​ ​kayan​ ​bir​ ​buton​ ​vardı.​ ​Butona​ ​tıklayabilmek​ ​için​ ​TAB+ENTER
tuşlarına​ 998 ​kez​ ​basmamız​ ​gerekiyordu.​ ​Kısa​ ​bir​ ​yol​ ​olarak​ ​basit​ ​bir​ ​Autoit​ ​scripti​ ​yazarak
kısa​ ​sürede​ ​flag​ ​değerine​ ​ulaşmamız​ ​mümkündü.
![Nişasta](/assets/img/images/image25.png "998 mi?")
flag:​ **​mucyb3r_{auto_it_babe}**

### Ne​ ​Diyo​ ​Bu?​ ​-​ 500
Bu​ ​sorumuzda​ ​Mors​ ​Alfabesi​ ​ile​ ​kodlanmış​ ​bir​ ​ses​ ​dosyası​ ​vardı.​ ​Flag​ ​değerine​ ​ulaşabilmek
için​ ​dosyayı​ ​herhangi​ ​bir​ ​online​ ​Morse​ ​Decoder​ ​sitesinden​ ​decode​ ​edip​ ​vigenere​ ​kodumuz
için​ ​gerekli​ ​olan​ ​key​ ​değerini​ ​buluyorduk.
Ardından​ ​dosyayı​ ​Sonic​ ​Visualiser​ ​adlı​ ​ses​ ​programı​ ​ile​ ​açıp​ ​özellikleri​ ​Spectogram
sekmesinden​ ​şekildeki​ ​gibi​ ​ayarladığımızda​ ​karşımıza​ ​bir​ ​satır​ ​yazı​ ​geliyordu.
Ardından​ ​bu​ ​satırda​ ​yazanları​ ​online​ ​bir​ ​Vigenere​ ​Cipher​ ​yardımıyla​ ​key​ ​değerimizi​ ​girerek
flag​ ​değerine​ ​ulaşıyoruz.
flag:​ ​mucyb3r_{sesim_geliyomu}


### Nişasta​ ​-​ 1000
Bu​ ​sorumuz​ ​herhalde​ ​bütün​ ​yarışmacılarımızı​ ​beynini​ ​yakmıştır​ ​:)
Soruda​ ​sonradan​ ​​Twitter​ ​Adresimizde​​ ​verilen​ ​ipucundan​ ​yola​ ​çıkarak​ ​Google​ ​arama
motoruna​ ​"2011​ ​Erzurum"​ ​yazdığımızda​ ​ilk​ ​çıkan​ ​arama​ ​sonucunda​ ​kış​ ​olimpiyatlarını
görüyoruz.
Ardından​ ​​bu​ ​linke ​​​tıkladığımızda​ ​alt​ ​kısımda​ ​Dünya​ ​Üniversite​ ​Oyunları​ ​kısmında​ ​yaz
olimpiyatlarının​ ​yapıldığı​ ​yıllar​ ​yazıyordu.
![Nişasta](/assets/img/images/image24.png "Dünya Üniversite Oyunları")
Yılları​ ​verilen​ ​sırayla​ ​yazdığımızda​ ​nişastanın​ ​hidroliz​ ​edilmesiyle​ ​oluşan​ ​karbonhidrat
grubunun​ ​ismi​ ​olan​ ​DEKSTRİN​ ​flag​ ​değeri​ ​geliyordu.
![Nişasta](/assets/img/images/image37.png "Dekstrin")
flag:​ **​mucyb3r_{dekstrin}**