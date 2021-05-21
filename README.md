# Tools for authoring and serving codelabs

[![Demo](https://storage.googleapis.com/claat/demo.png)](https://storage.googleapis.com/claat/demo.mp4)

Codelabs are interactive instructional tutorials, which can be authored in Jupyter notebooks and markdowns
using some simple formatting conventions. You can also author codelabs using Google docs.
This repo contains all the tools and documentation you’ll need for building and publishing
your own codelabs.

## Important resources
1. [Codelab Formatting Guide](FORMAT-GUIDE.md)
3. [Google Codelabs site](https://g.co/codelabs)
3. [Codelab Tool Official GitHub](https://github.com/googlecodelabs/tools)
4. [Check out this excellent tutorial](https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd)
5. [Check out this another tutorial](https://www.marcd.dev/codelab-4-codelab/#0)

## What is this?

For the past 3+ years, the CLaaT (Codelabs as a Thing) project has given developers around the
world a hands-on experience with Google products and tools.  We’ve accumulated over 500 high quality
codelabs, served millions of web visitors, and supported over 100 events, from local meetups
all the way up to Google I/O.

This project has been implemented as a volunteer project by a small group of dedicated Googlers
who care deeply about this kind of “learning by doing” approach to education.

## What's special about this tool?

* Powerful and flexible authoring flow via Google Docs
* Optional support for authoring in Markdown text
* Ability to produce interactive web or markdown tutorials without writing any code
* Easy interactive previewing
* Usage monitoring via Google Analytics
* Support for multiple target environments (kiosk, web, markdown, offline, etc.)
* Support for anonymous use - ideal for public computers at developer events
* Looks great, with a responsive web implementation
* Remembers where the student left off when returning to a codelab
* Mobile friendly user experience

## Can I use this to create my own codelabs and serve my own codelabs online?

Yes, this repo can be used by anyone to author their
own codelabs and to serve up their own codelabs on the web.

## Where did this come from?

For several years, Googlers would rush to build new tutorials and related assets for our
annual developer event, Google I/O. But every year the authoring platform and distribution
mechanism changed. As a result, there was little reuse of content and serving infrastructure,
And every year we essentially kept reinventing the same wheel.

For Google I/O 2014, Shawn Simister wrote a Python program which retrieved
specially formatted documents from Google Drive, parsed them, and generated
a nice interactive web-based user experience. This allowed authors to design their
codelabs using Google Docs, with its great interactivity and collaboration features,
and automatically convert those documents into beautiful web based tutorials,
without needing to write a single line of code.

Later, Ewa Gasperowicz wrote a site generator, supporting the ability to
publish custom landing pages, with associated branding and an inventory of codelabs
specially curated for a given event.

Alex Vaghin later rewrote Shawn's Python program as a statically linked Go program (the claat command in this repo), eliminating many runtime dependencies, improving translation
performance. Alex also added, among many other enhancements, a proper abstract syntax
tree (to facilitate translation to different output formats), an app engine based previewer, an extensible rendering engine, support for generating markdown output. Alex also wrote the web serving infrastructure, the build tooling (based on gulp), and, with the author, the ability to self-publish codelabs directly from the preview app.

Clare Bayley has been the guru of onsite codelab experiences, running events large and small, while Sam Thorogood and Chris Broadfoot made major contributions to the onsite kiosks you may have seen at Google I/O.

Eric Bidelman redesigned the codelab user interface using Polymer components and built the g.co/codelabs landing page, to provide a beautiful user experience that looks great and works equally well on desktop and mobile devices.

Lots of other contributions have been made over the years and I’m sure that I’m neglecting some important advances but for the sake of brevity, I’ll leave it at that.

## Acknowledgements

Google Codelabs exists thanks to the talents and efforts of many fine volunteers, including:
Alex Vaghin, Marc Cohen, Shawn Simister, Ewa Gasperowicz, Eric Bidelman, Robert Kubis, Clare Bayley, Cassie Recher, Chris Broadfoot, Sam Thorogood, Ryan Seys, and the many codelab authors, inside and outside of Google, who have generated a veritable [treasure trove of content](https://g.co/codelabs).

## Notes

This is not an official Google product.
