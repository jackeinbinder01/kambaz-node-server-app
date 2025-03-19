export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
        const { a, b, operation } = req.query;
        let result = 0;
        switch (operation) {
            case "add":
                result = parseInt(a) + parseInt(b);
                break;
            case "subtract":
                result = parseInt(a) - parseInt(b);
                break;
            case "multiply":
                result = parseInt(a) * parseInt(b);
                break;
            case "divide":
                if (Number(b) == 0) {
                    return res.send("Divide by 0 error!");
                }
                result = Number(a) / Number(b);
                break;
            default:
                result = "Invalid Operation";
        }
        res.send(result.toString());
    });
}