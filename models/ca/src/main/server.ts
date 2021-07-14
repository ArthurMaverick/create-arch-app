import app from './config/app'
const port = process.env.PORT || 4242

app.listen(
  port, () => console.log(`server runnig in localhost:${port}`)
)