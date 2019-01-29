module.exports = {
  matchParenFunctional: str => {
    let isValid = true;
    const stack = [];

    str.split('').forEach(element => {
      if (element === '(') {
        stack.push(element);
      } else if (element === ')') {
        // take a peek the top of the stack
        if (stack[stack.length - 1] === '(') {
          stack.pop(); // remove the top item
        } else {
          // no matching pair, so the state becomes false
          isValid = false;
        }
      }
    });
    if (stack.length) {
      return false;
    }
    return isValid;
  },
  matchParenBreak: str => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(str[i]);
      } else if (str[i] === ')') {
        // take a peek the top of the stack
        if (stack[stack.length - 1] === '(') {
          stack.pop(); // remove the top item
        } else {
          // no matching pair, so the state becomes false
          return false;
        }
      }
    }
    if (stack.length) {
      return false;
    }
    return true;
  },

  matches: str => {
    const checks = ['()', '{}', '[]', '<>'];
    const open = {};
    const close = {};

    checks.forEach(item => {
      const [key, value] = [item[0], item[1]];
      open[key] = value;
      close[value] = key;
    });

    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (open[str[i]]) {
        stack.push(str[i]);
      } else if (close[str[i]]) {
        // take a peek the top of the stack
        if (stack[stack.length - 1] === close[str[i]]) {
          stack.pop(); // remove the top item
        } else {
          // no matching pair, so the state becomes false
          return false;
        }
      }
    }
    if (stack.length) {
      return false;
    }
    return true;
  },
};
