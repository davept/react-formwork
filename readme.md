# React-Formwork

**A ReactJS higher order component (HoC) to generate an HTML form from a Javascript object.**

#### Using:

1) Install from npm:

`npm install --save react-formwork`

2) Import:

`import Formwork from './formwork'` 

3) Wrap a form component with the Formwork HoC:
```
class MyForm extends Component {
    render() {
        const { elements, submit, data } = this.props.formwork;
        return (
            <form>
                {elements}
                {submit}
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </form>
        )
    }
}

const model = {
    name: 'David',
    email: 'a@b.c',
    jobTitle: 'Developer'
};

export default Formwork(MyForm, {
    elements: model,
    data: model
});
```

In the example above we pass our JS object `model` to the `Formwork` HoC.  We pull the generated HTML form fields, the submit button and our bound data object from `props.formwork`'

#### Conventions

* If no title is supplied the name will be used.  In this case the name will be split by capital letters or spaces into words.
  This works in most cases.  Notably it fails for acronyms such as ISBN where you get "I S B N"  In failure cases you should
  supply a title.  N.b., spaces are legal in HTML form names and JavaScript object property names.
* An array supplied to elements means full definitions are included.  The expectation then is that each array element is an object containing form element definitions.
* An object supplied to elements means text names only.  The reason is so that a form can easily be constructed from a json object. 

#### Testing

npm run test

#### Create dist build

npm run dist

#### ToDo

* Add functional tests for validation
