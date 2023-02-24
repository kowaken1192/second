function update( _v ) 
    {
        document.querySelector( 'input' ).value = _v
    }



    function calc() 
    {
        const v = document.querySelector( 'input' ).value
        try {
            const f = new Function( 'return ' + v )
            update( f().toString() )
        } catch( _error ) {
            update( _error ) 
        }
    }
    let lastInputIsOperator = false;


function update(value) {
    const displayValue = value instanceof Error ? '' : value;
    document.querySelector('input').value = displayValue;
    lastInputIsOperator = false;
}

function append(value) {
    if (lastInputIsOperator && (value === '+' || value === '-' || value === '*' || value === '/')) {
     
        return;
    }
    document.querySelector('input').value += value;
    lastInputIsOperator = (value === '+' || value === '-' || value === '*' || value === '/');
}

function evaluate() {
    const input = document.querySelector('input').value;
    let result = '';

    if (input) {
        try {
            result = eval(input);
        } catch (error) {
            result = 'Error';
        }
    }
    update(result);
}

function append(value) {
    const input = document.querySelector('input');
    if (lastInputIsOperator && (value === '+' || value === '-' || value === '*' || value === '/')) {
      return;
    } else if (input.value === '0' && value !== '.') {
      input.value = value;
    } else if (input.value === '00' && value !== '.') {
      input.value = value;
    } else if (input.value === '' && value === '.') {
      input.value = '';
    } else if (input.value.includes('.') && value === '.') {
      return;
    } else {
      input.value += value;
    }
    lastInputIsOperator = (value === '+' || value === '-' || value === '*' || value === '/');
  }
  
