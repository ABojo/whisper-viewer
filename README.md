# whispers-latest-client

This client displays the latest posts made on an anonymous posting app called <a href='https://apps.apple.com/us/app/whisper-share-express-meet/id506141837'>Whisper</a>. Some of the content posted will contain sexually explicit material and inappropriate/offensive language.
Please only test the app if you're ok with potentially being exposed to such content.

You can test this app here: https://abojo.github.io/whispers-latest-client/

My process for creating this was:
<ul>
<li>Reverse engineering Whisper's private API</li>
<li>Writing a server that will authenticate with Whisper and request the latest posts from them</li>
<li>Building this React based front end to allow users to view the posts + refresh them</li>
</ul>

I reverse engineered Whisper's private API by decompiling their APK file to see how the various auth tokens were being generated and using a rooted android with SSL unpinning + a MITM proxy to view the requests the app was making.

I created an express server that is responsible for authenticating with their servers and making requests for the latest posts before returning a formatted response to this front end.

I am NOT going to open source the code for the server I wrote as it would reveal details about Whisper's private API.

This app was built with:
<ul>
  <li><a href='https://github.com/expressjs/express'>Express</a></li>
  <li><a href='https://github.com/facebook/react'>React</a></li>
  <li><a href='https://github.com/tailwindlabs/tailwindcss'>TailwindCSS</a></li>
</ul>
