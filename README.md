# JC Client

This project was developed by Brian W. Drake to work with JumpCloud's UI Engineer Assignment.  It was built with Angular 8 as the web framework.  No third party libraries or frameworks were used, just the standard angular framework and RXJS.

# TODOs

Lots of stuff I would continue to work on, refactor, and document, not to mention some feature additions.  A few are listed here.

* Documentation -- comments are few and far between here.  I am a believer in self-documenting code, but that doesn't mean that judicious placement of comments isn't a good idea.  They should elaborate on aspects of the code that aren't immediately obvious, without cluttering up self-evident sections.

* Refactoring -- The app is fairly simple and has good modularity I think for the most part.  There are a few areas where I would extract code into its own component.  Some reusable components for data fields in the editor dialog, for example.  Another case would be building proper data models instead of making liberal use of the "any" data structure, which tends to get abused in javascript.  In typescript, _any_ is usually a no-no.  

* Future Features -- I stubbed out a search function at the top of the form and did not get a chance to fully implement, so of course that and filtering would be my top priorities for additions.


Thanks!

Brian W. Drake
September 2019
