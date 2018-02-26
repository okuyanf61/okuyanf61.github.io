---
layout: page
title: Contact Me
permalink: /contact/
---

<form accept-charset="UTF-8" method="POST" action="https://formspree.io/{{ site.email }}" ref="contact">
      <fieldset>
        <input type="hidden" name="_subject" value="New contact!" />
        <input type="hidden" name="_language" value="en" />
        <input type="text" name="name" placeholder="Your name">
        <input type="text" name="email" placeholder="Your e-mail">
        <textarea name="message" placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </fieldset>
</form>
