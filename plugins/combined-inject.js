export default ({ app }, inject) => {
  inject('myInjectedFunction2', (string) => console.log('That was easy!', string))
}