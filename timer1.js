const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('undefined1');
} else if (args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0) {
      console.log('undefined2');
    }
    if (isNaN(args[i])) {
      console.log('undefined3');
    } else {
  
      setTimeout(() => {
        process.stdout.write('\x07');
      },(args[i] * 1000));
    }
  }
}
