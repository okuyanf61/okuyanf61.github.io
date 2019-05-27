---
layout: post
title: "BBT - Capture The Flag Cevapları"
date: 2017-03-11 23:30:17
image: '/assets/img/blob-image.png'
description: 'BBT - Capture The Flag Cevapları'
tags:
- ctf
- ceng
- turkce
categories:
- turkce
twitter_text: 'BBT - Capture The Flag Cevapları'
---

Muğla Sıtkı Koçman Üniversitesi Bilgisayar ve Bilişim Topluluğu'nun hazırladığı "BBT-Capture The Flag" yarışmasındaki soruların cevapları.

<hr />

<h3><strong>3. Soru</strong></h3>
<div><strong>Kategori</strong>: Crypto</div>
<div class="wpProQuiz_question">
<div class="wpProQuiz_question_text">

8af326aa4850225b75c592d4ce19ccf5

<strong>İpucu</strong>: microsoft NTML,?

<strong>Çözüm</strong>: Soruda verilen hash değerini NTLM formatıyla decrypt ettiğimizde "1234567890" sonucuna ulaştık.
<h3 style="text-align: center;"><img class="aligncenter size-full wp-image-155" src="/assets/img/blog/ntlm.png" alt="" width="497" height="78" />
flag_(1234567890)</h3>

<hr />

<h3 style="text-align: left;">4. Soru</h3>
<strong>Kategori</strong>: Crypto

rdka_(cmtuko_xf_wbswxysf) <strong>Key</strong>:MSKUBBT

<strong>İpucu</strong>: Klasik Şifreleme Tekniklerine bir bak belki faydalı olur.

<strong>Çözüm</strong>: Klasik bir şifreleme yöntemi olan Vigenére ile şifrelenmiş veriyi verilen key sayesinde decrypt ettik.
<img class="aligncenter size-full wp-image-156" src="/assets/img/blog/vigenere.png" alt="" width="714" height="233" />
<h3 style="text-align: center;">flag_(blaise_de_vigenere)</h3>

<hr />

<h3 style="text-align: left;">5. Soru</h3>
<strong>Kategori</strong>: Crypto

VmpJd2VFNUhSa2RpTTJoUVVucHNhRlV3V21GT1ZtUkZVMnRrYkZZeFNrbFphMmhMVjFVd2VXVklUbUZTVjFKWVdsWmFiMDV0VGtaV2EzaFdWa1JCTlE9PQ==

<strong>İpucu</strong>: Bazen sonuca ulaşmak için birden fazla deneme yapmak lazım.Don’t give up!!!

<strong>Çözüm</strong>: Base64 ile ard arda decrypt ettiğimizde flag e ulaştık.

<img class="aligncenter size-full wp-image-157" src="/assets/img/blog/base64.png" alt="" width="600" height="310" />
<h3 style="text-align: center;">flag_(dur_artik_yeter_:D)</h3>

<hr />

<h3 style="text-align: left;">6. Soru</h3>
CTF in en beğendiğim sorusu buydu.

<strong>Kategori</strong>: Crypto

https://drive.google.com/open?id=0B0vTgPSJlq-4NkNxeWZQZHE5bG8

<strong>İpucu</strong>: 1837837 tanıdık geliyor bir yerden,acaba bu sorudada kullanabilir miyiz aynı taktiği?

<strong>Çözüm</strong>: Linkte verilen dosyanın içerisinde bir wav dosyası vardı.

<img class="aligncenter size-full wp-image-159" src="/assets/img/blog/waaaarar.png" alt="" width="438" height="105" />

Bu ses dosyasının içinde ise arama esnasında basılan tuşların sesleri yer alıyordu. <a href="https://dialabc.com/sound/detect/">https://dialabc.com/sound/detect/</a> adresine giderek wav uzantılı dosyamı yükledim. Resimdeki sonuca ulaştım. 379009

<img class="aligncenter size-full wp-image-158" src="/assets/img/blog/dial.png" alt="" width="473" height="590" />

İpucundan yola çıkarak "379009" u digital font a çevirdim.

<img class="aligncenter size-full wp-image-160" src="/assets/img/blog/379.png" alt="" width="208" height="63" />

Fotoğrafı ters çevirdiğimde ise flag e ulaştım.

<img class="aligncenter size-full wp-image-161" src="/assets/img/blog/googlr.png" alt="" width="210" height="62" />
<h3 style="text-align: center;">flag_(google)</h3>

<hr />

<h3 style="text-align: left;">7. Soru</h3>
<strong>Kategori</strong>: Forensic

Hackermannnn

https://drive.google.com/open?id=0B0vTgPSJlq-4ZmRrejdidmR3eWM

<strong>Çözüm</strong>: İndirdiğimiz rar dosyasının içinden Mr Robot adlı bir klasör çıktı ve bu klasör flags.htm adlı bir dosya içeriyordu.

flags.htm dosyasını açtığımızda ise bu tarz bir içerikle karşılaştık.

<img class="aligncenter size-full wp-image-162" src="/assets/img/blog/f.png" alt="" width="1007" height="589" />

