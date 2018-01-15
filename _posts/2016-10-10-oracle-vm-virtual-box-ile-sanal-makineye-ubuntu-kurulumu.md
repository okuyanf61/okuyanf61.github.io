---
layout: post
title:  "Oracle VM Virtual Box ile Sanal Makineye Ubuntu Kurulumu"
date:   2016-10-10 19:06:39
categories: turkce
---
En yaygın olarak kullanılan masaüstü Linux dağıtımlarından biri olan Ubuntu'nun son sürümü olan Ubuntu 16.04 LTS'yi Windows 7 işletim sistemine 2 aşamada  kuracağız.

&nbsp;

<strong>1-) Oracle VM Virtual Box programını kurmak ve Ubuntu için gerekli ayarları yapmak</strong>

&nbsp;

Öncelikle bilgisayarımıza kurmamız gereken program Oracle VM Virtual Box ve Ubuntu 16.04 ISO dosyası:

<a href="https://www.virtualbox.org/wiki/Downloads">https://www.virtualbox.org/wiki/Downloads</a> (Uygun Sürümü Seçip İndiriyoruz)

<img src="https://i.hizliresim.com/mEp0LR.jpg" alt="" />

&nbsp;

<a href="https://www.ubuntu.com/download">https://www.ubuntu.com/download</a> (Uygun Sürümü Seçip İndiriyoruz)

&nbsp;

<img src="https://i.hizliresim.com/E3NjJA.jpg" alt="" />

&nbsp;

Ubuntu sistem gereksinimleri:
<ul>
 	<li>700 MHz işlemci (Intel Celeron veya daha iyisi)<span id="line-18" class="anchor"></span></li>
 	<li>512 MiB RAM<span id="line-19" class="anchor"></span></li>
 	<li>Hafızada 5 GB yer</li>
</ul>
&nbsp;

<img src="https://i.hizliresim.com/2jqpZq.jpg" alt="" />

&nbsp;

Bağış miktarını ayarlayıp indirme işlemini başlatıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/B8Nj2g.jpg" alt="" />

&nbsp;

İndirme işlemleri tamalandıktan sonra Oracle VM VirtualBox programını kuruyoruz.

&nbsp;

<img src="https://i.hizliresim.com/ZYplda.jpg" alt="" />

&nbsp;

Bu programı kurmak oldukça basit. Herhangi bir özel ayar gerektirmiyor.

&nbsp;

<img src="https://i.hizliresim.com/oEpJ7m.jpg" alt="" />

<img src="https://i.hizliresim.com/lEpA1X.jpg" alt="" />

<img src="https://i.hizliresim.com/VENjYn.jpg" alt="" />

&nbsp;

Bu aşamada programın "Ağ" özelliğini yüklerken internet bağlantınızın geçici olarak devre dışı kalacağını söylüyor. Evet diyerek devam ediyoruz.

&nbsp;

<img src="https://i.hizliresim.com/nEp4r0.jpg" alt="" />

<img src="https://i.hizliresim.com/gXpQq5.jpg" alt="" />

<img src="https://i.hizliresim.com/ZYplZV.jpg" alt="" />

<img src="https://i.hizliresim.com/oEpJj9.jpg" alt="" />

&nbsp;

Programımız başarılı bir şekilde yüklendi. Programı açıyoruz. "Yeni" butonuna tıklayarak Sanal Makine

ekliyoruz.

&nbsp;

<img src="https://i.hizliresim.com/lEpAdr.jpg" alt="" />

&nbsp;

Sanal makinemize bir isim veriyoruz ve işletim sistemi türünü "Linux" sürümünu ise indirdiğimiz ISO dosyasıyla uyumlu olacak şekilde "Ubuntu(64-bit)" olarak seçiyoruz ve "İleri" diyoruz.

&nbsp;

<img src="https://i.hizliresim.com/VENj0v.jpg" alt="" />

&nbsp;

En az 512 MB olmak üzere bilgisayarımıza göre bellek boyutunu ayarlıyoruz. 1GB (1024MB) yeterli olacaktır.

&nbsp;

<img src="https://i.hizliresim.com/nEp4RM.jpg" alt="" />

&nbsp;

"Şimdi sanal bir sabit disk oluştur" seçeneğini seçerek "Oluştur" butonuna tıklıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/vZV3b4.jpg" alt="" />

&nbsp;

Programla uyumlu çalışması için "VDI (VirtualBox Disk Kalıbı)" seçeneğini seçiyor ve devam ediyoruz.

&nbsp;

<img src="https://i.hizliresim.com/1NBRLN.jpg" alt="" />

&nbsp;

Sistemi daha hızlı kullanmak için "Sabitlenmiş boyut" seçenepini seçip devam ediyoruz.

&nbsp;

<img src="https://i.hizliresim.com/LQNjyZ.jpg" alt="" />

&nbsp;

Sanal sabit disk dosyasına isim veriyoruz.

Sanal diskin önerilen boyutu 8GB. Bu miktar hayli hayli yetecektir fakat ben 20GB olarak ayarlıyorum(Ubuntu'da yapacağım işlerden dolayı). Son olarak "Oluştur" butonuna tıklayarak Sanal Diski oluşturuyoruz.

&nbsp;

<img src="https://i.hizliresim.com/rEpG33.jpg" alt="" />

&nbsp;

Bu işlem bilgisayarınızın özelliklerine bağlı olarak yaklaşık 10 dk. sürmektedir.

&nbsp;

<img src="https://i.hizliresim.com/QQNjpj.jpg" alt="" />

&nbsp;

Sanal makinemizi oluşturduk. Şimdi  bu sistemin çalışması için kurulum dosyasıyla ilgili ayarı yapıyoruz.

"Ayarlar" butonuna tıklayarak sanal makinemizle ilgili olan ayarları açıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/XdNZE5.jpg" alt="" />

&nbsp;

Sol taraftaki menüden "Depolama" kısmını seçiyoruz.

&nbsp;

<img src="https://i.hizliresim.com/bypPLm.jpg" alt="" />

&nbsp;

Denetleyici: IDE sekmesinin altındaki "Boş" yazılı CD ikonlu yere tıklıyoruz. Sağ tarafta bulunan CD ikonuna tıklıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/dXD97p.jpg" alt="" />

&nbsp;

"Sanal Optik Disk Dosyası Seçin" seçeneğine tıklıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/5YXjG5.jpg" alt="" />

&nbsp;

Daha önceden indirmiş olduğumuz Ubuntu'nun ISO uzantılı dosyasını seçiyoruz.

&nbsp;

<img src="https://i.hizliresim.com/A3NjyB.jpg" alt="" />

&nbsp;

Son olarak "OK" butonuna tıklayıp 1. aşamayı bitiriyoruz.

&nbsp;

<img src="https://i.hizliresim.com/0yg3GY.jpg" alt="" />

&nbsp;

<strong>2-) Ubuntu'yu kurmak</strong>

&nbsp;

Bu aşamada Sanal Makinemizi çalıştırıp gerekli kurulum ayarlarını yapacağız. "Başlat" butonuna tıklayarak Sanal Makinemizi başlatıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/40QNG7.jpg" alt="" />

&nbsp;

Eğer buraya kadar işlemleri doğru bir şekilde yaptıksak karşımıza böyle bir ekran çıkacak.

&nbsp;

<img src="https://i.hizliresim.com/J3NjO5.jpg" alt="" />

&nbsp;

Sol taraftaki menüden Ubuntu'yu kullanmak istediğimiz dili seçiyoruz.

&nbsp;

<img src="https://i.hizliresim.com/OENjon.jpg" alt="" />

&nbsp;

Ubuntu'yu Kur diyerek devam ediyoruz. Kurmadan önce isteğe bağlı olarak Ubuntu'yu deneyebilirsiniz.

&nbsp;

<img src="https://i.hizliresim.com/lEpAZQ.jpg" alt="" />

&nbsp;

İki seçeneği de seçip "Devam Et" butonuna tıklıyoruz. İlk seçenek eğer bilgisayarınız internete bağlı bir durumda ise yüklenecek olan programların güncellemelerini kontrol eder ve daha güncel bir sürüm varsa güncel olanı internetten indirip kurar. İkinci seçenek ise Sanal Makinenize bazı üçüncü parti yazılımlar yükler.

&nbsp;

<img src="https://i.hizliresim.com/VENjDB.jpg" alt="" />

&nbsp;

Unutu için daha önceden sanal disk oluşturduğumuz ve bu diski hiç kullanmadığımız için "Diski sil ve Ubuntu yükle" seçeneğini seçip "Şimdi Yükle" butonuna tıklıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/nEp4lN.jpg" alt="" />

&nbsp;

Bu aşamada sanal diske bazı işlemlerin yapılacağını bu işlemlerin diske kaydedileceğini söylüyor. "Devam Et" butonuna tıklıyoruz.

&nbsp;

<img src="https://i.hizliresim.com/vZV3PA.jpg" alt="" />

&nbsp;

Tarih Saat gibi bazı ayarların yapılması için konumuzu soruyor. Haritadan bulunduğunuz konuma tıklayarak devam ediyoruz.

&nbsp;

<img src="https://i.hizliresim.com/1NBREB.jpg" alt="" />

&nbsp;

Bilgisayarımızın klavye düzenini seçerek test ediyor ve devam ediyoruz.

&nbsp;

<img src="https://i.hizliresim.com/LQNjD0.jpg" alt="" />

&nbsp;

Bu aşamada bizden bir kullanıcı oluşturmamızı istiyor. Gerekli alanları doldurarak devam ediyoruz. Kullanıcı adı seçerken Türkçe karakter içermediğinden emin olun.

&nbsp;

<img src="https://i.hizliresim.com/7AdjDL.jpg" alt="" />

&nbsp;

Kurulum başladı. Bu aşama bilgisayarınız özelliklerine bağlı olarak yaklaşık 15 dk. sürmektedir.

&nbsp;

<img src="https://i.hizliresim.com/PQNjDd.jpg" alt="" />

<img src="https://i.hizliresim.com/gXpQ60.jpg" alt="" />

&nbsp;

Kurulum tamamlandı. Şimdi tek yapmamz gereken Sanal Makineyi yeniden başlatmak.

&nbsp;

<img src="https://i.hizliresim.com/ZYpl3o.jpg" alt="" />

&nbsp;

Daha önceden bellirlediğimiz kullanıcı adını girerek devam ediyoruz.

&nbsp;

<img src="https://i.hizliresim.com/3AMkMr.jpg" alt="" />

&nbsp;

Kurulum tamamlandı. Artık Windows işletim sisteminde Linux tabanlı Ubuntu kullanabilirsiniz.

&nbsp;

<img src="https://i.hizliresim.com/RQNjNa.jpg" alt="" />

&nbsp;

&nbsp;