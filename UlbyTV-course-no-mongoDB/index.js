const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const parseJson = require("./framework/parseJson");
const parseURL = require("./framework/parseURL");

const PORT = process.env.PORT ?? 5000;

const app = new Application();

app.use(parseJson);
app.use(parseURL(`http://localhost:${PORT}`));
app.addRouter(userRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
