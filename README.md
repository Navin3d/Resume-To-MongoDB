# Data-Extraction-From-PDF
This is an sample project used to extract traxt or string from the given pdf.

## TODO:
- Make multiple user persistance.
- Error handling.
- Proper logging should be done. It's not working fine now.

## Existing Problems
- resume-parser is not parsing Indian Moble Numbers.
- My own parser is capable of parsing only the Linked-In resumes.
- Fields in mongodb varies with different resumes summary and about me gives the same meaning but still varing headers will create issue in persisting data in to db that has to be resolved.

## Concerns
- What to do in case resume dont have emails or mobile numbers? we can't use OSINT in that case.
- It would be better if we have an fixed resume templates.

## Installations
To have have this utility running in your computer follow these steps:

- To use this you must need to clone this [repo](https://github.com/perminder-klair/resume-parser.git) and replace the existing resume-parser from the node_modules as its not aupdated in npm library.
- If you are going to work with pdf you need to [download](http://www.xpdfreader.com/download.html) and install this.
- If you are going to work with doc [download](http://www.wagner.pp.ru/~vitus/software/catdoc/) and install this.

## References
- https://github.com/perminder-klair/resume-parser
- https://github.com/likerRr/code4goal-resume-parser
