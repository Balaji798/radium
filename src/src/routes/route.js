const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModal.js")

const BookController= require("../controllers/bookController.js")

//const newBookModel= require("../models/newbookModel")
//const authorModel= require("../models/authorModel")
//const authorController= require("../controllers/authorController")
//const newbookController= require("../controllers/newbookController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook',  BookController.createBook  );
router.get('/getAllBook',  BookController.getBooksData  );
//mongo session3:
//router.post('/createAuthor', bookController.createBook);
//router.get('/getAllAuthor',bookController.getBooksData);
//router.post('/createBooks',bookController.createBooks);
//router.get('/getAllBook',  bookController.getBooksData  );
//router.get('/getFirstBook',  bookController.getBooksData  );
router.post('/createBook',  BookController.createBook  );

router.get('/bookList',  BookController.getBooksData  );

router.post('/getBooksInYear',  BookController.getBooksInYear  );

router.post('/getParticularBooks',  BookController.getParticularBooks );

router.post('/getXINRBooks',  BookController.getXINRBooks );

router.post('/getRandomBooks',  BookController.getRandomBooks );

module.exports = router;