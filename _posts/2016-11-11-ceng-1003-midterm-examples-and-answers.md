---
layout: post
title: "CENG 1003 Midterm Examples and Answers"
date: 2016-11-11 20:51:39
image: '/assets/img/blob-image.png'
description: 'CENG 1003 Midterm Examples and Answers'
tags:
- ceng
- python
- english
categories:
- english
twitter_text: 'CENG 1003 Midterm Examples and Answers'
---

Here are some example questions for our upcoming midterm exam. Think like a Python interpreter and do your best :)
<h1 style="text-align: center;">Question 1</h1>
<img class="aligncenter size-full wp-image-68" src="/assets/img/blog/1.png" alt="1" width="631" height="355" />
<h3>Answer:</h3>
{% highlight python %}
2 30 5
14 28 0
{% endhighlight %}

&nbsp;

<hr />

<h1 style="text-align: center;">Question 2</h1>
&nbsp;

<img class="aligncenter size-full wp-image-69" src="/assets/img/blog/2.png" alt="2" width="634" height="529" />
<h3>Answer:</h3>
{% highlight python %}
q2(__3_ , __2__) Answer1 q2(__5_ , __5__) Answer5
q2(__8_ , __4__) Answer2 q2(__2_ , __3__) Answer6
q2(_11_ , __1__) Answer3 q2(__3_ , __4__) Answer7
q2(_10_ , _11__) Answer4 q2(__0_ , __0__) Answer8
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 3</h1>
&nbsp;

<img class="aligncenter size-full wp-image-70" src="/assets/img/blog/3.png" alt="3" width="633" height="185" />
<h3>Answer:</h3>
{% highlight python %}
5 0
10 2
15 4
{% endhighlight %}

&nbsp;

<hr />

<h1 style="text-align: center;">Question 4</h1>
&nbsp;

<img class="aligncenter size-full wp-image-71" src="/assets/img/blog/4.png" alt="4" width="633" height="209" />
<h3>Answer:</h3>
{% highlight python %}
XXX:A.?B.?C.?5
XXX:A.?B.?C.?6
XXX:A.?B.?C.?7
XXX:A.!B.!C.!8
XXX:A.!B.!C.!9
YYY
{% endhighlight %}

&nbsp;

<hr />

<h1 style="text-align: center;">Question 5</h1>
&nbsp;

<img class="aligncenter size-full wp-image-72" src="/assets/img/blog/5.png" alt="5" width="634" height="328" />
<h3>Answer:</h3>
{% highlight python %}
Answer 1: 3
Answer 2: 4 10
{% endhighlight %}

&nbsp;

<hr />

<h1 style="text-align: center;">Question 6</h1>
&nbsp;

<img class="aligncenter size-full wp-image-73" src="/assets/img/blog/6.png" alt="6" width="619" height="143" />
<h3>Answer:</h3>
{% highlight python %}
animal1 = input("Give me an animal name: ")
while len(animal1) &lt; 5:
print("Animal name must include at least 5 characters!")
animal1 = input("Give me an animal name: ")
animal2 = input("Give me an another animal name: ")
while len(animal2) &lt;= len(animal1):
print("Second animal name must include more characters than first animal name!")
animal2 = input("Give me an animal name: ")
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 7</h1>
&nbsp;

<img class="aligncenter size-full wp-image-74" src="/assets/img/blog/7.png" alt="7" width="635" height="273" />
<h3>Answer:</h3>
{% highlight python %}
34
37
40
44
44
k = 13
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 8</h1>
&nbsp;

<img class="aligncenter size-full wp-image-75" src="/assets/img/blog/8.png" alt="8" width="619" height="424" />
<h3>Answer:</h3>
<img class="aligncenter size-full wp-image-67" src="/assets/img/blog/Q8.jpg" alt="q8" width="269" height="238" />

&nbsp;

<hr />

<h1 style="text-align: center;">Question 9</h1>
&nbsp;

<img class="aligncenter size-full wp-image-76" src="/assets/img/blog/9.png" alt="9" width="616" height="504" />
<h3>Answer:</h3>
{% highlight python %}
def query_point(x1, y1, x2, y2, x3, y3):
if x1 == x3 or x2 == x3:
print("on edge")
elif y1 == y3 or y2 == y3:
print("on edge")
elif x1 &lt; x3 &lt; x2 and y1 &lt; y3 &lt; y2:
print("inside")
elif x2 &lt; x3 &lt; x1 and y2 &lt; y3 &lt; y1:
print("inside")
elif x1 &lt; x3 &lt; x2 and y2 &lt; y3 &lt; y1:
print("inside")
elif x2 &lt; x3 &lt; x1 and y1 &lt; y3 &lt; y2:
print("inside")
else:
print("outside")
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 10</h1>
&nbsp;

<img class="aligncenter size-full wp-image-77" src="/assets/img/blog/10.png" alt="10" width="612" height="318" />
<h3>Answer:</h3>
{% highlight python %}
def middle(a, b, c):
if a &gt; b &gt; c or c &gt; b &gt; a:
print(b)
if b &gt; c &gt; a or a &gt; c &gt;b:
print(c)
if c &gt; a &gt; b or b &gt; a &gt; c:
print(a)
if a == b or b == c or a == c:
print("error")
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 11</h1>
&nbsp;

<img class="aligncenter size-full wp-image-78" src="/assets/img/blog/11.png" alt="11" width="633" height="280" />
<h3>Answer:</h3>
{% highlight python %}
This function finds the number of numbers that has bigger value than aritmetic mean of a list of numbers
Bu fonksiyon sayı dizisindeki aritmetik ortalamadan büyük sayıların sayısını bulur
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 12</h1>
&nbsp;

<img class="aligncenter size-full wp-image-79" src="/assets/img/blog/12.png" alt="12" width="631" height="259" />
<h3>Answer:</h3>
{% highlight python %}
def fact(n):
r = 1
while (n&gt;=2):
r = r * n
n = n - 1
return r
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 13</h1>
&nbsp;

<img class="aligncenter size-full wp-image-80" src="/assets/img/blog/13.png" alt="13" width="633" height="198" />
<h3>Answer:</h3>
{% highlight python %}
Expression Value Expression Value
5*3-2**2 6 20%(5+2)*3 18
24/6*2 8 (48/(10-2))-(57//8)+2 1
10*(1+(1+3)**(12%5)-2) 150 (7-4)*3-(8-9) 10
{% endhighlight %}

<hr />

<h1 style="text-align: center;">Question 14</h1>
&nbsp;

<img class="aligncenter size-full wp-image-81" src="/assets/img/blog/14.png" alt="14" width="651" height="610" /> <img class="aligncenter size-full wp-image-82" src="/assets/img/blog/14-2.png" alt="14-2" width="613" height="138" />
<h3>Answer:</h3>
{% highlight python %}
a = 20
b = 9
while a &gt; b:
if b % 2 == 0:
a -= 1
b += 3
elif b % 3 == 0:
b -= 1
else:
b += 1
a -= 1
print(str(a) + " " + str(b))
print("DONE")
{% endhighlight %}

<hr />