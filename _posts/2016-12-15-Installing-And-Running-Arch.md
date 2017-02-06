---
published: true
layout: default_blog
title: Installing And Running Arch
---
{{page.title}}
==============

So, I've dabbled with Linux in some form or another for a while. I've installed and uninstalled 
Ubuntu and Mint several times on my laptops and dual booted onto my desktop once or twice. 
But I've never had the ability to stick with it either because of University commitments or the need to play Windows games.
However more and more games being made or ported to Linux and outside of working at Inspired currently I have no real ties to running Windows on my own machines anymore.

To re-start my journey into Linux I've probably gone the hardest route and decided to install Arch onto my Notebook. Luckily on the Arch Wiki there is a really detailed 
[Installation Guide](https://wiki.archlinux.org/index.php?title=Installation_guide&redirect=no). The Arch Wiki has also proved to be an invaluable guide to any questions I had to ask.
Soon after installation ( and a little trouble getting my Wifi to auto connect to known network profiles ) I started looking for a window manager. So far I've only had the chance to try 'i3-gaps'
which is a fork of the i3 tiling window manager which provides a minimal border for the windows. This gave me a great opportunity to try building and installing a package through the Arch User Repository
and the 'makepkg' command. MakePkg is a utility for building and installing packages from the AUR. I rather enjoyed the process of building and installing the software myself.

I've also been investigating the method of devloping in C++ under Linux. It's a lot more involved and provides much less assistance than with Visual Studio! So far I've been compiling
make files with 'gcc'. This method works well for small projects but I imagine it to be more cumbersome in larger projects. Perhaps I am looking at it the wrong way, maybe lots of smaller 
utilities can provide the functionality of larger applications.

Future work from here is to provide my own Linux server with which I can sync notes onto my other devices. Perhaps even sync config files through it!
