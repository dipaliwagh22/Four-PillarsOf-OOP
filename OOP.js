
class LibraryBook {
    constructor( title, author) {
        this.title = title;     
        this.author = author; 
        this.isIssued = false;  
    }

    issue() {
        this.isIssued = true;   
    }
}
class Student {
    constructor(stdid, name) {
        this.name = name;   
        this.stdid = stdid; 
    }

    issueBook(book) {
        if (!book.isIssued) {
            book.issue();  
            console.log(`${this.name} has issued "${book.title}"`);
        } else {
            console.log(`"${book.title}" is already issued`);
        }
    }
}
class CollegeStudent extends Student {
    constructor(stdid, name) {
        super(stdid, name); 
    }
}

class SchoolStudent extends Student {
    constructor(stdid, name) {
        super(stdid, name); 
    }
}

const book1 = new LibraryBook('The Wings of Fire', 'APJ Kalam');
const book2 = new LibraryBook('The Wings of Fire', 'APJ Kalam');
const collegeStudent1 = new CollegeStudent(201, 'Arpita');
const collegeStudent2 = new CollegeStudent(202, 'Dipali');

collegeStudent1.issueBook(book1);
collegeStudent2.issueBook(book1);
collegeStudent2.issueBook(book2);


