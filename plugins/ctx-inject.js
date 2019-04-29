export default ({ app }, inject) => {
  app.myInjectedFunction = (string) => console.log('OKey, another function', string)
}