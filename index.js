import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let NEWITEMS=[];
app.get("/", (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();    
    let day = today.toLocaleDateString("en-US", options);

    res.render("index.ejs", { kindofday: day, newlistitem : NEWITEMS} );
});

app.post("/submit", (req,res) => {
    NEWITEMS=[];
    res.redirect("/");
});

app.post("/" , (req,res) => {
    let newitem=req.body.newitem;
    NEWITEMS.push(newitem);
    res.redirect("/");
});

app.get("/delete/newlistitem/:_id" , (req,res) => {
    const {_id} = req.params;
    newlistitem.deleteOne({_id});
    app.then(() => {
        res.redirect("/");
    });
    app.catch(err => console.log(err));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });