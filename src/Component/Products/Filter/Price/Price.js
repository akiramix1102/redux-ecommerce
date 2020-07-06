import React, { Component } from 'react';
import InputRange from 'react-input-range';
import priceStyles from './Price.module.scss'

class Price extends Component {
    constructor(props) {

        super(props);
        this.state = {
            value: {
                min: 10,
                max: 80,
            }
        };
    }
    render() {
        const {getData}=this.props;
        const {min,max}=this.state.value;
        
        const handChangeMin = e => {
            this.setState({
                value: {
                    min: e.target.value,
                    max: this.state.value.max
                }
            })

        }

        const handChangeMax = e => {
            this.setState({
                value: {
                    min: this.state.value.min,
                    max: e.target.value
                }
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            getData(min,max)
        }
        return (
            <div className={priceStyles["price-range"]}>
                <h4>Price</h4>
                <form className={priceStyles["form"]} onSubmit={e=>handleSubmit(e)}>
                    <InputRange
                        maxValue={200}
                        minValue={0}
                        formatLabel={value => `${value} $`}
                        value={this.state.value}
                        onChange={value => this.setState({ value: value })}
                        onChangeComplete={value => console.log(value)} />
                    <div className={priceStyles.input}>
                        <input type="text" value={this.state.value.min} onChange={(e) => handChangeMin(e)} />
                        <input type="text" value={this.state.value.max} onChange={(e) => handChangeMax(e)} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Price;