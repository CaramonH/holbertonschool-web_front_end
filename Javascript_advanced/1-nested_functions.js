let globalVariable = 'Welcome';

function outer() {
    alert(globalVariable);

    const course = 'Holberton';

    function inner() {
        alert(`${globalVaraible} ${course}`);

        const exclamation = '!';

        function inception() {
            alert(globalVariable + ' ' + course + exclamation)
        }
        inception();
    }
    inner();
}
outer();
