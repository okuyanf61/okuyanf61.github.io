---
layout: page
title: Contact Me
permalink: /contact/
---

<style type="text/css" media="screen">
  .container {
    margin: 0px auto;
    max-width: 600px;
  }
  /* latin-ext */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium Web Light'), local('TitilliumWeb-Light'), url(https://fonts.gstatic.com/s/titilliumweb/v6/NaPDcZTIAOhVxoMyOr9n_E7ffGjEGIVzY4SY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium Web Light'), local('TitilliumWeb-Light'), url(https://fonts.gstatic.com/s/titilliumweb/v6/NaPDcZTIAOhVxoMyOr9n_E7ffGjEGItzYw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(https://fonts.gstatic.com/s/titilliumweb/v6/NaPecZTIAOhVxoMyOr9n_E7fdM3mDbRS.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(https://fonts.gstatic.com/s/titilliumweb/v6/NaPecZTIAOhVxoMyOr9n_E7fdMPmDQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  src: local('Titillium Web Bold'), local('TitilliumWeb-Bold'), url(https://fonts.gstatic.com/s/titilliumweb/v6/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGIVzY4SY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  src: local('Titillium Web Bold'), local('TitilliumWeb-Bold'), url(https://fonts.gstatic.com/s/titilliumweb/v6/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzYw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  .contact-form {
 font-family:'Titillium Web','Helvetica Neue',Helvetica,sans-serif;
 font-weight:700;
 font-style:normal;
 padding:.625rem;
}
.contact-form fieldset {
 border:none;
 font-weight:normal
}
.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea {
 -webkit-box-sizing:border-box;
 box-sizing:border-box;
 outline:none;
 display:block;
 color:#333;
 width:100%;
 padding:7px;
 border:none;
 border-bottom:1px solid #ddd;
 margin-bottom:10px;
 font-family:inherit;
 font-size:1.125rem;
 height:2.813rem;
}
.contact-form input[type="text"].has-error,.contact-form input[type="email"].has-error,.contact-form textarea.has-error {
 border-color:#f04242
}
.contact-form textarea {
 height:12.5rem
}
.contact-form span {
 display:block;
 font-size:.875rem;
 color:#f04242;
 padding-bottom:.625rem
}
.contact-form button[type="submit"] {
 display:block;
 padding:19px 39px 18px 39px;
 color:#fff;
 background:#ff0a16;
 font-size:1.125rem;
 width:100%;
 border:1px solid #ba0009;
 border-width:1px 1px 3px;
 margin-top:3.125rem;
 margin-bottom:.625rem;
 cursor:pointer;
 -webkit-transition:all .3s;
 transition:all .3s;
 outline:none;
}
.contact-form button[type="submit"]:hover {
 background:#d4000a
}
.contact-form [v-cloak] {
 display:none
}
</style>

<div class="container">

  <h2>Talk to me</h2>

  <div id="form" class="contact-form">
    <form accept-charset="UTF-8" method="POST" action="https://formspree.io/{{ site.email }}" v-on:submit.prevent="validateBeforeSubmit" ref="contact">
      <fieldset>
        <input type="hidden" name="_subject" value="New contact!" />
        <input type="hidden" name="_next" value="{{ site.url }}/contact/message-sent/" />
        <input type="hidden" name="_language" value="en" />

        <input type="text" name="name" placeholder="Your name" v-validate="'required'"
               :class="{ 'has-error': errors.has('name') }">
        <span v-if="errors.has('name')" v-cloak>${ errors.first('name') }</span>

        <input type="text" name="email" placeholder="Your e-mail" v-validate="'required|email'"
               :class="{ 'has-error': errors.has('email') }">
        <span v-if="errors.has('email')" v-cloak>${ errors.first('email') }</span>

        <textarea name="message" onkeyup="adjust_textarea(this)" placeholder="Your message" v-validate="'required'"
                  :class="{ 'has-error': errors.has('message') }"></textarea>
        <span v-if="errors.has('message')" v-cloak>${ errors.first('message') }</span>

        <button type="submit">Send</button>
      </fieldset>
    </form>
  </div>

</div>

<script type="text/javascript">
function adjust_textarea(h) {
    h.style.height = "200px";
    h.style.height = (h.scrollHeight)+"px";
}
</script>

<script src="https://unpkg.com/vue@2.4.2"></script>
<script src="https://unpkg.com/vee-validate@2.0.0-rc.8"></script>
<script type="text/javascript">
Vue.use(VeeValidate);

new Vue({
  el: '#form',
  delimiters: ['${', '}'],
  methods: {
    validateBeforeSubmit: function () {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        this.$refs.contact.submit();
      }
    }
  }
});
</script>
