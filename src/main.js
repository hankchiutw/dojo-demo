require(['src/entities', 'dojo/dom', 'src/widgets/loader'], function({ User }, dom) {
  const user = new User();
  console.log('xxx: User', user, dom);
});
