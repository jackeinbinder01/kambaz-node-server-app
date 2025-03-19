export default function PathParameters(app) {
    app.get("/lab5/add/:a/:b", (req, res) => {
        const { a, b, } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
    });
    app.get("/lab5/subtract/:a/:b", (req, res) => {
        const { a, b, } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
    });
    app.get("/lab5/multiply/:a/:b", (req, res) => {
        const { a, b, } = req.params;
        const sum = parseInt(a) * parseInt(b);
        res.send(sum.toString());
    });
    app.get("/lab5/divide/:a/:b", (req, res) => {
        const { a, b, } = req.params;
        if (Number(b) == 0) {
            return res.send("Divide by 0 error!");
        }
        const sum = Number(a) / Number(b);
        res.send(sum.toString());
    });
}