Dosyadaki kötü karakterleri (+:`#',@.;&amp;039) basit bir Python scripti ile sildik. Ve karşımıza sadece harflerden oluşan bir dizi geldi.

<img class="aligncenter size-full wp-image-163" src="/assets/img/blog/fso.png" alt="" width="736" height="490" /> <img class="aligncenter size-large wp-image-164" src="/assets/img/blog/fsoci.png" alt="" width="736" height="490" />
<h3 style="text-align: center;">flag_(fsociety)</h3>

<hr />

<h3 style="text-align: left;">10. Soru</h3>
<strong>Kategori</strong>: Web

https://drive.google.com/open?id=0B0vTgPSJlq-4V2F0RmR1QVJmY3M

<strong>Çözüm</strong>: Linkteki rar dosyasını indirip açtığımda web klasörünün içindeki Hahahaa!!.htm dosyasını açtım. Bu dosyayı açtığımda karşıma bir uyarı geliyor ve bu uyarıyı kapatmak istediğimde beni başka bir fotoğrafa yönlendiriyordu. Ben de kaynak kodunu inceledim. hook.js dosyasını açtığımda içinde bazı şifrelenmiş verilerin olduğunu gördüm.

<img class="aligncenter size-full wp-image-165" src="/assets/img/blog/hook.png" alt="" width="745" height="490" />

Bu şifreli verileri PHP decoder ile çözdüğümde flag e ulaştım.

<img class="aligncenter size-full wp-image-166" src="/assets/img/blog/flago.png" alt="" width="956" height="194" />
<h3 style="text-align: center;">flag_(oh_beee)</h3>

<hr />

<h3 style="text-align: left;">11. Soru</h3>
Kategori: Web

Zamanını seviyorsan sakın açma dosyayı.

https://drive.google.com/open?id=0B0vTgPSJlq-4MUV3djItMHZQLUE

<strong>İpucu</strong>: Hipnozdan çıkmaya çalış.

<strong>Çözüm</strong>: Verilen linkteki dosya bir html dosyasıydı ve açıldığı zaman otomatik olarak bir YouTube videosuna yönlendiriyordu. html dosyasını bir text editör ile açarak içindeki flag i kolay bir şekilde bulduk.

<img class="aligncenter size-full wp-image-167" src="/assets/img/blog/zikir.png" alt="" width="736" height="490" />
<h3 style="text-align: center;">flag_(you_shall_not_pass)</h3>

<hr />

<h3 style="text-align: left;">12. Soru</h3>
<strong>Kategori</strong>: Network

Bayrağı paket yakalamadan alabilir misin?

https://drive.google.com/open?id=0B0vTgPSJlq-4OHlLaUlLSFFrWHM

<strong>Çözüm</strong>: İndirdiğimiz pcap dosyasını WireShark yazılımı ile açıp herhangi bir pakete sağ tıklatıp follow sekmesinden TCP yi seçtiğimzde flag i bulduk.

<img class="aligncenter size-large wp-image-168" src="/assets/img/blog/wire1-1024x555.png" alt="" width="1024" height="555" /> <img class="aligncenter size-large wp-image-169" src="/assets/img/blog/wire2.png" alt="" width="910" height="741" />
<h3 style="text-align: center;">flag_(385b87afc8671dee07550290d16a8071)</h3>

<hr />

<h3 style="text-align: left;">13. Soru</h3>
<strong>Kategori</strong>: Network

https://drive.google.com/open?id=0B0vTgPSJlq-4VUppWlRrOHkwT0E

<strong>Çözüm</strong>: İndirdiğimiz dosya shattered.pcapng adlı bir dosya idi. WireShark yazılımı ile dosya formatını pcap e çevirdik. tcpflow -d2 -r shattered.pcap komutu ile dosyayı yeniden inşa ettik ve pcap dosyasının bulunduğu klasörde bir fotoğraf oluştu.

<img class="aligncenter size-full wp-image-170" src="/assets/img/blog/shar.png" alt="" width="736" height="490" />

Flag fotoğrafın hemen alt kısmındaydı.

<img class="aligncenter size-large wp-image-171" src="/assets/img/blog/shar2-1024x576.png" alt="" width="1024" height="576" />
<h3 style="text-align: center;">flag_(unshattered.jpg)</h3>

<hr />

<h3 style="text-align: left;">14. Soru</h3>
<strong>Kategori</strong>: Stegano

https://drive.google.com/open?id=0B0vTgPSJlq-4ZmlvUHJ3VFYxUHc

<strong>Çözüm</strong>: İndirdiğimiz index.png dosyasını <a href="https://incoherency.co.uk/image-steganography/">https://incoherency.co.uk/image-steganography/</a> sitesindeki araca yükledik ve karşımıza fotoğrafın içinde gömülü olan bir QR Code çıktı.

<img class="aligncenter size-full wp-image-172" src="/assets/img/blog/aram.png" alt="" width="715" height="564" />

Basit bir QR Code yazılımı ile kodu okuttuğumuzda flag e ulaştık.

<img class="aligncenter size-medium wp-image-173" src="/assets/img/blog/vb862R-300x221.jpg" alt="" width="300" height="221" />
<h3 style="text-align: center;">flag_(comar_mati)</h3>

<hr />

<h3 style="text-align: left;">15. Soru</h3>
<strong>Kategori</strong>: Stegano

Hackerımız arkasında sadece resim değil hashli birşeyler bırakmış.

https://drive.google.com/open?id=0B0vTgPSJlq-4cnZSQW1vbjIta1E

<strong>Çözüm</strong>: Bu soru diğerlerine göre daha kolaydı diyebilirim. İndirdiğimiz dosya bir jpg dosyası ve soruda hash bırakmış demiş. Aklıma ilk olarak "strings" komutu geldi.

<img class="aligncenter size-full wp-image-174" src="/assets/img/blog/bu1.png" alt="" width="736" height="490" />

Son satırda hash bilgisi yer alıyordu.

<img class="aligncenter size-full wp-image-175" src="/assets/img/blog/bu2.png" alt="" width="736" height="490" />
<h3 style="text-align: center;">flag_(16bbee7466db38dad50701223d57ace8)</h3>

<hr />
<p style="text-align: center;"></p>

</div>
</div>