/**
 * Created by madan.tamang on 12/31/2016.
 */

var bookController = require('../controllers/bookController');

/* GET users listing. */
router.get('/', bookController.getBookList());

router.get('/create',authentication,function (req,res) {
    res.render("index")
} );
router.get('/update',authentication,function (req,res) {
    res.render("book/create")
} );
