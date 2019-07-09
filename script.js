var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
		console.log('Metoda ta jest wywoływana przed przed wywołaniem metody render')
      },
      
    componentDidMount: function () {
          console.log('Metoda ta pozwala zakutalizować stan komponentu przy wywołaniu np Ajax')
    },

    componentWillReceiveProps: function() {
        console.log('Do metody tej przekazywany jest obiekt zawierający nowe propsy i dzięki tej metodzie możemy sprawdzić czy komponent zostanie odświeżony po otrzymaniu nowych propsów');
    },

    shouldComponentUpdate: function() {
        console.log("Dzięki tej metodzie możemy zadecydować czy komponent ma się odświeżyć");
    },

    componentWillUpdate: function() {
        console.log("Metoda ta jest podobna do metody componentWillMount, jest ona również wywoływana przed metodą render");
    },

    componentDidUpdate: function() {
        console.log('Metoda ta w argumentach zawiera poprzednie stany i propsy, również dzięki niej możemy zakutalizować stan komponentu');          
    },

    componentWillUnmount: function() {
        console.log('Metoda ta nie przyjmuje żadnych argumentów i możemy jej użyć do czyszczenia, oraz anulowania żądań')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    }
});

var element = React.createElement ('div', {},
 React.createElement(Counter),
 React.createElement(Counter),
 React.createElement(Counter)
)

ReactDOM.render(element, document.getElementById('app'));