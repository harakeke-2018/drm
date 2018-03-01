import React from 'react'

// import Quote from './Quote'
import LoginForm from './LoginForm'
import Log from './Log'
import StockItem from './StockItem';
// import Navbar from './Navbar'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                { id: 1, type: 'water', quantity: 30, },
                { id: 2, type: 'blankets', quantity: 1 },
                { id: 3, type: 'matches', quantity: 500 },
                { id: 4, type: 'face paint', quantity: 99999 },
                { id: 5, type: 'dragon', quantity: 1 },
                { id: 6, type: 'nuclear thermometer', quantity: 5 }
                ]
        }
    }


    render() {
        return (
            <div>
                <h1>Hello</h1>

                {/* Table Div */}

                <div style={{width: 800}}>

                    {this.state.items.map((item, id) => {
                        return <div key={id}>
                            <StockItem item={item} />
                        </div>
                    })}
                </div>


                <LoginForm />


                {/* <Navbar /> */}
                {/* <div className='quote'>
                <Quote />
                </div> */}
            </div>
        )
    }

}

export default Home
